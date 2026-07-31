import Link from "@/components/site/A";
import type { Product, Variant } from "@prisma/client";
import ProductVisual from "./ProductVisual";
import Stars from "./Stars";
import AddToCartButton from "./AddToCartButton";
import { money, parseJson } from "@/lib/format";
import { tone, speciesLabel } from "@/lib/palette";

type Props = {
  product: Product & { variants: Variant[] };
  eager?: boolean;
};

export default function ProductCard({ product }: Props) {
  const t = tone(product.colorKey);
  const defaultVariant = product.variants.find((v) => v.isDefault) ?? product.variants[0];
  const images = parseJson<string[]>(product.images, []);
  const badges = product.badges.split(",").filter(Boolean);

  return (
    <article className="card-lift group relative flex h-full flex-col overflow-hidden rounded-3xl bg-white/80">
      <Link
        href={`/products/${product.slug}`}
        className="relative block overflow-hidden px-8 pt-8"
        style={{ background: `linear-gradient(165deg, ${t.soft} 0%, ${t.soft}66 100%)` }}
        aria-label={product.name}
      >
        <span className="pointer-events-none absolute -right-10 -top-10 size-40 rounded-full opacity-40 blur-2xl transition-opacity duration-500 group-hover:opacity-70" style={{ background: t.glow }} />
        {badges.length ? (
          <span className="absolute left-4 top-4 z-10 rounded-full bg-white/85 px-3 py-1 text-[0.66rem] font-bold uppercase tracking-[0.14em]" style={{ color: t.deep }}>
            {badges[0] === "bestseller" ? "Best seller" : badges[0] === "new" ? "New" : "Vet formulated"}
          </span>
        ) : null}
        <div className="mx-auto aspect-[3/3.5] w-full max-w-[220px] transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-2 group-hover:rotate-[1.5deg] group-hover:scale-[1.04]">
          <ProductVisual
            name={product.name}
            format={product.format}
            colorKey={product.colorKey}
            imageUrl={images[0] ?? null}
            className="h-full w-full"
          />
        </div>
      </Link>

      <div className="flex flex-1 flex-col gap-2 p-5">
        <div className="flex items-center justify-between gap-3">
          <p className="eyebrow text-[0.62rem]" style={{ color: t.base }}>
            {speciesLabel[product.species] ?? product.species}
          </p>
          {product.ratingCount > 0 ? (
            <span className="flex items-center gap-1.5 text-[0.78rem] text-ink-soft">
              <Stars rating={product.ratingAvg} className="size-3" /> ({product.ratingCount})
            </span>
          ) : null}
        </div>
        <h3 className="display-3 leading-snug">
          <Link href={`/products/${product.slug}`} className="transition-colors group-hover:text-forest-mid">
            {product.name}
          </Link>
        </h3>
        <p className="line-clamp-2 text-[0.88rem] leading-relaxed text-ink-soft">{product.subtitle}</p>
        <div className="mt-auto flex items-center justify-between pt-3">
          <p className="text-[1.05rem] font-semibold text-ink">
            {defaultVariant ? money(defaultVariant.priceCents) : "—"}
            {defaultVariant?.compareAtCents ? (
              <span className="ml-2 text-[0.85rem] font-normal text-ink-soft/70 line-through">
                {money(defaultVariant.compareAtCents)}
              </span>
            ) : null}
          </p>
          {defaultVariant ? (
            <AddToCartButton variantId={defaultVariant.id} variant="icon" disabled={defaultVariant.stock <= 0} />
          ) : null}
        </div>
      </div>
    </article>
  );
}
