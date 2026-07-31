"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { Minus, Plus, Heart, Truck, RotateCcw, FlaskConical } from "lucide-react";
import AddToCartButton from "./AddToCartButton";
import { toggleWishlist } from "@/lib/actions/storefront";
import { money } from "@/lib/format";

type VariantOption = {
  id: string;
  name: string;
  priceCents: number;
  compareAtCents: number | null;
  stock: number;
  isDefault: boolean;
};

type Props = {
  productId: string;
  slug: string;
  variants: VariantOption[];
  wishlisted: boolean;
  loggedIn: boolean;
  freeShippingThreshold: string;
};

export default function PurchasePanel({ productId, slug, variants, wishlisted, loggedIn, freeShippingThreshold }: Props) {
  const [selectedId, setSelectedId] = useState(
    (variants.find((v) => v.isDefault) ?? variants[0])?.id
  );
  const [qty, setQty] = useState(1);
  const [saved, setSaved] = useState(wishlisted);
  const [, startTransition] = useTransition();
  const router = useRouter();

  const selected = variants.find((v) => v.id === selectedId) ?? variants[0];
  if (!selected) return null;

  const savePct = selected.compareAtCents
    ? Math.round((1 - selected.priceCents / selected.compareAtCents) * 100)
    : 0;

  const handleWishlist = () => {
    if (!loggedIn) {
      router.push(`/account/login?next=${encodeURIComponent(`/products/${slug}`)}`);
      return;
    }
    setSaved((s) => !s);
    startTransition(async () => {
      const res = await toggleWishlist(productId, `/products/${slug}`);
      if (!res.ok) setSaved(wishlisted);
    });
  };

  return (
    <div className="space-y-6">
      {/* 规格选择 */}
      <fieldset>
        <legend className="eyebrow mb-3 text-ink-soft">Size</legend>
        <div className="flex flex-wrap gap-2.5">
          {variants.map((v) => {
            const active = v.id === selectedId;
            return (
              <button
                key={v.id}
                type="button"
                onClick={() => setSelectedId(v.id)}
                aria-pressed={active}
                className={`rounded-2xl border px-5 py-3 text-left transition-all ${
                  active
                    ? "border-forest bg-forest text-cream shadow-lg"
                    : "border-line bg-white/60 text-ink hover:border-forest/50"
                }`}
              >
                <span className="block text-[0.92rem] font-semibold">{v.name}</span>
                <span className={`block text-[0.8rem] ${active ? "text-cream/75" : "text-ink-soft"}`}>
                  {money(v.priceCents)}
                  {v.compareAtCents ? (
                    <span className="ml-1.5 line-through opacity-60">{money(v.compareAtCents)}</span>
                  ) : null}
                </span>
              </button>
            );
          })}
        </div>
      </fieldset>

      {/* 价格 + 数量 + 加购 */}
      <div className="rounded-3xl border border-line bg-white/70 p-5">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="flex items-baseline gap-2.5">
              <span className="font-display text-[2rem] font-semibold leading-none text-ink">
                {money(selected.priceCents)}
              </span>
              {selected.compareAtCents ? (
                <span className="text-[1rem] text-ink-soft/70 line-through">{money(selected.compareAtCents)}</span>
              ) : null}
              {savePct > 0 ? (
                <span className="rounded-full bg-clay/10 px-2.5 py-1 text-[0.7rem] font-bold uppercase tracking-wide text-clay">
                  Save {savePct}%
                </span>
              ) : null}
            </p>
            <p className={`mt-2 text-[0.8rem] font-medium ${selected.stock > 0 ? "text-forest-mid" : "text-clay"}`}>
              {selected.stock > 10 ? "In stock — ships within 1 business day" : selected.stock > 0 ? `Only ${selected.stock} left in stock` : "Out of stock"}
            </p>
          </div>

          <div className="flex items-center rounded-full border border-line bg-white">
            <button
              type="button"
              aria-label="Decrease quantity"
              onClick={() => setQty((q) => Math.max(1, q - 1))}
              className="grid size-10 place-items-center text-ink-soft transition-colors hover:text-ink disabled:opacity-40"
              disabled={qty <= 1}
            >
              <Minus className="size-3.5" />
            </button>
            <span className="w-8 text-center text-[0.95rem] font-semibold tabular-nums">{qty}</span>
            <button
              type="button"
              aria-label="Increase quantity"
              onClick={() => setQty((q) => Math.min(99, q + 1))}
              className="grid size-10 place-items-center text-ink-soft transition-colors hover:text-ink"
            >
              <Plus className="size-3.5" />
            </button>
          </div>
        </div>

        <div className="mt-4 flex items-center gap-3">
          <AddToCartButton variantId={selected.id} qty={qty} disabled={selected.stock <= 0} className="flex-1" />
          <button
            type="button"
            onClick={handleWishlist}
            aria-label={saved ? "Remove from wishlist" : "Save to wishlist"}
            aria-pressed={saved}
            className={`grid size-12 shrink-0 place-items-center rounded-full border transition-all active:scale-95 ${
              saved ? "border-clay bg-clay/10 text-clay" : "border-line bg-white text-ink-soft hover:border-clay/60 hover:text-clay"
            }`}
          >
            <Heart className="size-5" strokeWidth={2} fill={saved ? "currentColor" : "none"} />
          </button>
        </div>
      </div>

      {/* 信任条 */}
      <ul className="grid grid-cols-3 gap-2 text-center text-[0.72rem] font-medium text-ink-soft">
        <li className="flex flex-col items-center gap-1.5 rounded-2xl bg-cream-warm px-2 py-3">
          <Truck className="size-4 text-forest-mid" strokeWidth={1.8} />
          Free US shipping {freeShippingThreshold}+
        </li>
        <li className="flex flex-col items-center gap-1.5 rounded-2xl bg-cream-warm px-2 py-3">
          <RotateCcw className="size-4 text-forest-mid" strokeWidth={1.8} />
          30-day money-back
        </li>
        <li className="flex flex-col items-center gap-1.5 rounded-2xl bg-cream-warm px-2 py-3">
          <FlaskConical className="size-4 text-forest-mid" strokeWidth={1.8} />
          Third-party tested
        </li>
      </ul>
    </div>
  );
}
