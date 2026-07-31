"use client";

import Link from "@/components/site/A";
import { useTransition } from "react";
import { useRouter } from "next/navigation";
import { Minus, Plus, X, Loader2 } from "lucide-react";
import ProductVisual from "./ProductVisual";
import { setCartItemQty, removeCartItem } from "@/lib/actions/cart";
import { money } from "@/lib/format";
import { tone } from "@/lib/palette";

type Props = {
  item: {
    id: string;
    qty: number;
    variant: {
      id: string;
      name: string;
      priceCents: number;
      stock: number;
      product: { slug: string; name: string; format: string; colorKey: string; images: string };
    };
  };
};

export default function CartItemRow({ item }: Props) {
  const [pending, startTransition] = useTransition();
  const router = useRouter();
  const t = tone(item.variant.product.colorKey);

  const update = (qty: number) => {
    startTransition(async () => {
      await setCartItemQty(item.id, qty);
      router.refresh();
    });
  };

  const remove = () => {
    startTransition(async () => {
      await removeCartItem(item.id);
      router.refresh();
    });
  };

  let imageUrl: string | null = null;
  try {
    imageUrl = (JSON.parse(item.variant.product.images) as string[])[0] ?? null;
  } catch {
    imageUrl = null;
  }

  return (
    <div className={`flex gap-4 py-5 transition-opacity ${pending ? "opacity-50" : ""}`}>
      <Link
        href={`/products/${item.variant.product.slug}`}
        className="grid size-24 shrink-0 place-items-center rounded-2xl p-2.5"
        style={{ background: t.soft }}
      >
        <ProductVisual
          name={item.variant.product.name}
          format={item.variant.product.format}
          colorKey={item.variant.product.colorKey}
          imageUrl={imageUrl}
          className="h-full w-full"
        />
      </Link>

      <div className="flex min-w-0 flex-1 flex-col">
        <div className="flex items-start justify-between gap-3">
          <div>
            <Link
              href={`/products/${item.variant.product.slug}`}
              className="font-semibold leading-snug text-ink transition-colors hover:text-forest-mid"
            >
              {item.variant.product.name}
            </Link>
            <p className="mt-0.5 text-[0.82rem] text-ink-soft">{item.variant.name}</p>
          </div>
          <button
            onClick={remove}
            aria-label="Remove item"
            className="grid size-8 shrink-0 place-items-center rounded-full text-ink-soft transition-colors hover:bg-clay/10 hover:text-clay"
          >
            {pending ? <Loader2 className="size-3.5 animate-spin" /> : <X className="size-4" strokeWidth={1.8} />}
          </button>
        </div>

        <div className="mt-auto flex items-center justify-between pt-3">
          <div className="flex items-center rounded-full border border-line">
            <button
              onClick={() => update(item.qty - 1)}
              disabled={pending}
              aria-label="Decrease quantity"
              className="grid size-9 place-items-center rounded-full text-ink transition-colors hover:bg-forest/8 disabled:opacity-40"
            >
              <Minus className="size-3.5" />
            </button>
            <span className="w-8 text-center text-[0.92rem] font-semibold tabular-nums">{item.qty}</span>
            <button
              onClick={() => update(item.qty + 1)}
              disabled={pending || item.qty >= Math.min(item.variant.stock, 99)}
              aria-label="Increase quantity"
              className="grid size-9 place-items-center rounded-full text-ink transition-colors hover:bg-forest/8 disabled:opacity-40"
            >
              <Plus className="size-3.5" />
            </button>
          </div>
          <p className="font-semibold text-ink">{money(item.variant.priceCents * item.qty)}</p>
        </div>
      </div>
    </div>
  );
}
