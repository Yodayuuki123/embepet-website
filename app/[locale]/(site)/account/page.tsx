import type { Metadata } from "next";
import Link from "@/components/site/A";
import { redirect } from "next/navigation";
import { Package, MapPin, Heart, ArrowRight } from "lucide-react";
import { getSession } from "@/lib/auth";
import { db } from "@/lib/db";
import { money, dateLong } from "@/lib/format";
import AccountNav from "@/components/site/AccountNav";
import { orderStatusBadge } from "@/components/site/OrderStatus";

export const metadata: Metadata = { title: "My Account", robots: { index: false } };

export default async function AccountPage() {
  const session = await getSession();
  if (!session) redirect("/account/login?next=/account");

  const [orderCount, addressCount, wishlistCount, latestOrder] = await Promise.all([
    db.order.count({ where: { userId: session.uid } }),
    db.address.count({ where: { userId: session.uid } }),
    db.wishlistItem.count({ where: { userId: session.uid } }),
    db.order.findFirst({
      where: { userId: session.uid },
      orderBy: { createdAt: "desc" },
      include: { items: true },
    }),
  ]);

  const cards = [
    { href: "/account/orders", icon: Package, label: "Orders", value: orderCount },
    { href: "/account/addresses", icon: MapPin, label: "Addresses", value: addressCount },
    { href: "/account/wishlist", icon: Heart, label: "Wishlist", value: wishlistCount },
  ];

  return (
    <div className="mx-auto max-w-5xl px-5 pb-24 pt-32 md:px-8 md:pt-36">
      <p className="eyebrow text-forest-mid">Account</p>
      <h1 className="display-1 mt-2">Hi, {session.name.split(" ")[0]}</h1>
      <div className="mt-8">
        <AccountNav />
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-3">
        {cards.map((c) => (
          <Link
            key={c.href}
            href={c.href}
            className="card-lift group rounded-3xl border border-line bg-white/70 p-6"
          >
            <c.icon className="size-6 text-forest-mid" strokeWidth={1.6} />
            <p className="mt-4 text-3xl font-semibold" style={{ fontFamily: "var(--font-display)" }}>
              {c.value}
            </p>
            <p className="mt-1 flex items-center gap-1 text-[0.9rem] text-ink-soft">
              {c.label}
              <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
            </p>
          </Link>
        ))}
      </div>

      {latestOrder ? (
        <div className="mt-10 rounded-3xl border border-line bg-white/70 p-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h2 className="display-3">Latest order</h2>
            {orderStatusBadge(latestOrder.status)}
          </div>
          <p className="mt-2 text-[0.9rem] text-ink-soft">
            {latestOrder.number} · {dateLong(latestOrder.createdAt)} · {latestOrder.items.length} item(s) ·{" "}
            {money(latestOrder.totalCents)}
          </p>
          <Link
            href={`/account/orders/${latestOrder.number}`}
            className="link-underline mt-3 inline-flex items-center gap-1 text-[0.92rem] font-medium text-forest-mid"
          >
            View details <ArrowRight className="size-3.5" />
          </Link>
        </div>
      ) : null}
    </div>
  );
}
