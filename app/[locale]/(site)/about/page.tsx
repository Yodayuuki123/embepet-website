import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight, Building2, Factory, FileCheck2, MapPin } from "lucide-react";
import Link from "@/components/site/A";
import JsonLd from "@/components/site/JsonLd";
import { container, section, kicker, h2, btn } from "@/components/b2b/kit";
import { breadcrumbJsonLd, metaWithLocale, webPageJsonLd } from "@/lib/seo";

export function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  return metaWithLocale(params, {
    title: "About Taizhou Beno Bio | Pet Supplement Manufacturer",
    description:
      "Learn about Taizhou Beno Biotech, a pet supplement manufacturer established in 2016 with a 3,000 m² facility, 3 production lines and OEM/ODM capability.",
    path: "/about",
    keywords: [
      "Taizhou Beno Biotech",
      "Beno Bio",
      "pet supplement company",
      "China pet supplement manufacturer",
      "pet nutrition OEM company",
    ],
    images: ["/images/b2b/company/factory-entrance.png"],
    imageAlt: "Entrance of the Taizhou Beno Biotech pet supplement factory",
  });
}

const facts = [
  ["Established", "August 2016"],
  ["Facility", "3,000 m²"],
  ["Production & warehouse", "2,000 m²"],
  ["Production lines", "3"],
  ["Production staff", "30"],
  ["Licensed scope", "Solid, semi-solid & liquid"],
];

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={webPageJsonLd({
          type: "AboutPage",
          path: "/about",
          name: "About Taizhou Beno Biotech Co., Ltd.",
          description:
            "Verified company profile, manufacturing scope and quality credentials for Taizhou Beno Biotech Co., Ltd.",
          primaryImage: "/images/b2b/company/factory-entrance.png",
        })}
      />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "About Beno Bio", path: "/about" },
        ])}
      />

      <section className="border-b border-line bg-[#f5f3ec]">
        <div className={`${container} py-16 sm:py-20`}>
          <p className={`${kicker} text-forest-mid`}>About Beno Bio</p>
          <h1 className="mt-5 max-w-4xl text-[clamp(2rem,4vw,3.6rem)] font-semibold leading-[1.05] tracking-[-0.04em] text-ink">
            A pet supplement manufacturing company built for B2B supply.
          </h1>
          <p className="mt-6 max-w-3xl text-[1.02rem] leading-8 text-ink-soft">
            Taizhou Beno Biotech Co., Ltd. was established in August 2016 in Taixing City,
            Jiangsu, China. The company manufactures pet additive premixed feed and supports
            wholesale, private-label and OEM/ODM projects for brands, distributors and retailers.
          </p>
        </div>
      </section>

      <section className={`${container} ${section}`}>
        <div className="grid gap-12 lg:grid-cols-[0.46fr_0.54fr] lg:items-start">
          <div>
            <p className={`${kicker} text-forest-mid`}>Direct answer</p>
            <h2 className={`${h2} mt-4`}>Who manufactures EMBEPET projects?</h2>
            <p className="mt-6 text-sm leading-7 text-ink-soft">
              EMBEPET is the commercial brand used for global business development. Taizhou Beno
              Biotech Co., Ltd. is the manufacturing entity named on the supplied production,
              Eurofins GMP and SQF records. Keeping those roles explicit helps procurement teams
              verify the legal entity behind a quotation and certificate package.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/factory" className={btn.primary}>
                Review the factory <ArrowRight className="size-4" aria-hidden />
              </Link>
              <Link href="/science#certificates" className={btn.outline}>
                Verify certificates
              </Link>
            </div>
          </div>
          <div className="relative min-h-[430px] overflow-hidden border border-line bg-white">
            <Image
              src="/images/b2b/company/factory-entrance.png"
              alt="Taizhou Beno Biotech factory entrance in Taixing City, Jiangsu"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 54vw, 100vw"
            />
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-white">
        <div className={`${container} ${section}`}>
          <div className="grid gap-12 lg:grid-cols-[0.32fr_0.68fr]">
            <div>
              <Building2 className="size-7 text-forest-mid" strokeWidth={1.6} aria-hidden />
              <p className={`${kicker} mt-8 text-forest-mid`}>Verified profile</p>
              <h2 className={`${h2} mt-4`}>Company facts buyers can use</h2>
            </div>
            <dl className="grid border-l border-t border-line sm:grid-cols-2 lg:grid-cols-3">
              {facts.map(([label, value]) => (
                <div key={label} className="min-h-32 border-b border-r border-line p-5">
                  <dt className="text-[0.68rem] font-semibold uppercase tracking-[0.1em] text-ink-soft">
                    {label}
                  </dt>
                  <dd className="mt-5 text-lg font-semibold text-forest">{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section className={`${container} ${section}`}>
        <div className="grid gap-px border border-line bg-line md:grid-cols-3">
          {[
            {
              icon: Factory,
              title: "Manufacturing scope",
              body: "Soft chews, tablets, pastes, drops and oils, powders and granules within the licensed solid, semi-solid and liquid premix scope.",
            },
            {
              icon: FileCheck2,
              title: "Quality evidence",
              body: "Eurofins GMP audit recognition, SQF Food Safety Code: Pet Food Manufacturing and SQF Quality Code records with identifiers and validity dates.",
            },
            {
              icon: MapPin,
              title: "Factory location",
              body: "Li Kong Group 3, Donglin Village, Yaowang Street, Taixing City, Jiangsu 225400, China.",
            },
          ].map(({ icon: Icon, title, body }) => (
            <article key={title} className="bg-white p-7">
              <Icon className="size-6 text-forest-mid" strokeWidth={1.6} aria-hidden />
              <h3 className="mt-8 text-lg font-semibold text-ink">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-ink-soft">{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-forest-deep text-white">
        <div className={`${container} flex flex-col gap-8 py-16 lg:flex-row lg:items-center lg:justify-between`}>
          <div>
            <h2 className="text-3xl font-semibold tracking-[-0.035em]">Evaluating Beno Bio as a supplier?</h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-white/65">
              Send the product, destination market, expected volume and document requirements for a project-specific review.
            </p>
          </div>
          <Link href="/contact" className={btn.light}>
            Contact the B2B team <ArrowRight className="size-4" aria-hidden />
          </Link>
        </div>
      </section>
    </>
  );
}
