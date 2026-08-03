import type { Metadata } from "next";
import { Building2, Mail, MapPin, Phone } from "lucide-react";
import InquiryForm from "@/components/site/InquiryForm";
import JsonLd from "@/components/site/JsonLd";
import Link from "@/components/site/A";
import { container, section, kicker, h2 } from "@/components/b2b/kit";
import { getSettings } from "@/lib/settings";
import { breadcrumbJsonLd, faqJsonLd, metaWithLocale, webPageJsonLd } from "@/lib/seo";

export function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  return metaWithLocale(params, {
    title: "Contact a Pet Supplement Manufacturer | Request a Quote",
    description:
      "Contact EMBEPET and Taizhou Beno Biotech for a wholesale, private-label or OEM/ODM pet supplement quote. Send product, market, format, volume and packaging details.",
    path: "/contact",
    keywords: [
      "contact pet supplement manufacturer",
      "pet supplement manufacturing quote",
      "OEM pet supplement inquiry",
      "private label pet supplement quote",
      "Beno Bio contact",
    ],
    images: ["/images/b2b/oem-technical-review.png"],
    imageAlt: "Pet supplement OEM project review and quotation discussion",
  });
}

const contactFaqs = [
  {
    q: "What should I include in a pet supplement manufacturing inquiry?",
    a: "Include the destination market, species, target benefit, dosage form, expected volume, packaging direction, launch timing and any required tests or certificates. A complete brief makes the first commercial response more useful.",
  },
  {
    q: "Can I request both wholesale and custom pet supplements?",
    a: "Yes. Select wholesale for catalog-based supply, or private label/OEM/ODM when you need branding, packaging coordination, formula adjustment or custom development.",
  },
  {
    q: "Does submitting the form create an order?",
    a: "No. The website is a B2B inquiry platform, not a retail checkout. The team reviews the specification and issues a formal quotation before any commercial order is confirmed.",
  },
];

export default async function ContactPage() {
  const settings = await getSettings();

  return (
    <>
      <JsonLd
        data={webPageJsonLd({
          type: "ContactPage",
          path: "/contact",
          name: "Contact EMBEPET and Taizhou Beno Biotech",
          description:
            "B2B contact page for wholesale, private-label and OEM/ODM pet supplement manufacturing inquiries.",
          primaryImage: "/images/b2b/oem-technical-review.png",
        })}
      />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ])}
      />
      <JsonLd data={faqJsonLd(contactFaqs)} />

      <section className="border-b border-line bg-[#f5f3ec]">
        <div className={`${container} py-16 sm:py-20`}>
          <p className={`${kicker} text-forest-mid`}>B2B contact</p>
          <h1 className="mt-5 max-w-4xl text-[clamp(2rem,4vw,3.6rem)] font-semibold leading-[1.05] tracking-[-0.04em] text-ink">
            Request a pet supplement manufacturing quote.
          </h1>
          <p className="mt-6 max-w-3xl text-[1.02rem] leading-8 text-ink-soft">
            Share the product, destination market, dosage form, packaging direction and expected
            volume. The B2B team will identify the appropriate wholesale, private-label, OEM or ODM route.
          </p>
        </div>
      </section>

      <section className={`${container} ${section}`}>
        <div className="grid gap-12 lg:grid-cols-[0.38fr_0.62fr]">
          <div>
            <p className={`${kicker} text-forest-mid`}>Direct contacts</p>
            <h2 className={`${h2} mt-4`}>Send a complete project brief</h2>
            <p className="mt-5 text-sm leading-7 text-ink-soft">
              There is no retail checkout. Every project begins with specification review and formal commercial confirmation.
            </p>
            <div className="mt-8 border-t border-line">
              <a href={`mailto:${settings.b2bEmail}`} className="flex min-h-14 items-center gap-3 border-b border-line text-sm font-semibold text-forest">
                <Mail className="size-4" aria-hidden /> {settings.b2bEmail}
              </a>
              <a href={`tel:${settings.phone}`} className="flex min-h-14 items-center gap-3 border-b border-line text-sm font-semibold text-forest">
                <Phone className="size-4" aria-hidden /> {settings.phone}
              </a>
              <div className="flex gap-3 border-b border-line py-5 text-sm leading-6 text-ink-soft">
                <MapPin className="mt-0.5 size-4 shrink-0 text-forest-mid" aria-hidden />
                <span>Li Kong Group 3, Donglin Village, Yaowang Street, Taixing City, Jiangsu 225400, China</span>
              </div>
            </div>
            <p className="mt-6 flex items-center gap-2 text-sm text-ink-soft">
              <Building2 className="size-4 text-forest-mid" aria-hidden />
              Manufacturing entity: Taizhou Beno Biotech Co., Ltd.
            </p>
            <div className="mt-6 flex gap-5 text-sm font-semibold text-forest">
              <Link href="/factory" className="hover:underline">Factory profile</Link>
              <Link href="/science" className="hover:underline">Quality evidence</Link>
            </div>
          </div>
          <div className="border border-line bg-white p-6 sm:p-9">
            <InquiryForm />
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-white">
        <div className={`${container} ${section}`}>
          <div className="grid gap-12 lg:grid-cols-[0.36fr_0.64fr]">
            <div>
              <p className={`${kicker} text-forest-mid`}>Contact FAQ</p>
              <h2 className={`${h2} mt-4`}>Before you submit</h2>
            </div>
            <dl className="border-t border-line">
              {contactFaqs.map((item) => (
                <div key={item.q} className="border-b border-line py-6">
                  <dt className="text-lg font-semibold text-ink">{item.q}</dt>
                  <dd className="mt-3 text-sm leading-7 text-ink-soft">{item.a}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>
    </>
  );
}
