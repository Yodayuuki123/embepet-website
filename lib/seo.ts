import type { Metadata } from "next";
import { LOCALES, type Locale } from "@/lib/i18n/locales";

export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000")
).replace(/\/$/, "");

export function absoluteUrl(path: string): string {
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

/** 给 locale 无关的站内路径加语言前缀 */
export function localizedPath(path: string, locale: Locale): string {
  return path === "/" ? `/${locale}` : `/${locale}${path}`;
}

/** 序列化 JSON-LD（转义 < 防止 XSS） */
export function jsonLdString(data: object): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

/** 渲染 JSON-LD 的 script 属性 */
export function jsonLdScriptProps(data: object) {
  return {
    type: "application/ld+json",
    dangerouslySetInnerHTML: { __html: jsonLdString(data) },
  } as const;
}

type MetaInput = {
  title: string;
  description: string;
  /** locale 无关路径，如 "/about"、"/products/x" */
  path: string;
  /** 当前页面语言；传入后 canonical 指向本语言版本并输出全语言 hreflang */
  locale?: Locale;
  ogType?: "website" | "article";
  images?: string[];
  noIndex?: boolean;
};

/** 页面便捷封装：从路由 params 取 locale 再构造元数据 */
export async function metaWithLocale(
  params: Promise<{ locale: string }>,
  input: Omit<MetaInput, "locale">
): Promise<Metadata> {
  const { locale } = await params;
  const safe = (LOCALES as readonly string[]).includes(locale) ? (locale as Locale) : "en";
  return buildMetadata({ ...input, locale: safe });
}

/** 统一元数据构造：title/description/canonical/hreflang/OG/Twitter */
export function buildMetadata({ title, description, path, locale = "en", ogType = "website", images, noIndex }: MetaInput): Metadata {
  const url = absoluteUrl(localizedPath(path, locale));
  const ogImages = images?.length ? images : [absoluteUrl(`/api/og?title=${encodeURIComponent(title)}`)];
  const languages: Record<string, string> = Object.fromEntries(
    LOCALES.map((l) => [l, absoluteUrl(localizedPath(path, l))])
  );
  languages["x-default"] = absoluteUrl(localizedPath(path, "en"));
  return {
    title,
    description,
    alternates: { canonical: url, languages },
    robots: noIndex ? { index: false, follow: false } : undefined,
    openGraph: {
      title,
      description,
      url,
      siteName: "EMBEPET",
      type: ogType,
      images: ogImages.map((src) => ({ url: src, width: 1200, height: 630 })),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ogImages,
    },
  };
}

// ---------- JSON-LD 构造器 ----------

export function organizationJsonLd(s: {
  brandName: string;
  companyLegalName?: string;
  supportEmail: string;
  b2bEmail?: string;
  phone?: string;
  instagram?: string;
  facebook?: string;
  tiktok?: string;
  youtube?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: s.brandName,
        alternateName: "EMBEPET",
        legalName: s.companyLegalName ?? "Embepet Biotech (Shenzhen) Co., Ltd.",
        url: SITE_URL,
        logo: absoluteUrl(`/api/og?title=${encodeURIComponent(s.brandName)}&kind=logo`),
        email: s.b2bEmail ?? s.supportEmail,
        telephone: s.phone,
        description:
          "EMBEPET provides B2B pet supplement manufacturing services including wholesale, private label and OEM/ODM for global pet brands, distributors and retailers. GMP and SQF certified manufacturing by Taizhou Beno Biotech.",
        areaServed: "Worldwide",
        knowsAbout: [
          "pet supplement manufacturing",
          "pet supplement OEM",
          "pet supplement ODM",
          "private label pet supplements",
          "wholesale pet supplements",
          "pet soft chew manufacturing",
          "GMP pet supplement factory",
          "SQF certified pet supplement manufacturer",
        ],
        sameAs: [
          s.instagram,
          s.facebook,
          s.youtube,
          s.tiktok,
        ].filter(Boolean),
      },
      {
        "@type": ["Organization", "Manufacturer"],
        "@id": `${SITE_URL}/#manufacturer`,
        name: "Taizhou Beno Biotech Co., Ltd.",
        alternateName: "泰州市贝诺生物科技有限公司",
        legalName: "Taizhou Beno Biotech Co., Ltd.",
        url: absoluteUrl("/en/science"),
        email: s.b2bEmail ?? s.supportEmail,
        telephone: "+86 523 8766 9599",
        foundingDate: "2016-08-11",
        description:
          "GMP and SQF certified pet supplement manufacturing facility in Taixing City, Jiangsu, China. Produces soft chews, tablets, pastes, liquids, powders and granules for global pet supplement brands.",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Li Kong Group 3, Donglin Village, Yaowang Street",
          addressLocality: "Taixing City",
          addressRegion: "Jiangsu",
          postalCode: "225400",
          addressCountry: "CN",
        },
        areaServed: "Worldwide",
        makesOffer: {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            serviceType: "Pet supplement contract manufacturing",
            name: "Pet Supplement OEM/ODM Manufacturing",
          },
        },
        brand: { "@type": "Brand", name: "EMBEPET" },
        parentOrganization: { "@id": `${SITE_URL}/#organization` },
        hasCredential: [
          {
            "@type": "EducationalOccupationalCredential",
            name: "Eurofins GMP Audit Recognition",
            credentialCategory: "Good Manufacturing Practice audit recognition",
            recognizedBy: { "@type": "Organization", name: "Eurofins Food Assurance Certification US, LLC" },
            validFrom: "2026-06-14",
            validUntil: "2027-06-14",
            identifier: "ACCB8AAA422_1",
            url: absoluteUrl("/certificates/taizhou-beno-gmp-2026.pdf"),
          },
          {
            "@type": "EducationalOccupationalCredential",
            name: "SQF Food Safety Code: Pet Food Manufacturing, Edition 9",
            credentialCategory: "Food safety certification - GFSI recognized",
            recognizedBy: { "@type": "Organization", name: "SQFI" },
            validFrom: "2026-07-20",
            validUntil: "2027-08-28",
            identifier: "105690",
            url: absoluteUrl("/certificates/taizhou-beno-sqf-2026.pdf"),
          },
          {
            "@type": "EducationalOccupationalCredential",
            name: "SQF Quality Code, Edition 9",
            credentialCategory: "Quality management system certification",
            recognizedBy: { "@type": "Organization", name: "SQFI" },
            validFrom: "2026-07-20",
            validUntil: "2027-08-28",
            identifier: "105690",
            url: absoluteUrl("/certificates/taizhou-beno-sqf-quality-2026.pdf"),
          },
          {
            "@type": "EducationalOccupationalCredential",
            name: "Feed Production License",
            credentialCategory: "Feed manufacturing license",
            recognizedBy: { "@type": "Organization", name: "Jiangsu Provincial Department of Agriculture and Rural Affairs" },
            identifier: "苏饲预（2026）12006",
            validFrom: "2026-04-26",
            validUntil: "2031-04-25",
          },
        ],
        identifier: [
          {
            "@type": "PropertyValue",
            propertyID: "D-U-N-S",
            value: "404129816",
          },
          {
            "@type": "PropertyValue",
            propertyID: "FDA Registration Number",
            value: "10222600768",
          },
        ],
      },
    ],
  };
}

