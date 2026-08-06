import type { Metadata } from "next";
import Link from "@/components/site/A";
import { redirect } from "next/navigation";
import { Heart } from "lucide-react";
import { getSession } from "@/lib/auth";
import { db } from "@/lib/db";
import AccountNav from "@/components/site/AccountNav";
import ProductCard from "@/components/site/ProductCard";

export const metadata: Metadata = { title: "Wishlist", robots: { index: false } };

export default async function WishlistPage() {
  const session = await getSession();
  if (!session) redirect("/account/login?next=/account/wishlist");

  const items = await db.wishlistItem.findMany({
    where: { userId: session.uid },
    include: {
      product: { include: { variants: { orderBy: { sortOrder: "asc" } } } },
    },
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="mx-auto max-w-6xl px-5 pb-24 pt-32 md:px-8 md:pt-36">
      <p className="eyebrow text-forest-mid">Account</p>
      <h1 className="display-1 mt-2">Wishlist</h1>
      <div className="mt-8">
        <AccountNav />
      </div>

      {items.length === 0 ? (
        <div className="mt-14 flex flex-col items-center rounded-3xl border border-dashed border-line py-16 text-center">
          <Heart className="size-10 text-ink-soft/50" strokeWidth={1.4} />
          <p className="mt-4 text-ink-soft">Nothing saved yet.</p>
          <Link href="/shop" className="link-underline mt-2 font-medium text-forest-mid">
            Browse products
          </Link>
        </div>
      ) : (
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item: any) => (
            <ProductCard key={item.id} product={item.product} />
          ))}
        </div>
      )}
    </div>
  );
}
