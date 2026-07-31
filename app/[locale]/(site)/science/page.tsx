import type { Metadata } from "next";
import Image from "next/image";
import {
  ArrowRight,
  Check,
  ClipboardCheck,
  ExternalLink,
  FlaskConical,
  PackageCheck,
  ShieldCheck,
  TestTube,
  Droplet,
  Eraser,
  Trash2,
  Users,
} from "lucide-react";
import { absoluteUrl, metaWithLocale, faqJsonLd } from "@/lib/seo";
import Link from "@/components/site/A";
import JsonLd from "@/components/site/JsonLd";
import { isLocale } from "@/lib/i18n/locales";
import { getDict } from "@/lib/i18n";

export function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  return metaWithLocale(params, {
    title: "Pet Supplement Quality, GMP & SQF Certificates",
    description:
      "Verify Taizhou Beno Biotech's Eurofins GMP audit recognition and SQF Food Safety Code: Pet Food Manufacturing certificate, with IDs, audit dates, scope and validity.",
    path: "/science",
  });
}

const certificates = [
  {
    short: "GMP",
    name: "Eurofins GMP Audit Recognition",
    pdf: "/certificates/taizhou-beno-gmp-2026.pdf",
    issuer: "Eurofins",
    status: "Current",
    scope: "Good Manufacturing Practice audit recognition",
    audit: "12–14 June 2026",
    validTo: "14 June 2027",
    identifierLabel: "Certificate ID",
    identifier: "ACCB8AAA422_1",
    result: "Audit score: 86%",
  },
  {
    short: "SQF",
    name: "SQF Food Safety Code Certificate",
    pdf: "/certificates/taizhou-beno-sqf-2026.pdf",
    issuer: "SQFI certification program",
    status: "Current",
    scope: "FSC 32 – Pet Premix food",
    audit: "14 June 2026",
    validTo: "28 August 2027",
    identifierLabel: "Certificate / SIN",
    identifier: "105690",
    result: "Pet Food Manufacturing, Edition 9, Audit score: 88",
  },
  {
    short: "SQF",
    name: "SQF Quality Code Certificate",
    pdf: "/certificates/taizhou-beno-sqf-quality-2026.pdf",
    issuer: "SQFI certification program",
    status: "Current",
    scope: "FSC 00 – Quality",
    audit: "14 June 2026",
    validTo: "28 August 2027",
    identifierLabel: "Certificate / SIN",
    identifier: "105690",
    result: "Quality Code, Edition 9",
  },
];

const coreMetrics = [
  { value: "2016", label: "Year established" },
  { value: "3,000 m²", label: "Factory area" },
  { value: "2,000 m²", label: "Production & warehouse" },
  { value: "3", label: "Production lines" },
  { value: "30", label: "Production staff" },
];

const functionalAreas = [
  "Raw Material Storage",
  "Ingredient Preparation",
  "Mixing",
  "Emulsification",
  "Sterilization",
  "Forming",
  "Filling",
  "Packaging",
  "Inspection",
  "Finished Goods Storage",
];

const dosageForms = [
  { name: "Soft Chews", src: "/images/b2b/dosage-forms/01-soft-chews.png" },
  { name: "Tablets", src: "/images/b2b/dosage-forms/03-tablets.png" },
  { name: "Pastes", src: "/images/b2b/dosage-forms/05-pastes-and-gels.png" },
  { name: "Liquids", src: "/images/b2b/dosage-forms/04-drops-and-oils.png" },
  { name: "Powders", src: "/images/b2b/dosage-forms/02-powders.png" },
  { name: "Granules", src: "/images/b2b/dosage-forms/06-freeze-dried.png" },
];

const qualitySteps = [
  { icon: TestTube, title: "Raw Material Inspection", desc: "Supplier verification and incoming material testing" },
  { icon: ClipboardCheck, title: "In-Process Inspection", desc: "Production checkpoints and process monitoring" },
  { icon: PackageCheck, title: "Finished Product Inspection", desc: "Final product testing and quality verification" },
  { icon: ShieldCheck, title: "Quality Release", desc: "Document review and shipment authorization" },
];

