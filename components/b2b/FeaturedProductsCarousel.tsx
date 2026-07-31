"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "@/components/site/A";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";

/* ═══════════════════════════════════════════════════════════════
   FeaturedProductsCarousel — homepage best-seller showcase.
   Each product is described in full on its own slide (positioning,
   format, key actives, who it suits). Left/right slide with the
   neighbouring slides peeking on both sides so buyers can see what
   comes next. Square B2B skin, forest palette.
   ═══════════════════════════════════════════════════════════════ */

type Featured = {
  name: string;
  tag: string;
  species: string;
  format: string;
  image: string;
  lead: string;
  actives: string[];
  reference: string;
  moq: string;
};

const FEATURED: Featured[] = [
  {
    name: "Hip & Joint Mobility Chews",
    tag: "Best seller · Joint & mobility",
    species: "Dogs · adult & senior",
    format: "Soft chew",
    image: "/products/hip-joint-mobility-chews.png",
    lead: "Our highest-volume mobility line. A palatable meat-based soft chew built around a clinically familiar joint stack, formulated for adult and senior dogs and sized for daily long-term use. A dependable anchor SKU for any dog-wellness range.",
    actives: [
      "Glucosamine + chondroitin cartilage matrix",
      "MSM and green-lipped mussel for comfort",
      "Turmeric / boswellia option for premium tiers",
    ],
    reference: "US$3.39 / unit",
    moq: "From 5 units",
  },
  {
    name: "Probiotic Gut Health Chews",
    tag: "Best seller · Digestive",
    species: "Dogs & cats",
    format: "Soft chew",
    image: "/products/probiotic-gut-health-chews.png",
    lead: "A daily digestive chew that positions easily across both dog and cat ranges. Multi-strain probiotics with prebiotic fibre and pumpkin support stool quality and gut balance — a repeat-purchase staple that drives subscription and bundle revenue.",
    actives: [
      "Multi-strain probiotic blend (CFU to spec)",
      "Prebiotic fibre + pumpkin for stool quality",
      "Digestive enzyme option for sensitive lines",
    ],
    reference: "US$3.68 / unit",
    moq: "From 15 units",
  },
  {
    name: "Skin & Coat Chews + Salmon Oil",
    tag: "Best seller · Skin & coat",
    species: "Dogs & cats",
    format: "Soft chew",
    image: "/products/skin-coat-salmon-chews.png",
    lead: "A coat-care soft chew designed for beauty-and-wellness positioning. Omega-rich salmon oil with biotin and zinc supports barrier health and a glossy coat — an efficient price point that performs strongly in retail and marketplace channels.",
    actives: [
      "Salmon oil — EPA / DHA omega-3",
      "Biotin + zinc for skin barrier",
      "Vitamin E antioxidant support",
    ],
    reference: "US$2.06 / unit",
    moq: "From 50 units",
  },
  {
    name: "10-in-1 Multivitamin Chews",
    tag: "Best seller · Daily wellness",
    species: "Dogs · all life stages",
    format: "Soft chew",
    image: "/products/multivitamin-10-in-1-chews.png",
    lead: "A broad daily-wellness chew covering ten functional areas in one format — the mainstream entry SKU most brands launch first. Low reference cost and wide appeal make it an ideal volume driver and cross-sell foundation for a supplement line.",
    actives: [
      "10 vitamin & mineral functional groups",
      "Whole-body daily wellness positioning",
      "Mainstream price point for volume",
    ],
    reference: "US$1.62 / unit",
    moq: "Confirm by quote",
  },
  {
    name: "Omega-3 Wild Fish Oil",
    tag: "Best seller · Skin & coat",
    species: "Dogs & cats",
    format: "Pump oil",
    image: "/products/omega-3-wild-fish-oil.png",
    lead: "A pump-format wild fish oil for brands that want a liquid topper alongside their chews. High-EPA/DHA support for skin, coat and daily nutrition, with a format that signals premium and suits larger fill sizes and higher-volume programs.",
    actives: [
      "Wild-sourced omega-3 (EPA / DHA)",
      "Pump dosing for topper positioning",
      "Skin, coat & daily nutrition support",
    ],
    reference: "US$2.65 / unit",
    moq: "From 3,000 units",
  },
];
export default function FeaturedProductsCarousel() {
  const [active, setActive] = useState(0);
  const count = FEATURED.length;
  const touchStartX = useRef<number | null>(null);

  const go = useCallback(
    (dir: number) => setActive((i) => (i + dir + count) % count),
    [count],
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") go(-1);
      if (e.key === "ArrowRight") go(1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go]);

  function onTouchStart(e: React.TouchEvent) {
    touchStartX.current = e.touches[0].clientX;
  }
  function onTouchEnd(e: React.TouchEvent) {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(delta) > 50) go(delta < 0 ? 1 : -1);
    touchStartX.current = null;
  }

  const current = FEATURED[active];

  return (
    <div
      className="relative"
      role="group"
      aria-roledescription="carousel"
      aria-label="Best-selling pet supplements"
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {/* ---- Track: neighbours peek on both sides ---- */}
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
          style={{
            transform: `translateX(calc(${-active * 82}% + 9%))`,
          }}
        >
          {FEATURED.map((p, i) => {
            const isActive = i === active;
            return (
              <div
                key={p.name}
                className="w-[82%] shrink-0 px-2 sm:px-3"
                aria-hidden={!isActive}
              >
                <div
                  className={`grid overflow-hidden rounded-sm border bg-white transition-all duration-500 lg:grid-cols-2 ${
                    isActive
                      ? "border-forest/40 opacity-100 shadow-[0_30px_60px_-40px_rgb(20_41_29_/_0.5)]"
                      : "border-line opacity-40"
                  }`}
                >
                  {/* Image side */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-[#f3efe6] lg:aspect-auto lg:min-h-[440px]">
                    <Image
                      src={p.image}
                      alt={`${p.name} — wholesale pet supplement`}
                      fill
                      className="object-contain p-8"
                      sizes="(min-width: 1024px) 40vw, 82vw"
                    />
                    <span className="absolute left-5 top-5 border border-line bg-white/95 px-3 py-1.5 text-[0.66rem] font-bold uppercase tracking-[0.13em] text-forest">
                      {p.tag}
                    </span>
                  </div>

                  {/* Copy side — each product written out in full */}
                  <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">
                    <p className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-forest-mid">
                      {p.species} · {p.format}
                    </p>
                    <h3 className="mt-3 text-[clamp(1.5rem,2.4vw,2.1rem)] font-semibold leading-[1.15] tracking-[-0.02em] text-ink">
                      {p.name}
                    </h3>
                    <p className="mt-4 text-[0.95rem] leading-7 text-ink-soft">{p.lead}</p>

                    <ul className="mt-6 grid gap-2.5 border-t border-line pt-6">
                      {p.actives.map((a) => (
                        <li key={a} className="flex items-start gap-2.5">
                          <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-forest-mid/[0.12]">
                            <Check className="size-3 text-forest-mid" strokeWidth={2.5} />
                          </span>
                          <span className="text-[0.88rem] leading-6 text-ink">{a}</span>
                        </li>
                      ))}
                    </ul>

                    <dl className="mt-7 grid grid-cols-2 gap-4 border-t border-line pt-6">
                      <div>
                        <dt className="text-[0.66rem] uppercase tracking-[0.1em] text-ink-soft">
                          Reference price
                        </dt>
                        <dd className="mt-1 text-lg font-semibold text-forest">{p.reference}</dd>
                      </div>
                      <div>
                        <dt className="text-[0.66rem] uppercase tracking-[0.1em] text-ink-soft">
                          Starting MOQ
                        </dt>
                        <dd className="mt-1 text-lg font-semibold text-ink">{p.moq}</dd>
                      </div>
                    </dl>

                    <div className="mt-8">
                      <Link
                        href="/private-label#inquiry"
                        className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-forest hover:text-forest-mid"
                        tabIndex={isActive ? 0 : -1}
                      >
                        Request specification &amp; quote
                        <ArrowRight className="size-4" aria-hidden />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* ---- Controls ---- */}
      <div className="mt-8 flex items-center justify-between gap-4">
        <div className="flex items-center gap-2.5">
          {FEATURED.map((p, i) => (
            <button
              key={p.name}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`Show ${p.name}`}
              aria-current={i === active}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === active ? "w-8 bg-forest" : "w-3 bg-line hover:bg-forest/40"
              }`}
            />
          ))}
          <span className="ml-3 text-[0.78rem] font-semibold tabular-nums text-ink-soft">
            {String(active + 1).padStart(2, "0")} / {String(count).padStart(2, "0")}
          </span>
        </div>

        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => go(-1)}
            aria-label="Previous product"
            className="grid size-12 place-items-center rounded-sm border border-line bg-white text-ink transition-colors hover:border-forest hover:bg-forest/5 hover:text-forest"
          >
            <ArrowLeft className="size-5" />
          </button>
          <button
            type="button"
            onClick={() => go(1)}
            aria-label="Next product"
            className="grid size-12 place-items-center rounded-sm border border-line bg-white text-ink transition-colors hover:border-forest hover:bg-forest/5 hover:text-forest"
          >
            <ArrowRight className="size-5" />
          </button>
        </div>
      </div>

      <span className="sr-only" aria-live="polite">
        Showing product {active + 1} of {count}: {current.name}
      </span>
    </div>
  );
}


