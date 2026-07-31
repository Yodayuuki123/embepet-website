import type { Metadata } from "next";
import Link from "@/components/site/A";
import { notFound, redirect } from "next/navigation";
import { ArrowLeft, Truck } from "lucide-react";
import { getSession } from "@/lib/auth";
import { db } from "@/lib/db";
import { money, dateLong, parseJson } from "@/lib/format";
import { orderStatusBadge } from "@/components/site/OrderStatus";

export const metadata: Metadata = { title: "Order Details", robots: { index: false } };

type Address = { fullName?: string; line1?: string; line2?: string; city?: string; state?: string; zip?: string };

export default async function OrderDetailPage({ params }: { params: Promise<{ number: string }> }) {
  const { number } = await params;
  const session = await getSession();
  if (!session) redirect(`/account/login?next=/account/orders/${number}`);

  const order = await db.order.findUnique({ where: { number }, include: { items: true } });
  if (!order || (order.userId && order.userId !== session.uid && session.role === "CUSTOMER")) notFound();

  const addr = parseJson<Address>(order.shippingAddress, {});

  return (
    <div className="mx-auto max-w-3xl px-5 pb-24 pt-32 md:px-8 md:pt-36">
      <Link href="/account/orders" className="link-underline inline-flex items-center gap-1.5 text-[0.9rem] text-ink-soft">
        <ArrowLeft className="size-4" /> All orders
      </Link>
      <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
        <h1 className="display-1">{order.number}</h1>
        {orderStatusBadge(order.status)}
      </div>
      <p className="mt-2 text-ink-soft">Placed {dateLong(order.createdAt)}</p>

      {order.trackingNumber ? (
        <div className="mt-6 flex items-center gap-3 rounded-2xl border border-forest/25 bg-forest/5 px-5 py-4">
          <Truck className="size-5 text-forest-mid" />
          <p className="text-[0.95rem]">
            {order.carrier ?? "Carrier"} tracking: <span className="font-semibold">{order.trackingNumber}</span>
          </p>
        </div>
      ) : null}

      <div className="mt-8 rounded-3xl border border-line bg-white/70 p-6">
        <ul className="divide-y divide-line">
          {order.items.map((item) => (
            <li key={item.id} className="flex items-center justify-between gap-4 py-3.5">
              <div className="min-w-0">
                <Link href={`/products/${item.productSlug}`} className="font-medium hover:text-forest-mid">
                  {item.productName}
                </Link>
                <p className="text-[0.82rem] text-ink-soft">
                  {item.variantName} × {item.qty}
                </p>
              </div>
              <p className="font-medium">{money(item.unitCents * item.qty)}</p>
            </li>
          ))}
        </ul>
        <dl className="mt-4 space-y-2 border-t border-line pt-4 text-[0.93rem]">
          <div className="flex justify-between">
            <dt className="text-ink-soft">Subtotal</dt>
            <dd>{money(order.subtotalCents)}</dd>
          </div>
          {order.discountCents > 0 ? (
            <div className="flex justify-between text-forest-mid">
              <dt>Discount{order.couponCode ? ` (${order.couponCode})` : ""}</dt>
              <dd>-{money(order.discountCents)}</dd>
            </div>
          ) : null}
          <div className="flex justify-between">
            <dt className="text-ink-soft">Shipping</dt>
            <dd>{order.shippingCents === 0 ? "Free" : money(order.shippingCents)}</dd>
          </div>
          <div className="flex justify-between text-[1.08rem] font-semibold">
            <dt>Total</dt>
            <dd>{money(order.totalCents)}</dd>
          </div>
        </dl>
      </div>

      <div className="mt-6 rounded-3xl border border-line bg-white/70 p-6">
        <h2 className="display-3 mb-3">Shipping address</h2>
        <p className="leading-relaxed text-ink-soft">
          {addr.fullName}
          <br />
          {addr.line1}
          {addr.line2 ? (
            <>
              <br />
              {addr.line2}
            </>
          ) : null}
          <br />
          {addr.city}, {addr.state} {addr.zip}
        </p>
      </div>
    </div>
  );
}
