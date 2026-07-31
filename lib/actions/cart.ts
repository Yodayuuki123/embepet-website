"use server";

import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";
import { db } from "@/lib/db";
import { getSession } from "@/lib/auth";
import { CART_COOKIE } from "@/lib/cart";

async function getOrCreateCartId(): Promise<string> {
  const store = await cookies();
  const existing = store.get(CART_COOKIE)?.value;
  if (existing) {
    const cart = await db.cart.findUnique({ where: { id: existing }, select: { id: true } });
    if (cart) return cart.id;
  }
  const session = await getSession();
  const cart = await db.cart.create({ data: { userId: session?.uid ?? null } });
  store.set(CART_COOKIE, cart.id, {
    httpOnly: true,
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 90,
    path: "/",
  });
  return cart.id;
}

function revalidateCartPaths() {
  revalidatePath("/", "layout");
}

export async function addToCart(variantId: string, qty: number = 1) {
  const cartId = await getOrCreateCartId();
  const variant = await db.variant.findUnique({ where: { id: variantId } });
  if (!variant || variant.stock <= 0) return { ok: false as const, error: "Out of stock" };

  await db.cartItem.upsert({
    where: { cartId_variantId: { cartId, variantId } },
    create: { cartId, variantId, qty },
    update: { qty: { increment: qty } },
  });
  await db.cart.update({ where: { id: cartId }, data: { updatedAt: new Date() } });
  revalidateCartPaths();
  return { ok: true as const };
}

export async function setCartItemQty(itemId: string, qty: number) {
  if (qty <= 0) {
    await db.cartItem.delete({ where: { id: itemId } }).catch(() => {});
  } else {
    await db.cartItem.update({ where: { id: itemId }, data: { qty: Math.min(qty, 99) } }).catch(() => {});
  }
  revalidateCartPaths();
}

export async function removeCartItem(itemId: string) {
  await db.cartItem.delete({ where: { id: itemId } }).catch(() => {});
  revalidateCartPaths();
}

export type CouponState = { error?: string; success?: string } | null;

export async function applyCoupon(_prev: CouponState, formData: FormData): Promise<CouponState> {
  const code = String(formData.get("code") ?? "").trim().toUpperCase();
  if (!code) return { error: "Enter a code" };
  const coupon = await db.coupon.findUnique({ where: { code } });
  const store = await cookies();
  if (
    !coupon ||
    !coupon.active ||
    (coupon.endsAt && coupon.endsAt < new Date()) ||
    (coupon.maxUses != null && coupon.usedCount >= coupon.maxUses)
  ) {
    store.delete("embepet_coupon");
    return { error: "This code is invalid or expired" };
  }
  store.set("embepet_coupon", code, { httpOnly: true, sameSite: "lax", maxAge: 3600 * 24, path: "/" });
  revalidateCartPaths();
  return { success: `Code ${code} applied` };
}

export async function removeCoupon() {
  const store = await cookies();
  store.delete("embepet_coupon");
  revalidateCartPaths();
}
