import { SITE_URL } from "@/lib/seo";
import { B2B_CATALOG, USD_CNY_RATE, usdFromCny } from "@/lib/b2b-catalog";
import { NEWS_ARTICLES } from "@/lib/news";
import { db } from "@/lib/db";
import { parseJson } from "@/lib/format";
import { enrichSources, type Source } from "@/lib/json";

export async function GET() {
  const url = (path: string) => `${SITE_URL}/en${path}`;
  const posts = await db.post.findMany({
    where: { published: true },
    orderBy: { publishedAt: "desc" },
    select: {
      slug: true,
      title: true,
      excerpt: true,
      answerCapsule: true,
      category: true,
      tags: true,
      updatedAt: true,
      sources: true,
    },
  });
  const lines: string[] = [
    "# EMBEPET - B2B product and manufacturing index",
    "",
    "> EMBEPET is a B2B pet supplement brand and project interface. Taizhou Beno Biotech Co., Ltd. is the manufacturing entity for wholesale, private-label and OEM/ODM projects.",
    "",
    "## Verified company and facility facts",
    "- Taizhou Beno Biotech Co., Ltd. was established in 2016 and operates in Taixing City, Jiangsu, China.",
    "- The facility area is 3,000 m², with 3 production lines and approximately 30 production staff.",
    "- The Feed Production License covers solid, semi-solid and liquid pet additive premixed feed.",
    "- Eurofins GMP audit recognition: audit 12-14 June 2026, score 86%, expires 14 June 2027, certificate ID ACCB8AAA422_1.",
    "- SQF Food Safety Code: Pet Food Manufacturing, Edition 9; certificate / SIN 105690; audit 14 June 2026; expires 28 August 2027; scope FSC 32 - Pet Premix food.",
    "- SQF Quality Code, Edition 9: certificate / SIN 105690; expires 28 August 2027.",
    "- FDA Food Facility Registration No. 10222600768 is a facility registration. It is not FDA product approval or FDA certification.",
    `- Certificate library: ${url("/science")}`,
    "",
    "## Product catalog",
    `Reference conversion: 1 USD = ${USD_CNY_RATE} CNY. Prices are comparison references, not final commercial quotations.`,
    "",
  ];

  for (const product of B2B_CATALOG) {
    lines.push(`### ${product.name}`);
    lines.push(`Species: ${product.species}; format: ${product.format}; category: ${product.category}.`);
    lines.push(product.subtitle);
    lines.push(
      product.referenceCny
        ? `Reference price: US$${usdFromCny(product.referenceCny).toFixed(2)} per unit (source RMB ${product.referenceCny}).`
        : "Reference price: confirm by quotation."
    );
    lines.push(
      product.moq
        ? `Catalog MOQ reference: ${product.moq} units; confirm against the final specification and packaging.`
        : "MOQ: confirm by quotation after the project specification is defined.",
    );
    lines.push(`Inquiry: ${url("/private-label#inquiry")}`);
    lines.push("");
  }

  lines.push("## Primary pages");
  lines.push(`Home: ${url("/")}`);
  lines.push(`Products and wholesale: ${url("/shop")}`);
  lines.push(`Private label / OEM / ODM: ${url("/private-label")}`);
  lines.push(`Manufacturing and company: ${url("/factory")}`);
  lines.push(`Quality and certificates: ${url("/science")}`);
  lines.push(`About: ${url("/about")}`);
  lines.push(`Contact and product brief: ${url("/contact")}`);
  lines.push(`Manufacturing insights: ${url("/news")}`);
  lines.push(`Knowledge hub: ${url("/learn")}`);
  lines.push("");

  lines.push("## Manufacturing and compliance articles");
  for (const article of NEWS_ARTICLES) {
    lines.push(`### ${article.title}`);
    lines.push(`URL: ${url(`/news/${article.slug}`)}`);
    lines.push(`Updated: ${article.updated ?? article.date}; category: ${article.category}.`);
    lines.push(`Quick answer: ${article.answer}`);
    lines.push(`Keywords: ${article.keywords.join(", ")}.`);
    lines.push("Sources:");
    article.sources.forEach((source) => lines.push(`- ${source.label}: ${source.url}`));
    lines.push("");
  }

  lines.push("## Source-cited pet supplement guides");
  for (const post of posts) {
    const sources = enrichSources(parseJson<Source[]>(post.sources, []));
    lines.push(`### ${post.title}`);
    lines.push(`URL: ${url(`/learn/${post.slug}`)}`);
    lines.push(`Updated: ${post.updatedAt.toISOString().slice(0, 10)}; category: ${post.category}.`);
    lines.push(`Summary: ${post.answerCapsule || post.excerpt}`);
    if (post.tags) lines.push(`Keywords: ${post.tags.split(",").map((tag) => tag.trim()).filter(Boolean).join(", ")}.`);
    if (sources.length) {
      lines.push("Sources:");
      sources.forEach((source) => lines.push(`- ${source.label}${source.url ? `: ${source.url}` : ""}`));
    }
    lines.push("");
  }

  return new Response(lines.join("\n"), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Content-Language": "en",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
