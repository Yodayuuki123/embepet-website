"use client";

import { useActionState, useState } from "react";
import { Star } from "lucide-react";
import { submitReview, type FormState } from "@/lib/actions/storefront";

export default function ReviewForm({ productId }: { productId: string }) {
  const [state, action, pending] = useActionState<FormState, FormData>(submitReview, null);
  const [rating, setRating] = useState(5);
  const [hover, setHover] = useState(0);

  if (state?.success) {
    return (
      <div className="rounded-3xl border border-forest/20 bg-forest/5 p-6 text-center">
        <p className="font-display text-lg text-forest">Thank you!</p>
        <p className="mt-1 text-[0.9rem] text-ink-soft">{state.success}</p>
      </div>
    );
  }

  return (
    <form action={action} className="space-y-4 rounded-3xl border border-line bg-white/70 p-6">
      <input type="hidden" name="productId" value={productId} />
      <input type="hidden" name="rating" value={rating} />

      <div>
        <p className="eyebrow mb-2 text-ink-soft">Your rating</p>
        <div className="flex gap-1" role="radiogroup" aria-label="Rating">
          {[1, 2, 3, 4, 5].map((n) => (
            <button
              key={n}
              type="button"
              role="radio"
              aria-checked={rating === n}
              aria-label={`${n} star${n > 1 ? "s" : ""}`}
              onClick={() => setRating(n)}
              onMouseEnter={() => setHover(n)}
              onMouseLeave={() => setHover(0)}
              className="p-0.5 transition-transform hover:scale-110"
            >
              <Star
                className="size-6"
                strokeWidth={1.6}
                fill={(hover || rating) >= n ? "var(--color-amber)" : "none"}
                stroke={(hover || rating) >= n ? "var(--color-amber)" : "var(--color-ink-soft)"}
              />
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1.5 block text-[0.82rem] font-medium text-ink">Your name *</span>
          <input name="authorName" required maxLength={60} className="w-full rounded-xl border border-line bg-white px-4 py-2.5 text-[0.92rem] outline-none transition-colors focus:border-forest" placeholder="Jane D." />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-[0.82rem] font-medium text-ink">Pet&apos;s name</span>
          <input name="petName" maxLength={60} className="w-full rounded-xl border border-line bg-white px-4 py-2.5 text-[0.92rem] outline-none transition-colors focus:border-forest" placeholder="Buddy" />
        </label>
      </div>

      <label className="block">
        <span className="mb-1.5 block text-[0.82rem] font-medium text-ink">Title *</span>
        <input name="title" required maxLength={120} className="w-full rounded-xl border border-line bg-white px-4 py-2.5 text-[0.92rem] outline-none transition-colors focus:border-forest" placeholder="Sums up your experience" />
      </label>

      <label className="block">
        <span className="mb-1.5 block text-[0.82rem] font-medium text-ink">Review *</span>
        <textarea name="body" required minLength={10} maxLength={2000} rows={4} className="w-full resize-y rounded-xl border border-line bg-white px-4 py-2.5 text-[0.92rem] outline-none transition-colors focus:border-forest" placeholder="How did it work for your pet?" />
      </label>

      {state?.error ? <p className="text-[0.85rem] font-medium text-clay">{state.error}</p> : null}

      <button
        type="submit"
        disabled={pending}
        className="btn-liquid inline-flex h-11 items-center justify-center rounded-full bg-forest px-7 text-[0.9rem] font-semibold text-cream disabled:opacity-60"
        style={{ "--liquid": "var(--color-forest-mid)" } as React.CSSProperties}
      >
        {pending ? "Submitting…" : "Submit review"}
      </button>
    </form>
  );
}
