import type { Metadata } from "next";
import Image from "next/image";
import {
  ArrowRight,
  Check,
  ShieldCheck,
  ExternalLink,
  FlaskConical,
  TestTube,
  ClipboardCheck,
  PackageCheck,
  Award,
  Factory,
  Microscope,
  Layers,
  TrendingUp,
  Users,
  Star,
  Clock,
  FileText,
  Download,
  ChevronRight,
  Beaker,
  Boxes,
  ScanLine,
  Warehouse,
  MapPin,
} from "lucide-react";
import { absoluteUrl, metaWithLocale, faqJsonLd } from "@/lib/seo";
import Link from "@/components/site/A";
import JsonLd from "@/components/site/JsonLd";
import { isLocale } from "@/lib/i18n/locales";
import { getDict } from "@/lib/i18n";

export function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  return metaWithLocale(params, {
    title: "Pet Supplement Quality, GMP & SQF Certificates",
    description:
      "Verify Taizhou Beno Biotech's Eurofins GMP audit recognition and SQF Food Safety Code: Pet Food Manufacturing certificate, with IDs, audit dates, scope and validity.",
    path: "/science",
  });
}

const certificates = [
  {
    short: "GMP",
    name: "Eurofins GMP Audit Recognition",
    pdf: "/certificates/taizhou-beno-gmp-2026.pdf",
    issuer: "Eurofins Food Assurance Certification US, LLC",
    status: "Current",
    scope: "Good Manufacturing Practice audit recognition",
    audit: "12–14 Jun 2026",
    validTo: "14 Jun 2027",
    identifierLabel: "Certificate ID",
    identifier: "ACCB8AAA422_1",
    result: "Score: 86%",
    image: "/images/science/cert-gmp.jpg",
    description: "Eurofins GMP audit recognition confirms that our facility meets Good Manufacturing Practice standards for pet supplement production. The on-site audit covered facility layout, equipment qualification, personnel hygiene, raw material controls, in-process monitoring, and documentation integrity. An 86% score on the first attempt reflects a mature quality management system that was already operating at international standards before the formal audit.",
  },
  {
    short: "SQF",
    name: "SQF Food Safety Code Certificate",
    pdf: "/certificates/taizhou-beno-sqf-2026.pdf",
    issuer: "SQFI / Eurofins Food Assurance Certification US, LLC",
    status: "Current",
    scope: "FSC 32 – Pet Premix food",
    audit: "12–14 Jun 2026",
    validTo: "28 Aug 2027",
    identifierLabel: "Certificate / SIN",
    identifier: "105690",
    result: "Edition 9 — Score: 88 — Good",
    image: "/images/science/cert-sqf-food.jpg",
    description: "The SQF Food Safety Code Edition 9 is one of the most rigorous third-party food safety standards globally, recognized by the Global Food Safety Initiative (GFSI). Our certification under FSC 32 (Pet Premix food) was awarded after a three-day on-site audit by Eurofins Food Assurance Certification US, LLC. The 88-point score and 'Good' rating on an initial certification audit demonstrates that our HACCP plan, allergen management, foreign matter controls, and sanitation programs are fully operational and documented.",
  },
  {
    short: "SQF",
    name: "SQF Quality Code Certificate",
    pdf: "/certificates/taizhou-beno-sqf-quality-2026.pdf",
    issuer: "SQFI / Eurofins Food Assurance Certification US, LLC",
    status: "Current",
    scope: "FSC 00 – Quality Management",
    audit: "12–14 Jun 2026",
    validTo: "28 Aug 2027",
    identifierLabel: "Certificate / SIN",
    identifier: "105690",
    result: "Edition 9 — Quality Management System",
    image: "/images/science/cert-sqf-quality.jpg",
    description: "The SQF Quality Code Edition 9 extends beyond food safety to certify the entire quality management system, including supplier qualification, customer complaint management, corrective action procedures, internal audit programs, and management review processes. Holding both SQF Food Safety and SQF Quality certifications simultaneously means that buyers can rely on a single, audited quality framework that covers both product safety and operational consistency.",
  },
];

const faqsEn = [
  {
    q: "Which legal entity appears on the certificates?",
    a: "All supplied records identify Taizhou Beno Biotech Co., Ltd. (泰州市贝诺生物科技有限公司), the manufacturing entity in Taixing City, Jiangsu, China. The company holds Unified Social Credit Code 91321283MA1MR5HB8P and D-U-N-S Number 404129816, both of which can be cross-referenced against public registries for independent verification.",
  },
  {
    q: "What are the current certification validity periods?",
    a: "Eurofins GMP audit recognition is valid through June 14, 2027. SQF Food Safety and Quality certifications are valid through August 28, 2027, with the re-certification audit scheduled for June 14, 2027. The Feed Production License (苏饲预（2026）12006) is valid from April 26, 2026 to April 25, 2031. FDA Food Facility Registration No. 10222600768 is renewed biennially and is currently valid through December 31, 2026.",
  },
  {
    q: "What is the minimum order quantity, and why is it lower than industry average?",
    a: "Our MOQ is 500 bottles for soft chews — compared to the industry average of 3,000 bottles. This is possible because our high-speed production line (1 tonne/hour) allows efficient short runs without the setup cost penalties that affect slower equipment. Low MOQ is a deliberate strategic choice to support new brand launches, market testing, and seasonal SKU expansion for our partners.",
  },
  {
    q: "Does the website claim every project receives the same tests?",
    a: "No. Formula, dosage form, and destination market change the required evidence. The project-specific test and document package is confirmed during quotation based on the approved specification and buyer requirements. For example, a US-market soft chew may require a different certificate of analysis format than an EU-market tablet.",
  },
  {
    q: "Can procurement teams inspect the original files?",
    a: "Yes. Each certificate registry entry includes a direct link to the original PDF record for vendor review. Additional documentation such as full audit reports, FDA registration confirmation, and the Feed Production License are available upon request. We can also provide a complete vendor qualification package including HACCP plan summary, allergen statement, and country-of-origin documentation.",
  },
  {
    q: "What should a buyer include in a document request?",
    a: "Provide the product or formula, target market, sales channel, requested certificates, testing expectations, label responsibility, and shipment terms. For regulatory compliance, specify destination country requirements and any mandatory testing protocols. Our team will respond within 24 hours with a tailored document checklist and timeline.",
  },
];

const faqsZh = [
  {
    q: "证书上显示的法律主体是哪家公司？",
    a: "所有提供的证书均标注泰州市贝诺生物科技有限公司（Taizhou Beno Biotech Co., Ltd.），该公司位于中国江苏省泰兴市。公司统一社会信用代码为 91321283MA1MR5HB8P，邓白氏编码（D-U-N-S）为 404129816，均可通过公开注册系统进行独立核实。",
  },
  {
    q: "当前各项认证的有效期是多久？",
    a: "Eurofins GMP 审核认可有效期至 2027 年 6 月 14 日。SQF 食品安全与质量认证有效期至 2027 年 8 月 28 日，复认证审核计划于 2027 年 6 月 14 日进行。饲料生产许可证（苏饲预（2026）12006）有效期为 2026 年 4 月 26 日至 2031 年 4 月 25 日。FDA 食品设施注册号 10222600768 每两年更新一次，当前有效期至 2026 年 12 月 31 日。",
  },
  {
    q: "最低起订量是多少？为什么低于行业平均水平？",
    a: "我们软颗粒产品的最低起订量为 500 瓶，而行业平均水平为 3,000 瓶。这得益于我们的高速生产线（每小时 1 吨产能），可在不增加额外设置成本的情况下高效完成小批量生产。低起订量是我们的战略选择，旨在支持新品牌上市、市场测试及合作伙伴的季节性 SKU 扩展。",
  },
  {
    q: "网站是否声称每个项目都会进行相同的检测？",
    a: "不是。配方、剂型和目标市场的不同会影响所需的证明文件。具体的检测和文件方案将在报价阶段根据已批准的规格和买方要求进行确认。例如，面向美国市场的软颗粒产品可能需要与面向欧盟市场的片剂不同格式的检测报告。",
  },
  {
    q: "采购团队能否查阅原始文件？",
    a: "可以。每份证书注册条目均包含指向原始 PDF 文件的直接链接，供供应商审查使用。完整审核报告、FDA 注册确认函及饲料生产许可证等其他文件可根据要求提供。我们还可提供完整的供应商资质包，包括 HACCP 计划摘要、过敏原声明及原产地证明文件。",
  },
  {
    q: "买方在提交文件请求时应包含哪些信息？",
    a: "请提供产品或配方信息、目标市场、销售渠道、所需证书、检测要求、标签责任及装运条款。如涉及法规合规，请注明目的地国家的要求及任何强制性检测规程。我们的团队将在 24 小时内回复，并提供定制化的文件清单和时间安排。",
  },
];

