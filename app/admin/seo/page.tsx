import { db } from "@/lib/db";
import { SITE_URL } from "@/lib/seo";
import RedirectManager from "@/components/admin/RedirectManager";

export const dynamic = "force-dynamic";

export default async function AdminSeoPage() {
  const redirects = await db.redirect.findMany({ orderBy: { fromPath: "asc" } });

  const seoLinks = [
    { href: "/sitemap.xml", label: "sitemap.xml", desc: "全站地图（自动包含所有语言版本的产品/集合/文章页）" },
    { href: "/robots.txt", label: "robots.txt", desc: "爬虫规则（已显式放行 GPTBot、ClaudeBot、PerplexityBot 等 AI 爬虫）" },
    { href: "/llms.txt", label: "llms.txt", desc: "给 AI 引擎的精选站点导航（GEO）" },
    { href: "/llms-full.txt", label: "llms-full.txt", desc: "AI 引擎完整版内容索引（GEO）" },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold">SEO 工具</h1>
      <p className="mt-1 text-[0.88rem] text-black/45">技术 SEO 文件与 301 重定向管理</p>

      <div className="mt-6 grid gap-3 md:grid-cols-2">
        {seoLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            target="_blank"
            className="rounded-2xl border border-black/8 bg-white p-5 transition-shadow hover:shadow-md"
          >
            <p className="font-mono font-semibold text-[#1d3f2f]">{SITE_URL}{link.href}</p>
            <p className="mt-1.5 text-[0.85rem] text-black/55">{link.desc}</p>
          </a>
        ))}
      </div>

      <div className="mt-8">
        <h2 className="text-lg font-bold">301 重定向</h2>
        <p className="mt-1 text-[0.85rem] text-black/45">
          改过产品 slug 或下架页面后，把旧路径重定向到新路径，保住已积累的搜索权重
        </p>
        <div className="mt-4">
          <RedirectManager
            redirects={redirects.map((r: any) => ({ id: r.id, fromPath: r.fromPath, toPath: r.toPath, permanent: r.permanent }))}
          />
        </div>
      </div>
    </div>
  );
}
