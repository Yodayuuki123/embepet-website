"use client";

import { useActionState } from "react";
import { updateOrder, type AdminFormState } from "@/lib/actions/admin";
import { SubmitButton, FormMsg, Field, inputCls } from "./ui";

const STATUSES = [
  ["PENDING", "待支付"],
  ["PAID", "已支付"],
  ["FULFILLED", "备货中"],
  ["SHIPPED", "已发货"],
  ["DELIVERED", "已送达"],
  ["CANCELLED", "已取消"],
  ["REFUNDED", "已退款"],
] as const;

export default function OrderUpdateForm({
  order,
}: {
  order: { id: string; status: string; trackingNumber: string | null; carrier: string | null; adminNotes: string | null };
}) {
  const [state, action] = useActionState<AdminFormState, FormData>(updateOrder, null);

  return (
    <form action={action} className="h-fit space-y-4 rounded-2xl border border-black/8 bg-white p-5">
      <p className="font-semibold">订单处理</p>
      <input type="hidden" name="id" value={order.id} />
      <Field label="订单状态">
        <select name="status" defaultValue={order.status} className={inputCls}>
          {STATUSES.map(([value, label]) => (
            <option key={value} value={value}>{label}</option>
          ))}
        </select>
      </Field>
      <Field label="物流公司">
        <input name="carrier" defaultValue={order.carrier ?? ""} placeholder="如 USPS / FedEx / 云途" className={inputCls} />
      </Field>
      <Field label="物流单号">
        <input name="trackingNumber" defaultValue={order.trackingNumber ?? ""} className={inputCls} />
      </Field>
      <Field label="内部备注（客户不可见）">
        <textarea name="adminNotes" defaultValue={order.adminNotes ?? ""} rows={4} className={inputCls} />
      </Field>
      <SubmitButton className="w-full">更新订单</SubmitButton>
      <FormMsg state={state} />
    </form>
  );
}
