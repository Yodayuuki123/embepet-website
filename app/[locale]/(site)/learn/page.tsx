import type { Metadata } from "next";
import Link from "@/components/site/A";
import { ArrowRight, Bone, Brain, Clock, Heart, Sparkles, Star } from "lucide-react";
import { db } from "@/lib/db";
import { metaWithLocale, breadcrumbJsonLd, faqJsonLd } from "@/lib/seo";
import JsonLd from "@/components/site/JsonLd";
import { container, section, kicker, h2, body, btn, cardHover } from "@/components/b2b/kit";

export function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  return metaWithLocale(params, {
    title: "Pet Supplement Guides & Insights for Brands | EMBEPET",
    description:
      "Vet-reviewed guides on pet supplement formulation, dosage forms, OEM sourcing, and GMP/SQF compliance — practical insights for brand owners, distributors, and retailers.",
    path: "/learn",
  });
}

const categories = [
  { key: "all", label: "All articles" },
  { key: "guides", label: "Complete guides" },
  { key: "nutrition", label: "Nutrition" },
  { key: "behavior", label: "Behavior" },
];

const topics = [
  {
    icon: Bone,
    title: "Hip & Joint Formulas",
    desc: "Glucosamine, chondroitin, green-lipped mussel and MSM sourcing for mobility products.",
    href: "/learn?category=guides",
  },
  {
    icon: Heart,
    title: "Digestive & Gut Health",
    desc: "Probiotic strains, prebiotics and enzyme blends for shelf-stable supplement lines.",
    href: "/learn?category=nutrition",
  },
  {
    icon: Star,
    title: "Skin, Coat & Allergy",
    desc: "Omega-3 (EPA/DHA), biotin and ceramide inputs behind coat-support formats.",
    href: "/learn?category=nutrition",
  },
  {
    icon: Brain,
    title: "Calming & Behavior",
    desc: "L-theanine, tryptophan and hemp inputs for calming chews and daily formats.",
    href: "/learn?category=behavior",
  },
];

const learnFaqs = [
  {
    q: "Who writes the pet supplement guides on this site?",
    a: "Guides are drafted from peer-reviewed veterinary research and reviewed for clinical accuracy before publication. Each guide cites its sources so brand and procurement teams can verify claims independently.",
  },
  {
    q: "How can brand owners use these guides for product development?",
    a: "Use them to scope a formula route, compare dosage forms, understand ingredient evidence and prepare a product brief. When you are ready, our OEM/ODM team confirms feasibility, MOQ and sampling.",
  },
  {
    q: "Do the guides cover regulatory and compliance topics?",
    a: "Yes. Several guides address GMP and SQF manufacturing, COA and stability documentation, and how the required evidence changes by destination market and product claim.",
  },
  {
    q: "How often is new pet supplement content published?",
    a: "New guides and insights are added regularly across formulation, dosage forms, sourcing and compliance. Filter by category above to see the latest articles in each area.",
  },
];

