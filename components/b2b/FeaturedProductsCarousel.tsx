"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "@/components/site/A";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";

type Featured = {
  name: string;
  nameZh: string;
  tag: string;
  tagZh: string;
  species: string;
  speciesZh: string;
  format: string;
  formatZh: string;
  image: string;
  lead: string;
  leadZh: string;
  actives: string[];
  activesZh: string[];
  reference: string;
  moq: string;
  moqZh: string;
};

const FEATURED: Featured[] = [
  {
    name: "Hip & Joint Mobility Chews",
    nameZh: "髋关节活动软咀嚼",
    tag: "Best seller · Joint & mobility",
    tagZh: "畅销款 · 关节与活动力",
    species: "Dogs · adult & senior",
    speciesZh: "犬用 · 成年及老年犬",
    format: "Soft chew",
    formatZh: "软咀嚼",
    image: "/products/hip-joint-mobility-chews.png",
    lead: "Our highest-volume mobility line. A palatable meat-based soft chew built around a clinically familiar joint stack, formulated for adult and senior dogs and sized for daily long-term use. A dependable anchor SKU for any dog-wellness range.",
    leadZh: "我们销量最高的关节护理系列。以肉类为基底的适口软咀嚼，围绕临床常用关节配方构建，专为成年及老年犬设计，适合每日长期使用。是任何犬用健康系列的核心 SKU。",
    actives: [
      "Glucosamine + chondroitin cartilage matrix",
      "MSM and green-lipped mussel for comfort",
      "Turmeric / boswellia option for premium tiers",
    ],
    activesZh: [
      "氨基葡萄糖 + 软骨素软骨基质",
      "MSM 和绿唇贻贝舒缓关节",
      "高端系列可选姜黄 / 乳香",
    ],
    reference: "US$3.39 / unit",
    moq: "From 5 units",
    moqZh: "起订 5 件",
  },
  {
    name: "Probiotic Gut Health Chews",
    nameZh: "益生菌肠道健康软咀嚼",
    tag: "Best seller · Digestive",
    tagZh: "畅销款 · 消化健康",
    species: "Dogs & cats",
    speciesZh: "犬猫通用",
    format: "Soft chew",
    formatZh: "软咀嚼",
    image: "/products/probiotic-gut-health-chews.png",
    lead: "A daily digestive chew that positions easily across both dog and cat ranges. Multi-strain probiotics with prebiotic fibre and pumpkin support stool quality and gut balance — a repeat-purchase staple that drives subscription and bundle revenue.",
    leadZh: "一款可轻松覆盖犬猫两用系列的日常消化软咀嚼。多菌株益生菌配合益生元纤维和南瓜，改善粪便质量和肠道平衡——是驱动订阅和捆绑销售的高复购率主力单品。",
    actives: [
      "Multi-strain probiotic blend (CFU to spec)",
      "Prebiotic fibre + pumpkin for stool quality",
      "Digestive enzyme option for sensitive lines",
    ],
    activesZh: [
      "多菌株益生菌复合配方（CFU 按规格定制）",
      "益生元纤维 + 南瓜改善粪便质量",
      "敏感系列可选消化酶",
    ],
    reference: "US$3.68 / unit",
    moq: "From 15 units",
    moqZh: "起订 15 件",
  },
  {
    name: "Skin & Coat Chews + Salmon Oil",
    nameZh: "美毛护肤软咀嚼 + 三文鱼油",
    tag: "Best seller · Skin & coat",
    tagZh: "畅销款 · 皮肤与毛发",
    species: "Dogs & cats",
    speciesZh: "犬猫通用",
    format: "Soft chew",
    formatZh: "软咀嚼",
    image: "/products/skin-coat-salmon-chews.png",
    lead: "A coat-care soft chew designed for beauty-and-wellness positioning. Omega-rich salmon oil with biotin and zinc supports barrier health and a glossy coat — an efficient price point that performs strongly in retail and marketplace channels.",
    leadZh: "专为美容与健康定位设计的毛发护理软咀嚼。富含 Omega 的三文鱼油配合生物素和锌，支持皮肤屏障健康和光泽毛发——性价比出色，在零售和电商渠道表现强劲。",
    actives: [
      "Salmon oil — EPA / DHA omega-3",
      "Biotin + zinc for skin barrier",
      "Vitamin E antioxidant support",
    ],
    activesZh: [
      "三文鱼油 — EPA / DHA Omega-3",
      "生物素 + 锌支持皮肤屏障",
      "维生素 E 抗氧化支持",
    ],
    reference: "US$2.06 / unit",
    moq: "From 50 units",
    moqZh: "起订 50 件",
  },
  {
    name: "10-in-1 Multivitamin Chews",
    nameZh: "10 合 1 复合维生素软咀嚼",
    tag: "Best seller · Daily wellness",
    tagZh: "畅销款 · 日常全面健康",
    species: "Dogs · all life stages",
    speciesZh: "犬用 · 全生命阶段",
    format: "Soft chew",
    formatZh: "软咀嚼",
    image: "/products/multivitamin-10-in-1-chews.png",
    lead: "A broad daily-wellness chew covering ten functional areas in one format — the mainstream entry SKU most brands launch first. Low reference cost and wide appeal make it an ideal volume driver and cross-sell foundation for a supplement line.",
    leadZh: "一款覆盖十大功能领域的全面日常健康软咀嚼——大多数品牌首选的主流入门 SKU。参考成本低、受众广泛，是补充剂系列的理想走量单品和交叉销售基础。",
    actives: [
      "10 vitamin & mineral functional groups",
      "Whole-body daily wellness positioning",
      "Mainstream price point for volume",
    ],
    activesZh: [
      "10 种维生素与矿物质功能组合",
      "全身日常健康定位",
      "主流价位，适合大批量",
    ],
    reference: "US$1.62 / unit",
    moq: "Confirm by quote",
    moqZh: "以报价为准",
  },
  {
    name: "Omega-3 Wild Fish Oil",
    nameZh: "野生 Omega-3 鱼油",
    tag: "Best seller · Skin & coat",
    tagZh: "畅销款 · 皮肤与毛发",
    species: "Dogs & cats",
    speciesZh: "犬猫通用",
    format: "Pump oil",
    formatZh: "泵压式液体",
    image: "/products/omega-3-wild-fish-oil.png",
    lead: "A pump-format wild fish oil for brands that want a liquid topper alongside their chews. High-EPA/DHA support for skin, coat and daily nutrition, with a format that signals premium and suits larger fill sizes and higher-volume programs.",
    leadZh: "适合希望在软咀嚼之外增加液体拌粮产品的品牌。高 EPA/DHA 含量支持皮肤、毛发和日常营养，泵压式包装彰显高端品质，适合大规格和大批量项目。",
    actives: [
      "Wild-sourced omega-3 (EPA / DHA)",
      "Pump dosing for topper positioning",
      "Skin, coat & daily nutrition support",
    ],
    activesZh: [
      "野生来源 Omega-3（EPA / DHA）",
      "泵压计量，适合拌粮定位",
      "皮肤、毛发与日常营养支持",
    ],
    reference: "US$2.65 / unit",
    moq: "From 3,000 units",
    moqZh: "起订 3,000 件",
  },
];

