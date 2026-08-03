"use client";
import Link from "@/components/site/A";
import { ArrowRight, FlaskConical, Microscope, Award, CheckCircle2 } from "lucide-react";
import Reveal from "@/components/motion/Reveal";
import SplitHeading from "@/components/motion/SplitHeading";
import Counter from "@/components/motion/Counter";

const stats = [
  { to: 2016, suffix: "", label: "Manufacturing entity established" },
  { to: 3000, suffix: " m²", label: "Taixing facility area" },
  { to: 3, suffix: "", label: "Production lines" },
  { to: 6, suffix: "", label: "Supported product formats" },
];

export default function ScienceBand() {
  return (
    <section className="cv-auto relative mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28" aria-labelledby="science-title">

      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <div>
          <Reveal y={20}>
            <p className="eyebrow mb-4 text-forest-mid">Why EMBEPET</p>
          </Reveal>
          <SplitHeading as="h2" id="science-title" className="display-1" mode="lines">
            Quality records procurement teams can verify.
          </SplitHeading>
          <Reveal y={26} delay={0.1}>
            <p className="mt-6 max-w-md leading-relaxed text-ink-soft">
              Review the manufacturing entity, licensed scope, audit identifiers, certificate dates
              and project-specific quality requirements before approving a supplier.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {[
                { icon: FlaskConical, label: "Approved specifications" },
                { icon: Microscope, label: "Project-specific testing" },
                { icon: Award, label: "GMP audit + SQF records" },
              ].map(({ icon: Icon, label }) => (
                <span
                  key={label}
                  className="flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-[0.85rem] font-semibold text-forest"
                >
                  <Icon className="size-4" strokeWidth={1.9} /> {label}
                </span>
              ))}
            </div>
          <Link
            href="/science"
            className="link-underline mt-8 inline-flex items-center gap-1.5 pb-1 font-semibold text-forest"
          >
            Read our quality standards <ArrowRight className="size-4" strokeWidth={2.2} />
          </Link>

          {/* 认证标签 */}
          <div className="mt-6 flex flex-wrap gap-2">
            {["Eurofins GMP audit", "SQF Food Safety", "SQF Quality", "FDA facility registered"].map((cert) => (
              <span key={cert} className="flex items-center gap-1.5 rounded-full bg-forest/8 px-3 py-1.5 text-[0.78rem] font-semibold text-forest-mid">
                <CheckCircle2 className="size-3" strokeWidth={2.5} /> {cert}
              </span>
            ))}
          </div>
        </Reveal>
      </div>

        <div className="grid content-center gap-4 sm:grid-cols-2">
          {stats.map((s, i) => (
            <Reveal key={i} delay={i * 0.08} y={36}>
              <div className="card-lift h-full rounded-3xl bg-white/60 p-7">
                <p className="font-semibold text-forest" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.6rem, 4vw, 3.6rem)", lineHeight: 1 }}>
                  <Counter to={s.to} suffix={s.suffix} decimals={0} />
                </p>
                <p className="mt-3 text-[0.9rem] leading-relaxed text-ink-soft">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Legacy editorial callout; current B2B pages use sourced evidence instead. */}
      <Reveal y={40}>
        <figure className="relative mt-16 overflow-hidden rounded-[2rem] bg-forest-mid p-8 text-cream md:mt-20 md:p-14 grain grain-light">
          <svg className="absolute -right-6 -top-8 size-40 text-cream/10" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
            <path d="M9.6 4C5.9 6 3.5 9.4 3.5 13.8c0 3.6 2.3 6.2 5.4 6.2 2.8 0 4.9-2 4.9-4.8 0-2.6-1.9-4.5-4.4-4.5-.5 0-1 .1-1.2.2.4-2.2 2.3-4.6 4.4-5.7L9.6 4Z" />
          </svg>
          <blockquote className="max-w-3xl">
            <p className="display-2 text-cream">
              Ingredient amounts, quality specifications and label claims should be checked against
              the intended formula, evidence base and destination market before launch.
            </p>
          </blockquote>
          <figcaption className="mt-6 flex items-center gap-4">
            <span className="grid size-12 place-items-center rounded-full bg-cream/15 font-semibold" style={{ fontFamily: "var(--font-display)" }}>
              QA
            </span>
            <div>
              <p className="font-semibold">EMBEPET quality note</p>
              <p className="text-[0.85rem] text-cream/65">Project-specific evidence review</p>
            </div>
          </figcaption>
        </figure>
      </Reveal>
    </section>
  );
}