const factoryFaqsEn = [
  {
    q: "Where is your pet supplement factory located?",
    a: "Our manufacturing facility is operated by Taizhou Beno Biotech Co., Ltd. in Taixing City, Jiangsu, China — a 3,000 m² production base with 2,000 m² dedicated to production and warehousing, established in August 2016.",
  },
  {
    q: "What is your pet supplement production capacity?",
    a: "The factory operates 3 production lines with 30 production staff on a single-shift schedule (8:00–17:00, six days per week). Actual SKU availability and production allocation are confirmed in each quotation based on the approved formula and dosage form.",
  },
  {
    q: "Which pet supplement dosage forms can the factory produce?",
    a: "The facility is licensed to produce solid, semi-solid and liquid pet additive premixed feed. Product forms include soft chews, tablets, pastes, drops/oils, powders and granules using vacuum emulsification, tablet pressing, mixing, sterilization and drying processes.",
  },
  {
    q: "Is the factory certified for export?",
    a: "Yes. The manufacturing entity holds Feed Production License No. 苏饲预（2026）12006, SQF Food Safety Code: Pet Food Manufacturing certification (Edition 9, audit score 88), SQF Quality Code certification, Eurofins GMP audit recognition (86% score), and FDA Food Facility Registration (No. 10222600768, valid through December 31, 2026).",
  },
  {
    q: "Can I visit or audit the factory before placing an order?",
    a: "Buyers evaluating the factory for a project can request a manufacturing review. Share the product, requested process, document list, quantity and destination market to begin. The facility address is Li Kong Group 3, Donglin Village, Yaowang Street, Taixing City, Jiangsu 225400, China.",
  },
];

const factoryFaqsZh = [
  {
    q: "工厂地址在哪里？",
    a: "我们的生产设施由泰州市贝诺生物科技有限公司运营，位于中国江苏省泰兴市，厂区总面积 3,000 平方米，其中 2,000 平方米专用于生产和仓储，成立于 2016 年 8 月。",
  },
  {
    q: "工厂的生产能力是多少？",
    a: "工厂运营 3 条生产线，配备 30 名生产员工，单班制工作（8:00–17:00，每周六天）。具体的 SKU 产能分配将在每次报价时根据已批准的配方和剂型进行确认。",
  },
  {
    q: "工厂可以生产哪些剂型的宠物营养品？",
    a: "设施已获许可生产固体、半固体和液体宠物添加剂预混合饲料。产品形态包括软颗粒、片剂、膏剂、滴剂/油剂、粉剂和颗粒剂，采用真空乳化、压片、混合、灯菌和干燥等工艺生产。",
  },
  {
    q: "工厂是否具备出口认证？",
    a: "是的。生产主体持有饲料生产许可证（苏饲预（2026）12006）、SQF 宠物食品制造食品安全评审认证（第 9 版，审核得分 88 分）、SQF 质量体系证书、Eurofins GMP 审核认可（86% 得分）以及 FDA 食品设施注册（注册号 10222600768，有效期至 2026 年 12 月 31 日）。",
  },
  {
    q: "下订前可以参观或审核工厂吗？",
    a: "正在评估工厂的买方可申请生产审查。请提供产品信息、所需工艺、文件清单、数量及目的地市场以开始。工厂地址：中国江苏省泰兴市血王街道东林村李岗组 3 号，邮编 225400。",
  },
];