export default function FeaturedProductsCarousel({ isZh = false }: { isZh?: boolean }) {
  const [active, setActive] = useState(0);
  const count = FEATURED.length;
  const touchStartX = useRef<number | null>(null);

  const go = useCallback(
    (dir: number) => setActive((i) => (i + dir + count) % count),
    [count],
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") go(-1);
      if (e.key === "ArrowRight") go(1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go]);

  function onTouchStart(e: React.TouchEvent) {
    touchStartX.current = e.touches[0].clientX;
  }
  function onTouchEnd(e: React.TouchEvent) {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(delta) > 50) go(delta < 0 ? 1 : -1);
    touchStartX.current = null;
  }

  const current = FEATURED[active];

  return (
    <div
      className="relative"
      role="group"
      aria-roledescription="carousel"
      aria-label={isZh ? "热销宠物营养品" : "Best-selling pet supplements"}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {/* ---- Track: neighbours peek on both sides ---- */}
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
          style={{
            transform: `translateX(calc(${-active * 82}% + 9%))`,
          }}
        >
          {FEATURED.map((p, i) => {
            const isActive = i === active;
            return (
              <div
                key={p.name}
                className="w-[82%] shrink-0 px-2 sm:px-3"
                aria-hidden={!isActive}
              >
                <div
                  className={`grid overflow-hidden rounded-sm border bg-white transition-all duration-500 lg:grid-cols-2 ${
                    isActive
                      ? "border-forest/40 opacity-100 shadow-[0_30px_60px_-40px_rgb(20_41_29_/_0.5)]"
                      : "border-line opacity-40"
                  }`}
                >
                  {/* Image side */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-[#f3efe6] lg:aspect-auto lg:min-h-[440px]">
                    <Image
                      src={p.image}
                      alt={`${isZh ? p.nameZh : p.name} — ${isZh ? "宠物营养品批发" : "wholesale pet supplement"}`}
                      fill
                      className="object-contain p-8"
                      sizes="(min-width: 1024px) 40vw, 82vw"
                    />
                    <span className="absolute left-5 top-5 border border-line bg-white/95 px-3 py-1.5 text-[0.66rem] font-bold uppercase tracking-[0.13em] text-forest">
                      {isZh ? p.tagZh : p.tag}
                    </span>
                  </div>

                  {/* Copy side */}
                  <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">
                    <p className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-forest-mid">
                      {isZh ? p.speciesZh : p.species} · {isZh ? p.formatZh : p.format}
                    </p>
                    <h3 className="mt-3 text-[clamp(1.5rem,2.4vw,2.1rem)] font-semibold leading-[1.15] tracking-[-0.02em] text-ink">
                      {isZh ? p.nameZh : p.name}
                    </h3>
                    <p className="mt-4 text-[0.95rem] leading-7 text-ink-soft">
                      {isZh ? p.leadZh : p.lead}
                    </p>

                    <ul className="mt-6 grid gap-2.5 border-t border-line pt-6">
                      {(isZh ? p.activesZh : p.actives).map((a) => (
                        <li key={a} className="flex items-start gap-2.5">
                          <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-forest-mid/[0.12]">
                            <Check className="size-3 text-forest-mid" strokeWidth={2.5} />
                          </span>
                          <span className="text-[0.88rem] leading-6 text-ink">{a}</span>
                        </li>
                      ))}
                    </ul>

                    <dl className="mt-7 grid grid-cols-2 gap-4 border-t border-line pt-6">
                      <div>
                        <dt className="text-[0.66rem] uppercase tracking-[0.1em] text-ink-soft">
                          {isZh ? "参考价格" : "Reference price"}
                        </dt>
                        <dd className="mt-1 text-lg font-semibold text-forest">{p.reference}</dd>
                      </div>
                      <div>
                        <dt className="text-[0.66rem] uppercase tracking-[0.1em] text-ink-soft">
                          {isZh ? "起订量" : "Starting MOQ"}
                        </dt>
                        <dd className="mt-1 text-lg font-semibold text-ink">
                          {isZh ? p.moqZh : p.moq}
                        </dd>
                      </div>
                    </dl>

                    <div className="mt-8">
                      <Link
                        href="/private-label#inquiry"
                        className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-forest hover:text-forest-mid"
                        tabIndex={isActive ? 0 : -1}
                      >
                        {isZh ? "申请规格与报价" : "Request specification & quote"}
                        <ArrowRight className="size-4" aria-hidden />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* ---- Controls ---- */}
      <div className="mt-8 flex items-center justify-between gap-4">
        <div className="flex items-center gap-2.5">
          {FEATURED.map((p, i) => (
            <button
              key={p.name}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`${isZh ? "显示" : "Show"} ${isZh ? p.nameZh : p.name}`}
              aria-current={i === active}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === active ? "w-8 bg-forest" : "w-3 bg-line hover:bg-forest/40"
              }`}
            />
          ))}
          <span className="ml-3 text-[0.78rem] font-semibold tabular-nums text-ink-soft">
            {String(active + 1).padStart(2, "0")} / {String(count).padStart(2, "0")}
          </span>
        </div>

        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => go(-1)}
            aria-label={isZh ? "上一个产品" : "Previous product"}
            className="grid size-12 place-items-center rounded-sm border border-line bg-white text-ink transition-colors hover:border-forest hover:bg-forest/5 hover:text-forest"
          >
            <ArrowLeft className="size-5" />
          </button>
          <button
            type="button"
            onClick={() => go(1)}
            aria-label={isZh ? "下一个产品" : "Next product"}
            className="grid size-12 place-items-center rounded-sm border border-line bg-white text-ink transition-colors hover:border-forest hover:bg-forest/5 hover:text-forest"
          >
            <ArrowRight className="size-5" />
          </button>
        </div>
      </div>

      <span className="sr-only" aria-live="polite">
        {isZh
          ? `正在显示第 ${active + 1} 个产品，共 ${count} 个：${current.nameZh}`
          : `Showing product ${active + 1} of ${count}: ${current.name}`}
      </span>
    </div>
  );
}
