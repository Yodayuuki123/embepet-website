import type { Metadata } from "next";
import Image from "next/image";
import {
  ArrowRight,
  Check,
  ClipboardCheck,
} from "lucide-react";
import Link from "@/components/site/A";
import JsonLd from "@/components/site/JsonLd";
import FeaturedProductsCarousel from "@/components/b2b/FeaturedProductsCarousel";
import B2BTestimonialsWall from "@/components/home/B2BTestimonialsWall";
import VideoPlayer from "@/components/b2b/VideoPlayer";
import { buildMetadata, absoluteUrl, organizationJsonLd, websiteJsonLd } from "@/lib/seo";
import { isLocale } from "@/lib/i18n/locales";
import { getDict } from "@/lib/i18n";
import { getSettings } from "@/lib/settings";
import {
  SectionHeading,
  container,
  section,
  kicker,
  h2,
  body,
  btn,
  cardHover,
  imgZoom,
  imgZoomBox,
} from "@/components/b2b/kit";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale = isLocale(rawLocale) ? rawLocale : "en";
  return buildMetadata({
    title: "Pet Supplement Manufacturer: OEM, ODM & Private Label | EMBEPET",
    description:
      "GMP & SQF certified pet supplement manufacturer in China. Wholesale, private label and custom OEM/ODM for global brands. Soft chews, tablets, powders, liquids. MOQ 500 bottles. Taizhou Beno Biotech.",
    path: "/",
    locale,
  });
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale = isLocale(rawLocale) ? rawLocale : "en";
  const dict = getDict(locale);
  const t = dict.b2bPages.home;
  const isZh = locale === "zh";
  const settings = await getSettings();

  return (
    <>
      <JsonLd data={organizationJsonLd({
        brandName: settings.brandName,
        companyLegalName: "Embepet Biotech (Shenzhen) Co., Ltd.",
        supportEmail: settings.supportEmail,
        b2bEmail: settings.b2bEmail,
        phone: settings.phone,
        instagram: settings.instagram,
        facebook: settings.facebook,
        tiktok: settings.tiktok,
        youtube: settings.youtube,
      })} />
      <JsonLd data={websiteJsonLd(settings.brandName)} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "EMBEPET — Pet Supplement Manufacturing",
          url: absoluteUrl(`/${locale}`),
          description:
            "B2B pet supplement manufacturing: wholesale, private label and OEM/ODM. GMP & SQF certified by Taizhou Beno Biotech.",
          breadcrumb: {
            "@type": "BreadcrumbList",
            itemListElement: [{
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: absoluteUrl(`/${locale}`),
            }],
          },
          mainEntity: {
            "@type": "Service",
            serviceType: "Pet supplement manufacturing",
            provider: { "@id": `${absoluteUrl("/")}#manufacturer` },
            areaServed: {
              "@type": "Place",
              name: "Worldwide",
            },
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Pet supplement manufacturing services",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Private Label Pet Supplements",
                    description: "Stock-formula private label manufacturing with your brand",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "OEM Manufacturing",
                    description: "Manufacture according to your provided formula and specifications",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "ODM Development",
                    description: "Custom formula development and complete product design",
                  },
                },
              ],
            },
          },
        }}
      />

      {/* ═══════════════════════════════════════════════
          1  HERO
          ═══════════════════════════════════════════════ */}
      <section className="relative flex min-h-[640px] items-center overflow-hidden bg-forest-deep sm:min-h-[720px]">
        <div className="absolute inset-0">
          <Image
            src="/images/b2b/beno-factory-exterior.png"
            alt=""
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-950/40 to-transparent" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-5 py-28 sm:px-8 lg:px-10">
          <div className="max-w-2xl">
            <p className={`${kicker} text-amber-soft drop-shadow-lg`}>{t.hero.kicker}</p>
            <h1 className="mt-6 text-[clamp(2.5rem,5.6vw,5rem)] font-semibold leading-[1.03] tracking-[-0.035em] text-white drop-shadow-2xl">
              {t.hero.title}
            </h1>
            <p className="mt-7 max-w-xl text-[1.05rem] leading-8 text-white drop-shadow-lg">
              {t.hero.subtitle}
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/private-label#inquiry" className={btn.light}>
                {t.hero.ctaQuote}
                <ArrowRight className="size-4" />
              </Link>
              <Link href="/shop#catalog" className={btn.darkOutline}>
                {t.hero.ctaCatalog}
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom trust bar */}
        <div className="absolute inset-x-0 bottom-0 z-10 border-t border-white/[0.08] bg-forest-deep/80 backdrop-blur-md">
          <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-white/[0.08] px-1 sm:grid-cols-4">
            {[
              [t.hero.stat1Value, t.hero.stat1Label],
              [t.hero.stat2Value, t.hero.stat2Label],
              [t.hero.stat3Value, t.hero.stat3Label],
              [t.hero.stat4Value, t.hero.stat4Label],
            ].map(([v, l]) => (
              <div key={l} className="px-6 py-5 sm:px-8">
                <p className="text-xl font-bold tracking-tight text-white sm:text-2xl">{v}</p>
                <p className="mt-1 text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-white/45">
                  {l}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          2  ABOUT / COMPANY INTRO
          ═══════════════════════════════════════════════ */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:flex lg:items-center lg:gap-16 lg:px-10 lg:py-28">
          <div className="lg:flex-1">
            <p className={`${kicker} text-forest-mid`}>{t.about.kicker}</p>
            <h2 className={`${h2} mt-5`}>{t.about.heading}</h2>
            <p className="mt-6 text-[1.05rem] font-medium leading-8 text-ink">
              {t.about.p1}
            </p>
            <p className="mt-4 text-[0.95rem] leading-7 text-ink-soft">
              {t.about.p2}
            </p>
            <p className="mt-4 text-[0.95rem] leading-7 text-ink-soft">
              {t.about.p3}
            </p>

            {/* Stats — boxed grid */}
            <div className="mt-10 grid grid-cols-3 divide-x divide-line border border-line bg-white">
              {[
                [t.about.stat1Num, t.about.stat1Line1, t.about.stat1Line2],
                [t.about.stat2Num, t.about.stat2Line1, t.about.stat2Line2],
                [t.about.stat3Num, t.about.stat3Line1, t.about.stat3Line2],
              ].map(([num, line1, line2]) => (
                <div key={line2} className="px-3 py-6 text-center sm:px-5 sm:py-7">
                  <p className="text-[clamp(1.6rem,2.2vw,2.1rem)] font-bold leading-none tracking-[-0.02em] text-forest">
                    {num}
                  </p>
                  <p className="mt-2 text-[0.72rem] font-semibold uppercase leading-tight tracking-[0.06em] text-ink">
                    {line1}
                  </p>
                  <p className="mt-0.5 text-[0.72rem] leading-tight text-ink-soft">{line2}</p>
                </div>
              ))}
            </div>

            <div className="mt-9">
              <Link href="/about" className={btn.outline}>
                {t.about.cta}
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>

          {/* Right: clean lifestyle image */}
          <div className="mt-12 lg:mt-0 lg:w-[42%] lg:shrink-0">
            <div className={`${imgZoomBox} group aspect-[4/5] rounded-sm border border-line`}>
              <Image
                src="/images/buda/ai_pet_hero.jpg"
                alt="Healthy dog and cat — EMBEPET pet supplement manufacturing"
                fill
                className={imgZoom}
                sizes="(min-width: 1024px) 42vw, 100vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          2.5  FEATURED PRODUCTS — best-seller carousel
          ═══════════════════════════════════════════════ */}
      <section className={`${section} border-t border-line bg-[#f8f7f2]`}>
        <div className={container}>
          <SectionHeading
            kicker={t.bestSellers.kicker}
            title={t.bestSellers.title}
            intro={t.bestSellers.intro}
          />
        </div>
        <div className={`${container} mt-14`}>
          <FeaturedProductsCarousel isZh={isZh} />
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          3  OEM/ODM PROCESS — 5-step journey
          ═══════════════════════════════════════════════ */}
      <section className={`${section} bg-white`}>
        <div className={container}>
          <SectionHeading
            kicker={t.process.kicker}
            title={t.process.title}
            intro={t.process.intro}
          />

          {/* Process cards — Fushou-style: large rounded white card, icon top-center no bg box */}
          <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {t.process.steps.map((s: { title: string; desc: string }, idx: number) => {
              const stepIcons = [
                "/images/process/icons/icon1-consultation.png",
                "/images/process/icons/icon2-formula.png",
                "/images/process/icons/icon3-packaging.png",
                "/images/process/icons/icon4-production.png",
                "/images/process/icons/icon5-export.png",
              ];
              const stepAlts = [
                "Consultation & Brief",
                "Formula & Sampling",
                "Packaging & Design",
                "Production & QC",
                "Documentation & Export",
              ];
              return (
                <div
                  key={s.title}
                  className="group flex flex-col rounded-[28px] bg-white shadow-[0_2px_16px_rgba(0,0,0,0.07)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_12px_40px_rgba(0,0,0,0.13)] cursor-default overflow-hidden"
                >
                  {/* Icon area — 300px, centered, no background box */}
                  <div className="flex items-center justify-center bg-white pt-4 pb-1">
                    <Image
                      src={stepIcons[idx]}
                      alt={stepAlts[idx]}
                      width={300}
                      height={300}
                      className="h-[300px] w-[300px] object-contain transition-transform duration-300 group-hover:scale-105"
                      sizes="300px"
                    />
                  </div>
                  {/* Text area — separated, never squeezed */}
                  <div className="px-7 pt-4 pb-6">
                    <h3 className="text-[1rem] font-bold leading-snug text-forest">
                      {s.title}
                    </h3>
                    <p className="mt-3 text-[0.82rem] leading-6 text-ink-soft">{s.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <Link href="/private-label" className={btn.primary}>
              {t.process.cta}
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          4  PARTNER BRANDS
          ═══════════════════════════════════════════════ */}
      <section className="border-y border-line bg-[#f8f7f2] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-[0.42fr_0.58fr] lg:items-center">
            {/* Left: text */}
            <div>
              <p className="text-[0.7rem] font-bold uppercase tracking-[0.18em] text-forest-mid">Trusted by leading brands</p>
              <h2 className="mt-3 text-[clamp(1.6rem,2.8vw,2.4rem)] font-semibold leading-[1.1] tracking-[-0.03em] text-ink">
                OEM Partners & Brand Clients
              </h2>
              <p className="mt-4 max-w-md text-[0.95rem] leading-7 text-ink-soft">
                Trusted by China's leading pet supplement brands \u2014 including NOURSE, Touch't, Bernate, KERES, Kuanfu, ATSPET and Chongxi \u2014 our factory has delivered GMP-certified OEM production across soft chews, tablets, pastes, and liquids since 2016.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                {["卫仕 NOURSE", "Touch't", "伯纳天纯", "凯锐思 KERES", "宽福", "ATSPET", "宠熙"].map((brand) => (
                  <span key={brand} className="rounded-sm border border-line bg-white px-3 py-1 text-[0.78rem] font-medium text-ink-soft">
                    {brand}
                  </span>
                ))}
              </div>
              <div className="mt-8">
                <Link href="/science" className="inline-flex items-center gap-2 text-[0.88rem] font-semibold text-forest hover:underline">
                  View About Us & Certifications
                  <ArrowRight className="size-4" />
                </Link>
              </div>
            </div>
            {/* Right: showcase image */}
            <div className="overflow-hidden rounded-xl shadow-lg">
              <Image
                src="/images/brands/partner-brands-showcase.png"
                alt="EMBEPET OEM partner brands: NOURSE, Touch't, Bernate, KERES, Kuanfu, ATSPET, Chongxi"
                width={1448}
                height={1086}
                className="w-full h-auto object-cover"
                sizes="(min-width: 1024px) 55vw, 100vw"
              />
            </div>
          </div>
        </div>
      </section>


      {/* ═══════════════════════════════════════════════
          5  CERTIFICATIONS
          ═══════════════════════════════════════════════ */}
      <section className="overflow-hidden bg-white">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
          <div className="text-center">
            <p className={`${kicker} text-forest-mid`}>
              {t.certifications.kicker}
            </p>
            <h2 className="mt-5 text-[clamp(2rem,4vw,3.2rem)] font-semibold leading-[1.1] tracking-[-0.025em] text-ink">
              {t.certifications.title}
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-[1rem] leading-7 text-ink-soft">
              {t.certifications.subtitle}
            </p>
          </div>

          <div className="mt-14">
            <Image
              src="/images/b2b/certifications-display.png"
              alt="International certifications — Eurofins GMP, SQF Food Safety, SQF Quality, Feed Production License, Business License"
              width={1920}
              height={1080}
              className="w-full rounded-lg shadow-xl"
              sizes="(min-width: 1280px) 1280px, 100vw"
            />
          </div>

          <div className="mt-10 text-center">
            <Link href="/science" className={btn.primary}>
              {t.certifications.cta}
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          6  B2B TESTIMONIALS WALL
          ═══════════════════════════════════════════════ */}
      <B2BTestimonialsWall isZh={isZh} />

      {/* ═══════════════════════════════════════════════
          7  DOSAGE FORMS — alternating image + text
          ═══════════════════════════════════════════════ */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="text-center">
            <p className={`${kicker} text-forest-mid`}>{t.dosageForms.kicker}</p>
            <h2 className="mt-5 text-[clamp(2rem,4vw,3rem)] font-semibold leading-[1.1] tracking-[-0.025em] text-ink">
              {t.dosageForms.title}
            </h2>
            <p className="mx-auto mt-5 max-w-3xl text-[1rem] leading-7 text-ink-soft">
              {t.dosageForms.subtitle}
            </p>
          </div>

          <div className="mt-20 space-y-24">
            {t.dosageForms.items.map((format: { title: string; desc: string; benefits: string[] }, index: number) => {
              const isEven = index % 2 === 0;
              const images = [
                "/images/b2b/dosage-forms/01-soft-chews.png",
                "/images/b2b/dosage-forms/02-powders.png",
                "/images/b2b/dosage-forms/03-tablets.png",
                "/images/b2b/dosage-forms/04-drops-and-oils.png",
                "/images/b2b/dosage-forms/05-pastes-and-gels.png",
                "/images/b2b/dosage-forms/06-freeze-dried.png",
              ];
              return (
                <div
                  key={format.title}
                  className={`grid items-center gap-12 lg:grid-cols-2 lg:gap-16 ${
                    isEven ? "" : "lg:grid-flow-dense"
                  }`}
                >
                  <div className={isEven ? "" : "lg:col-start-2"}>
                    <h3 className="text-[1.75rem] font-semibold leading-tight tracking-[-0.02em] text-ink">
                      {format.title}
                    </h3>
                    <p className="mt-5 text-[0.95rem] leading-7 text-ink-soft">{format.desc}</p>
                    <ul className="mt-8 space-y-3">
                      {format.benefits.map((benefit) => (
                        <li key={benefit} className="flex items-start gap-3">
                          <span className="mt-1 grid size-5 shrink-0 place-items-center rounded-full bg-forest-mid/[0.12]">
                            <Check className="size-3.5 text-forest-mid" strokeWidth={2.5} />
                          </span>
                          <span className="text-[0.9rem] leading-6 text-ink-soft">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={isEven ? "" : "lg:col-start-1 lg:row-start-1"}>
                    <div className="overflow-hidden rounded-lg border border-line shadow-lg">
                      <Image
                        src={images[index] || images[0]}
                        alt={`${format.title} — Pet supplement dosage form`}
                        width={800}
                        height={600}
                        className="w-full"
                        sizes="(min-width: 1024px) 50vw, 100vw"
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-16 text-center">
            <Link href="/factory" className={btn.primary}>
              {t.dosageForms.cta}
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          8  INSIDE THE FACTORY — video
          ═══════════════════════════════════════════════ */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="text-center">
            <p className={`${kicker} text-forest-mid`}>{t.factoryTour.kicker}</p>
            <h2 className="mt-5 text-[clamp(2rem,4vw,3rem)] font-semibold leading-[1.1] tracking-[-0.025em] text-ink">
              {t.factoryTour.title}
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-[1rem] leading-7 text-ink-soft">
              {t.factoryTour.subtitle}
            </p>
          </div>

          <div className="mt-14 mx-auto max-w-4xl">
            <VideoPlayer
              src="/videos/factory-tour.mp4"
              poster="/images/b2b/beno-factory-exterior.png"
            />
          </div>

          <div className="mt-10 text-center">
            <Link href="/factory" className={btn.primary}>
              {t.factoryTour.cta}
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          10  KNOWLEDGE HUB — thumbnails left for client to fill
          ═══════════════════════════════════════════════ */}
      <section className={`${section} border-t border-line bg-[#f4f5f1]`}>
        <div className={container}>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-2xl">
              <p className={`${kicker} text-forest-mid`}>{t.news.kicker}</p>
              <h2 className={`${h2} mt-5`}>{t.news.title}</h2>
              <p className={`${body} mt-3`}>
                {t.news.subtitle}
              </p>
            </div>
            <Link href="/news" className={btn.outline}>
              {t.news.allArticles}
              <ArrowRight className="size-4" />
            </Link>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {(
              isZh
                ? [
                    {
                      title: "宠物营养品 OEM 完全指南：从配方到市场上市",
                      desc: "代工生产时间线、最低起订量，以及每位品牌主都应提前规划的法规步骤。",
                      date: "2025-06-15",
                      cat: "OEM 指南",
                      href: "/news/pet-supplement-oem-guide",
                      image: "/images/b2b/news/news-oem-guide.png",
                    },
                    {
                      title: "软咀嚼 vs 粉剂 vs 滴剂：如何选择正确的剂型",
                      desc: "基于数据的剂型对比——适口性、稳定性与消费者偏好分析。",
                      date: "2025-05-22",
                      cat: "产品开发",
                      href: "/news/dosage-form-comparison",
                      image: "/images/b2b/news/news-dosage-form.png",
                    },
                    {
                      title: "读懂宠物营养品的 GMP 与 SQF 认证",
                      desc: "认证为何对市场准入、零售商接受度和品牌公信力至关重要。",
                      date: "2025-04-10",
                      cat: "质量",
                      href: "/news/gmp-sqf-certification",
                      image: "/images/b2b/news/news-gmp-sqf.png",
                    },
                  ]
                : [
                    {
                      title: "Pet Supplement OEM: A Complete Guide from Formula to Market Launch",
                      desc: "Contract-manufacturing timelines, MOQs, and the regulatory steps every brand owner should plan for.",
                      date: "2025-06-15",
                      cat: "OEM Guide",
                      href: "/news/pet-supplement-oem-guide",
                      image: "/images/b2b/news/news-oem-guide.png",
                    },
                    {
                      title: "Soft Chews vs Powders vs Drops: Choosing the Right Format",
                      desc: "A data-driven comparison of dosage forms — palatability, stability, and consumer preference.",
                      date: "2025-05-22",
                      cat: "Product Development",
                      href: "/news/dosage-form-comparison",
                      image: "/images/b2b/news/news-dosage-form.png",
                    },
                    {
                      title: "Understanding GMP & SQF Certification for Pet Supplements",
                      desc: "Why certifications matter for market access, retailer acceptance, and brand credibility.",
                      date: "2025-04-10",
                      cat: "Quality",
                      href: "/news/gmp-sqf-certification",
                      image: "/images/b2b/news/news-gmp-sqf.png",
                    },
                  ]
            ).map((a) => (
              <Link
                key={a.title}
                href={a.href}
                className={`${cardHover} group flex flex-col overflow-hidden rounded-sm border border-line bg-white`}
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={a.image}
                    alt={a.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center gap-3 text-[0.7rem]">
                    <span className="font-bold uppercase tracking-[0.12em] text-forest-mid">
                      {a.cat}
                    </span>
                    <span className="text-ink-soft/50">{a.date}</span>
                  </div>
                  <h3 className="mt-3 flex-1 text-lg font-semibold leading-[1.3] text-ink">
                    {a.title}
                  </h3>
                  <p className="mt-2 text-[0.88rem] leading-6 text-ink-soft">{a.desc}</p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-[0.82rem] font-semibold text-forest transition-colors group-hover:text-forest-mid">
                    {t.news.readMore}
                    <ArrowRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          10  CONTACT CTA
          ═══════════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-forest-deep py-24 sm:py-32">
        <Image
          src="/images/buda/ai_global_map.jpg"
          alt=""
          fill
          className="object-cover opacity-[0.14]"
          sizes="100vw"
        />
        <div className="absolute inset-0 grain opacity-20" />

        <div className={`${container} relative z-10`}>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-[clamp(2rem,4vw,3.1rem)] font-semibold leading-[1.1] tracking-[-0.025em] text-white">
              {t.contactCta.title}
            </h2>
            <p className="mt-6 text-[1.02rem] leading-8 text-white/60">
              {t.contactCta.subtitle}
            </p>

            <ul className="mt-12 flex flex-wrap justify-center gap-x-10 gap-y-3 text-left text-[0.9rem] text-white/70">
              {t.contactCta.items.map((item: string) => (
                <li key={item} className="flex items-center gap-2.5">
                  <ClipboardCheck className="size-4 shrink-0 text-amber-soft" strokeWidth={2} />
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-12 flex flex-wrap justify-center gap-4">
              <Link href="/private-label#inquiry" className={btn.light}>
                {t.contactCta.ctaSubmit}
                <ArrowRight className="size-4" />
              </Link>
              <Link href="/contact" className={btn.darkOutline}>
                {t.contactCta.ctaContact}
              </Link>
            </div>

            <p className="mt-8 text-[0.82rem] text-white/35">
              {t.contactCta.footnote}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
