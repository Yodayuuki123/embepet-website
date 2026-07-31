import type { Metadata } from "next";
import Link from "@/components/site/A";
import { ArrowRight, Clock, Newspaper } from "lucide-react";
import { metaWithLocale, breadcrumbJsonLd, absoluteUrl } from "@/lib/seo";
import JsonLd from "@/components/site/JsonLd";
import { articlesByDate } from "@/lib/news";
import { ImagePlaceholder, container, section, kicker, h2, body, btn, cardHover } from "@/components/b2b/kit";

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

export default function NewsPage() {
  const articles = articlesByDate();
  const [lead, ...rest] = articles;

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
        <div className={`${container} py-16 sm:py-20`}>
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 text-forest-mid">
              <Newspaper className="size-5" strokeWidth={1.6} aria-hidden />
              <p className={kicker}>News &amp; Insights</p>
            </div>
            <h1 className="mt-5 text-[clamp(1.8rem,3.2vw,2.8rem)] font-semibold leading-[1.1] tracking-[-0.03em] text-ink">
              Pet Supplement News &amp; Insights
            </h1>
            <p className="mt-5 max-w-2xl text-[1.02rem] leading-8 text-ink-soft">
              Market trends, formulation insights and regulatory guidance for pet-supplement brand
              owners, distributors and retail teams — written by our manufacturing and quality teams.
            </p>
          </div>
        </div>
      </section>

      {/* ===== ARTICLES ===== */}
      <section className={`${container} ${section}`}>
        {lead ? (
          <Link
            href={`/news/${lead.slug}`}
            className={`${cardHover} group grid overflow-hidden rounded-sm border border-line bg-white lg:grid-cols-2`}
          >
            <div className="relative aspect-[16/10] lg:aspect-auto lg:min-h-[340px]">
              <ImagePlaceholder label={lead.category} fill />
            </div>
            <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-12">
              <div className="flex items-center gap-3 text-[0.7rem]">
                <span className="font-bold uppercase tracking-[0.12em] text-forest-mid">{lead.category}</span>
                <span className="text-ink-soft/60">{dateLabel(lead.date)}</span>
              </div>
              <h2 className="mt-4 text-[clamp(1.5rem,2.4vw,2.1rem)] font-semibold leading-[1.15] tracking-[-0.02em] text-ink group-hover:text-forest-mid">
                {lead.title}
              </h2>
              <p className="mt-4 text-[0.95rem] leading-7 text-ink-soft">{lead.excerpt}</p>
              <span className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-forest">
                Read article
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden />
              </span>
            </div>
          </Link>
        ) : null}

        {rest.length ? (
          <div className="mt-8 grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((a) => (
              <Link
                key={a.slug}
                href={`/news/${a.slug}`}
                className={`${cardHover} group flex h-full flex-col overflow-hidden bg-white`}
              >
                <div className="relative aspect-[16/10]">
                  <ImagePlaceholder label={a.category} fill />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center gap-3 text-[0.68rem]">
                    <span className="font-bold uppercase tracking-[0.12em] text-forest-mid">{a.category}</span>
                    <span className="text-ink-soft/60">{dateLabel(a.date)}</span>
                  </div>
                  <h3 className="mt-3 text-lg font-semibold leading-snug text-ink transition-colors group-hover:text-forest-mid">
                    {a.title}
                  </h3>
                  <p className="mt-2.5 line-clamp-3 text-sm leading-6 text-ink-soft">{a.excerpt}</p>
                  <p className="mt-auto flex items-center gap-2 pt-5 text-xs text-ink-soft">
                    <Clock className="size-3.5" aria-hidden /> {a.readMinutes} min read
                    <ArrowRight className="ml-auto size-4 text-forest-mid transition-transform group-hover:translate-x-1" aria-hidden />
                  </p>
                </div>
              </Link>
            ))}
          </div>
        ) : null}
      </section>

      {/* ===== CTA ===== */}
      <section className="bg-forest-deep text-white">
        <div className={`${container} flex flex-col gap-8 py-16 lg:flex-row lg:items-center lg:justify-between`}>
          <div className="max-w-2xl">
            <h2 className="text-3xl font-medium tracking-[-0.035em]">Ready to turn insight into a product?</h2>
            <p className="mt-3 text-sm leading-6 text-white/65">
              Send a product brief — market, species, target benefit, format and volume — and our
              OEM/ODM team confirms the practical route.
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
