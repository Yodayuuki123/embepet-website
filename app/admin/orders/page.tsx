import Link from "next/link";
import { db } from "@/lib/db";
import { money, formatDateCN } from "@/lib/format";

export const dynamic = "force-dynamic";

const STATUS_TABS = [
  { key: "", label: "全部" },
  { key: "PENDING", label: "待支付" },
  { key: "PAID", label: "已支付" },
  { key: "FULFILLED", label: "备货中" },
  { key: "SHIPPED", label: "已发货" },
  { key: "DELIVERED", label: "已送达" },
  { key: "CANCELLED", label: "已取消" },
];

const statusLabel: Record<string, string> = {
  PENDING: "待支付",
  PAID: "已支付",
  FULFILLED: "备货中",
  SHIPPED: "已发货",
  DELIVERED: "已送达",
  CANCELLED: "已取消",
  REFUNDED: "已退款",
};

const statusColor: Record<string, string> = {
  PENDING: "bg-amber-50 text-amber-700",
  PAID: "bg-emerald-50 text-emerald-700",
  FULFILLED: "bg-sky-50 text-sky-700",
  SHIPPED: "bg-indigo-50 text-indigo-700",
  DELIVERED: "bg-emerald-50 text-emerald-700",
  CANCELLED: "bg-black/6 text-black/50",
  REFUNDED: "bg-red-50 text-red-600",
};

export default async function AdminOrdersPage({
  searchParams,
}: {
  searchParams: Promise<{ status?: string }>;
}) {
  const { status } = await searchParams;
  const orders = await db.order.findMany({
    where: status ? { status } : undefined,
    include: { _count: { select: { items: true } } },
    orderBy: { createdAt: "desc" },
    take: 100,
  });

  return (
    <div>
      <h1 className="text-2xl font-bold">订单管理</h1>
      <div className="mt-5 flex flex-wrap gap-2">
        {STATUS_TABS.map((tab) => (
          <Link
            key={tab.key}
            href={tab.key ? `/admin/orders?status=${tab.key}` : "/admin/orders"}
            className={`rounded-full px-4 py-1.5 text-[0.85rem] transition-colors ${
              (status ?? "") === tab.key ? "bg-[#1d3f2f] text-white" : "bg-white text-black/60 hover:bg-black/5"
            }`}
          >
            {tab.label}
          </Link>
        ))}
      </div>

      <div className="mt-5 overflow-hidden rounded-2xl border border-black/8 bg-white">
        <table className="w-full text-[0.88rem]">
          <thead>
            <tr className="border-b border-black/8 text-left text-[0.78rem] text-black/45">
              <th className="px-5 py-3 font-medium">订单号</th>
              <th className="px-5 py-3 font-medium">客户</th>
              <th className="px-5 py-3 font-medium">商品数</th>
              <th className="px-5 py-3 font-medium">金额</th>
              <th className="px-5 py-3 font-medium">支付方式</th>
              <th className="px-5 py-3 font-medium">状态</th>
              <th className="px-5 py-3 font-medium">时间</th>
            </tr>
          </thead>
          <tbody>
            {orders.length === 0 ? (
              <tr><td colSpan={7} className="px-5 py-10 text-center text-black/40">没有符合条件的订单</td></tr>
            ) : null}
            {orders.map((o: any) => (
              <tr key={o.id} className="border-b border-black/4 last:border-0 hover:bg-black/2">
                <td className="px-5 py-3.5">
                  <Link href={`/admin/orders/${o.id}`} className="font-medium text-[#1d3f2f] hover:underline">
                    {o.number}
                  </Link>
                </td>
                <td className="px-5 py-3.5 text-black/70">{o.email}</td>
                <td className="px-5 py-3.5">{o._count.items}</td>
                <td className="px-5 py-3.5 font-medium">{money(o.totalCents)}</td>
                <td className="px-5 py-3.5 text-black/60">{o.paymentMethod === "stripe" ? "Stripe" : "模拟支付"}</td>
                <td className="px-5 py-3.5">
                  <span className={`rounded-full px-2.5 py-1 text-[0.75rem] ${statusColor[o.status] ?? "bg-black/6"}`}>
                    {statusLabel[o.status] ?? o.status}
                  </span>
                </td>
                <td className="px-5 py-3.5 text-black/50">{formatDateCN(o.createdAt)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
