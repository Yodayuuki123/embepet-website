"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

type Props = {
  children: React.ReactNode;
  className?: string;
  /** 上浮距离 px */
  y?: number;
  delay?: number;
  duration?: number;
  /** 子元素逐个进场（选择器，如 "[data-stagger]"） */
  stagger?: number;
  staggerSelector?: string;
  as?: "div" | "section" | "span" | "li";
};

/** 滚动进入视口时上浮显现；无 JS 时内容保持可见（SEO 安全） */
export default function Reveal({
  children,
  className,
  y = 34,
  delay = 0,
  duration = 1.05,
  stagger,
  staggerSelector = "[data-stagger]",
  as: Tag = "div",
}: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;
      const targets = stagger ? el.querySelectorAll(staggerSelector) : el;
      gsap.fromTo(
        targets,
        { autoAlpha: 0, y },
        {
          autoAlpha: 1,
          y: 0,
          duration,
          delay,
          ease: "power3.out",
          stagger: stagger ?? 0,
          clearProps: "transform",
          scrollTrigger: { trigger: el, start: "top 88%", once: true },
        }
      );
    },
    { scope: ref }
  );

  return (
    <Tag ref={ref as React.Ref<never>} className={className}>
      {children}
    </Tag>
  );
}