const certifications = [
  { name: "SQF Food Safety", detail: "Edition 9, Score 88", image: "/images/b2b/certs/sqf-food.jpg" },
  { name: "GMP Recognition", detail: "Eurofins, Score 86%", image: "/images/b2b/certs/gmp.jpg" },
  { name: "SQF Quality Code", detail: "Edition 9", image: "/images/b2b/certs/sqf-quality.jpg" },
  { name: "FDA Registration", detail: "No. 10222600768", image: "/images/b2b/certs/fda.jpg" },
];

const foodSafetyItems = [
  { icon: FlaskConical, title: "HACCP System", desc: "Hazard analysis and critical control points" },
  { icon: Droplet, title: "Allergen Management", desc: "Cross-contamination control procedures" },
  { icon: Eraser, title: "Foreign Matter Control", desc: "Physical hazard prevention protocols" },
  { icon: Users, title: "Hygiene Standards", desc: "Personnel and facility sanitation" },
];

const faqs = [
  {
    q: "Which legal entity appears on the certificates?",
    a: "All supplied records identify Taizhou Beno Biotech Co., Ltd. (泰州市贝诺生物科技有限公司), the manufacturing entity in Taixing City, Jiangsu, China. The company holds Unified Social Credit Code 91321283MA1MR5HB8P and D-U-N-S Number 404129816.",
  },
  {
    q: "What are the current certification validity periods?",
    a: "Eurofins GMP audit recognition is valid through June 14, 2027. SQF Food Safety and Quality certifications are valid through August 28, 2027 with re-certification audit scheduled for June 14, 2027. Feed Production License (苏饲预（2026）12006) is valid from April 26, 2026 to April 25, 2031.",
  },
  {
    q: "Does the website claim every project receives the same tests?",
    a: "No. Formula, dosage form and destination market change the required evidence. The project-specific test and document package is confirmed during quotation based on the approved specification and buyer requirements.",
  },
  {
    q: "Can procurement teams inspect the original files?",
    a: "Yes. Each certificate registry entry includes a restrained link to the original PDF record for vendor review. Additional documentation such as audit reports and FDA registration confirmation are available upon request.",
  },
  {
    q: "What should a buyer include in a document request?",
    a: "Provide the product or formula, target market, sales channel, requested certificates, testing expectations, label responsibility and shipment terms. For regulatory compliance, specify destination country requirements and any mandatory testing protocols.",
  },
];

