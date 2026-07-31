import type { Metadata } from "next";
import Image from "next/image";
import {
  ArrowRight,
  Check,
  ShieldCheck,
  ExternalLink,
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
  Star,
  Clock,
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
    image: "/images/science/cert-gmp.jpg",
    description: "Eurofins GMP audit recognition confirms that our facility meets Good Manufacturing Practice standards for pet supplement production. The on-site audit covered facility layout, equipment qualification, personnel hygiene, raw material controls, in-process monitoring, and documentation integrity. An 86% score on the first attempt reflects a mature quality management system that was already operating at international standards before the formal audit.",
  },
  {
    short: "SQF",
    name: "SQF Food Safety Code Certificate",
    pdf: "/certificates/taizhou-beno-sqf-2026.pdf",
    issuer: "SQFI / Eurofins Food Assurance Certification US, LLC",
    status: "Current",
    scope: "FSC 32 – Pet Premix food",
    audit: "12–14 June 2026",
    validTo: "28 August 2027",
    identifierLabel: "Certificate / SIN",
    identifier: "105690",
    result: "Edition 9 — Audit score: 88 — Rated: Good",
    image: "/images/science/cert-sqf-food.jpg",
    description: "The SQF Food Safety Code Edition 9 is one of the most rigorous third-party food safety standards globally, recognized by the Global Food Safety Initiative (GFSI). Our certification under FSC 32 (Pet Premix food) was awarded after a three-day on-site audit by Eurofins Food Assurance Certification US, LLC. The 88-point score and 'Good' rating on an initial certification audit demonstrates that our HACCP plan, allergen management, foreign matter controls, and sanitation programs are fully operational and documented.",
  },
  {
    short: "SQF",
    name: "SQF Quality Code Certificate",
    pdf: "/certificates/taizhou-beno-sqf-quality-2026.pdf",
    issuer: "SQFI / Eurofins Food Assurance Certification US, LLC",
    status: "Current",
    scope: "FSC 00 – Quality Management",
    audit: "12–14 June 2026",
    validTo: "28 August 2027",
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
    q: "What is the minimum order quantity, and why is it lower than industry average?",
    a: "Our MOQ is 500 bottles for soft chews — compared to the industry average of 3,000 bottles. This is possible because our high-speed production line (1 tonne/hour) allows efficient short runs without the setup cost penalties that affect slower equipment. Low MOQ is a deliberate strategic choice to support new brand launches, market testing, and seasonal SKU expansion for our partners.",
  },
  {
    q: "Does the website claim every project receives the same tests?",
    a: "No. Formula, dosage form, and destination market change the required evidence. The project-specific test and document package is confirmed during quotation based on the approved specification and buyer requirements. For example, a US-market soft chew may require a different certificate of analysis format than an EU-market tablet.",
  },
  {
    q: "Can procurement teams inspect the original files?",
    a: "Yes. Each certificate registry entry includes a direct link to the original PDF record for vendor review. Additional documentation such as full audit reports, FDA registration confirmation, and the Feed Production License are available upon request. We can also provide a complete vendor qualification package including HACCP plan summary, allergen statement, and country-of-origin documentation.",
  },
  {
    q: "What should a buyer include in a document request?",
    a: "Provide the product or formula, target market, sales channel, requested certificates, testing expectations, label responsibility, and shipment terms. For regulatory compliance, specify destination country requirements and any mandatory testing protocols. Our team will respond within 24 hours with a tailored document checklist and timeline.",
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
              Review the current GMP audit recognition and SQF Pet Food Manufacturing certificate
              issued for Taizhou Beno Biotech Co., Ltd., then use the quality framework below to
              plan project-specific due diligence.
            </p>
          </div>
        </div>
      </section>

      {/* ─── MODULE 1: KEY STATS BAR ─── */}
      <section className="border-b border-line bg-white">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <dl className="grid grid-cols-2 divide-x divide-y divide-line sm:grid-cols-3 lg:grid-cols-5 lg:divide-y-0">
            {[
              { value: "2016", label: "Year Founded", sub: "Jiangsu, China" },
              { value: "3,000 m²", label: "GMP Facility", sub: "Dedicated production" },
              { value: "180M+", label: "Units / Month", sub: "Soft chew capacity" },
              { value: "11 Yrs", label: "Safe Production", sub: "Zero incidents" },
              { value: "500", label: "MOQ (bottles)", sub: "Industry avg: 3,000" },
            ].map(({ value, label, sub }) => (
              <div key={label} className="flex flex-col items-center justify-center px-6 py-10 text-center">
                <dd className="text-[clamp(1.8rem,3vw,2.6rem)] font-bold leading-none tracking-[-0.03em] text-forest">
                  {value}
                </dd>
                <dt className="mt-3 text-sm font-semibold text-ink">{label}</dt>
                <span className="mt-1 text-xs text-ink-soft">{sub}</span>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ─── MODULE 2: FACILITY OVERVIEW ─── */}
      <section className="border-b border-line bg-[#f8f7f2]">
        <div className="mx-auto grid max-w-7xl lg:grid-cols-2">
          <div className="px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
            <div className="flex items-center gap-3 text-forest-mid">
              <Factory className="size-5" strokeWidth={1.6} aria-hidden />
              <p className="b2b-kicker">Our facility</p>
            </div>
            <h2 className="mt-5 text-[clamp(1.8rem,3vw,2.6rem)] font-semibold leading-[1.12] tracking-[-0.025em] text-ink">
              A Purpose-Built GMP Factory in Jiangsu, China
            </h2>
            <p className="mt-5 text-[0.97rem] leading-8 text-ink-soft">
              Taizhou Beno Biotech Co., Ltd. was established in August 2016 in Taixing City, Jiangsu Province — one of China&apos;s most developed pharmaceutical and nutraceutical manufacturing corridors. Our 3,000 m² facility was designed from the ground up for pet supplement production, with 2,000 m² dedicated to GMP-compliant manufacturing and warehousing.
            </p>
            <p className="mt-4 text-[0.97rem] leading-8 text-ink-soft">
              The factory operates three independent production lines under a single-shift schedule of 30 trained production staff, six days per week. Physical separation between raw material receipt, ingredient preparation, mixing, forming, filling, packaging, and finished goods storage ensures that cross-contamination risks are controlled at the facility design level — not just through procedural controls.
            </p>
            <p className="mt-4 text-[0.97rem] leading-8 text-ink-soft">
              A second facility is currently under construction in Guangzhou to support growing demand from international OEM partners, with an operations center already established in Shenzhen to serve cross-border trade logistics and customer service.
            </p>
            <div className="mt-10 grid grid-cols-3 gap-4 border-t border-line pt-8">
              {[
                { value: "3", label: "Production Lines" },
                { value: "30", label: "Production Staff" },
                { value: "3,000 m²", label: "Total Facility" },
              ].map(({ value, label }) => (
                <div key={label}>
                  <p className="text-2xl font-bold tracking-[-0.02em] text-forest">{value}</p>
                  <p className="mt-1 text-xs text-ink-soft">{label}</p>
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
      <section id="certificates" className="scroll-mt-24 border-b border-line bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 text-forest-mid">
              <Award className="size-5" strokeWidth={1.6} aria-hidden />
              <p className="b2b-kicker">International certifications</p>
            </div>
            <h2 className="mt-5 text-[clamp(1.8rem,3vw,2.6rem)] font-semibold leading-[1.12] tracking-[-0.025em] text-ink">
              Four Independent Third-Party Certifications
            </h2>
            <p className="mt-5 text-[0.97rem] leading-8 text-ink-soft">
              All certifications were issued by Eurofins Food Assurance Certification US, LLC following on-site audits conducted in June 2026. Each certificate is independently verifiable through the issuing body&apos;s registry. Original PDF documents are available for download below and can be provided in full to procurement and regulatory teams on request.
            </p>
          </div>

          {/* 4 cert badge row */}
          <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              { short: "GMP", name: "Eurofins GMP", score: "Score: 86%", valid: "Valid to Jun 2027", image: "/images/science/cert-gmp.jpg" },
              { short: "SQF", name: "SQF Food Safety", score: "Score: 88 — Good", valid: "Valid to Aug 2027", image: "/images/science/cert-sqf-food.jpg" },
              { short: "SQF", name: "SQF Quality Code", score: "Edition 9", valid: "Valid to Aug 2027", image: "/images/science/cert-sqf-quality.jpg" },
              { short: "FDA", name: "FDA Registration", score: "No. 10222600768", valid: "Valid to Dec 2026", image: "/images/science/cert-fda.png" },
            ].map(({ short, name, score, valid, image }) => (
              <div key={name} className="group overflow-hidden rounded-lg border border-line bg-white shadow-sm transition-shadow hover:shadow-md">
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#f8f7f2]">
                  <Image
                    src={image}
                    alt={`${name} certificate`}
                    fill
                    className="object-contain p-3 transition-transform duration-500 group-hover:scale-105"
                    sizes="(min-width: 640px) 25vw, 50vw"
                  />
                </div>
                <div className="border-t border-line p-4">
                  <div className="inline-flex items-center rounded-sm bg-forest px-2 py-0.5 text-[0.6rem] font-bold tracking-[0.1em] text-white">
                    {short}
                  </div>
                  <h3 className="mt-2 text-sm font-semibold text-ink">{name}</h3>
                  <p className="mt-1 text-xs text-ink-soft">{score}</p>
                  <p className="mt-0.5 text-xs text-forest-mid">{valid}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Detailed cert records */}
          <div className="mt-16 border-t border-line">
            {certificates.map((certificate) => (
              <article key={certificate.identifier + certificate.name} className="border-b border-line py-10">
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
                      <h3 className="mt-3 text-xl font-semibold tracking-[-0.025em] text-ink">
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

                <p className="mt-5 max-w-3xl text-sm leading-7 text-ink-soft">{certificate.description}</p>

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

      {/* ─── MODULE 4: SOFT CHEW ADVANTAGE ─── */}
      <section className="border-b border-line bg-[#f8f7f2]">
        <div className="mx-auto grid max-w-7xl lg:grid-cols-2">
          <div className="relative min-h-[440px] lg:min-h-auto lg:order-last">
            <Image
              src="/images/science/soft-chews-product.png"
              alt="Heart-shaped soft chew pet supplements produced at Beno Biotech"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>
          <div className="px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
            <div className="flex items-center gap-3 text-forest-mid">
              <Star className="size-5" strokeWidth={1.6} aria-hidden />
              <p className="b2b-kicker">Core product advantage</p>
            </div>
            <h2 className="mt-5 text-[clamp(1.8rem,3vw,2.6rem)] font-semibold leading-[1.12] tracking-[-0.025em] text-ink">
              China&apos;s Fastest Soft Chew Production Line
            </h2>
            <p className="mt-5 text-[0.97rem] leading-8 text-ink-soft">
              Soft chews are the fastest-growing format in the global pet supplement market, driven by high palatability and ease of administration. Our high-speed production line processes one tonne of soft chew mass per hour — a throughput that is unmatched by any comparable facility in China — enabling us to produce over 180 million units per month at consistent quality.
            </p>
            <p className="mt-4 text-[0.97rem] leading-8 text-ink-soft">
              Batch-to-batch consistency is maintained through precise temperature control during the extrusion and forming stages, with in-process hardness and moisture checks at defined intervals. The result is a product with stable texture, accurate active ingredient distribution, and reliable shelf life — critical requirements for brands selling into regulated markets such as the US, EU, and Australia.
            </p>
            <div className="mt-10 space-y-4">
              {[
                { icon: TrendingUp, title: "1 tonne / hour throughput", desc: "The fastest soft chew line in China, enabling short-run flexibility without cost penalties." },
                { icon: Layers, title: "Heart, bone, paw & custom shapes", desc: "Multiple mold options available; custom shape development supported for brand differentiation." },
                { icon: Check, title: "Stable texture across batches", desc: "Hardness, moisture, and weight uniformity tested at every production checkpoint." },
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
      <section className="border-b border-line bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid gap-16 lg:grid-cols-[1fr_1.2fr] lg:gap-20 lg:items-center">
            <div>
              <div className="flex items-center gap-3 text-forest-mid">
                <Layers className="size-5" strokeWidth={1.6} aria-hidden />
                <p className="b2b-kicker">Production scope</p>
              </div>
              <h2 className="mt-5 text-[clamp(1.8rem,3vw,2.6rem)] font-semibold leading-[1.12] tracking-[-0.025em] text-ink">
                Five Dosage Forms, One Manufacturing Partner
              </h2>
              <p className="mt-5 text-[0.97rem] leading-8 text-ink-soft">
                Beyond soft chews, our facility is equipped to produce the full range of pet supplement formats that modern brands require. Whether you are launching a joint-health paste, a probiotic powder, or a calming liquid, we can manufacture it under the same GMP and SQF-certified quality system — eliminating the complexity and risk of managing multiple contract manufacturers.
              </p>
              <p className="mt-4 text-[0.97rem] leading-8 text-ink-soft">
                Each dosage form has dedicated equipment and validated processes. Tablets are produced on rotary press equipment with weight and hardness monitoring. Pastes and gels are filled under controlled temperature conditions. Liquids are processed in stainless steel vessels with validated mixing and filling procedures. Powders and granules are blended in closed systems to prevent dust exposure and cross-contamination.
              </p>
              <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {[
                  { name: "Soft Chews", note: "Core strength" },
                  { name: "Tablets", note: "Rotary press" },
                  { name: "Pastes & Gels", note: "Tube fill" },
                  { name: "Liquids", note: "Bottle fill" },
                  { name: "Powders", note: "Closed blend" },
                  { name: "Granules", note: "Granulation" },
                ].map(({ name, note }) => (
                  <div key={name} className="rounded-md border border-line bg-[#f8f7f2] px-4 py-3">
                    <p className="text-sm font-semibold text-ink">{name}</p>
                    <p className="mt-0.5 text-xs text-ink-soft">{note}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative aspect-[3/2] w-full overflow-hidden rounded-lg">
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
      <section className="border-b border-line bg-[#f8f7f2] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 text-forest-mid">
              <ClipboardCheck className="size-5" strokeWidth={1.6} aria-hidden />
              <p className="b2b-kicker">Quality system</p>
            </div>
            <h2 className="mt-5 text-[clamp(1.8rem,3vw,2.6rem)] font-semibold leading-[1.12] tracking-[-0.025em] text-ink">
              A Four-Stage Quality Control System, Audited and Verified
            </h2>
            <p className="mt-5 text-[0.97rem] leading-8 text-ink-soft">
              Our quality control system is structured around four mandatory checkpoints that every batch must pass before it can advance to the next production stage. This is not a paper-based system — each checkpoint generates physical records that are retained for a minimum of three years and are available for buyer review. The system was independently verified during the June 2026 Eurofins GMP and SQF audits.
            </p>
          </div>

          <div className="mt-16 grid gap-1 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: TestTube,
                step: "01",
                title: "Raw Material Inspection",
                desc: "Every incoming raw material is tested against a pre-approved specification before it is accepted into the warehouse. Supplier certificates of analysis are reviewed and retained. Materials that fail specification are quarantined and returned. Critical raw materials — including active ingredients and food-grade additives — are subject to double-check verification by two QC personnel before release to production.",
              },
              {
                icon: ClipboardCheck,
                step: "02",
                title: "In-Process Monitoring",
                desc: "Production checkpoints are defined in the HACCP plan (BN-HACCP01, Rev A/0, updated January 2026). Critical Control Points include ingredient weighing (CCP1) and sterilization (CCP2). In-process parameters such as mixing time, temperature, moisture content, and forming weight are recorded at defined intervals. Any deviation triggers an immediate hold and corrective action review.",
              },
              {
                icon: PackageCheck,
                step: "03",
                title: "Finished Product Testing",
                desc: "Finished products are tested against the approved specification before release. Tests include physical parameters (weight, hardness, moisture), microbiological counts, and active ingredient assay where required. Products are held in quarantine until the QC manager issues a formal release decision. Certificate of analysis is generated for every batch and provided to the buyer with the shipment.",
              },
              {
                icon: ShieldCheck,
                step: "04",
                title: "Batch Retention & Traceability",
                desc: "A retain sample from every batch is stored under controlled conditions for the duration of the product shelf life plus six months. Bidirectional traceability is maintained from raw material lot numbers through to finished goods batch codes and shipping records. In a documented exercise, 2,000 tubes from Batch 20260122 were fully traced within 90 minutes — demonstrating the practical effectiveness of the traceability system.",
              },
            ].map(({ icon: Icon, step, title, desc }) => (
              <article key={title} className="flex flex-col rounded-lg border border-line bg-white p-7">
                <div className="flex items-center justify-between">
                  <div className="flex size-12 items-center justify-center rounded-full bg-forest/10">
                    <Icon className="size-6 text-forest" strokeWidth={1.6} aria-hidden />
                  </div>
                  <span className="text-[2.2rem] font-bold leading-none tracking-[-0.04em] text-forest/10">
                    {step}
                  </span>
                </div>
                <h3 className="mt-5 text-base font-semibold text-ink">{title}</h3>
                <p className="mt-3 flex-1 text-sm leading-7 text-ink-soft">{desc}</p>
              </article>
            ))}
          </div>

          {/* Traceability proof */}
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            <div className="flex items-center gap-6 rounded-lg border border-forest/20 bg-white p-6">
              <div className="text-center">
                <p className="text-[2.4rem] font-bold leading-none tracking-[-0.03em] text-forest">2,000</p>
                <p className="mt-1 text-xs text-ink-soft">tubes</p>
              </div>
              <div className="border-l border-line pl-6">
                <p className="text-sm font-semibold text-ink">Fully traced in 90 minutes</p>
                <p className="mt-1 text-xs text-ink-soft">Pet nutrition paste — Batch 20260122</p>
                <p className="mt-1 text-xs text-forest-mid">Bidirectional: raw material → finished goods → shipment</p>
              </div>
            </div>
            <div className="flex items-center gap-6 rounded-lg border border-forest/20 bg-white p-6">
              <div className="text-center">
                <p className="text-[2.4rem] font-bold leading-none tracking-[-0.03em] text-forest">4,000</p>
                <p className="mt-1 text-xs text-ink-soft">bottles</p>
              </div>
              <div className="border-l border-line pl-6">
                <p className="text-sm font-semibold text-ink">Fully traced in 1.5 hours</p>
                <p className="mt-1 text-xs text-ink-soft">Pet nutrition tablet — Batch 20260520</p>
                <p className="mt-1 text-xs text-forest-mid">Bidirectional: raw material → finished goods → shipment</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── MODULE 7: R&D TEAM & FORMULATIONS ─── */}
      <section className="border-b border-line bg-white">
        <div className="mx-auto grid max-w-7xl lg:grid-cols-2">
          <div className="px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
            <div className="flex items-center gap-3 text-forest-mid">
              <Microscope className="size-5" strokeWidth={1.6} aria-hidden />
              <p className="b2b-kicker">R&amp;D &amp; formulation</p>
            </div>
            <h2 className="mt-5 text-[clamp(1.8rem,3vw,2.6rem)] font-semibold leading-[1.12] tracking-[-0.025em] text-ink">
              Academic Research Expertise, Applied to Commercial Formulation
            </h2>
            <p className="mt-5 text-[0.97rem] leading-8 text-ink-soft">
              Our technical advisory team is led by Professor Wang Kai, a researcher at the Chinese Academy of Agricultural Sciences, doctoral supervisor, National Outstanding Youth Fund recipient, and Beijing Science and Technology Rising Star. This academic partnership gives us direct access to the latest peer-reviewed research in animal nutrition, allowing us to formulate products that are grounded in evidence rather than marketing trends.
            </p>
            <p className="mt-4 text-[0.97rem] leading-8 text-ink-soft">
              Our existing formulation library covers the five highest-demand categories in the global pet supplement market: joint health (MSM, glucosamine, chondroitin, green-lipped mussel, Vitamin C/E, fish oil), probiotics, omega-3 fish oil, anti-itch and allergy support (Omega-3, turmeric, grape seed, quercetin, pumpkin, bromelain), and calming supplements (chamomile, valerian root, L-tryptophan, melatonin, L-theanine, passionflower). All active ingredients are sourced from verified suppliers with full traceability documentation.
            </p>
            <p className="mt-4 text-[0.97rem] leading-8 text-ink-soft">
              Custom formulation development is available for brands that require proprietary recipes. Our team will work with your specifications to develop, prototype, and validate a formula that meets your target market&apos;s regulatory requirements and your brand&apos;s efficacy claims.
            </p>
            <div className="mt-10 space-y-3">
              {[
                { name: "Joint Health", ingredients: "MSM · Glucosamine · Chondroitin · Green-Lipped Mussel · Fish Oil" },
                { name: "Probiotic Support", ingredients: "Multi-strain probiotics · Prebiotic fiber · Digestive enzymes" },
                { name: "Anti-Itch & Allergy", ingredients: "Omega-3 · Turmeric · Quercetin · Grape Seed · Bromelain" },
                { name: "Calming & Anxiety", ingredients: "Chamomile · Valerian Root · L-Tryptophan · Melatonin · L-Theanine" },
                { name: "Omega-3 Fish Oil", ingredients: "EPA · DHA · Natural fish oil · Vitamin E (antioxidant)" },
              ].map(({ name, ingredients }) => (
                <div key={name} className="rounded-md border border-line bg-[#f8f7f2] px-5 py-4">
                  <p className="text-sm font-semibold text-ink">{name}</p>
                  <p className="mt-1 text-xs leading-5 text-ink-soft">{ingredients}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative min-h-[480px] lg:min-h-auto">
            <Image
              src="/images/science/ai-lab-rd.jpg"
              alt="Research and development laboratory for pet supplement formulation"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>
        </div>
      </section>

      {/* ─── MODULE 8: LEADERSHIP TEAM ─── */}
      <section className="border-b border-line bg-[#f8f7f2] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 text-forest-mid">
              <Users className="size-5" strokeWidth={1.6} aria-hidden />
              <p className="b2b-kicker">Leadership &amp; expertise</p>
            </div>
            <h2 className="mt-5 text-[clamp(1.8rem,3vw,2.6rem)] font-semibold leading-[1.12] tracking-[-0.025em] text-ink">
              The Team Behind the Certifications
            </h2>
            <p className="mt-5 text-[0.97rem] leading-8 text-ink-soft">
              Certifications reflect the quality of the people who design, implement, and maintain the systems behind them. Our leadership team combines deep manufacturing experience, academic research expertise, and international trade knowledge — the three capabilities that matter most to brands building global pet supplement businesses.
            </p>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-3">
            {[
              {
                name: "Li Wang",
                title: "General Manager",
                desc: "Over ten years of focused experience in pet nutrition manufacturing. Previously managed OEM production for Wanpy, Bernate, and Kairisi — three of China's most recognized pet supplement brands. Li Wang leads the factory's quality culture and is the primary contact for vendor qualification audits.",
              },
              {
                name: "Prof. Wang Kai",
                title: "Technical Advisor",
                desc: "Researcher at the Chinese Academy of Agricultural Sciences, doctoral supervisor, National Outstanding Youth Fund recipient, and Beijing Science and Technology Rising Star. Prof. Wang Kai provides scientific oversight of formulation development and ensures that our products are aligned with current evidence in animal nutrition research.",
              },
              {
                name: "Jing Hang",
                title: "Operations Director",
                desc: "Former City General Manager at Alibaba International, with 12 years of B2B enterprise service experience. Jing Hang leads the Shenzhen operations center, managing cross-border logistics, customer onboarding, and international partner relationships. His background in digital trade ensures that our OEM process is efficient and transparent for overseas buyers.",
              },
            ].map(({ name, title, desc }) => (
              <article key={name} className="rounded-lg border border-line bg-white p-7">
                <div className="flex size-12 items-center justify-center rounded-full bg-forest/10">
                  <Users className="size-6 text-forest" strokeWidth={1.6} aria-hidden />
                </div>
                <h3 className="mt-5 text-base font-semibold text-ink">{name}</h3>
                <p className="mt-1 text-xs font-medium uppercase tracking-[0.1em] text-forest-mid">{title}</p>
                <p className="mt-4 text-sm leading-7 text-ink-soft">{desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ─── MODULE 9: MILESTONES ─── */}
      <section className="border-b border-line bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid gap-16 lg:grid-cols-[1fr_1.5fr] lg:gap-20 lg:items-start">
            <div>
              <div className="flex items-center gap-3 text-forest-mid">
                <Clock className="size-5" strokeWidth={1.6} aria-hidden />
                <p className="b2b-kicker">Company milestones</p>
              </div>
              <h2 className="mt-5 text-[clamp(1.8rem,3vw,2.6rem)] font-semibold leading-[1.12] tracking-[-0.025em] text-ink">
                Ten Years of Continuous Investment in Quality
              </h2>
              <p className="mt-5 text-[0.97rem] leading-8 text-ink-soft">
                From a small formulation team in 2016 to a GMP and SQF-certified manufacturer with international brand partners, every milestone in our history reflects a deliberate investment in the infrastructure and systems that global buyers require. The timeline below shows the key events that have shaped our current capabilities.
              </p>
              <div className="mt-8 overflow-hidden rounded-lg border border-line">
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
                  { year: "Jun 2019", event: "Business license updated", detail: "Unified Social Credit Code 91321283MA1MR5HB8P confirmed. Registered capital: RMB 1,000,000. Operating period extended to August 10, 2046." },
                  { year: "2020–2024", event: "High-speed production line installed", detail: "Investment in China's fastest soft chew extrusion and forming line, achieving 1 tonne/hour throughput and monthly capacity exceeding 180 million units." },
                  { year: "Apr 2026", event: "Feed Production License issued", detail: "License No. 苏饲预（2026）12006 issued by Jiangsu provincial authority, covering pet additive premixed feed. Valid through April 25, 2031." },
                  { year: "Jun 2026", event: "GMP & SQF dual certification", detail: "Three-day on-site audit by Eurofins Food Assurance Certification US, LLC. Eurofins GMP recognition (score: 86%), SQF Food Safety Code Edition 9 (score: 88, rated Good), and SQF Quality Code Edition 9 all awarded simultaneously." },
                  { year: "Jul 2026", event: "SQF certifications formally issued", detail: "Certificate SIN 105690 formally issued by SQFI on July 20, 2026. Valid through August 28, 2027. FDA Food Facility Registration No. 10222600768 active and current." },
                  { year: "2026–", event: "Guangzhou facility under construction", detail: "Second production facility under construction in Guangzhou to support growing international OEM demand. Shenzhen operations center already operational for cross-border trade management." },
                ].map(({ year, event, detail }) => (
                  <li key={year} className="relative pl-8 pb-10 last:pb-0">
                    <div className="absolute left-0 top-1.5 size-3.5 rounded-full border-2 border-forest bg-white" aria-hidden />
                    <p className="text-xs font-bold uppercase tracking-[0.1em] text-forest-mid">{year}</p>
                    <p className="mt-1 text-sm font-semibold text-ink">{event}</p>
                    <p className="mt-2 text-sm leading-7 text-ink-soft">{detail}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* ─── MODULE 10: 2026 PARTNER COMMITMENTS ─── */}
      <section className="border-b border-line bg-forest-deep py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 text-amber-soft">
              <FlaskConical className="size-5" strokeWidth={1.6} aria-hidden />
              <p className="b2b-kicker text-amber-soft">2026 partner program</p>
            </div>
            <h2 className="mt-5 text-[clamp(1.8rem,3vw,2.6rem)] font-semibold leading-[1.12] tracking-[-0.025em] text-white">
              Three Commitments to Our 2026 International Partners
            </h2>
            <p className="mt-5 text-[0.97rem] leading-8 text-white/70">
              As we expand our international OEM business in 2026, we are making three specific commitments to brands that choose to work with us. These are not marketing statements — they are operational policies that are built into how we allocate production capacity and price our services.
            </p>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-3">
            {[
              {
                number: "01",
                title: "Quality at a Competitive Price",
                desc: "We believe that GMP and SQF-certified manufacturing should not carry a premium that makes it inaccessible to emerging brands. Our commitment is to offer the same quality standards as larger contract manufacturers at a price point that reflects our operational efficiency — not our certification costs. For equivalent specifications, our pricing will be competitive with non-certified alternatives.",
              },
              {
                number: "02",
                title: "Priority Fulfillment for Early Partners",
                desc: "Production capacity is finite, and we allocate it deliberately. Brands that commit to a partnership in 2026 will receive priority scheduling for production slots, particularly during peak demand periods. This means that when you need to respond to a sales spike or a retail listing requirement, your order will not be delayed by later-arriving customers.",
              },
              {
                number: "03",
                title: "Low MOQ, No Compromise on Quality",
                desc: "Our minimum order quantity of 500 bottles for soft chews is the lowest offered by any GMP-certified pet supplement manufacturer in China. The industry average is 3,000 bottles. This low MOQ is made possible by our high-speed production line and is a permanent feature of our service offering — not a promotional concession. It allows you to launch new SKUs, test new markets, and manage inventory risk without committing to volumes that exceed your demand.",
              },
            ].map(({ number, title, desc }) => (
              <article key={number} className="rounded-lg border border-white/15 bg-white/[0.05] p-7 backdrop-blur-sm">
                <span className="text-[2.8rem] font-bold leading-none tracking-[-0.04em] text-white/15">
                  {number}
                </span>
                <h3 className="mt-4 text-base font-semibold text-white">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/70">{desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ─── MODULE 11: FAQ ─── */}
      <section className="border-b border-line bg-white">
        <JsonLd data={faqJsonLd(faqs)} />
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[0.34fr_0.66fr] lg:px-10">
          <div>
            <p className="b2b-kicker text-forest-mid">Quality FAQ</p>
            <h2 className="mt-4 text-3xl font-medium tracking-[-0.035em] text-ink">
              Pet Supplement Quality &amp; Certification FAQ
            </h2>
            <p className="mt-4 text-sm leading-7 text-ink-soft">
              Common questions from procurement managers, regulatory affairs teams, and brand owners evaluating Taizhou Beno Biotech as a manufacturing partner.
            </p>
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

      {/* ─── BOTTOM CTA ─── */}
      <section className="border-b border-line bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 py-16 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-10">
          <div className="flex items-start gap-4">
            <Check className="mt-1 size-6 shrink-0 text-forest-mid" aria-hidden />
            <div>
              <h2 className="text-2xl font-semibold tracking-[-0.025em] text-ink">
                Need a vendor-approval document package?
              </h2>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-ink-soft">
                Send the product, target market, requested evidence and expected order volume. We will respond within 24 hours with a complete document checklist and timeline.
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
