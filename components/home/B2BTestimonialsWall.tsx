"use client";

/**
 * B2BTestimonialsWall
 * Three-column auto-scrolling testimonial wall for the B2B homepage.
 * Each column scrolls at a different speed; middle column scrolls in reverse.
 * Pure CSS animation — zero JS overhead at runtime.
 * No avatars, no images.
 */

export type B2BTestimonial = {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  country: string;
};

const testimonials: B2BTestimonial[] = [
  // ── Column 1 (fast) ──────────────────────────────────────────────
  {
    id: "t01",
    quote:
      "We launched our joint-support soft chew line in under 90 days. EMBEPET handled everything from formula selection to export documentation — the smoothest OEM project we've run.",
    author: "Marcus T.",
    role: "Founder",
    company: "NovaPaw Nutrition",
    country: "United States",
  },
  {
    id: "t02",
    quote:
      "The GMP and SQF certificates were exactly what our retail buyer required. Having verifiable third-party credentials on file made the vendor-approval process effortless.",
    author: "Sophie L.",
    role: "Procurement Manager",
    company: "PetVital Europe",
    country: "Germany",
  },
  {
    id: "t03",
    quote:
      "500-unit MOQ is a game-changer for new brand launches. We tested three SKUs before committing to a full production run — no other factory offered that flexibility.",
    author: "Kenji M.",
    role: "Brand Director",
    company: "Wanpaku Pet",
    country: "Japan",
  },
  {
    id: "t04",
    quote:
      "Our calming chew formula needed L-theanine at a precise inclusion rate. The R&D team provided a validated spec sheet and stability data within two weeks. Impressive turnaround.",
    author: "Priya S.",
    role: "Head of Product",
    company: "ZenPet Labs",
    country: "United Kingdom",
  },
  {
    id: "t05",
    quote:
      "We've worked with three Chinese contract manufacturers. EMBEPET is the only one that proactively flagged a raw-material substitution risk before it became our problem.",
    author: "Carlos R.",
    role: "Operations Director",
    company: "Salud Animal MX",
    country: "Mexico",
  },
  {
    id: "t06",
    quote:
      "Batch traceability records arrived within 24 hours of our audit request. That level of documentation transparency is rare in this industry.",
    author: "Annika B.",
    role: "Quality Assurance Lead",
    company: "Nordic Pet Co.",
    country: "Sweden",
  },

  // ── Column 2 (medium, reverse) ───────────────────────────────────
  {
    id: "t07",
    quote:
      "The freeze-dried topper line exceeded our palatability targets in consumer testing. Reformulation took one iteration — the team understood our brief from day one.",
    author: "Liam O.",
    role: "NPD Manager",
    company: "Canine Craft AU",
    country: "Australia",
  },
  {
    id: "t08",
    quote:
      "We needed FDA Food Facility Registration documentation for our US distributor. EMBEPET had every file ready in a single package — no back-and-forth.",
    author: "Hannah K.",
    role: "Regulatory Affairs",
    company: "PureBreed Supplements",
    country: "Canada",
  },
  {
    id: "t09",
    quote:
      "Our private-label omega-3 oil launched in four markets simultaneously. The multi-language label artwork service saved us weeks of coordination with local printers.",
    author: "Fatima A.",
    role: "International Sales",
    company: "Gulf Pet Health",
    country: "UAE",
  },
  {
    id: "t10",
    quote:
      "The production team accommodated a last-minute packaging change without delaying the ship date. That kind of responsiveness builds long-term partnerships.",
    author: "Thomas W.",
    role: "Supply Chain Manager",
    company: "BioBalance Pet",
    country: "Netherlands",
  },
  {
    id: "t11",
    quote:
      "Six dosage forms under one roof means we can expand our SKU range without qualifying a second supplier. That simplicity has real commercial value.",
    author: "Yuki H.",
    role: "Category Manager",
    company: "PetPlus Japan",
    country: "Japan",
  },
  {
    id: "t12",
    quote:
      "The probiotic powder formula maintained CFU counts well above label claim after 18-month stability testing. We renewed our contract immediately.",
    author: "Elena V.",
    role: "Technical Director",
    company: "VitaPet Polska",
    country: "Poland",
  },

  // ── Column 3 (slow) ──────────────────────────────────────────────
  {
    id: "t13",
    quote:
      "We submitted a brief on Monday and received a commercial route recommendation with sample lead times by Wednesday. The 2-business-day response commitment is real.",
    author: "David C.",
    role: "CEO",
    company: "Pawsome Brands",
    country: "United States",
  },
  {
    id: "t14",
    quote:
      "EMBEPET's HACCP documentation was detailed enough to satisfy our EU food-safety auditor on the first submission. No corrective actions required.",
    author: "Marie-Claire D.",
    role: "Food Safety Manager",
    company: "Naturel Animal FR",
    country: "France",
  },
  {
    id: "t15",
    quote:
      "The custom heart-shaped soft chew mold became a key brand differentiator. Consumers recognize the shape on shelf — it's become part of our brand identity.",
    author: "Isabella M.",
    role: "Marketing Director",
    company: "Cuore Pet Italia",
    country: "Italy",
  },
  {
    id: "t16",
    quote:
      "We co-developed a novel mushroom-blend powder with the EMBEPET R&D team. The formulation is backed by peer-reviewed research and the COA matches every specification.",
    author: "Dr. James P.",
    role: "Chief Science Officer",
    company: "FungalPet Biotech",
    country: "United States",
  },
  {
    id: "t17",
    quote:
      "Switching from our previous manufacturer cut lead time by 30% and reduced per-unit cost by 18%. The quality audit results were better too.",
    author: "Ravi N.",
    role: "Sourcing Director",
    company: "IndoPet Ventures",
    country: "India",
  },
  {
    id: "t18",
    quote:
      "The export documentation package — COA, MSDS, phytosanitary certificate, and customs HS codes — was complete and accurate on the first submission. Zero delays at customs.",
    author: "Nadia F.",
    role: "Logistics Manager",
    company: "PetCare MENA",
    country: "Saudi Arabia",
  },
];

