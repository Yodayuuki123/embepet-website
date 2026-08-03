import Link from "next/link";
import { db } from "@/lib/db";
import { money, formatDateCN } from "@/lib/format";
import SalesChart from "@/components/admin/SalesChart";

export const dynamic = "force-dynamic";

const PAID_STATUSES = ["PAID", "FULFILLED", "SHIPPED", "DELIVERED"];

export default async function AdminDashboard() {
  // Server-rendered dashboard range is intentionally based on request time.
  // eslint-disable-next-line react-hooks/purity
  const since30 = new Date(Date.now() - 30 * 24 * 3600 * 1000);

  const [revenueAgg, orderCount, pendingInquiries, pendingReviews, recentOrders, paidOrders, topItems] =
    await Promise.all([
      db.order.aggregate({ where: { status: { in: PAID_STATUSES } }, _sum: { totalCents: true } }),
      db.order.count(),
      db.inquiry.count({ where: { status: "NEW" } }),
      db.review.count({ where: { status: "PENDING" } }),
      db.order.findMany({ orderBy: { createdAt: "desc" }, take: 8 }),
      db.order.findMany({
        where: { status: { in: PAID_STATUSES }, createdAt: { gte: since30 } },
        select: { totalCents: true, createdAt: true },
      }),
      db.orderItem.groupBy({
        by: ["productName"],
        _sum: { qty: true },
        orderBy: { _sum: { qty: "desc" } },
        take: 5,
      }),
    ]);

  // 近30天按日聚合
  const days: { date: string; total: number }[] = [];
  for (let i = 29; i >= 0; i--) {
    // eslint-disable-next-line react-hooks/purity
    const d = new Date(Date.now() - i * 24 * 3600 * 1000);
    const key = `${d.getMonth() + 1}/${d.getDate()}`;
    days.push({ date: key, total: 0 });
  }
  for (const order of paidOrders) {
    const d = new Date(order.createdAt);
    const key = `${d.getMonth() + 1}/${d.getDate()}`;
    const bucket = days.find((x) => x.date === key);
    if (bucket) bucket.total += order.totalCents / 100;
  }

  const stats = [
    { label: "累计销售额（已支付）", value: money(revenueAgg._sum.totalCents ?? 0) },
    { label: "订单总数", value: String(orderCount) },
    { label: "待处理询盘", value: String(pendingInquiries), href: "/admin/inquiries" },
    { label: "待审核评价", value: String(pendingReviews), href: "/admin/reviews" },
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

  return (
    <div>
      <h1 className="text-2xl font-bold">仪表盘</h1>
      <p className="mt-1 text-[0.88rem] text-black/45">店铺运营概览</p>

      <div className="mt-6 grid grid-cols-2 gap-4 lg:grid-cols-4">
        {stats.map((s) => (
          <Link
            key={s.label}
            href={s.href ?? "/admin/orders"}
            className="rounded-2xl border border-black/8 bg-white p-5 transition-shadow hover:shadow-md"
          >
            <p className="text-[0.8rem] text-black/45">{s.label}</p>
            <p className="mt-2 text-2xl font-bold">{s.value}</p>
          </Link>
        ))}
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-[1.6fr_1fr]">
        <div className="rounded-2xl border border-black/8 bg-white p-5">
          <h2 className="mb-4 font-semibold">近 30 天销售额（美元）</h2>
          <SalesChart data={days} />
        </div>
        <div className="rounded-2xl border border-black/8 bg-white p-5">
          <h2 className="mb-4 font-semibold">热销产品 Top 5</h2>
          <ul className="space-y-3">
            {topItems.length === 0 ? <li className="text-[0.85rem] text-black/40">暂无销售数据</li> : null}
            {topItems.map((item, i) => (
              <li key={item.productName} className="flex items-center gap-3">
                <span className="grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-[#1d3f2f]/8 text-[0.8rem] font-bold text-[#1d3f2f]">
                  {i + 1}
                </span>
                <span className="flex-1 truncate text-[0.88rem]">{item.productName}</span>
                <span className="text-[0.85rem] font-semibold">{item._sum.qty} 件</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-6 rounded-2xl border border-black/8 bg-white">
        <div className="flex items-center justify-between border-b border-black/8 px-5 py-4">
          <h2 className="font-semibold">最新订单</h2>
          <Link href="/admin/orders" className="text-[0.85rem] text-[#1d3f2f] hover:underline">
            查看全部 →
          </Link>
        </div>
        <table className="w-full text-[0.88rem]">
          <thead>
            <tr className="border-b border-black/8 text-left text-[0.78rem] text-black/45">
              <th className="px-5 py-3 font-medium">订单号</th>
              <th className="px-5 py-3 font-medium">客户</th>
              <th className="px-5 py-3 font-medium">金额</th>
              <th className="px-5 py-3 font-medium">状态</th>
              <th className="px-5 py-3 font-medium">时间</th>
            </tr>
          </thead>
          <tbody>
            {recentOrders.length === 0 ? (
              <tr><td colSpan={5} className="px-5 py-8 text-center text-black/40">暂无订单</td></tr>
            ) : null}
            {recentOrders.map((o) => (
              <tr key={o.id} className="border-b border-black/4 last:border-0 hover:bg-black/2">
                <td className="px-5 py-3">
                  <Link href={`/admin/orders/${o.id}`} className="font-medium text-[#1d3f2f] hover:underline">
                    {o.number}
                  </Link>
                </td>
                <td className="px-5 py-3 text-black/70">{o.email}</td>
                <td className="px-5 py-3 font-medium">{money(o.totalCents)}</td>
                <td className="px-5 py-3">
                  <span className="rounded-full bg-black/6 px-2.5 py-1 text-[0.75rem]">{statusLabel[o.status] ?? o.status}</span>
                </td>
                <td className="px-5 py-3 text-black/50">{formatDateCN(o.createdAt)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
