"use client";

import { useRef } from "react";
import { gsap, useGSAP, prefersReducedMotion } from "@/components/motion/gsap";

function fmt(v: number, decimals: number, compact: boolean) {
  if (compact) {
    return new Intl.NumberFormat("en-US", { notation: "compact", maximumFractionDigits: 1 }).format(v);
  }
  return new Intl.NumberFormat("en-US", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(v);
}

/** 滚动进入时数字滚动到目标值 */
export default function Counter({
  to,
  suffix = "",
  prefix = "",
  decimals = 0,
  compact = false,
  className,
  duration = 2,
}: {
  to: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  compact?: boolean;
  className?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el || prefersReducedMotion()) return;
      const state = { v: 0 };
      gsap.to(state, {
        v: to,
        duration,
        ease: "power2.out",
        scrollTrigger: { trigger: el, start: "top 90%", once: true },
        onUpdate() {
          el.textContent = `${prefix}${fmt(state.v, decimals, compact)}${suffix}`;
        },
      });
    },
    { scope: ref }
  );

  return (
    <span ref={ref} className={className}>
      {prefix}
      {fmt(to, decimals, compact)}
      {suffix}
    </span>
  );
}
