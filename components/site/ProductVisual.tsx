import { pal } from "@/lib/palette";

type Props = {
  name: string;
  colorKey: string;
  format?: string;
  species?: string;
  size?: "sm" | "md" | "lg";
  className?: string;
  imageUrl?: string | null;
  /** 首屏关键图（LCP 候选）：eager 加载 + 高优先级 */
  priority?: boolean;
};

const speciesGlyph = (species?: string) =>
  species === "cat" ? "CAT" : species === "dog_cat" ? "DOG + CAT" : "DOG";

/**
 * 产品视觉：真实产品图（imageUrl）优先；否则渲染品牌化罐体/瓶体/软管。
 * 纯服务端输出，零 JS 成本。
 */
export default function ProductVisual({ name, colorKey, format = "chew", species = "dog", size = "md", className = "", imageUrl, priority = false }: Props) {
  const p = pal(colorKey);

  if (imageUrl) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={imageUrl}
        alt={name}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "auto"}
        decoding={priority ? "sync" : "async"}
        className={`h-full w-full object-contain mix-blend-multiply ${className}`}
      />
    );
  }

  const scale = size === "lg" ? "text-[10px]" : size === "sm" ? "text-[6px]" : "text-[8px]";
  const isOil = format === "oil";
  const isPaste = format === "paste";

  return (
    <div className={`relative flex h-full w-full items-end justify-center ${scale} ${className}`} aria-hidden>
      {/* 阴影 */}
      <div
        className="absolute bottom-[2%] left-1/2 h-[4%] w-[62%] -translate-x-1/2 rounded-[50%] opacity-25"
        style={{ background: `radial-gradient(ellipse, ${p.deep}, transparent 70%)` }}
      />

      {isPaste ? (
        /* ---------- 软管 ---------- */
        <div className="relative mb-[6%] flex h-[86%] w-[46%] flex-col items-center">
          <div className="h-[7%] w-[34%] rounded-t-[0.5em]" style={{ background: p.deep }} />
          <div className="h-[3%] w-[44%]" style={{ background: p.mid }} />
          <div
            className="relative flex w-full flex-1 flex-col overflow-clip rounded-[1em] rounded-b-[1.6em]"
            style={{ background: `linear-gradient(115deg, ${p.mid} 0%, ${p.deep} 82%)` }}
          >
            <div className="absolute inset-y-0 left-[12%] w-[9%] bg-white/25 blur-[2px]" />
            <div className="mx-auto mt-[14%] flex w-[78%] flex-1 flex-col items-center rounded-[0.7em] px-[0.6em] py-[1em]" style={{ background: p.label }}>
              <span className="font-semibold tracking-[0.28em]" style={{ color: p.deep }}>
                EMBEPET
              </span>
              <span
                className="font-display mt-[0.9em] text-center text-[1.5em] leading-[1.15] font-semibold"
                style={{ color: p.deep, fontFamily: "var(--font-display)" }}
              >
                {name}
              </span>
              <span className="mt-auto tracking-[0.22em] opacity-70" style={{ color: p.deep }}>
                {speciesGlyph(species)}
              </span>
            </div>
            <div className="h-[10%]" />
          </div>
        </div>
      ) : isOil ? (
        /* ---------- 滴管/泵瓶 ---------- */
        <div className="relative mb-[6%] flex h-[88%] w-[38%] flex-col items-center">
          <div className="h-[16%] w-[22%] rounded-t-[0.4em]" style={{ background: p.deep }} />
          <div className="h-[4%] w-[34%] rounded-[0.2em]" style={{ background: p.mid }} />
          <div
            className="relative flex w-full flex-1 flex-col overflow-clip rounded-[0.9em] rounded-b-[1.2em]"
            style={{ background: `linear-gradient(115deg, ${p.mid} 0%, ${p.deep} 78%)` }}
          >
            <div className="absolute inset-y-0 left-[10%] w-[8%] bg-white/25 blur-[2px]" />
            <div className="mx-auto mt-[16%] mb-[10%] flex w-[74%] flex-1 flex-col items-center rounded-[0.6em] px-[0.5em] py-[1em]" style={{ background: p.label }}>
              <span className="font-semibold tracking-[0.28em]" style={{ color: p.deep }}>
                EMBEPET
              </span>
              <span
                className="mt-[0.9em] text-center text-[1.35em] leading-[1.15] font-semibold"
                style={{ color: p.deep, fontFamily: "var(--font-display)" }}
              >
                {name}
              </span>
              <span className="mt-auto tracking-[0.22em] opacity-70" style={{ color: p.deep }}>
                {speciesGlyph(species)}
              </span>
            </div>
          </div>
        </div>
      ) : (
        /* ---------- 罐体（chew / powder） ---------- */
        <div className="relative mb-[6%] flex h-[78%] w-[58%] flex-col items-center">
          <div className="z-10 h-[13%] w-[86%] rounded-[0.7em]" style={{ background: p.deep }} />
          <div className="z-10 -mt-[2%] h-[3.5%] w-[92%] rounded-[0.4em]" style={{ background: `color-mix(in oklab, ${p.deep} 82%, black)` }} />
          <div
            className="relative -mt-[1%] flex w-full flex-1 flex-col overflow-clip rounded-[1.1em] rounded-b-[1.5em]"
            style={{ background: `linear-gradient(115deg, ${p.mid} 0%, ${p.deep} 80%)` }}
          >
            <div className="absolute inset-y-0 left-[9%] w-[10%] bg-white/25 blur-[2px]" />
            <div className="absolute inset-y-0 right-[6%] w-[4%] bg-black/10 blur-[2px]" />
            <div className="mx-auto mt-[9%] mb-[8%] flex w-[80%] flex-1 flex-col items-center rounded-[0.8em] px-[0.7em] py-[1em]" style={{ background: p.label }}>
              <span className="font-semibold tracking-[0.3em]" style={{ color: p.deep }}>
                EMBEPET
              </span>
              <div className="mt-[0.8em] h-px w-[46%]" style={{ background: `${p.deep}44` }} />
              <span
                className="mt-[0.8em] text-center text-[1.6em] leading-[1.12] font-semibold"
                style={{ color: p.deep, fontFamily: "var(--font-display)" }}
              >
                {name}
              </span>
              <div className="mt-auto flex flex-col items-center gap-[0.7em]">
                <div className="flex gap-[0.45em]">
                  {[0, 1, 2].map((i) => (
                    <span key={i} className="h-[0.6em] w-[0.6em] rounded-full" style={{ background: i === 0 ? p.mid : `${p.mid}55` }} />
                  ))}
                </div>
                <span className="tracking-[0.24em] opacity-70" style={{ color: p.deep }}>
                  {speciesGlyph(species)}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
