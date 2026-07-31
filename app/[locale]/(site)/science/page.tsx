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
            <div className="flex items-center gap-3 text-forest-mid">
              <Factory className="size-4" strokeWidth={1.6} aria-hidden />
              <p className="b2b-kicker">Facility overview</p>
            </div>
            <h2 className="mt-4 text-[clamp(1.5rem,2.6vw,2.2rem)] font-semibold leading-[1.15] tracking-[-0.025em] text-ink">
              A Purpose-Built GMP Factory in Jiangsu, China
            </h2>
            <p className="mt-4 text-[0.93rem] leading-7 text-ink-soft">
              Taizhou Beno Biotech Co., Ltd. was established in August 2016 in Taixing City, Jiangsu Province — one of China&apos;s most developed pharmaceutical and nutraceutical manufacturing corridors. Our 3,000 m² facility was designed from the ground up for pet supplement production, with 2,000 m² dedicated to GMP-compliant manufacturing and warehousing.
            </p>
            <p className="mt-3 text-[0.93rem] leading-7 text-ink-soft">
              The factory operates three independent production lines under a single-shift schedule of 30 trained production staff, six days per week. Physical separation between raw material receipt, ingredient preparation, mixing, forming, filling, packaging, and finished goods storage ensures cross-contamination risks are controlled at the facility design level.
            </p>
            <p className="mt-3 text-[0.93rem] leading-7 text-ink-soft">
              A second facility is currently under construction in Guangzhou to support growing international OEM demand, with an operations center already established in Shenzhen for cross-border trade logistics.
            </p>
            {/* Spec table */}
            <div className="mt-8 border border-line bg-white">
              {[
                { label: "Production lines", value: "3 independent lines" },
                { label: "Production staff", value: "30 personnel (single shift)" },
                { label: "Total facility area", value: "3,000 m²" },
                { label: "GMP production area", value: "2,000 m²" },
                { label: "Operating schedule", value: "6 days / week" },
                { label: "Second facility", value: "Guangzhou (under construction)" },
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
        {/* Header bar — dark */}
        <div className="border-b border-line bg-forest-deep px-5 py-10 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-7xl flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="flex items-center gap-3 text-amber-soft">
                <Award className="size-4" strokeWidth={1.6} aria-hidden />
                <p className="b2b-kicker text-amber-soft">Compliance &amp; certification records</p>
              </div>
              <h2 className="mt-3 text-[clamp(1.4rem,2.4vw,2rem)] font-semibold leading-[1.15] tracking-[-0.025em] text-white">
                7 Independent Third-Party Certifications
              </h2>
              <p className="mt-2 max-w-2xl text-[0.88rem] leading-6 text-white/65">
                All primary certifications issued by Eurofins Food Assurance Certification US, LLC following on-site audits in June 2026. Each record is independently verifiable through the issuing body&apos;s registry. Original PDFs available on request for procurement and regulatory teams.
              </p>
            </div>
            <Link
              href="/private-label#inquiry"
              className="inline-flex shrink-0 cursor-pointer items-center gap-2 border border-white/25 bg-white/10 px-5 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-white/20"
            >
              <Download className="size-3.5" aria-hidden />
              Request document package
            </Link>
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
            ].map(({ short, name, id, valid, score, image }) => (
              <div key={name} className="group flex flex-col overflow-hidden border border-line bg-white transition-shadow hover:shadow-md">
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#f8f7f2]">
                  <Image
                    src={image}
                    alt={`${name} certificate`}
                    fill
                    className="object-contain p-4 transition-transform duration-500 group-hover:scale-[1.03]"
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
                  />
                </div>
                <div className="border-t border-line p-4">
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center bg-forest px-2 py-0.5 text-[0.6rem] font-bold tracking-[0.1em] text-white">
                      {short}
                    </span>
                    <span className="flex size-1.5 rounded-full bg-forest-mid" title="Current" />
                  </div>
                  <p className="mt-2 text-[0.82rem] font-semibold text-ink">{name}</p>
                  <p className="mt-1 font-mono text-[0.68rem] text-ink-soft">{id}</p>
                  <div className="mt-2 flex items-center justify-between border-t border-line pt-2">
                    <span className="text-[0.68rem] text-forest-mid">{valid}</span>
                    <span className="text-[0.68rem] text-ink-soft">{score}</span>
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
              China&apos;s Fastest Soft Chew Production Line
            </h2>
            <p className="mt-4 text-[0.93rem] leading-7 text-ink-soft">
              Soft chews are the fastest-growing format in the global pet supplement market. Our high-speed extrusion line processes one tonne of soft chew mass per hour — unmatched by any comparable facility in China — enabling over 180 million units per month at consistent quality. Batch-to-batch consistency is maintained through precise temperature control, with in-process hardness and moisture checks at defined intervals.
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
                Beyond soft chews, our facility produces the full range of pet supplement formats under the same GMP and SQF-certified quality system — eliminating the complexity of managing multiple contract manufacturers. Each dosage form has dedicated equipment and validated processes with documented SOPs.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
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
              Every batch passes four mandatory checkpoints before shipment. Each checkpoint generates physical records retained for a minimum of three years, available for buyer review. The system was independently verified during the June 2026 Eurofins GMP and SQF audits (HACCP plan: BN-HACCP01, Rev A/0).
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
        <div className="mx-auto grid max-w-7xl lg:grid-cols-[1.2fr_0.8fr]">
          <div className="px-5 py-14 sm:px-8 lg:px-12 lg:py-20">
            <div className="flex items-center gap-3 text-forest-mid">
              <Microscope className="size-4" strokeWidth={1.6} aria-hidden />
              <p className="b2b-kicker">R&amp;D &amp; formulation library</p>
            </div>
            <h2 className="mt-4 text-[clamp(1.5rem,2.6vw,2.2rem)] font-semibold leading-[1.15] tracking-[-0.025em] text-ink">
              Academic Research Expertise, Applied to Commercial Formulation
            </h2>
            <p className="mt-4 text-[0.93rem] leading-7 text-ink-soft">
              Our technical advisory team is led by Professor Wang Kai — researcher at the Chinese Academy of Agricultural Sciences, doctoral supervisor, National Outstanding Youth Fund recipient, and Beijing Science and Technology Rising Star. This partnership gives us direct access to the latest peer-reviewed animal nutrition research, allowing us to formulate products grounded in evidence rather than marketing trends.
            </p>
            <p className="mt-3 text-[0.93rem] leading-7 text-ink-soft">
              Custom formulation development is available for brands that require proprietary recipes. Our team will develop, prototype, and validate a formula that meets your target market&apos;s regulatory requirements and brand efficacy claims.
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
          <div className="flex items-center justify-center bg-[#f8f7f2] px-5 py-12 sm:px-8 lg:px-10 lg:py-20">
            <div className="relative w-full max-w-xs overflow-hidden rounded-lg shadow-md" style={{ aspectRatio: "3/4" }}>
              <Image
                src="/images/science/ai-lab-rd.jpg"
                alt="Research and development laboratory for pet supplement formulation"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 28vw, 80vw"
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
              Certifications reflect the quality of the people who design, implement, and maintain the systems behind them. Our leadership team combines deep manufacturing experience, academic research expertise, and international trade knowledge.
            </p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {[
              {
                name: "Li Wang",
                title: "General Manager",
                desc: "Over ten years of focused experience in pet nutrition manufacturing. Previously managed OEM production for Wanpy, Bernate, and Kairisi — three of China's most recognized pet supplement brands. Li Wang leads the factory's quality culture and is the primary contact for vendor qualification audits.",
              },
              {
                name: "Prof. Wang Kai",
                title: "Technical Advisor",
                desc: "Researcher at the Chinese Academy of Agricultural Sciences, doctoral supervisor, National Outstanding Youth Fund recipient, and Beijing Science and Technology Rising Star. Provides scientific oversight of formulation development and ensures products are aligned with current evidence in animal nutrition research.",
              },
              {
                name: "Jing Hang",
                title: "Operations Director",
                desc: "Former City General Manager at Alibaba International, with 12 years of B2B enterprise service experience. Leads the Shenzhen operations center, managing cross-border logistics, customer onboarding, and international partner relationships.",
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
                From a small formulation team in 2016 to a GMP and SQF-certified manufacturer with international brand partners, every milestone reflects a deliberate investment in the infrastructure and systems that global buyers require.
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
              As we expand our international OEM business in 2026, we are making three specific commitments to brands that choose to work with us. These are operational policies built into how we allocate production capacity and price our services.
            </p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {[
              {
                number: "01",
                title: "Quality at a Competitive Price",
                desc: "We believe that GMP and SQF-certified manufacturing should not carry a premium that makes it inaccessible to emerging brands. Our commitment is to offer the same quality standards as larger contract manufacturers at a price point that reflects our operational efficiency — not our certification costs.",
              },
              {
                number: "02",
                title: "Priority Fulfillment for Early Partners",
                desc: "Production capacity is finite, and we allocate it deliberately. Brands that commit to a partnership in 2026 will receive priority scheduling for production slots, particularly during peak demand periods — ensuring your order is not delayed by later-arriving customers.",
              },
              {
                number: "03",
                title: "Low MOQ, No Compromise on Quality",
                desc: "Our MOQ of 500 bottles for soft chews is the lowest offered by any GMP-certified pet supplement manufacturer in China. The industry average is 3,000 bottles. This low MOQ is a permanent feature of our service — not a promotional concession — enabled by our high-speed production line.",
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
