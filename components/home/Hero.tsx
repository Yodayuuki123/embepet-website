"use client";

import Link from "@/components/site/A";
import { useRef } from "react";
import { ArrowRight, FlaskConical, ShieldCheck, Truck } from "lucide-react";
import { gsap, ScrollTrigger, SplitText, useGSAP, prefersReducedMotion } from "@/components/motion/gsap";
import Magnetic from "@/components/motion/Magnetic";
import ProductVisual from "@/components/site/ProductVisual";
import Stars from "@/components/site/Stars";
import { tone } from "@/lib/palette";
import { OVERTURE_KEY } from "./BrandOverture";

type HeroProduct = {
  slug: string;
  name: string;
  format: string;
  colorKey: string;
  imageUrl: string | null;
};

type Props = {
  product: HeroProduct;
  secondary: HeroProduct | null;
  ratingAvg: number;
  reviewCount: number;
};

const marqueeItems = [
  "Hip & Joint",
  "Gut Health",
  "Skin & Coat",
  "Calming",
  "Immunity",
  "Daily Multivitamin",
];

export default function Hero({ product, secondary, ratingAvg, reviewCount }: Props) {
  const ref = useRef<HTMLElement>(null);
  const t = tone(product.colorKey);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;

      if (prefersReducedMotion()) {
        gsap.set(el.querySelectorAll("[data-hero-fade], [data-hero-jar], [data-hero-chip]"), {
          autoAlpha: 1,
        });
        const h = el.querySelector("[data-hero-h1]") as HTMLElement | null;
        if (h) h.style.visibility = "visible";
        return;
      }

      // ---------- 入场编排（等品牌序章揭幕后开始） ----------
      const runIntro = () => {
        const h1 = el.querySelector("[data-hero-h1]") as HTMLElement | null;
        if (!h1) return;
        const split = new SplitText(h1, { type: "words", wordsClass: "hero-word", mask: "words" });
        gsap.set(h1, { visibility: "visible" });

        const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
        tl.from(split.words, { yPercent: 115, duration: 1.15, stagger: 0.05 }, 0)
          .fromTo(
            "[data-hero-fade]",
            { autoAlpha: 0, y: 26 },
            { autoAlpha: 1, y: 0, duration: 0.9, stagger: 0.09, ease: "power3.out" },
            0.35
          )
          .fromTo(
            "[data-hero-jar]",
            { autoAlpha: 0, y: 90, rotate: 5, scale: 0.92 },
            { autoAlpha: 1, y: 0, rotate: 0, scale: 1, duration: 1.3, ease: "power3.out" },
            0.25
          )
          .fromTo(
            "[data-hero-chip]",
            { autoAlpha: 0, scale: 0.7, y: 20 },
            { autoAlpha: 1, scale: 1, y: 0, duration: 0.8, stagger: 0.12, ease: "back.out(1.8)" },
            0.9
          )
          .add(() => split.revert());
      };

      if (sessionStorage.getItem(OVERTURE_KEY) === "1" && !document.querySelector("[data-ov-panel]")) {
        runIntro();
      } else {
        let started = false;
        const start = () => {
          if (started) return;
          started = true;
          runIntro();
        };
        window.addEventListener("embepet:overture:done", start, { once: true });
        // 兜底：序章异常时 4s 后强制入场
        const timer = setTimeout(start, 4000);
        return () => {
          clearTimeout(timer);
          window.removeEventListener("embepet:overture:done", start);
        };
      }
    },
    { scope: ref }
  );

  // ---------- 鼠标视差（分层景深） ----------
  useGSAP(
    () => {
      const el = ref.current;
      if (!el || prefersReducedMotion()) return;
      if (window.matchMedia("(hover: none)").matches) return;

      const layers = Array.from(el.querySelectorAll<HTMLElement>("[data-depth]"));
      const setters = layers.map((layer) => ({
        depth: Number(layer.dataset.depth ?? 0.05),
        x: gsap.quickTo(layer, "x", { duration: 1.1, ease: "power3.out" }),
        y: gsap.quickTo(layer, "y", { duration: 1.1, ease: "power3.out" }),
      }));

      const onMove = (e: MouseEvent) => {
        const { innerWidth, innerHeight } = window;
        const relX = e.clientX / innerWidth - 0.5;
        const relY = e.clientY / innerHeight - 0.5;
        for (const s of setters) {
          s.x(relX * s.depth * 90);
          s.y(relY * s.depth * 60);
        }
      };
      window.addEventListener("mousemove", onMove, { passive: true });
      return () => window.removeEventListener("mousemove", onMove);
    },
    { scope: ref }
  );

  // ---------- 滚出交接：罐体下落缩小、文案上浮淡出 ----------
  useGSAP(
    () => {
      const el = ref.current;
      if (!el || prefersReducedMotion()) return;

      const st = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: "top top",
          end: "bottom 32%",
          scrub: 0.6,
        },
      });
      st.to("[data-hero-copy]", { yPercent: -14, autoAlpha: 0.25, ease: "none" }, 0)
        .to("[data-hero-stage]", { yPercent: 16, scale: 0.88, rotate: -4, ease: "none" }, 0)
        .to("[data-hero-aurora]", { autoAlpha: 0.4, ease: "none" }, 0);

      return () => {
        st.scrollTrigger?.kill();
      };
    },
    { scope: ref }
  );

  return (
    <section
      ref={ref}
      className="grain grain-light relative flex min-h-[100svh] flex-col overflow-hidden pt-[68px]"
      aria-label="EMBEPET hero"
    >
      {/* 极光渐变背景 */}
      <div data-hero-aurora className="pointer-events-none absolute inset-0" aria-hidden>
        <div
          className="animate-aurora absolute -left-[15%] -top-[20%] size-[70vmax] rounded-full opacity-50 blur-[110px]"
          style={{ background: "radial-gradient(circle, rgba(127,176,143,0.55), transparent 62%)" }}
        />
        <div
          className="animate-aurora absolute -right-[18%] top-[8%] size-[58vmax] rounded-full opacity-45 blur-[110px]"
          style={{ background: "radial-gradient(circle, rgba(231,185,106,0.5), transparent 60%)", animationDelay: "-6s" }}
        />
        <div
          className="animate-aurora absolute -bottom-[30%] left-[22%] size-[52vmax] rounded-full opacity-35 blur-[120px]"
          style={{ background: `radial-gradient(circle, ${t.glow}66, transparent 62%)`, animationDelay: "-11s" }}
        />
      </div>

      <div className="relative mx-auto grid w-full max-w-7xl flex-1 items-center gap-10 px-5 pb-10 pt-6 md:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-4">
        {/* 左：文案 */}
        <div data-hero-copy className="relative z-10 max-w-2xl">
          <p data-hero-fade className="eyebrow mb-5 flex items-center gap-2.5 text-forest-mid opacity-0">
            <span className="inline-block size-1.5 rounded-full bg-amber" />
            Vet-formulated · Third-party tested
          </p>
          <h1 data-hero-h1 className="display-hero text-ink" style={{ visibility: "hidden" }}>
            Thriving pets,
            <br />
            backed by <em className="not-italic text-forest-mid">science</em>.
          </h1>
          <p data-hero-fade className="mt-6 max-w-md text-[1.06rem] leading-relaxed text-ink-soft opacity-0">
            Daily supplements for dogs and cats — formulated with veterinary nutritionists,
            produced in GMP-certified facilities, and tested batch by batch.
          </p>

          <div data-hero-fade className="mt-9 flex flex-wrap items-center gap-4 opacity-0">
            <Magnetic>
              <Link
                href="/shop"
                className="btn-liquid inline-flex h-[52px] items-center gap-2 rounded-full bg-forest px-8 text-[0.98rem] font-semibold text-cream"
                style={{ "--liquid": "var(--color-forest-mid)" } as React.CSSProperties}
              >
                Shop bestsellers <ArrowRight className="size-4" strokeWidth={2.2} />
              </Link>
            </Magnetic>
            <Magnetic strength={0.22}>
              <Link
                href="/science"
                className="btn-liquid inline-flex h-[52px] items-center gap-2 rounded-full border border-forest/25 px-7 text-[0.98rem] font-semibold text-forest hover:text-cream"
                style={{ "--liquid": "var(--color-forest)" } as React.CSSProperties}
              >
                Our science
              </Link>
            </Magnetic>
          </div>

          <div data-hero-fade className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-3 text-[0.85rem] text-ink-soft opacity-0">
            <span className="flex items-center gap-2">
              <Stars rating={ratingAvg} className="size-3.5" />
              <strong className="font-semibold text-ink">{ratingAvg.toFixed(1)}</strong>
              from {reviewCount}+ reviews
            </span>
            <span className="hidden h-4 w-px bg-line sm:block" />
            <span className="flex items-center gap-1.5"><Truck className="size-4" strokeWidth={1.8} /> Free US shipping $49+</span>
            <span className="flex items-center gap-1.5"><ShieldCheck className="size-4" strokeWidth={1.8} /> 30-day guarantee</span>
          </div>
        </div>

        {/* 右：产品舞台 */}
        <div data-hero-stage className="relative z-0 mx-auto w-full max-w-[520px]">
          <div className="relative aspect-[10/11]">
            {/* 光环 */}
            <div
              data-depth="0.04"
              className="absolute inset-[6%] rounded-full border border-forest/10"
              aria-hidden
            />
            <div
              data-depth="0.02"
              className="absolute inset-[16%] rounded-full opacity-70 blur-3xl"
              style={{ background: `radial-gradient(circle, ${t.glow}55, transparent 65%)` }}
              aria-hidden
            />

            {/* 植物剪影层 */}
            <svg
              data-depth="0.1"
              className="absolute -left-4 bottom-[12%] w-[30%] text-forest-mid/35"
              viewBox="0 0 120 200"
              fill="currentColor"
              aria-hidden
            >
              <path d="M60 200 C60 130 20 120 18 60 C50 80 58 120 60 140 C62 100 70 60 104 40 C96 110 62 120 60 200 Z" />
            </svg>
            <svg
              data-depth="0.14"
              className="absolute -right-2 top-[16%] w-[24%] rotate-[24deg] text-moss/40"
              viewBox="0 0 100 160"
              fill="currentColor"
              aria-hidden
            >
              <path d="M50 160 C50 90 10 90 12 30 C44 52 48 92 50 110 C52 74 60 40 88 20 C82 84 52 96 50 160 Z" />
            </svg>

            {/* 主罐体 */}
            <div data-hero-jar className="absolute inset-x-[14%] inset-y-[4%] opacity-0">
              <Link href={`/products/${product.slug}`} aria-label={product.name} className="block h-full w-full">
                <div className="animate-float h-full w-full drop-shadow-[0_36px_44px_rgba(27,58,42,0.24)]">
                  <ProductVisual
                    name={product.name}
                    format={product.format}
                    colorKey={product.colorKey}
                    imageUrl={product.imageUrl}
                    priority
                    className="h-full w-full"
                  />
                </div>
              </Link>
            </div>

            {/* 次级小罐 */}
            {secondary ? (
              <div
                data-depth="0.2"
                className="absolute -left-[4%] top-[6%] w-[30%] opacity-90"
                aria-hidden
              >
                <div data-hero-chip className="animate-float-late opacity-0 drop-shadow-[0_20px_28px_rgba(27,58,42,0.2)]">
                  <ProductVisual
                    name={secondary.name}
                    format={secondary.format}
                    colorKey={secondary.colorKey}
                    imageUrl={secondary.imageUrl}
                    className="h-full w-full"
                  />
                </div>
              </div>
            ) : null}

            {/* 浮动信息卡 */}
            <div
              data-depth="0.26"
              className="absolute -right-1 top-[54%] w-[190px]"
            >
              <div data-hero-chip className="rounded-2xl border border-line bg-white/85 p-3.5 opacity-0 shadow-[0_18px_40px_-18px_rgba(27,58,42,0.35)] backdrop-blur">
                <p className="flex items-center gap-2 text-[0.72rem] font-bold uppercase tracking-[0.12em] text-forest-mid">
                  <FlaskConical className="size-3.5" strokeWidth={2.2} /> Lab verified
                </p>
                <p className="mt-1.5 text-[0.8rem] leading-snug text-ink-soft">
                  Every batch third-party tested for purity & potency
                </p>
              </div>
            </div>
            <div data-depth="0.3" className="absolute bottom-[8%] left-[2%]">
              <div data-hero-chip className="flex items-center gap-2.5 rounded-full border border-line bg-white/85 py-2 pl-2.5 pr-4 opacity-0 shadow-[0_14px_32px_-14px_rgba(27,58,42,0.35)] backdrop-blur">
                <span className="grid size-8 place-items-center rounded-full bg-forest text-cream">
                  <svg viewBox="0 0 24 24" className="size-4" fill="currentColor" aria-hidden>
                    <circle cx="12" cy="14" r="4.4" />
                    <circle cx="5.6" cy="9.6" r="2.4" />
                    <circle cx="10" cy="6.4" r="2.4" />
                    <circle cx="14" cy="6.4" r="2.4" />
                    <circle cx="18.4" cy="9.6" r="2.4" />
                  </svg>
                </span>
                <div className="text-[0.78rem] leading-tight">
                  <p className="font-bold text-ink">62,000+ pets</p>
                  <p className="text-ink-soft">supported daily</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 底部跑马灯 + 滚动提示 */}
      <div className="relative border-t border-line/70 bg-cream/60 py-3.5 backdrop-blur-sm">
        <div className="mask-fade-x overflow-hidden">
          <div className="animate-marquee flex w-max items-center gap-10 pr-10">
            {[...marqueeItems, ...marqueeItems].map((item, i) => (
              <span key={i} className="eyebrow flex items-center gap-10 whitespace-nowrap text-ink-soft/80">
                {item}
                <svg viewBox="0 0 24 24" className="size-3 text-amber" fill="currentColor" aria-hidden>
                  <circle cx="12" cy="14" r="4.4" />
                  <circle cx="5.6" cy="9.6" r="2.4" />
                  <circle cx="10" cy="6.4" r="2.4" />
                  <circle cx="14" cy="6.4" r="2.4" />
                  <circle cx="18.4" cy="9.6" r="2.4" />
                </svg>
              </span>
            ))}
          </div>
        </div>
        <div className="animate-pulse-soft pointer-events-none absolute -top-12 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1 text-ink-soft/70 md:flex">
          <span className="text-[0.68rem] font-semibold uppercase tracking-[0.2em]">Scroll</span>
          <svg viewBox="0 0 12 20" className="h-5 w-3" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
            <rect x="1" y="1" width="10" height="18" rx="5" />
            <line x1="6" y1="5" x2="6" y2="9" strokeLinecap="round" />
          </svg>
        </div>
      </div>
    </section>
  );
}
