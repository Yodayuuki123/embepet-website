import { cookies } from "next/headers";
import { db } from "./db";

export type AppliedCoupon = {
  code: string;
  kind: string;
  value: number;
  discountCents: number;
};

export async function getAppliedCoupon(subtotalCents: number): Promise<AppliedCoupon | null> {
  const store = await cookies();
  const code = store.get("embepet_coupon")?.value;
  if (!code) return null;
  const coupon = await db.coupon.findUnique({ where: { code } });
  if (
    !coupon ||
    !coupon.active ||
    (coupon.endsAt && coupon.endsAt < new Date()) ||
    (coupon.maxUses != null && coupon.usedCount >= coupon.maxUses) ||
    subtotalCents < coupon.minSubtotalCents
  ) {
    return null;
  }
  const discountCents =
    coupon.kind === "percent"
      ? Math.round((subtotalCents * coupon.value) / 100)
      : Math.min(coupon.value, subtotalCents);
  return { code: coupon.code, kind: coupon.kind, value: coupon.value, discountCents };
}
