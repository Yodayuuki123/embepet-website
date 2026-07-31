"use client";

import { useActionState } from "react";
import { saveCoupon, type AdminFormState } from "@/lib/actions/admin";
import { SubmitButton, FormMsg, Field, inputCls } from "./ui";

export default function CouponEditor() {
  const [state, action] = useActionState<AdminFormState, FormData>(saveCoupon, null);

  return (
    <form action={action} className="h-fit space-y-4 rounded-2xl border border-black/8 bg-white p-5">
      <p className="font-semibold">新建优惠券</p>
      <Field label="代码（自动转大写）">
        <input name="code" required placeholder="WELCOME10" className={inputCls} />
      </Field>
      <div className="grid grid-cols-2 gap-3">
        <Field label="类型">
          <select name="kind" className={inputCls}>
            <option value="percent">百分比折扣</option>
            <option value="fixed">固定金额（美分）</option>
          </select>
        </Field>
        <Field label="面值" hint="percent 填 10 = 9折；fixed 填 500 = 减$5">
          <input name="value" type="number" required className={inputCls} />
        </Field>
        <Field label="满减门槛（美元）">
          <input name="minSubtotal" type="number" defaultValue={0} className={inputCls} />
        </Field>
        <Field label="使用次数上限（留空不限）">
          <input name="maxUses" type="number" className={inputCls} />
        </Field>
      </div>
      <Field label="截止日期（留空长期有效）">
        <input name="endsAt" type="date" className={inputCls} />
      </Field>
      <label className="flex items-center gap-2 text-[0.88rem]">
        <input type="checkbox" name="active" defaultChecked className="size-4" />
        立即生效
      </label>
      <SubmitButton className="w-full">创建优惠券</SubmitButton>
      <FormMsg state={state} />
    </form>
  );
}
