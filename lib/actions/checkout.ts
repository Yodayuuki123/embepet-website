"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import Stripe from "stripe";
import { z } from "zod";
import { db } from "@/lib/db";
import { getCart, cartTotals, CART_COOKIE } from "@/lib/cart";
import { getAppliedCoupon } from "@/lib/coupon";
import { getSession } from "@/lib/auth";
import { getSettings } from "@/lib/settings";
import { orderNumber } from "@/lib/format";
import { absoluteUrl } from "@/lib/seo";
import { localePath } from "@/lib/i18n";

export type CheckoutState = { error?: string } | null;

const addressSchema = z.object({
  email: z.string().email("Please enter a valid email"),
  fullName: z.string().min(1, "Full name is required"),
  line1: z.string().min(1, "Street address is required"),
  line2: z.string().optional(),
  city: z.string().min(1, "City is required"),
  state: z.string().min(1, "State is required"),
  zip: z.string().min(3, "ZIP code is required"),
  country: z.string().default("US"),
});

export async function placeOrder(_prev: CheckoutState, formData: FormData): Promise<CheckoutState> {
  const parsed = addressSchema.safeParse({
    email: formData.get("email"),
    fullName: formData.get("fullName"),
    line1: formData.get("line1"),
    line2: formData.get("line2") ?? undefined,
    city: formData.get("city"),
    state: formData.get("state"),
    zip: formData.get("zip"),
    country: "US",
  });
  if (!parsed.success) return { error: parsed.error.issues[0].message };
  const address = parsed.data;

  const cart = await getCart();
  if (!cart || cart.items.length === 0) return { error: "Your cart is empty" };

  for (const item of cart.items) {
    if (item.variant.stock < item.qty) {
      return { error: `${item.variant.product.name} (${item.variant.name}) only has ${item.variant.stock} left in stock` };
    }
  }

  const settings = await getSettings();
  const { subtotalCents } = cartTotals(cart);
  const coupon = await getAppliedCoupon(subtotalCents);
  const discountCents = coupon?.discountCents ?? 0;
  const shippingCents =
    subtotalCents - discountCents >= settings.freeShippingThresholdCents ? 0 : settings.flatShippingCents;
  const totalCents = subtotalCents - discountCents + shippingCents;

  const session = await getSession();
  const number = orderNumber();

  const order = await db.order.create({
    data: {
      number,
      userId: session?.uid ?? null,
      email: address.email.toLowerCase(),
      status: "PENDING",
      subtotalCents,
      discountCents,
      shippingCents,
      totalCents,
      couponCode: coupon?.code ?? null,
      shippingAddress: JSON.stringify(address),
      paymentMethod: process.env.STRIPE_SECRET_KEY ? "stripe" : "dev_mock",
      items: {
        create: cart.items.map((item) => ({
          variantId: item.variantId,
          productSlug: item.variant.product.slug,
          productName: item.variant.product.name,
          variantName: item.variant.name,
          colorKey: item.variant.product.colorKey,
          format: item.variant.product.format,
          unitCents: item.variant.priceCents,
          qty: item.qty,
        })),
      },
    },
  });

  const stripeKey = process.env.STRIPE_SECRET_KEY;

  if (stripeKey) {
    const stripe = new Stripe(stripeKey);
    const checkout = await stripe.checkout.sessions.create({
      mode: "payment",
      customer_email: address.email,
      line_items: cart.items.map((item) => ({
        quantity: item.qty,
        price_data: {
          currency: "usd",
          unit_amount: item.variant.priceCents,
          product_data: {
            name: item.variant.product.name,
            description: item.variant.name,
          },
        },
      })),
      ...(shippingCents > 0
        ? {
            shipping_options: [
              {
                shipping_rate_data: {
                  display_name: "Standard shipping",
                  type: "fixed_amount",
                  fixed_amount: { amount: shippingCents, currency: "usd" },
                },
              },
            ],
          }
        : {}),
      ...(discountCents > 0
        ? {
            discounts: [
              {
                coupon: (
                  await stripe.coupons.create({
                    amount_off: discountCents,
                    currency: "usd",
                    duration: "once",
                    name: coupon?.code ?? "Discount",
                  })
                ).id,
              },
            ],
          }
        : {}),
      metadata: { orderId: order.id, orderNumber: number },
      success_url: absoluteUrl(await localePath(`/checkout/success?order=${number}`)),
      cancel_url: absoluteUrl(await localePath("/checkout?cancelled=1")),
    });
    await db.order.update({ where: { id: order.id }, data: { stripeSessionId: checkout.id } });
    redirect(checkout.url!);
  }

  // 无 Stripe 密钥：开发模拟支付，直接标记已支付并走完整个订单流
  await finalizePaidOrder(order.id);
  redirect(await localePath(`/checkout/success?order=${number}`));
}

/** 成功页对账：webhook 未达时主动查 Stripe 补单，并清掉当前浏览器的购物车 */
export async function reconcileOrder(number: string) {
  const order = await db.order.findUnique({ where: { number } });
  if (!order) return null;

  if (order.status === "PENDING" && order.paymentMethod === "stripe" && order.stripeSessionId && process.env.STRIPE_SECRET_KEY) {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
    const session = await stripe.checkout.sessions.retrieve(order.stripeSessionId).catch(() => null);
    if (session?.payment_status === "paid") {
      await finalizePaidOrder(order.id);
    }
  } else if (order.status !== "PENDING") {
    // 已支付但本浏览器购物车还没清（webhook 先到的情况）
    const store = await cookies();
    const cartId = store.get(CART_COOKIE)?.value;
    if (cartId) await db.cartItem.deleteMany({ where: { cartId } });
  }
  return db.order.findUnique({ where: { number }, include: { items: true } });
}

/** 支付成功后的统一处理：扣库存、清购物车、计优惠券使用数 */
export async function finalizePaidOrder(orderId: string) {
  const order = await db.order.findUnique({ where: { id: orderId }, include: { items: true } });
  if (!order || order.status !== "PENDING") return;

  await db.$transaction(async (tx) => {
    await tx.order.update({ where: { id: orderId }, data: { status: "PAID" } });
    for (const item of order.items) {
      if (item.variantId) {
        await tx.variant.update({
          where: { id: item.variantId },
          data: { stock: { decrement: item.qty } },
        });
      }
    }
    if (order.couponCode) {
      await tx.coupon.updateMany({
        where: { code: order.couponCode },
        data: { usedCount: { increment: 1 } },
      });
    }
  });

  const store = await cookies();
  const cartId = store.get(CART_COOKIE)?.value;
  if (cartId) {
    await db.cartItem.deleteMany({ where: { cartId } });
  }
  store.delete("embepet_coupon");

  console.log(`[邮件模拟] 订单确认邮件 -> ${order.email}: 订单 ${order.number} 已支付，总额 $${(order.totalCents / 100).toFixed(2)}`);
}
