import type { Metadata } from "next";
import Image from "next/image";
import {
  ArrowRight,
  Boxes,
  Calculator,
  CircleDollarSign,
  FileInput,
  PackageCheck,
  Search,
} from "lucide-react";
import { absoluteUrl, metaWithLocale, faqJsonLd } from "@/lib/seo";
import { B2B_CATALOG, USD_CNY_RATE } from "@/lib/b2b-catalog";
import B2BProductCard from "@/components/b2b/B2BProductCard";
import Link from "@/components/site/A";
import JsonLd from "@/components/site/JsonLd";
import { isLocale } from "@/lib/i18n/locales";
import { getDict } from "@/lib/i18n";

export function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  return metaWithLocale(params, {
    title: "Wholesale Pet Supplements: 30-Product B2B Catalog",
    description:
      "Compare 30 wholesale pet supplements for dogs and cats by format, category, USD reference price and starting MOQ. Request specifications and a formal B2B quotation.",
    path: "/shop",
  });
}

type SearchParams = Promise<Record<string, string | string[] | undefined>>;

function first(value: string | string[] | undefined) {
  return Array.isArray(value) ? value[0] ?? "" : value ?? "";
}

function filterHref(species: string, format: string, q: string) {
  const params = new URLSearchParams();
  if (species) params.set("species", species);
  if (format) params.set("format", format);
  if (q) params.set("q", q);
  const query = params.toString();
  return query ? `/shop?${query}#catalog` : "/shop#catalog";
}

