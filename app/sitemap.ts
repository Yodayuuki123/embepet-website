import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";
import { LOCALES } from "@/lib/i18n/locales";
import { NEWS_ARTICLES } from "@/lib/news";

type Entry = MetadataRoute.Sitemap[number];

function localized(
  path: string,
  lastModified: Date,
  priority: number,
  changeFrequency: Entry["changeFrequency"]
): Entry[] {
  const url = (locale: string) => `${SITE_URL}/${locale}${path === "/" ? "" : path}`;
  const languages = Object.fromEntries(LOCALES.map((locale) => [locale, url(locale)]));
  return LOCALES.map((locale) => ({
    url: url(locale),
    lastModified,
    priority,
    changeFrequency,
    alternates: { languages },
  }));
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const pages: [string, number, Entry["changeFrequency"]][] = [
    ["/", 1, "weekly"],
    ["/shop", 0.95, "weekly"],
    ["/private-label", 0.95, "monthly"],
    ["/factory", 0.9, "monthly"],
    ["/science", 0.9, "monthly"],
    ["/news", 0.85, "weekly"],
  ];

  const base = pages.flatMap(([path, priority, frequency]) => localized(path, now, priority, frequency));
  const articles = NEWS_ARTICLES.flatMap((a) =>
    localized(`/news/${a.slug}`, new Date(a.updated ?? a.date), 0.8, "monthly"),
  );

  return [...base, ...articles];
}
