import Image from "next/image";
import Link from "@/components/site/A";
import { ArrowUpRight, Mail, Phone } from "lucide-react";
import type { SiteSettings } from "@/lib/settings";

interface FooterLabels {
  tagline: string;
  description: string;
  primaryPages: string;
  productRoutes: string;
  businessInfo: string;
  productsWholesale: string;
  oemOdm: string;
  manufacturing: string;
  qualityCompany: string;
  completeCatalog: string;
  softChews: string;
  powders: string;
  dropsOils: string;
  companyProfile: string;
  certificates: string;
  newsInsights: string;
  requestQuote: string;
  factory: string;
  address: string;
  copyright: string;
  gmpNotice: string;
}

export default function Footer({ settings, labels: t }: { settings: SiteSettings; labels: FooterLabels }) {
  const columns = [
    {
      title: t.primaryPages,
      links: [
        { href: "/shop", label: t.productsWholesale },
        { href: "/private-label", label: t.oemOdm },
        { href: "/factory", label: t.manufacturing },
        { href: "/science", label: t.qualityCompany },
      ],
    },
    {
      title: t.productRoutes,
      links: [
        { href: "/shop#catalog", label: t.completeCatalog },
        { href: "/shop?format=chew", label: t.softChews },
        { href: "/shop?format=powder", label: t.powders },
        { href: "/shop?format=dropper", label: t.dropsOils },
      ],
    },
    {
      title: t.businessInfo,
      links: [
        { href: "/about", label: t.companyProfile },
        { href: "/science#certificates", label: t.certificates },
        { href: "/learn", label: "Knowledge hub" },
        { href: "/news", label: t.newsInsights },
        { href: "/contact", label: t.requestQuote },
      ],
    },
  ];

  return (
    <footer className="border-t border-white/10 bg-[#11231a] text-white">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10">
        <div className="grid gap-12 border-b border-white/15 pb-14 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <Image
              src="/images/beno-bio-logo-transparent.png"
              alt="Beno Bio"
              width={2204}
              height={713}
              className="h-auto w-[168px] object-contain"
              sizes="168px"
            />
            <p className="mt-5 max-w-xl text-2xl font-medium leading-tight tracking-tight">
              {t.tagline}
            </p>
            <p className="mt-5 max-w-lg text-sm leading-6 text-white/60">
              {t.description}
            </p>
          </div>
          <div className="grid gap-4 self-end">
            <a
              href={`mailto:${settings.b2bEmail}`}
              className="flex min-h-14 items-center justify-between border-b border-white/20 py-3 text-sm text-white/80 transition-colors hover:text-white"
            >
              <span className="flex items-center gap-3">
                <Mail className="size-4" aria-hidden />
                {settings.b2bEmail}
              </span>
              <ArrowUpRight className="size-4" aria-hidden />
            </a>
            <a
              href={`tel:${settings.phone}`}
              className="flex min-h-14 items-center justify-between border-b border-white/20 py-3 text-sm text-white/80 transition-colors hover:text-white"
            >
              <span className="flex items-center gap-3">
                <Phone className="size-4" aria-hidden />
                {settings.phone}
              </span>
              <ArrowUpRight className="size-4" aria-hidden />
            </a>
          </div>
        </div>

        <div className="grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-white/45">{t.factory}</p>
            <p className="mt-4 text-sm leading-6 text-white/65">
              {t.address}
            </p>
          </div>
          {columns.map((column) => (
            <nav key={column.title} aria-label={column.title}>
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-white/45">{column.title}</p>
              <ul className="mt-4 grid gap-3">
                {column.links.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="text-sm text-white/65 transition-colors hover:text-white">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="flex flex-col gap-3 border-t border-white/15 pt-7 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {t.copyright}</p>
          <p>{t.gmpNotice}</p>
        </div>
      </div>
    </footer>
  );
}
