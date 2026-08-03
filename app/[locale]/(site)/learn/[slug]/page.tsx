import type { Metadata } from "next";
import Link from "@/components/site/A";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, BookOpenCheck, Clock } from "lucide-react";
import { db } from "@/lib/db";
import { buildMetadata, articleJsonLd, faqJsonLd, breadcrumbJsonLd } from "@/lib/seo";
import { getSettings } from "@/lib/settings";
import { parseJson, dateLong } from "@/lib/format";
import { enrichSources, type Faq, type Source } from "@/lib/json";
import JsonLd from "@/components/site/JsonLd";
import Markdown from "@/components/site/Markdown";
import FaqAccordion from "@/components/site/FaqAccordion";
import { isLocale } from "@/lib/i18n/locales";

export async function generateStaticParams() {
  const posts = await db.post.findMany({ where: { published: true }, select: { slug: true } });
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale, slug } = await params;
  const post = await db.post.findUnique({ where: { slug } });
  if (!post) return {};
  const keywords = post.tags.split(",").map((tag) => tag.trim()).filter(Boolean);
  return buildMetadata({
    title: post.seoTitle ?? post.title,
    description: post.seoDescription ?? post.excerpt,
    path: `/learn/${slug}`,
    locale: isLocale(rawLocale) ? rawLocale : "en",
    ogType: "article",
    keywords,
    category: post.category,
    publishedTime: post.publishedAt.toISOString(),
    modifiedTime: post.updatedAt.toISOString(),
    images: [`/api/og?title=${encodeURIComponent(post.title)}&kind=article`],
    imageAlt: `${post.title} — source-cited pet supplement guide`,
  });
}

