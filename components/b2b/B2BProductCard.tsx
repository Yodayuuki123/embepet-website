import Image from "next/image";
import Link from "@/components/site/A";
import { ArrowRight } from "lucide-react";
import { type B2BCatalogProduct, usdFromCny } from "@/lib/b2b-catalog";

const formatLabelEn: Record<B2BCatalogProduct["format"], string> = {
  chew: "Soft chews",
  powder: "Powder",
  oil: "Oil",
  paste: "Paste",
  dropper: "Liquid drops",
  tablet: "Tablets",
};

const formatLabelZh: Record<B2BCatalogProduct["format"], string> = {
  chew: "软咀嚼",
  powder: "粉剂",
  oil: "鱼油",
  paste: "膏剂",
  dropper: "液体滴剂",
  tablet: "片剂",
};

const speciesLabelEn: Record<B2BCatalogProduct["species"], string> = {
  dog: "Dogs",
  cat: "Cats",
  dog_cat: "Dogs & cats",
};

const speciesLabelZh: Record<B2BCatalogProduct["species"], string> = {
  dog: "犬用",
  cat: "猫用",
  dog_cat: "猫犬通用",
};

export default function B2BProductCard({
  product,
  isZh = false,
}: {
  product: B2BCatalogProduct;
  isZh?: boolean;
}) {
  const formatLabel = isZh ? formatLabelZh : formatLabelEn;
  const speciesLabel = isZh ? speciesLabelZh : speciesLabelEn;

  return (
    <article className="group grid border border-line bg-white transition-colors duration-200 hover:border-forest/50">
      <div className="relative aspect-square overflow-hidden bg-[#f3efe6]">
        <Image
          src={product.image}
          alt={`${product.name} wholesale product`}
          fill
          className="object-contain p-4 transition-transform duration-300 group-hover:scale-[1.025]"
          sizes="(min-width: 1280px) 25vw, (min-width: 640px) 50vw, 100vw"
        />
        <span className="absolute left-4 top-4 border border-line bg-white/95 px-2.5 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.13em] text-forest">
          {formatLabel[product.format]}
        </span>
      </div>
      <div className="flex min-h-[260px] flex-col p-5">
        <p className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-forest-mid">
          {speciesLabel[product.species]} · {product.category}
        </p>
        <h3 className="mt-3 text-lg font-semibold leading-6 text-ink">{product.name}</h3>
        <p className="mt-2 line-clamp-2 text-sm leading-6 text-ink-soft">{product.subtitle}</p>

        <dl className="mt-5 grid grid-cols-2 gap-3 border-t border-line pt-4">
          <div>
            <dt className="text-[0.68rem] uppercase tracking-[0.1em] text-ink-soft">
              {isZh ? "参考价格" : "Reference price"}
            </dt>
            <dd className="mt-1 text-base font-semibold text-forest">
              {product.referenceCny
                ? `US$${usdFromCny(product.referenceCny).toFixed(2)}`
                : isZh ? "询价" : "By quote"}
            </dd>
            {product.referenceCny ? (
              <span className="text-[0.68rem] text-ink-soft">
                {isZh ? `原价 ¥${product.referenceCny} / 件` : `Source ¥${product.referenceCny} / unit`}
              </span>
            ) : null}
          </div>
          <div>
            <dt className="text-[0.68rem] uppercase tracking-[0.1em] text-ink-soft">
              {isZh ? "起订量" : "Starting MOQ"}
            </dt>
            <dd className="mt-1 text-base font-semibold text-ink">
              {product.moq
                ? isZh ? `${product.moq.toLocaleString()} 件` : `${product.moq.toLocaleString()} units`
                : isZh ? "询价确认" : "Confirm by quote"}
            </dd>
          </div>
        </dl>

        <Link
          href="/private-label#inquiry"
          className="mt-auto flex min-h-11 items-center gap-2 pt-5 text-sm font-semibold text-forest"
          aria-label={isZh ? `申请 ${product.name} 规格书` : `Request specification for ${product.name}`}
        >
          {isZh ? "申请规格书" : "Request specification"}
          <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden />
        </Link>
      </div>
    </article>
  );
}
