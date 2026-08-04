import type { Metadata } from "next";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
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
      <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">

        {/* Page header */}
        <div className="mb-12 text-center">
          <p className="text-[0.7rem] font-bold uppercase tracking-[0.18em] text-forest-mid">Contact Us</p>
          <h1 className="mt-3 text-[clamp(1.8rem,3.5vw,2.8rem)] font-semibold leading-[1.1] tracking-[-0.03em] text-ink">
            Get in Touch
          </h1>
          <p className="mt-3 text-[0.9rem] leading-7 text-ink-soft">
            We respond within 24 hours on business days.
          </p>
        </div>

        {/* Two-column layout */}
        <div className="grid gap-10 lg:grid-cols-[0.42fr_0.58fr] lg:items-start">

          {/* Left: contact info */}
          <div className="space-y-8">
            {/* Contact person card */}
            <div className="rounded-2xl bg-white p-8 shadow-sm">
              <h2 className="text-lg font-semibold text-ink">Our Contact</h2>
              <div className="mt-6 space-y-5">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-forest/10">
                    <Mail className="size-5 text-forest" strokeWidth={1.6} />
                  </div>
                  <div>
                    <p className="text-[0.75rem] font-semibold uppercase tracking-[0.08em] text-ink-soft">Email</p>
                    <a href="mailto:b2b@embepet.com" className="mt-0.5 text-[0.95rem] font-medium text-ink hover:text-forest transition-colors">
                      b2b@embepet.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-forest/10">
                    <Phone className="size-5 text-forest" strokeWidth={1.6} />
                  </div>
                  <div>
                    <p className="text-[0.75rem] font-semibold uppercase tracking-[0.08em] text-ink-soft">Phone / WhatsApp</p>
                    <a href="tel:+8613800000000" className="mt-0.5 text-[0.95rem] font-medium text-ink hover:text-forest transition-colors">
                      +86 138 0000 0000
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-forest/10">
                    <Clock className="size-5 text-forest" strokeWidth={1.6} />
                  </div>
                  <div>
                    <p className="text-[0.75rem] font-semibold uppercase tracking-[0.08em] text-ink-soft">Response Time</p>
                    <p className="mt-0.5 text-[0.95rem] font-medium text-ink">Within 24 hours</p>
                    <p className="text-[0.8rem] text-ink-soft">Mon – Sat, 9:00 – 18:00 CST</p>
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
                    <p className="text-[0.75rem] font-semibold uppercase tracking-[0.08em] text-ink-soft">1688 Store</p>
                    <a
                      href="https://shop990x3b0b04439.1688.com/page/offerlist.htm?scrollTo=pcTopNav&spm=a2615.2177701/2506.wp_pc_common_topnav.0"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-0.5 inline-flex items-center gap-1.5 text-[0.95rem] font-medium text-[#ff6000] hover:underline"
                    >
                      Visit our 1688 shop
                      <svg className="size-3.5" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 8h10M9 4l4 4-4 4"/></svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Office locations */}
            <div className="rounded-2xl bg-white p-8 shadow-sm">
              <h2 className="text-lg font-semibold text-ink">Our Locations</h2>
              <div className="mt-6 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-forest/10">
                    <MapPin className="size-5 text-forest" strokeWidth={1.6} />
                  </div>
                  <div>
                    <p className="text-[0.75rem] font-semibold uppercase tracking-[0.08em] text-forest-mid">Factory</p>
                    <p className="mt-0.5 text-[0.88rem] leading-6 text-ink">
                      Taixing, Jiangsu, China<br />
                      <span className="text-ink-soft">泰兴市，江苏省</span>
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-forest/10">
                    <MapPin className="size-5 text-forest" strokeWidth={1.6} />
                  </div>
                  <div>
                    <p className="text-[0.75rem] font-semibold uppercase tracking-[0.08em] text-forest-mid">Operations</p>
                    <p className="mt-0.5 text-[0.88rem] leading-6 text-ink">
                      Shenzhen, Guangdong, China<br />
                      <span className="text-ink-soft">深圳市，广东省</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: inquiry form */}
          <div className="rounded-2xl bg-white p-8 shadow-sm sm:p-10">
            <h2 className="mb-6 text-lg font-semibold text-ink">Send Us a Message</h2>
            <InquiryForm defaultType="private_label" />
          </div>

        </div>
      </div>
    </section>
  );
}
