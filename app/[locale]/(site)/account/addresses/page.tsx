import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { getSession } from "@/lib/auth";
import { db } from "@/lib/db";
import AccountNav from "@/components/site/AccountNav";
import AddressBook from "@/components/site/AddressBook";

export const metadata: Metadata = { title: "Addresses", robots: { index: false } };

export default async function AddressesPage() {
  const session = await getSession();
  if (!session) redirect("/account/login?next=/account/addresses");

  const addresses = await db.address.findMany({
    where: { userId: session.uid },
    orderBy: { isDefault: "desc" },
  });

  return (
    <div className="mx-auto max-w-5xl px-5 pb-24 pt-32 md:px-8 md:pt-36">
      <p className="eyebrow text-forest-mid">Account</p>
      <h1 className="display-1 mt-2">Addresses</h1>
      <div className="mt-8">
        <AccountNav />
      </div>
      <div className="mt-10 max-w-xl">
        <AddressBook addresses={addresses} />
      </div>
    </div>
  );
}
