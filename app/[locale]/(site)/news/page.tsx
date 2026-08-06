import type { Metadata } from "next";
import Image from "next/image";
import Link from "@/components/site/A";
import { ArrowRight } from "lucide-react";
import { metaWithLocale, breadcrumbJsonLd, absoluteUrl } from "@/lib/seo";
import JsonLd from "@/components/site/JsonLd";
import { articlesByDate } from "@/lib/news";
import { container, section, kicker, btn } from "@/components/b2b/kit";
import { isLocale } from "@/lib/i18n/locales";

export function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  return metaWithLocale(params, {
    title: "Pet Supplement Manufacturing News & Insights | EMBEPET",
    description:
      "Industry insights for pet supplement brands: OEM manufacturing guides, dosage form comparisons, GMP/SQF compliance, formulation trends. Expert advice from EMBEPET's production team.",
    path: "/news",
  });
}

function dateLabel(iso: string) {
  const d = new Date(iso);
  const dd = String(d.getDate()).padStart(2, "0");
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const yyyy = d.getFullYear();
  return `${dd}.${mm}.${yyyy}`;
}

const COVER_IMAGES: Record<string, string> = {
  "pet-supplement-oem-guide": "/images/b2b/news/news-oem-guide.png",
  "dosage-form-comparison": "/images/b2b/news/news-dosage-form.png",
  "gmp-sqf-certification": "/images/b2b/news/news-gmp-sqf.png",
};

export default async function NewsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale = isLocale(rawLocale) ? rawLocale : "en";
  const isZh = locale === "zh";
  const articles = articlesByDate();

  return (
    <>
      <JsonLd data={breadcrumbJsonLd([
        { name: isZh ? "首页" : "Home", path: "/" },
        { name: isZh ? "新闻" : "News", path: "/news" }
      ], locale)} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "EMBEPET — Pet Supplement News & Insights",
          description:
            "News, market trends and formulation insights for pet supplement brand owners, distributors and retailers.",
          url: absoluteUrl(`/${locale}/news`),
          mainEntity: {
            "@type": "ItemList",
            numberOfItems: articles.length,
            itemListElement: articles.map((a, i) => ({
              "@type": "ListItem",
              position: i + 1,
              item: {
                "@type": "Article",
                "@id": absoluteUrl(`/${locale}/news/${a.slug}`),
                headline: a.title,
                description: a.excerpt,
                datePublished: a.date,
                author: {
                  "@type": "Organization",
                  name: "EMBEPET",
                  url: absoluteUrl("/"),
                },
                publisher: {
                  "@type": "Organization",
                  name: "EMBEPET",
                  logo: {
                    "@type": "ImageObject",
                    url: absoluteUrl("/images/logo.png"),
                  },
                },
                image: COVER_IMAGES[a.slug] ? absoluteUrl(COVER_IMAGES[a.slug]) : undefined,
                url: absoluteUrl(`/${locale}/news/${a.slug}`),
              },
            })),
          },
        }}
      />

      {/* ===== HERO ===== */}
      <section className="border-b border-line bg-[#f5f3ec]">
        <div className={`${container} py-12 sm:py-16 text-center`}>
          <p className={`${kicker} text-ink-soft`}>
            {isZh ? "新闻与洞察" : "News & Insights"}
          </p>
          <h1 className="mt-4 text-[clamp(1.7rem,3vw,2.6rem)] font-semibold leading-[1.1] tracking-[-0.03em] text-ink">
            {isZh ? "行业洞察与生产动态" : "Industry Insights & Manufacturing Updates"}
          </h1>
          <p className="mt-4 mx-auto max-w-2xl text-[0.97rem] leading-7 text-ink-soft">
            {isZh
              ? "市场趋势、配方指导与法规洞察——专为宠物营养品品牌主撰写，来自我们的生产与质控团队。"
              : "Market trends, formulation guidance and regulatory insights for pet-supplement brand owners — written by our manufacturing and quality teams."}
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
                {/* Cover image */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#eaeee5]">
                  {COVER_IMAGES[a.slug] && (
                    <Image
                      src={COVER_IMAGES[a.slug]}
                      alt={a.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  )}
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
          <div className="py-24 text-center text-ink-soft">
            {isZh ? "暂无已发布的文章。" : "No articles published yet."}
          </div>
        )}
      </section>

      {/* ===== CTA ===== */}
      <section className="border-t border-line bg-forest-deep text-white">
        <div className={`${container} flex flex-col gap-8 py-16 lg:flex-row lg:items-center lg:justify-between`}>
          <div className="max-w-2xl">
            <h2 className="text-[1.7rem] font-semibold tracking-[-0.03em]">
              {isZh ? "准备好将洞察转化为产品了吗？" : "Ready to turn insight into a product?"}
            </h2>
            <p className="mt-3 text-sm leading-6 text-white/65">
              {isZh
                ? "发送产品简介——市场、物种、目标功效、剂型和数量——我们的 OEM/ODM 团队将确认最优合作路径。"
                : "Send a product brief — market, species, target benefit, format and volume — and our OEM/ODM team confirms the practical route."}
            </p>
          </div>
          <Link href="/private-label#inquiry" className={`${btn.light} shrink-0`}>
            {isZh ? "开始产品简介" : "Start a product brief"}
            <ArrowRight className="size-4" aria-hidden />
          </Link>
        </div>
      </section>
    </>
  );
}
