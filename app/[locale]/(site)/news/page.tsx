import type { Metadata } from "next";
import Image from "next/image";
import Link from "@/components/site/A";
import { ArrowRight } from "lucide-react";
import { metaWithLocale, breadcrumbJsonLd, absoluteUrl } from "@/lib/seo";
import JsonLd from "@/components/site/JsonLd";
import { articlesByDate } from "@/lib/news";
import { container, section, kicker, btn } from "@/components/b2b/kit";

export function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  return metaWithLocale(params, {
    title: "Pet Supplement OEM & Manufacturing Insights",
    description:
      "Source-cited guidance for pet supplement brands on OEM projects, dosage-form decisions, animal-food labeling, GMP audits and SQF manufacturing certification.",
    path: "/news",
    keywords: [
      "pet supplement OEM guide",
      "pet supplement manufacturing insights",
      "private label pet supplements",
      "SQF pet food manufacturing",
    ],
    images: ["/images/b2b/news/news-oem-guide.png"],
    imageAlt: "Pet supplement OEM planning and manufacturing insights",
  });
}

function dateLabel(iso: string) {
  const d = new Date(iso);
  const dd = String(d.getDate()).padStart(2, "0");
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const yyyy = d.getFullYear();
  return `${dd}.${mm}.${yyyy}`;
}

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
          <p className={`${kicker} text-ink-soft`}>News &amp; Insights</p>
          <h1 className="mt-4 text-[clamp(1.7rem,3vw,2.6rem)] font-semibold leading-[1.1] tracking-[-0.03em] text-ink">
            Industry Insights &amp; Manufacturing Updates
          </h1>
          <p className="mt-4 max-w-2xl text-[0.97rem] leading-7 text-ink-soft">
            Source-cited formulation, sourcing and compliance guidance for pet-supplement brand owners — written by our product and quality teams and linked to the underlying references.
          </p>
        </div>
      </section>

      {/* ===== ARTICLES ===== */}
      <section className={`${container} ${section}`}>
        {articles.length > 0 ? (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {articles.map((a) => (
              <Link
                key={a.slug}
                href={`/news/${a.slug}`}
                className="group flex flex-col"
              >
                {/* Cover image — square-ish, no border radius */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#eaeee5]">
                  <Image
                    src={a.image}
                    alt={`${a.title} — EMBEPET evidence-based guide`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>

                {/* Meta row: date + category tag */}
                <div className="mt-4 flex items-center justify-between gap-3">
                  <span className="text-[0.82rem] tabular-nums text-ink-soft">{dateLabel(a.date)}</span>
                  <span className="border border-ink/20 px-2.5 py-0.5 text-[0.6rem] font-semibold uppercase tracking-[0.12em] text-ink-soft">
                    {a.category}
                  </span>
                </div>

                {/* Title */}
                <h2 className="mt-2.5 line-clamp-2 text-[1rem] font-semibold leading-snug tracking-[-0.01em] text-ink transition-colors group-hover:text-ink/70">
                  {a.title}
                </h2>

                {/* Excerpt */}
                <p className="mt-2 line-clamp-3 text-[0.875rem] leading-6 text-ink-soft">
                  {a.excerpt}
                </p>
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
