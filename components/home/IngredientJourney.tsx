"use client";

import { useRef } from "react";
import { Leaf, FlaskConical, Factory, BadgeCheck } from "lucide-react";
import { gsap, useGSAP, prefersReducedMotion } from "@/components/motion/gsap";

const steps = [
  {
    icon: Leaf,
    kicker: "01 · Sourcing",
    title: "Ingredients chosen like evidence",
    body: "Green-lipped mussel from New Zealand, wild-caught anchovy oil, USDA-grade botanicals. Every input has a certificate of analysis before it enters the building.",
    stat: "40+",
    statLabel: "vetted suppliers",
    color: "#7FB08F",
  },
  {
    icon: FlaskConical,
    kicker: "02 · Formulation",
    title: "Dosed at levels that matter",
    body: "Veterinary nutritionists set inclusion rates from published research — not sprinkle-dusting for the label. Each active is dosed per body weight guidance.",
    stat: "12",
    statLabel: "clinically informed actives",
    color: "#E7B96A",
  },
  {
    icon: Factory,
    kicker: "03 · Production",
    title: "Cold-pressed, GMP-made",
    body: "Low-heat cold-press keeps probiotics alive and omegas stable. Produced in GMP-certified facilities with full lot traceability from raw material to jar.",
    stat: "100%",
    statLabel: "lot traceability",
    color: "#DE8F63",
  },
  {
    icon: BadgeCheck,
    kicker: "04 · Verification",
    title: "Tested batch by batch",
    body: "Independent labs verify potency, heavy metals, and microbials on every single batch. If it does not pass, it does not ship. Simple as that.",
    stat: "3rd",
    statLabel: "party lab verified",
    color: "#A5BC85",
  },
];

