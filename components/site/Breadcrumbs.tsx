import Link from "@/components/site/A";
import { ChevronRight } from "lucide-react";

export type Crumb = { name: string; path: string };

export default function Breadcrumbs({ items, light }: { items: Crumb[]; light?: boolean }) {
  return (
    <nav aria-label="Breadcrumb" className={`flex flex-wrap items-center gap-1.5 text-[0.78rem] ${light ? "text-cream/60" : "text-ink-soft/80"}`}>
      {items.map((item, i) => {
        const last = i === items.length - 1;
        return (
          <span key={item.path} className="flex items-center gap-1.5">
            {last ? (
              <span aria-current="page" className={light ? "text-cream" : "text-ink"}>{item.name}</span>
            ) : (
              <Link href={item.path} className="link-underline">{item.name}</Link>
            )}
            {!last ? <ChevronRight className="size-3 opacity-60" /> : null}
          </span>
        );
      })}
    </nav>
  );
}