export default async function QualityPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale = isLocale(rawLocale) ? rawLocale : "en";
  const dict = getDict(locale);
  const t = dict.b2bPages;

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Taizhou Beno Biotech quality certificates",
          url: absoluteUrl("/en/science"),
          about: { "@id": `${absoluteUrl("/")}#manufacturer` },
          description:
            "GMP audit recognition, SQF Pet Food Manufacturing certification and buyer-oriented quality evidence for Taizhou Beno Biotech Co., Ltd.",
          hasPart: certificates.map((certificate) => ({
            "@type": "DigitalDocument",
            name: certificate.name,
            encodingFormat: "application/pdf",
            url: absoluteUrl(certificate.pdf),
            identifier: certificate.identifier,
            about: { "@id": `${absoluteUrl("/")}#manufacturer` },
          })),
        }}
      />

      <section className="border-b border-line bg-[#f5f3ec]">
        <div className="mx-auto grid max-w-[1480px] lg:grid-cols-[0.84fr_1.16fr]">
          <div className="flex flex-col justify-center px-5 py-20 sm:px-8 lg:px-12 xl:px-16">
            <div className="flex items-center gap-3 text-forest-mid">
              <ShieldCheck className="size-5" strokeWidth={1.6} aria-hidden />
              <p className="b2b-kicker">Quality & certification evidence</p>
            </div>
            <h1 className="mt-5 text-[clamp(2.8rem,5.6vw,5.5rem)] font-[430] leading-[0.98] tracking-[-0.052em] text-ink">
              Quality claims backed by records buyers can verify.
            </h1>
            <p className="mt-6 text-[1.02rem] leading-8 text-ink-soft">
              Review the current GMP audit recognition and SQF Pet Food Manufacturing certificate
              issued for Taizhou Beno Biotech Co., Ltd., then use the quality framework below to
              plan project-specific due diligence.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link href="#certificates" className="b2b-btn-primary">
                Open the certificate registry
                <ArrowRight className="size-4" aria-hidden />
              </Link>
              <Link href="/factory" className="b2b-btn-secondary">
                Review the factory
              </Link>
            </div>
          </div>

          <div className="relative min-h-[470px] border-l border-line lg:min-h-[700px]">
            <Image
              src="/images/b2b/quality-audit-review.png"
              alt="Illustrative quality auditor reviewing manufacturing records in a pet supplement facility"
              fill
              priority
              className="object-cover"
              sizes="(min-width: 1024px) 58vw, 100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#10271d]/50 via-transparent to-transparent" />
            <div className="absolute inset-x-5 bottom-5 grid grid-cols-2 border border-white/25 bg-[#10271d]/90 text-white backdrop-blur-sm sm:inset-x-8">
              <div className="border-r border-white/20 p-5">
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-white/50">
                  GMP audit
                </p>
                <p className="mt-2 text-xl font-semibold">86% score</p>
                <p className="mt-1 text-xs text-white/55">Valid to 14 Jun 2027</p>
              </div>
              <div className="p-5">
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-white/50">
                  SQF
                </p>
                <p className="mt-2 text-xl font-semibold">Edition 9</p>
                <p className="mt-1 text-xs text-white/55">Valid to 28 Aug 2027</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2 — Core metrics */}
      <section className="border-b border-line bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="text-center">
            <p className="b2b-kicker text-forest-mid">Manufacturing foundation</p>
            <h2 className="mt-4 text-[clamp(2rem,4vw,3rem)] font-semibold leading-[1.1] tracking-[-0.025em] text-ink">
              Core Facility Data
            </h2>
          </div>
          <dl className="mt-14 grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-5">
            {coreMetrics.map(({ value, label }) => (
              <div key={label} className="text-center">
                <dd className="text-[clamp(2.4rem,4.5vw,3.4rem)] font-bold leading-none tracking-[-0.03em] text-forest">
                  {value}
                </dd>
                <dt className="mt-4 text-sm font-medium text-ink-soft">{label}</dt>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* 3 — Factory functional areas */}
      <section className="border-b border-line bg-white">
        <div className="mx-auto grid max-w-7xl lg:grid-cols-[1fr_1.1fr]">
          <div className="px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
            <p className="b2b-kicker text-forest-mid">Factory zones</p>
            <h2 className="mt-4 text-[clamp(1.9rem,3.4vw,2.7rem)] font-semibold leading-[1.14] tracking-[-0.025em] text-ink">
              Ten Functional Production Areas
            </h2>
            <p className="mt-5 max-w-xl text-[0.95rem] leading-7 text-ink-soft">
              The facility is organized into dedicated zones with physical separation, from raw material receipt through finished goods storage.
            </p>
            <ol className="mt-10 space-y-1">
              {functionalAreas.map((area, index) => (
                <li key={area} className="flex items-center gap-4 py-2.5">
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-md bg-forest/10 text-xs font-bold text-forest">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="text-sm font-medium text-ink">{area}</span>
                  {index < functionalAreas.length - 1 && (
                    <ArrowRight className="ml-auto size-4 text-ink-soft/30" aria-hidden />
                  )}
                </li>
              ))}
            </ol>
          </div>
          <div className="relative min-h-[480px] lg:min-h-auto">
            <Image
              src="/images/b2b/company/production-workshop.png"
              alt="Production workshop with mixing and preparation equipment"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 52vw, 100vw"
            />
          </div>
        </div>
      </section>

      {/* 4 — Dosage forms */}
      <section className="border-b border-line bg-[#f8f7f2] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="text-center">
            <p className="b2b-kicker text-forest-mid">Production scope</p>
            <h2 className="mt-4 text-[clamp(2rem,4vw,3rem)] font-semibold leading-[1.1] tracking-[-0.025em] text-ink">
              Six Product Forms
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-[0.95rem] leading-7 text-ink-soft">
              Solid, semi-solid and liquid pet additive premixed feed across multiple dosage formats.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-2 gap-6 sm:grid-cols-3">
            {dosageForms.map(({ name, src }) => (
              <article
                key={name}
                className="group flex flex-col items-center rounded-lg border border-line bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="relative aspect-square w-full">
                  <Image
                    src={src}
                    alt={`${name} pet supplement dosage form`}
                    fill
                    className="object-contain transition-transform duration-500 group-hover:scale-105"
                    sizes="(min-width: 640px) 33vw, 50vw"
                  />
                </div>
                <h3 className="mt-4 text-[0.95rem] font-semibold text-ink">{name}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 5 — Quality control process */}
      <section className="border-b border-line bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="text-center">
            <p className="b2b-kicker text-forest-mid">Quality system</p>
            <h2 className="mt-4 text-[clamp(2rem,4vw,3rem)] font-semibold leading-[1.1] tracking-[-0.025em] text-ink">
              Four-Stage Quality Control
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-[0.95rem] leading-7 text-ink-soft">
              From raw materials to finished goods, every batch passes through documented inspection points before release.
            </p>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {qualitySteps.map(({ icon: Icon, title, desc }, index) => (
              <article key={title} className="text-center">
                <div className="mx-auto flex size-16 items-center justify-center rounded-full bg-forest/10">
                  <Icon className="size-7 text-forest" strokeWidth={1.6} aria-hidden />
                </div>
                <div className="mt-3 text-xs font-semibold tracking-[0.14em] text-forest-mid">
                  STEP {index + 1}
                </div>
                <h3 className="mt-3 text-lg font-semibold text-ink">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-ink-soft">{desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 6 — Traceability & certifications */}
      <section className="border-b border-line bg-[#f8f7f2] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="text-center">
            <p className="b2b-kicker text-forest-mid">Batch traceability</p>
            <h2 className="mt-4 text-[clamp(2rem,4vw,3rem)] font-semibold leading-[1.1] tracking-[-0.025em] text-ink">
              Traceable in Minutes, Verified by Audit
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-[0.95rem] leading-7 text-ink-soft">
              Bidirectional traceability from raw materials to finished goods. Third-party verified.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:max-w-3xl lg:mx-auto">
            <div className="rounded-lg border border-line bg-white p-8 text-center shadow-sm">
              <p className="text-[clamp(2.6rem,5vw,3.6rem)] font-bold leading-none tracking-[-0.03em] text-forest">
                2,000 tubes
              </p>
              <p className="mt-3 text-base font-semibold text-ink">Traced in 90 minutes</p>
              <p className="mt-1 text-sm text-ink-soft">Pet nutrition paste, Batch 20260122</p>
            </div>
            <div className="rounded-lg border border-line bg-white p-8 text-center shadow-sm">
              <p className="text-[clamp(2.6rem,5vw,3.6rem)] font-bold leading-none tracking-[-0.03em] text-forest">
                4,000 bottles
              </p>
              <p className="mt-3 text-base font-semibold text-ink">Traced in 1.5 hours</p>
              <p className="mt-1 text-sm text-ink-soft">Pet nutrition tablet, Batch 20260520</p>
            </div>
          </div>

          <div className="mt-16">
            <h3 className="text-center text-sm font-semibold uppercase tracking-[0.1em] text-forest-mid">
              Current Certifications
            </h3>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {certifications.map(({ name, detail }) => (
                <div
                  key={name}
                  className="rounded-lg border border-forest/20 bg-white p-6 text-center shadow-sm"
                >
                  <div className="mx-auto grid size-20 place-items-center rounded-full border-2 border-forest/20 bg-forest/5">
                    <ShieldCheck className="size-9 text-forest" strokeWidth={1.6} aria-hidden />
                  </div>
                  <h4 className="mt-5 text-base font-semibold text-ink">{name}</h4>
                  <p className="mt-2 text-sm text-ink-soft">{detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7 — Food safety */}
      <section className="relative overflow-hidden border-b border-line bg-forest-deep">
        <Image
          src="/images/b2b/company/clean-room-production.png"
          alt="Clean room production facility background"
          fill
          className="object-cover opacity-[0.08]"
          sizes="100vw"
        />
        <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 sm:py-28">
          <div className="text-center">
            <p className="b2b-kicker text-amber-soft">Food safety management</p>
            <h2 className="mt-4 text-[clamp(2rem,4vw,3rem)] font-semibold leading-[1.1] tracking-[-0.025em] text-white">
              Comprehensive Safety Controls
            </h2>
          </div>

          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:gap-10">
            {foodSafetyItems.map(({ icon: Icon, title, desc }) => (
              <article
                key={title}
                className="flex gap-5 rounded-lg border border-white/15 bg-white/[0.04] p-7 backdrop-blur-sm"
              >
                <div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-amber-soft/20">
                  <Icon className="size-6 text-amber-soft" strokeWidth={1.6} aria-hidden />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-white/70">{desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="certificates" className="scroll-mt-24 mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[0.33fr_0.67fr]">
          <div>
            <p className="b2b-kicker text-forest-mid">Certificate registry</p>
            <h2 className="b2b-heading mt-4">GMP &amp; SQF Certificates for Pet Supplements</h2>
            <p className="mt-5 text-sm leading-7 text-ink-soft">
              Certificates are presented as procurement records, not as oversized PDF screenshots.
              Key fields remain visible and the original files are available through a secondary
              source-record link.
            </p>
          </div>

          <div className="border-t border-line">
            {certificates.map((certificate) => (
              <article key={certificate.short} className="border-b border-line py-8">
                <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
                  <div className="flex items-start gap-5">
                    <div className="grid size-16 shrink-0 place-items-center border border-forest bg-forest text-sm font-bold tracking-[0.08em] text-white">
                      {certificate.short}
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-3">
                        <p className="text-[0.66rem] font-semibold uppercase tracking-[0.13em] text-ink-soft">
                          {certificate.issuer}
                        </p>
                        <span className="inline-flex items-center gap-1.5 border border-forest/25 bg-forest/5 px-2 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-forest">
                          <span className="size-1.5 rounded-full bg-forest-mid" aria-hidden />
                          {certificate.status}
                        </span>
                      </div>
                      <h3 className="mt-3 text-2xl font-semibold tracking-[-0.025em] text-ink">
                        {certificate.name}
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-ink-soft">{certificate.result}</p>
                    </div>
                  </div>
                  <a
                    href={certificate.pdf}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex min-h-11 shrink-0 items-center gap-2 text-xs font-semibold text-forest hover:underline"
                  >
                    View source record
                    <ExternalLink className="size-3.5" aria-hidden />
                  </a>
                </div>

                <dl className="mt-7 grid border-l border-t border-line sm:grid-cols-2 lg:grid-cols-4">
                  {[
                    ["Registered company", "Taizhou Beno Biotech Co., Ltd."],
                    [certificate.identifierLabel, certificate.identifier],
                    ["Audit date", certificate.audit],
                    ["Valid through", certificate.validTo],
                    ["Scope", certificate.scope],
                  ].map(([label, value], index) => (
                    <div
                      key={label}
                      className={`border-b border-r border-line p-4 ${
                        index === 0 || index === 4 ? "sm:col-span-2" : ""
                      }`}
                    >
                      <dt className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-ink-soft">
                        {label}
                      </dt>
                      <dd className="mt-2 text-sm font-semibold leading-6 text-ink">{value}</dd>
                    </div>
                  ))}
                </dl>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-line bg-white">
        <JsonLd data={faqJsonLd(faqs)} />
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[0.34fr_0.66fr] lg:px-10">
          <div>
            <p className="b2b-kicker text-forest-mid">Quality FAQ</p>
            <h2 className="mt-4 text-3xl font-medium tracking-[-0.035em] text-ink">
              Pet Supplement Quality &amp; Certification FAQ
            </h2>
          </div>
          <div className="border-t border-line">
            {faqs.map((item, index) => (
              <details key={item.q} className="group border-b border-line">
                <summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-6 py-4 text-left">
                  <span className="flex items-start gap-4">
                    <span className="mt-1 text-[0.65rem] font-semibold text-forest-mid">0{index + 1}</span>
                    <span className="text-sm font-semibold text-ink">{item.q}</span>
                  </span>
                  <span className="text-xl font-light text-forest transition-transform group-open:rotate-45" aria-hidden>
                    +
                  </span>
                </summary>
                <p className="pb-6 pl-10 pr-8 text-sm leading-7 text-ink-soft">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-line bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 py-16 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-10">
          <div className="flex items-start gap-4">
            <Check className="mt-1 size-6 shrink-0 text-forest-mid" aria-hidden />
            <div>
              <h2 className="text-2xl font-semibold tracking-[-0.025em] text-ink">
                Need a vendor-approval document package?
              </h2>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-ink-soft">
                Send the product, target market, requested evidence and expected order volume.
              </p>
            </div>
          </div>
          <Link href="/private-label#inquiry" className="b2b-btn-primary shrink-0">
            Request project documents
            <ArrowRight className="size-4" aria-hidden />
          </Link>
        </div>
      </section>
    </>
  );
}
