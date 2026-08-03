import type { Metadata } from "next";
import Image from "next/image";
import {
  ArrowRight,
  Check,
  ShieldCheck,
  FlaskConical,
  TestTube,
  ClipboardCheck,
  PackageCheck,
  Award,
  Factory,
  Microscope,
  Layers,
  TrendingUp,
  Users,
  Clock,
  FileText,
} from "lucide-react";
import { absoluteUrl, metaWithLocale, faqJsonLd, breadcrumbJsonLd, webPageJsonLd } from "@/lib/seo";
import Link from "@/components/site/A";
import JsonLd from "@/components/site/JsonLd";

export function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  return metaWithLocale(params, {
    title: "Pet Supplement Quality, GMP & SQF Certificates",
    description:
      "Verify Taizhou Beno Biotech's Eurofins GMP audit recognition and SQF Food Safety Code: Pet Food Manufacturing certificate, with IDs, audit dates, scope and validity.",
    path: "/science",
    keywords: [
      "pet supplement GMP",
      "SQF pet food manufacturer",
      "pet supplement quality control",
      "pet supplement manufacturing certificates",
      "Taizhou Beno Biotech certificates",
    ],
    images: ["/images/b2b/certifications-display.png"],
    imageAlt: "Beno Bio pet supplement manufacturing certificates and quality records",
  });
}

const certificates = [
  {
    short: "GMP",
    name: "Eurofins GMP Audit Recognition",
    pdf: "/certificates/taizhou-beno-gmp-2026.pdf",
    issuer: "Eurofins Food Assurance Certification US, LLC",
    status: "Current",
    scope: "Good Manufacturing Practice audit recognition",
    audit: "12–14 Jun 2026",
    validTo: "14 Jun 2027",
    identifierLabel: "Certificate ID",
    identifier: "ACCB8AAA422_1",
    result: "Score: 86%",
    image: "/images/science/cert-gmp.jpg",
    description: "Eurofins issued GMP audit recognition after an on-site audit covering the facility, equipment, personnel hygiene, raw-material controls, in-process monitoring and documentation. The record shows an audit score of 86% and is available here as the original PDF supplied for buyer review.",
  },
  {
    short: "SQF",
    name: "SQF Food Safety Code Certificate",
    pdf: "/certificates/taizhou-beno-sqf-2026.pdf",
    issuer: "SQFI / Eurofins Food Assurance Certification US, LLC",
    status: "Current",
    scope: "FSC 32 – Pet Premix food",
    audit: "12–14 Jun 2026",
    validTo: "28 Aug 2027",
    identifierLabel: "Certificate / SIN",
    identifier: "105690",
    result: "Edition 9 — Score: 88 — Good",
    image: "/images/science/cert-sqf-food.jpg",
    description: "The SQF Food Safety Code: Pet Food Manufacturing, Edition 9 certificate covers FSC 32 (Pet Premix food). It was issued following the June 2026 Eurofins audit and records a score of 88 with a Good rating. Buyers can review the certificate identifier, audit date, scope and validity in the original PDF.",
  },
  {
    short: "SQF",
    name: "SQF Quality Code Certificate",
    pdf: "/certificates/taizhou-beno-sqf-quality-2026.pdf",
    issuer: "SQFI / Eurofins Food Assurance Certification US, LLC",
    status: "Current",
    scope: "FSC 00 – Quality Management",
    audit: "12–14 Jun 2026",
    validTo: "28 Aug 2027",
    identifierLabel: "Certificate / SIN",
    identifier: "105690",
    result: "Edition 9 — Quality Management System",
    image: "/images/science/cert-sqf-quality.jpg",
    description: "The SQF Quality Code Edition 9 extends beyond food safety to certify the entire quality management system, including supplier qualification, customer complaint management, corrective action procedures, internal audit programs, and management review processes. Holding both SQF Food Safety and SQF Quality certifications simultaneously means that buyers can rely on a single, audited quality framework that covers both product safety and operational consistency.",
  },
];

