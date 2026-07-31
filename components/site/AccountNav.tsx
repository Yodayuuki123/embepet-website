"use client";

import Link from "@/components/site/A";
import { usePathname } from "next/navigation";
import { useTransition } from "react";
import { LogOut, Loader2 } from "lucide-react";
import { logout } from "@/lib/actions/auth";

const links = [
  { href: "/account", label: "Overview" },
  { href: "/account/orders", label: "Orders" },
  { href: "/account/addresses", label: "Addresses" },
  { href: "/account/wishlist", label: "Wishlist" },
];

export default function AccountNav() {
  const pathname = usePathname();
  const [pending, startTransition] = useTransition();

  return (
    <nav className="flex flex-wrap items-center gap-2">
      {links.map((l) => {
        const active = l.href === "/account" ? pathname === "/account" : pathname.startsWith(l.href);
        return (
          <Link
            key={l.href}
            href={l.href}
            className={`rounded-full px-4 py-2 text-[0.9rem] font-medium transition-colors ${
              active ? "bg-forest text-cream" : "text-ink hover:bg-forest/8"
            }`}
          >
            {l.label}
          </Link>
        );
      })}
      <button
        onClick={() => startTransition(() => logout())}
        disabled={pending}
        className="ml-auto inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-[0.9rem] font-medium text-ink-soft transition-colors hover:bg-clay/10 hover:text-clay"
      >
        {pending ? <Loader2 className="size-3.5 animate-spin" /> : <LogOut className="size-3.5" />} Sign out
      </button>
    </nav>
  );
}
