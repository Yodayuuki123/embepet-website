"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { ShoppingBag, Check, Loader2 } from "lucide-react";
import { addToCart } from "@/lib/actions/cart";

type Props = {
  variantId: string;
  qty?: number;
  disabled?: boolean;
  variant?: "icon" | "full";
  label?: string;
  className?: string;
};

export default function AddToCartButton({
  variantId,
  qty = 1,
  disabled,
  variant = "full",
  label = "Add to cart",
  className = "",
}: Props) {
  const [pending, startTransition] = useTransition();
  const [added, setAdded] = useState(false);
  const router = useRouter();

  const handle = () => {
    startTransition(async () => {
      const res = await addToCart(variantId, qty);
      if (res.ok) {
        setAdded(true);
        router.refresh();
        setTimeout(() => setAdded(false), 1800);
      }
    });
  };

  if (variant === "icon") {
    return (
      <button
        onClick={handle}
        disabled={disabled || pending}
        aria-label={label}
        className={`grid size-10 place-items-center rounded-full bg-forest text-cream shadow-lg transition-all hover:scale-105 active:scale-95 disabled:opacity-50 ${className}`}
      >
        {pending ? (
          <Loader2 className="size-4 animate-spin" />
        ) : added ? (
          <Check className="size-4" strokeWidth={2.4} />
        ) : (
          <ShoppingBag className="size-4" strokeWidth={2} />
        )}
      </button>
    );
  }

  return (
    <button
      onClick={handle}
      disabled={disabled || pending}
      className={`btn-liquid inline-flex h-12 items-center justify-center gap-2 rounded-full bg-forest px-7 text-[0.95rem] font-semibold text-cream transition-transform active:scale-[0.98] disabled:opacity-50 ${className}`}
      style={{ "--liquid": "var(--color-forest-mid)" } as React.CSSProperties}
    >
      {pending ? (
        <Loader2 className="size-4 animate-spin" />
      ) : added ? (
        <>
          <Check className="size-4" strokeWidth={2.4} /> Added to cart
        </>
      ) : (
        <>
          <ShoppingBag className="size-4" strokeWidth={2} /> {disabled ? "Out of stock" : label}
        </>
      )}
    </button>
  );
}