export default async function ArticlePage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { slug } = await params;
  const [post, settings] = await Promise.all([
    db.post.findUnique({ where: { slug } }),
    getSettings(),
  ]);
  if (!post || !post.published) notFound();

  const faqs = parseJson<Faq[]>(post.faqs, []);
  const sources = enrichSources(parseJson<Source[]>(post.sources, []));
  const keywords = post.tags.split(",").map((tag) => tag.trim()).filter(Boolean);

  const related = await db.post.findMany({
    where: { published: true, slug: { not: slug }, OR: [{ category: post.category }, { species: post.species }] },
    orderBy: { publishedAt: "desc" },
    take: 3,
    select: { slug: true, title: true, readMinutes: true, category: true },
  });

  const jsonLd: object[] = [
    articleJsonLd(
      {
        slug: post.slug,
        title: post.title,
        excerpt: post.excerpt,
        authorName: "EMBEPET Content Team",
        publishedAt: post.publishedAt,
        updatedAt: post.updatedAt,
        path: `/learn/${post.slug}`,
        section: post.category,
        keywords,
        citations: sources,
      },
      settings.brandName,
    ),
    breadcrumbJsonLd([
      { name: "Home", path: "/" },
      { name: "Learn", path: "/learn" },
      { name: post.title, path: `/learn/${slug}` },
    ]),
  ];
  if (faqs.length) jsonLd.push(faqJsonLd(faqs));

  return (
    <article>
      <JsonLd data={jsonLd} />

      {/* ===== HEADER ===== */}
      <header className="border-b border-line bg-[#f5f3ec]">
        <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
          <Link href="/learn" className="inline-flex items-center gap-1.5 text-sm font-semibold text-forest-mid hover:underline">
            <ArrowLeft className="size-4" aria-hidden /> Knowledge hub
          </Link>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <span className="border border-forest/25 bg-forest/5 px-2 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.1em] text-forest">
              {post.category}
            </span>
            <span className="flex items-center gap-1.5 text-xs text-ink-soft">
              <Clock className="size-3.5" aria-hidden /> {post.readMinutes} min read
            </span>
            <span className="text-xs text-ink-soft">Updated {dateLong(post.updatedAt)}</span>
          </div>
          <h1 className="mt-5 text-[clamp(2.1rem,4vw,3.4rem)] font-[430] leading-[1.04] tracking-[-0.04em] text-ink">
            {post.title}
          </h1>

          {post.answerCapsule ? (
            <div className="mt-7 border-l-2 border-forest bg-white p-5 sm:p-6">
              <p className="mb-2 flex items-center gap-2 text-[0.62rem] font-semibold uppercase tracking-[0.12em] text-forest-mid">
                <BookOpenCheck className="size-3.5" aria-hidden /> Quick answer
              </p>
              <p className="text-[1.02rem] font-medium leading-relaxed text-ink">{post.answerCapsule}</p>
            </div>
          ) : null}

          <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-2 border-y border-line py-4 text-sm">
            <p>
              <span className="text-ink-soft">By </span>
              <span className="font-semibold text-ink">EMBEPET Content Team</span>
              <span className="text-ink-soft">, Evidence &amp; Product Education</span>
            </p>
            <p className="text-ink-soft">Evidence links are listed below for independent review.</p>
          </div>
        </div>
      </header>

      {/* ===== BODY ===== */}
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8">
        <Markdown>{post.content}</Markdown>

        {faqs.length ? (
          <section className="mt-14">
            <h2 className="text-2xl font-semibold tracking-[-0.025em] text-ink">Frequently asked questions</h2>
            <div className="mt-6">
              <FaqAccordion faqs={faqs} />
            </div>
          </section>
        ) : null}

        {sources.length ? (
          <section className="mt-12 border border-line bg-[#f5f3ec] p-6">
            <h2 className="text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-ink-soft">
              Sources &amp; further reading
            </h2>
            <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm text-ink-soft">
              {sources.map((s, i) => (
                <li key={i}>
                  {s.url ? (
                    <a href={s.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-forest-mid hover:underline">
                      {s.label} <ArrowUpRight className="size-3" aria-hidden />
                    </a>
                  ) : (
                    s.label
                  )}
                </li>
              ))}
            </ol>
          </section>
        ) : null}

        <p className="mt-6 text-xs leading-5 text-ink-soft">
          This guide is general educational information and is not veterinary, regulatory or legal advice.
          Product suitability, claims and requirements must be evaluated for the intended animal, formula and market.
        </p>

        <section className="mt-10 flex gap-4 border border-line bg-white p-6">
          <span className="grid size-12 shrink-0 place-items-center border border-forest bg-forest text-lg font-bold text-white">
            E
          </span>
          <div>
            <p className="font-semibold text-ink">EMBEPET Content Team</p>
            <p className="text-xs text-ink-soft">Evidence &amp; Product Education</p>
            <p className="mt-2 text-sm leading-relaxed text-ink-soft">
              The team summarizes published and professional sources for product and procurement
              education. It does not replace veterinary, regulatory or legal review.
            </p>
          </div>
        </section>
      </div>

      {/* ===== RELATED ===== */}
      {related.length ? (
        <aside className="border-t border-line bg-[#f5f3ec]">
          <div className="mx-auto max-w-3xl px-5 py-14 sm:px-8">
            <h2 className="text-lg font-semibold tracking-[-0.02em] text-ink">Keep reading</h2>
            <ul className="mt-5 border-y border-line">
              {related.map((r) => (
                <li key={r.slug} className="border-b border-line last:border-b-0">
                  <Link href={`/learn/${r.slug}`} className="group flex items-center justify-between gap-4 py-4">
                    <span>
                      <span className="mr-3 text-[0.6rem] font-semibold uppercase tracking-[0.1em] text-ink-soft">
                        {r.category}
                      </span>
                      <span className="font-medium text-ink transition-colors group-hover:text-forest-mid">
                        {r.title}
                      </span>
                    </span>
                    <span className="flex shrink-0 items-center gap-2 text-xs text-ink-soft">
                      {r.readMinutes} min
                      <ArrowUpRight className="size-4 text-forest-mid transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden />
                    </span>
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
