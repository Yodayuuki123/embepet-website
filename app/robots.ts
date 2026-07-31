import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

/**
 * robots.txt：
 * - 常规搜索引擎全站放行（除后台/账户/结算等私有路径）
 * - 显式放行主流 AI 爬虫（GEO：确保 ChatGPT/Claude/Perplexity/Gemini 能抓取引用）
 */
export default function robots(): MetadataRoute.Robots {
  const disallow = ["/admin", "/api/", "/*/account", "/*/cart", "/*/checkout"];

  const aiBots = [
    "GPTBot",
    "OAI-SearchBot",
    "ChatGPT-User",
    "ClaudeBot",
    "Claude-User",
    "Claude-SearchBot",
    "PerplexityBot",
    "Perplexity-User",
    "Google-Extended",
    "Applebot-Extended",
    "Amazonbot",
    "Meta-ExternalAgent",
    "Bytespider",
    "cohere-ai",
  ];

  return {
    rules: [
      { userAgent: "*", allow: "/", disallow },
      ...aiBots.map((bot) => ({ userAgent: bot, allow: "/" as const, disallow })),
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