export function websiteJsonLd(brandName: string) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: brandName,
    publisher: { "@id": `${SITE_URL}/#organization` },
    potentialAction: {
      "@type": "SearchAction",
      target: { "@type": "EntryPoint", urlTemplate: `${SITE_URL}/shop?q={search_term_string}` },
      "query-input": "required name=search_term_string",
    },
  };
}

type ProductJsonLdInput = {
  slug: string;
  name: string;
  subtitle: string;
  answerCapsule: string;
  ratingAvg: number;
  ratingCount: number;
  images?: string[];
  variants: { name: string; sku: string; priceCents: number; stock: number }[];
  reviews: { authorName: string; rating: number; title: string; body: string; createdAt: Date }[];
};

export function productJsonLd(p: ProductJsonLdInput, brandName: string, locale: Locale = "en") {
  const url = absoluteUrl(localizedPath(`/products/${p.slug}`, locale));
  const priceValidUntil = new Date(Date.now() + 90 * 86400000).toISOString().slice(0, 10);
  const images =
    p.images?.length
      ? p.images.map((src) => (src.startsWith("http") ? src : absoluteUrl(src)))
      : [absoluteUrl(`/api/og?title=${encodeURIComponent(p.name)}&kind=product`)];
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `${url}#product`,
    name: p.name,
    url,
    image: images,
    description: p.answerCapsule || p.subtitle,
    brand: { "@type": "Brand", name: brandName },
    ...(p.ratingCount > 0
      ? {
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: p.ratingAvg,
            reviewCount: p.ratingCount,
            bestRating: 5,
          },
          review: p.reviews.slice(0, 5).map((r) => ({
            "@type": "Review",
            author: { "@type": "Person", name: r.authorName },
            reviewRating: { "@type": "Rating", ratingValue: r.rating, bestRating: 5 },
            name: r.title,
            reviewBody: r.body,
            datePublished: r.createdAt.toISOString().slice(0, 10),
          })),
        }
      : {}),
    offers: p.variants.map((v) => ({
      "@type": "Offer",
      url,
      sku: v.sku,
      name: v.name,
      price: (v.priceCents / 100).toFixed(2),
      priceCurrency: "USD",
      priceValidUntil,
      availability: v.stock > 0 ? "https://schema.org/InStock" : "https://schema.org/OutOfStock",
      itemCondition: "https://schema.org/NewCondition",
      shippingDetails: {
        "@type": "OfferShippingDetails",
        shippingRate: { "@type": "MonetaryAmount", value: 0, currency: "USD" },
        shippingDestination: { "@type": "DefinedRegion", addressCountry: "US" },
        deliveryTime: {
          "@type": "ShippingDeliveryTime",
          handlingTime: { "@type": "QuantitativeValue", minValue: 1, maxValue: 2, unitCode: "DAY" },
          transitTime: { "@type": "QuantitativeValue", minValue: 3, maxValue: 7, unitCode: "DAY" },
        },
      },
      hasMerchantReturnPolicy: {
        "@type": "MerchantReturnPolicy",
        applicableCountry: "US",
        returnPolicyCategory: "https://schema.org/MerchantReturnFiniteReturnWindow",
        merchantReturnDays: 30,
        returnMethod: "https://schema.org/ReturnByMail",
        returnFees: "https://schema.org/FreeReturn",
      },
    })),
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[], locale: Locale = "en") {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(localizedPath(item.path, locale)),
    })),
  };
}

export function faqJsonLd(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

type ArticleJsonLdInput = {
  slug: string;
  title: string;
  excerpt: string;
  authorName: string;
  reviewedBy?: string | null;
  publishedAt: Date;
  updatedAt: Date;
};

export function articleJsonLd(a: ArticleJsonLdInput, brandName = "EMBEPET", locale: Locale = "en") {
  const url = absoluteUrl(localizedPath(`/learn/${a.slug}`, locale));
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${url}#article`,
    headline: a.title,
    description: a.excerpt,
    url,
    image: [absoluteUrl(`/api/og?title=${encodeURIComponent(a.title)}&kind=article`)],
    author: { "@type": "Organization", name: a.authorName || `${brandName} Science Team` },
    publisher: { "@id": `${SITE_URL}/#organization` },
    datePublished: a.publishedAt.toISOString(),
    dateModified: a.updatedAt.toISOString(),
    mainEntityOfPage: url,
  };
}
