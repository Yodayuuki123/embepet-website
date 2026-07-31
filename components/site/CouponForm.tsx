"use client";

import { useActionState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { Tag, X } from "lucide-react";
import { applyCoupon, removeCoupon, type CouponState } from "@/lib/actions/cart";

export default function CouponForm({ applied }: { applied: { code: string; discountCents: number } | null }) {
  const [state, action, pending] = useActionState<CouponState, FormData>(applyCoupon, null);
  const [removing, startRemove] = useTransition();
  const router = useRouter();

  if (applied) {
    return (
      <div className="flex items-center justify-between rounded-xl border border-forest/25 bg-forest/5 px-4 py-2.5">
        <p className="flex items-center gap-2 text-[0.9rem] font-medium text-forest">
          <Tag className="size-4" /> {applied.code}
        </p>
        <button
          onClick={() =>
            startRemove(async () => {
              await removeCoupon();
              router.refresh();
            })
          }
          disabled={removing}
          aria-label="Remove coupon"
          className="grid size-7 place-items-center rounded-full text-ink-soft hover:bg-forest/10"
        >
          <X className="size-3.5" />
        </button>
      </div>
    );
  }

  return (
    <form action={action}>
      <div className="flex items-center gap-2 rounded-xl border border-line bg-white/60 p-1 pl-4 focus-within:border-forest/50">
        <Tag className="size-4 shrink-0 text-ink-soft" />
        <input
          name="code"
          placeholder="Discount code"
          aria-label="Discount code"
          className="w-full bg-transparent py-2 text-[0.9rem] uppercase tracking-wide outline-none placeholder:normal-case placeholder:tracking-normal placeholder:text-ink-soft/60"
        />
        <button
          disabled={pending}
          className="shrink-0 rounded-lg bg-ink px-4 py-2 text-[0.82rem] font-semibold text-cream transition-opacity disabled:opacity-50"
        >
          Apply
        </button>
      </div>
      {state?.error ? <p className="mt-1.5 pl-1 text-[0.82rem] text-clay">{state.error}</p> : null}
      {state?.success ? <p className="mt-1.5 pl-1 text-[0.82rem] text-forest-mid">{state.success}</p> : null}
    </form>
  );
}