/** 滚动钉住的"成分之旅"叙事段：左侧文案逐步切换，右侧进度环与图标随滚动推进 */
export default function IngredientJourney() {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;

      if (prefersReducedMotion()) {
        gsap.set(el.querySelectorAll("[data-step]"), { autoAlpha: 1, position: "relative", yPercent: 0 });
        return;
      }

      const mm = gsap.matchMedia();

      mm.add("(min-width: 1024px)", () => {
        const stepEls = gsap.utils.toArray<HTMLElement>("[data-step]", el);
        const stepDots = gsap.utils.toArray<HTMLElement>("[data-step-dot]", el);
        const progressLine = el.querySelector("[data-progress-line]") as HTMLElement | null;
        const counter = el.querySelector("[data-step-counter]") as HTMLElement | null;

        gsap.set(stepEls, { autoAlpha: 0, yPercent: 8 });
        gsap.set(stepEls[0], { autoAlpha: 1, yPercent: 0 });
        // 初始：第一个 dot 高亮
        gsap.set(stepDots, { background: "transparent" });
        gsap.set(stepDots[0], { background: `${steps[0].color}20` });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: el,
            start: "top top",
            end: `+=${(steps.length - 1) * 90}%`,
            pin: true,
            scrub: 0.5,
            anticipatePin: 1,
          },
        });

        for (let i = 1; i < steps.length; i++) {
          tl.to(stepEls[i - 1], { autoAlpha: 0, yPercent: -8, duration: 0.35, ease: "power2.in" }, i)
            .to(stepDots[i - 1], { background: "transparent", duration: 0.35, ease: "power2.in" }, i)
            .fromTo(
              stepEls[i],
              { autoAlpha: 0, yPercent: 8 },
              { autoAlpha: 1, yPercent: 0, duration: 0.4, ease: "power2.out" },
              i + 0.32
            )
            .fromTo(
              stepDots[i],
              { background: "transparent" },
              { background: `${steps[i].color}20`, duration: 0.4 },
              i + 0.32
            )
            .add(() => {
              if (counter) counter.textContent = `0${i + 1}`;
            }, i + 0.35);
        }

        // 进度线随滚动填满
        if (progressLine) {
          gsap.set(progressLine, { height: "0%" });
          gsap.to(progressLine, {
            height: "100%",
            ease: "none",
            scrollTrigger: {
              trigger: el,
              start: "top top",
              end: `+=${(steps.length - 1) * 90}%`,
              scrub: true,
            },
          });
        }
      });

      // 移动端：普通纵向排布 + 入场动画
      mm.add("(max-width: 1023px)", () => {
        gsap.set("[data-step]", { clearProps: "all" });
        gsap.utils.toArray<HTMLElement>("[data-step]", el).forEach((step) => {
          gsap.fromTo(
            step,
            { autoAlpha: 0, y: 40 },
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.9,
              ease: "power3.out",
              scrollTrigger: { trigger: step, start: "top 85%", once: true },
            }
          );
        });
      });

      return () => mm.revert();
    },
    { scope: ref }
  );

  return (
    <section
      ref={ref}
      className="grain grain-light relative overflow-hidden bg-forest text-cream"
      aria-label="How EMBEPET supplements are made"
    >
      <div className="mx-auto grid min-h-[100svh] w-full max-w-7xl items-center gap-12 px-5 py-20 md:px-8 lg:grid-cols-[1fr_0.85fr] lg:py-0">
        {/* 左：步骤文案（桌面端叠放，移动端顺排） */}
        <div>
          <p className="eyebrow mb-4 text-gold">From nature to bowl</p>
          <h2 className="display-1 mb-12 max-w-lg lg:mb-16" style={{ color: "var(--color-cream)" }}>
            Four checkpoints between an ingredient and your pet.
          </h2>

          <div className="relative lg:h-[300px]">
            {steps.map((s, i) => (
              <div
                key={i}
                data-step
                className={`mb-12 max-w-md lg:absolute lg:inset-0 lg:mb-0 ${i > 0 ? "lg:invisible" : ""}`}
              >
                <p className="eyebrow mb-3" style={{ color: s.color }}>{s.kicker}</p>
                <h3 className="display-2" style={{ color: "var(--color-cream)" }}>{s.title}</h3>
                <p className="mt-4 leading-relaxed text-cream/80">{s.body}</p>
                <p className="mt-6 flex items-baseline gap-3">
                  <span className="font-display text-4xl font-semibold" style={{ fontFamily: "var(--font-display)", color: s.color }}>
                    {s.stat}
                  </span>
                  <span className="text-[0.85rem] uppercase tracking-[0.14em] text-cream/70">{s.statLabel}</span>
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 右：垂直步骤指示器（仅桌面） */}
        <div className="relative hidden max-w-[320px] place-self-center lg:flex flex-col items-center gap-0">
          {/* 垂直步骤条 */}
          <div className="relative flex flex-col items-center" style={{ height: "360px" }}>
            {/* 连接线背景 */}
            <div className="absolute top-10 bottom-10 left-1/2 w-px -translate-x-1/2 bg-cream/15" aria-hidden />
            {/* 连接线进度（通过 JS 控制高度） */}
            <div
              data-progress-line
              className="absolute top-10 left-1/2 w-px -translate-x-1/2 bg-gold origin-top transition-[height] duration-500"
              style={{ height: "0%" }}
              aria-hidden
            />
            {/* 四个步骤节点 */}
            {steps.map((s, i) => {
              const Icon = s.icon;
              return (
                <div
                  key={i}
                  data-step-node
                  className="relative z-10 flex items-center gap-5 w-full"
                  style={{ height: "90px" }}
                >
                  {/* 圆形节点 */}
                  <span
                    data-step-dot
                    className="grid size-12 shrink-0 place-items-center rounded-full border-2 transition-all duration-500"
                    style={{
                      borderColor: s.color,
                      background: i === 0 ? `${s.color}20` : "transparent",
                    }}
                  >
                    <Icon className="size-5 transition-all duration-500" strokeWidth={1.5} style={{ color: s.color }} />
                  </span>
                  {/* 右侧标签 */}
                  <div className="flex flex-col justify-center min-w-0">
                    <p className="text-[0.62rem] font-bold uppercase tracking-[0.16em] text-cream/40">{s.kicker}</p>
                    <p className="text-[0.82rem] font-semibold text-cream/90 leading-tight mt-0.5">{s.title}</p>
                  </div>
                </div>
              );
            })}
          </div>
          {/* 底部计数器 */}
          <p className="text-[0.72rem] uppercase tracking-[0.2em] text-cream/40 mt-2">
            Step <span data-step-counter className="text-gold font-bold">01</span> of 04
          </p>
        </div>
      </div>
    </section>
  );
}
