import Image from "next/image";
import Link from "@/components/site/A";
import { ArrowRight, CheckCircle2, FileText, MessageSquareText } from "lucide-react";

export function SectionIntro({
  eyebrow,
  title,
  body,
  light = false,
  className = "",
}: {
  eyebrow: string;
  title: string;
  body?: string;
  light?: boolean;
  className?: string;
}) {
  return (
    <div className={`max-w-3xl ${className}`}>
      <p className={`b2b-kicker ${light ? "text-amber-soft" : "text-forest-mid"}`}>{eyebrow}</p>
      <h2 className={`b2b-heading mt-4 ${light ? "text-white" : "text-ink"}`}>{title}</h2>
      {body ? (
        <p className={`mt-5 max-w-2xl text-[1rem] leading-7 ${light ? "text-white/70" : "text-ink-soft"}`}>
          {body}
        </p>
      ) : null}
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  body,
  image,
  imageAlt,
  primaryHref = "/private-label#inquiry",
  primaryLabel = "Request a manufacturing quote",
  secondaryHref = "/shop",
  secondaryLabel = "Explore product portfolio",
  facts = [],
}: {
  eyebrow: string;
  title: string;
  body: string;
  image: string;
  imageAlt: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
  facts?: { value: string; label: string }[];
}) {
  return (
    <section className="border-b border-line bg-[#f5f3ec]">
      <div className="mx-auto grid min-h-[620px] max-w-[1480px] lg:grid-cols-[0.88fr_1.12fr]">
        <div className="flex flex-col justify-center px-5 py-20 sm:px-8 lg:px-12 xl:px-16">
          <p className="b2b-kicker text-forest-mid">{eyebrow}</p>
          <h1 className="b2b-hero-title mt-5 max-w-3xl text-ink">{title}</h1>
          <p className="mt-6 max-w-xl text-[1.05rem] leading-8 text-ink-soft">{body}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href={primaryHref} className="b2b-btn-primary">
              {primaryLabel}
              <ArrowRight className="size-4" aria-hidden />
            </Link>
            <Link href={secondaryHref} className="b2b-btn-secondary">
              {secondaryLabel}
            </Link>
          </div>
          {facts.length ? (
            <dl className="mt-12 grid grid-cols-2 border-t border-line sm:grid-cols-4">
              {facts.map((fact) => (
                <div key={fact.label} className="border-r border-line py-5 pr-4 last:border-r-0">
                  <dt className="text-[0.72rem] leading-4 text-ink-soft">{fact.label}</dt>
                  <dd className="mt-1 text-xl font-semibold tracking-tight text-forest">{fact.value}</dd>
                </div>
              ))}
            </dl>
          ) : null}
        </div>
        <div className="relative min-h-[380px] overflow-hidden border-l border-line lg:min-h-[620px]">
          <Image src={image} alt={imageAlt} fill priority className="object-cover" sizes="(min-width: 1024px) 56vw, 100vw" />
          <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/25 via-transparent to-transparent" />
        </div>
      </div>
    </section>
  );
}

export function CapabilityCard({
  index,
  title,
  body,
  href,
  linkLabel = "Learn more",
}: {
  index: string;
  title: string;
  body: string;
  href: string;
  linkLabel?: string;
}) {
  return (
    <Link href={href} className="group b2b-card flex min-h-64 flex-col p-7">
      <span className="text-xs font-semibold tracking-[0.16em] text-forest-mid">{index}</span>
      <h3 className="mt-10 text-2xl font-medium leading-tight text-ink">{title}</h3>
      <p className="mt-4 text-sm leading-6 text-ink-soft">{body}</p>
      <span className="mt-auto flex items-center gap-2 pt-8 text-sm font-semibold text-forest">
        {linkLabel}
        <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden />
      </span>
    </Link>
  );
}

export function ProcessGrid({
  steps,
}: {
  steps: { number: string; title: string; body: string }[];
}) {
  return (
    <ol className="grid border-l border-t border-line sm:grid-cols-2 lg:grid-cols-3">
      {steps.map((step) => (
        <li key={step.number} className="min-h-56 border-b border-r border-line bg-white p-7">
          <span className="text-xs font-semibold tracking-[0.16em] text-forest-mid">{step.number}</span>
          <h3 className="mt-10 text-xl font-semibold text-ink">{step.title}</h3>
          <p className="mt-3 text-sm leading-6 text-ink-soft">{step.body}</p>
        </li>
      ))}
    </ol>
  );
}

export function ProofList({ items }: { items: string[] }) {
  return (
    <ul className="grid gap-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-sm leading-6 text-ink-soft">
          <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-forest-mid" aria-hidden />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function QuoteBand({
  eyebrow = "Start a project",
  title = "Tell us what you want to make.",
  body = "Share your target market, format, quantity and launch timing. Our team will reply with the right stock or custom manufacturing path.",
}: {
  eyebrow?: string;
  title?: string;
  body?: string;
}) {
  return (
    <section className="border-y border-forest-deep bg-forest-deep text-white">
      <div className="mx-auto grid max-w-7xl items-center gap-8 px-5 py-16 sm:px-8 lg:grid-cols-[1fr_auto] lg:px-10">
        <div>
          <p className="b2b-kicker text-amber-soft">{eyebrow}</p>
          <h2 className="mt-4 text-3xl font-medium tracking-tight sm:text-4xl">{title}</h2>
          <p className="mt-4 max-w-2xl text-sm leading-6 text-white/65">{body}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link href="/private-label#inquiry" className="b2b-btn-light">
            <MessageSquareText className="size-4" aria-hidden />
            Request a quote
          </Link>
          <Link href="/shop" className="b2b-btn-dark-outline">
            <FileText className="size-4" aria-hidden />
            View products
          </Link>
        </div>
      </div>
    </section>
  );
}
