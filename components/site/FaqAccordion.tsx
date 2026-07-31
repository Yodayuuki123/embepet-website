import { Plus } from "lucide-react";

type Faq = { q: string; a: string };

/** 原生 details/summary：内容直接在 HTML 里，SEO/GEO 可抓取 */
export default function FaqAccordion({ faqs }: { faqs: Faq[] }) {
  return (
    <div className="divide-y divide-line border-y border-line">
      {faqs.map((f, i) => (
        <details key={i} className="group py-1">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 text-left font-medium text-ink [&::-webkit-details-marker]:hidden">
            <span className="text-[1.02rem]">{f.q}</span>
            <span className="grid size-8 shrink-0 place-items-center rounded-full border border-line transition-transform duration-300 group-open:rotate-45">
              <Plus className="size-4" strokeWidth={1.8} />
            </span>
          </summary>
          <p className="max-w-3xl pb-5 leading-relaxed text-ink-soft">{f.a}</p>
        </details>
      ))}
    </div>
  );
}
