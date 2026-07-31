"use client";

import Link from "@/components/site/A";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ShoppingBag, User, Menu, X, ChevronDown } from "lucide-react";
import Logo from "./Logo";

type CollectionLink = { slug: string; name: string; kind: string };

type Props = {
  brandName: string;
  announcement: string;
  cartCount: number;
  loggedIn: boolean;
  collections: CollectionLink[];
};

const primaryLinks = [
  { href: "/learn", label: "Learn" },
  { href: "/science", label: "Science" },
  { href: "/about", label: "About" },
  { href: "/wholesale", label: "Wholesale" },
];

export default function Navbar({ brandName, announcement, cartCount, loggedIn, collections }: Props) {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [shopOpen, setShopOpen] = useState(false);
  const lastY = useRef(0);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 24);
      setHidden(y > 420 && y > lastY.current && !menuOpen);
      lastY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [menuOpen]);

  useEffect(() => {
    setMenuOpen(false);
    setShopOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.documentElement.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [menuOpen]);

  const concerns = collections.filter((c) => c.kind === "concern");
  const species = collections.filter((c) => c.kind === "species");

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-transform duration-500 ${hidden ? "-translate-y-full" : "translate-y-0"}`}
    >
      {announcement ? (
        <div className="bg-forest text-cream overflow-hidden">
          <p className="eyebrow py-2 text-center text-[0.66rem] tracking-[0.18em] px-4 truncate">{announcement}</p>
        </div>
      ) : null}

      <div
        className={`transition-all duration-500 ${
          scrolled ? "bg-cream/85 shadow-[0_1px_0_var(--color-line),0_12px_32px_-20px_rgba(27,58,42,0.25)] backdrop-blur-xl" : "bg-transparent"
        }`}
      >
        <nav className="mx-auto flex h-[68px] max-w-7xl items-center justify-between gap-6 px-5 md:px-8">
          <Logo brandName={brandName} />

          <div className="hidden items-center gap-7 lg:flex">
            <div
              className="relative"
              onMouseEnter={() => setShopOpen(true)}
              onMouseLeave={() => setShopOpen(false)}
            >
              <Link
                href="/shop"
                className="link-underline inline-flex items-center gap-1 py-2 text-[0.95rem] font-medium text-ink"
              >
                Shop <ChevronDown className={`size-3.5 transition-transform ${shopOpen ? "rotate-180" : ""}`} />
              </Link>
              <div
                className={`absolute left-1/2 top-full w-[560px] -translate-x-1/2 pt-3 transition-all duration-300 ${
                  shopOpen ? "pointer-events-auto translate-y-0 opacity-100" : "pointer-events-none translate-y-2 opacity-0"
                }`}
              >
                <div className="grid grid-cols-2 gap-6 rounded-2xl border border-line bg-cream p-6 shadow-[0_24px_64px_-24px_rgba(27,58,42,0.35)]">
                  <div>
                    <p className="eyebrow mb-3 text-ink-soft">Shop by concern</p>
                    <ul className="space-y-1.5">
                      {concerns.map((c) => (
                        <li key={c.slug}>
                          <Link href={`/collections/${c.slug}`} className="link-underline text-[0.94rem] text-ink">
                            {c.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex flex-col">
                    <p className="eyebrow mb-3 text-ink-soft">Shop by pet</p>
                    <ul className="space-y-1.5">
                      {species.map((c) => (
                        <li key={c.slug}>
                          <Link href={`/collections/${c.slug}`} className="link-underline text-[0.94rem] text-ink">
                            {c.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                    <Link
                      href="/shop"
                      className="btn-liquid mt-auto inline-flex w-fit items-center rounded-full border border-forest px-4 py-2 text-[0.82rem] font-semibold text-forest hover:text-cream"
                      style={{ "--liquid": "var(--color-forest)" } as React.CSSProperties}
                    >
                      View all products
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {primaryLinks.map((l) => (
              <Link key={l.href} href={l.href} className="link-underline py-2 text-[0.95rem] font-medium text-ink">
                {l.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-1.5">
            <Link
              href={loggedIn ? "/account" : "/account/login"}
              aria-label="Account"
              className="grid size-10 place-items-center rounded-full text-ink transition-colors hover:bg-forest/8"
            >
              <User className="size-[1.15rem]" strokeWidth={1.8} />
            </Link>
            <Link
              href="/cart"
              aria-label={`Cart, ${cartCount} items`}
              className="relative grid size-10 place-items-center rounded-full text-ink transition-colors hover:bg-forest/8"
            >
              <ShoppingBag className="size-[1.15rem]" strokeWidth={1.8} />
              {cartCount > 0 ? (
                <span className="absolute right-0 top-0.5 grid size-[18px] place-items-center rounded-full bg-clay text-[0.62rem] font-bold text-cream">
                  {cartCount > 9 ? "9+" : cartCount}
                </span>
              ) : null}
            </Link>
            <button
              aria-label="Menu"
              onClick={() => setMenuOpen((v) => !v)}
              className="grid size-10 place-items-center rounded-full text-ink transition-colors hover:bg-forest/8 lg:hidden"
            >
              {menuOpen ? <X className="size-5" strokeWidth={1.8} /> : <Menu className="size-5" strokeWidth={1.8} />}
            </button>
          </div>
        </nav>
      </div>

      {/* 移动端全屏菜单 */}
      <div
        className={`fixed inset-0 top-0 z-[-1] bg-forest text-cream transition-[clip-path] duration-700 ease-[cubic-bezier(0.65,0,0.35,1)] lg:hidden ${
          menuOpen ? "[clip-path:inset(0_0_0%_0)]" : "pointer-events-none [clip-path:inset(0_0_100%_0)]"
        }`}
      >
        <div className="flex h-full flex-col overflow-y-auto px-6 pb-10 pt-32" data-lenis-prevent>
          <p className="eyebrow mb-4 text-cream/60">Shop by concern</p>
          <ul className="mb-8 space-y-3">
            {concerns.map((c, i) => (
              <li
                key={c.slug}
                style={{ transitionDelay: `${120 + i * 45}ms` }}
                className={`transition-all duration-500 ${menuOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
              >
                <Link href={`/collections/${c.slug}`} className="font-display text-2xl" style={{ fontFamily: "var(--font-display)" }}>
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
          <ul className="space-y-3 border-t border-cream/15 pt-6">
            {[{ href: "/shop", label: "All Products" }, ...primaryLinks, { href: "/contact", label: "Contact" }].map((l, i) => (
              <li
                key={l.href}
                style={{ transitionDelay: `${400 + i * 40}ms` }}
                className={`transition-all duration-500 ${menuOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
              >
                <Link href={l.href} className="text-lg text-cream/90">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}
