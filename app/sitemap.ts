import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";
import { NEWS_ARTICLES } from "@/lib/news";
import { db } from "@/lib/db";

type Entry = MetadataRoute.Sitemap[number];

function entry(
  path: string,
  lastModified: Date,
  priority: number,
  changeFrequency: Entry["changeFrequency"]
): Entry {
  const url = `${SITE_URL}/en${path === "/" ? "" : path}`;
  return {
    url,
    lastModified,
    priority,
    changeFrequency,
    alternates: { languages: { en: url, "x-default": url } },
  };
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteRevision = new Date("2026-08-03T00:00:00.000Z");
  const pages: [string, number, Entry["changeFrequency"]][] = [
    ["/", 1, "weekly"],
    ["/shop", 0.95, "monthly"],
    ["/private-label", 1, "monthly"],
    ["/factory", 0.9, "monthly"],
    ["/science", 0.9, "monthly"],
    ["/about", 0.8, "monthly"],
    ["/contact", 0.75, "monthly"],
    ["/news", 0.85, "monthly"],
    ["/learn", 0.85, "weekly"],
  ];

  const posts = await db.post.findMany({
    where: { published: true },
    select: { slug: true, publishedAt: true, updatedAt: true },
    orderBy: { publishedAt: "desc" },
  });

  const base = pages.map(([path, priority, frequency]) => entry(path, siteRevision, priority, frequency));
  const news = NEWS_ARTICLES.map((article) =>
    entry(`/news/${article.slug}`, new Date(article.updated ?? article.date), 0.8, "monthly"),
  );
  const guides = posts.map((post) =>
    entry(`/learn/${post.slug}`, post.updatedAt ?? post.publishedAt, post.slug.includes("complete-guide") ? 0.85 : 0.75, "monthly"),
  );

  return [...base, ...news, ...guides];
}
