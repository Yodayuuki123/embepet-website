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
  FileText,
  Download,
  ChevronRight,
  Beaker,
  Boxes,
  ScanLine,
  Warehouse,
  MapPin,
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
    issuer: "Eurofins Food Assurance Certification US, LLC",
    status: "Current",
    scope: "Good Manufacturing Practice audit recognition",
    audit: "12–14 Jun 2026",
    validTo: "14 Jun 2027",
    identifierLabel: "Certificate ID",
    identifier: "ACCB8AAA422_1",
    result: "Score: 86%",
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
    audit: "12–14 Jun 2026",
    validTo: "28 Aug 2027",
    identifierLabel: "Certificate / SIN",
    identifier: "105690",
    result: "Edition 9 — Score: 88 — Good",
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

const factoryFaqs = [
  {
    q: "Where is your pet supplement factory located?",
    a: "Our manufacturing facility is operated by Taizhou Beno Biotech Co., Ltd. in Taixing City, Jiangsu, China — a 3,000 m² production base with 2,000 m² dedicated to production and warehousing, established in August 2016.",
  },
  {
    q: "What is your pet supplement production capacity?",
    a: "The factory operates 3 production lines with 30 production staff on a single-shift schedule (8:00–17:00, six days per week). Actual SKU availability and production allocation are confirmed in each quotation based on the approved formula and dosage form.",
  },
  {
    q: "Which pet supplement dosage forms can the factory produce?",
    a: "The facility is licensed to produce solid, semi-solid and liquid pet additive premixed feed. Product forms include soft chews, tablets, pastes, drops/oils, powders and granules using vacuum emulsification, tablet pressing, mixing, sterilization and drying processes.",
  },
  {
    q: "Is the factory certified for export?",
    a: "Yes. The manufacturing entity holds Feed Production License No. 苏饲预（2026）12006, SQF Food Safety Code: Pet Food Manufacturing certification (Edition 9, audit score 88), SQF Quality Code certification, Eurofins GMP audit recognition (86% score), and FDA Food Facility Registration (No. 10222600768, valid through December 31, 2026).",
  },
  {
    q: "Can I visit or audit the factory before placing an order?",
    a: "Buyers evaluating the factory for a project can request a manufacturing review. Share the product, requested process, document list, quantity and destination market to begin. The facility address is Li Kong Group 3, Donglin Village, Yaowang Street, Taixing City, Jiangsu 225400, China.",
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
  const tf = dict.b2bPages.factory;

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
              GMP audit recognition and SQF Pet Food Manufacturing certificate issued for Taizhou Beno Biotech Co., Ltd. — independently verifiable through each issuing body&apos;s registry.
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
              { value: "3,000 m²", label: "GMP Facility", sub: "2,000 m² production" },
              { value: "180M+", label: "Units / Month", sub: "Soft chew capacity" },
              { value: "11 Yrs", label: "Zero Incidents", sub: "Safe production record" },
              { value: "500 MOQ", label: "Min. Order Qty", sub: "Industry avg: 3,000" },
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
            {/* ABOUT heading — two-tone style */}
            <h2 className="text-[clamp(1.8rem,3vw,2.6rem)] font-extrabold leading-[1.1] tracking-[-0.02em]">
              <span className="text-ink">ABOUT </span>
              <span className="text-forest">EMBEPET</span>
            </h2>

            <p className="mt-5 text-[0.93rem] leading-7 text-ink-soft">
              Founded in 2016 in Taixing, Jiangsu, our 3,000 m² facility was purpose-built for pet supplement production — 2,000 m² dedicated to GMP-compliant manufacturing. Three independent production lines operate under strict physical separation across all production stages.
            </p>
            <p className="mt-3 text-[0.93rem] leading-7 text-ink-soft">
              A second facility is under construction in Guangzhou; our Shenzhen operations center manages cross-border logistics for international partners.
            </p>
            <p className="mt-3 text-[0.93rem] leading-7 text-ink-soft">
              Taizhou Beno Biotech holds Eurofins GMP audit recognition and SQF Food Safety Code Edition 9 certification — independently verifiable through each issuing body&apos;s registry. Our products have been awarded multiple international quality recognitions.
            </p>

            {/* Chevron bullet list — 2 columns */}
            <div className="mt-7 grid grid-cols-2 gap-x-6 gap-y-3">
              {[
                "Founded 2016 · Taixing, Jiangsu",
                "3,000 m² GMP facility",
                "3 independent production lines",
                "30 production staff (single shift)",
                "6 days / week operating schedule",
                "Guangzhou facility under construction",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2">
                  <ChevronRight className="mt-0.5 size-4 shrink-0 text-forest" strokeWidth={2} aria-hidden />
                  <span className="text-[0.85rem] leading-5 text-ink-soft">{item}</span>
                </div>
              ))}
            </div>

            {/* Stats row */}
            <div className="mt-10 grid grid-cols-3 gap-4 border-t border-line pt-8">
              {[
                { value: "500", unit: "MOQ", label: "Min. Order Qty" },
                { value: "180M+", unit: "/mo", label: "Units Capacity" },
                { value: "11 Yrs", unit: "", label: "Zero Incidents" },
              ].map(({ value, unit, label }) => (
                <div key={label} className="text-left">
                  <p className="text-[clamp(1.6rem,2.5vw,2.2rem)] font-extrabold leading-none tracking-[-0.03em] text-forest">
                    {value}<span className="text-[1rem] font-semibold text-forest-mid">{unit}</span>
                  </p>
                  <p className="mt-1.5 text-[0.75rem] font-medium text-ink">{label}</p>
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
          <div className="mx-auto max-w-7xl flex flex-col items-center text-center">
            <div className="flex items-center gap-3 text-forest-mid">
              <Award className="size-4" strokeWidth={1.6} aria-hidden />
              <p className="b2b-kicker">Compliance &amp; certification records</p>
            </div>
            <h2 className="mt-3 text-[clamp(1.4rem,2.4vw,2rem)] font-semibold leading-[1.15] tracking-[-0.025em] text-ink">
              Verified by Eurofins, SQF &amp; FDA — Certifications You Can Check
            </h2>
            <p className="mt-2 max-w-2xl text-[0.88rem] leading-6 text-ink-soft">
              Every certificate listed here was issued following an independent on-site audit. Each record is publicly verifiable through the issuing body&apos;s registry. Original PDFs are available on request for procurement and regulatory teams.
            </p>
          </div>
        </div>

        {/* Cert full image */}
        <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:px-10">
          <div className="overflow-hidden rounded-sm border border-line bg-[#f8f7f2]">
            <Image
              src="/images/science/cert-all.png"
              alt="All certifications: FDA Food Facility Registration, Feed Production License, Business License, D-U-N-S, FFR Screenshots, GMP Certificate, SQF Confirmation Letter, SQF Certificate, SQF Quality Certificate"
              width={1448}
              height={1086}
              className="w-full h-auto object-contain"
              sizes="(min-width: 1280px) 1200px, 100vw"
              priority
            />
          </div>
          <p className="mt-4 text-center text-[0.78rem] text-ink-soft">
            FDA · Feed Production License · Business License · D-U-N-S · FFR Registration · Eurofins GMP · SQF Confirmation Letter · SQF Food Safety · SQF Quality Code
          </p>
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
              China&apos;s Fastest Soft Chew Production Line
            </h2>
            <p className="mt-4 text-[0.93rem] leading-7 text-ink-soft">
              Our high-speed extrusion line processes 1 tonne/hour — unmatched by any comparable facility in China — delivering 180M+ units per month. Hardness, moisture, and weight are checked at every production interval to ensure batch-to-batch consistency.
            </p>
            <div className="mt-8 space-y-3">
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
      <section className="border-b border-line bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16 lg:items-start">
            <div>
              <div className="flex items-center gap-3 text-forest-mid">
                <Layers className="size-4" strokeWidth={1.6} aria-hidden />
                <p className="b2b-kicker">Production scope</p>
              </div>
              <h2 className="mt-4 text-[clamp(1.5rem,2.6vw,2.2rem)] font-semibold leading-[1.15] tracking-[-0.025em] text-ink">
                Five Dosage Forms, One Manufacturing Partner
              </h2>
              <p className="mt-4 text-[0.93rem] leading-7 text-ink-soft">
                All six dosage forms are produced under the same GMP and SQF-certified quality system, with dedicated equipment and validated SOPs for each format.
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
              Four-Stage QC — Audited and Verified by Eurofins
            </h2>
            <p className="mt-4 text-[0.93rem] leading-7 text-ink-soft">
              Every batch passes four mandatory checkpoints before shipment, generating physical records retained for a minimum of three years. Independently verified during the June 2026 Eurofins GMP and SQF audits (HACCP plan: BN-HACCP01, Rev A/0).
            </p>
          </div>

          {/* Horizontal step flow */}
          <div className="mt-12 hidden lg:block">
            <div className="relative flex items-start gap-0">
              {/* connecting line */}
              <div className="absolute left-[calc(12.5%)] right-[calc(12.5%)] top-[22px] h-px bg-line" aria-hidden />
              {[
                { icon: TestTube, step: "01", title: "Raw Material Inspection", desc: "CoA review, dual QC sign-off, quarantine for non-conforming lots. Critical actives double-verified before warehouse release." },
                { icon: ClipboardCheck, step: "02", title: "In-Process Monitoring", desc: "HACCP CCPs: ingredient weighing (CCP1) and sterilization (CCP2). Mixing time, temperature, moisture and weight logged at defined intervals." },
                { icon: PackageCheck, step: "03", title: "Finished Product Testing", desc: "Physical (weight, hardness, moisture), microbiological, and active assay testing. QC manager formal release required before any shipment." },
                { icon: ShieldCheck, step: "04", title: "Batch Retention & Traceability", desc: "Retain samples held for shelf life + 6 months. Bidirectional traceability: raw material lots → finished goods → shipping records." },
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
              { icon: TestTube, step: "01", title: "Raw Material Inspection", desc: "CoA review, dual QC sign-off, quarantine for non-conforming lots. Critical actives double-verified before warehouse release." },
              { icon: ClipboardCheck, step: "02", title: "In-Process Monitoring", desc: "HACCP CCPs: ingredient weighing (CCP1) and sterilization (CCP2). Mixing time, temperature, moisture and weight logged at defined intervals." },
              { icon: PackageCheck, step: "03", title: "Finished Product Testing", desc: "Physical (weight, hardness, moisture), microbiological, and active assay testing. QC manager formal release required before any shipment." },
              { icon: ShieldCheck, step: "04", title: "Batch Retention & Traceability", desc: "Retain samples held for shelf life + 6 months. Bidirectional traceability: raw material lots → finished goods → shipping records." },
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

          {/* Traceability evidence */}
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            <div className="flex items-center gap-5 border border-forest/20 bg-white px-6 py-5">
              <div className="shrink-0 text-center">
                <p className="text-[1.9rem] font-bold leading-none tracking-[-0.03em] text-forest">2,000</p>
                <p className="mt-0.5 text-[0.68rem] text-ink-soft">tubes</p>
              </div>
              <div className="border-l border-line pl-5">
                <p className="text-sm font-semibold text-ink">Fully traced in 90 minutes</p>
                <p className="mt-1 text-[0.75rem] text-ink-soft">Pet nutrition paste — Batch 20260122</p>
                <p className="mt-0.5 text-[0.72rem] text-forest-mid">Bidirectional: raw material → finished goods → shipment</p>
              </div>
            </div>
            <div className="flex items-center gap-5 border border-forest/20 bg-white px-6 py-5">
              <div className="shrink-0 text-center">
                <p className="text-[1.9rem] font-bold leading-none tracking-[-0.03em] text-forest">4,000</p>
                <p className="mt-0.5 text-[0.68rem] text-ink-soft">bottles</p>
              </div>
              <div className="border-l border-line pl-5">
                <p className="text-sm font-semibold text-ink">Fully traced in 1.5 hours</p>
                <p className="mt-1 text-[0.75rem] text-ink-soft">Pet nutrition tablet — Batch 20260520</p>
                <p className="mt-0.5 text-[0.72rem] text-forest-mid">Bidirectional: raw material → finished goods → shipment</p>
              </div>
            </div>
          </div>
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
              Academic Research Expertise, Applied to Commercial Formulation
            </h2>
            <p className="mt-4 text-[0.93rem] leading-7 text-ink-soft">
              Led by Prof. Wang Kai (Chinese Academy of Agricultural Sciences, National Outstanding Youth Fund), our advisory team translates peer-reviewed animal nutrition research into commercial formulations. Custom formula development — from prototype to validated spec — is available for brands requiring proprietary recipes.
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
            <p className="mt-3 text-[0.72rem] text-ink-soft">All active ingredients sourced from verified suppliers with full traceability documentation.</p>
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
              The Team Behind the Certifications
            </h2>
            <p className="mt-4 text-[0.93rem] leading-7 text-ink-soft">
              Manufacturing experience, academic research, and international trade expertise — the team behind the certifications.
            </p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {[
              {
                name: "Li Wang",
                title: "General Manager",
                desc: "10+ years in pet nutrition manufacturing. Previously managed OEM production for Wanpy, Bernate, and Kairisi. Primary contact for vendor qualification audits.",
              },
              {
                name: "Prof. Wang Kai",
                title: "Technical Advisor",
                desc: "Researcher at the Chinese Academy of Agricultural Sciences, doctoral supervisor, National Outstanding Youth Fund recipient. Oversees formulation development and scientific alignment.",
              },
              {
                name: "Jing Hang",
                title: "Operations Director",
                desc: "Former City GM at Alibaba International, 12 years of B2B enterprise experience. Leads the Shenzhen operations center for cross-border logistics and partner onboarding.",
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
                Ten Years of Continuous Investment in Quality
              </h2>
              <p className="mt-4 text-[0.93rem] leading-7 text-ink-soft">
                From a small formulation team in 2016 to a GMP and SQF-certified manufacturer — every milestone reflects a deliberate investment in the systems global buyers require.
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
                  { year: "Jun 2019", event: "Business license updated", detail: "Unified Social Credit Code 91321283MA1MR5HB8P confirmed. Registered capital: RMB 1,000,000. Operating period extended to August 10, 2046." },
                  { year: "2020–2024", event: "High-speed production line installed", detail: "Investment in China's fastest soft chew extrusion and forming line, achieving 1 tonne/hour throughput and monthly capacity exceeding 180 million units." },
                  { year: "Apr 2026", event: "Feed Production License issued", detail: "License No. 苏饲预（2026）12006 issued by Jiangsu provincial authority, covering pet additive premixed feed. Valid through April 25, 2031." },
                  { year: "Jun 2026", event: "GMP & SQF dual certification", detail: "Three-day on-site audit by Eurofins Food Assurance Certification US, LLC. Eurofins GMP recognition (score: 86%), SQF Food Safety Code Edition 9 (score: 88, rated Good), and SQF Quality Code Edition 9 all awarded simultaneously." },
                  { year: "Jul 2026", event: "SQF certifications formally issued", detail: "Certificate SIN 105690 formally issued by SQFI on July 20, 2026. Valid through August 28, 2027. FDA Food Facility Registration No. 10222600768 active and current." },
                  { year: "2026–", event: "Guangzhou facility under construction", detail: "Second production facility under construction in Guangzhou to support growing international OEM demand. Shenzhen operations center already operational for cross-border trade management." },
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
              Three Commitments to Our 2026 International Partners
            </h2>
            <p className="mt-4 text-[0.93rem] leading-7 text-white/65">
              Three operational commitments to brands partnering with us in 2026 — built into how we price and allocate production capacity.
            </p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
                          {[
              {
                number: "01",
                title: "Quality at a Competitive Price",
                desc: "GMP and SQF-certified manufacturing priced to reflect our operational efficiency — not our certification costs. Same quality standards as larger CMOs, accessible to emerging brands.",
              },
              {
                number: "02",
                title: "Priority Fulfillment for Early Partners",
                desc: "Brands committing in 2026 receive priority production scheduling — ensuring your order is not displaced during peak demand periods.",
              },
              {
                number: "03",
                title: "500 MOQ — Lowest in China",
                desc: "500 bottles minimum for soft chews (industry avg: 3,000). A permanent feature enabled by our high-speed line — not a promotional concession.",
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

      {/* ─── PARTNER BRANDS MARQUEE ─── */}
      <section className="border-y border-line bg-[#f8f7f2] py-10 overflow-hidden">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10 mb-6 text-center">
          <p className="text-[0.7rem] font-bold uppercase tracking-[0.18em] text-forest-mid">Trusted by leading brands</p>
          <h2 className="mt-2 text-[clamp(1.2rem,2vw,1.6rem)] font-semibold tracking-[-0.02em] text-ink">
            OEM Partners &amp; Brand Clients
          </h2>
        </div>
        <div className="relative w-full overflow-hidden">
          <style dangerouslySetInnerHTML={{ __html: `
            @keyframes marquee {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .brand-marquee {
              display: flex;
              width: max-content;
              animation: marquee 28s linear infinite;
            }
            .brand-marquee:hover {
              animation-play-state: paused;
            }
          ` }} />
          <div className="brand-marquee">
            {[
              { src: "/images/brands/nourse-logo.png", alt: "卫仕 NOURSE" },
              { src: "/images/brands/touchit-logo.png", alt: "Touch't 它时代" },
              { src: "/images/brands/bernate-logo.png", alt: "伯纳天纯" },
              { src: "/images/brands/keres-logo.png", alt: "凯锐思 KERES" },
              { src: "/images/brands/kuanfu-logo.png", alt: "宽福" },
              { src: "/images/brands/atspet-logo.png", alt: "ATSPET 强生宠儿" },
              { src: "/images/brands/chongxi-logo.png", alt: "Chongxi 宠熙" },
              { src: "/images/brands/nourse-logo.png", alt: "卫仕 NOURSE" },
              { src: "/images/brands/touchit-logo.png", alt: "Touch't 它时代" },
              { src: "/images/brands/bernate-logo.png", alt: "伯纳天纯" },
              { src: "/images/brands/keres-logo.png", alt: "凯锐思 KERES" },
              { src: "/images/brands/kuanfu-logo.png", alt: "宽福" },
              { src: "/images/brands/atspet-logo.png", alt: "ATSPET 强生宠儿" },
              { src: "/images/brands/chongxi-logo.png", alt: "Chongxi 宠熙" },
            ].map(({ src, alt }, i) => (
              <div key={i} className="flex shrink-0 items-center justify-center mx-10 h-28 w-52">
                <Image
                  src={src}
                  alt={alt}
                  width={200}
                  height={100}
                  className="h-20 w-auto max-w-[190px] object-contain transition-transform duration-300 hover:scale-105"
                  sizes="190px"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FACTORY: PACKAGING ─── */}
      <section className="border-b border-line bg-[#e9eeea]">
        <div className="mx-auto grid max-w-[1480px] lg:grid-cols-[1.2fr_0.8fr]">
          <div className="relative min-h-[560px] border-r border-line">
            <Image src="/images/b2b/factory-packaging-line.png" alt="Automated pet supplement packaging line" fill className="object-cover" sizes="(min-width: 1024px) 60vw, 100vw" />
          </div>
          <div className="px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
            <p className="b2b-kicker text-forest-mid">{tf.packaging.kicker}</p>
            <h2 className="mt-4 text-4xl font-medium tracking-[-0.04em] text-ink">{tf.packaging.title}</h2>
            <p className="mt-5 text-sm leading-7 text-ink-soft">{tf.packaging.body}</p>
            <div className="mt-9 border-t border-line">
              {[
                [tf.packaging.primaryPacks, tf.packaging.primaryPacksValue],
                [tf.packaging.identification, tf.packaging.identificationValue],
                [tf.packaging.privateLabel, tf.packaging.privateLabelValue],
                [tf.packaging.releaseHandoff, tf.packaging.releaseHandoffValue],
              ].map(([label, value]: [string, string]) => (
                <div key={label} className="grid grid-cols-[0.34fr_0.66fr] gap-4 border-b border-line py-4">
                  <p className="text-sm font-semibold text-ink">{label}</p>
                  <p className="text-sm leading-6 text-ink-soft">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── FACTORY: WAREHOUSE ─── */}
      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-10">
        <div className="grid gap-0 border border-line lg:grid-cols-[0.78fr_1.22fr]">
          <div className="bg-white p-8 sm:p-10 lg:p-12">
            <Warehouse className="size-7 text-forest-mid" strokeWidth={1.5} aria-hidden />
            <p className="b2b-kicker mt-10 text-forest-mid">{tf.warehouse.kicker}</p>
            <h2 className="mt-4 text-3xl font-medium tracking-[-0.035em] text-ink">{tf.warehouse.title}</h2>
            <p className="mt-5 text-sm leading-7 text-ink-soft">{tf.warehouse.body}</p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="border-l-2 border-forest pl-4">
                <p className="text-2xl font-semibold text-forest">{tf.warehouse.stat1Value}</p>
                <p className="mt-1 text-xs leading-5 text-ink-soft">{tf.warehouse.stat1Label}</p>
              </div>
              <div className="border-l-2 border-forest pl-4">
                <p className="text-2xl font-semibold text-forest">{tf.warehouse.stat2Value}</p>
                <p className="mt-1 text-xs leading-5 text-ink-soft">{tf.warehouse.stat2Label}</p>
              </div>
            </div>
          </div>
          <div className="relative min-h-[500px] border-l border-line">
            <Image src="/images/b2b/factory-export-warehouse.png" alt="Finished-goods warehouse for export" fill className="object-cover" sizes="(min-width: 1024px) 60vw, 100vw" />
          </div>
        </div>
      </section>

      {/* ─── FACTORY: LOCATION ─── */}
      <section className="border-y border-line bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[0.3fr_0.7fr] lg:px-10">
          <div className="flex items-start gap-4">
            <MapPin className="mt-1 size-6 shrink-0 text-forest-mid" aria-hidden />
            <div>
              <p className="b2b-kicker text-forest-mid">{tf.location.kicker}</p>
              <h2 className="mt-3 text-2xl font-semibold text-ink">{tf.location.title}</h2>
            </div>
          </div>
          <address className="not-italic">
            <p className="text-lg leading-8 text-ink">{tf.location.address}</p>
            <p className="mt-4 text-sm leading-6 text-ink-soft">{tf.location.addressZh}</p>
          </address>
        </div>
      </section>

      {/* ─── FACTORY: SERVICES ─── */}
      <section className="border-b border-line bg-[#f5f3ec]">
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <p className="b2b-kicker text-forest-mid">{tf.services.kicker}</p>
              <h2 className="b2b-heading mt-4">{tf.services.title}</h2>
              <p className="mt-5 text-sm leading-7 text-ink-soft">{tf.services.subtitle}</p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="border border-line bg-white p-6">
                <h3 className="text-base font-semibold text-ink">{tf.services.formulaCustomization}</h3>
                <ul className="mt-4 space-y-2 text-sm leading-6 text-ink-soft">
                  <li>• Customer formula production</li>
                  <li>• Factory formula development</li>
                  <li>• Formula adjustment services</li>
                  <li>• Sample development &amp; testing</li>
                </ul>
              </div>
              <div className="border border-line bg-white p-6">
                <h3 className="text-base font-semibold text-ink">{tf.services.productionServices}</h3>
                <ul className="mt-4 space-y-2 text-sm leading-6 text-ink-soft">
                  <li>• Private label manufacturing</li>
                  <li>• Small batch trial production</li>
                  <li>• Bulk production &amp; filling</li>
                  <li>• Packaging coordination</li>
                </ul>
              </div>
              <div className="border border-line bg-white p-6">
                <h3 className="text-base font-semibold text-ink">{tf.services.productSpecifications}</h3>
                <ul className="mt-4 space-y-2 text-sm leading-6 text-ink-soft">
                  <li>• Dosage form customization</li>
                  <li>• Flavor development</li>
                  <li>• Size &amp; count options</li>
                  <li>• Packaging configuration</li>
                </ul>
              </div>
              <div className="border border-line bg-white p-6">
                <h3 className="text-base font-semibold text-ink">{tf.services.qualityDocumentation}</h3>
                <ul className="mt-4 space-y-2 text-sm leading-6 text-ink-soft">
                  <li>• Batch record keeping</li>
                  <li>• Product testing &amp; COA</li>
                  <li>• Stability assessment</li>
                  <li>• Finished product release</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FACTORY: FAQ ─── */}
      <section className="border-b border-line bg-white">
        <JsonLd data={faqJsonLd(factoryFaqs)} />
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-[0.36fr_0.64fr]">
            <div>
              <p className="b2b-kicker text-forest-mid">{tf.faq.kicker}</p>
              <h2 className="b2b-heading mt-4">{tf.faq.title}</h2>
              <p className="mt-5 text-sm leading-7 text-ink-soft">{tf.faq.subtitle}</p>
            </div>
            <dl className="border-t border-line">
              {factoryFaqs.map((item) => (
                <div key={item.q} className="border-b border-line py-6">
                  <dt className="text-lg font-semibold text-ink">{item.q}</dt>
                  <dd className="mt-3 text-sm leading-7 text-ink-soft">{item.a}</dd>
                </div>
              ))}
            </dl>
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
                Send the product, target market, requested evidence and expected order volume. We will respond within 24 hours with a complete document checklist and timeline. Available documents: CoA · GMP Report · SQF Certificate · FDA Registration · HACCP Summary · Allergen Statement.
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
