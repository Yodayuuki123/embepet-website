"use client";

import Link from "@/components/site/A";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
type Product = any;
import { gsap, useGSAP, prefersReducedMotion } from "@/components/motion/gsap";
import ProductCard from "@/components/site/ProductCard";

type Props = {
  products: Product[];
};

/** 水平滚动的明星产品区：桌面端 pin + 横移，移动端原生横滑 */
export default function BestSellers({ products }: Props) {
  const ref = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      const track = trackRef.current;
      if (!el || !track || prefersReducedMotion()) return;

      const mm = gsap.matchMedia();
      mm.add("(min-width: 1024px)", () => {
        const getDistance = () => track.scrollWidth - el.clientWidth + 96;
        const tween = gsap.to(track, {
          x: () => -getDistance(),
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top top",
            end: () => `+=${getDistance()}`,
            pin: true,
            scrub: 0.6,
            invalidateOnRefresh: true,
            anticipatePin: 1,
          },
        });
        return () => {
          tween.scrollTrigger?.kill();
          tween.kill();
        };
      });
      return () => mm.revert();
    },
    { scope: ref }
  );

  return (
    <section ref={ref} className="relative overflow-hidden bg-cream-warm" aria-labelledby="bestsellers-title">
      <div className="flex min-h-[100svh] flex-col justify-center py-16 lg:py-0">
        <div className="mx-auto mb-10 flex w-full max-w-7xl flex-wrap items-end justify-between gap-6 px-5 md:px-8">
          <div>
            <p className="eyebrow mb-4 text-forest-mid">Bestsellers</p>
            <h2 id="bestsellers-title" className="display-1 max-w-xl">
              The formulas pet parents reorder.
            </h2>
          </div>
          <Link
            href="/collections/dogs"
            className="link-underline inline-flex items-center gap-1.5 pb-1 text-[0.95rem] font-semibold text-forest"
          >
            Shop all <ArrowRight className="size-4" strokeWidth={2.2} />
          </Link>
        </div>

        {/* 桌面: GSAP 横移轨道; 移动: 原生横滑 */}
        <div className="overflow-x-auto pb-4 lg:overflow-visible lg:pb-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div
            ref={trackRef}
            className="flex w-max items-stretch gap-5 px-5 md:px-8 lg:pl-[max(1.25rem,calc((100vw-80rem)/2+2rem))]"
          >
            {products.map((p, i) => (
              <div key={p.id} className="w-[280px] shrink-0 sm:w-[320px]">
                <ProductCard product={p} eager={i < 2} />
              </div>
            ))}
            {/* 尾部 CTA 卡 */}
            <Link
              href="/shop"
              className="group grid w-[240px] shrink-0 place-items-center rounded-3xl border border-dashed border-forest/30 text-forest transition-colors hover:bg-forest hover:text-cream"
            >
              <span className="flex flex-col items-center gap-3 p-8 text-center">
                <span className="grid size-14 place-items-center rounded-full border border-current transition-transform duration-500 group-hover:rotate-45">
                  <ArrowRight className="size-5" strokeWidth={2} />
                </span>
                <span className="font-semibold">View all {""}products</span>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