const faqs = [
  {
    q: "Which legal entity appears on the certificates?",
    a: "All supplied records identify Taizhou Beno Biotech Co., Ltd. (泰州市贝诺生物科技有限公司), the manufacturing entity in Taixing City, Jiangsu, China. The company holds Unified Social Credit Code 91321283MA1MR5HB8P and D-U-N-S Number 404129816, both of which can be cross-referenced against public registries for independent verification.",
  },
  {
    q: "What are the current certification validity periods?",
    a: "Eurofins GMP audit recognition is valid through June 14, 2027. SQF Food Safety and Quality certifications are valid through August 28, 2027, with the re-certification audit scheduled for June 14, 2027. The Feed Production License (苏饲预（2026）12006) is valid from April 26, 2026 to April 25, 2031. FDA Food Facility Registration No. 10222600768 is renewed biennially and is currently valid through December 31, 2026.",
  },
  {
    q: "What is the minimum order quantity for a pet supplement project?",
    a: "Starting quantities are shown per catalog SKU for early comparison. The confirmed MOQ depends on the formula, dosage form, packaging configuration and production route, and is stated in the formal project quotation. The website does not apply one universal MOQ to every product.",
  },
  {
    q: "Does the website claim every project receives the same tests?",
    a: "No. Formula, dosage form, and destination market change the required evidence. The project-specific test and document package is confirmed during quotation based on the approved specification and buyer requirements. For example, a US-market soft chew may require a different certificate of analysis format than an EU-market tablet.",
  },
  {
    q: "Can procurement teams inspect the original files?",
    a: "Yes. Each certificate registry entry includes a direct link to the supplied PDF record for vendor review. Additional project documents can be discussed during supplier qualification, including the applicable audit material, FDA registration confirmation, Feed Production License, specification, allergen statement and country-of-origin information.",
  },
  {
    q: "What should a buyer include in a document request?",
    a: "Provide the product or formula, target market, sales channel, requested certificates, testing expectations, label responsibility and shipment terms. The team then confirms which records are available, which tests are project-specific and the expected document timeline.",
  },
];

