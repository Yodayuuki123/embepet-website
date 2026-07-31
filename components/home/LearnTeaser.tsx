import Link from "@/components/site/A";
import { ArrowRight, Clock } from "lucide-react";
import Reveal from "@/components/motion/Reveal";
import SplitHeading from "@/components/motion/SplitHeading";
import { tone } from "@/lib/palette";

type TeaserPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readMinutes: number;
  coverColorKey: string;
  pillar: boolean;
};

const categoryLabel: Record<string, string> = {
  guides: "Guide",
  nutrition: "Nutrition",
  behavior: "Behavior",
  news: "News",
};

export default function LearnTeaser({ posts }: { posts: TeaserPost[] }) {
  if (posts.length === 0) return null;
  return (
    <section className="cv-auto mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28" aria-labelledby="learn-title">
      <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
        <div>
          <Reveal y={20}>
            <p className="eyebrow mb-4 text-forest-mid">Learn hub</p>
          </Reveal>
          <SplitHeading as="h2" id="learn-title" className="display-1 max-w-xl" mode="lines">
            Own the answers your pet can’t ask for.
          </SplitHeading>
        </div>
        <Reveal y={20} delay={0.15}>
          <Link href="/learn" className="link-underline inline-flex items-center gap-1.5 pb-1 text-[0.95rem] font-semibold text-forest">
            All articles <ArrowRight className="size-4" strokeWidth={2.2} />
          </Link>
        </Reveal>
      </div>

      <Reveal stagger={0.1} y={44} className="grid gap-5 md:grid-cols-3">
        {posts.map((p) => {
          const t = tone(p.coverColorKey);
          return (
            <Link
              key={p.slug}
              href={`/learn/${p.slug}`}
              className="card-lift group flex h-full flex-col overflow-hidden rounded-3xl bg-white/80"
            >
              <div className="relative h-44 overflow-hidden" style={{ background: `linear-gradient(150deg, ${t.soft}, ${t.glow}88)` }}>
                <span
                  className="absolute -bottom-10 -right-6 size-40 rounded-full opacity-50 blur-xl transition-transform duration-700 group-hover:scale-125"
                  style={{ background: t.glow }}
                  aria-hidden
                />
                <svg className="absolute bottom-4 left-6 size-16 opacity-90" viewBox="0 0 24 24" fill={t.base} aria-hidden>
                  <circle cx="12" cy="14" r="4.4" />
                  <circle cx="5.6" cy="9.6" r="2.4" />
                  <circle cx="10" cy="6.4" r="2.4" />
                  <circle cx="14" cy="6.4" r="2.4" />
                  <circle cx="18.4" cy="9.6" r="2.4" />
                </svg>
                <span className="absolute left-5 top-5 rounded-full bg-white/90 px-3 py-1 text-[0.68rem] font-bold uppercase tracking-[0.12em] shadow-sm" style={{ color: t.deep }}>
                  {p.pillar ? "Pillar guide" : categoryLabel[p.category] ?? p.category}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="display-3 leading-snug transition-colors group-hover:text-forest-mid">{p.title}</h3>
                <p className="mt-2 line-clamp-2 text-[0.88rem] leading-relaxed text-ink/70">{p.excerpt}</p>
                <p className="mt-auto flex items-center gap-1.5 pt-4 text-[0.8rem] text-ink/60">
                  <Clock className="size-3.5" strokeWidth={2} /> {p.readMinutes} min read
                </p>
              </div>
            </Link>
          );
        })}
      </Reveal>
    </section>
  );
}
