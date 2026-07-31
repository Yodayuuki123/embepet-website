import { breadcrumbJsonLd } from "@/lib/seo";
import JsonLd from "@/components/site/JsonLd";
import Markdown from "@/components/site/Markdown";
import { dateLong } from "@/lib/format";

type Props = {
  eyebrow: string;
  title: string;
  path: string;
  updated?: string;
  children: string;
};

export default function PolicyPage({ eyebrow, title, path, updated = "2026-07-01", children }: Props) {
  return (
    <div className="mx-auto max-w-3xl px-5 pb-24 pt-32 md:px-8 md:pt-40">
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: title, path }])} />
      <p className="eyebrow text-forest-mid">{eyebrow}</p>
      <h1 className="display-1 mt-2">{title}</h1>
      <p className="mt-3 text-[0.88rem] text-ink-soft">Last updated {dateLong(updated)}</p>
      <div className="mt-10">
        <Markdown>{children}</Markdown>
      </div>
    </div>
  );
}
