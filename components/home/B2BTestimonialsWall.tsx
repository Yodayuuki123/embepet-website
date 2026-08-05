"use client";

import { useEffect, useRef, useState, useCallback } from "react";

/**
 * B2BTestimonialsWall
 * Three independent vertically-scrolling columns:
 * - Auto-scroll at different speeds
 * - Hover to pause
 * - Click-drag (mouse) and touch-drag to manually scroll
 * - Top & bottom fade mask
 * - White cards on light-grey background
 */

const testimonials = [
  // ── Column 1 ──────────────────────────────────────────────────────
  {
    id: "t01",
    quote:
      "We launched our joint-support soft chew line in under 90 days. EMBEPET handled everything from formula selection to export documentation — the smoothest OEM project we've ever run.",
    author: "Marcus T.",
    role: "Founder · NovaPaw Nutrition",
    initials: "MT",
    color: "#4a7c59",
  },
  {
    id: "t02",
    quote:
      "The GMP and SQF certificates were exactly what our retail buyer required. Having verifiable third-party credentials on file made the vendor-approval process effortless.",
    author: "Sophie L.",
    role: "Procurement Manager · PetVital Europe",
    initials: "SL",
    color: "#3d6b8a",
  },
  {
    id: "t03",
    quote:
      "500-unit MOQ is a game-changer for new brand launches. We tested three SKUs before committing to a full production run — no other factory offered that flexibility.",
    author: "Kenji M.",
    role: "Brand Director · Wanpaku Pet",
    initials: "KM",
    color: "#7a5c8a",
  },
  {
    id: "t04",
    quote:
      "Our calming chew formula needed L-theanine at a precise inclusion rate. The R&D team provided a validated spec sheet and stability data within two weeks. Impressive turnaround.",
    author: "Priya S.",
    role: "Head of Product · ZenPet Labs",
    initials: "PS",
    color: "#8a6a3d",
  },
  {
    id: "t05",
    quote:
      "We've worked with three Chinese contract manufacturers. EMBEPET is the only one that proactively flagged a raw-material substitution risk before it became our problem.",
    author: "Carlos R.",
    role: "Operations Director · Salud Animal MX",
    initials: "CR",
    color: "#5a7a3d",
  },
  {
    id: "t06",
    quote:
      "Batch traceability records arrived within 24 hours of our audit request. That level of documentation transparency is rare in this industry.",
    author: "Annika B.",
    role: "QA Lead · Nordic Pet Co.",
    initials: "AB",
    color: "#3d6a7a",
  },

  // ── Column 2 ──────────────────────────────────────────────────────
  {
    id: "t07",
    quote:
      "The freeze-dried topper line exceeded our palatability targets in consumer testing. Reformulation took one iteration — the team understood our brief from day one.",
    author: "Liam O.",
    role: "NPD Manager · Canine Craft AU",
    initials: "LO",
    color: "#6a5a8a",
  },
  {
    id: "t08",
    quote:
      "We needed FDA Food Facility Registration documentation for our US distributor. EMBEPET had every file ready in a single package — no back-and-forth.",
    author: "Hannah K.",
    role: "Regulatory Affairs · PureBreed Supplements",
    initials: "HK",
    color: "#4a6a5a",
  },
  {
    id: "t09",
    quote:
      "Our private-label omega-3 oil launched in four markets simultaneously. The multi-language label artwork service saved us weeks of coordination with local printers.",
    author: "Fatima A.",
    role: "International Sales · Gulf Pet Health",
    initials: "FA",
    color: "#7a4a5a",
  },
  {
    id: "t10",
    quote:
      "The production team accommodated a last-minute packaging change without delaying the ship date. That kind of responsiveness builds long-term partnerships.",
    author: "Thomas W.",
    role: "Supply Chain Manager · BioBalance Pet",
    initials: "TW",
    color: "#4a5a7a",
  },
  {
    id: "t11",
    quote:
      "Six dosage forms under one roof means we can expand our SKU range without qualifying a second supplier. That simplicity has real commercial value.",
    author: "Yuki H.",
    role: "Category Manager · PetPlus Japan",
    initials: "YH",
    color: "#5a7a6a",
  },
  {
    id: "t12",
    quote:
      "The probiotic powder formula maintained CFU counts well above label claim after 18-month stability testing. We renewed our contract immediately.",
    author: "Elena V.",
    role: "Technical Director · VitaPet Polska",
    initials: "EV",
    color: "#6a4a7a",
  },

  // ── Column 3 ──────────────────────────────────────────────────────
  {
    id: "t13",
    quote:
      "We submitted a brief on Monday and received a commercial route recommendation with sample lead times by Wednesday. The 2-business-day response commitment is real.",
    author: "David C.",
    role: "CEO · Pawsome Brands",
    initials: "DC",
    color: "#3d7a5a",
  },
  {
    id: "t14",
    quote:
      "EMBEPET's HACCP documentation was detailed enough to satisfy our EU food-safety auditor on the first submission. No corrective actions required.",
    author: "Marie-Claire D.",
    role: "Food Safety Manager · Naturel Animal FR",
    initials: "MD",
    color: "#7a5a3d",
  },
  {
    id: "t15",
    quote:
      "The custom heart-shaped soft chew mold became a key brand differentiator. Consumers recognize the shape on shelf — it's become part of our brand identity.",
    author: "Isabella M.",
    role: "Marketing Director · Cuore Pet Italia",
    initials: "IM",
    color: "#5a3d7a",
  },
  {
    id: "t16",
    quote:
      "We co-developed a novel mushroom-blend powder with the EMBEPET R&D team. The formulation is backed by peer-reviewed research and the COA matches every specification.",
    author: "Dr. James P.",
    role: "Chief Science Officer · FungalPet Biotech",
    initials: "JP",
    color: "#3d5a7a",
  },
  {
    id: "t17",
    quote:
      "Switching from our previous manufacturer cut lead time by 30% and reduced per-unit cost by 18%. The quality audit results were better too.",
    author: "Ravi N.",
    role: "Sourcing Director · IndoPet Ventures",
    initials: "RN",
    color: "#6a7a3d",
  },
  {
    id: "t18",
    quote:
      "The export documentation package — COA, MSDS, phytosanitary certificate, and customs HS codes — was complete and accurate on the first submission. Zero delays at customs.",
    author: "Nadia F.",
    role: "Logistics Manager · PetCare MENA",
    initials: "NF",
    color: "#7a3d5a",
  },
];