export default async function LearnPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const { category = "all" } = await searchParams;
  const posts = await db.post.findMany({
    where: { published: true, ...(category !== "all" ? { category } : {}) },
    orderBy: [{ pillar: "desc" }, { publishedAt: "desc" }],
  });
  const pillars = posts.filter((p: any) => p.pillar);
  const rest = posts.filter((p: any) => !p.pillar);

  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Learn", path: "/learn" }])} />

      {/* ===== HERO ===== */}
      <section className="border-b border-line bg-[#f5f3ec]">
        <div className={`${container} py-16 sm:py-20`}>
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 text-forest-mid">
              <Sparkles className="size-5" strokeWidth={1.6} aria-hidden />
              <p className={`${kicker}`}>Knowledge hub</p>
            </div>
            <h1 className="mt-5 text-[clamp(1.8rem,3.2vw,2.8rem)] font-semibold leading-[1.1] tracking-[-0.03em] text-ink">
              Pet Supplement Formulation &amp; Sourcing Guides
            </h1>
            <p className="mt-5 max-w-2xl text-[1.02rem] leading-8 text-ink-soft">
              Vet-reviewed, source-cited guides for brand owners, distributors and retail teams —
              covering ingredient evidence, dosage forms, OEM/ODM development and GMP/SQF compliance.
            </p>
          </div>
        </div>
      </section>

      {/* ===== TOPICS ===== */}
      <section className={`${container} ${section}`}>
        <div className="max-w-2xl">
          <p className={`${kicker} text-forest-mid`}>Browse by topic</p>
          <h2 className={`${h2} mt-4`}>Pet Supplement Topics for Brand Owners</h2>
        </div>
        <div className="mt-10 grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {topics.map((topic) => (
            <Link
              key={topic.title}
              href={topic.href}
              className={`group flex flex-col bg-white p-6 ${cardHover}`}
            >
              <topic.icon className="size-6 text-forest-mid" strokeWidth={1.6} aria-hidden />
              <h3 className="mt-8 text-lg font-semibold text-ink group-hover:text-forest-mid">
                {topic.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-ink-soft">{topic.desc}</p>
              <span className="mt-5 flex items-center gap-1.5 text-xs font-semibold text-forest-mid">
                Read guides
                <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" aria-hidden />
              </span>
            </Link>
          ))}
        </div>
      </section>
      {/* ===== ARTICLES ===== */}
      <section className="border-y border-line bg-white">
        <div className={`${container} ${section}`}>
          <div className="flex flex-col gap-6 border-b border-line pb-8 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className={`${kicker} text-forest-mid`}>Articles &amp; insights</p>
              <h2 className={`${h2} mt-4`}>Latest Pet Supplement Guides</h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((c) => (
                <Link
                  key={c.key}
                  href={c.key === "all" ? "/learn" : `/learn?category=${c.key}`}
                  className={`flex min-h-11 items-center border px-4 py-2 text-xs font-semibold transition-colors ${
                    category === c.key
                      ? "border-forest bg-forest text-white"
                      : "border-line bg-white text-ink-soft hover:border-forest/50 hover:text-forest"
                  }`}
                >
                  {c.label}
                </Link>
              ))}
            </div>
          </div>

          {pillars.length > 0 ? (
            <div className="mt-10 grid gap-px border border-line bg-line lg:grid-cols-3">
              {pillars.map((post: any) => (
                <Link
                  key={post.id}
                  href={`/learn/${post.slug}`}
                  className={`group flex h-full flex-col bg-forest-deep p-7 text-white ${cardHover}`}
                >
                  <p className="text-[0.65rem] font-semibold uppercase tracking-[0.13em] text-amber-soft">
                    Complete guide
                  </p>
                  <h3 className="mt-3 text-xl font-semibold leading-snug">{post.title}</h3>
                  <p className="mt-3 line-clamp-3 text-sm leading-6 text-white/65">{post.excerpt}</p>
                  <p className="mt-auto flex items-center gap-2 pt-6 text-xs text-white/60">
                    <Clock className="size-3.5" aria-hidden /> {post.readMinutes} min read
                    <ArrowRight className="ml-auto size-4 transition-transform group-hover:translate-x-1" aria-hidden />
                  </p>
                </Link>
              ))}
            </div>
          ) : null}

          {rest.length > 0 ? (
            <div className="mt-6 grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
              {rest.map((post: any) => (
                <Link
                  key={post.id}
                  href={`/learn/${post.slug}`}
                  className={`group flex h-full flex-col bg-white p-6 ${cardHover}`}
                >
                  <span className="w-fit border border-forest/25 bg-forest/5 px-2 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.1em] text-forest">
                    {post.category}
                  </span>
                  <h3 className="mt-4 text-lg font-semibold leading-snug text-ink transition-colors group-hover:text-forest-mid">
                    {post.title}
                  </h3>
                  <p className="mt-2.5 line-clamp-3 text-sm leading-6 text-ink-soft">{post.excerpt}</p>
                  <p className="mt-auto flex items-center gap-2 pt-5 text-xs text-ink-soft">
                    <Clock className="size-3.5" aria-hidden /> {post.readMinutes} min read
                    <ArrowRight className="ml-auto size-4 text-forest-mid transition-transform group-hover:translate-x-1" aria-hidden />
                  </p>
                </Link>
              ))}
            </div>
          ) : null}

          {posts.length === 0 ? (
            <p className="mt-14 text-center text-sm text-ink-soft">
              No articles in this category yet. Check back soon for new content.
            </p>
          ) : null}
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="border-b border-line bg-[#f5f3ec]">
        <JsonLd data={faqJsonLd(learnFaqs)} />
        <div className={`${container} ${section}`}>
          <div className="grid gap-12 lg:grid-cols-[0.36fr_0.64fr]">
            <div>
              <p className={`${kicker} text-forest-mid`}>FAQ</p>
              <h2 className={`${h2} mt-4`}>Pet Supplement Knowledge Hub FAQ</h2>
              <p className="mt-5 text-sm leading-7 text-ink-soft">
                How brand owners and procurement teams can use these guides for product development.
              </p>
            </div>
            <dl className="border-t border-line">
              {learnFaqs.map((item) => (
                <div key={item.q} className="border-b border-line py-6">
                  <dt className="text-lg font-semibold text-ink">{item.q}</dt>
                  <dd className="mt-3 text-sm leading-7 text-ink-soft">{item.a}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="bg-forest-deep text-white">
        <div className={`${container} flex flex-col gap-8 py-16 lg:flex-row lg:items-center lg:justify-between`}>
          <div className="max-w-2xl">
            <h2 className="text-3xl font-medium tracking-[-0.035em]">
              Ready to turn research into a product?
            </h2>
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
