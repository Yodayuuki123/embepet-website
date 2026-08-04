import type { Metadata } from "next";
import { metaWithLocale } from "@/lib/seo";
import InquiryForm from "@/components/site/InquiryForm";
import { isLocale } from "@/lib/i18n/locales";
import { getDict } from "@/lib/i18n";
import { getSettings } from "@/lib/settings";

export function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  return metaWithLocale(params, {
    title: "Contact Us | EMBEPET — Pet Supplement Manufacturer",
    description:
      "Get in touch with Taizhou Beno Biotech Co., Ltd. for OEM/ODM inquiries, wholesale pricing, or factory audit requests. We respond within 24 hours.",
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
  const dict = getDict(locale);
  const settings = await getSettings();

  return (
    <section className="min-h-screen bg-[#f8f7f2] py-20 sm:py-28">
      <div className="mx-auto max-w-2xl px-5 sm:px-8">
        <div className="mb-10 text-center">
          <p className="text-[0.7rem] font-bold uppercase tracking-[0.18em] text-forest-mid">Contact Us</p>
          <h1 className="mt-3 text-[clamp(1.8rem,3.5vw,2.8rem)] font-semibold leading-[1.1] tracking-[-0.03em] text-ink">
            Send Us a Message
          </h1>
          <p className="mt-3 text-[0.9rem] leading-7 text-ink-soft">
            We respond within 24 hours on business days.
          </p>
        </div>
        <div className="rounded-2xl bg-white p-8 shadow-sm sm:p-10">
          <InquiryForm defaultType="private_label" />
        </div>
      </div>
    </section>
  );
}
