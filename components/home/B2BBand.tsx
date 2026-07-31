"use client";
import Link from "@/components/site/A";
import { ArrowRight, Container, Factory, Globe2 } from "lucide-react";
import Reveal from "@/components/motion/Reveal";

export default function B2BBand() {
  return (
    <section className="cv-auto mx-auto max-w-7xl px-5 pb-20 md:px-8 md:pb-28" aria-labelledby="b2b-title">
      <Reveal y={44}>
        <div className="grain grain-light relative overflow-hidden rounded-[2rem] bg-ink px-8 py-12 text-cream md:px-14 md:py-16">
          <div
            className="animate-aurora absolute -right-[10%] -top-[40%] size-[60vmin] rounded-full opacity-30 blur-[100px]"
            style={{ background: "radial-gradient(circle, #E7B96A, transparent 60%)" }}
            aria-hidden
          />
          <div className="relative grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <p className="eyebrow mb-4 text-gold">For retailers & brands</p>
              <h2 id="b2b-title" className="display-1 max-w-2xl" style={{ color: "var(--color-cream)" }}>
                Stock EMBEPET — or build your own brand on our line.
              </h2>
              <p className="mt-5 max-w-xl leading-relaxed text-cream/70">
                Wholesale programs for pet retailers and clinics, plus private-label and OEM/ODM
                manufacturing from our GMP-certified facility. Low MOQs, export documentation,
                and formulation support included.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/wholesale"
                  className="btn-liquid inline-flex h-12 items-center gap-2 rounded-full bg-gold px-7 text-[0.95rem] font-bold text-ink"
                  style={{ "--liquid": "var(--color-cream)" } as React.CSSProperties}
                >
                  Wholesale program <ArrowRight className="size-4" strokeWidth={2.4} />
                </Link>
                <Link
                  href="/private-label"
                  className="btn-liquid inline-flex h-12 items-center gap-2 rounded-full border border-cream/30 px-7 text-[0.95rem] font-semibold text-cream"
                  style={{ "--liquid": "rgba(250,246,237,0.12)" } as React.CSSProperties}
                >
                  Private label / OEM
                </Link>
              </div>
            </div>
            <ul className="grid gap-4">
              {[
                { icon: Factory, title: "GMP manufacturing", body: "Audited facility with full lot traceability and CoA per batch" },
                { icon: Container, title: "Low MOQs", body: "Start from 500 units per SKU with stock formulas" },
                { icon: Globe2, title: "Export ready", body: "US labeling guidance and export documentation support" },
              ].map(({ icon: Icon, title, body }) => (
                <li key={title} className="flex gap-4 rounded-2xl border border-cream/12 bg-cream/5 p-5 backdrop-blur">
                  <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-gold/15 text-gold">
                    <Icon className="size-5" strokeWidth={1.8} />
                  </span>
                  <div>
                    <p className="font-semibold text-cream">{title}</p>
                    <p className="mt-0.5 text-[0.86rem] leading-relaxed text-cream/60">{body}</p>
                  </div>
                </li>
              ))}
            </ul>
            {/* 平台标签 — 从原 Global Map 模块合并 */}
            <div className="mt-6">
              <p className="text-[0.68rem] font-semibold tracking-[0.18em] uppercase text-cream/35 mb-3">
                Supporting 11+ platforms
              </p>
              <div className="flex flex-wrap gap-1.5">
                {["Amazon","AliExpress","TikTok","Shopee","Shopify","eBay","Temu","Lazada","SHEIN","Wish","Ozon"].map(p => (
                  <span key={p} className="rounded-full border border-cream/12 bg-cream/5 px-2.5 py-1 text-[0.7rem] font-medium text-cream/70">
                    {p}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