export default async function QualityPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale = isLocale(rawLocale) ? rawLocale : "en";
  const dict = getDict(locale);
  const t = dict.b2bPages;
  const tf = dict.b2bPages.factory;
  const isZh = locale === "zh";
  const faqs = isZh ? faqsZh : faqsEn;
  const factoryFaqs = isZh ? factoryFaqsZh : factoryFaqsEn;

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Taizhou Beno Biotech quality certificates",
          url: absoluteUrl("/en/science"),
          about: { "@id": `${absoluteUrl("/")}#manufacturer` },
          description:
            "GMP audit recognition, SQF Pet Food Manufacturing certification and buyer-oriented quality evidence for Taizhou Beno Biotech Co., Ltd.",
          hasPart: certificates.map((certificate) => ({
            "@type": "DigitalDocument",
            name: certificate.name,
            encodingFormat: "application/pdf",
            url: absoluteUrl(certificate.pdf),
            identifier: certificate.identifier,
            about: { "@id": `${absoluteUrl("/")}#manufacturer` },
          })),
        }}
      />

      {/* ─── HERO ─── */}
      <section className="border-b border-line bg-[#f5f3ec]">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <div className="flex items-center justify-center gap-3 text-forest-mid">
              <ShieldCheck className="size-5" strokeWidth={1.6} aria-hidden />
              <p className="b2b-kicker">{isZh ? "质量与认证证据" : "Quality & certification evidence"}</p>
            </div>
            <h1 className="mt-5 text-[clamp(1.8rem,3.2vw,2.8rem)] font-semibold leading-[1.1] tracking-[-0.03em] text-ink">
              {isZh ? "所有质量声明均有可查证的记录支撑。" : "Quality claims backed by records buyers can verify."}
            </h1>
            <p className="mt-5 mx-auto max-w-2xl text-[1.02rem] leading-8 text-ink-soft">
              {isZh ? "Eurofins GMP 审核认可与 SQF 宠物食品制造证书已针对泰州市贝诺生物科技有限公司正式颁发，可通过各发证机构的注册系统独立核实。" : "GMP audit recognition and SQF Pet Food Manufacturing certificate issued for Taizhou Beno Biotech Co., Ltd. — independently verifiable through each issuing body's registry."}
            </p>
          </div>
        </div>
      </section>

      {/* ─── MODULE 1: KEY SPECS BAR ─── */}
      <section className="border-b border-line bg-white">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <dl className="grid grid-cols-2 divide-x divide-y divide-line sm:grid-cols-3 lg:grid-cols-5 lg:divide-y-0">
            {(isZh ? [
                { value: "2016", label: "成立年份", sub: "江苏泰兴" },
                { value: "3,000 m²", label: "GMP 厂区", sub: "2,000 m² 生产区" },
                { value: "1.8亿+", label: "月产能", sub: "软颗粒产能" },
                { value: "11 年", label: "零事故记录", sub: "安全生产记录" },
                { value: "500 MOQ", label: "最低起订量", sub: "行业平均: 3,000" },
              ] : [
                { value: "2016", label: "Year Founded", sub: "Taixing, Jiangsu" },
                { value: "3,000 m²", label: "GMP Facility", sub: "2,000 m² production" },
                { value: "180M+", label: "Units / Month", sub: "Soft chew capacity" },
                { value: "11 Yrs", label: "Zero Incidents", sub: "Safe production record" },
                { value: "500 MOQ", label: "Min. Order Qty", sub: "Industry avg: 3,000" },
              ]).map(({ value, label, sub }) => (
              <div key={label} className="flex flex-col justify-center px-6 py-8 text-left">
                <dd className="text-[clamp(1.4rem,2.2vw,1.9rem)] font-bold leading-none tracking-[-0.03em] text-forest">
                  {value}
                </dd>
                <dt className="mt-2 text-xs font-semibold uppercase tracking-[0.08em] text-ink">{label}</dt>
                <span className="mt-1 text-[0.72rem] text-ink-soft">{sub}</span>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ─── MODULE 2: FACILITY OVERVIEW ─── */}
      <section className="border-b border-line bg-[#f8f7f2]">
        <div className="mx-auto grid max-w-7xl lg:grid-cols-2">
          <div className="px-5 py-14 sm:px-8 lg:px-12 lg:py-20">
            {/* ABOUT heading — two-tone style */}
            <h2 className="text-[clamp(1.8rem,3vw,2.6rem)] font-extrabold leading-[1.1] tracking-[-0.02em]">
              <span className="text-ink">ABOUT </span>
              <span className="text-forest">EMBEPET</span>
            </h2>

            <p className="mt-5 text-[0.93rem] leading-7 text-ink-soft">
              {isZh ? "成立于 2016 年，厂区位于江苏泰兴，总面积 3,000 平方米，专为宠物营养品生产而建，其中 2,000 平方米用于 GMP 合规生产。三条独立生产线在全部生产阶段实行严格物理隔离。" : "Founded in 2016 in Taixing, Jiangsu, our 3,000 m² facility was purpose-built for pet supplement production — 2,000 m² dedicated to GMP-compliant manufacturing. Three independent production lines operate under strict physical separation across all production stages."}
            </p>
            <p className="mt-3 text-[0.93rem] leading-7 text-ink-soft">
              {isZh ? "广州第二工厂正在建设中；深圳运营中心负责国际合作伙伴的跨境物流管理。" : "A second facility is under construction in Guangzhou; our Shenzhen operations center manages cross-border logistics for international partners."}
            </p>
            <p className="mt-3 text-[0.93rem] leading-7 text-ink-soft">
              {isZh ? "泰州贝诺生物科技持有 Eurofins GMP 审核认可与 SQF 食品安全评审第 9 版认证，可通过各发证机构的注册系统独立核实。我们的产品已获得多项国际质量认可。" : "Taizhou Beno Biotech holds Eurofins GMP audit recognition and SQF Food Safety Code Edition 9 certification — independently verifiable through each issuing body's registry. Our products have been awarded multiple international quality recognitions."}
            </p>

            {/* Chevron bullet list — 2 columns */}
            <div className="mt-7 grid grid-cols-2 gap-x-6 gap-y-3">
              {(isZh ? [
                "成立于 2016 年 · 江苏泰兴",
                "3,000 m² GMP 厂区",
                "3 条独立生产线",
                "30 名生产员工（单班制）",
                "每周 6 天运营",
                "广州工厂建设中",
              ] : [
                "Founded 2016 · Taixing, Jiangsu",
                "3,000 m² GMP facility",
                "3 independent production lines",
                "30 production staff (single shift)",
                "6 days / week operating schedule",
                "Guangzhou facility under construction",
              ]).map((item) => (
                <div key={item} className="flex items-start gap-2">
                  <ChevronRight className="mt-0.5 size-4 shrink-0 text-forest" strokeWidth={2} aria-hidden />
                  <span className="text-[0.85rem] leading-5 text-ink-soft">{item}</span>
                </div>
              ))}
            </div>

            {/* Stats row */}
            <div className="mt-10 grid grid-cols-3 gap-4 border-t border-line pt-8">
              {(isZh ? [
                { value: "500", unit: " MOQ", label: "最低起订量" },
                { value: "1.8亿+", unit: "/月", label: "月产能" },
                { value: "11 年", unit: "", label: "零事故记录" },
              ] : [
                { value: "500", unit: "MOQ", label: "Min. Order Qty" },
                { value: "180M+", unit: "/mo", label: "Units Capacity" },
                { value: "11 Yrs", unit: "", label: "Zero Incidents" },
              ]).map(({ value, unit, label }) => (
                <div key={label} className="text-left">
                  <p className="text-[clamp(1.6rem,2.5vw,2.2rem)] font-extrabold leading-none tracking-[-0.03em] text-forest">
                    {value}<span className="text-[1rem] font-semibold text-forest-mid">{unit}</span>
                  </p>
                  <p className="mt-1.5 text-[0.75rem] font-medium text-ink">{label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 grid-rows-2 gap-1 bg-line p-1">
            <div className="relative col-span-2 row-span-1 min-h-[260px]">
              <Image
                src="/images/science/factory-production-line.png"
                alt="Beno Biotech GMP production line with automated packaging equipment"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>
            <div className="relative min-h-[200px]">
              <Image
                src="/images/science/factory-cleanroom-corridor.png"
                alt="Clean room corridor with glass observation windows overlooking production"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 25vw, 50vw"
              />
            </div>
            <div className="relative min-h-[200px]">
              <Image
                src="/images/science/factory-airlock.png"
                alt="GMP airlock changing room with stainless steel lockers and pressure gauges"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 25vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ─── PARTNER BRANDS MARQUEE ─── */}
      <section className="border-y border-line bg-[#f8f7f2] py-10 overflow-hidden">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10 mb-6 text-center">
          <p className="text-[0.7rem] font-bold uppercase tracking-[0.18em] text-forest-mid">{isZh ? "合作品牌" : "Trusted by leading brands"}</p>
          <h2 className="mt-2 text-[clamp(1.2rem,2vw,1.6rem)] font-semibold tracking-[-0.02em] text-ink">
            {isZh ? "OEM 合作品牌与客户" : "OEM Partners & Brand Clients"}
          </h2>
        </div>
        <div className="relative w-full overflow-hidden">
          <div className="brand-marquee">
            {[
              { src: "/images/brands/nourse-logo.png", alt: "卫仕 NOURSE" },
              { src: "/images/brands/touchit-logo.png", alt: "Touch't 它时代" },
              { src: "/images/brands/bernate-logo.png", alt: "伯纳天纯" },
              { src: "/images/brands/keres-logo.png", alt: "凯锐思 KERES" },
              { src: "/images/brands/kuanfu-logo.png", alt: "宽福" },
              { src: "/images/brands/atspet-logo.png", alt: "ATSPET 强生宠儿" },
              { src: "/images/brands/chongxi-logo.png", alt: "Chongxi 宠熙" },
              { src: "/images/brands/nourse-logo.png", alt: "卫仕 NOURSE" },
              { src: "/images/brands/touchit-logo.png", alt: "Touch't 它时代" },
              { src: "/images/brands/bernate-logo.png", alt: "伯纳天纯" },
              { src: "/images/brands/keres-logo.png", alt: "凯锐思 KERES" },
              { src: "/images/brands/kuanfu-logo.png", alt: "宽福" },
              { src: "/images/brands/atspet-logo.png", alt: "ATSPET 强生宠儿" },
              { src: "/images/brands/chongxi-logo.png", alt: "Chongxi 宠熙" },
            ].map(({ src, alt }, i) => (
              <div key={i} className="flex shrink-0 items-center justify-center mx-10 h-28 w-52">
                <Image
                  src={src}
                  alt={alt}
                  width={200}
                  height={100}
                  className="h-20 w-auto max-w-[190px] object-contain transition-transform duration-300 hover:scale-105"
                  sizes="190px"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── MODULE 3: CERTIFICATIONS ─── */}
      <section id="certificates" className="scroll-mt-24 border-b border-line bg-white">
        {/* Header */}
        <div className="border-b border-line bg-[#f8f7f2] px-5 py-10 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-7xl flex flex-col items-center text-center">
            <div className="flex items-center gap-3 text-forest-mid">
              <Award className="size-4" strokeWidth={1.6} aria-hidden />
              <p className="b2b-kicker">{isZh ? "合规认证记录" : "Compliance & certification records"}</p>
            </div>
            <h2 className="mt-3 text-[clamp(1.4rem,2.4vw,2rem)] font-semibold leading-[1.15] tracking-[-0.025em] text-ink">
              {isZh ? "Eurofins、SQF 与 FDA 认证——可查证的质量证明" : "Verified by Eurofins, SQF & FDA — Certifications You Can Check"}
            </h2>
            <p className="mt-2 max-w-2xl text-[0.88rem] leading-6 text-ink-soft">
              {isZh ? "此处列出的每一项证书均由独立第三方现场审核后正式颁发。每项记录均可通过发证机构的注册系统公开核实。采购和监管团队可根据要求获取原始 PDF 文件。" : "Every certificate listed here was issued following an independent on-site audit. Each record is publicly verifiable through the issuing body's registry. Original PDFs are available on request for procurement and regulatory teams."}
            </p>
          </div>
        </div>

        {/* Cert full image */}
        <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:px-10">
          <div className="overflow-hidden rounded-sm border border-line bg-[#f8f7f2]">
            <Image
              src="/images/science/cert-all.png"
              alt="All certifications: FDA Food Facility Registration, Feed Production License, Business License, D-U-N-S, FFR Screenshots, GMP Certificate, SQF Confirmation Letter, SQF Certificate, SQF Quality Certificate"
              width={1448}
              height={1086}
              className="w-full h-auto object-contain"
              sizes="(min-width: 1280px) 1200px, 100vw"
              priority
            />
          </div>
          <p className="mt-4 text-center text-[0.78rem] text-ink-soft">
            FDA · Feed Production License · Business License · D-U-N-S · FFR Registration · Eurofins GMP · SQF Confirmation Letter · SQF Food Safety · SQF Quality Code
          </p>
        </div>
      </section>

      {/* ─── MODULE 4: SOFT CHEW ADVANTAGE ─── */}
      <section className="border-b border-line bg-[#f8f7f2]">
        <div className="mx-auto grid max-w-7xl lg:grid-cols-2">
          <div className="relative min-h-[400px] lg:min-h-auto lg:order-last">
            <Image
              src="/images/science/soft-chews-product.png"
              alt="Heart-shaped soft chew pet supplements produced at Beno Biotech"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>
          <div className="px-5 py-14 sm:px-8 lg:px-12 lg:py-20">
            <div className="flex items-center gap-3 text-forest-mid">
              <TrendingUp className="size-4" strokeWidth={1.6} aria-hidden />
              <p className="b2b-kicker">{isZh ? "生产能力" : "Production capability"}</p>
            </div>
            <h2 className="mt-4 text-[clamp(1.5rem,2.6vw,2.2rem)] font-semibold leading-[1.15] tracking-[-0.025em] text-ink">
              {isZh ? "中国最快软颗粒生产线" : "China's Fastest Soft Chew Production Line"}
            </h2>
            <p className="mt-4 text-[0.93rem] leading-7 text-ink-soft">
              {isZh ? "我们的高速挤出生产线每小时处理 1 吨原料，为中国同类设施中无可比拟，每月产能超过 1.8 亿粒。每个生产环节均检测硬度、湿度和重量，确保批次间的一致性。" : "Our high-speed extrusion line processes 1 tonne/hour — unmatched by any comparable facility in China — delivering 180M+ units per month. Hardness, moisture, and weight are checked at every production interval to ensure batch-to-batch consistency."}
            </p>
            <div className="mt-8 space-y-3">
              {(isZh ? [
                { icon: TrendingUp, title: "每小时 1 吨产能", desc: "中国最快的软颗粒生产线，小批量生产灵活且无额外成本。" },
                { icon: Layers, title: "心形、骨形、爪印及定制形状", desc: "提供多种模具选项，支持定制形状开发以实现品牌差异化。" },
                { icon: Check, title: "批次间稳定口感", desc: "每个生产检测节点均检测硬度、湿度和重量均一性。" },
              ] : [
                { icon: TrendingUp, title: "1 tonne / hour throughput", desc: "The fastest soft chew line in China, enabling short-run flexibility without cost penalties." },
                { icon: Layers, title: "Heart, bone, paw & custom shapes", desc: "Multiple mold options available; custom shape development supported for brand differentiation." },
                { icon: Check, title: "Stable texture across batches", desc: "Hardness, moisture, and weight uniformity tested at every production checkpoint." },
              ]).map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex gap-4 rounded-lg border border-line bg-white p-5">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-md bg-forest/10">
                    <Icon className="size-5 text-forest" strokeWidth={1.6} aria-hidden />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-ink">{title}</p>
                    <p className="mt-1 text-xs leading-5 text-ink-soft">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── MODULE 5: DOSAGE FORMS ─── */}
      <section className="border-b border-line bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16 lg:items-start">
            <div>
              <div className="flex items-center gap-3 text-forest-mid">
                <Layers className="size-4" strokeWidth={1.6} aria-hidden />
              <p className="b2b-kicker">{isZh ? "生产范围" : "Production scope"}</p>
            </div>
            <h2 className="mt-4 text-[clamp(1.5rem,2.6vw,2.2rem)] font-semibold leading-[1.15] tracking-[-0.025em] text-ink">
              {isZh ? "六种剂型，一个生产伙伴" : "Five Dosage Forms, One Manufacturing Partner"}
            </h2>
            <p className="mt-4 text-[0.93rem] leading-7 text-ink-soft">
              {isZh ? "全部六种剂型均在同一 GMP 和 SQF 认证的质量体系下生产，每种剂型配备专用设备和经验证的 SOP。" : "All six dosage forms are produced under the same GMP and SQF-certified quality system, with dedicated equipment and validated SOPs for each format."}
            </p>
              {/* Dosage form table */}
              <div className="mt-8 border border-line">
                <div className="grid grid-cols-3 border-b border-line bg-[#f8f7f2] px-5 py-2.5 text-[0.68rem] font-semibold uppercase tracking-[0.08em] text-ink-soft">
                  <span>{isZh ? "剂型" : "Dosage form"}</span>
                  <span>{isZh ? "设备" : "Equipment"}</span>
                  <span>{isZh ? "关键控制" : "Key control"}</span>
                </div>
                {(isZh ? [
                  { form: "软颗粒", equip: "高速挤出机", ctrl: "温度 / 硬度 / 湿度" },
                  { form: "片剂", equip: "旋转压片机", ctrl: "重量 / 硬度均一性" },
                  { form: "膏剂 & 凝胶", equip: "管式灰装线", ctrl: "灰装重量 / 粘度" },
                  { form: "液剂", equip: "不锈锂容器 + 灰装机", ctrl: "混合时间 / 灰装量" },
                  { form: "粉剂", equip: "密闭式混合机", ctrl: "混合均一性 / 防尘" },
                  { form: "颗粒剂", equip: "颗粒制备系统", ctrl: "粒径 / 湿度" },
                ] : [
                  { form: "Soft Chews", equip: "High-speed extrusion", ctrl: "Temp / hardness / moisture" },
                  { form: "Tablets", equip: "Rotary press", ctrl: "Weight / hardness uniformity" },
                  { form: "Pastes & Gels", equip: "Tube filling line", ctrl: "Fill weight / viscosity" },
                  { form: "Liquids", equip: "SS vessel + filler", ctrl: "Mixing time / fill volume" },
                  { form: "Powders", equip: "Closed blender", ctrl: "Blend uniformity / dust control" },
                  { form: "Granules", equip: "Granulation system", ctrl: "Particle size / moisture" },
                ]).map(({ form, equip, ctrl }, i) => (
                  <div key={form} className={`grid grid-cols-3 items-center px-5 py-3 text-sm ${i !== 0 ? "border-t border-line" : ""}`}>
                    <span className="font-semibold text-ink">{form}</span>
                    <span className="text-[0.82rem] text-ink-soft">{equip}</span>
                    <span className="text-[0.82rem] text-ink-soft">{ctrl}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg">
              <Image
                src="/images/science/ai-dosage-forms.jpg"
                alt="Various pet supplement dosage forms: soft chews, tablets, paste, liquid, powder"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 55vw, 100vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ─── MODULE 6: QUALITY CONTROL PROCESS ─── */}
      <section className="border-b border-line bg-[#f8f7f2] py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 text-forest-mid">
              <ClipboardCheck className="size-4" strokeWidth={1.6} aria-hidden />
              <p className="b2b-kicker">{isZh ? "质量控制体系" : "Quality control system"}</p>
            </div>
            <h2 className="mt-4 text-[clamp(1.5rem,2.6vw,2.2rem)] font-semibold leading-[1.15] tracking-[-0.025em] text-ink">
              {isZh ? "四阶段质控——由 Eurofins 审核认证" : "Four-Stage QC — Audited and Verified by Eurofins"}
            </h2>
            <p className="mt-4 text-[0.93rem] leading-7 text-ink-soft">
              {isZh ? "每一批次在出货前必须通过四个强制检测节点，生成的实物记录保存至少三年。已在 2026 年 6 月 Eurofins GMP 和 SQF 审核中独立验证（HACCP 计划：BN-HACCP01，Rev A/0）。" : "Every batch passes four mandatory checkpoints before shipment, generating physical records retained for a minimum of three years. Independently verified during the June 2026 Eurofins GMP and SQF audits (HACCP plan: BN-HACCP01, Rev A/0)."}
            </p>
          </div>

          {/* Horizontal step flow */}
          <div className="mt-12 hidden lg:block">
            <div className="relative flex items-start gap-0">
              {/* connecting line */}
              <div className="absolute left-[calc(12.5%)] right-[calc(12.5%)] top-[22px] h-px bg-line" aria-hidden />
              {(isZh ? [
                { icon: TestTube, step: "01", title: "原料来料检验", desc: "CoA 审查、双重质控签字确认，不合格批次隔离处理。关键活性成分在入库前进行双重验证。" },
                { icon: ClipboardCheck, step: "02", title: "生产过程监控", desc: "HACCP 关键控制点：原料称量（CCP1）和灯菌（CCP2）。混合时间、温度、湿度和重量按设定间隔记录。" },
                { icon: PackageCheck, step: "03", title: "成品检测", desc: "物理指标（重量、硬度、湿度）、微生物检测及有效成分定量检测。任何出货前必须由质控经理正式放行。" },
                { icon: ShieldCheck, step: "04", title: "留样与追溯", desc: "留样保存至保质期 + 6 个月。双向追溯：原料批次 → 成品 → 发货记录。" },
              ] : [
                { icon: TestTube, step: "01", title: "Raw Material Inspection", desc: "CoA review, dual QC sign-off, quarantine for non-conforming lots. Critical actives double-verified before warehouse release." },
                { icon: ClipboardCheck, step: "02", title: "In-Process Monitoring", desc: "HACCP CCPs: ingredient weighing (CCP1) and sterilization (CCP2). Mixing time, temperature, moisture and weight logged at defined intervals." },
                { icon: PackageCheck, step: "03", title: "Finished Product Testing", desc: "Physical (weight, hardness, moisture), microbiological, and active assay testing. QC manager formal release required before any shipment." },
                { icon: ShieldCheck, step: "04", title: "Batch Retention & Traceability", desc: "Retain samples held for shelf life + 6 months. Bidirectional traceability: raw material lots → finished goods → shipping records." },
              ]).map(({ icon: Icon, step, title, desc }) => (
                <div key={step} className="relative flex flex-1 flex-col items-center px-4 text-center">
                  <div className="relative z-10 flex size-11 items-center justify-center rounded-full border-2 border-forest bg-white">
                    <Icon className="size-5 text-forest" strokeWidth={1.6} aria-hidden />
                  </div>
                  <span className="mt-3 text-[0.65rem] font-bold uppercase tracking-[0.12em] text-forest-mid">{step}</span>
                  <h3 className="mt-1 text-[0.82rem] font-semibold text-ink">{title}</h3>
                  <p className="mt-2 text-[0.75rem] leading-5 text-ink-soft">{desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile: vertical cards */}
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:hidden">
            {(isZh ? [
              { icon: TestTube, step: "01", title: "原料来料检验", desc: "CoA 审查、双重质控签字确认，不合格批次隔离处理。关键活性成分在入库前进行双重验证。" },
              { icon: ClipboardCheck, step: "02", title: "生产过程监控", desc: "HACCP 关键控制点：原料称量（CCP1）和灯菌（CCP2）。混合时间、温度、湿度和重量按设定间隔记录。" },
              { icon: PackageCheck, step: "03", title: "成品检测", desc: "物理指标（重量、硬度、湿度）、微生物检测及有效成分定量检测。任何出货前必须由质控经理正式放行。" },
              { icon: ShieldCheck, step: "04", title: "留样与追溯", desc: "留样保存至保质期 + 6 个月。双向追溯：原料批次 → 成品 → 发货记录。" },
            ] : [
              { icon: TestTube, step: "01", title: "Raw Material Inspection", desc: "CoA review, dual QC sign-off, quarantine for non-conforming lots. Critical actives double-verified before warehouse release." },
              { icon: ClipboardCheck, step: "02", title: "In-Process Monitoring", desc: "HACCP CCPs: ingredient weighing (CCP1) and sterilization (CCP2). Mixing time, temperature, moisture and weight logged at defined intervals." },
              { icon: PackageCheck, step: "03", title: "Finished Product Testing", desc: "Physical (weight, hardness, moisture), microbiological, and active assay testing. QC manager formal release required before any shipment." },
              { icon: ShieldCheck, step: "04", title: "Batch Retention & Traceability", desc: "Retain samples held for shelf life + 6 months. Bidirectional traceability: raw material lots → finished goods → shipping records." },
            ]).map(({ icon: Icon, step, title, desc }) => (
              <article key={step} className="flex gap-4 border border-line bg-white p-5">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-full border border-forest/30 bg-forest/5">
                  <Icon className="size-5 text-forest" strokeWidth={1.6} aria-hidden />
                </div>
                <div>
                  <span className="text-[0.65rem] font-bold uppercase tracking-[0.1em] text-forest-mid">{step}</span>
                  <h3 className="mt-0.5 text-sm font-semibold text-ink">{title}</h3>
                  <p className="mt-2 text-[0.78rem] leading-5 text-ink-soft">{desc}</p>
                </div>
              </article>
            ))}
          </div>

          {/* Traceability evidence */}
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            <div className="flex items-center gap-5 border border-forest/20 bg-white px-6 py-5">
              <div className="shrink-0 text-center">
                <p className="text-[1.9rem] font-bold leading-none tracking-[-0.03em] text-forest">2,000</p>
                <p className="mt-0.5 text-[0.68rem] text-ink-soft">tubes</p>
              </div>
              <div className="border-l border-line pl-5">
                <p className="text-sm font-semibold text-ink">{isZh ? "90 分钒内完成全面追溯" : "Fully traced in 90 minutes"}</p>
                <p className="mt-1 text-[0.75rem] text-ink-soft">{isZh ? "宠物营养膏剂 — 批次 20260122" : "Pet nutrition paste — Batch 20260122"}</p>
                <p className="mt-0.5 text-[0.72rem] text-forest-mid">{isZh ? "双向追溯：原料 → 成品 → 发货" : "Bidirectional: raw material → finished goods → shipment"}</p>
              </div>
            </div>
            <div className="flex items-center gap-5 border border-forest/20 bg-white px-6 py-5">
              <div className="shrink-0 text-center">
                <p className="text-[1.9rem] font-bold leading-none tracking-[-0.03em] text-forest">4,000</p>
                <p className="mt-0.5 text-[0.68rem] text-ink-soft">bottles</p>
              </div>
              <div className="border-l border-line pl-5">
                <p className="text-sm font-semibold text-ink">{isZh ? "1.5 小时内完成全面追溯" : "Fully traced in 1.5 hours"}</p>
                <p className="mt-1 text-[0.75rem] text-ink-soft">{isZh ? "宠物营养片剂 — 批次 20260520" : "Pet nutrition tablet — Batch 20260520"}</p>
                <p className="mt-0.5 text-[0.72rem] text-forest-mid">{isZh ? "双向追溯：原料 → 成品 → 发货" : "Bidirectional: raw material → finished goods → shipment"}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── MODULE 7: R&D TEAM & FORMULATIONS ─── */}
      <section className="border-b border-line bg-white">
        <div className="mx-auto grid max-w-7xl lg:grid-cols-[1.4fr_0.6fr]">
          <div className="px-5 py-14 sm:px-8 lg:px-12 lg:py-20">
            <div className="flex items-center gap-3 text-forest-mid">
              <Microscope className="size-4" strokeWidth={1.6} aria-hidden />
              <p className="b2b-kicker">{isZh ? "研发与配方库" : "R&D & formulation library"}</p>
            </div>
            <h2 className="mt-4 text-[clamp(1.5rem,2.6vw,2.2rem)] font-semibold leading-[1.15] tracking-[-0.025em] text-ink">
              {isZh ? "学术研究专长，赋能商业化配方" : "Academic Research Expertise, Applied to Commercial Formulation"}
            </h2>
            <p className="mt-4 text-[0.93rem] leading-7 text-ink-soft">
              {isZh ? "由中国农业科学院王凯教授（国家优秀青年基金获得者）领衝的顾问团队，将同行评审的动物营养研究转化为商业化配方。针对需要专有配方的品牌，可提供从原型到验证规格的完整定制配方开发服务。" : "Led by Prof. Wang Kai (Chinese Academy of Agricultural Sciences, National Outstanding Youth Fund), our advisory team translates peer-reviewed animal nutrition research into commercial formulations. Custom formula development — from prototype to validated spec — is available for brands requiring proprietary recipes."}
            </p>
            {/* Formulation table */}
            <div className="mt-8 border border-line">
              <div className="grid grid-cols-[1fr_2fr] border-b border-line bg-[#f8f7f2] px-5 py-2.5 text-[0.68rem] font-semibold uppercase tracking-[0.08em] text-ink-soft">
                <span>{isZh ? "类别" : "Category"}</span>
                <span>{isZh ? "主要活性成分" : "Key Active Ingredients"}</span>
              </div>
              {(isZh ? [
                { name: "关节健康", ingredients: "MSM · 葡萄糖胺 · 软骨素 · 綠唇贝 · 维生素 C/E · 鱼油" },
                { name: "益生菌支持", ingredients: "多菌株益生菌 · 益生元纤维 · 消化酶" },
                { name: "抗痒 & 抗过敏", ingredients: "Omega-3 · 姜黄 · 橡皮素 · 葡萄籍 · 南瓜 · 菠萨虫白" },
                { name: "镇安 & 抗焦虑", ingredients: "洋甘菊 · 缔草根 · L-色氨酸 · 褶黑激素 · L-茶氨酸 · 西番荷花" },
                { name: "Omega-3 / 鱼油", ingredients: "EPA · DHA · 维生素 E（抗氧化稳定剂）" },
              ] : [
                { name: "Joint Health", ingredients: "MSM · Glucosamine · Chondroitin · Green-Lipped Mussel · Vitamin C/E · Fish Oil" },
                { name: "Probiotic Support", ingredients: "Multi-strain probiotics · Prebiotic fiber · Digestive enzymes" },
                { name: "Anti-Itch & Allergy", ingredients: "Omega-3 · Turmeric · Quercetin · Grape Seed · Pumpkin · Bromelain" },
                { name: "Calming & Anxiety", ingredients: "Chamomile · Valerian Root · L-Tryptophan · Melatonin · L-Theanine · Passionflower" },
                { name: "Omega-3 / Fish Oil", ingredients: "EPA · DHA · Vitamin E (antioxidant stabiliser)" },
              ]).map(({ name, ingredients }, i) => (
                <div key={name} className={`grid grid-cols-[1fr_2fr] items-start gap-4 px-5 py-3 text-sm ${i !== 0 ? "border-t border-line" : ""}`}>
                  <span className="font-semibold text-ink">{name}</span>
                  <span className="text-[0.8rem] leading-5 text-ink-soft">{ingredients}</span>
                </div>
              ))}
            </div>
            <p className="mt-3 text-[0.72rem] text-ink-soft">{isZh ? "所有活性成分均来自经过验证的供应商，并具备完整的溯源文件。" : "All active ingredients sourced from verified suppliers with full traceability documentation."}</p>
          </div>
          <div className="flex items-center justify-center bg-white px-8 py-14 lg:py-20">
            <div className="relative w-full max-w-[240px] overflow-hidden" style={{ aspectRatio: '3/4' }}>
              <Image
                src="/images/science/ai-lab-rd.jpg"
                alt="Pet supplement formulation ingredients and specification sheet"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 16vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ─── MODULE 8: LEADERSHIP TEAM ─── */}
      <section className="border-b border-line bg-[#f8f7f2] py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 text-forest-mid">
              <Users className="size-4" strokeWidth={1.6} aria-hidden />
              <p className="b2b-kicker">{isZh ? "领导团队与专业能力" : "Leadership & expertise"}</p>
            </div>
            <h2 className="mt-4 text-[clamp(1.5rem,2.6vw,2.2rem)] font-semibold leading-[1.15] tracking-[-0.025em] text-ink">
              {isZh ? "证书背后的团队" : "The Team Behind the Certifications"}
            </h2>
            <p className="mt-4 text-[0.93rem] leading-7 text-ink-soft">
              {isZh ? "生产制造经验、学术研究与国际贸易专长——这就是证书背后的团队。" : "Manufacturing experience, academic research, and international trade expertise — the team behind the certifications."}
            </p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {(isZh ? [
              {
                name: "王莉",
                title: "总经理",
                desc: "拥有 10 年以上宠物营养品制造经验，曾主管山山屋、伯纳天纯、凯锐思等品牌的 OEM 生产。供应商资质审核的主要联系人。",
              },
              {
                name: "王凯 教授",
                title: "技术顾问",
                desc: "中国农业科学院研究员、博士生导师、国家优秀青年基金获得者。主管配方开发与科学性对齐。",
              },
              {
                name: "杭晋",
                title: "运营总监",
                desc: "前阿里巴巴国际区域总经理，拥有 12 年 B2B 企业服务经验。主导深圳运营中心的跨境物流与合作伙伴入驻工作。",
              },
            ] : [
              {
                name: "Li Wang",
                title: "General Manager",
                desc: "10+ years in pet nutrition manufacturing. Previously managed OEM production for Wanpy, Bernate, and Kairisi. Primary contact for vendor qualification audits.",
              },
              {
                name: "Prof. Wang Kai",
                title: "Technical Advisor",
                desc: "Researcher at the Chinese Academy of Agricultural Sciences, doctoral supervisor, National Outstanding Youth Fund recipient. Oversees formulation development and scientific alignment.",
              },
              {
                name: "Jing Hang",
                title: "Operations Director",
                desc: "Former City GM at Alibaba International, 12 years of B2B enterprise experience. Leads the Shenzhen operations center for cross-border logistics and partner onboarding.",
              },
            ]).map(({ name, title, desc }) => (
              <article key={name} className="border border-line bg-white p-6">
                <div className="flex items-center gap-3 border-b border-line pb-4">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-forest/10">
                    <Users className="size-5 text-forest" strokeWidth={1.6} aria-hidden />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-ink">{name}</h3>
                    <p className="text-[0.7rem] font-medium uppercase tracking-[0.09em] text-forest-mid">{title}</p>
                  </div>
                </div>
                <p className="mt-4 text-[0.82rem] leading-6 text-ink-soft">{desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ─── MODULE 9: MILESTONES ─── */}
      <section className="border-b border-line bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr] lg:gap-16 lg:items-start">
            <div>
              <div className="flex items-center gap-3 text-forest-mid">
                <Clock className="size-4" strokeWidth={1.6} aria-hidden />
              <p className="b2b-kicker">{isZh ? "公司里程碑" : "Company milestones"}</p>
            </div>
            <h2 className="mt-4 text-[clamp(1.5rem,2.6vw,2.2rem)] font-semibold leading-[1.15] tracking-[-0.025em] text-ink">
              {isZh ? "十年持续投入，专注质量" : "Ten Years of Continuous Investment in Quality"}
            </h2>
            <p className="mt-4 text-[0.93rem] leading-7 text-ink-soft">
              {isZh ? "从 2016 年的小型配方团队，到如今的 GMP 和 SQF 认证制造商——每个里程碑都是对全球买家所需体系的主动投入。" : "From a small formulation team in 2016 to a GMP and SQF-certified manufacturer — every milestone reflects a deliberate investment in the systems global buyers require."}
            </p>
              <div className="mt-6 overflow-hidden rounded-lg border border-line">
                <Image
                  src="/images/science/trade-show.png"
                  alt="Beno Biotech exhibition booth at China pet industry trade show, showcasing OEM partner brands"
                  width={600}
                  height={600}
                  className="w-full object-cover"
                  sizes="(min-width: 1024px) 33vw, 100vw"
                />
              </div>
            </div>
            <div className="relative">
              <div className="absolute left-[7px] top-0 h-full w-px bg-line" aria-hidden />
              <ol className="space-y-0">
                {(isZh ? [
                  { year: "2016 年 8 月", event: "公司成立", detail: "泰州市贝诺生物科技有限公司在江苏泰兴正式成立，营业执照业务范围涵盖宠物食品研发、生产、加工与销售。" },
                  { year: "2019 年 6 月", event: "营业执照更新", detail: "统一社会信用代码 91321283MA1MR5HB8P 确认。注册资本 100 万元人民币。经营期限延长至 2046 年 8 月 10 日。" },
                  { year: "2020–2024 年", event: "高速生产线安装投产", detail: "投入中国最快的软颗粒挤出成型生产线，实现每小时 1 吨产能，月产能超过 1.8 亿粒。" },
                  { year: "2026 年 4 月", event: "饲料生产许可证颁发", detail: "江苏省级主管部门颁发许可证苏饲预（2026）12006，涵盖宠物添加剂预混合饲料。有效期至 2031 年 4 月 25 日。" },
                  { year: "2026 年 6 月", event: "GMP & SQF 双认证通过", detail: "Eurofins Food Assurance Certification US, LLC 进行三天现场审核。Eurofins GMP 认可（86% 得分）、SQF 食品安全评审第 9 版（88 分，评级 Good）及 SQF 质量体系第 9 版同时获得认证。" },
                  { year: "2026 年 7 月", event: "SQF 证书正式颁发", detail: "证书 SIN 105690 于 2026 年 7 月 20 日由 SQFI 正式颁发，有效期至 2027 年 8 月 28 日。FDA 食品设施注册号 10222600768 当前有效。" },
                  { year: "2026 年至今", event: "广州工厂建设中", detail: "第二工厂正在广州建设，以支持日益增长的国际 OEM 需求。混圳运营中心已正式运营，负责跨境贸易管理。" },
                ] : [
                  { year: "Aug 2016", event: "Company founded", detail: "Taizhou Beno Biotech Co., Ltd. established in Taixing, Jiangsu. Business license issued with scope covering pet food R&D, production, processing, and sales." },
                  { year: "Jun 2019", event: "Business license updated", detail: "Unified Social Credit Code 91321283MA1MR5HB8P confirmed. Registered capital: RMB 1,000,000. Operating period extended to August 10, 2046." },
                  { year: "2020–2024", event: "High-speed production line installed", detail: "Investment in China's fastest soft chew extrusion and forming line, achieving 1 tonne/hour throughput and monthly capacity exceeding 180 million units." },
                  { year: "Apr 2026", event: "Feed Production License issued", detail: "License No. 苏饲预（2026）12006 issued by Jiangsu provincial authority, covering pet additive premixed feed. Valid through April 25, 2031." },
                  { year: "Jun 2026", event: "GMP & SQF dual certification", detail: "Three-day on-site audit by Eurofins Food Assurance Certification US, LLC. Eurofins GMP recognition (score: 86%), SQF Food Safety Code Edition 9 (score: 88, rated Good), and SQF Quality Code Edition 9 all awarded simultaneously." },
                  { year: "Jul 2026", event: "SQF certifications formally issued", detail: "Certificate SIN 105690 formally issued by SQFI on July 20, 2026. Valid through August 28, 2027. FDA Food Facility Registration No. 10222600768 active and current." },
                  { year: "2026–", event: "Guangzhou facility under construction", detail: "Second production facility under construction in Guangzhou to support growing international OEM demand. Shenzhen operations center already operational for cross-border trade management." },
                ]).map(({ year, event, detail }) => (
                  <li key={year} className="relative pl-8 pb-8 last:pb-0">
                    <div className="absolute left-0 top-1.5 size-3.5 rounded-full border-2 border-forest bg-white" aria-hidden />
                    <p className="text-[0.65rem] font-bold uppercase tracking-[0.1em] text-forest-mid">{year}</p>
                    <p className="mt-0.5 text-sm font-semibold text-ink">{event}</p>
                    <p className="mt-1.5 text-[0.82rem] leading-6 text-ink-soft">{detail}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* ─── MODULE 10: 2026 PARTNER COMMITMENTS ─── */}
      <section className="border-b border-line bg-forest-deep py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 text-amber-soft">
              <FlaskConical className="size-4" strokeWidth={1.6} aria-hidden />
              <p className="b2b-kicker text-amber-soft">{isZh ? "2026 合作伙伴计划" : "2026 partner program"}</p>
            </div>
            <h2 className="mt-4 text-[clamp(1.5rem,2.6vw,2.2rem)] font-semibold leading-[1.15] tracking-[-0.025em] text-white">
              {isZh ? "对 2026 年国际合作伙伴的三项承诺" : "Three Commitments to Our 2026 International Partners"}
            </h2>
            <p className="mt-4 text-[0.93rem] leading-7 text-white/65">
              {isZh ? "三项运营承诺，专为 2026 年与我们合作的品牌而设——内建于我们的定价和产能分配方式之中。" : "Three operational commitments to brands partnering with us in 2026 — built into how we price and allocate production capacity."}
            </p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
                          {(isZh ? [
              {
                number: "01",
                title: "具有竞争力的价格与质量",
                desc: "GMP 和 SQF 认证制造的定价反映我们的运营效率，而非认证成本。与大型 CMO 相同的质量标准，新兴品牌同样可以获得。",
              },
              {
                number: "02",
                title: "早期合作伙伴优先排产",
                desc: "在 2026 年确定合作的品牌将获得优先生产排期，确保在需求高峰期您的订单不会被延误。",
              },
              {
                number: "03",
                title: "500 MOQ — 中国最低起订量",
                desc: "软颗粒最低起订 500 瓶（行业平均：3,000 瓶）。这是由我们的高速生产线支撑的永久特性，而非促销让步。",
              },
            ] : [
              {
                number: "01",
                title: "Quality at a Competitive Price",
                desc: "GMP and SQF-certified manufacturing priced to reflect our operational efficiency — not our certification costs. Same quality standards as larger CMOs, accessible to emerging brands.",
              },
              {
                number: "02",
                title: "Priority Fulfillment for Early Partners",
                desc: "Brands committing in 2026 receive priority production scheduling — ensuring your order is not displaced during peak demand periods.",
              },
              {
                number: "03",
                title: "500 MOQ — Lowest in China",
                desc: "500 bottles minimum for soft chews (industry avg: 3,000). A permanent feature enabled by our high-speed line — not a promotional concession.",
              },
            ]).map(({ number, title, desc }) => (
              <article key={number} className="border border-white/15 bg-white/[0.05] p-6 backdrop-blur-sm">
                <span className="text-[0.65rem] font-bold uppercase tracking-[0.12em] text-amber-soft">{number}</span>
                <h3 className="mt-2 text-sm font-semibold text-white">{title}</h3>
                <p className="mt-3 text-[0.82rem] leading-6 text-white/65">{desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ─── MODULE 11: FAQ (merged Science + Factory) ─── */}
      <section className="border-b border-line bg-white">
        <JsonLd data={faqJsonLd([...faqs, ...factoryFaqs])} />
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-14 sm:px-8 lg:grid-cols-[0.34fr_0.66fr] lg:px-10">
          <div>
            <p className="b2b-kicker text-forest-mid">{isZh ? "常见问题" : "FAQ"}</p>
            <h2 className="mt-3 text-[clamp(1.4rem,2.2vw,1.9rem)] font-semibold tracking-[-0.03em] text-ink">
              {isZh ? "常见问题" : "Frequently Asked Questions"}
            </h2>
            <p className="mt-3 text-[0.88rem] leading-6 text-ink-soft">
              {isZh ? "采购经理、法规事务团队及正在评估泰州贝诺生物科技作为制造伙伴的品牌方最常问的问题。" : "Common questions from procurement managers, regulatory affairs teams, and brand owners evaluating Taizhou Beno Biotech as a manufacturing partner."}
            </p>
          </div>
          <div className="border-t border-line">
            {[...faqs, ...factoryFaqs].map((item, index) => (
              <details key={item.q} className="group border-b border-line">
                <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-6 py-3 text-left">
                  <span className="flex items-start gap-4">
                    <span className="mt-0.5 text-[0.62rem] font-bold uppercase tracking-[0.1em] text-forest-mid">{String(index + 1).padStart(2, "0")}</span>
                    <span className="text-[0.88rem] font-semibold text-ink">{item.q}</span>
                  </span>
                  <span className="text-xl font-light text-forest transition-transform group-open:rotate-45" aria-hidden>
                    +
                  </span>
                </summary>
                <p className="pb-5 pl-10 pr-8 text-[0.85rem] leading-7 text-ink-soft">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FACTORY: PACKAGING ─── */}
      <section className="border-b border-line bg-[#e9eeea]">
        <div className="mx-auto grid max-w-[1480px] lg:grid-cols-[1.2fr_0.8fr]">
          <div className="relative min-h-[560px] border-r border-line">
            <Image src="/images/b2b/factory-packaging-line.png" alt="Automated pet supplement packaging line" fill className="object-cover" sizes="(min-width: 1024px) 60vw, 100vw" />
          </div>
          <div className="px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
            <p className="b2b-kicker text-forest-mid">{tf.packaging.kicker}</p>
            <h2 className="mt-4 text-4xl font-medium tracking-[-0.04em] text-ink">{tf.packaging.title}</h2>
            <p className="mt-5 text-sm leading-7 text-ink-soft">{tf.packaging.body}</p>
            <div className="mt-9 border-t border-line">
              {[
                [tf.packaging.primaryPacks, tf.packaging.primaryPacksValue],
                [tf.packaging.identification, tf.packaging.identificationValue],
                [tf.packaging.privateLabel, tf.packaging.privateLabelValue],
                [tf.packaging.releaseHandoff, tf.packaging.releaseHandoffValue],
              ].map(([label, value]) => (
                <div key={label} className="grid grid-cols-[0.34fr_0.66fr] gap-4 border-b border-line py-4">
                  <p className="text-sm font-semibold text-ink">{label}</p>
                  <p className="text-sm leading-6 text-ink-soft">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── FACTORY: WAREHOUSE ─── */}
      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-10">
        <div className="grid gap-0 border border-line lg:grid-cols-[0.78fr_1.22fr]">
          <div className="bg-white p-8 sm:p-10 lg:p-12">
            <Warehouse className="size-7 text-forest-mid" strokeWidth={1.5} aria-hidden />
            <p className="b2b-kicker mt-10 text-forest-mid">{tf.warehouse.kicker}</p>
            <h2 className="mt-4 text-3xl font-medium tracking-[-0.035em] text-ink">{tf.warehouse.title}</h2>
            <p className="mt-5 text-sm leading-7 text-ink-soft">{tf.warehouse.body}</p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="border-l-2 border-forest pl-4">
                <p className="text-2xl font-semibold text-forest">{tf.warehouse.stat1Value}</p>
                <p className="mt-1 text-xs leading-5 text-ink-soft">{tf.warehouse.stat1Label}</p>
              </div>
              <div className="border-l-2 border-forest pl-4">
                <p className="text-2xl font-semibold text-forest">{tf.warehouse.stat2Value}</p>
                <p className="mt-1 text-xs leading-5 text-ink-soft">{tf.warehouse.stat2Label}</p>
              </div>
            </div>
          </div>
          <div className="relative min-h-[500px] border-l border-line">
            <Image src="/images/b2b/factory-export-warehouse.png" alt="Finished-goods warehouse for export" fill className="object-cover" sizes="(min-width: 1024px) 60vw, 100vw" />
          </div>
        </div>
      </section>

      {/* ─── FACTORY: LOCATION ─── */}
      <section className="border-y border-line bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[0.3fr_0.7fr] lg:px-10">
          <div className="flex items-start gap-4">
            <MapPin className="mt-1 size-6 shrink-0 text-forest-mid" aria-hidden />
            <div>
              <p className="b2b-kicker text-forest-mid">{tf.location.kicker}</p>
              <h2 className="mt-3 text-2xl font-semibold text-ink">{tf.location.title}</h2>
            </div>
          </div>
          <address className="not-italic">
            <p className="text-lg leading-8 text-ink">{tf.location.address}</p>
            <p className="mt-4 text-sm leading-6 text-ink-soft">{tf.location.addressZh}</p>
          </address>
        </div>
      </section>



      {/* ─── BOTTOM CTA ─── */}
      <section className="border-b border-line bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 py-14 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-10">
          <div className="flex items-start gap-4">
            <FileText className="mt-1 size-5 shrink-0 text-forest-mid" aria-hidden />
            <div>
              <h2 className="text-xl font-semibold tracking-[-0.025em] text-ink">
                {isZh ? "需要供应商资质文件包？" : "Need a vendor-approval document package?"}
              </h2>
              <p className="mt-1.5 max-w-2xl text-[0.88rem] leading-6 text-ink-soft">
                {isZh ? "请发送产品信息、目标市场、所需证明文件及预期订单量。我们将在 24 小时内回复，提供完整的文件清单和时间安排。可提供文件：CoA · GMP 报告 · SQF 证书 · FDA 注册 · HACCP 摘要 · 过敏原声明。" : "Send the product, target market, requested evidence and expected order volume. We will respond within 24 hours with a complete document checklist and timeline. Available documents: CoA · GMP Report · SQF Certificate · FDA Registration · HACCP Summary · Allergen Statement."}
              </p>
            </div>
          </div>
          <Link href="/private-label#inquiry" className="b2b-btn-primary shrink-0">
            {isZh ? "申请项目文件" : "Request project documents"}
            <ArrowRight className="size-4" aria-hidden />
          </Link>
        </div>
      </section>
    </>
  );
}
