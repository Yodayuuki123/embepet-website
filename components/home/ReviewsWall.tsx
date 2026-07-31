import Reveal from "@/components/motion/Reveal";
import SplitHeading from "@/components/motion/SplitHeading";
import Stars from "@/components/site/Stars";
import { BadgeCheck } from "lucide-react";

export type WallReview = {
  id: string;
  authorName: string;
  petName: string | null;
  rating: number;
  title: string;
  body: string;
  verified: boolean;
  productName: string;
};

/** 双列反向滚动的评价墙（纯 CSS marquee，零 JS 开销） */
export default function ReviewsWall({ reviews }: { reviews: WallReview[] }) {
  if (reviews.length === 0) return null;
  const mid = Math.ceil(reviews.length / 2);
  const rows = [reviews.slice(0, mid), reviews.slice(mid)];

  return (
    <section className="cv-auto relative overflow-hidden bg-cream-warm py-20 md:py-28" aria-labelledby="reviews-title">
      <div className="mx-auto mb-12 max-w-7xl px-5 text-center md:px-8">
        <Reveal y={20}>
          <p className="eyebrow mb-4 text-forest-mid">Real pets, real results</p>
        </Reveal>
        <SplitHeading as="h2" id="reviews-title" className="display-1 mx-auto max-w-2xl" mode="lines">
          The reviews do the tail-wagging.
        </SplitHeading>
      </div>

      <div className="space-y-5">
        {rows.map((row, rowIdx) => {
          const items = [...row, ...row];
          return (
            <div key={rowIdx} className="mask-fade-x overflow-hidden">
              <div
                className={`flex w-max gap-5 ${rowIdx === 0 ? "animate-marquee" : "animate-marquee-slow"}`}
                style={rowIdx === 1 ? { animationDirection: "reverse" } : undefined}
              >
                {items.map((r, i) => (
                  <figure
                    key={`${r.id}-${i}`}
                    className="w-[330px] shrink-0 rounded-3xl bg-white/60 p-6 sm:w-[380px]"
                  >
                    <div className="flex items-center justify-between">
                      <Stars rating={r.rating} className="size-3.5" />
                      {r.verified ? (
                        <span className="flex items-center gap-1 text-[0.7rem] font-bold uppercase tracking-[0.1em] text-forest-mid">
                          <BadgeCheck className="size-3.5" strokeWidth={2.2} /> Verified
                        </span>
                      ) : null}
                    </div>
                    <blockquote className="mt-3">
                      <p className="font-semibold text-ink">{r.title}</p>
                      <p className="mt-1.5 line-clamp-3 text-[0.88rem] leading-relaxed text-ink-soft">{r.body}</p>
                    </blockquote>
                    <figcaption className="mt-4 flex items-center justify-between text-[0.8rem] text-ink-soft">
                      <span className="font-semibold text-ink">
                        {r.authorName}
                        {r.petName ? <span className="font-normal text-ink-soft"> & {r.petName}</span> : null}
                      </span>
                      <span className="max-w-[45%] truncate">{r.productName}</span>
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
