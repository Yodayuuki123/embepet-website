import type { Metadata } from "next";
import Image from "next/image";
import {
  ArrowRight,
  Beaker,
  Boxes,
  ClipboardCheck,
  Factory,
  MapPin,
  PackageCheck,
  ScanLine,
  Warehouse,
} from "lucide-react";
import { absoluteUrl, metaWithLocale, faqJsonLd } from "@/lib/seo";
import Link from "@/components/site/A";
import JsonLd from "@/components/site/JsonLd";
import { isLocale } from "@/lib/i18n/locales";
import { getDict } from "@/lib/i18n";

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

export function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  return metaWithLocale(params, {
    title: "Pet Supplement Factory & Manufacturing Facility | EMBEPET",
    description:
      "Review Taizhou Beno Biotech's 30,000 m² pet supplement factory in Jiangsu, including production processes, 101–200 production staff, packaging, warehouse and company details.",
    path: "/factory",
  });
}

export default async function FactoryPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale = isLocale(rawLocale) ? rawLocale : "en";
  const dict = getDict(locale);
  const t = dict.b2bPages.factory;

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "AboutPage",
          name: "Taizhou Beno Biotech manufacturing facility and company profile",
          url: absoluteUrl("/en/factory"),
          mainEntity: { "@id": `${absoluteUrl("/")}#manufacturer` },
          description:
            "Company and manufacturing profile for Taizhou Beno Biotech Co., Ltd., a pet supplement production facility in Taixing City, Jiangsu, China.",
          primaryImageOfPage: {
            "@type": "ImageObject",
            url: absoluteUrl("/images/b2b/factory-extrusion-line.png"),
          },
        }}
      />

      <section className="border-b border-line bg-[#f5f3ec]">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 text-forest-mid">
              <Factory className="size-5" strokeWidth={1.6} aria-hidden />
              <p className="b2b-kicker">{t.hero.kicker}</p>
            </div>
            <h1 className="mt-5 text-[clamp(1.8rem,3.2vw,2.8rem)] font-semibold leading-[1.1] tracking-[-0.03em] text-ink">
              {t.hero.title}
            </h1>
            <p className="mt-5 max-w-2xl text-[1.02rem] leading-8 text-ink-soft">
              {t.hero.subtitle}
            </p>
          </div>
        </div>
      </section>

      <section id="company" className="scroll-mt-24 mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[0.4fr_0.6fr]">
          <div>
            <p className="b2b-kicker text-forest-mid">{t.company.kicker}</p>
            <h2 className="b2b-heading mt-4">{t.company.title}</h2>
            <p className="mt-5 text-sm leading-7 text-ink-soft">
              {t.company.body}
            </p>
            <div className="mt-8 border-l-2 border-amber pl-5">
              <dl className="space-y-3 text-sm leading-6 text-ink-soft">
                <div className="grid grid-cols-[140px_1fr] gap-4">
                  <dt className="font-semibold text-ink">{t.company.legalRep}</dt>
                  <dd>{t.company.legalRepValue}</dd>
                </div>
                <div className="grid grid-cols-[140px_1fr] gap-4">
                  <dt className="font-semibold text-ink">{t.company.creditCode}</dt>
                  <dd>91321283MA1MR5HB8P</dd>
                </div>
                <div className="grid grid-cols-[140px_1fr] gap-4">
                  <dt className="font-semibold text-ink">{t.company.duns}</dt>
                  <dd>404129816</dd>
                </div>
                <div className="grid grid-cols-[140px_1fr] gap-4">
                  <dt className="font-semibold text-ink">{t.company.businessTerm}</dt>
                  <dd>{t.company.businessTermValue}</dd>
                </div>
              </dl>
            </div>
          </div>

          <dl className="grid border-l border-t border-line sm:grid-cols-2 lg:grid-cols-4">
            {t.company.facts.map(([label, value]) => (
              <div key={label} className="min-h-36 border-b border-r border-line bg-white p-5">
                <dt className="text-[0.68rem] font-semibold uppercase tracking-[0.11em] text-ink-soft">
                  {label}
                </dt>
                <dd className="mt-6 text-xl font-semibold tracking-tight text-forest">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="border-y border-line bg-forest-deep text-white">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10">
          <div className="grid gap-8 lg:grid-cols-[0.36fr_0.64fr]">
            <div>
              <p className="b2b-kicker text-amber-soft">{t.capability.kicker}</p>
              <h2 className="mt-4 text-4xl font-medium tracking-[-0.04em]">
                {t.capability.title}
              </h2>
            </div>
            <div className="border-t border-white/20">
              {([
                [Beaker, t.capability.processing, t.capability.processingDesc],
                [PackageCheck, t.capability.packaging, t.capability.packagingDesc],
                [ScanLine, t.capability.productionZones, t.capability.productionZonesDesc],
                [Boxes, t.capability.supplyModes, t.capability.supplyModesDesc],
              ] as const).map(([Icon, title, body]) => (
                <article
                  key={title}
                  className="grid gap-4 border-b border-white/20 py-6 sm:grid-cols-[auto_0.28fr_0.72fr]"
                >
                  <Icon className="size-5 text-amber-soft" strokeWidth={1.5} aria-hidden />
                  <h3 className="text-sm font-semibold text-white">{title}</h3>
                  <p className="text-sm leading-6 text-white/62">{body}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-line bg-white">
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="b2b-kicker text-forest-mid">{t.production.kicker}</p>
              <h2 className="b2b-heading mt-4">{t.production.title}</h2>
            </div>
            <p className="max-w-xl text-sm leading-7 text-ink-soft">
              {t.production.subtitle}
            </p>
          </div>

          <ol className="mt-14 border-t border-line">
            {t.production.stages.map((item) => (
              <li
                key={item.stage}
                className="grid gap-5 border-b border-line py-6 md:grid-cols-[0.08fr_0.28fr_0.36fr_0.28fr] md:items-start"
              >
                <span className="text-xs font-semibold tracking-[0.14em] text-forest-mid">{item.stage}</span>
                <h3 className="text-lg font-semibold text-ink">{item.title}</h3>
                <div>
                  <p className="text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-ink-soft">{t.production.controlPoint}</p>
                  <p className="mt-2 text-sm leading-6 text-ink-soft">{item.control}</p>
                </div>
                <div>
                  <p className="text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-ink-soft">{t.production.operationalResult}</p>
                  <p className="mt-2 text-sm leading-6 text-ink-soft">{item.outcome}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-b border-line bg-[#e9eeea]">
        <div className="mx-auto grid max-w-[1480px] lg:grid-cols-[1.2fr_0.8fr]">
          <div className="relative min-h-[560px] border-r border-line">
            <Image
              src="/images/b2b/factory-packaging-line.png"
              alt="Illustrative automated pet supplement packaging and coding line"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 60vw, 100vw"
            />
          </div>
          <div className="px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
            <p className="b2b-kicker text-forest-mid">{t.packaging.kicker}</p>
            <h2 className="mt-4 text-4xl font-medium tracking-[-0.04em] text-ink">
              {t.packaging.title}
            </h2>
            <p className="mt-5 text-sm leading-7 text-ink-soft">
              {t.packaging.body}
            </p>
            <div className="mt-9 border-t border-line">
              {[
                [t.packaging.primaryPacks, t.packaging.primaryPacksValue],
                [t.packaging.identification, t.packaging.identificationValue],
                [t.packaging.privateLabel, t.packaging.privateLabelValue],
                [t.packaging.releaseHandoff, t.packaging.releaseHandoffValue],
              ].map(([label, value]) => (
                <div key={label} className="grid grid-cols-[0.34fr_0.66fr] gap-4 border-b border-line py-4">
                  <p className="text-sm font-semibold text-ink">{label}</p>
                  <p className="text-sm leading-6 text-ink-soft">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-10">
        <div className="grid gap-0 border border-line lg:grid-cols-[0.78fr_1.22fr]">
          <div className="bg-white p-8 sm:p-10 lg:p-12">
            <Warehouse className="size-7 text-forest-mid" strokeWidth={1.5} aria-hidden />
            <p className="b2b-kicker mt-10 text-forest-mid">{t.warehouse.kicker}</p>
            <h2 className="mt-4 text-3xl font-medium tracking-[-0.035em] text-ink">
              {t.warehouse.title}
            </h2>
            <p className="mt-5 text-sm leading-7 text-ink-soft">
              {t.warehouse.body}
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="border-l-2 border-forest pl-4">
                <p className="text-2xl font-semibold text-forest">{t.warehouse.stat1Value}</p>
                <p className="mt-1 text-xs leading-5 text-ink-soft">{t.warehouse.stat1Label}</p>
              </div>
              <div className="border-l-2 border-forest pl-4">
                <p className="text-2xl font-semibold text-forest">{t.warehouse.stat2Value}</p>
                <p className="mt-1 text-xs leading-5 text-ink-soft">{t.warehouse.stat2Label}</p>
              </div>
            </div>
          </div>
          <div className="relative min-h-[500px] border-l border-line">
            <Image
              src="/images/b2b/factory-export-warehouse.png"
              alt="Illustrative finished-goods warehouse prepared for export shipment"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 60vw, 100vw"
            />
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[0.3fr_0.7fr] lg:px-10">
          <div className="flex items-start gap-4">
            <MapPin className="mt-1 size-6 shrink-0 text-forest-mid" aria-hidden />
            <div>
              <p className="b2b-kicker text-forest-mid">{t.location.kicker}</p>
              <h2 className="mt-3 text-2xl font-semibold text-ink">{t.location.title}</h2>
            </div>
          </div>
          <address className="not-italic">
            <p className="text-lg leading-8 text-ink">
              {t.location.address}
            </p>
            <p className="mt-4 text-sm leading-6 text-ink-soft">
              {t.location.addressZh}
            </p>
          </address>
        </div>
      </section>

      <section className="border-b border-line bg-white">
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-[0.38fr_0.62fr]">
            <div>
              <p className="b2b-kicker text-forest-mid">{t.scope.kicker}</p>
              <h2 className="b2b-heading mt-4">{t.scope.title}</h2>
              <p className="mt-5 text-sm leading-7 text-ink-soft">
                {t.scope.subtitle}
              </p>
            </div>
            <div className="space-y-8">
              <div className="border-l-2 border-forest pl-6">
                <h3 className="text-sm font-semibold uppercase tracking-[0.1em] text-forest-mid">{t.scope.licensedCategories}</h3>
                <dl className="mt-4 grid gap-3 text-sm">
                  <div className="grid grid-cols-[180px_1fr] gap-4 border-b border-line pb-3">
                    <dt className="font-semibold text-ink">{t.scope.solidPremix}</dt>
                    <dd className="text-ink-soft">{t.scope.solidPremixValue}</dd>
                  </div>
                  <div className="grid grid-cols-[180px_1fr] gap-4 border-b border-line pb-3">
                    <dt className="font-semibold text-ink">{t.scope.semiSolidPremix}</dt>
                    <dd className="text-ink-soft">{t.scope.semiSolidPremixValue}</dd>
                  </div>
                  <div className="grid grid-cols-[180px_1fr] gap-4 pb-3">
                    <dt className="font-semibold text-ink">{t.scope.liquidPremix}</dt>
                    <dd className="text-ink-soft">{t.scope.liquidPremixValue}</dd>
                  </div>
                </dl>
              </div>
              <div className="border-l-2 border-amber pl-6">
                <h3 className="text-sm font-semibold uppercase tracking-[0.1em] text-forest-mid">{t.scope.productApplications}</h3>
                <div className="mt-4 grid gap-2 text-sm text-ink-soft sm:grid-cols-2">
                  {t.scope.applications.map((app) => (
                    <div key={app}>• {app}</div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-line bg-[#f5f3ec]">
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <p className="b2b-kicker text-forest-mid">{t.services.kicker}</p>
              <h2 className="b2b-heading mt-4">{t.services.title}</h2>
              <p className="mt-5 text-sm leading-7 text-ink-soft">
                {t.services.subtitle}
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="border border-line bg-white p-6">
                <h3 className="text-base font-semibold text-ink">{t.services.formulaCustomization}</h3>
                <ul className="mt-4 space-y-2 text-sm leading-6 text-ink-soft">
                  <li>• Customer formula production</li>
                  <li>• Factory formula development</li>
                  <li>• Formula adjustment services</li>
                  <li>• Sample development &amp; testing</li>
                </ul>
              </div>
              <div className="border border-line bg-white p-6">
                <h3 className="text-base font-semibold text-ink">{t.services.productionServices}</h3>
                <ul className="mt-4 space-y-2 text-sm leading-6 text-ink-soft">
                  <li>• Private label manufacturing</li>
                  <li>• Small batch trial production</li>
                  <li>• Bulk production &amp; filling</li>
                  <li>• Packaging coordination</li>
                </ul>
              </div>
              <div className="border border-line bg-white p-6">
                <h3 className="text-base font-semibold text-ink">{t.services.productSpecifications}</h3>
                <ul className="mt-4 space-y-2 text-sm leading-6 text-ink-soft">
                  <li>• Dosage form customization</li>
                  <li>• Flavor development</li>
                  <li>• Size &amp; count options</li>
                  <li>• Packaging configuration</li>
                </ul>
              </div>
              <div className="border border-line bg-white p-6">
                <h3 className="text-base font-semibold text-ink">{t.services.qualityDocumentation}</h3>
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

      <section className="border-b border-line bg-white">
        <JsonLd data={faqJsonLd(factoryFaqs)} />
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-[0.36fr_0.64fr]">
            <div>
              <p className="b2b-kicker text-forest-mid">{t.faq.kicker}</p>
              <h2 className="b2b-heading mt-4">{t.faq.title}</h2>
              <p className="mt-5 text-sm leading-7 text-ink-soft">
                {t.faq.subtitle}
              </p>
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

      <section className="bg-[#e9eeea]">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 py-16 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-10">
          <div className="flex items-start gap-4">
            <ClipboardCheck className="mt-1 size-6 shrink-0 text-forest-mid" aria-hidden />
            <div>
              <h2 className="text-2xl font-semibold tracking-[-0.025em] text-ink">
                {t.cta.title}
              </h2>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-ink-soft">
                {t.cta.subtitle}
              </p>
            </div>
          </div>
          <Link href="/private-label#inquiry" className="b2b-btn-primary shrink-0">
            {t.cta.button}
            <ArrowRight className="size-4" aria-hidden />
          </Link>
        </div>
      </section>
    </>
  );
}
