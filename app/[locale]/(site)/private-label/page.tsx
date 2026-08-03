import type { Metadata } from "next";
import Image from "next/image";
import {
  Factory,
  FlaskConical,
  Layers,
  Mail,
  MessageSquare,
  PackageCheck,
  Phone,
  TestTube,
} from "lucide-react";
import {
  metaWithLocale,
  breadcrumbJsonLd,
  faqJsonLd,
  serviceJsonLd,
  webPageJsonLd,
} from "@/lib/seo";
import { getSettings } from "@/lib/settings";
import InquiryForm from "@/components/site/InquiryForm";
import JsonLd from "@/components/site/JsonLd";
import ServiceOrbit from "@/components/b2b/ServiceOrbit";
import { isLocale } from "@/lib/i18n/locales";
import { getDict } from "@/lib/i18n";

const oemFaqs = [
  {
    q: "What is the difference between private label, OEM and ODM pet supplements?",
    a: "Private label starts from an existing formula and applies your brand and agreed packaging. OEM manufactures to an approved customer specification. ODM adds formula and product-development support before manufacturing. The practical route is confirmed after the target market, format, claims and volume are reviewed.",
  },
  {
    q: "What information is needed to quote a pet supplement project?",
    a: "Provide the destination market, species, target benefit, dosage form, expected order volume, packaging direction, launch timing and any required tests or documents. These inputs determine the sampling route, MOQ basis and formal quotation.",
  },
  {
    q: "Can a brand review samples before production?",
    a: "Yes. The process includes formula and sample review before small-batch or commercial production. The approved specification and packaging configuration become the basis for production and quality release.",
  },
  {
    q: "Which pet supplement formats are available for OEM/ODM?",
    a: "The licensed manufacturing scope covers solid, semi-solid and liquid pet additive premixed feed. Project formats include soft chews, tablets, pastes, drops and oils, powders and granules.",
  },
];

export function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  return metaWithLocale(params, {
    title: "Private Label Pet Supplements & OEM/ODM Manufacturing",
    description:
      "Build private-label and OEM/ODM pet supplements with stock-formula or custom-development routes, sampling, packaging configuration, controlled production and export coordination.",
    path: "/private-label",
    keywords: [
      "private label pet supplements",
      "pet supplement OEM",
      "pet supplement ODM",
      "custom pet supplement manufacturer",
      "pet supplement contract manufacturing",
    ],
    images: ["/images/b2b/oem-collaboration-v2.png"],
    imageAlt: "Private-label pet supplement development and packaging collaboration",
  });
}

