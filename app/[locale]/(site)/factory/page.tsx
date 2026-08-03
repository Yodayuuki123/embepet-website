import type { Metadata } from "next";
import Image from "next/image";
import {
  ArrowRight,
  Beaker,
  Check,
  ClipboardCheck,
  Factory,
  MapPin,
  PackageCheck,
  ScanLine,
  ShieldCheck,
} from "lucide-react";
import { absoluteUrl, metaWithLocale } from "@/lib/seo";
import Link from "@/components/site/A";
import JsonLd from "@/components/site/JsonLd";
import { isLocale } from "@/lib/i18n/locales";
import { getDict } from "@/lib/i18n";

export function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  return metaWithLocale(params, {
    title: "Pet Supplement Factory & Manufacturing Facility",
    description:
      "Review Taizhou Beno Biotech's 3,000 m² pet supplement factory in Jiangsu, including product formats, manufacturing capabilities, production controls and OEM/ODM support.",
    path: "/factory",
  });
}

export default async function FactoryPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  const locale = isLocale(rawLocale) ? rawLocale : "en";
  const t = getDict(locale).b2bPages.factory;
  const isZh = locale === "zh";

  const snapshotFacts = isZh
    ? [
        ["2,000 m²", "生产与仓储区域", "覆盖生产组织、成品暂存与仓储衔接"],
        ["3 条", "生产线", "根据固体、半固体与液体路线安排生产"],
        ["30 人", "生产团队", "单班制生产与现场执行团队"],
      ]
    : [
        ["2,000 m²", "Production & warehouse", "Manufacturing, finished-goods holding and warehouse handoff"],
        ["3 lines", "Production lines", "Scheduled around solid, semi-solid and liquid routes"],
        ["30 people", "Production team", "Single-shift manufacturing and floor execution"],
      ];

  const formats = isZh
    ? [
        ["软嚼片", "半固体路线"], ["片剂", "固体路线"], ["膏剂与凝胶", "半固体路线"],
        ["液体与油剂", "液体路线"], ["粉剂", "固体路线"], ["颗粒剂", "固体路线"],
      ]
    : [
        ["Soft chews", "Semi-solid route"], ["Tablets", "Solid route"], ["Pastes & gels", "Semi-solid route"],
        ["Liquids & oils", "Liquid route"], ["Powders", "Solid route"], ["Granules", "Solid route"],
      ];

  const controls = [
    {
      icon: ScanLine,
      title: isZh ? "11 个分隔区域" : "11 segregated areas",
      body: isZh ? "原料接收、生产、包装与成品储存按功能划分，减少无关流线交叉。" : "Material receipt, processing, packing and finished storage are divided by function to limit unnecessary crossover.",
    },
    {
      icon: ShieldCheck,
      title: isZh ? "受控人员入口" : "Controlled personnel entry",
      body: isZh ? "人员经过更衣、洗手与卫生通道后进入对应生产区域。" : "Personnel pass through changing, hand-washing and hygiene access before entering production areas.",
    },
    {
      icon: ClipboardCheck,
      title: isZh ? "批次过程记录" : "Batch process records",
      body: isZh ? "称量、工艺参数与过程检查点按批次形成记录。" : "Weighing, process parameters and in-process checkpoints are recorded against the batch.",
    },
    {
      icon: PackageCheck,
      title: isZh ? "包装与放行关联" : "Pack-to-release linkage",
      body: isZh ? "批号、包装标识和质量审核在出货前保持关联。" : "Lot identity, pack information and quality review remain linked before shipment.",
    },
  ];

  const equipmentGroups = isZh
    ? [
        ["原料准备", "称量、筛分与预混合按配方顺序组织，为主工艺建立一致的投料基础。"],
        ["混合与乳化", "槽式混合与真空乳化分别服务粉体、膏体及液体配方路线。"],
        ["成型处理", "旋转压片、制粒及软嚼成型根据配方特性和成品规格匹配。"],
        ["稳定化处理", "灭菌、干燥、粉碎与冷却作为相应剂型的工艺节点配置。"],
        ["包装接口", "灌装、封口、贴标与批号位置在量产前按容器和版面确认。"],
      ]
    : [
        ["Material preparation", "Weighing, sieving and pre-blending follow the formula sequence before primary processing."],
        ["Mixing & emulsification", "Trough mixing and vacuum emulsification support powder, paste and liquid formulation routes."],
        ["Forming operations", "Rotary tableting, granulation and soft-chew forming are matched to formula behavior and finished specification."],
        ["Stabilization", "Sterilization, drying, grinding and cooling are configured where the dosage form requires them."],
        ["Packaging interface", "Filling, sealing, label application and lot-code position are confirmed against the selected container before scale-up."],
      ];

  const formulationSupport = isZh
    ? [
        ["客户配方承接", "将客户提供的配方转化为可执行的原料、工艺与规格文件。"],
        ["工厂基础配方", "以现有配方方向为起点，匹配目标功能与产品形态。"],
        ["配方适配调整", "围绕口感、成型、稳定性与包装适配进行项目级调整。"],
        ["样品确认", "在试产前确认外观、形态、使用方式及关键规格。"],
      ]
    : [
        ["Customer formula transfer", "Translate a supplied formula into executable material, process and product specifications."],
        ["Factory base formulas", "Start with an existing formulation direction and align it to the target benefit and format."],
        ["Formula adaptation", "Adjust around palatability, forming behavior, stability and packaging fit at project level."],
        ["Sample confirmation", "Confirm appearance, format, use method and key specifications before trial production."],
      ];

  const projectFlow = isZh
    ? [
        ["01", "需求沟通", "目标功能、剂型、数量、包装与销售市场形成项目简报。"],
        ["02", "配方与样品", "确定配方路线、关键规格和样品评价标准。"],
        ["03", "小批量试产", "在实际工艺条件下验证成型、灌装及包装适配。"],
        ["04", "批量生产", "确认物料和排期后，按批准规格组织正式生产。"],
        ["05", "质检交付", "完成成品审核、批次文件与出货准备。"],
      ]
    : [
        ["01", "Requirement alignment", "Target benefit, format, quantity, pack and destination market become one working brief."],
        ["02", "Formula & sample", "Confirm the formula route, critical specifications and sample evaluation criteria."],
        ["03", "Trial production", "Verify forming, filling and packaging fit under practical process conditions."],
        ["04", "Volume manufacturing", "Schedule formal production after materials and approved specifications are ready."],
        ["05", "QC & delivery", "Complete finished-product review, batch documentation and shipment preparation."],
      ];

  const planningFacts = isZh
    ? [["8:00–17:00", "单班生产时间"], ["6 天 / 周", "常规生产排期"], ["500 起*", "适配项目起订量"]]
    : [["8:00–17:00", "Single-shift hours"], ["6 days / week", "Regular production schedule"], ["500+*", "Eligible project MOQ"]];

  const planningRules = isZh
    ? ["样品与关键规格确认后锁定量产输入", "按照剂型与工艺路线分配生产线", "原料和包装材料齐套后确认生产窗口", "换线、清洁与卫生检查纳入排期节点"]
    : ["Freeze production inputs after sample and critical-spec approval", "Assign a line according to dosage form and process route", "Confirm the production window after ingredients and packaging are ready", "Include changeover, cleaning and hygiene checks in the schedule"];

  const packagingRoutes = isZh
    ? [["塑料袋", "粉剂、颗粒及补充装方向"], ["塑料瓶", "片剂、软嚼片、粉剂及颗粒"], ["玻璃容器", "液体、油剂及特定高端包装方向"], ["铝管", "膏剂与凝胶产品"]]
    : [["Plastic pouches", "Powders, granules and refill-oriented projects"], ["Plastic bottles", "Tablets, soft chews, powders and granules"], ["Glass containers", "Liquids, oils and selected premium pack directions"], ["Aluminum tubes", "Pastes and gel products"]];

  const qualityItems = isZh
    ? [
        ["GMP", "86%", "Eurofins 现场审核", "有效至 2027-06-14"],
        ["SQF 食品安全", "88 · Good", "宠物添加剂预混料的混合与包装", "有效至 2027-08-28"],
        ["SQF Quality", "第 9 版", "质量体系认证", "有效至 2027-08-28"],
        ["生产许可证", "3 类", "固体 · 半固体 · 液体", "有效至 2031-04-25"],
        ["FDA 工厂注册", "VALID", "注册号 10222600768", "当前状态"],
      ]
    : [
        ["GMP", "86%", "Eurofins on-site audit", "Valid to 14 Jun 2027"],
        ["SQF Food Safety", "88 · Good", "Mixing and packing of pet additive premixtures", "Valid to 28 Aug 2027"],
        ["SQF Quality", "Edition 9", "Quality system certification", "Valid to 28 Aug 2027"],
        ["Production license", "3 categories", "Solid · Semi-solid · Liquid", "Valid to 25 Apr 2031"],
        ["FDA Facility Registration", "VALID", "Registration no. 10222600768", "Current status"],
      ];

  const buyerBrief = isZh
    ? ["目标功能与剂型", "配方或原料限制", "预计订单数量", "包装偏好", "销售市场与时间计划"]
    : ["Target benefit & format", "Formula or ingredient constraints", "Expected order volume", "Packaging preference", "Destination market & timing"];

  return (
    <>
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "AboutPage",
        name: "Taizhou Beno Biotech manufacturing facility and company profile",
        url: absoluteUrl(`/${locale}/factory`),
        mainEntity: { "@id": `${absoluteUrl("/")}#manufacturer` },
        description: "Company and manufacturing profile for Taizhou Beno Biotech Co., Ltd., a pet supplement production facility in Taixing City, Jiangsu, China.",
        primaryImageOfPage: { "@type": "ImageObject", url: absoluteUrl("/images/science/factory-production-line.png") },
      }} />

      <div className="bg-[#f5f3ec]">
        <section className="border-b border-line">
          <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 text-forest-mid">
                <Factory className="size-5" strokeWidth={1.6} aria-hidden />
                <p className="b2b-kicker">{t.hero.kicker}</p>
              </div>
              <h1 className="mt-5 text-[clamp(1.8rem,3.2vw,2.8rem)] font-semibold leading-[1.1] tracking-[-0.03em] text-ink">{t.hero.title}</h1>
              <p className="mt-5 max-w-2xl text-[1.02rem] leading-8 text-ink-soft">
                {isZh ? "面向品牌方、经销商与全球卖家的宠物营养品 OEM/ODM 制造页面，集中展示工厂环境、技术路线、排产与交付接口。" : "A buyer-facing view of pet nutrition OEM/ODM manufacturing, bringing facility evidence, technical routes, production planning and delivery interfaces into one place."}
              </p>
            </div>
          </div>
        </section>

        <section className="border-b border-line">
          <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
            <div className="grid gap-10 lg:grid-cols-[0.36fr_0.64fr] lg:items-end lg:gap-14">
              <div>
                <p className="b2b-kicker text-forest-mid">{isZh ? "01 · 工厂实证" : "01 · Factory proof"}</p>
                <h2 className="mt-4 text-[clamp(2rem,3.6vw,3.35rem)] font-medium leading-[1.05] tracking-[-0.045em] text-ink">{isZh ? "采购方一眼可判断的制造基础" : "A manufacturing base buyers can assess at a glance"}</h2>
                <p className="mt-5 text-sm leading-7 text-ink-soft">{isZh ? "把现场实景与可核对的厂区、团队和产线信息放在一起，帮助采购方先完成生产基础筛选。" : "On-site evidence is paired with checkable facility, team and line information so buyers can complete an initial manufacturing-base review."}</p>
                <div className="mt-9 border-t border-line pt-7">
                  <p className="text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-forest-mid">{isZh ? "厂区总面积" : "Total facility area"}</p>
                  <p className="mt-3 text-[clamp(3.6rem,7vw,6.7rem)] font-semibold leading-none tracking-[-0.065em] text-forest">3,000 m²</p>
                </div>
              </div>
              <figure>
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image src="/images/science/factory-production-line.png" alt="Real production and packaging area at Taizhou Beno Biotech" fill priority className="object-cover" sizes="(min-width: 1024px) 62vw, 100vw" />
                </div>
                <figcaption className="mt-3 flex items-center justify-between gap-4 text-xs text-ink-soft"><span>{isZh ? "泰州百诺生物生产区域" : "Taizhou Beno Biotech · production area"}</span><span>{isZh ? "实景照片" : "On-site photo"}</span></figcaption>
              </figure>
            </div>
            <dl className="mt-12 grid border-y border-line sm:grid-cols-3 sm:divide-x sm:divide-line">
              {snapshotFacts.map(([value, label, body]) => (
                <div key={label} className="py-7 sm:px-7 sm:first:pl-0 sm:last:pr-0"><dd className="text-2xl font-semibold tracking-[-0.035em] text-ink">{value}</dd><dt className="mt-2 text-xs font-semibold uppercase tracking-[0.08em] text-forest-mid">{label}</dt><p className="mt-3 text-xs leading-5 text-ink-soft">{body}</p></div>
              ))}
            </dl>
            <div className="mt-7 grid gap-5 text-sm text-ink-soft sm:grid-cols-2"><p>{isZh ? "成立于 2016 年 8 月 11 日" : "Established 11 August 2016"}</p><address className="flex gap-2 not-italic sm:justify-end"><MapPin className="mt-0.5 size-4 shrink-0 text-forest-mid" strokeWidth={1.5} aria-hidden /><span>{t.location.address}</span></address></div>
          </div>
        </section>

        <section className="border-b border-line">
          <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
            <div className="grid gap-8 lg:grid-cols-[0.34fr_0.66fr] lg:gap-14">
              <div><p className="b2b-kicker text-forest-mid">{isZh ? "02 · 许可与剂型" : "02 · Scope & formats"}</p><h2 className="mt-4 text-[clamp(2rem,3.2vw,3rem)] font-medium leading-[1.08] tracking-[-0.04em] text-ink">{isZh ? "先确认产品能不能在这里做" : "Start with product-route fit"}</h2><p className="mt-5 text-sm leading-7 text-ink-soft">{isZh ? "生产许可覆盖宠物添加剂预混合饲料的三类物理形态，项目再根据配方表现匹配具体剂型与工艺。" : "The production license covers three physical categories of pet additive premix feed; each project then maps formula behavior to format and process."}</p></div>
              <div>
                <div className="border-y border-line py-7"><p className="text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-forest-mid">{isZh ? "许可生产范围" : "Licensed production scope"}</p><p className="mt-4 text-[clamp(2.15rem,5vw,4.5rem)] font-medium leading-[1.05] tracking-[-0.055em] text-ink">{isZh ? "固体 · 半固体 · 液体" : "Solid · Semi-solid · Liquid"}</p></div>
                <div className="mt-10 grid gap-10 md:grid-cols-[0.56fr_0.44fr] md:gap-12">
                  <div><h3 className="text-xs font-semibold uppercase tracking-[0.1em] text-ink">{isZh ? "六种成品形态" : "Six finished formats"}</h3><div className="mt-4 grid gap-x-8 sm:grid-cols-2">{formats.map(([title, route], index) => <div key={title} className="grid grid-cols-[30px_1fr] border-t border-line py-4"><span className="text-[0.68rem] font-semibold text-forest-mid">0{index + 1}</span><div><p className="text-sm font-semibold text-ink">{title}</p><p className="mt-1 text-xs text-ink-soft">{route}</p></div></div>)}</div></div>
                  <div className="md:border-l md:border-line md:pl-10"><div className="flex items-center gap-2"><Beaker className="size-4 text-forest-mid" strokeWidth={1.5} aria-hidden /><h3 className="text-xs font-semibold uppercase tracking-[0.1em] text-ink">{isZh ? "已配置核心工艺" : "Configured core processes"}</h3></div><ol className="mt-4 border-t border-line">{(isZh ? ["真空乳化", "旋转压片", "槽式混合", "灭菌处理", "干燥与粉碎"] : ["Vacuum emulsification", "Rotary tablet pressing", "Trough mixing", "Sterilization", "Drying & grinding"]).map((item, index) => <li key={item} className="grid grid-cols-[30px_1fr] border-b border-line py-3 text-sm"><span className="text-[0.68rem] font-semibold text-forest-mid">0{index + 1}</span><span className="text-ink-soft">{item}</span></li>)}</ol></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-line">
          <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
            <div className="mb-10 grid gap-5 lg:grid-cols-[0.58fr_0.42fr] lg:items-end"><div><p className="b2b-kicker text-forest-mid">{isZh ? "03 · 环境控制" : "03 · Facility control"}</p><h2 className="mt-4 text-[clamp(2rem,3.3vw,3.1rem)] font-medium leading-[1.08] tracking-[-0.04em] text-ink">{isZh ? "用真实厂区呈现日常控制方式" : "Real facility evidence, not generic claims"}</h2></div><p className="text-sm leading-7 text-ink-soft">{isZh ? "观察通道和卫生入口体现区域分隔、人员进入及现场可视化管理。" : "The observation corridor and hygiene entry show zoning, personnel access and visible floor management."}</p></div>
            <div className="grid gap-8 lg:grid-cols-[0.62fr_0.38fr] lg:items-start">
              <figure><div className="relative min-h-[560px] overflow-hidden"><Image src="/images/science/factory-cleanroom-corridor.png" alt="Observation corridor overlooking the controlled production line" fill className="object-cover" sizes="(min-width: 1024px) 58vw, 100vw" /></div><figcaption className="mt-3 text-xs text-ink-soft">{isZh ? "隔离观察通道与生产线 · 实景照片" : "Separated observation corridor and production line · on-site photo"}</figcaption></figure>
              <div><figure><div className="relative aspect-[4/3] overflow-hidden"><Image src="/images/science/factory-airlock.png" alt="Personnel hygiene and changing entry at the facility" fill className="object-cover" sizes="(min-width: 1024px) 38vw, 100vw" /></div><figcaption className="mt-3 text-xs text-ink-soft">{isZh ? "人员卫生与更衣入口 · 实景照片" : "Personnel hygiene and changing entry · on-site photo"}</figcaption></figure><div className="mt-7 border-t border-line">{controls.map(({ icon: Icon, title, body }, index) => <article key={title} className="grid grid-cols-[34px_1fr] gap-3 border-b border-line py-4"><span className="pt-0.5 text-xs font-semibold tracking-[0.12em] text-forest-mid">0{index + 1}</span><div><div className="flex items-center gap-2"><Icon className="size-4 text-forest-mid" strokeWidth={1.5} aria-hidden /><h3 className="text-sm font-semibold text-ink">{title}</h3></div><p className="mt-2 text-xs leading-5 text-ink-soft">{body}</p></div></article>)}</div></div>
            </div>
          </div>
        </section>

        <section className="border-b border-line">
          <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-20"><div className="grid gap-10 lg:grid-cols-[0.32fr_0.68fr] lg:gap-14"><div><p className="b2b-kicker text-forest-mid">{isZh ? "04 · 设备链路" : "04 · Equipment chain"}</p><h2 className="mt-4 text-[clamp(2rem,3.2vw,3rem)] font-medium leading-[1.08] tracking-[-0.04em] text-ink">{isZh ? "从原料准备到包装接口" : "From material preparation to pack interface"}</h2><p className="mt-5 text-sm leading-7 text-ink-soft">{isZh ? "这里展示的是工艺设备如何连接，而不是重复列出产品剂型。" : "This view explains how processing functions connect, without repeating the product-format list."}</p></div><ol className="border-t border-line">{equipmentGroups.map(([title, body], index) => <li key={title} className="grid gap-3 border-b border-line py-5 sm:grid-cols-[44px_0.28fr_0.72fr] sm:gap-5"><span className="text-xs font-semibold tracking-[0.12em] text-forest-mid">0{index + 1}</span><h3 className="text-sm font-semibold leading-6 text-ink">{title}</h3><p className="text-sm leading-6 text-ink-soft">{body}</p></li>)}</ol></div></div>
        </section>

        <section className="border-b border-line">
          <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-20"><div className="grid gap-10 lg:grid-cols-[0.42fr_0.58fr] lg:gap-14"><div><p className="b2b-kicker text-forest-mid">{isZh ? "05 · 配方研发" : "05 · Formulation"}</p><p className="mt-6 text-[clamp(4rem,8vw,7rem)] font-semibold leading-none tracking-[-0.065em] text-forest">10+</p><h2 className="mt-5 text-2xl font-semibold tracking-[-0.035em] text-ink">{isZh ? "研发与配方支持人员" : "R&D and formulation staff"}</h2><p className="mt-5 max-w-md text-sm leading-7 text-ink-soft">{isZh ? "覆盖关节、益生菌、鱼油、皮肤毛发、舒缓及维生素矿物质等产品方向。" : "Working across joint, probiotic, fish oil, skin & coat, calming, vitamin and mineral product directions."}</p></div><div className="border-t border-line">{formulationSupport.map(([title, body], index) => <article key={title} className="grid gap-3 border-b border-line py-5 sm:grid-cols-[44px_0.34fr_0.66fr] sm:gap-5"><span className="text-xs font-semibold tracking-[0.12em] text-forest-mid">0{index + 1}</span><h3 className="text-sm font-semibold leading-6 text-ink">{title}</h3><p className="text-sm leading-6 text-ink-soft">{body}</p></article>)}</div></div></div>
        </section>

        <section className="border-b border-line">
          <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-20"><div className="mb-10 grid gap-5 lg:grid-cols-[0.55fr_0.45fr] lg:items-end"><div><p className="b2b-kicker text-forest-mid">{isZh ? "06 · 项目推进" : "06 · Project flow"}</p><h2 className="mt-4 text-[clamp(2rem,3.3vw,3.1rem)] font-medium leading-[1.08] tracking-[-0.04em] text-ink">{isZh ? "五个明确交接点，从需求到交付" : "Five clear handoffs from requirement to delivery"}</h2></div><p className="text-sm leading-7 text-ink-soft">{isZh ? "每一步都有明确输入和输出，避免配方、包装和生产信息在部门之间丢失。" : "Each stage has a defined input and output so formula, pack and production information stays aligned."}</p></div><ol className="border-y border-line lg:grid lg:grid-cols-5 lg:divide-x lg:divide-line">{projectFlow.map(([number, title, body]) => <li key={number} className="border-b border-line py-6 last:border-b-0 lg:border-b-0 lg:px-6 lg:first:pl-0 lg:last:pr-0"><span className="text-xs font-semibold tracking-[0.12em] text-forest-mid">{number}</span><h3 className="mt-7 text-base font-semibold text-ink">{title}</h3><p className="mt-3 text-xs leading-5 text-ink-soft">{body}</p></li>)}</ol></div>
        </section>

        <section className="border-b border-line">
          <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-20"><div className="grid gap-12 lg:grid-cols-[0.46fr_0.54fr] lg:gap-16"><div><p className="b2b-kicker text-forest-mid">{isZh ? "07 · 排产逻辑" : "07 · Production planning"}</p><h2 className="mt-4 text-[clamp(2rem,3.2vw,3rem)] font-medium leading-[1.08] tracking-[-0.04em] text-ink">{isZh ? "把项目条件转化为可执行排期" : "Turn project conditions into an executable schedule"}</h2><dl className="mt-10 grid grid-cols-3 divide-x divide-line border-y border-line py-6">{planningFacts.map(([value, label]) => <div key={label} className="px-4 first:pl-0 last:pr-0"><dd className="text-lg font-semibold tracking-[-0.03em] text-forest sm:text-2xl">{value}</dd><dt className="mt-2 text-[0.68rem] leading-5 text-ink-soft">{label}</dt></div>)}</dl><p className="mt-3 text-[0.68rem] leading-5 text-ink-soft">{isZh ? "* 起订量根据配方、剂型与包装适配确认。" : "* Minimum order is confirmed according to formula, format and packaging fit."}</p></div><div><h3 className="text-xs font-semibold uppercase tracking-[0.1em] text-ink">{isZh ? "进入排产前的四个条件" : "Four conditions before scheduling"}</h3><ul className="mt-5 border-t border-line">{planningRules.map((item, index) => <li key={item} className="flex gap-4 border-b border-line py-5 text-sm leading-6 text-ink-soft"><Check className="mt-1 size-4 shrink-0 text-forest-mid" strokeWidth={2} aria-hidden /><span><strong className="mr-3 font-semibold text-ink">0{index + 1}</strong>{item}</span></li>)}</ul></div></div></div>
        </section>

        <section className="border-b border-line">
          <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-20"><div className="grid gap-10 lg:grid-cols-[0.32fr_0.68fr] lg:gap-14"><div><p className="b2b-kicker text-forest-mid">{isZh ? "08 · 包装交付" : "08 · Packaging handoff"}</p><h2 className="mt-4 text-[clamp(2rem,3.2vw,3rem)] font-medium leading-[1.08] tracking-[-0.04em] text-ink">{isZh ? "容器不是最后才决定的事项" : "Packaging is an early production input"}</h2><p className="mt-5 text-sm leading-7 text-ink-soft">{isZh ? "容器、标签和外箱信息会影响灌装、封口、批号位置及最终装箱方式。" : "Container, label and shipper information affect filling, sealing, lot-code position and final case packing."}</p></div><div><div className="border-y border-line">{packagingRoutes.map(([title, body], index) => <div key={title} className="grid gap-3 border-b border-line py-5 last:border-b-0 sm:grid-cols-[44px_0.3fr_0.7fr] sm:gap-5"><span className="text-xs font-semibold tracking-[0.12em] text-forest-mid">0{index + 1}</span><h3 className="text-sm font-semibold text-ink">{title}</h3><p className="text-sm leading-6 text-ink-soft">{body}</p></div>)}</div><div className="mt-7 grid gap-5 text-xs leading-5 text-ink-soft sm:grid-cols-3 sm:divide-x sm:divide-line"><p className="sm:pr-5"><strong className="block font-semibold text-ink">{isZh ? "灌装适配" : "Fill compatibility"}</strong>{isZh ? "确认容量、黏度与容器接口。" : "Confirm volume, viscosity and container interface."}</p><p className="sm:px-5"><strong className="block font-semibold text-ink">{isZh ? "版面确认" : "Artwork check"}</strong>{isZh ? "确认标签范围和批号预留。" : "Confirm label area and reserved lot-code space."}</p><p className="sm:pl-5"><strong className="block font-semibold text-ink">{isZh ? "装箱信息" : "Case information"}</strong>{isZh ? "确认装箱数与运输标识。" : "Confirm case count and shipping marks."}</p></div></div></div></div>
        </section>

        <section className="border-b border-line">
          <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-20"><div className="grid gap-10 lg:grid-cols-[0.28fr_0.72fr] lg:gap-14"><div><p className="b2b-kicker text-forest-mid">{isZh ? "09 · 质量证据" : "09 · Quality evidence"}</p><h2 className="mt-4 text-[clamp(2rem,3.1vw,2.8rem)] font-medium leading-[1.08] tracking-[-0.04em] text-ink">{isZh ? "先展示采购审核会用到的信息" : "Evidence arranged for procurement review"}</h2><p className="mt-5 text-sm leading-7 text-ink-soft">{isZh ? "审核结果、适用范围、证书状态与有效期集中在一处，不再分散重复。" : "Audit result, scope, status and validity are kept in one place instead of repeated across the page."}</p></div><div><div className="border-y border-line">{qualityItems.map(([title, metric, body, foot]) => <article key={title} className="grid gap-3 border-b border-line py-5 last:border-b-0 sm:grid-cols-[0.22fr_0.17fr_0.39fr_0.22fr] sm:items-center sm:gap-5"><h3 className="text-xs font-semibold uppercase tracking-[0.08em] text-forest-mid">{title}</h3><p className="text-lg font-semibold tracking-[-0.03em] text-ink">{metric}</p><p className="text-xs leading-5 text-ink-soft">{body}</p><p className="text-[0.68rem] leading-5 text-ink-soft sm:text-right">{foot}</p></article>)}</div><div className="mt-8 border-l-2 border-forest-mid pl-5"><p className="text-xs font-semibold uppercase tracking-[0.1em] text-forest-mid">{isZh ? "文件记录的追溯演练" : "Documented traceability exercises"}</p><p className="mt-3 text-2xl font-semibold tracking-[-0.035em] text-ink">{isZh ? "2,000 支 / 90 分钟 · 4,000 瓶 / 1.5 小时" : "2,000 tubes / 90 min · 4,000 bottles / 1.5 hr"}</p><p className="mt-2 text-xs leading-5 text-ink-soft">{isZh ? "用于展示既有批次追溯演练的检索与核对结果。" : "Recorded retrieval and reconciliation results from existing batch traceability exercises."}</p></div></div></div></div>
        </section>

        <section>
          <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-20"><div className="grid gap-10 lg:grid-cols-[0.62fr_0.38fr] lg:items-end lg:gap-14"><div><p className="b2b-kicker text-forest-mid">{isZh ? "10 · 项目输入" : "10 · Project input"}</p><h2 className="mt-4 text-[clamp(2rem,3.4vw,3.2rem)] font-medium leading-[1.08] tracking-[-0.04em] text-ink">{isZh ? "带着五项信息开始制造评估" : "Start a manufacturing review with five inputs"}</h2><ol className="mt-9 grid gap-x-8 border-y border-line sm:grid-cols-2">{buyerBrief.map((item, index) => <li key={item} className="flex items-center gap-4 border-b border-line py-4 text-sm text-ink last:border-b-0 sm:[&:nth-last-child(-n+2)]:border-b-0"><span className="text-xs font-semibold tracking-[0.12em] text-forest-mid">0{index + 1}</span>{item}</li>)}</ol></div><div className="lg:text-right"><p className="mb-6 text-sm leading-7 text-ink-soft">{isZh ? "收到项目资料后，我们将先判断剂型、工艺、起订量和包装路线是否匹配。" : "We first review fit across format, process, minimum order and packaging route."}</p><Link href="/private-label#inquiry" className="b2b-btn-primary">{t.cta.button}<ArrowRight className="size-4" aria-hidden /></Link></div></div></div>
        </section>
      </div>
    </>
  );
}
