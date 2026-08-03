"use client";

import Link from "@/components/site/A";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/motion/Reveal";
import SplitHeading from "@/components/motion/SplitHeading";
import { tone } from "@/lib/palette";

const CONCERN_IMAGES: Record<string, string> = {
  "hip-joint": "/images/buda/ai_joint_care.jpg",
  "digestion": "/images/buda/ai_probiotic.jpg",
  "skin-coat": "/images/buda/ai_ingredients_close.jpg",
  "calming": "/images/buda/ai_cat_healthy.jpg",
  "immunity-allergy": "/images/buda/ai_lab.jpg",
  "senior-cognitive": "/images/buda/ai_dog_healthy.jpg",
  "urinary": "/images/buda/ai_droplets.jpg",
  "daily-essentials": "/images/buda/ai_soft_chews.jpg",
};

type Collection = {
  slug: string;
  name: string;
  tagline: string | null;
  colorKey: string;
  icon: string | null;
};

function Card({ c }: { c: Collection }) {
  const t = tone(c.colorKey);
  return (
    <Link
      href={`/collections/${c.slug}`}
      className="group relative shrink-0 overflow-hidden rounded-3xl cursor-pointer"
      style={{ width: "clamp(200px, 28vw, 300px)", height: "clamp(260px, 36vw, 400px)" }}
    >
      <Image
        src={CONCERN_IMAGES[c.slug]}
        alt={c.name}
        fill
        sizes="(max-width: 640px) 200px, 300px"
        className="object-cover transition-transform duration-700 group-hover:scale-[1.08]"
      />
      <div className="absolute inset-0" style={{ background: `linear-gradient(to top, ${t.base}88 0%, ${t.base}22 25%, transparent 40%, transparent 100%)` }} />
      <div className="absolute -top-8 -right-8 size-32 rounded-full opacity-25 blur-2xl transition-all duration-700 group-hover:scale-150 group-hover:opacity-50" style={{ background: t.glow }} />
      <div className="absolute bottom-0 left-0 right-0 p-5">
        <p className="text-[0.68rem] font-bold tracking-[0.16em] uppercase text-cream/90 mb-1.5">{c.tagline || "Supplement"}</p>
        <h3 className="text-xl font-bold text-cream leading-tight">{c.name}</h3>
        <div className="flex items-center gap-1.5 mt-3 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
          <span className="text-[0.78rem] font-semibold text-cream/80">Explore</span>
          <ArrowRight className="size-3.5 text-cream/80" />
        </div>
      </div>
    </Link>
  );
}

export default function ConcernsGrid({ collections }: { collections: Collection[] }) {
  const items = collections.filter((c) => CONCERN_IMAGES[c.slug]);

  return (
    <section className="cv-auto relative py-16 md:py-24 overflow-hidden" aria-labelledby="concerns-title">
      <div className="mx-auto max-w-7xl px-5 md:px-8 mb-10">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-xl">
            <Reveal y={20}>
              <p className="eyebrow mb-4 text-forest-mid">Shop by concern</p>
            </Reveal>
            <SplitHeading as="h2" id="concerns-title" className="display-1" mode="lines">
              Start with what your<br />pet needs most.
            </SplitHeading>
          </div>
          <Reveal y={20} delay={0.15}>
            <Link
              href="/shop"
              className="inline-flex h-11 items-center gap-2 rounded-full bg-forest px-6 text-[0.88rem] font-semibold text-cream hover:opacity-90 transition-opacity"
            >
              View all <ArrowRight className="size-4" />
            </Link>
          </Reveal>
        </div>
      </div>

      {/* CSS 动画无缝滚动 */}
      <div className="relative overflow-hidden" style={{ maskImage: "linear-gradient(to right, transparent 0%, black 3%, black 97%, transparent 100%)" }}>
        <div
          className="flex gap-3 px-5 md:px-8 w-max"
          style={{ animation: `scroll-cards ${items.length * 8}s linear infinite` }}
        >
          {[...items, ...items].map((c, i) => (
            <Card key={`${c.slug}-${i}`} c={c} />
          ))}
        </div>
      </div>

      {/* 注入 keyframes */}
      <style jsx>{`
        @keyframes scroll-cards {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
