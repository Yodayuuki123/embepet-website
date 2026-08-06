import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { db } from "@/lib/db";
import { money, formatDateCN, parseJson } from "@/lib/format";
import OrderUpdateForm from "@/components/admin/OrderUpdateForm";

export const dynamic = "force-dynamic";

type Address = {
  fullName?: string;
  line1?: string;
  line2?: string;
  city?: string;
  state?: string;
  zip?: string;
  country?: string;
};

export default async function AdminOrderDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const order = await db.order.findUnique({
    where: { id },
    include: { items: true, user: { select: { name: true, email: true } } },
  });
  if (!order) notFound();

  const address = parseJson<Address>(order.shippingAddress, {});

  return (
    <div>
      <Link href="/admin/orders" className="inline-flex items-center gap-1.5 text-[0.85rem] text-black/50 hover:text-black">
        <ArrowLeft size={15} /> 返回订单列表
      </Link>
      <div className="mt-3 flex items-baseline justify-between">
        <h1 className="text-2xl font-bold">{order.number}</h1>
        <p className="text-[0.85rem] text-black/45">{formatDateCN(order.createdAt)}</p>
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-[1.5fr_1fr]">
        <div className="space-y-4">
          {/* 商品明细 */}
          <div className="overflow-hidden rounded-2xl border border-black/8 bg-white">
            <p className="border-b border-black/8 px-5 py-3.5 font-semibold">商品明细</p>
            <table className="w-full text-[0.88rem]">
              <tbody>
                {order.items.map((item: any) => (
                  <tr key={item.id} className="border-b border-black/4 last:border-0">
                    <td className="px-5 py-3.5">
                      <p className="font-medium">{item.productName}</p>
                      <p className="text-[0.78rem] text-black/45">{item.variantName}</p>
                    </td>
                    <td className="px-5 py-3.5 text-black/60">× {item.qty}</td>
                    <td className="px-5 py-3.5 text-right font-medium">{money(item.unitCents * item.qty)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <dl className="space-y-1.5 border-t border-black/8 px-5 py-4 text-[0.88rem]">
              <div className="flex justify-between"><dt className="text-black/50">小计</dt><dd>{money(order.subtotalCents)}</dd></div>
              {order.discountCents > 0 ? (
                <div className="flex justify-between text-emerald-700">
                  <dt>优惠{order.couponCode ? `（${order.couponCode}）` : ""}</dt>
                  <dd>-{money(order.discountCents)}</dd>
                </div>
              ) : null}
              <div className="flex justify-between"><dt className="text-black/50">运费</dt><dd>{order.shippingCents === 0 ? "免运费" : money(order.shippingCents)}</dd></div>
              <div className="flex justify-between border-t border-black/8 pt-2 text-[1rem] font-bold"><dt>合计</dt><dd>{money(order.totalCents)}</dd></div>
            </dl>
          </div>

          {/* 收件信息 */}
          <div className="rounded-2xl border border-black/8 bg-white p-5">
            <p className="mb-3 font-semibold">收件信息</p>
            <div className="grid gap-1 text-[0.88rem] text-black/70">
              <p>{address.fullName}</p>
              <p>{address.line1}{address.line2 ? `, ${address.line2}` : ""}</p>
              <p>{address.city}, {address.state} {address.zip} {address.country}</p>
              <p className="mt-1 text-black/50">邮箱：{order.email}</p>
              {order.user ? <p className="text-black/50">注册用户：{order.user.name}</p> : <p className="text-black/50">游客下单</p>}
            </div>
            <p className="mt-3 text-[0.8rem] text-black/40">
              支付方式：{order.paymentMethod === "stripe" ? `Stripe（会话 ${order.stripeSessionId ?? "—"}）` : "开发模拟支付"}
            </p>
          </div>
        </div>

        {/* 状态管理 */}
        <OrderUpdateForm
          order={{
            id: order.id,
            status: order.status,
            trackingNumber: order.trackingNumber,
            carrier: order.carrier,
            adminNotes: order.adminNotes,
          }}
        />
      </div>
    </div>
  );
}
