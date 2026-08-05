"use client";

/**
 * B2BTestimonialsWall
 * Pixel-faithful recreation of the reference design:
 * - White background, large rounded cards with drop shadow
 * - Quote text (large, dark) at the top of each card
 * - Circular initial-avatar + name + role at the bottom
 * - Three columns scroll at different speeds (no avatar images needed)
 * - Top & bottom fade mask so cards ghost in/out
 * - Middle column scrolls in reverse
 */

const testimonials = [
  // ── Column 1 (fast, 36s) ─────────────────────────────────────────
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

  // ── Column 2 (medium, 52s, reverse) ─────────────────────────────
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

  // ── Column 3 (slow, 70s) ─────────────────────────────────────────
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

function Card({ t }: { t: (typeof testimonials)[0] }) {
  return (
    <div
      className="mb-6 rounded-[24px] bg-white p-8 shadow-[0_4px_24px_rgba(0,0,0,0.08)]"
      style={{ minHeight: "220px" }}
    >
      {/* Quote body — large, dark, no quote marks */}
      <p className="text-[1.02rem] leading-[1.65] text-[#1a1a1a]">{t.quote}</p>

      {/* Author row */}
      <div className="mt-6 flex items-center gap-3">
        {/* Circular initial avatar */}
        <div
          className="flex size-10 shrink-0 items-center justify-center rounded-full text-[0.78rem] font-bold text-white"
          style={{ backgroundColor: t.color }}
          aria-hidden
        >
          {t.initials}
        </div>
        <div>
          <p className="text-[0.88rem] font-semibold text-[#1a1a1a]">{t.author}</p>
          <p className="text-[0.78rem] text-[#888]">{t.role}</p>
        </div>
      </div>
    </div>
  );
}

interface ColProps {
  cards: typeof col1;
  duration: string;
  reverse?: boolean;
}

function ScrollCol({ cards, duration, reverse = false }: ColProps) {
  const items = [...cards, ...cards];
  return (
    <div
      className="relative overflow-hidden"
      style={{
        WebkitMaskImage:
          "linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)",
        maskImage:
          "linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)",
      }}
    >
      <div
        className="flex flex-col will-change-transform"
        style={{
          animation: `b2b-scroll-y ${duration} linear infinite`,
          animationDirection: reverse ? "reverse" : "normal",
        }}
      >
        {items.map((t, i) => (
          <Card key={`${t.id}-${i}`} t={t} />
        ))}
      </div>
    </div>
  );
}

export default function B2BTestimonialsWall({ isZh = false }: { isZh?: boolean }) {
  return (
    <section
      className="overflow-hidden bg-[#f7f8fa] py-20 md:py-28"
      aria-labelledby="testimonials-title"
    >
      {/* ── Header ── */}
      <div className="mx-auto mb-14 max-w-7xl px-5 text-center sm:px-8 lg:px-10">
        <h2
          id="testimonials-title"
          className="text-[clamp(2rem,4vw,3rem)] font-bold tracking-[-0.02em] text-[#111]"
          style={{ fontFamily: "inherit" }}
        >
          {isZh ? "合作伙伴怎么说" : "What our B2B partners say"}
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-[1rem] leading-7 text-[#666]">
          {isZh
            ? "来自全球 35+ 个国家品牌商、分销商和零售商的真实反馈。"
            : "See what our global brand partners have to say about manufacturing with EMBEPET."}
        </p>
      </div>

      {/* ── Three scrolling columns ── */}
      <div
        className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-5 sm:px-8 md:grid-cols-3 lg:px-12"
        style={{ height: "720px" }}
      >
        {/* Left — fast (36s, up) */}
        <ScrollCol cards={col1} duration="36s" />

        {/* Middle — medium (52s, down) */}
        <ScrollCol cards={col2} duration="52s" reverse />

        {/* Right — slow (70s, up) */}
        <ScrollCol cards={col3} duration="70s" />
      </div>
    </section>
  );
}
