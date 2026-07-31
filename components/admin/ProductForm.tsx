"use client";

import { useActionState, useState } from "react";
import Link from "next/link";
import { Trash2, Plus } from "lucide-react";
import { saveProduct, deleteProduct, type AdminFormState } from "@/lib/actions/admin";
import { SubmitButton, FormMsg, Field, inputCls } from "./ui";

type VariantRow = {
  id?: string;
  name: string;
  sku: string;
  priceCents: number;
  compareAtCents?: number | null;
  stock: number;
  isDefault?: boolean;
};

type ProductData = {
  id?: string;
  slug: string;
  name: string;
  subtitle: string;
  answerCapsule: string;
  description: string;
  species: string;
  format: string;
  colorKey: string;
  badges: string;
  benefits: string;
  ingredients: string;
  feedingGuide: string;
  faqs: string;
  images: string;
  translations?: string;
  featured: boolean;
  bestSeller: boolean;
  status: string;
  seoTitle: string | null;
  seoDescription: string | null;
  variants: VariantRow[];
  collectionIds: string[];
};

const COLOR_KEYS = ["forest", "moss", "amber", "clay", "plum", "teal", "rose", "oat", "charcoal", "sky"];

export default function ProductForm({
  product,
  collections,
}: {
  product: ProductData | null;
  collections: { id: string; name: string }[];
}) {
  const [state, action] = useActionState<AdminFormState, FormData>(saveProduct, null);
  const [variants, setVariants] = useState<VariantRow[]>(
    product?.variants?.length
      ? product.variants
      : [{ name: "90 chews", sku: "", priceCents: 2499, stock: 200, isDefault: true }]
  );

  const setVariant = (i: number, patch: Partial<VariantRow>) => {
    setVariants((prev) => prev.map((v, idx) => (idx === i ? { ...v, ...patch } : v)));
  };

  const pretty = (raw: string | undefined, fallback = "[]") => {
    try {
      return JSON.stringify(JSON.parse(raw || fallback), null, 2);
    } catch {
      return raw ?? fallback;
    }
  };

  return (
    <form action={action} className="space-y-6">
      {product?.id ? <input type="hidden" name="id" value={product.id} /> : null}
      <input type="hidden" name="variants" value={JSON.stringify(variants)} />

      <div className="grid gap-4 rounded-2xl border border-black/8 bg-white p-5 md:grid-cols-2">
        <Field label="产品名（英文）">
          <input name="name" defaultValue={product?.name} required className={inputCls} />
        </Field>
        <Field label="URL Slug" hint="仅小写字母、数字、连字符，如 hip-joint-mobility-chews">
          <input name="slug" defaultValue={product?.slug} required className={inputCls} />
        </Field>
        <div className="md:col-span-2">
          <Field label="副标题（一句话卖点）">
            <input name="subtitle" defaultValue={product?.subtitle} className={inputCls} />
          </Field>
        </div>
        <div className="md:col-span-2">
          <Field label="答案胶囊（GEO：40-60 词直接答案，AI 引擎引用的首选段落）">
            <textarea name="answerCapsule" defaultValue={product?.answerCapsule} rows={3} className={inputCls} />
          </Field>
        </div>
        <div className="md:col-span-2">
          <Field label="详情描述（Markdown）">
            <textarea name="description" defaultValue={product?.description} rows={8} className={`${inputCls} font-mono text-[0.82rem]`} />
          </Field>
        </div>
        <Field label="适用物种">
          <select name="species" defaultValue={product?.species ?? "dog"} className={inputCls}>
            <option value="dog">犬</option>
            <option value="cat">猫</option>
            <option value="dog_cat">犬猫通用</option>
          </select>
        </Field>
        <Field label="产品形态">
          <select name="format" defaultValue={product?.format ?? "chew"} className={inputCls}>
            <option value="chew">软咀嚼粒</option>
            <option value="powder">粉剂</option>
            <option value="oil">油剂</option>
            <option value="paste">膏剂</option>
            <option value="dropper">滴剂</option>
          </select>
        </Field>
        <Field label="主题色">
          <select name="colorKey" defaultValue={product?.colorKey ?? "forest"} className={inputCls}>
            {COLOR_KEYS.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </Field>
        <Field label="徽章（逗号分隔）" hint="可用：bestseller, new, vet-informed">
          <input name="badges" defaultValue={product?.badges} className={inputCls} />
        </Field>
        <Field label="状态">
          <select name="status" defaultValue={product?.status ?? "ACTIVE"} className={inputCls}>
            <option value="ACTIVE">已上架</option>
            <option value="DRAFT">草稿</option>
            <option value="ARCHIVED">已下架</option>
          </select>
        </Field>
        <div className="flex items-end gap-6 pb-1">
          <label className="flex items-center gap-2 text-[0.88rem]">
            <input type="checkbox" name="featured" defaultChecked={product?.featured} className="size-4" />
            首页主推（Hero 展示）
          </label>
          <label className="flex items-center gap-2 text-[0.88rem]">
            <input type="checkbox" name="bestSeller" defaultChecked={product?.bestSeller} className="size-4" />
            标记为热销
          </label>
        </div>
      </div>

      {/* 集合归属 */}
      <div className="rounded-2xl border border-black/8 bg-white p-5">
        <p className="mb-3 font-semibold">所属集合</p>
        <div className="flex flex-wrap gap-3">
          {collections.map((c) => (
            <label key={c.id} className="flex items-center gap-2 rounded-xl border border-black/10 px-3.5 py-2 text-[0.88rem]">
              <input
                type="checkbox"
                name="collectionIds"
                value={c.id}
                defaultChecked={product?.collectionIds?.includes(c.id)}
                className="size-4"
              />
              {c.name}
            </label>
          ))}
        </div>
      </div>

      {/* 变体 */}
      <div className="rounded-2xl border border-black/8 bg-white p-5">
        <div className="mb-3 flex items-center justify-between">
          <p className="font-semibold">规格与价格（美分计价，2499 = $24.99）</p>
          <button
            type="button"
            onClick={() => setVariants((prev) => [...prev, { name: "", sku: "", priceCents: 0, stock: 100 }])}
            className="inline-flex items-center gap-1.5 rounded-lg border border-black/12 px-3 py-1.5 text-[0.82rem] hover:bg-black/4"
          >
            <Plus size={14} /> 加一个规格
          </button>
        </div>
        <div className="space-y-2.5">
          {variants.map((v, i) => (
            <div key={i} className="grid grid-cols-[1.3fr_1fr_0.8fr_0.8fr_0.6fr_auto_auto] items-center gap-2.5">
              <input value={v.name} onChange={(e) => setVariant(i, { name: e.target.value })} placeholder="规格名（如 90 chews）" className={inputCls} />
              <input value={v.sku} onChange={(e) => setVariant(i, { sku: e.target.value })} placeholder="SKU" className={inputCls} />
              <input type="number" value={v.priceCents} onChange={(e) => setVariant(i, { priceCents: Number(e.target.value) })} placeholder="售价¢" className={inputCls} />
              <input type="number" value={v.compareAtCents ?? ""} onChange={(e) => setVariant(i, { compareAtCents: e.target.value ? Number(e.target.value) : null })} placeholder="划线价¢" className={inputCls} />
              <input type="number" value={v.stock} onChange={(e) => setVariant(i, { stock: Number(e.target.value) })} placeholder="库存" className={inputCls} />
              <label className="flex items-center gap-1.5 whitespace-nowrap text-[0.8rem]">
                <input
                  type="radio"
                  name="_defaultVariant"
                  checked={!!v.isDefault}
                  onChange={() => setVariants((prev) => prev.map((x, idx) => ({ ...x, isDefault: idx === i })))}
                />
                默认
              </label>
              <button
                type="button"
                onClick={() => setVariants((prev) => prev.filter((_, idx) => idx !== i))}
                className="grid h-9 w-9 place-items-center rounded-lg text-black/40 hover:bg-red-50 hover:text-red-600"
                aria-label="删除规格"
              >
                <Trash2 size={15} />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* 结构化内容 JSON */}
      <div className="grid gap-4 rounded-2xl border border-black/8 bg-white p-5 md:grid-cols-2">
        <Field label="卖点 benefits（JSON）" hint='[{"icon":"bone","title":"...","body":"..."}]'>
          <textarea name="benefits" defaultValue={pretty(product?.benefits)} rows={7} className={`${inputCls} font-mono text-[0.78rem]`} />
        </Field>
        <Field label="成分表 ingredients（JSON）" hint='[{"name":"...","amount":"450 mg","purpose":"..."}]'>
          <textarea name="ingredients" defaultValue={pretty(product?.ingredients)} rows={7} className={`${inputCls} font-mono text-[0.78rem]`} />
        </Field>
        <Field label="喂食指南 feedingGuide（JSON）" hint='[{"weight":"Up to 25 lbs","amount":"1 chew daily"}]'>
          <textarea name="feedingGuide" defaultValue={pretty(product?.feedingGuide)} rows={5} className={`${inputCls} font-mono text-[0.78rem]`} />
        </Field>
        <Field label="常见问题 faqs（JSON）" hint='[{"q":"...","a":"..."}] — 会输出 FAQPage 结构化数据'>
          <textarea name="faqs" defaultValue={pretty(product?.faqs)} rows={5} className={`${inputCls} font-mono text-[0.78rem]`} />
        </Field>
        <div className="md:col-span-2">
          <Field label="产品图 images（JSON 数组）" hint='["/products/xxx.png"] — 图片放 public/products/ 目录后在此引用'>
            <textarea name="images" defaultValue={pretty(product?.images)} rows={3} className={`${inputCls} font-mono text-[0.78rem]`} />
          </Field>
        </div>
      </div>

      {/* SEO */}
      <div className="grid gap-4 rounded-2xl border border-black/8 bg-white p-5 md:grid-cols-2">
        <Field label="SEO 标题（留空自动生成）">
          <input name="seoTitle" defaultValue={product?.seoTitle ?? ""} className={inputCls} />
        </Field>
        <Field label="SEO 描述（留空用答案胶囊）">
          <input name="seoDescription" defaultValue={product?.seoDescription ?? ""} className={inputCls} />
        </Field>
      </div>

      <div className="flex items-center gap-4">
        <SubmitButton>保存产品</SubmitButton>
        <FormMsg state={state} />
        <div className="flex-1" />
        {product?.id ? (
          <button
            type="button"
            onClick={() => {
              if (confirm("确定删除该产品？此操作不可恢复。")) deleteProduct(product.id!);
            }}
            className="text-[0.85rem] text-red-500 hover:underline"
          >
            删除产品
          </button>
        ) : null}
        <Link href="/admin/products" className="text-[0.85rem] text-black/50 hover:underline">
          返回列表
        </Link>
      </div>
    </form>
  );
}