export default async function ProductPortfolioPage({
  searchParams,
  params,
}: {
  searchParams: SearchParams;
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale = isLocale(rawLocale) ? rawLocale : "en";
  const dict = getDict(locale);
  const t = dict.b2bPages.shop;

  const sp = await searchParams;
  const species = first(sp.species);
  const format = first(sp.format);
  const q = first(sp.q).trim().toLowerCase();
  const filtered = B2B_CATALOG.filter((product) => {
    const matchesSpecies = !species || product.species === species || product.species === "dog_cat";
    const matchesFormat = !format || product.format === format;
    const haystack =
      `${product.name} ${product.subtitle} ${product.format} ${product.species} ${product.category}`.toLowerCase();
    return matchesSpecies && matchesFormat && (!q || haystack.includes(q));
  });

  const speciesOptions = [
    { value: "", label: t.catalog.allSpecies },
    { value: "dog", label: t.catalog.dogs },
    { value: "cat", label: t.catalog.cats },
  ];

  const formatOptions = [
    { value: "", label: t.catalog.allFormats },
    { value: "chew", label: t.catalog.softChews },
    { value: "powder", label: t.catalog.powders },
    { value: "dropper", label: t.catalog.liquidDrops },
    { value: "oil", label: t.catalog.oils },
    { value: "tablet", label: t.catalog.tablets },
    { value: "paste", label: t.catalog.pastes },
  ];

  const commercialFramework = [
    {
      label: t.framework.items[0].label,
      value: t.framework.items[0].value,
      detail: t.framework.items[0].detail,
    },
    {
      label: t.framework.items[1].label,
      value: t.framework.items[1].value,
      detail: t.framework.items[1].detail,
    },
    {
      label: t.framework.items[2].label,
      value: t.framework.items[2].value,
      detail: t.framework.items[2].detail,
    },
    {
      label: t.framework.items[3].label,
      value: t.framework.items[3].value,
      detail: t.framework.items[3].detail,
    },
  ];

  const wholesaleFaqs = [
    {
      q: "What is the minimum order quantity for wholesale pet supplements?",
      a: "Starting MOQ is shown per SKU in the catalog and used for initial comparison. The confirmed MOQ depends on the formula, dosage form and packaging configuration, and is stated in your quotation.",
    },
    {
      q: "How are wholesale pet supplement prices calculated?",
      a: "Catalog prices are USD reference figures converted from the supplied RMB materials for early comparison. A purchase-ready quote is issued after packaging, label work, testing, order volume, Incoterm and destination market are aligned.",
    },
    {
      q: "Can I order wholesale pet supplements for both dogs and cats?",
      a: "Yes. The catalog can be filtered by species and format. Many formulas are available for dogs, cats or both, across soft chews, powders, drops, oils, tablets and pastes.",
    },
    {
      q: "Do you offer private label and OEM on wholesale catalog products?",
      a: "Yes. Any catalog product can be taken as a stock-formula private-label program or adapted through OEM/ODM development. Share a shortlist to confirm the route, MOQ basis and sample path.",
    },
    {
      q: "How do I request a wholesale pet supplement quotation?",
      a: "Send the selected product names or screenshots with your destination market, sales channel, expected volume, packaging direction and preferred Incoterm. The B2B team confirms what is fixed, what is optional and what must be quoted.",
    },
  ];

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Beno Bio wholesale pet supplement catalog",
          description:
            "B2B catalog of 30 pet supplement products available for wholesale, private label and OEM/ODM inquiry.",
          url: absoluteUrl("/en/shop"),
          about: { "@id": `${absoluteUrl("/")}#manufacturer` },
          mainEntity: {
            "@type": "ItemList",
            numberOfItems: B2B_CATALOG.length,
            itemListElement: B2B_CATALOG.map((product, index) => ({
              "@type": "ListItem",
              position: index + 1,
              item: {
                "@type": "Product",
                name: product.name,
                description: product.subtitle,
                category: product.category,
                image: absoluteUrl(product.image),
                brand: { "@type": "Brand", name: "EMBEPET" },
                manufacturer: { "@id": `${absoluteUrl("/")}#manufacturer` },
                audience: {
                  "@type": "BusinessAudience",
                  audienceType: "Pet brands, distributors and global sellers",
                },
              },
            })),
          },
        }}
      />

      <section className="border-b border-line bg-[#f5f3ec]">
        <div className="mx-auto grid max-w-[1480px] lg:grid-cols-[1.08fr_0.92fr]">
          <div className="relative min-h-[430px] border-r border-line lg:min-h-[610px]">
            <Image
              src="/images/b2b/wholesale-buyer-review.png"
              alt="Illustrative B2B buyer reviewing a pet supplement sourcing range"
              fill
              priority
              className="object-cover"
              sizes="(min-width: 1024px) 56vw, 100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#10271d]/25" />
            <div className="absolute bottom-0 left-0 border-r border-t border-white/25 bg-forest-deep px-6 py-5 text-white">
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-white/50">
                {t.hero.badgeLabel}
              </p>
              <p className="mt-1 text-2xl font-semibold">{t.hero.badgeValue}</p>
            </div>
          </div>
          <div className="flex flex-col justify-center px-5 py-16 sm:px-8 lg:px-12 xl:px-16">
            <p className="b2b-kicker text-forest-mid">{t.hero.kicker}</p>
            <h1 className="mt-5 text-[clamp(2.7rem,5.2vw,5rem)] font-[440] leading-[0.98] tracking-[-0.05em] text-ink">
              {t.hero.title}
            </h1>
            <p className="mt-6 text-[1.02rem] leading-8 text-ink-soft">
              {t.hero.subtitle}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="#catalog" className="b2b-btn-primary">
                {t.hero.ctaBrowse}
                <ArrowRight className="size-4" aria-hidden />
              </Link>
              <Link href="/private-label#inquiry" className="b2b-btn-secondary">
                {t.hero.ctaQuote}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="wholesale" className="scroll-mt-24 border-b border-line bg-white">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-[0.32fr_0.68fr]">
            <div>
              <p className="b2b-kicker text-forest-mid">{t.framework.kicker}</p>
              <h2 className="mt-4 text-3xl font-medium tracking-[-0.035em] text-ink">
                {t.framework.title}
              </h2>
              <p className="mt-4 text-sm leading-7 text-ink-soft">
                {t.framework.subtitle}
              </p>
            </div>
            <dl className="border-l border-t border-line">
              {commercialFramework.map((item, index) => (
                <div
                  key={item.label}
                  className="grid gap-4 border-b border-r border-line p-5 sm:grid-cols-[0.24fr_0.24fr_0.52fr] sm:p-6"
                >
                  <dt className="flex items-center gap-3 text-sm font-semibold text-ink">
                    <span className="text-[0.65rem] text-forest-mid">0{index + 1}</span>
                    {item.label}
                  </dt>
                  <dd className="text-sm font-semibold text-forest">{item.value}</dd>
                  <dd className="text-sm leading-6 text-ink-soft">{item.detail}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section id="catalog" className="scroll-mt-24 mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-10">
        <div className="flex flex-col gap-6 border-b border-line pb-9 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="b2b-kicker text-forest-mid">{t.catalog.kicker}</p>
            <h2 className="b2b-heading mt-4">{t.catalog.title}</h2>
          </div>
          <p className="max-w-xl text-sm leading-7 text-ink-soft">
            {t.catalog.subtitle}
          </p>
        </div>

        <div className="mt-8 border border-line bg-white">
          <div className="border-b border-line p-5">
            <form className="flex flex-col gap-3 sm:flex-row" action="">
              <label className="sr-only" htmlFor="product-search">
                {t.catalog.searchPlaceholder}
              </label>
              <div className="relative min-w-0 flex-1">
                <Search
                  className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-ink-soft"
                  aria-hidden
                />
                <input
                  id="product-search"
                  name="q"
                  defaultValue={q}
                  placeholder={t.catalog.searchPlaceholder}
                  className="h-12 w-full border border-line bg-[#fbfaf6] pl-11 pr-4 text-sm outline-none focus:border-forest"
                />
              </div>
              {species ? <input type="hidden" name="species" value={species} /> : null}
              {format ? <input type="hidden" name="format" value={format} /> : null}
              <button className="b2b-btn-primary" type="submit">
                {t.catalog.searchButton}
              </button>
            </form>
          </div>

          <div className="grid gap-0 lg:grid-cols-2">
            <div className="border-b border-line p-5 lg:border-b-0 lg:border-r">
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.13em] text-ink-soft">{t.catalog.species}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {speciesOptions.map((option) => (
                  <Link
                    key={option.label}
                    href={filterHref(option.value, format, q)}
                    className={`flex min-h-11 items-center border px-3 py-2 text-xs font-semibold ${
                      species === option.value
                        ? "border-forest bg-forest text-white"
                        : "border-line bg-white text-ink-soft hover:border-forest/50 hover:text-forest"
                    }`}
                  >
                    {option.label}
                  </Link>
                ))}
              </div>
            </div>
            <div className="p-5">
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.13em] text-ink-soft">{t.catalog.format}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {formatOptions.map((option) => (
                  <Link
                    key={option.label}
                    href={filterHref(species, option.value, q)}
                    className={`flex min-h-11 items-center border px-3 py-2 text-xs font-semibold ${
                      format === option.value
                        ? "border-forest bg-forest text-white"
                        : "border-line bg-white text-ink-soft hover:border-forest/50 hover:text-forest"
                    }`}
                  >
                    {option.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-4 border-y border-line py-5 md:grid-cols-[0.24fr_0.52fr_0.24fr] md:items-center">
          <p className="text-sm text-ink-soft">
            <span className="font-semibold text-ink">{filtered.length}</span>{" "}
            {t.catalog.productsShown.replace("${n}", String(filtered.length))}
          </p>
          <p className="text-xs leading-5 text-ink-soft">
            {t.catalog.fxNote.replace("${rate}", USD_CNY_RATE.toFixed(4))}
          </p>
          {(species || format || q) && (
            <Link href="/shop#catalog" className="text-sm font-semibold text-forest hover:underline md:text-right">
              {t.catalog.clearFilters}
            </Link>
          )}
        </div>

        {filtered.length ? (
          <div className="mt-8 grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filtered.map((product) => (
              <B2BProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="mt-8 border border-line bg-white px-6 py-16 text-center">
            <p className="text-xl font-semibold text-ink">{t.catalog.noMatch}</p>
            <p className="mt-2 text-sm text-ink-soft">{t.catalog.noMatchSub}</p>
          </div>
        )}
      </section>

      <section className="border-y border-line bg-[#e9eeea]">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-[0.42fr_0.58fr]">
            <div>
              <p className="b2b-kicker text-forest-mid">{t.quotation.kicker}</p>
              <h2 className="mt-4 text-4xl font-medium tracking-[-0.04em] text-ink">
                {t.quotation.title}
              </h2>
              <p className="mt-5 text-sm leading-7 text-ink-soft">
                {t.quotation.subtitle}
              </p>
            </div>
            <div className="grid border-l border-t border-line sm:grid-cols-2">
              {t.quotation.steps.map((step, idx) => {
                const icons = [FileInput, Boxes, PackageCheck, Calculator];
                const Icon = icons[idx] || FileInput;
                return (
                  <article key={step.title} className="border-b border-r border-line bg-white p-6">
                    <Icon className="size-5 text-forest-mid" strokeWidth={1.7} aria-hidden />
                    <h3 className="mt-8 text-lg font-semibold text-ink">{step.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-ink-soft">{step.body}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-white">
        <JsonLd data={faqJsonLd(wholesaleFaqs)} />
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
              {wholesaleFaqs.map((item) => (
                <div key={item.q} className="border-b border-line py-6">
                  <dt className="text-lg font-semibold text-ink">{item.q}</dt>
                  <dd className="mt-3 text-sm leading-7 text-ink-soft">{item.a}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 py-16 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-10">
          <div className="flex items-start gap-4">
            <CircleDollarSign className="mt-1 size-6 shrink-0 text-forest-mid" aria-hidden />
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
