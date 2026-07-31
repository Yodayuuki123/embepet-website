"use client";

import { useActionState } from "react";
import { Loader2, Lock } from "lucide-react";
import { placeOrder, type CheckoutState } from "@/lib/actions/checkout";

const field =
  "w-full rounded-xl border border-line bg-white/70 px-4 py-3 text-[0.95rem] outline-none transition-colors placeholder:text-ink-soft/50 focus:border-forest/60";

type Props = {
  defaults?: { email?: string; fullName?: string; line1?: string; line2?: string; city?: string; state?: string; zip?: string };
  payLabel: string;
};

export default function CheckoutForm({ defaults = {}, payLabel }: Props) {
  const [state, action, pending] = useActionState<CheckoutState, FormData>(placeOrder, null);

  return (
    <form action={action} className="space-y-7">
      <section>
        <h2 className="display-3 mb-4">Contact</h2>
        <input
          className={field}
          type="email"
          name="email"
          required
          placeholder="Email address"
          defaultValue={defaults.email}
          autoComplete="email"
        />
      </section>

      <section>
        <h2 className="display-3 mb-4">Shipping address</h2>
        <div className="grid gap-3">
          <input className={field} name="fullName" required placeholder="Full name" defaultValue={defaults.fullName} autoComplete="name" />
          <input className={field} name="line1" required placeholder="Street address" defaultValue={defaults.line1} autoComplete="address-line1" />
          <input className={field} name="line2" placeholder="Apartment, suite, etc. (optional)" defaultValue={defaults.line2} autoComplete="address-line2" />
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            <input className={field} name="city" required placeholder="City" defaultValue={defaults.city} autoComplete="address-level2" />
            <input className={field} name="state" required placeholder="State" defaultValue={defaults.state} autoComplete="address-level1" />
            <input className={`${field} col-span-2 sm:col-span-1`} name="zip" required placeholder="ZIP code" defaultValue={defaults.zip} autoComplete="postal-code" />
          </div>
        </div>
      </section>

      {state?.error ? (
        <p className="rounded-xl border border-clay/30 bg-clay/8 px-4 py-3 text-[0.9rem] text-clay">{state.error}</p>
      ) : null}

      <button
        disabled={pending}
        className="btn-liquid flex h-14 w-full items-center justify-center gap-2 rounded-full bg-forest text-[1.02rem] font-semibold text-cream disabled:opacity-60"
        style={{ "--liquid": "var(--color-forest-mid)" } as React.CSSProperties}
      >
        {pending ? <Loader2 className="size-4 animate-spin" /> : <Lock className="size-4" strokeWidth={2.2} />}
        {pending ? "Processing…" : payLabel}
      </button>
      <p className="text-center text-[0.78rem] leading-relaxed text-ink-soft">
        Your payment is processed securely. We never store card details on our servers.
      </p>
    </form>
  );
}