export default function QualityPage() {
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
      <JsonLd
        data={webPageJsonLd({
          type: "CollectionPage",
          path: "/science",
          name: "Pet supplement quality and certification evidence",
          description:
            "GMP audit recognition, SQF Food Safety and SQF Quality certificates, identifiers, audit dates, validity and project quality controls.",
          primaryImage: "/images/b2b/certifications-display.png",
        })}
      />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Quality & Certificates", path: "/science" },
        ])}
      />

      {/* ─── HERO ─── */}
      <section className="border-b border-line bg-[#f5f3ec]">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 text-forest-mid">
              <ShieldCheck className="size-5" strokeWidth={1.6} aria-hidden />
              <p className="b2b-kicker">Quality &amp; certification evidence</p>
            </div>
            <h1 className="mt-5 text-[clamp(1.8rem,3.2vw,2.8rem)] font-semibold leading-[1.1] tracking-[-0.03em] text-ink">
              Quality claims backed by records buyers can verify.
            </h1>
            <p className="mt-5 max-w-2xl text-[1.02rem] leading-8 text-ink-soft">
              GMP audit recognition and SQF Pet Food Manufacturing certificates issued for Taizhou Beno Biotech Co., Ltd., with identifiers, dates, scope and original PDF records for buyer review.
            </p>
          </div>
        </div>
      </section>

      {/* ─── MODULE 1: KEY SPECS BAR ─── */}
      <section className="border-b border-line bg-white">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <dl className="grid grid-cols-2 divide-x divide-y divide-line sm:grid-cols-3 lg:grid-cols-5 lg:divide-y-0">
            {[
              { value: "2016", label: "Year Founded", sub: "Taixing, Jiangsu" },
              { value: "3,000 m²", label: "Facility Area", sub: "2,000 m² production" },
              { value: "3", label: "Production Lines", sub: "Documented facility total" },
              { value: "30", label: "Production Staff", sub: "Single-shift schedule" },
              { value: "6", label: "Product Formats", sub: "Solid, semi-solid & liquid" },
            ].map(({ value, label, sub }) => (
              <div key={label} className="flex flex-col justify-center px-6 py-8 text-left">
                <dd className="text-[clamp(1.4rem,2.2vw,1.9rem)] font-bold leading-none tracking-[-0.03em] text-forest">
                  {value}
                </dd>
                <dt className="mt-2 text-xs font-semibold uppercase tracking-[0.08em] text-ink">{label}</dt>
                <span className="mt-1 text-[0.72rem] text-ink-soft">{sub}</span>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ─── MODULE 2: FACILITY OVERVIEW ─── */}
      <section className="border-b border-line bg-[#f8f7f2]">
        <div className="mx-auto grid max-w-7xl lg:grid-cols-2">
          <div className="px-5 py-14 sm:px-8 lg:px-12 lg:py-20">
            <div className="flex items-center gap-3 text-forest-mid">
              <Factory className="size-4" strokeWidth={1.6} aria-hidden />
              <p className="b2b-kicker">Facility overview</p>
            </div>
            <h2 className="mt-4 text-[clamp(1.5rem,2.6vw,2.2rem)] font-semibold leading-[1.15] tracking-[-0.025em] text-ink">
              Pet Supplement Manufacturing in Jiangsu, China
            </h2>
            <p className="mt-4 text-[0.93rem] leading-7 text-ink-soft">
              Founded in 2016 in Taixing, Jiangsu, Taizhou Beno Biotech operates a 3,000 m² facility, including 2,000 m² for production and warehousing. Three production lines support solid, semi-solid and liquid pet additive premixed feed within the licensed scope.
            </p>
            <p className="mt-3 text-[0.93rem] leading-7 text-ink-soft">
              The facility has Eurofins GMP audit recognition and current SQF Food Safety and SQF Quality certificates. Buyers can compare those records against the approved product, dosage form and documentation requirements for their project.
            </p>
            {/* Spec table */}
            <div className="mt-8 border border-line bg-white">
              {[
                { label: "Production lines", value: "3 independent lines" },
                { label: "Production staff", value: "30 personnel (single shift)" },
                { label: "Total facility area", value: "3,000 m²" },
                { label: "GMP production area", value: "2,000 m²" },
                { label: "Operating schedule", value: "6 days / week" },
                { label: "Licensed scope", value: "Solid, semi-solid and liquid pet additive premixed feed" },
              ].map(({ label, value }, i) => (
                <div key={label} className={`flex items-center gap-4 px-5 py-3 text-sm ${i !== 0 ? "border-t border-line" : ""}`}>
                  <span className="w-44 shrink-0 text-[0.75rem] font-semibold uppercase tracking-[0.07em] text-ink-soft">{label}</span>
                  <span className="font-medium text-ink">{value}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 grid-rows-2 gap-1 bg-line p-1">
            <div className="relative col-span-2 row-span-1 min-h-[260px]">
              <Image
                src="/images/science/factory-production-line.png"
                alt="Beno Biotech GMP production line with automated packaging equipment"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>
            <div className="relative min-h-[200px]">
              <Image
                src="/images/science/factory-cleanroom-corridor.png"
                alt="Clean room corridor with glass observation windows overlooking production"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 25vw, 50vw"
              />
            </div>
            <div className="relative min-h-[200px]">
              <Image
                src="/images/science/factory-airlock.png"
                alt="GMP airlock changing room with stainless steel lockers and pressure gauges"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 25vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ─── MODULE 3: CERTIFICATIONS ─── */}
      <section id="certificates" className="scroll-mt-24 border-b border-line bg-white">
        {/* Header */}
        <div className="border-b border-line bg-[#f8f7f2] px-5 py-10 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-7xl flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="flex items-center gap-3 text-forest-mid">
                <Award className="size-4" strokeWidth={1.6} aria-hidden />
                <p className="b2b-kicker">Compliance &amp; certification records</p>
              </div>
              <h2 className="mt-3 text-[clamp(1.4rem,2.4vw,2rem)] font-semibold leading-[1.15] tracking-[-0.025em] text-ink">
                8 Independent Third-Party Certifications
              </h2>
              <p className="mt-2 max-w-2xl text-[0.88rem] leading-6 text-ink-soft">
                The records below were supplied for Taizhou Beno Biotech Co., Ltd. following the June 2026 audit. Each entry shows the issuer, identifier, scope, audit date and validity; the supplied PDF can be opened directly for procurement review.
              </p>
            </div>

          </div>
        </div>

        {/* Cert grid */}
        <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:px-10">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {[
              { short: "GMP", name: "Eurofins GMP", id: "ACCB8AAA422_1", valid: "Valid to Jun 2027", score: "Score: 86%", image: "/images/science/cert-gmp.jpg" },
              { short: "SQF", name: "SQF Food Safety", id: "SIN 105690", valid: "Valid to Aug 2027", score: "Score: 88 — Good", image: "/images/science/cert-sqf-food.jpg" },
              { short: "SQF", name: "SQF Quality Code", id: "SIN 105690", valid: "Valid to Aug 2027", score: "Edition 9", image: "/images/science/cert-sqf-quality.jpg" },
              { short: "FDA", name: "FDA Registration", id: "No. 10222600768", valid: "Valid to Dec 2026", score: "FFR Verified", image: "/images/science/cert-fda.png" },
              { short: "FEED", name: "Feed Production License", id: "苏饲预（2026）12006", valid: "Valid to Apr 2031", score: "Jiangsu Authority", image: "/images/science/cert-food-license.png" },
              { short: "D-U-N-S", name: "D-U-N-S Registration", id: "No. 404129816", valid: "Dun & Bradstreet", score: "Global registry", image: "/images/science/cert-duns.png" },
              { short: "FDA", name: "FDA Facility Record", id: "No. 10222600768", valid: "Valid to Dec 2026", score: "FFR Screenshot", image: "/images/science/cert-fda-screenshot.png" },
              { short: "SQF", name: "SQF Confirmation Letter", id: "SIN 105690", valid: "Issued Jul 2026", score: "Official letter", image: "/images/science/cert-sqf-letter.jpg" },
            ].map(({ short, name, id, valid, score, image }) => (
              <div key={name} className="group relative overflow-hidden border border-line bg-white transition-shadow hover:shadow-md">
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#f8f7f2]">
                  <Image
                    src={image}
                    alt={`${name} certificate`}
                    fill
                    className="object-contain p-4 transition-transform duration-500 group-hover:scale-[1.04]"
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-forest/80 opacity-0 transition-opacity duration-300 group-hover:opacity-100 p-4">
                    <span className="inline-flex items-center bg-white px-2.5 py-0.5 text-[0.62rem] font-bold tracking-[0.1em] text-forest">
                      {short}
                    </span>
                    <p className="text-center text-sm font-semibold text-white leading-5">{name}</p>
                    <p className="font-mono text-center text-[0.68rem] text-white/75">{id}</p>
                    <div className="mt-1 border-t border-white/25 pt-2 text-center">
                      <p className="text-[0.7rem] text-white/90">{valid}</p>
                      <p className="text-[0.68rem] text-white/65">{score}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── MODULE 4: SOFT CHEW ADVANTAGE ─── */}
      <section className="border-b border-line bg-[#f8f7f2]">
        <div className="mx-auto grid max-w-7xl lg:grid-cols-2">
          <div className="relative min-h-[400px] lg:min-h-auto lg:order-last">
            <Image
              src="/images/science/soft-chews-product.png"
              alt="Heart-shaped soft chew pet supplements produced at Beno Biotech"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>
          <div className="px-5 py-14 sm:px-8 lg:px-12 lg:py-20">
            <div className="flex items-center gap-3 text-forest-mid">
              <TrendingUp className="size-4" strokeWidth={1.6} aria-hidden />
              <p className="b2b-kicker">Production capability</p>
            </div>
            <h2 className="mt-4 text-[clamp(1.5rem,2.6vw,2.2rem)] font-semibold leading-[1.15] tracking-[-0.025em] text-ink">
              Soft Chew Production Controls
            </h2>
            <p className="mt-4 text-[0.93rem] leading-7 text-ink-soft">
              Soft-chew projects use defined processing, forming and in-process checks matched to the approved product specification. Commercial throughput, shape options and quality checks are confirmed for the formula, pack and order volume rather than presented as one universal claim.
            </p>
            <div className="mt-8 space-y-3">
              {[
                { icon: TrendingUp, title: "Project-specific production planning", desc: "Line allocation and run size are confirmed after formula, packaging and volume review." },
                { icon: Layers, title: "Shape and size configuration", desc: "Available molds and any custom-shape work are confirmed during sampling." },
                { icon: Check, title: "Defined in-process checks", desc: "Applicable weight, texture and moisture targets are recorded against the approved specification." },
              ].map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex gap-4 rounded-lg border border-line bg-white p-5">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-md bg-forest/10">
                    <Icon className="size-5 text-forest" strokeWidth={1.6} aria-hidden />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-ink">{title}</p>
                    <p className="mt-1 text-xs leading-5 text-ink-soft">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── MODULE 5: DOSAGE FORMS ─── */}
      <section className="border-b border-line bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16 lg:items-start">
            <div>
              <div className="flex items-center gap-3 text-forest-mid">
                <Layers className="size-4" strokeWidth={1.6} aria-hidden />
                <p className="b2b-kicker">Production scope</p>
              </div>
              <h2 className="mt-4 text-[clamp(1.5rem,2.6vw,2.2rem)] font-semibold leading-[1.15] tracking-[-0.025em] text-ink">
                Six Pet Supplement Product Formats
              </h2>
              <p className="mt-4 text-[0.93rem] leading-7 text-ink-soft">
                The production license covers solid, semi-solid and liquid pet additive premixed feed. Project formats include soft chews, tablets, pastes and gels, liquids and oils, powders and granules, with the process route confirmed against the approved specification.
              </p>
              {/* Dosage form table */}
              <div className="mt-8 border border-line">
                <div className="grid grid-cols-3 border-b border-line bg-[#f8f7f2] px-5 py-2.5 text-[0.68rem] font-semibold uppercase tracking-[0.08em] text-ink-soft">
                  <span>Dosage form</span>
                  <span>Equipment</span>
                  <span>Key control</span>
                </div>
                {[
                  { form: "Soft Chews", equip: "High-speed extrusion", ctrl: "Temp / hardness / moisture" },
                  { form: "Tablets", equip: "Rotary press", ctrl: "Weight / hardness uniformity" },
                  { form: "Pastes & Gels", equip: "Tube filling line", ctrl: "Fill weight / viscosity" },
                  { form: "Liquids", equip: "SS vessel + filler", ctrl: "Mixing time / fill volume" },
                  { form: "Powders", equip: "Closed blender", ctrl: "Blend uniformity / dust control" },
                  { form: "Granules", equip: "Granulation system", ctrl: "Particle size / moisture" },
                ].map(({ form, equip, ctrl }, i) => (
                  <div key={form} className={`grid grid-cols-3 items-center px-5 py-3 text-sm ${i !== 0 ? "border-t border-line" : ""}`}>
                    <span className="font-semibold text-ink">{form}</span>
                    <span className="text-[0.82rem] text-ink-soft">{equip}</span>
                    <span className="text-[0.82rem] text-ink-soft">{ctrl}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg">
              <Image
                src="/images/science/ai-dosage-forms.jpg"
                alt="Various pet supplement dosage forms: soft chews, tablets, paste, liquid, powder"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 55vw, 100vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ─── MODULE 6: QUALITY CONTROL PROCESS ─── */}
      <section className="border-b border-line bg-[#f8f7f2] py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 text-forest-mid">
              <ClipboardCheck className="size-4" strokeWidth={1.6} aria-hidden />
              <p className="b2b-kicker">Quality control system</p>
            </div>
            <h2 className="mt-4 text-[clamp(1.5rem,2.6vw,2.2rem)] font-semibold leading-[1.15] tracking-[-0.025em] text-ink">
              Four-Stage Quality Review Framework
            </h2>
            <p className="mt-4 text-[0.93rem] leading-7 text-ink-soft">
              Buyer requirements, formula and dosage form determine the applicable inspections and tests. The project specification defines raw-material review, in-process records, finished-product release and traceability evidence before commercial production.
            </p>
          </div>

          {/* Horizontal step flow */}
          <div className="mt-12 hidden lg:block">
            <div className="relative flex items-start gap-0">
              {/* connecting line */}
              <div className="absolute left-[calc(12.5%)] right-[calc(12.5%)] top-[22px] h-px bg-line" aria-hidden />
              {[
                { icon: TestTube, step: "01", title: "Raw Material Review", desc: "Supplier records, material identity, lot information and receiving status are reviewed before production use." },
                { icon: ClipboardCheck, step: "02", title: "In-Process Records", desc: "Approved formula, weighing, processing parameters and applicable observations are recorded during production." },
                { icon: PackageCheck, step: "03", title: "Finished-Product Release", desc: "The agreed physical, microbiological or assay requirements are confirmed by project before release." },
                { icon: ShieldCheck, step: "04", title: "Batch Traceability", desc: "Lot identification connects approved materials, production records, packed goods and shipment records." },
              ].map(({ icon: Icon, step, title, desc }) => (
                <div key={step} className="relative flex flex-1 flex-col items-center px-4 text-center">
                  <div className="relative z-10 flex size-11 items-center justify-center rounded-full border-2 border-forest bg-white">
                    <Icon className="size-5 text-forest" strokeWidth={1.6} aria-hidden />
                  </div>
                  <span className="mt-3 text-[0.65rem] font-bold uppercase tracking-[0.12em] text-forest-mid">{step}</span>
                  <h3 className="mt-1 text-[0.82rem] font-semibold text-ink">{title}</h3>
                  <p className="mt-2 text-[0.75rem] leading-5 text-ink-soft">{desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile: vertical cards */}
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:hidden">
            {[
              { icon: TestTube, step: "01", title: "Raw Material Review", desc: "Supplier records, material identity, lot information and receiving status are reviewed before production use." },
              { icon: ClipboardCheck, step: "02", title: "In-Process Records", desc: "Approved formula, weighing, processing parameters and applicable observations are recorded during production." },
              { icon: PackageCheck, step: "03", title: "Finished-Product Release", desc: "The agreed physical, microbiological or assay requirements are confirmed by project before release." },
              { icon: ShieldCheck, step: "04", title: "Batch Traceability", desc: "Lot identification connects approved materials, production records, packed goods and shipment records." },
            ].map(({ icon: Icon, step, title, desc }) => (
              <article key={step} className="flex gap-4 border border-line bg-white p-5">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-full border border-forest/30 bg-forest/5">
                  <Icon className="size-5 text-forest" strokeWidth={1.6} aria-hidden />
                </div>
                <div>
                  <span className="text-[0.65rem] font-bold uppercase tracking-[0.1em] text-forest-mid">{step}</span>
                  <h3 className="mt-0.5 text-sm font-semibold text-ink">{title}</h3>
                  <p className="mt-2 text-[0.78rem] leading-5 text-ink-soft">{desc}</p>
                </div>
              </article>
            ))}
          </div>

          <p className="mt-8 border-l-2 border-forest bg-white px-6 py-5 text-sm leading-7 text-ink-soft">
            The exact certificate of analysis, testing and retention package is agreed before production. Buyers should include destination-market and channel requirements in the product brief so the evidence scope can be quoted accurately.
          </p>
        </div>
      </section>

      {/* ─── MODULE 7: R&D TEAM & FORMULATIONS ─── */}
      <section className="border-b border-line bg-white">
        <div className="mx-auto grid max-w-7xl lg:grid-cols-[1.4fr_0.6fr]">
          <div className="px-5 py-14 sm:px-8 lg:px-12 lg:py-20">
            <div className="flex items-center gap-3 text-forest-mid">
              <Microscope className="size-4" strokeWidth={1.6} aria-hidden />
              <p className="b2b-kicker">R&amp;D &amp; formulation library</p>
            </div>
            <h2 className="mt-4 text-[clamp(1.5rem,2.6vw,2.2rem)] font-semibold leading-[1.15] tracking-[-0.025em] text-ink">
              Formula Development Aligned to the Product Brief
            </h2>
            <p className="mt-4 text-[0.93rem] leading-7 text-ink-soft">
              Stock-formula, customer-formula and custom-development routes are available. The team reviews species, intended positioning, dosage form, ingredient compatibility, packaging and destination-market requirements before sampling and specification approval.
            </p>
            {/* Formulation table */}
            <div className="mt-8 border border-line">
              <div className="grid grid-cols-[1fr_2fr] border-b border-line bg-[#f8f7f2] px-5 py-2.5 text-[0.68rem] font-semibold uppercase tracking-[0.08em] text-ink-soft">
                <span>Category</span>
                <span>Key Active Ingredients</span>
              </div>
              {[
                { name: "Joint Health", ingredients: "MSM · Glucosamine · Chondroitin · Green-Lipped Mussel · Vitamin C/E · Fish Oil" },
                { name: "Probiotic Support", ingredients: "Multi-strain probiotics · Prebiotic fiber · Digestive enzymes" },
                { name: "Anti-Itch & Allergy", ingredients: "Omega-3 · Turmeric · Quercetin · Grape Seed · Pumpkin · Bromelain" },
                { name: "Calming & Anxiety", ingredients: "Chamomile · Valerian Root · L-Tryptophan · Melatonin · L-Theanine · Passionflower" },
                { name: "Omega-3 / Fish Oil", ingredients: "EPA · DHA · Vitamin E (antioxidant stabiliser)" },
              ].map(({ name, ingredients }, i) => (
                <div key={name} className={`grid grid-cols-[1fr_2fr] items-start gap-4 px-5 py-3 text-sm ${i !== 0 ? "border-t border-line" : ""}`}>
                  <span className="font-semibold text-ink">{name}</span>
                  <span className="text-[0.8rem] leading-5 text-ink-soft">{ingredients}</span>
                </div>
              ))}
            </div>
            <p className="mt-3 text-[0.72rem] text-ink-soft">Ingredient identity, supplier documentation and required testing are confirmed for each approved project specification.</p>
          </div>
          <div className="flex items-center justify-center bg-white px-8 py-14 lg:py-20">
            <div className="relative w-full max-w-[240px] overflow-hidden" style={{ aspectRatio: '3/4' }}>
              <Image
                src="/images/science/ai-lab-rd.jpg"
                alt="Pet supplement formulation ingredients and specification sheet"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 16vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ─── MODULE 8: LEADERSHIP TEAM ─── */}
      <section className="border-b border-line bg-[#f8f7f2] py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 text-forest-mid">
              <Users className="size-4" strokeWidth={1.6} aria-hidden />
              <p className="b2b-kicker">Leadership &amp; expertise</p>
            </div>
            <h2 className="mt-4 text-[clamp(1.5rem,2.6vw,2.2rem)] font-semibold leading-[1.15] tracking-[-0.025em] text-ink">
              Cross-Functional Project Responsibilities
            </h2>
            <p className="mt-4 text-[0.93rem] leading-7 text-ink-soft">
              A commercial pet supplement project moves through product, quality and project-coordination responsibilities with defined handoffs.
            </p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {[
              {
                name: "Product & Formulation",
                title: "Specification owner",
                desc: "Reviews the product brief, dosage form, ingredient compatibility, sample feedback and approved formula specification.",
              },
              {
                name: "Quality & Compliance",
                title: "Evidence owner",
                desc: "Confirms the applicable quality records, certificate scope, test requirements and finished-product release package.",
              },
              {
                name: "Project Coordination",
                title: "Commercial owner",
                desc: "Coordinates quotation inputs, sampling milestones, packaging decisions, production timing and shipment documentation.",
              },
            ].map(({ name, title, desc }) => (
              <article key={name} className="border border-line bg-white p-6">
                <div className="flex items-center gap-3 border-b border-line pb-4">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-forest/10">
                    <Users className="size-5 text-forest" strokeWidth={1.6} aria-hidden />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-ink">{name}</h3>
                    <p className="text-[0.7rem] font-medium uppercase tracking-[0.09em] text-forest-mid">{title}</p>
                  </div>
                </div>
                <p className="mt-4 text-[0.82rem] leading-6 text-ink-soft">{desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ─── MODULE 9: MILESTONES ─── */}
      <section className="border-b border-line bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr] lg:gap-16 lg:items-start">
            <div>
              <div className="flex items-center gap-3 text-forest-mid">
                <Clock className="size-4" strokeWidth={1.6} aria-hidden />
                <p className="b2b-kicker">Company milestones</p>
              </div>
              <h2 className="mt-4 text-[clamp(1.5rem,2.6vw,2.2rem)] font-semibold leading-[1.15] tracking-[-0.025em] text-ink">
              Verified Company and Certification Milestones
              </h2>
              <p className="mt-4 text-[0.93rem] leading-7 text-ink-soft">
              The timeline below is limited to dates supported by the supplied business, production-license and certification records.
              </p>
              <div className="mt-6 overflow-hidden rounded-lg border border-line">
                <Image
                  src="/images/science/trade-show.png"
                  alt="Beno Biotech exhibition booth at China pet industry trade show, showcasing OEM partner brands"
                  width={600}
                  height={600}
                  className="w-full object-cover"
                  sizes="(min-width: 1024px) 33vw, 100vw"
                />
              </div>
            </div>
            <div className="relative">
              <div className="absolute left-[7px] top-0 h-full w-px bg-line" aria-hidden />
              <ol className="space-y-0">
                {[
                  { year: "Aug 2016", event: "Company founded", detail: "Taizhou Beno Biotech Co., Ltd. established in Taixing, Jiangsu. Business license issued with scope covering pet food R&D, production, processing, and sales." },
                  { year: "Jun 2019", event: "Company record updated", detail: "Unified Social Credit Code 91321283MA1MR5HB8P and registered capital of RMB 1,000,000 are shown in the supplied company record." },
                  { year: "Apr 2026", event: "Feed Production License issued", detail: "License No. 苏饲预（2026）12006 issued by Jiangsu provincial authority, covering pet additive premixed feed. Valid through April 25, 2031." },
                  { year: "Jun 2026", event: "GMP and SQF audit completed", detail: "Eurofins GMP recognition records a score of 86%. SQF Food Safety Code Edition 9 records a score of 88 and a Good rating; the SQF Quality Code record uses the same site identifier." },
                  { year: "Jul 2026", event: "SQF certificates issued", detail: "Certificate SIN 105690 was issued with validity through August 28, 2027. FDA Food Facility Registration No. 10222600768 is listed separately as a registration, not an FDA product approval." },
                ].map(({ year, event, detail }) => (
                  <li key={year} className="relative pl-8 pb-8 last:pb-0">
                    <div className="absolute left-0 top-1.5 size-3.5 rounded-full border-2 border-forest bg-white" aria-hidden />
                    <p className="text-[0.65rem] font-bold uppercase tracking-[0.1em] text-forest-mid">{year}</p>
                    <p className="mt-0.5 text-sm font-semibold text-ink">{event}</p>
                    <p className="mt-1.5 text-[0.82rem] leading-6 text-ink-soft">{detail}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* ─── MODULE 10: 2026 PARTNER COMMITMENTS ─── */}
      <section className="border-b border-line bg-forest-deep py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 text-amber-soft">
              <FlaskConical className="size-4" strokeWidth={1.6} aria-hidden />
              <p className="b2b-kicker text-amber-soft">2026 partner program</p>
            </div>
            <h2 className="mt-4 text-[clamp(1.5rem,2.6vw,2.2rem)] font-semibold leading-[1.15] tracking-[-0.025em] text-white">
              Three Principles for Buyer Qualification
            </h2>
            <p className="mt-4 text-[0.93rem] leading-7 text-white/65">
              The website separates verified facility evidence from project-specific commercial terms so buyers can evaluate the manufacturer without unsupported promises.
            </p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
                          {[
              {
                number: "01",
                title: "Verified Facts First",
                desc: "Facility, license and certificate statements are tied to the supplied records, with original PDFs available for buyer review.",
              },
              {
                number: "02",
                title: "Project-Specific Evidence",
                desc: "Testing, COA, stability and destination-market requirements are confirmed against the approved formula and quotation.",
              },
              {
                number: "03",
                title: "Formal Commercial Confirmation",
                desc: "MOQ, pricing, lead time and packaging are confirmed in a formal quotation instead of presented as universal terms.",
              },
            ].map(({ number, title, desc }) => (
              <article key={number} className="border border-white/15 bg-white/[0.05] p-6 backdrop-blur-sm">
                <span className="text-[0.65rem] font-bold uppercase tracking-[0.12em] text-amber-soft">{number}</span>
                <h3 className="mt-2 text-sm font-semibold text-white">{title}</h3>
                <p className="mt-3 text-[0.82rem] leading-6 text-white/65">{desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ─── MODULE 11: FAQ ─── */}
      <section className="border-b border-line bg-white">
        <JsonLd data={faqJsonLd(faqs)} />
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-14 sm:px-8 lg:grid-cols-[0.34fr_0.66fr] lg:px-10">
          <div>
            <p className="b2b-kicker text-forest-mid">Quality FAQ</p>
            <h2 className="mt-3 text-[clamp(1.4rem,2.2vw,1.9rem)] font-semibold tracking-[-0.03em] text-ink">
              Pet Supplement Quality &amp; Certification FAQ
            </h2>
            <p className="mt-3 text-[0.88rem] leading-6 text-ink-soft">
              Common questions from procurement managers, regulatory affairs teams, and brand owners evaluating Taizhou Beno Biotech as a manufacturing partner.
            </p>
          </div>
          <div className="border-t border-line">
            {faqs.map((item, index) => (
              <details key={item.q} className="group border-b border-line">
                <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-6 py-3 text-left">
                  <span className="flex items-start gap-4">
                    <span className="mt-0.5 text-[0.62rem] font-bold uppercase tracking-[0.1em] text-forest-mid">0{index + 1}</span>
                    <span className="text-[0.88rem] font-semibold text-ink">{item.q}</span>
                  </span>
                  <span className="text-xl font-light text-forest transition-transform group-open:rotate-45" aria-hidden>
                    +
                  </span>
                </summary>
                <p className="pb-5 pl-10 pr-8 text-[0.85rem] leading-7 text-ink-soft">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ─── BOTTOM CTA ─── */}
      <section className="border-b border-line bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 py-14 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-10">
          <div className="flex items-start gap-4">
            <FileText className="mt-1 size-5 shrink-0 text-forest-mid" aria-hidden />
            <div>
              <h2 className="text-xl font-semibold tracking-[-0.025em] text-ink">
                Need a vendor-approval document package?
              </h2>
              <p className="mt-1.5 max-w-2xl text-[0.88rem] leading-6 text-ink-soft">
                Send the product, target market, requested evidence and expected order volume. The team will confirm which records are available, which documents are project-specific and the expected review timeline.
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
