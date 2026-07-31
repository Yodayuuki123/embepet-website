import type { Metadata } from "next";
import { notFound } from "next/navigation";
import "@fontsource-variable/fraunces";
import "@fontsource-variable/inter";
import "../globals.css";
import { LOCALES, isLocale, type Locale } from "@/lib/i18n/locales";
import { SITE_URL } from "@/lib/seo";
import { LocaleProvider } from "@/components/site/LocaleProvider";

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  await params;
  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: "EMBEPET | Pet Supplement Manufacturer",
      template: "%s | EMBEPET",
    },
    description:
      "Taizhou Beno Biotech manufactures wholesale and private-label pet supplements for global brands and distributors.",
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return (
    <html lang={locale}>
      <body>
        <LocaleProvider locale={locale as Locale}>{children}</LocaleProvider>
      </body>
    </html>
  );
}
