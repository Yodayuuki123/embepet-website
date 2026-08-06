import Link from "next/link";
import { Plus } from "lucide-react";
import { db } from "@/lib/db";
import { formatDateCN } from "@/lib/format";

export const dynamic = "force-dynamic";

const CATEGORY_LABEL: Record<string, string> = {
  guides: "指南",
  nutrition: "营养",
  behavior: "行为",
  news: "资讯",
};

export default async function AdminPostsPage() {
  const posts = await db.post.findMany({ orderBy: { publishedAt: "desc" } });

  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">博客内容</h1>
          <p className="mt-1 text-[0.88rem] text-black/45">Learn Hub 文章（SEO/GEO 主阵地），共 {posts.length} 篇</p>
        </div>
        <Link
          href="/admin/posts/new"
          className="inline-flex h-10 items-center gap-2 rounded-xl bg-[#1d3f2f] px-4 text-[0.9rem] font-medium text-white hover:opacity-90"
        >
          <Plus size={16} /> 写新文章
        </Link>
      </div>

      <div className="mt-6 overflow-hidden rounded-2xl border border-black/8 bg-white">
        <table className="w-full text-[0.88rem]">
          <thead>
            <tr className="border-b border-black/8 text-left text-[0.78rem] text-black/45">
              <th className="px-5 py-3 font-medium">标题</th>
              <th className="px-5 py-3 font-medium">分类</th>
              <th className="px-5 py-3 font-medium">类型</th>
              <th className="px-5 py-3 font-medium">状态</th>
              <th className="px-5 py-3 font-medium">发布时间</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post: any) => (
              <tr key={post.id} className="border-b border-black/4 last:border-0 hover:bg-black/2">
                <td className="max-w-md px-5 py-3.5">
                  <Link href={`/admin/posts/${post.id}`} className="font-medium text-[#1d3f2f] hover:underline">
                    {post.title}
                  </Link>
                  <p className="mt-0.5 truncate text-[0.75rem] text-black/40">/learn/{post.slug}</p>
                </td>
                <td className="px-5 py-3.5 text-black/60">{CATEGORY_LABEL[post.category] ?? post.category}</td>
                <td className="px-5 py-3.5">
                  {post.pillar ? (
                    <span className="rounded-full bg-amber-50 px-2.5 py-1 text-[0.75rem] text-amber-700">支柱长文</span>
                  ) : (
                    <span className="text-[0.8rem] text-black/45">短文</span>
                  )}
                </td>
                <td className="px-5 py-3.5">
                  <span className={`rounded-full px-2.5 py-1 text-[0.75rem] ${post.published ? "bg-emerald-50 text-emerald-700" : "bg-black/6 text-black/50"}`}>
                    {post.published ? "已发布" : "草稿"}
                  </span>
                </td>
                <td className="px-5 py-3.5 text-black/50">{formatDateCN(post.publishedAt)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
