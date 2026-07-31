"use client";

import { useRef } from "react";
import { gsap, SplitText, useGSAP, prefersReducedMotion } from "@/components/motion/gsap";

type Props = {
  children: React.ReactNode;
  className?: string;
  id?: string;
  as?: "h1" | "h2" | "h3" | "p";
  /** 拆分粒度 */
  mode?: "words" | "lines" | "chars";
  /** false 时立即播放（首屏用），true 时滚动到 90% 视口触发 */
  triggerOnScroll?: boolean;
  delay?: number;
  stagger?: number;
};

/** 标题逐词/逐行从遮罩中升起 */
export default function SplitHeading({
  children,
  className,
  id,
  as: Tag = "h2",
  mode = "words",
  triggerOnScroll = true,
  delay = 0,
  stagger = 0.05,
}: Props) {
  const ref = useRef<HTMLHeadingElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;
      if (prefersReducedMotion()) return;

      const split = new SplitText(el, {
        type: mode === "chars" ? "chars,words" : `lines,${mode}`,
        linesClass: "overflow-clip pb-[0.1em] -mb-[0.1em]",
      });
      const targets = mode === "chars" ? split.chars : mode === "lines" ? split.lines : split.words;
      gsap.from(targets, {
        yPercent: 112,
        duration: 1.15,
        stagger,
        delay,
        ease: "power4.out",
        scrollTrigger: triggerOnScroll ? { trigger: el, start: "top 90%", once: true } : undefined,
        onComplete: () => split.revert(),
      });
    },
    { scope: ref }
  );

  return (
    <Tag ref={ref as React.Ref<never>} id={id} className={className}>
      {children}
    </Tag>
  );
}
