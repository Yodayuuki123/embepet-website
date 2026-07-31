"use client";

import { useRef, useState } from "react";
import { gsap, useGSAP, prefersReducedMotion } from "@/components/motion/gsap";

export const OVERTURE_KEY = "embepet_overture_seen";

/**
 * 品牌序章：首次进站的开幕动画。
 * 深林绿幕布 -> 字母逐个升起 -> 金光横扫 -> 幕布弧形上掀。
 * 会话内只播一次；滚动/点击可打断；reduced-motion 直接跳过。
 */
export default function BrandOverture() {
  const ref = useRef<HTMLDivElement>(null);
  const [done, setDone] = useState(false);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;

      const announce = () => window.dispatchEvent(new Event("embepet:overture:done"));

      const skip = prefersReducedMotion() || sessionStorage.getItem(OVERTURE_KEY) === "1";
      if (skip) {
        setDone(true);
        announce();
        return;
      }
      sessionStorage.setItem(OVERTURE_KEY, "1");
      document.documentElement.style.overflow = "hidden";

      const finish = () => {
        document.documentElement.style.overflow = "";
        setDone(true);
      };

      const tl = gsap.timeline({ onComplete: finish });

      tl.fromTo(
        "[data-ov-letter]",
        { yPercent: 118 },
        { yPercent: 0, duration: 0.7, stagger: 0.055, ease: "power4.out" },
        0.15
      )
        .fromTo(
          "[data-ov-tagline]",
          { autoAlpha: 0, y: 14 },
          { autoAlpha: 1, y: 0, duration: 0.5, ease: "power2.out" },
          "-=0.25"
        )
        .fromTo(
          "[data-ov-sweep]",
          { xPercent: -130, autoAlpha: 1 },
          { xPercent: 130, duration: 0.9, ease: "power2.inOut" },
          "-=0.35"
        )
        .to(
          "[data-ov-panel]",
          {
            clipPath: "ellipse(150% 100% at 50% -50%)",
            duration: 1.05,
            ease: "power4.inOut",
            onStart: announce, // 幕布开掀的同时 Hero 开始入场，衔接无缝
          },
          "-=0.15"
        )
        .set(el, { display: "none" });

      // 任何交互立即跳到结尾
      const interrupt = () => tl.progress(1);
      window.addEventListener("wheel", interrupt, { once: true, passive: true });
      window.addEventListener("touchstart", interrupt, { once: true, passive: true });
      window.addEventListener("keydown", interrupt, { once: true });
      el.addEventListener("click", interrupt, { once: true });

      return () => {
        window.removeEventListener("wheel", interrupt);
        window.removeEventListener("touchstart", interrupt);
        window.removeEventListener("keydown", interrupt);
        document.documentElement.style.overflow = "";
      };
    },
    { scope: ref }
  );

  if (done) return null;

  return (
    <div ref={ref} className="fixed inset-0 z-[100]" aria-hidden>
      <div
        data-ov-panel
        className="grain absolute inset-0 flex flex-col items-center justify-center bg-forest"
        style={{ clipPath: "ellipse(150% 150% at 50% 50%)" }}
      >
        <div className="relative overflow-hidden px-6">
          <h1
            className="flex select-none text-cream"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(3rem, 11vw, 8.5rem)",
              lineHeight: 1,
              letterSpacing: "0.04em",
              fontWeight: 520,
            }}
          >
            {/* Beno·Bio logo 图片逐字母升起效果 */}
            {"Beno·Bio".split("").map((ch, i) => (
              <span key={i} className="inline-block overflow-hidden">
                <span data-ov-letter className="inline-block will-change-transform">
                  {ch === "·" ? (
                    <span style={{ color: "#3B82F6" }}>·</span>
                  ) : (
                    ch
                  )}
                </span>
              </span>
            ))}
          </h1>
          <span
            data-ov-sweep
            className="pointer-events-none absolute inset-y-0 w-1/3 opacity-70"
            style={{
              background:
                "linear-gradient(100deg, transparent 0%, rgba(231,185,106,0.55) 45%, rgba(250,246,237,0.9) 50%, rgba(231,185,106,0.55) 55%, transparent 100%)",
              mixBlendMode: "overlay",
            }}
          />
        </div>
        <p data-ov-tagline className="eyebrow mt-6 text-gold">
          宠物软颗粒先行者 · 源头打造跨境爆款矩阵
        </p>
      </div>
    </div>
  );
}
