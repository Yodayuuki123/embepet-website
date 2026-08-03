import type { Metadata } from "next";
import { LOCALES, LOCALE_OG, type Locale } from "@/lib/i18n/locales";

/**
 * English is the only search-indexed locale for now. Translated routes remain
 * usable, but canonicalize to English and are excluded from indexing until
 * they receive a complete, independently reviewed SEO/content pass.
 */
export const SEO_LOCALE: Locale = "en";
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://embepet.com").replace(/\/$/, "");

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
  imageAlt?: string;
  keywords?: string[];
  category?: string;
  publishedTime?: string;
  modifiedTime?: string;
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

/** 统一元数据构造：英文 canonical、索引控制、OG/Twitter 和搜索摘要。 */
export function buildMetadata({
  title,
  description,
  path,
  locale = SEO_LOCALE,
  ogType = "website",
  images,
  imageAlt,
  keywords,
  category,
  publishedTime,
  modifiedTime,
  noIndex,
}: MetaInput): Metadata {
  const canonicalUrl = absoluteUrl(localizedPath(path, SEO_LOCALE));
  const shouldNoIndex = Boolean(noIndex || locale !== SEO_LOCALE);
  const exactTitle = title.includes("EMBEPET") ? title : `${title} | EMBEPET`;
  const ogImages = (images?.length ? images : [`/api/og?title=${encodeURIComponent(exactTitle)}`]).map(
    (src) => (src.startsWith("http") ? src : absoluteUrl(src)),
  );
  const languages: Record<string, string> = {
    en: canonicalUrl,
    "x-default": canonicalUrl,
  };
  return {
    title: { absolute: exactTitle },
    description,
    keywords,
    category,
    applicationName: "EMBEPET",
    authors: [{ name: "EMBEPET", url: absoluteUrl("/en/about") }],
    creator: "EMBEPET",
    publisher: "Taizhou Beno Biotech Co., Ltd.",
    alternates: { canonical: canonicalUrl, languages },
    robots: {
      index: !shouldNoIndex,
      follow: true,
      googleBot: {
        index: !shouldNoIndex,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    openGraph: {
      title: exactTitle,
      description,
      url: canonicalUrl,
      siteName: "EMBEPET",
      type: ogType,
      locale: LOCALE_OG[SEO_LOCALE],
      images: ogImages.map((src) => ({
        url: src,
        width: 1200,
        height: 630,
        alt: imageAlt ?? exactTitle,
      })),
      ...(ogType === "article"
        ? {
            publishedTime,
            modifiedTime,
            section: category,
            tags: keywords,
          }
        : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: exactTitle,
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
        legalName: s.companyLegalName || undefined,
        url: SITE_URL,
        logo: {
          "@type": "ImageObject",
          url: absoluteUrl("/images/beno-bio-logo-transparent.png"),
        },
        email: s.b2bEmail ?? s.supportEmail,
        telephone: s.phone,
        description:
          "EMBEPET supports pet supplement wholesale, private label and OEM/ODM projects for brand owners, distributors and global sellers.",
        areaServed: "Worldwide",
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "B2B sales",
          email: s.b2bEmail ?? s.supportEmail,
          telephone: s.phone,
          availableLanguage: ["English", "Chinese"],
          areaServed: "Worldwide",
        },
        knowsAbout: [
          "pet supplement manufacturing",
          "private label pet supplements",
          "pet supplement OEM and ODM",
          "wholesale pet supplements",
        ],
      },
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#manufacturer`,
        name: "Taizhou Beno Biotech Co., Ltd.",
        url: absoluteUrl("/en/factory"),
        foundingDate: "2016-08-11",
        email: s.b2bEmail ?? s.supportEmail,
        telephone: s.phone,
        description:
          "Pet supplement manufacturing entity in Taixing City, Jiangsu, China, supporting soft chews, powders, liquids, oils, tablets and pastes.",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Li Kong Group 3, Donglin Village, Yaowang Street",
          addressLocality: "Taixing City",
          addressRegion: "Jiangsu",
          postalCode: "225400",
          addressCountry: "CN",
        },
        brand: { "@type": "Brand", name: "EMBEPET" },
        hasCredential: [
          {
            "@type": "EducationalOccupationalCredential",
            name: "Eurofins GMP Audit Recognition",
            credentialCategory: "Good Manufacturing Practice audit recognition",
            url: absoluteUrl("/certificates/taizhou-beno-gmp-2026.pdf"),
          },
          {
            "@type": "EducationalOccupationalCredential",
            name: "SQF Food Safety Code: Pet Food Manufacturing, Edition 9",
            credentialCategory: "Food safety certification",
            url: absoluteUrl("/certificates/taizhou-beno-sqf-2026.pdf"),
          },
          {
            "@type": "EducationalOccupationalCredential",
            name: "SQF Quality Code, Edition 9",
            credentialCategory: "Quality certification",
            url: absoluteUrl("/certificates/taizhou-beno-sqf-quality-2026.pdf"),
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
      target: { "@type": "EntryPoint", urlTemplate: `${SITE_URL}/en/shop?q={search_term_string}` },
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
  path?: string;
  image?: string;
  section?: string;
  keywords?: string[];
  citations?: { label: string; url?: string }[];
};

export function articleJsonLd(a: ArticleJsonLdInput, brandName = "EMBEPET", locale: Locale = "en") {
  const url = absoluteUrl(localizedPath(a.path ?? `/learn/${a.slug}`, locale));
  const image = a.image
    ? a.image.startsWith("http")
      ? a.image
      : absoluteUrl(a.image)
    : absoluteUrl(`/api/og?title=${encodeURIComponent(a.title)}&kind=article`);
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${url}#article`,
    headline: a.title,
    description: a.excerpt,
    url,
    image: [image],
    author: {
      "@type": "Organization",
      name: a.authorName || `${brandName} Science Team`,
      url: absoluteUrl("/en/about"),
    },
    publisher: { "@id": `${SITE_URL}/#organization` },
    datePublished: a.publishedAt.toISOString(),
    dateModified: a.updatedAt.toISOString(),
    mainEntityOfPage: url,
    articleSection: a.section,
    keywords: a.keywords,
    citation: a.citations?.map((source) => source.url ?? source.label),
    isAccessibleForFree: true,
  };
}

export function webPageJsonLd(input: {
  path: string;
  name: string;
  description: string;
  type?: "WebPage" | "AboutPage" | "ContactPage" | "CollectionPage";
  primaryImage?: string;
}) {
  const url = absoluteUrl(localizedPath(input.path, SEO_LOCALE));
  return {
    "@context": "https://schema.org",
    "@type": input.type ?? "WebPage",
    "@id": `${url}#webpage`,
    url,
    name: input.name,
    description: input.description,
    inLanguage: "en",
    isPartOf: { "@id": `${SITE_URL}/#website` },
    about: { "@id": `${SITE_URL}/#manufacturer` },
    primaryImageOfPage: input.primaryImage
      ? { "@type": "ImageObject", url: absoluteUrl(input.primaryImage) }
      : undefined,
  };
}

export function serviceJsonLd(input: {
  name: string;
  description: string;
  path: string;
  serviceTypes: string[];
}) {
  const url = absoluteUrl(localizedPath(input.path, SEO_LOCALE));
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${url}#service`,
    name: input.name,
    description: input.description,
    url,
    provider: { "@id": `${SITE_URL}/#manufacturer` },
    areaServed: "Worldwide",
    audience: {
      "@type": "BusinessAudience",
      audienceType: "Pet brands, distributors, retailers and global sellers",
    },
    serviceType: input.serviceTypes,
  };
}