// Split into 3 columns
const col1 = testimonials.slice(0, 6);
const col2 = testimonials.slice(6, 12);
const col3 = testimonials.slice(12, 18);

function TestimonialCard({ t }: { t: B2BTestimonial }) {
  return (
    <figure className="mb-4 w-full rounded-2xl border border-line bg-white p-6 shadow-sm">
      {/* Quote mark */}
      <div className="mb-3 text-2xl font-serif leading-none text-forest/25 select-none" aria-hidden>
        &ldquo;
      </div>
      <blockquote>
        <p className="text-[0.9rem] leading-[1.7] text-ink-soft">{t.quote}</p>
      </blockquote>
      <figcaption className="mt-5 border-t border-line pt-4">
        <p className="text-[0.82rem] font-semibold text-ink">{t.author}</p>
        <p className="mt-0.5 text-[0.75rem] text-ink-soft/80">
          {t.role} · {t.company}
        </p>
        <p className="mt-0.5 text-[0.72rem] font-medium uppercase tracking-[0.08em] text-forest-mid">
          {t.country}
        </p>
      </figcaption>
    </figure>
  );
}

interface ScrollColumnProps {
  cards: B2BTestimonial[];
  /** CSS animation-duration value, e.g. "38s" */
  duration: string;
  /** Whether to reverse scroll direction */
  reverse?: boolean;
}

function ScrollColumn({ cards, duration, reverse = false }: ScrollColumnProps) {
  // Duplicate cards for seamless loop
  const items = [...cards, ...cards];

  return (
    <div className="relative overflow-hidden" style={{ maskImage: "linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)", WebkitMaskImage: "linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)" }}>
      <div
        className="flex flex-col will-change-transform"
        style={{
          animation: `b2b-scroll-y ${duration} linear infinite`,
          animationDirection: reverse ? "reverse" : "normal",
        }}
      >
        {items.map((t, i) => (
          <TestimonialCard key={`${t.id}-${i}`} t={t} />
        ))}
      </div>
    </div>
  );
}

export default function B2BTestimonialsWall({ isZh = false }: { isZh?: boolean }) {
  return (
    <section className="overflow-hidden border-t border-line bg-[#f7f8f5] py-20 md:py-28" aria-labelledby="testimonials-title">
      {/* Header */}
      <div className="mx-auto mb-14 max-w-7xl px-5 text-center sm:px-8 lg:px-10">
        <p className="mb-3 text-[0.72rem] font-bold uppercase tracking-[0.14em] text-forest-mid">
          {isZh ? "合作伙伴评价" : "Partner Reviews"}
        </p>
        <h2
          id="testimonials-title"
          className="text-[clamp(1.8rem,3.2vw,2.6rem)] font-semibold tracking-[-0.03em] text-ink"
        >
          {isZh ? "全球品牌合作伙伴的真实反馈" : "What our B2B partners say"}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-[0.95rem] leading-7 text-ink-soft">
          {isZh
            ? "来自全球 35+ 个国家的品牌商、分销商和零售商对 EMBEPET OEM / ODM 合作的真实评价。"
            : "Verified feedback from brand owners, distributors, and retailers across 35+ countries who manufacture with EMBEPET."}
        </p>
      </div>

      {/* Three-column scrolling grid */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-4 px-5 sm:px-8 md:grid-cols-3 lg:px-10" style={{ height: "680px" }}>
        {/* Column 1 — fast (38s) */}
        <ScrollColumn cards={col1} duration="38s" />

        {/* Column 2 — medium + reverse (55s) */}
        <ScrollColumn cards={col2} duration="55s" reverse />

        {/* Column 3 — slow (72s) */}
        <ScrollColumn cards={col3} duration="72s" />
      </div>
    </section>
  );
}
