import { db } from "@/lib/db";
import { money, formatDateCN } from "@/lib/format";
import CouponEditor from "@/components/admin/CouponEditor";

export const dynamic = "force-dynamic";

export default async function AdminCouponsPage() {
  const coupons = await db.coupon.findMany({ orderBy: { createdAt: "desc" } });

  return (
    <div>
      <h1 className="text-2xl font-bold">优惠券</h1>
      <p className="mt-1 text-[0.88rem] text-black/45">结账时输入代码抵扣，percent 为百分比折扣、fixed 为固定金额（美元）</p>

      <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_360px]">
        <div className="overflow-hidden rounded-2xl border border-black/8 bg-white">
          <table className="w-full text-[0.88rem]">
            <thead>
              <tr className="border-b border-black/8 text-left text-[0.78rem] text-black/45">
                <th className="px-5 py-3 font-medium">代码</th>
                <th className="px-5 py-3 font-medium">优惠</th>
                <th className="px-5 py-3 font-medium">门槛</th>
                <th className="px-5 py-3 font-medium">已用/上限</th>
                <th className="px-5 py-3 font-medium">截止</th>
                <th className="px-5 py-3 font-medium">状态</th>
              </tr>
            </thead>
            <tbody>
              {coupons.length === 0 ? (
                <tr><td colSpan={6} className="px-5 py-10 text-center text-black/40">还没有优惠券</td></tr>
              ) : null}
              {coupons.map((c: any) => (
                <tr key={c.id} className="border-b border-black/4 last:border-0">
                  <td className="px-5 py-3.5 font-mono font-semibold">{c.code}</td>
                  <td className="px-5 py-3.5">{c.kind === "percent" ? `${c.value}% off` : `${money(c.value)} off`}</td>
                  <td className="px-5 py-3.5 text-black/60">{c.minSubtotalCents > 0 ? `满 ${money(c.minSubtotalCents)}` : "无"}</td>
                  <td className="px-5 py-3.5 text-black/60">{c.usedCount}/{c.maxUses ?? "∞"}</td>
                  <td className="px-5 py-3.5 text-black/60">{c.endsAt ? formatDateCN(c.endsAt) : "长期"}</td>
                  <td className="px-5 py-3.5">
                    <span className={`rounded-full px-2.5 py-1 text-[0.75rem] ${c.active ? "bg-emerald-50 text-emerald-700" : "bg-black/6 text-black/50"}`}>
                      {c.active ? "生效中" : "已停用"}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <CouponEditor />
      </div>
    </div>
  );
}
