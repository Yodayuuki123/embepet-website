import Link from "next/link";
import { Plus } from "lucide-react";
import { db } from "@/lib/db";
import { money } from "@/lib/format";

export const dynamic = "force-dynamic";

export default async function AdminProductsPage() {
  const products = await db.product.findMany({
    include: { variants: true, _count: { select: { reviews: true } } },
    orderBy: { createdAt: "asc" },
  });

  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">产品管理</h1>
          <p className="mt-1 text-[0.88rem] text-black/45">共 {products.length} 个产品</p>
        </div>
        <Link
          href="/admin/products/new"
          className="inline-flex h-10 items-center gap-2 rounded-xl bg-[#1d3f2f] px-4 text-[0.9rem] font-medium text-white hover:opacity-90"
        >
          <Plus size={16} /> 新建产品
        </Link>
      </div>

      <div className="mt-6 overflow-hidden rounded-2xl border border-black/8 bg-white">
        <table className="w-full text-[0.88rem]">
          <thead>
            <tr className="border-b border-black/8 text-left text-[0.78rem] text-black/45">
              <th className="px-5 py-3 font-medium">产品</th>
              <th className="px-5 py-3 font-medium">适用</th>
              <th className="px-5 py-3 font-medium">价格</th>
              <th className="px-5 py-3 font-medium">库存</th>
              <th className="px-5 py-3 font-medium">评分</th>
              <th className="px-5 py-3 font-medium">状态</th>
            </tr>
          </thead>
          <tbody>
            {products.map((p) => {
              const defaultVariant = p.variants.find((v) => v.isDefault) ?? p.variants[0];
              const stockSum = p.variants.reduce((s, v) => s + v.stock, 0);
              return (
                <tr key={p.id} className="border-b border-black/4 last:border-0 hover:bg-black/2">
                  <td className="px-5 py-3.5">
                    <Link href={`/admin/products/${p.id}`} className="font-medium text-[#1d3f2f] hover:underline">
                      {p.name}
                    </Link>
                    <p className="mt-0.5 text-[0.75rem] text-black/40">/{p.slug}</p>
                  </td>
                  <td className="px-5 py-3.5 text-black/60">
                    {p.species === "dog" ? "犬" : p.species === "cat" ? "猫" : "犬猫通用"}
                  </td>
                  <td className="px-5 py-3.5 font-medium">{defaultVariant ? money(defaultVariant.priceCents) : "—"}</td>
                  <td className="px-5 py-3.5">
                    <span className={stockSum < 50 ? "font-semibold text-red-600" : ""}>{stockSum}</span>
                  </td>
                  <td className="px-5 py-3.5 text-black/60">
                    {p.ratingCount > 0 ? `${p.ratingAvg} (${p.ratingCount})` : "—"}
                  </td>
                  <td className="px-5 py-3.5">
                    <span
                      className={`rounded-full px-2.5 py-1 text-[0.75rem] ${
                        p.status === "ACTIVE" ? "bg-emerald-50 text-emerald-700" : "bg-black/6 text-black/50"
                      }`}
                    >
                      {p.status === "ACTIVE" ? "已上架" : p.status === "DRAFT" ? "草稿" : "已下架"}
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