const col1 = testimonials.slice(0, 6);
const col2 = testimonials.slice(6, 12);
const col3 = testimonials.slice(12, 18);

// ─── Card ─────────────────────────────────────────────────────────────────────
function Card({ t }: { t: (typeof testimonials)[0] }) {
  return (
    <div className="mb-5 rounded-[20px] bg-white p-7 shadow-[0_2px_16px_rgba(0,0,0,0.07)] select-none">
      <p className="text-[0.97rem] leading-[1.7] text-[#1a1a1a]">{t.quote}</p>
      <div className="mt-5 flex items-center gap-3">
        <div
          className="flex size-10 shrink-0 items-center justify-center rounded-full text-[0.75rem] font-bold text-white"
          style={{ backgroundColor: t.color }}
          aria-hidden
        >
          {t.initials}
        </div>
        <div>
          <p className="text-[0.85rem] font-semibold text-[#1a1a1a]">{t.author}</p>
          <p className="text-[0.75rem] text-[#999]">{t.role}</p>
        </div>
      </div>
    </div>
  );
}

// ─── ScrollColumn ─────────────────────────────────────────────────────────────
interface ScrollColProps {
  cards: typeof col1;
  speed: number; // px per second
  reverse?: boolean;
}

function ScrollColumn({ cards, speed, reverse = false }: ScrollColProps) {
  const outerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const posRef = useRef(0);          // current translateY in px
  const rafRef = useRef<number>(0);
  const pausedRef = useRef(false);   // hover pause
  const draggingRef = useRef(false);
  const dragStartY = useRef(0);
  const dragStartPos = useRef(0);
  const halfHeightRef = useRef(0);

  // Measure half-height (one copy of cards) after mount
  useEffect(() => {
    if (innerRef.current) {
      halfHeightRef.current = innerRef.current.scrollHeight / 2;
    }
  }, []);

  // Animation loop
  useEffect(() => {
    const direction = reverse ? 1 : -1; // -1 = scroll up, 1 = scroll down

    const tick = () => {
      if (!pausedRef.current && !draggingRef.current) {
        posRef.current += direction * (speed / 60);

        const half = halfHeightRef.current;
        if (half > 0) {
          // Seamless loop
          if (posRef.current <= -half) posRef.current += half;
          if (posRef.current >= 0) posRef.current -= half;
        }
      }

      if (innerRef.current) {
        innerRef.current.style.transform = `translateY(${posRef.current}px)`;
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [speed, reverse]);

  // ── Mouse drag ──────────────────────────────────────────────────
  const onMouseDown = useCallback((e: React.MouseEvent) => {
    draggingRef.current = true;
    dragStartY.current = e.clientY;
    dragStartPos.current = posRef.current;
    e.preventDefault();
  }, []);

  const onMouseMove = useCallback((e: MouseEvent) => {
    if (!draggingRef.current) return;
    const delta = e.clientY - dragStartY.current;
    posRef.current = dragStartPos.current + delta;
  }, []);

  const onMouseUp = useCallback(() => {
    draggingRef.current = false;
  }, []);

  // ── Touch drag ──────────────────────────────────────────────────
  const onTouchStart = useCallback((e: React.TouchEvent) => {
    draggingRef.current = true;
    dragStartY.current = e.touches[0].clientY;
    dragStartPos.current = posRef.current;
  }, []);

  const onTouchMove = useCallback((e: TouchEvent) => {
    if (!draggingRef.current) return;
    const delta = e.touches[0].clientY - dragStartY.current;
    posRef.current = dragStartPos.current + delta;
  }, []);

  const onTouchEnd = useCallback(() => {
    draggingRef.current = false;
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
    window.addEventListener("touchmove", onTouchMove, { passive: true });
    window.addEventListener("touchend", onTouchEnd);
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onTouchEnd);
    };
  }, [onMouseMove, onMouseUp, onTouchMove, onTouchEnd]);

  const items = [...cards, ...cards]; // duplicate for seamless loop

  return (
    <div
      ref={outerRef}
      className="relative overflow-hidden cursor-grab active:cursor-grabbing"
      style={{
        height: "680px",
        WebkitMaskImage:
          "linear-gradient(to bottom, transparent 0%, black 14%, black 86%, transparent 100%)",
        maskImage:
          "linear-gradient(to bottom, transparent 0%, black 14%, black 86%, transparent 100%)",
      }}
      onMouseEnter={() => { pausedRef.current = true; }}
      onMouseLeave={() => { pausedRef.current = false; draggingRef.current = false; }}
      onMouseDown={onMouseDown}
      onTouchStart={onTouchStart}
    >
      <div ref={innerRef} className="will-change-transform">
        {items.map((t, i) => (
          <Card key={`${t.id}-${i}`} t={t} />
        ))}
      </div>
    </div>
  );
}

// ─── Main export ──────────────────────────────────────────────────────────────
export default function B2BTestimonialsWall({ isZh = false }: { isZh?: boolean }) {
  return (
    <section
      className="overflow-hidden bg-[#f7f8fa] py-20 md:py-28"
      aria-labelledby="testimonials-title"
    >
      {/* Header */}
      <div className="mx-auto mb-14 max-w-7xl px-5 text-center sm:px-8 lg:px-10">
        <h2
          id="testimonials-title"
          className="text-[clamp(2rem,4vw,3rem)] font-bold tracking-[-0.02em] text-[#111]"
        >
          {isZh ? "合作伙伴怎么说" : "What our B2B partners say"}
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-[1rem] leading-7 text-[#666]">
          {isZh
            ? "来自全球 35+ 个国家品牌商、分销商和零售商的真实反馈。"
            : "See what our global brand partners have to say about manufacturing with EMBEPET."}
        </p>
      </div>

      {/* Three columns */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-5 sm:px-8 md:grid-cols-3 lg:px-12">
        {/* Left — fast (60 px/s, up) */}
        <ScrollColumn cards={col1} speed={60} />

        {/* Middle — medium (42 px/s, down) */}
        <ScrollColumn cards={col2} speed={42} reverse />

        {/* Right — slow (28 px/s, up) */}
        <ScrollColumn cards={col3} speed={28} />
      </div>
    </section>
  );
}
