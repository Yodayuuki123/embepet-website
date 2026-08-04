"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { Factory, FlaskConical, Tag, type LucideIcon } from "lucide-react";

/* ═══════════════════════════════════════════════════════════════
   ServiceOrbit — circular interactive showcase.
   Numbered icon-nodes sit on a ring around a big center dial.
   Nodes auto-advance on a timer and are clickable; the panel on
   the right updates to the active service. Forest B2B palette.

   Icons are referenced by name (a string) because this is a Client
   Component — a Server Component cannot pass a function/component
   as a prop across the boundary.
   ═══════════════════════════════════════════════════════════════ */

const ICONS: Record<string, LucideIcon> = {
  Factory,
  FlaskConical,
  Tag,
};

export type OrbitItem = {
  icon: keyof typeof ICONS;
  title: string;
  body: string;
};

const AUTOPLAY_MS = 4500;

export default function ServiceOrbit({ items }: { items: OrbitItem[] }) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  const go = useCallback(
    (i: number) => setActive(((i % items.length) + items.length) % items.length),
    [items.length],
  );

  useEffect(() => {
    if (paused) return;
    timer.current = setInterval(() => {
      setActive((a) => (a + 1) % items.length);
    }, AUTOPLAY_MS);
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [paused, items.length]);

  const activeItem = items[active];
  const ActiveIcon = ICONS[activeItem.icon];

  // Distribute nodes evenly around the ring, starting from the top.
  const R = 42; // percentage radius within the square ring box

  return (
    <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.92fr)] lg:gap-16">
      {/* ---- Ring + nodes ---- */}
      <div
        className="relative mx-auto aspect-square w-full max-w-[440px]"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {/* faint outer ring track */}
        <span
          className="pointer-events-none absolute inset-[9%] rounded-full border border-forest-mid/15"
          aria-hidden
        />
        {/* progress arc — rotates to the active node */}
        <span
          className="pointer-events-none absolute inset-[9%] rounded-full border-[3px] border-transparent border-t-forest-mid transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
          style={{ transform: `rotate(${(active / items.length) * 360}deg)` }}
          aria-hidden
        />

        {/* center dial */}
        <div className="absolute left-1/2 top-1/2 flex aspect-square w-[46%] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-forest-mid/15 bg-white text-center shadow-[0_20px_50px_-30px_rgb(20_41_29_/_0.45)]">
          <span className="text-[clamp(2.4rem,5vw,3.4rem)] font-bold leading-none tracking-[-0.02em] text-forest">
            0{active + 1}
          </span>
          <span className="mt-3 max-w-[80%] text-[0.82rem] font-semibold leading-5 text-forest-mid">
            {activeItem.title}
          </span>
        </div>

        {/* nodes */}
        {items.map((item, i) => {
          const Icon = ICONS[item.icon];
          const angle = (i / items.length) * 2 * Math.PI - Math.PI / 2; // start at top
          const x = 50 + R * Math.cos(angle);
          const y = 50 + R * Math.sin(angle);
          const isActive = i === active;
          return (
            <button
              key={item.title}
              type="button"
              onClick={() => go(i)}
              aria-label={`${item.title} (step ${i + 1})`}
              aria-current={isActive}
              className="group absolute -translate-x-1/2 -translate-y-1/2"
              style={{ left: `${x}%`, top: `${y}%` }}
            >
              <span
                className={[
                  "relative flex size-[clamp(56px,13vw,84px)] items-center justify-center rounded-full transition-all duration-300",
                  isActive
                    ? "scale-110 bg-forest text-white shadow-[0_16px_36px_-16px_rgb(20_41_29_/_0.6)]"
                    : "bg-forest-mid/[0.08] text-forest-mid group-hover:bg-forest-mid/20",
                ].join(" ")}
              >
                <Icon className="size-[42%]" strokeWidth={1.6} aria-hidden />
                <span
                  className={[
                    "absolute -right-1 -top-1 flex size-6 items-center justify-center rounded-full text-[0.62rem] font-bold ring-2 ring-white",
                    isActive ? "bg-amber-soft text-forest-deep" : "bg-forest-mid text-white",
                  ].join(" ")}
                >
                  0{i + 1}
                </span>
              </span>
            </button>
          );
        })}
      </div>

      {/* ---- Content panel ---- */}
      <div>
        <div className="flex items-center gap-3">
          <span className="inline-flex size-12 items-center justify-center rounded-md bg-forest-mid/[0.09] text-forest-mid">
            <ActiveIcon className="size-6" strokeWidth={1.6} aria-hidden />
          </span>
          <span className="text-[0.72rem] font-bold uppercase tracking-[0.18em] text-forest-mid">
            Service 0{active + 1}
          </span>
        </div>
        <h3 className="mt-6 text-[clamp(1.6rem,2.6vw,2.1rem)] font-semibold leading-[1.15] tracking-[-0.02em] text-ink">
          {activeItem.title}
        </h3>
        <p className="mt-5 max-w-xl text-[0.98rem] leading-8 text-ink-soft">{activeItem.body}</p>

        {/* dot indicators */}
        <div className="mt-9 flex items-center gap-2.5">
          {items.map((item, i) => (
            <button
              key={item.title}
              type="button"
              onClick={() => go(i)}
              aria-label={`Show ${item.title}`}
              className={[
                "h-1.5 rounded-full transition-all duration-300",
                i === active ? "w-8 bg-forest" : "w-1.5 bg-forest-mid/25 hover:bg-forest-mid/50",
              ].join(" ")}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