export default async function PrivateLabelPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale = isLocale(rawLocale) ? rawLocale : "en";
  const dict = getDict(locale);
  const t = dict.b2bPages.privateLabel;
  const settings = await getSettings();

  const dosageForms = [
    { name: t.dosageForms.items[0], src: "/images/b2b/dosage-forms/01-soft-chews.png" },
    { name: t.dosageForms.items[1], src: "/images/b2b/dosage-forms/03-tablets.png" },
    { name: t.dosageForms.items[2], src: "/images/b2b/dosage-forms/05-pastes-and-gels.png" },
    { name: t.dosageForms.items[3], src: "/images/b2b/dosage-forms/04-drops-and-oils.png" },
    { name: t.dosageForms.items[4], src: "/images/b2b/dosage-forms/02-powders.png" },
    { name: t.dosageForms.items[5], src: "/images/b2b/portfolio-lineup-v2.png" },
  ];

  return (
    <>
      <JsonLd
        data={serviceJsonLd({
          name: "Private label and OEM/ODM pet supplement manufacturing",
          description:
            "Stock-formula and custom-development pet supplement manufacturing with sampling, packaging, production, quality review and export coordination.",
          path: "/private-label",
          serviceTypes: [
            "Private label pet supplements",
            "Pet supplement OEM manufacturing",
            "Pet supplement ODM development",
            "Custom pet supplement manufacturing",
          ],
        })}
      />
      <JsonLd
        data={webPageJsonLd({
          path: "/private-label",
          name: "Private label pet supplements and OEM/ODM manufacturing",
          description:
            "Commercial routes, process, dosage forms and inquiry requirements for private-label and custom pet supplement projects.",
          primaryImage: "/images/b2b/oem-collaboration-v2.png",
        })}
      />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Private Label & OEM/ODM", path: "/private-label" },
        ])}
      />

      <section className="border-b border-line bg-[#f5f3ec]">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 text-forest-mid">
              <Layers className="size-5" strokeWidth={1.6} aria-hidden />
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

      {/* 2 — Three services */}
      <section className="border-b border-line bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="text-center">
            <p className="b2b-kicker text-forest-mid">{t.services.kicker}</p>
            <h2 className="mt-4 text-[clamp(2rem,4vw,3rem)] font-semibold leading-[1.1] tracking-[-0.025em] text-ink">
              {t.services.title}
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-[0.95rem] leading-7 text-ink-soft">
              {t.services.subtitle}
            </p>
          </div>

          <div className="mt-16">
            <ServiceOrbit
              items={[
                { icon: "Factory", title: t.services.oemTitle, body: t.services.oemBody },
                { icon: "FlaskConical", title: t.services.odmTitle, body: t.services.odmBody },
                { icon: "Tag", title: t.services.plTitle, body: t.services.plBody },
              ]}
            />
          </div>
        </div>
      </section>

      {/* 3 — Five-step cooperation process */}
      <section className="border-b border-line bg-[#f8f7f2] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="text-center">
            <p className="b2b-kicker text-forest-mid">{t.process.kicker}</p>
            <h2 className="mt-4 text-[clamp(2rem,4vw,3rem)] font-semibold leading-[1.1] tracking-[-0.025em] text-ink">
              {t.process.title}
            </h2>
          </div>

          <ol className="relative mx-auto mt-16 max-w-5xl">
            <span
              className="absolute left-6 top-2 bottom-2 w-px bg-line lg:left-1/2 lg:-translate-x-1/2"
              aria-hidden
            />
            {t.process.steps.map((step, index) => {
              const icons = [MessageSquare, FlaskConical, TestTube, Factory, PackageCheck];
              const Icon = icons[index] || MessageSquare;
              const left = index % 2 === 0;
              return (
                <li
                  key={step.title}
                  className="relative pl-16 pb-10 last:pb-0 lg:grid lg:grid-cols-2 lg:gap-x-16 lg:pl-0"
                >
                  <span className="absolute left-6 top-1 z-10 flex size-12 -translate-x-1/2 items-center justify-center rounded-full bg-forest text-base font-bold text-white ring-4 ring-[#f8f7f2] lg:left-1/2">
                    {index + 1}
                  </span>
                  <div
                    className={`rounded-lg border border-line bg-white p-6 shadow-sm sm:p-7 ${
                      left ? "lg:col-start-1 lg:text-right" : "lg:col-start-2"
                    }`}
                  >
                    <div
                      className={`flex items-center gap-2.5 ${
                        left ? "lg:flex-row-reverse" : ""
                      }`}
                    >
                      <Icon className="size-5 shrink-0 text-forest-mid" strokeWidth={1.6} aria-hidden />
                      <h3 className="text-lg font-semibold text-ink">{step.title}</h3>
                    </div>
                    <p className="mt-3 text-[0.9rem] leading-7 text-ink-soft">{step.body}</p>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      {/* 4 — Product dosage forms */}
      <section className="border-b border-line bg-[#f8f7f2] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="text-center">
            <p className="b2b-kicker text-forest-mid">{t.dosageForms.kicker}</p>
            <h2 className="mt-4 text-[clamp(2rem,4vw,3rem)] font-semibold leading-[1.1] tracking-[-0.025em] text-ink">
              {t.dosageForms.title}
            </h2>
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

      <section className="border-b border-line bg-white">
        <JsonLd data={faqJsonLd(oemFaqs)} />
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[0.36fr_0.64fr] lg:px-10">
          <div>
            <p className="b2b-kicker text-forest-mid">Buyer FAQ</p>
            <h2 className="b2b-heading mt-4">Private Label Pet Supplement FAQ</h2>
            <p className="mt-5 text-sm leading-7 text-ink-soft">
              Direct answers for brand owners comparing private-label, OEM and ODM manufacturing routes.
            </p>
          </div>
          <dl className="border-t border-line">
            {oemFaqs.map((item) => (
              <div key={item.q} className="border-b border-line py-6">
                <dt className="text-lg font-semibold text-ink">{item.q}</dt>
                <dd className="mt-3 text-sm leading-7 text-ink-soft">{item.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section id="inquiry" className="scroll-mt-24 border-t border-line bg-[#e9eeea]">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-24 sm:px-8 lg:grid-cols-[0.7fr_1.3fr] lg:px-10">
          <div>
            <p className="b2b-kicker text-forest-mid">{t.inquiry.kicker}</p>
            <h2 className="b2b-heading mt-4">{t.inquiry.title}</h2>
            <p className="mt-5 text-sm leading-7 text-ink-soft">
              {t.inquiry.subtitle}
            </p>
            <div className="mt-8 border-t border-line">
              <a
                href={`mailto:${settings.b2bEmail}`}
                className="flex min-h-14 items-center gap-3 border-b border-line py-3 text-sm font-semibold text-forest"
              >
                <Mail className="size-4" aria-hidden />
                {settings.b2bEmail}
              </a>
              <a
                href={`tel:${settings.phone}`}
                className="flex min-h-14 items-center gap-3 border-b border-line py-3 text-sm font-semibold text-forest"
              >
                <Phone className="size-4" aria-hidden />
                {settings.phone}
              </a>
            </div>
          </div>
          <div className="border border-line bg-white p-6 sm:p-9">
            <InquiryForm defaultType="private_label" />
          </div>
        </div>
      </section>
    </>
  );
}
