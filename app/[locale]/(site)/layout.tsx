import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import SmoothScroll from "@/components/motion/SmoothScroll";
import { getSettings } from "@/lib/settings";
import { organizationJsonLd, websiteJsonLd, jsonLdScriptProps } from "@/lib/seo";
import { isLocale, type Locale } from "@/lib/i18n/locales";
import { getDict } from "@/lib/i18n";

export default async function SiteLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "en";
  const dict = getDict(locale);
  const settings = await getSettings();

  // Extract only the string props needed by client components (functions can't serialize)
  const headerLabels = {
    products: dict.b2bPages.header.products,
    oemOdm: dict.b2bPages.header.oemOdm,
    manufacturing: dict.b2bPages.header.manufacturing,
    qualityCompany: dict.b2bPages.header.qualityCompany,
    news: dict.b2bPages.header.news,
    contact: (dict.b2bPages.header as Record<string, string>).contact ?? "Contact Us",
    getQuote: dict.b2bPages.header.getQuote,
    tagline: dict.b2bPages.header.tagline,
    requestQuote: dict.b2bPages.header.requestQuote,
    menuOpen: dict.b2bPages.header.menuOpen,
    menuClose: dict.b2bPages.header.menuClose,
    language: dict.nav.language,
  };

  const footerLabels = {
    tagline: dict.b2bPages.footer.tagline,
    description: dict.b2bPages.footer.description,
    primaryPages: dict.b2bPages.footer.primaryPages,
    productRoutes: dict.b2bPages.footer.productRoutes,
    businessInfo: dict.b2bPages.footer.businessInfo,
    productsWholesale: dict.b2bPages.footer.productsWholesale,
    oemOdm: dict.b2bPages.footer.oemOdm,
    manufacturing: dict.b2bPages.footer.manufacturing,
    qualityCompany: dict.b2bPages.footer.qualityCompany,
    contact: (dict.b2bPages.footer as Record<string, string>).contact ?? "Contact Us",
    completeCatalog: dict.b2bPages.footer.completeCatalog,
    softChews: dict.b2bPages.footer.softChews,
    powders: dict.b2bPages.footer.powders,
    dropsOils: dict.b2bPages.footer.dropsOils,
    companyProfile: dict.b2bPages.footer.companyProfile,
    certificates: dict.b2bPages.footer.certificates,
    newsInsights: dict.b2bPages.footer.newsInsights,
    requestQuote: dict.b2bPages.footer.requestQuote,
    factory: dict.b2bPages.footer.factory,
    address: dict.b2bPages.footer.address,
    copyright: dict.b2bPages.footer.copyright,
    gmpNotice: dict.b2bPages.footer.gmpNotice,
  };

  return (
    <SmoothScroll>
      <div className="b2b-site">
        <script {...jsonLdScriptProps(organizationJsonLd(settings))} />
        <script {...jsonLdScriptProps(websiteJsonLd("EMBEPET"))} />
        <Header
          brandName="EMBEPET"
          announcement="GMP audit recognition · SQF Pet Food Manufacturing · OEM / ODM · MOQ from 500 units"
          locale={locale}
          labels={headerLabels}
        />
        <main className="min-h-screen">{children}</main>
        <Footer settings={settings} labels={footerLabels} />
      </div>
    </SmoothScroll>
  );
}
