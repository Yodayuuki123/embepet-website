"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowRight, Menu, X } from "lucide-react";
import Link from "@/components/site/A";
import LocaleSwitcher from "@/components/site/LocaleSwitcher";
import type { Locale } from "@/lib/i18n/locales";

interface HeaderLabels {
  products: string;
  oemOdm: string;
  manufacturing: string;
  qualityCompany: string;
  news: string;
  getQuote: string;
  tagline: string;
  requestQuote: string;
  menuOpen: string;
  menuClose: string;
  language: string;
}

export default function Header({
  announcement,
  locale,
  labels: t,
}: {
  brandName: string;
  announcement?: string;
  locale: Locale;
  labels: HeaderLabels;
}) {
  const [open, setOpen] = useState(false);

  const links = [
    { href: "/shop", label: t.products },
    { href: "/private-label", label: t.oemOdm },
    { href: "/factory", label: t.manufacturing },
    { href: "/science", label: t.qualityCompany },
    { href: "/news", label: t.news },
  ];

  useEffect(() => {
    document.documentElement.classList.toggle("overflow-hidden", open);
    return () => document.documentElement.classList.remove("overflow-hidden");
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-[#f8f7f2]/95 backdrop-blur-xl">
      {announcement ? (
        <div className="border-b border-white/10 bg-forest-deep text-white">
          <p className="mx-auto max-w-7xl px-4 py-2 text-center text-[0.72rem] font-medium tracking-[0.05em] text-white/80">
            {announcement}
          </p>
        </div>
      ) : null}

      <div className="mx-auto flex h-[76px] max-w-[1480px] items-center justify-between px-5 sm:px-8 lg:px-10">
        <Link href="/" className="flex min-w-0 items-center gap-3" aria-label="Beno Bio B2B home">
          <Image
            src="/images/beno-bio-logo-transparent.png"
            alt="Beno Bio"
            width={2204}
            height={713}
            priority
            className="h-auto w-[118px] object-contain sm:w-[148px]"
            sizes="(max-width: 640px) 118px, 148px"
          />
          <span className="hidden border-l border-line pl-3 text-[0.61rem] font-semibold uppercase leading-4 tracking-[0.11em] text-ink-soft xl:block">
            {t.tagline}
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Main navigation">
          {links.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[0.82rem] font-semibold text-ink-soft transition-colors duration-200 hover:text-forest"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <LocaleSwitcher locale={locale} label={t.language} />
          <div className="hidden sm:block">
            <Link href="/private-label#inquiry" className="b2b-btn-primary">
              {t.getQuote}
              <ArrowRight className="size-4" aria-hidden />
            </Link>
          </div>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className="grid size-12 shrink-0 cursor-pointer place-items-center text-ink lg:hidden"
            aria-label={open ? t.menuClose : t.menuOpen}
            aria-expanded={open}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      <div
        className={`fixed inset-x-0 top-0 z-[-1] min-h-screen bg-[#f8f7f2] px-5 pb-12 pt-32 transition-[clip-path] duration-500 lg:hidden ${
          open ? "[clip-path:inset(0_0_0_0)]" : "pointer-events-none [clip-path:inset(0_0_100%_0)]"
        }`}
      >
        <nav className="mx-auto grid max-w-xl border-t border-line" aria-label="Mobile navigation">
          {links.map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="flex min-h-14 items-center justify-between border-b border-line py-5 text-xl font-medium text-ink"
            >
              {item.label}
              <span className="text-xs text-ink-soft">0{index + 1}</span>
            </Link>
          ))}
        </nav>
        <div className="mx-auto mt-8 max-w-xl">
          <Link
            href="/private-label#inquiry"
            onClick={() => setOpen(false)}
            className="b2b-btn-primary w-full"
          >
            {t.requestQuote}
            <ArrowRight className="size-4" aria-hidden />
          </Link>
        </div>
      </div>
    </header>
  );
}
