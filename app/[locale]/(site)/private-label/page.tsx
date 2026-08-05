import type { Metadata } from "next";
import Image from "next/image";
import {
  ArrowRight,
  Factory,
  FlaskConical,
  Layers,
  Mail,
  MessageSquare,
  PackageCheck,
  Phone,
  TestTube,
} from "lucide-react";
import { absoluteUrl, metaWithLocale } from "@/lib/seo";
import { getSettings } from "@/lib/settings";
import InquiryForm from "@/components/site/InquiryForm";
import Link from "@/components/site/A";
import JsonLd from "@/components/site/JsonLd";
import ServiceOrbit, { type OrbitItem } from "@/components/b2b/ServiceOrbit";
import { isLocale } from "@/lib/i18n/locales";
import { getDict } from "@/lib/i18n";

export function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  return metaWithLocale(params, {
    title: "Private Label Pet Supplements & OEM/ODM Manufacturing",
    description:
      "Build private-label and OEM/ODM pet supplements with stock-formula or custom-development routes, sampling, packaging configuration, controlled production and export coordination.",
    path: "/private-label",
  });
}

export default async function PrivateLabelPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale = isLocale(rawLocale) ? rawLocale : "en";
  const dict = getDict(locale);
  const t = dict.b2bPages.privateLabel;
  const settings = await getSettings();

  const dosageForms = [
    { name: t.dosageForms.items[0], src: "/images/b2b/dosage-forms/01-soft-chews.png" },
    { name: t.dosageForms.items[1], src: "/images/b2b/dosage-forms/03-tablets.png" },
    { name: t.dosageForms.items[2], src: "/images/b2b/dosage-forms/05-pastes-and-gels.png" },
    { name: t.dosageForms.items[3], src: "/images/b2b/dosage-forms/04-drops-and-oils.png" },
    { name: t.dosageForms.items[4], src: "/images/b2b/dosage-forms/02-powders.png" },
    { name: t.dosageForms.items[5], src: "/images/b2b/dosage-forms/06-freeze-dried.png" },
  ];

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Private label and OEM/ODM pet supplement manufacturing",
          serviceType: "Pet supplement contract manufacturing",
          url: absoluteUrl("/en/private-label"),
          provider: { "@id": `${absoluteUrl("/")}#manufacturer` },
          areaServed: "Worldwide",
          audience: {
            "@type": "BusinessAudience",
            audienceType: "Pet supplement brand owners, distributors and global sellers",
          },
          description:
            "Stock-formula and custom-formula pet supplement manufacturing with sampling, packaging, production, quality review and export coordination.",
        }}
      />

      <section className="border-b border-line bg-[#f5f3ec]">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <div className="flex items-center justify-center gap-3 text-forest-mid">
              <Layers className="size-5" strokeWidth={1.6} aria-hidden />
              <p className="b2b-kicker">{t.hero.kicker}</p>
            </div>
            <h1 className="mt-5 text-[clamp(1.8rem,3.2vw,2.8rem)] font-semibold leading-[1.1] tracking-[-0.03em] text-ink">
              {t.hero.title}
            </h1>
            <p className="mt-5 mx-auto max-w-2xl text-[1.02rem] leading-8 text-ink-soft">
              {t.hero.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* 2 — Three services */}
      <section className="border-b border-line bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="text-center">
            <p className="b2b-kicker text-forest-mid">{t.services.kicker}</p>
            <h2 className="mt-4 text-[clamp(2rem,4vw,3rem)] font-semibold leading-[1.1] tracking-[-0.025em] text-ink">
              {t.services.title}
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-[0.95rem] leading-7 text-ink-soft">
              {t.services.subtitle}
            </p>
          </div>

          <div className="mt-16">
            <ServiceOrbit
              items={[
                { icon: "Factory", title: t.services.oemTitle, body: t.services.oemBody },
                { icon: "FlaskConical", title: t.services.odmTitle, body: t.services.odmBody },
                { icon: "Tag", title: t.services.plTitle, body: t.services.plBody },
              ]}
            />
          </div>
        </div>
      </section>

      {/* NEW — OEM/ODM 一站式定制服务 */}
      <section className="border-b border-line bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

          {/* 顶部标题区：居中，和参考图一致 */}
          <div className="text-center">
            <h2 className="text-[clamp(1.6rem,3vw,2.4rem)] font-semibold leading-[1.15] tracking-[-0.025em] text-ink">
              {locale === "zh" ? "OEM / ODM 全方位定制能力" : "OEM / ODM Full-Spectrum Customization"}
            </h2>
            <p className="mx-auto mt-5 max-w-3xl text-[0.95rem] leading-7 text-ink-soft">
              {locale === "zh"
                ? "从产品定位、功能配方到剂型规格、包装设计和合规资料，贝诺生物可根据品牌定位、目标市场及销售渠道，提供灵活的宠物营养产品定制服务。"
                : "From product positioning and functional formulas to dosage forms, packaging design and compliance documentation, Beno Bio offers flexible pet nutrition customization services tailored to your brand, target market and sales channels."}
            </p>
          </div>

          {/* 行1：左侧图片占位 + 右侧文字（01 产品规划与需求沟通） */}
          <div className="mt-20 flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-16">
            {/* 左侧图片 */}
            <div className="w-full shrink-0 lg:w-[48%]">
              <div className="aspect-[4/3] w-full overflow-hidden rounded-xl">
                <Image src="/images/b2b/oem-odm-custom/01-product-formula.png" alt="产品与配方定制" width={1448} height={1086} className="h-full w-full object-cover" />
              </div>
            </div>
            {/* 右侧文字 */}
            <div className="flex-1">
              <h3 className="text-[1.35rem] font-semibold text-ink">
                {locale === "zh" ? "产品与配方定制" : "Product & Formula Customization"}
              </h3>
              <p className="mt-4 text-[0.9rem] leading-7 text-ink-soft">
                {locale === "zh"
                  ? "根据犬猫类型、年龄阶段、健康需求和目标市场，提供针对性的产品方案与配方支持。"
                  : "Based on pet type, age stage, health needs and target market, we provide targeted product solutions and formula support."}
              </p>
              <ul className="mt-5 space-y-3">
                {(locale === "zh" ? [
                  "定制肠胃、皮毛、关节、免疫、营养补充等功能方向",
                  "支持成熟配方生产及ODM新配方开发",
                  "可根据成本、定位和卖点调整原料组合",
                  "兼顾产品功效、适口性、稳定性和生产可行性",
                  "配合打造差异化成分和产品核心卖点",
                ] : [
                  "Customize functional directions: gut, skin & coat, joint, immunity, nutrition",
                  "Support proven formula production and ODM new formula development",
                  "Adjust ingredient combinations based on cost, positioning and selling points",
                  "Balance efficacy, palatability, stability and production feasibility",
                  "Help build differentiated ingredients and core product selling points",
                ]).map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span className="mt-[0.35rem] shrink-0 text-[0.7rem] font-bold text-forest-mid">›</span>
                    <span className="text-[0.88rem] leading-6 text-ink-soft">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-[0.88rem] leading-7 text-ink-soft">
                {locale === "zh"
                  ? "帮助客户从产品概念出发，形成更符合品牌定位和市场需求的产品方案。"
                  : "Help clients develop product solutions that better align with brand positioning and market needs, starting from the product concept."}
              </p>
            </div>
          </div>

          {/* 行2：左侧文字（02 配方研发与样品开发）+ 右侧图片占位 */}
          <div className="mt-20 flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-16">
            {/* 左侧文字 */}
            <div className="flex-1 lg:order-1">
              <h3 className="text-[1.35rem] font-semibold text-ink">
                {locale === "zh" ? "剂型、口味与规格定制" : "Dosage Form, Flavor & Spec Customization"}
              </h3>
              <p className="mt-4 text-[0.9rem] leading-7 text-ink-soft">
                {locale === "zh"
                  ? "根据产品定位、宠物食用习惯和渠道需求，提供多种产品形态及细节定制。"
                  : "Based on product positioning, pet feeding habits and channel requirements, we offer multiple product forms and detail customization."}
              </p>
              <ul className="mt-5 space-y-3">
                {(locale === "zh" ? [
                  "支持软颗粒、片剂、膏剂、液体、粉剂和颗粒剂",
                  "可定制产品颜色、形状、大小、软硬度和重量",
                  "支持鸡肉、牛肉、鱼肉等不同口味方向",
                  "可根据适口性测试持续调整口感和气味",
                  "支持不同净含量、单次用量和包装规格",
                ] : [
                  "Support soft chews, tablets, pastes, liquids, powders and granules",
                  "Customizable color, shape, size, texture and weight",
                  "Support chicken, beef, fish and other flavor directions",
                  "Continuously adjust taste and aroma based on palatability testing",
                  "Support different net weights, serving sizes and packaging specs",
                ]).map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span className="mt-[0.35rem] shrink-0 text-[0.7rem] font-bold text-forest-mid">›</span>
                    <span className="text-[0.88rem] leading-6 text-ink-soft">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-[0.88rem] leading-7 text-ink-soft">
                {locale === "zh"
                  ? "让产品在使用体验、适口性和外观表现上更贴合目标消费群体。"
                  : "Ensure the product better matches the target consumer group in terms of usage experience, palatability and visual presentation."}
              </p>
            </div>
            {/* 右侧图片 */}
            <div className="w-full shrink-0 lg:order-2 lg:w-[48%]">
              <div className="aspect-[4/3] w-full overflow-hidden rounded-xl">
                <Image src="/images/b2b/oem-odm-custom/02-dosage-flavor.png" alt="剂型、口味与规格定制" width={1448} height={1086} className="h-full w-full object-cover" />
              </div>
            </div>
          </div>

          {/* 行3：左侧图片 + 右侧文字（03 包装与品牌视觉定制） */}
          <div className="mt-20 flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-16">
            {/* 左侧图片 */}
            <div className="w-full shrink-0 lg:w-[48%]">
              <div className="aspect-[4/3] w-full overflow-hidden rounded-xl">
                <Image src="/images/b2b/oem-odm-custom/03-packaging-brand.png" alt="包装与品牌视觉定制" width={1448} height={1086} className="h-full w-full object-cover" />
              </div>
            </div>
            {/* 右侧文字 */}
            <div className="flex-1">
              <h3 className="text-[1.35rem] font-semibold text-ink">
                {locale === "zh" ? "包装与品牌视觉定制" : "Packaging & Brand Visual Customization"}
              </h3>
              <p className="mt-4 text-[0.9rem] leading-7 text-ink-soft">
                {locale === "zh"
                  ? "围绕品牌定位和销售场景，提供从包装形式到标签视觉的一体化定制支持。"
                  : "Centered on brand positioning and sales scenarios, we provide integrated customization support from packaging format to label visuals."}
              </p>
              <ul className="mt-5 space-y-3">
                {(locale === "zh" ? [
                  "支持瓶装、袋装、盒装、条包等多种包装形式",
                  "可定制瓶型、袋型、外盒尺寸和组合套装",
                  "配合标签、外盒、贴纸和说明书设计",
                  "支持品牌Logo、配色、图案及版面调整",
                  "可根据电商、线下零售及跨境市场调整包装方案",
                ] : [
                  "Support bottles, pouches, boxes, stick packs and more",
                  "Customizable bottle shape, pouch style, box size and bundle sets",
                  "Assist with label, outer box, sticker and insert design",
                  "Support brand logo, color scheme, pattern and layout adjustment",
                  "Adapt packaging for e-commerce, retail and cross-border markets",
                ]).map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span className="mt-[0.35rem] shrink-0 text-[0.7rem] font-bold text-forest-mid">›</span>
                    <span className="text-[0.88rem] leading-6 text-ink-soft">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-[0.88rem] leading-7 text-ink-soft">
                {locale === "zh"
                  ? "帮助客户打造统一、有辨识度并适合市场销售的品牌产品。"
                  : "Help clients build unified, recognizable brand products that are ready for market sales."}
              </p>
            </div>
          </div>

          {/* 行4：左侧文字（04 小批试产与批量交付）+ 右侧图片占位 */}
          <div className="mt-20 flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-16">
            {/* 左侧文字 */}
            <div className="flex-1 lg:order-1">
              <h3 className="text-[1.35rem] font-semibold text-ink">
                {locale === "zh" ? "样品、生产与配套服务" : "Samples, Production & Supporting Services"}
              </h3>
              <p className="mt-4 text-[0.9rem] leading-7 text-ink-soft">
                {locale === "zh"
                  ? "除产品定制外，我们还提供样品开发、生产落地和资料配套服务，降低新品开发难度。"
                  : "Beyond product customization, we also provide sample development, production execution and documentation support to reduce the difficulty of new product development."}
              </p>
              <ul className="mt-5 space-y-3">
                {(locale === "zh" ? [
                  "提供样品制作、调整和多轮确认",
                  "支持小批量试产及批量订单生产",
                  "配合原料验收、过程控制和成品检验",
                  "提供批次留样、质量记录和追溯支持",
                  "配合准备产品资料、包装信息及相关检测文件",
                  "根据订单需求协调生产周期和交付安排",
                ] : [
                  "Provide sample production, adjustment and multiple rounds of confirmation",
                  "Support small-batch trial production and bulk order production",
                  "Assist with raw material acceptance, process control and finished product inspection",
                  "Provide batch retention, quality records and traceability support",
                  "Help prepare product documentation, packaging information and test reports",
                  "Coordinate production cycles and delivery arrangements based on order requirements",
                ]).map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span className="mt-[0.35rem] shrink-0 text-[0.7rem] font-bold text-forest-mid">›</span>
                    <span className="text-[0.88rem] leading-6 text-ink-soft">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-[0.88rem] leading-7 text-ink-soft">
                {locale === "zh"
                  ? "从产品方案到实际交付，为品牌客户提供稳定、灵活的供应链支持。"
                  : "From product solution to actual delivery, we provide stable and flexible supply chain support for brand clients."}
              </p>
            </div>
            {/* 右侧图片 */}
            <div className="w-full shrink-0 lg:order-2 lg:w-[48%]">
              <div className="aspect-[4/3] w-full overflow-hidden rounded-xl">
                <Image src="/images/b2b/oem-odm-custom/04-sample-production.png" alt="样品、生产与配套服务" width={1448} height={1086} className="h-full w-full object-cover" />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3 — Five-step cooperation process */}
      <section className="border-b border-line bg-[#f8f7f2] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="text-center">
            <p className="b2b-kicker text-forest-mid">{t.process.kicker}</p>
            <h2 className="mt-4 text-[clamp(2rem,4vw,3rem)] font-semibold leading-[1.1] tracking-[-0.025em] text-ink">
              {t.process.title}
            </h2>
          </div>

          <ol className="relative mx-auto mt-16 max-w-5xl">
            <span
              className="absolute left-6 top-2 bottom-2 w-px bg-line lg:left-1/2 lg:-translate-x-1/2"
              aria-hidden
            />
            {t.process.steps.map((step, index) => {
              const icons = [MessageSquare, FlaskConical, TestTube, Factory, PackageCheck];
              const Icon = icons[index] || MessageSquare;
              const left = index % 2 === 0;
              return (
                <li
                  key={step.title}
                  className="relative pl-16 pb-10 last:pb-0 lg:grid lg:grid-cols-2 lg:gap-x-16 lg:pl-0"
                >
                  <span className="absolute left-6 top-1 z-10 flex size-12 -translate-x-1/2 items-center justify-center rounded-full bg-forest text-base font-bold text-white ring-4 ring-[#f8f7f2] lg:left-1/2">
                    {index + 1}
                  </span>
                  <div
                    className={`rounded-lg border border-line bg-white p-6 shadow-sm sm:p-7 ${
                      left ? "lg:col-start-1 lg:text-right" : "lg:col-start-2"
                    }`}
                  >
                    <div
                      className={`flex items-center gap-2.5 ${
                        left ? "lg:flex-row-reverse" : ""
                      }`}
                    >
                      <Icon className="size-5 shrink-0 text-forest-mid" strokeWidth={1.6} aria-hidden />
                      <h3 className="text-lg font-semibold text-ink">{step.title}</h3>
                    </div>
                    <p className="mt-3 text-[0.9rem] leading-7 text-ink-soft">{step.body}</p>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      {/* 4 — Product dosage forms */}
      <section className="border-b border-line bg-[#f8f7f2] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="text-center">
            <p className="b2b-kicker text-forest-mid">{t.dosageForms.kicker}</p>
            <h2 className="mt-4 text-[clamp(2rem,4vw,3rem)] font-semibold leading-[1.1] tracking-[-0.025em] text-ink">
              {t.dosageForms.title}
            </h2>
          </div>

          <div className="mt-14 grid grid-cols-2 gap-6 sm:grid-cols-3">
            {dosageForms.map(({ name, src }) => (
              <article
                key={name}
                className="group flex flex-col items-center rounded-lg border border-line bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="relative aspect-square w-full">
                  <Image
                    src={src}
                    alt={`${name} pet supplement dosage form`}
                    fill
                    className="object-contain transition-transform duration-500 group-hover:scale-105"
                    sizes="(min-width: 640px) 33vw, 50vw"
                  />
                </div>
                <h3 className="mt-4 text-[0.95rem] font-semibold text-ink">{name}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="inquiry" className="scroll-mt-24 border-t border-line bg-[#e9eeea]">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-24 sm:px-8 lg:grid-cols-[0.7fr_1.3fr] lg:px-10">
          <div>
            <p className="b2b-kicker text-forest-mid">{t.inquiry.kicker}</p>
            <h2 className="b2b-heading mt-4">{t.inquiry.title}</h2>
            <p className="mt-5 text-sm leading-7 text-ink-soft">
              {t.inquiry.subtitle}
            </p>
            <div className="mt-8 border-t border-line">
              <a
                href={`mailto:${settings.b2bEmail}`}
                className="flex min-h-14 items-center gap-3 border-b border-line py-3 text-sm font-semibold text-forest"
              >
                <Mail className="size-4" aria-hidden />
                {settings.b2bEmail}
              </a>
              <a
                href={`tel:${settings.phone}`}
                className="flex min-h-14 items-center gap-3 border-b border-line py-3 text-sm font-semibold text-forest"
              >
                <Phone className="size-4" aria-hidden />
                {settings.phone}
              </a>
            </div>
          </div>
          <div className="border border-line bg-white p-6 sm:p-9">
            <InquiryForm defaultType="private_label" />
          </div>
        </div>
      </section>
    </>
  );
}
