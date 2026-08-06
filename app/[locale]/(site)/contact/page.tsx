import type { Metadata } from "next";
import { Phone, MapPin, Clock } from "lucide-react";
import { metaWithLocale, breadcrumbJsonLd, absoluteUrl } from "@/lib/seo";
import JsonLd from "@/components/site/JsonLd";
import InquiryForm from "@/components/site/InquiryForm";
import { isLocale } from "@/lib/i18n/locales";
import { getSettings } from "@/lib/settings";

export function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  return metaWithLocale(params, {
    title: "Contact EMBEPET: Pet Supplement OEM/ODM Inquiries | Taizhou Beno Biotech",
    description:
      "Contact Taizhou Beno Biotech for pet supplement OEM/ODM inquiries, wholesale pricing, private label projects or factory audit requests. 24-hour response time for B2B inquiries.",
    path: "/contact",
  });
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale = isLocale(rawLocale) ? rawLocale : "en";
  const settings = await getSettings();
  const isZh = locale === "zh";

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd(
          [
            { name: "Home", path: "/" },
            { name: locale === "zh" ? "联系我们" : "Contact Us", path: "/contact" },
          ],
          locale
        )}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: locale === "zh" ? "联系我们" : "Contact EMBEPET",
          url: absoluteUrl(`/${locale}/contact`),
          description: locale === "zh"
            ? "联系泰州市贝诺生物科技有限公司，获取宠物营养品OEM/ODM报价、批发价格、私人品牌项目或工厂审核请求。24小时内回复B2B咨询。"
            : "Contact Taizhou Beno Biotech for pet supplement OEM/ODM inquiries, wholesale pricing, private label projects or factory audit requests. 24-hour response time for B2B inquiries.",
          mainEntity: {
            "@type": "Organization",
            "@id": `${absoluteUrl("/")}#manufacturer`,
            contactPoint: [
              {
                "@type": "ContactPoint",
                telephone: settings.phone,
                contactType: "Customer Service",
                areaServed: "Worldwide",
                availableLanguage: ["English", "Chinese"],
                hoursAvailable: {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                  opens: "09:00",
                  closes: "18:00",
                },
              },
              {
                "@type": "ContactPoint",
                email: settings.b2bEmail,
                contactType: "Sales",
                areaServed: "Worldwide",
                availableLanguage: ["English", "Chinese"],
              },
            ],
          },
        }}
      />
    <section className="min-h-screen bg-[#f8f7f2] py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">

        {/* Page header */}
        <div className="mb-12 text-center">
          <p className="text-[0.7rem] font-bold uppercase tracking-[0.18em] text-forest-mid">
            {isZh ? "联系我们" : "Contact Us"}
          </p>
          <h1 className="mt-3 text-[clamp(1.8rem,3.5vw,2.8rem)] font-semibold leading-[1.1] tracking-[-0.03em] text-ink">
            {isZh ? "与我们取得联系" : "Get in Touch"}
          </h1>
          <p className="mt-3 text-[0.9rem] leading-7 text-ink-soft">
            {isZh ? "工作日内 24 小时内回复。" : "We respond within 24 hours on business days."}
          </p>
        </div>

        {/* Two-column layout */}
        <div className="grid gap-10 lg:grid-cols-[0.42fr_0.58fr] lg:items-start">

          {/* Left: contact info */}
          <div className="space-y-8">
            {/* Contact person card */}
            <div className="rounded-2xl bg-white p-8 shadow-sm">
              <h2 className="text-lg font-semibold text-ink">
                {isZh ? "联系方式" : "Our Contact"}
              </h2>
              <div className="mt-6 space-y-5">
                {/* Company name */}
                <div className="pb-4 border-b border-line">
                  <p className="text-[0.82rem] font-semibold text-ink">恩贝宠生物科技（深圳）有限公司</p>
                  <p className="text-[0.78rem] text-ink-soft mt-0.5">Embepet Biotech (Shenzhen) Co., Ltd.</p>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-forest/10">
                    <Phone className="size-5 text-forest" strokeWidth={1.6} />
                  </div>
                  <div>
                    <p className="text-[0.75rem] font-semibold uppercase tracking-[0.08em] text-ink-soft">
                      {isZh ? "电话" : "Phone"}
                    </p>
                    <a href="tel:+860766-17818276837" className="mt-0.5 text-[0.95rem] font-medium text-ink hover:text-forest transition-colors">
                      +86 0766-17818276837
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-forest/10">
                    <Phone className="size-5 text-forest" strokeWidth={1.6} />
                  </div>
                  <div>
                    <p className="text-[0.75rem] font-semibold uppercase tracking-[0.08em] text-ink-soft">
                      {isZh ? "手机 / WhatsApp" : "Mobile / WhatsApp"}
                    </p>
                    <a href="tel:+8617818276837" className="mt-0.5 text-[0.95rem] font-medium text-ink hover:text-forest transition-colors">
                      +86 178 1827 6837
                    </a>
                    <p className="text-[0.78rem] text-ink-soft mt-0.5">
                      {isZh ? "联系人：杨美丹（杨小姐）" : "Contact: 杨美丹 (Ms. Yang)"}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-forest/10">
                    <Clock className="size-5 text-forest" strokeWidth={1.6} />
                  </div>
                  <div>
                    <p className="text-[0.75rem] font-semibold uppercase tracking-[0.08em] text-ink-soft">
                      {isZh ? "响应时间" : "Response Time"}
                    </p>
                    <p className="mt-0.5 text-[0.95rem] font-medium text-ink">
                      {isZh ? "24 小时内" : "Within 24 hours"}
                    </p>
                    <p className="text-[0.8rem] text-ink-soft">
                      {isZh ? "周一至周六 09:00–18:00 北京时间" : "Mon – Sat, 9:00 – 18:00 CST"}
                    </p>
                  </div>
              </div>

                {/* 1688 store link */}
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#ff6000]/10">
                    <svg className="size-5" viewBox="0 0 24 24" fill="none" aria-hidden>
                      <rect width="24" height="24" rx="4" fill="#ff6000"/>
                      <text x="3" y="17" fontSize="11" fontWeight="bold" fill="white" fontFamily="Arial">1688</text>
                    </svg>
                  </div>
                  <div>
                    <p className="text-[0.75rem] font-semibold uppercase tracking-[0.08em] text-ink-soft">
                      {isZh ? "1688 店铺" : "1688 Store"}
                    </p>
                    <a
                      href="https://shop990x3b0b04439.1688.com/page/offerlist.htm?scrollTo=pcTopNav&spm=a2615.2177701/2506.wp_pc_common_topnav.0"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-0.5 inline-flex items-center gap-1.5 text-[0.95rem] font-medium text-[#ff6000] hover:underline"
                    >
                      {isZh ? "访问我们的 1688 店铺" : "Visit our 1688 shop"}
                      <svg className="size-3.5" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 8h10M9 4l4 4-4 4"/></svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Office locations */}
            <div className="rounded-2xl bg-white p-8 shadow-sm">
              <h2 className="text-lg font-semibold text-ink">
                {isZh ? "我们的地址" : "Our Locations"}
              </h2>
              <div className="mt-6 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-forest/10">
                    <MapPin className="size-5 text-forest" strokeWidth={1.6} />
                  </div>
                  <div>
                    <p className="text-[0.75rem] font-semibold uppercase tracking-[0.08em] text-forest-mid">
                      {isZh ? "生产工厂" : "Factory"}
                    </p>
                    <p className="mt-0.5 text-[0.88rem] leading-6 text-ink">
                      {isZh ? "台州贝诺生物科技有限公司" : "Taizhou Beno Biotech Co., Ltd."}<br />
                      {isZh ? "江苏省泰州市泰兴市姚王镇" : "Yaowang Town, Taixing, Taizhou, Jiangsu, China"}
                    </p>
                    <p className="text-[0.78rem] text-ink-soft">江苏省泰州市泰兴市姚王镇东林村李空三组</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-forest/10">
                    <MapPin className="size-5 text-forest" strokeWidth={1.6} />
                  </div>
                  <div>
                    <p className="text-[0.75rem] font-semibold uppercase tracking-[0.08em] text-forest-mid">
                      {isZh ? "运营中心" : "Operations"}
                    </p>
                    <p className="mt-0.5 text-[0.88rem] leading-6 text-ink">
                      {isZh ? "恩贝宠生物科技（深圳）有限公司" : "Embepet Biotech (Shenzhen) Co., Ltd."}<br />
                      {isZh ? "广东省深圳市" : "Shenzhen, Guangdong, China"}
                    </p>
                    <p className="text-[0.78rem] text-ink-soft">深圳市</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: inquiry form */}
          <div className="rounded-2xl bg-white p-8 shadow-sm sm:p-10">
            <h2 className="mb-6 text-lg font-semibold text-ink">
              {isZh ? "发送询盘" : "Send Us a Message"}
            </h2>
            <InquiryForm defaultType="private_label" locale={locale} />
          </div>

        </div>
      </div>
    </section>
    </>
  );
}
