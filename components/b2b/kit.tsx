import type { ReactNode } from "react";
import { ImageIcon } from "lucide-react";

/* ═══════════════════════════════════════════════════════════════
   B2B DESIGN KIT — one shared source of truth for the whole site.
   Import these tokens/components on every marketing page so type
   scale, spacing rhythm, buttons and cards stay perfectly
   consistent. This is what makes the site read as one system
   instead of a patchwork of templates.
   ═══════════════════════════════════════════════════════════════ */

/* ---------- Layout rhythm ---------- */
export const container = "mx-auto max-w-7xl px-5 sm:px-8 lg:px-10";
export const containerWide = "mx-auto max-w-[1480px] px-5 sm:px-8 lg:px-10";
export const section = "py-20 sm:py-28";
export const sectionSm = "py-14 sm:py-20";

/* ---------- Type scale (Inter, professional B2B) ---------- */
export const kicker = "text-[0.72rem] font-bold uppercase tracking-[0.18em]";
export const h2 =
  "text-[clamp(1.85rem,3.4vw,2.7rem)] font-semibold leading-[1.14] tracking-[-0.025em] text-ink";
export const h3 =
  "text-[clamp(1.25rem,1.9vw,1.6rem)] font-semibold leading-[1.2] tracking-[-0.015em] text-ink";
export const lead = "text-[1.05rem] leading-8 text-ink-soft";
export const body = "text-[0.95rem] leading-7 text-ink-soft";
export const bodySm = "text-[0.88rem] leading-6 text-ink-soft";

/* ---------- Buttons (square 2px corners = B2B skin) ---------- */
const btnBase =
  "inline-flex min-h-[48px] items-center justify-center gap-2 rounded-sm px-6 text-[0.88rem] font-semibold transition-all duration-200 active:scale-[0.97]";
export const btn = {
  base: btnBase,
  primary: `${btnBase} border border-forest bg-forest text-white hover:border-forest-mid hover:bg-forest-mid`,
  outline: `${btnBase} border border-ink/25 bg-transparent text-ink hover:border-forest hover:bg-forest/5`,
  light: `${btnBase} border border-amber-soft bg-amber-soft text-forest-deep hover:border-[#f0c979] hover:bg-[#f0c979]`,
  darkOutline: `${btnBase} border border-white/25 bg-transparent text-white hover:border-white hover:bg-white/[0.08]`,
};

/* ---------- Card / image helpers ---------- */
export const cardHover = "transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_48px_-28px_rgb(20_41_29_/_0.35)]";
export const imgZoomBox = "relative overflow-hidden";
export const imgZoom =
  "object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105";

/* ═══════════════════════════════════════════════════════════════
   ImagePlaceholder — a tasteful, intentional "image goes here"
   panel for spots the client will fill with their own photography
   later. Keeps layout intact; never a broken <img>.
   ═══════════════════════════════════════════════════════════════ */
export function ImagePlaceholder({
  label = "Image",
  tone = "light",
  fill = false,
  className = "",
}: {
  label?: string;
  tone?: "light" | "dark";
  fill?: boolean;
  className?: string;
}) {
  const dark = tone === "dark";
  const hatch = dark
    ? "repeating-linear-gradient(45deg, transparent, transparent 9px, rgba(255,255,255,0.04) 9px, rgba(255,255,255,0.04) 10px)"
    : "repeating-linear-gradient(45deg, transparent, transparent 9px, rgba(31,61,43,0.045) 9px, rgba(31,61,43,0.045) 10px)";
  return (
    <div
      aria-hidden
      className={[
        "relative grid place-items-center overflow-hidden",
        fill ? "absolute inset-0" : "h-full w-full",
        dark ? "bg-forest-deep" : "bg-[#eaeee5]",
        className,
      ].join(" ")}
    >
      <div className="pointer-events-none absolute inset-0" style={{ backgroundImage: hatch }} />
      <div
        className={`relative flex flex-col items-center gap-2 ${
          dark ? "text-white/35" : "text-forest/35"
        }`}
      >
        <ImageIcon className="size-7" strokeWidth={1.25} aria-hidden />
        <span className="text-[0.6rem] font-semibold uppercase tracking-[0.16em]">{label}</span>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   SectionHeading — kicker + title + optional intro, centered or left.
   ═══════════════════════════════════════════════════════════════ */
export function SectionHeading({
  kicker: kickerText,
  title,
  intro,
  align = "center",
  tone = "light",
  className = "",
}: {
  kicker?: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "center" | "left";
  tone?: "light" | "dark";
  className?: string;
}) {
  const dark = tone === "dark";
  return (
    <div
      className={[
        align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl",
        className,
      ].join(" ")}
    >
      {kickerText ? (
        <p className={`${kicker} ${dark ? "text-amber-soft" : "text-forest-mid"}`}>{kickerText}</p>
      ) : null}
      <h2 className={`${dark ? h2.replace("text-ink", "text-white") : h2} ${kickerText ? "mt-5" : ""}`}>
        {title}
      </h2>
      {intro ? (
        <p className={`mt-5 ${dark ? "text-[1rem] leading-7 text-white/60" : body}`}>{intro}</p>
      ) : null}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   Stat — a single number + label, used in stat rows/grids.
   ═══════════════════════════════════════════════════════════════ */
export function Stat({
  value,
  label,
  tone = "light",
}: {
  value: string;
  label: string;
  tone?: "light" | "dark";
}) {
  const dark = tone === "dark";
  return (
    <div>
      <p
        className={`text-[clamp(1.7rem,2.4vw,2.3rem)] font-bold leading-none tracking-[-0.02em] ${
          dark ? "text-white" : "text-forest"
        }`}
      >
        {value}
      </p>
      <p
        className={`mt-2 text-[0.7rem] font-semibold uppercase tracking-[0.1em] ${
          dark ? "text-white/45" : "text-ink-soft"
        }`}
      >
        {label}
      </p>
    </div>
  );
}
