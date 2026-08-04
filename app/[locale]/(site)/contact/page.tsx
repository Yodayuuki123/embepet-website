import type { Metadata } from "next";
import {
  ArrowRight,
  Mail,
  Phone,
  Clock,
  MessageSquare,
  Building2,
  Globe,
} from "lucide-react";
import { metaWithLocale } from "@/lib/seo";
import Link from "@/components/site/A";
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

  const offices = [
    {
      icon: Building2,
      label: "Factory",
      name: "Taizhou Beno Biotech Co., Ltd.",
      detail: "Li Kong Group 3, Donglin Village, Yaowang Street, Taixing City, Jiangsu 225400, China",
      tag: "Manufacturing · GMP & SQF Certified",
    },
    {
      icon: Globe,
      label: "Operations",
      name: "Shenzhen Operations Center",
      detail: "Shenzhen, Guangdong, China",
      tag: "Cross-border logistics · Partner onboarding",
    },
    {
      icon: Building2,
      label: "New Facility",
      name: "Guangzhou (Under Construction)",
      detail: "Guangzhou, Guangdong, China",
      tag: "Expansion · Expected 2026",
    },
  ];

  return (
    <>
      {/* ─── HERO SPLIT ─── */}
      <section className="border-b border-line bg-[#f5f3ec]">
        <div className="mx-auto grid max-w-7xl lg:grid-cols-[0.48fr_0.52fr]">

          {/* Left: headline + contact details */}
          <div className="flex flex-col justify-between px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
            <div>
              <p className="text-[0.7rem] font-bold uppercase tracking-[0.18em] text-forest-mid">
                Get in touch
              </p>
              <h1 className="mt-5 text-[clamp(2.4rem,5vw,4rem)] font-extrabold leading-[1.05] tracking-[-0.03em] text-ink">
                Let&apos;s build<br />
                <span className="text-forest">something</span><br />
                together.
              </h1>
              <p className="mt-6 max-w-md text-[1rem] leading-7 text-ink-soft">
                Whether you&apos;re launching a new pet supplement brand, sourcing bulk stock, or evaluating us as a manufacturing partner — we respond within 24 hours.
              </p>
            </div>

            {/* Contact cards */}
            <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              <a
                href={`mailto:${settings.b2bEmail}`}
                className="group flex items-center gap-4 border border-line bg-white px-5 py-4 transition-shadow hover:shadow-md"
              >
                <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-forest/10 transition-colors group-hover:bg-forest/20">
                  <Mail className="size-5 text-forest" strokeWidth={1.6} aria-hidden />
                </div>
                <div>
                  <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-ink-soft">Email</p>
                  <p className="mt-0.5 text-sm font-semibold text-ink">{settings.b2bEmail}</p>
                </div>
              </a>

              <a
                href={`tel:${settings.phone}`}
                className="group flex items-center gap-4 border border-line bg-white px-5 py-4 transition-shadow hover:shadow-md"
              >
                <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-forest/10 transition-colors group-hover:bg-forest/20">
                  <Phone className="size-5 text-forest" strokeWidth={1.6} aria-hidden />
                </div>
                <div>
                  <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-ink-soft">Phone / WhatsApp</p>
                  <p className="mt-0.5 text-sm font-semibold text-ink">{settings.phone}</p>
                </div>
              </a>

              <div className="flex items-center gap-4 border border-line bg-white px-5 py-4 sm:col-span-2 lg:col-span-1 xl:col-span-2">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-forest/10">
                  <Clock className="size-5 text-forest" strokeWidth={1.6} aria-hidden />
                </div>
                <div>
                  <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-ink-soft">Response time</p>
                  <p className="mt-0.5 text-sm font-semibold text-ink">Within 24 hours · Mon – Sat, 8:00 – 17:00 CST</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: inquiry form */}
          <div className="border-t border-line bg-white px-5 py-16 sm:px-8 lg:border-l lg:border-t-0 lg:px-12 lg:py-24">
            <div className="flex items-center gap-3 text-forest-mid">
              <MessageSquare className="size-4" strokeWidth={1.6} aria-hidden />
              <p className="text-[0.7rem] font-bold uppercase tracking-[0.18em]">Send an inquiry</p>
            </div>
            <h2 className="mt-4 text-2xl font-semibold tracking-[-0.025em] text-ink">
              Tell us about your project
            </h2>
            <p className="mt-2 text-[0.88rem] leading-6 text-ink-soft">
              OEM / ODM · Private label · Wholesale · Factory audit · General questions
            </p>
            <div className="mt-8">
              <InquiryForm defaultType="private_label" />
            </div>
          </div>
        </div>
      </section>

      {/* ─── THREE OFFICES ─── */}
      <section className="border-b border-line bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="mb-10">
            <p className="text-[0.7rem] font-bold uppercase tracking-[0.18em] text-forest-mid">Our locations</p>
            <h2 className="mt-3 text-[clamp(1.4rem,2.4vw,2rem)] font-semibold tracking-[-0.025em] text-ink">
              Three-city operations across China
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {offices.map(({ icon: Icon, label, name, detail, tag }) => (
              <div key={label} className="border border-line bg-[#f8f7f2] p-6">
                <div className="flex items-center gap-3">
                  <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-forest/10">
                    <Icon className="size-4 text-forest" strokeWidth={1.6} aria-hidden />
                  </div>
                  <span className="text-[0.65rem] font-bold uppercase tracking-[0.12em] text-forest-mid">{label}</span>
                </div>
                <h3 className="mt-4 text-base font-semibold text-ink">{name}</h3>
                <p className="mt-2 text-[0.82rem] leading-5 text-ink-soft">{detail}</p>
                <p className="mt-3 text-[0.72rem] font-medium text-forest-mid">{tag}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHAT TO INCLUDE ─── */}
      <section className="border-b border-line bg-[#f8f7f2] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-[0.36fr_0.64fr] lg:items-start">
            <div>
              <p className="text-[0.7rem] font-bold uppercase tracking-[0.18em] text-forest-mid">Faster responses</p>
              <h2 className="mt-3 text-[clamp(1.4rem,2.2vw,1.9rem)] font-semibold tracking-[-0.025em] text-ink">
                What to include in your first message
              </h2>
              <p className="mt-3 text-[0.88rem] leading-6 text-ink-soft">
                The more context you share, the faster we can send back a tailored quote or document package.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                { num: "01", title: "Product & formula", desc: "Dosage form (soft chew, tablet, powder…), target species, and any existing formula or reference product." },
                { num: "02", title: "Target market", desc: "Destination country, sales channel (Amazon, retail, DTC), and any regulatory requirements you're aware of." },
                { num: "03", title: "Order volume", desc: "Estimated quantity per SKU and expected order frequency. Our MOQ starts at 500 bottles for soft chews." },
                { num: "04", title: "Documents needed", desc: "CoA, GMP report, SQF certificate, FDA registration, HACCP summary, allergen statement — specify what you need." },
              ].map(({ num, title, desc }) => (
                <div key={num} className="border border-line bg-white p-5">
                  <span className="text-[0.62rem] font-bold uppercase tracking-[0.12em] text-forest-mid">{num}</span>
                  <h3 className="mt-2 text-sm font-semibold text-ink">{title}</h3>
                  <p className="mt-2 text-[0.8rem] leading-5 text-ink-soft">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── BOTTOM CTA ─── */}
      <section className="bg-forest-deep">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 py-14 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-10">
          <div>
            <h2 className="text-xl font-semibold tracking-[-0.025em] text-white">
              Ready to start a project?
            </h2>
            <p className="mt-1.5 max-w-xl text-[0.88rem] leading-6 text-white/65">
              Browse our OEM / ODM services page for full details on formula development, packaging, and export documentation.
            </p>
          </div>
          <Link href="/private-label" className="b2b-btn-primary shrink-0 !bg-white !text-forest hover:!bg-white/90">
            View OEM / ODM services
            <ArrowRight className="size-4" aria-hidden />
          </Link>
        </div>
      </section>
    </>
  );
}
