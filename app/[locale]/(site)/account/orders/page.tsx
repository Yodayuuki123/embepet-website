import type { Metadata } from "next";
import Link from "@/components/site/A";
import { redirect } from "next/navigation";
import { ArrowRight, PackageOpen } from "lucide-react";
import { getSession } from "@/lib/auth";
import { db } from "@/lib/db";
import { money, dateLong } from "@/lib/format";
import AccountNav from "@/components/site/AccountNav";
import { orderStatusBadge } from "@/components/site/OrderStatus";

export const metadata: Metadata = { title: "My Orders", robots: { index: false } };

export default async function OrdersPage() {
  const session = await getSession();
  if (!session) redirect("/account/login?next=/account/orders");

  const orders = await db.order.findMany({
    where: { userId: session.uid },
    orderBy: { createdAt: "desc" },
    include: { items: true },
  });

  return (
    <div className="mx-auto max-w-5xl px-5 pb-24 pt-32 md:px-8 md:pt-36">
      <p className="eyebrow text-forest-mid">Account</p>
      <h1 className="display-1 mt-2">Orders</h1>
      <div className="mt-8">
        <AccountNav />
      </div>

      {orders.length === 0 ? (
        <div className="mt-14 flex flex-col items-center rounded-3xl border border-dashed border-line py-16 text-center">
          <PackageOpen className="size-10 text-ink-soft/50" strokeWidth={1.4} />
          <p className="mt-4 text-ink-soft">No orders yet.</p>
          <Link href="/shop" className="link-underline mt-2 font-medium text-forest-mid">
            Start your pet&apos;s routine
          </Link>
        </div>
      ) : (
        <ul className="mt-10 space-y-4">
          {orders.map((order) => (
            <li key={order.id}>
              <Link
                href={`/account/orders/${order.number}`}
                className="card-lift group flex flex-wrap items-center justify-between gap-4 rounded-3xl border border-line bg-white/70 p-5 md:p-6"
              >
                <div>
                  <p className="font-semibold">{order.number}</p>
                  <p className="mt-1 text-[0.85rem] text-ink-soft">
                    {dateLong(order.createdAt)} · {order.items.reduce((s, i) => s + i.qty, 0)} item(s)
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  {orderStatusBadge(order.status)}
                  <p className="font-semibold">{money(order.totalCents)}</p>
                  <ArrowRight className="size-4 text-ink-soft transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
