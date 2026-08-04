"use client";

import { useState, useRef, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Globe, Check, ChevronDown } from "lucide-react";
import { LOCALES, LOCALE_LABELS, isLocale, type Locale } from "@/lib/i18n/locales";

export default function LocaleSwitcher({ locale, label }: { locale: Locale; label: string }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const onDown = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, []);

  function switchTo(next: Locale) {
    setOpen(false);
    if (next === locale) return;
    document.cookie = `ep_locale=${next};path=/;max-age=${60 * 60 * 24 * 365}`;
    const segments = pathname.split("/");
    if (segments[1] && isLocale(segments[1])) {
      segments[1] = next;
    } else {
      segments.splice(1, 0, next);
    }
    router.push(segments.join("/") || `/${next}`);
  }

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex h-9 items-center gap-1.5 rounded-sm border border-line bg-white px-3 text-[0.8rem] font-semibold text-ink transition-all hover:border-forest/40 hover:text-forest hover:shadow-sm"
        aria-label={label}
        aria-expanded={open}
      >
        <Globe size={15} strokeWidth={1.8} />
        <span className="hidden sm:inline">{LOCALE_LABELS[locale]}</span>
        <span className="sm:hidden">{locale.toUpperCase()}</span>
        <ChevronDown size={12} className={`transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      <div
        className={`absolute right-0 top-full z-50 mt-2 w-44 overflow-hidden rounded-sm border border-line bg-white shadow-[0_24px_60px_-20px_rgba(24,39,32,0.35)] transition-[opacity,transform] duration-200 ${
          open ? "pointer-events-auto translate-y-0 opacity-100" : "pointer-events-none translate-y-1 opacity-0"
        }`}
        role="listbox"
        aria-label={label}
      >
        {LOCALES.map((l) => (
          <button
            key={l}
            role="option"
            aria-selected={l === locale}
            onClick={() => switchTo(l)}
            className={`flex w-full items-center justify-between px-4 py-2.5 text-left text-[0.9rem] transition-colors hover:bg-forest/5 ${
              l === locale ? "font-semibold text-forest" : "text-ink-soft"
            }`}
          >
            {LOCALE_LABELS[l]}
            {l === locale ? <Check size={15} className="text-forest-mid" /> : null}
          </button>
        ))}
      </div>
    </div>
  );
}
