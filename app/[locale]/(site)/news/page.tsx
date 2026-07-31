import type { Metadata } from "next";
import Image from "next/image";
import Link from "@/components/site/A";
import { ArrowRight, Clock } from "lucide-react";
import { metaWithLocale, breadcrumbJsonLd, absoluteUrl } from "@/lib/seo";
import JsonLd from "@/components/site/JsonLd";
import { articlesByDate } from "@/lib/news";
import { container, section, kicker, btn, cardHover } from "@/components/b2b/kit";

export function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  return metaWithLocale(params, {
    title: "Pet Supplement News & Insights for Brands | EMBEPET",
    description:
      "News, market trends and formulation insights for pet supplement brands — OEM guidance, dosage-form comparisons and GMP/SQF compliance from EMBEPET's manufacturing team.",
    path: "/news",
  });
}

function dateLabel(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}

const COVER_IMAGES: Record<string, string> = {
  "pet-supplement-oem-guide": "/images/b2b/news/news-oem-guide.png",
  "dosage-form-comparison": "/images/b2b/news/news-dosage-form.png",
  "gmp-sqf-certification": "/images/b2b/news/news-gmp-sqf.png",
};

export default function NewsPage() {
  const articles = articlesByDate();

  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "News", path: "/news" }])} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "EMBEPET — Pet Supplement News & Insights",
          description:
            "News, market trends and formulation insights for pet supplement brand owners, distributors and retailers.",
          url: absoluteUrl("/en/news"),
          mainEntity: {
            "@type": "ItemList",
            numberOfItems: articles.length,
            itemListElement: articles.map((a, i) => ({
              "@type": "ListItem",
              position: i + 1,
              url: absoluteUrl(`/en/news/${a.slug}`),
              name: a.title,
            })),
          },
        }}
      />

      {/* ===== HERO ===== */}
      <section className="border-b border-line bg-[#f5f3ec]">
        <div className={`${container} py-12 sm:py-16`}>
          <p className={`${kicker} text-forest-mid`}>News &amp; Insights</p>
          <h1 className="mt-4 text-[clamp(1.7rem,3vw,2.6rem)] font-semibold leading-[1.1] tracking-[-0.03em] text-ink">
            Industry Insights &amp; Manufacturing Updates
          </h1>
          <p className="mt-4 max-w-2xl text-[0.97rem] leading-7 text-ink-soft">
            Market trends, formulation guidance and regulatory insights for pet-supplement brand owners — written by our manufacturing and quality teams.
          </p>
        </div>
      </section>

      {/* ===== ARTICLES — 3-column equal grid ===== */}
      <section className={`${container} ${section}`}>
        {articles.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {articles.map((a) => (
              <Link
                key={a.slug}
                href={`/news/${a.slug}`}
                className={`${cardHover} group flex flex-col overflow-hidden border border-line bg-white`}
              >
                {/* Cover image — fixed 16:9 ratio */}
                <div className="relative aspect-[16/9] overflow-hidden">
                  {COVER_IMAGES[a.slug] ? (
                    <Image
                      src={COVER_IMAGES[a.slug]}
                      alt={a.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-[#eaeee5]" />
                  )}
                  {/* Category badge */}
                  <span className="absolute left-4 top-4 bg-forest px-2.5 py-1 text-[0.6rem] font-bold uppercase tracking-[0.14em] text-white">
                    {a.category}
                  </span>
                </div>

                {/* Text body */}
                <div className="flex flex-1 flex-col border-t border-line p-6">
                  <div className="flex items-center gap-2 text-[0.67rem] text-ink-soft">
                    <Clock className="size-3" aria-hidden />
                    <span>{a.readMinutes} min read</span>
                    <span className="text-ink-soft/40">·</span>
                    <span>{dateLabel(a.date)}</span>
                  </div>
                  <h2 className="mt-3 text-[1rem] font-semibold leading-snug tracking-[-0.015em] text-ink transition-colors group-hover:text-forest">
                    {a.title}
                  </h2>
                  <p className="mt-2.5 line-clamp-3 text-[0.875rem] leading-6 text-ink-soft">{a.excerpt}</p>
                  <span className="mt-auto flex items-center gap-1.5 pt-5 text-xs font-semibold text-forest">
                    Read article
                    <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" aria-hidden />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="py-24 text-center text-ink-soft">No articles published yet.</div>
        )}
      </section>

      {/* ===== CTA ===== */}
      <section className="border-t border-line bg-forest-deep text-white">
        <div className={`${container} flex flex-col gap-8 py-16 lg:flex-row lg:items-center lg:justify-between`}>
          <div className="max-w-2xl">
            <h2 className="text-[1.7rem] font-semibold tracking-[-0.03em]">Ready to turn insight into a product?</h2>
            <p className="mt-3 text-sm leading-6 text-white/65">
              Send a product brief — market, species, target benefit, format and volume — and our OEM/ODM team confirms the practical route.
            </p>
          </div>
          <Link href="/private-label#inquiry" className={`${btn.light} shrink-0`}>
            Start a product brief
            <ArrowRight className="size-4" aria-hidden />
          </Link>
        </div>
      </section>
    </>
  );
}
