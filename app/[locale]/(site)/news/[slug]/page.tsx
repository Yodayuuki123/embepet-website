import type { Metadata } from "next";
import Image from "next/image";
import Link from "@/components/site/A";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ArrowUpRight, BookOpenCheck, Clock } from "lucide-react";
import { buildMetadata, articleJsonLd, faqJsonLd, breadcrumbJsonLd } from "@/lib/seo";
import JsonLd from "@/components/site/JsonLd";
import { getArticle, articlesByDate } from "@/lib/news";
import { btn } from "@/components/b2b/kit";
import { isLocale } from "@/lib/i18n/locales";

export function generateStaticParams() {
  return articlesByDate().map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale, slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};
  return buildMetadata({
    title: article.seoTitle,
    description: article.description,
    path: `/news/${slug}`,
    locale: isLocale(rawLocale) ? rawLocale : "en",
    ogType: "article",
    images: [article.image],
    imageAlt: `${article.title} — EMBEPET source-cited guide`,
    keywords: article.keywords,
    category: article.category,
    publishedTime: new Date(article.date).toISOString(),
    modifiedTime: new Date(article.updated ?? article.date).toISOString(),
  });
}

function dateLabel(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}

export default async function NewsArticlePage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const related = articlesByDate().filter((a) => a.slug !== slug).slice(0, 3);

  const jsonLd: object[] = [
    articleJsonLd(
      {
        slug: article.slug,
        title: article.title,
        excerpt: article.excerpt,
        authorName: article.author,
        publishedAt: new Date(article.date),
        updatedAt: new Date(article.updated ?? article.date),
        path: `/news/${article.slug}`,
        image: article.image,
        section: article.category,
        keywords: article.keywords,
        citations: article.sources,
      },
      "EMBEPET",
    ),
    breadcrumbJsonLd([
      { name: "Home", path: "/" },
      { name: "News", path: "/news" },
      { name: article.title, path: `/news/${slug}` },
    ]),
  ];
  if (article.faqs.length) jsonLd.push(faqJsonLd(article.faqs));

  return (
    <article>
      <JsonLd data={jsonLd} />

      {/* ===== HEADER ===== */}
      <header className="border-b border-line bg-[#f5f3ec]">
        <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
          <Link href="/news" className="inline-flex items-center gap-1.5 text-sm font-semibold text-forest-mid hover:underline">
            <ArrowLeft className="size-4" aria-hidden /> News &amp; insights
          </Link>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <span className="border border-forest/25 bg-forest/5 px-2 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.1em] text-forest">
              {article.category}
            </span>
            <span className="flex items-center gap-1.5 text-xs text-ink-soft">
              <Clock className="size-3.5" aria-hidden /> {article.readMinutes} min read
            </span>
            <span className="text-xs text-ink-soft">Updated {dateLabel(article.updated ?? article.date)}</span>
          </div>
          <h1 className="mt-5 text-[clamp(2.1rem,4vw,3.4rem)] font-semibold leading-[1.05] tracking-[-0.04em] text-ink">
            {article.title}
          </h1>

          <div className="relative mt-8 aspect-[16/9] overflow-hidden border border-line bg-white">
            <Image
              src={article.image}
              alt={`${article.title} — evidence-based pet supplement manufacturing guide`}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 768px"
            />
          </div>

          <div className="mt-7 border-l-2 border-forest bg-white p-5 sm:p-6">
            <p className="mb-2 flex items-center gap-2 text-[0.62rem] font-semibold uppercase tracking-[0.12em] text-forest-mid">
              <BookOpenCheck className="size-3.5" aria-hidden /> Quick answer
            </p>
            <p className="text-[1.02rem] font-medium leading-relaxed text-ink">{article.answer}</p>
          </div>

          <p className="mt-7 border-y border-line py-4 text-sm">
            <span className="text-ink-soft">By </span>
            <span className="font-semibold text-ink">{article.author}</span>
            <span className="text-ink-soft"> · Evidence checked against the sources below</span>
          </p>
        </div>
      </header>

      {/* ===== BODY ===== */}
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8">
        <div className="space-y-6">
          {article.body.map((block, i) => {
            if ("h2" in block) {
              return (
                <h2 key={i} className="pt-4 text-2xl font-semibold tracking-[-0.025em] text-ink">
                  {block.h2}
                </h2>
              );
            }
            if ("list" in block) {
              return (
                <ul key={i} className="list-disc space-y-2 pl-5 text-[0.98rem] leading-7 text-ink-soft">
                  {block.list.map((item, j) => (
                    <li key={j}>{item}</li>
                  ))}
                </ul>
              );
            }
            return (
              <p key={i} className="text-[0.98rem] leading-8 text-ink-soft">
                {block.p}
              </p>
            );
          })}
        </div>

        {article.faqs.length ? (
          <section className="mt-14">
            <h2 className="text-2xl font-semibold tracking-[-0.025em] text-ink">Frequently asked questions</h2>
            <dl className="mt-6 border-t border-line">
              {article.faqs.map((f) => (
                <div key={f.q} className="border-b border-line py-6">
                  <dt className="text-lg font-semibold text-ink">{f.q}</dt>
                  <dd className="mt-3 text-sm leading-7 text-ink-soft">{f.a}</dd>
                </div>
              ))}
            </dl>
          </section>
        ) : null}

        <section className="mt-12 border border-line bg-[#f5f3ec] p-6">
          <h2 className="text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-ink-soft">
            Sources &amp; further reading
          </h2>
          <ol className="mt-4 list-decimal space-y-3 pl-5 text-sm leading-6 text-ink-soft">
            {article.sources.map((source) => (
              <li key={source.url}>
                <a
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-forest-mid hover:underline"
                >
                  {source.label} <ArrowUpRight className="size-3" aria-hidden />
                </a>
              </li>
            ))}
          </ol>
          <p className="mt-5 text-xs leading-5 text-ink-soft">
            This article is general product-development information, not legal or veterinary advice.
            Requirements and suitable formats vary by market, product and intended claim.
          </p>
        </section>

        <div className="mt-12 border border-line bg-[#f5f3ec] p-6 sm:flex sm:items-center sm:justify-between sm:gap-6">
          <div>
            <p className="text-lg font-semibold text-ink">Turn this into a product</p>
            <p className="mt-1 text-sm leading-6 text-ink-soft">
              Send a brief and our OEM/ODM team confirms the route, MOQ and sampling path.
            </p>
          </div>
          <Link href="/private-label#inquiry" className={`${btn.primary} mt-4 shrink-0 sm:mt-0`}>
            Start a product brief
            <ArrowRight className="size-4" aria-hidden />
          </Link>
        </div>
      </div>

      {/* ===== RELATED ===== */}
      {related.length ? (
        <aside className="border-t border-line bg-[#f5f3ec]">
          <div className="mx-auto max-w-3xl px-5 py-14 sm:px-8">
            <h2 className="text-lg font-semibold tracking-[-0.02em] text-ink">Keep reading</h2>
            <ul className="mt-5 border-y border-line">
              {related.map((r) => (
                <li key={r.slug} className="border-b border-line last:border-b-0">
                  <Link href={`/news/${r.slug}`} className="group flex items-center justify-between gap-4 py-4">
                    <span>
                      <span className="mr-3 text-[0.6rem] font-semibold uppercase tracking-[0.1em] text-ink-soft">
                        {r.category}
                      </span>
                      <span className="font-medium text-ink transition-colors group-hover:text-forest-mid">
                        {r.title}
                      </span>
                    </span>
                    <ArrowRight className="size-4 shrink-0 text-forest-mid transition-transform group-hover:translate-x-1" aria-hidden />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      ) : null}
    </article>
  );
}
