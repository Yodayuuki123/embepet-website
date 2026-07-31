import Link from "@/components/site/A";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/motion/Reveal";

const species = [
  {
    slug: "collections/dogs",
    label: "For Dogs",
    img: "/images/buda/ai_homepage_dogs.jpg",
    title: "Hip & Joint · Gut\nSkin · Calm · Immunity",
    cta: "Shop dog supplements",
  },
  {
    slug: "collections/cats",
    label: "For Cats",
    img: "/images/buda/ai_homepage_cats.jpg",
    title: "Urinary · Hairball\nL-Lysine · Immunity",
    cta: "Shop cat supplements",
  },
];

/** 首页底部品类双拼 CTA — 全出血大图双卡片 */
export default function SpeciesCTA() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
      <div className="grid gap-3 md:grid-cols-2" style={{ height: "420px" }}>
        {species.map((s, i) => (
          <Reveal
            key={s.slug}
            delay={i * 0.06}
            className="group relative overflow-hidden rounded-3xl"
          >
            <Link href={`/${s.slug}`} className="block h-full">
              <img
                src={s.img}
                alt={s.label}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.08]"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, rgba(10,18,10,0.85) 0%, rgba(10,18,10,0.15) 60%, transparent 100%)",
                }}
              />
              <div className="absolute bottom-0 left-0 right-0 p-7">
                <p className="mb-2 text-[0.65rem] font-bold tracking-[0.2em] uppercase text-cream/40">
                  {s.label}
                </p>
                <p className="mb-2 text-3xl font-bold leading-tight text-cream whitespace-pre-line">
                  {s.title}
                </p>
                <div className="mt-4 flex translate-y-2 items-center gap-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <span className="text-[0.8rem] font-semibold text-cream/70">{s.cta}</span>
                  <ArrowRight className="size-4 text-cream/70" />
                </div>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
