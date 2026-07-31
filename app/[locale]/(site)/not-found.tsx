import Link from "next/link";
import { PawPrint } from "lucide-react";

export default function NotFound() {
  return (
    <div className="grid min-h-[70vh] place-items-center px-5 pt-24 text-center">
      <div>
        <span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-forest/8 text-forest">
          <PawPrint size={28} />
        </span>
        <p className="font-display mt-6 text-6xl font-semibold text-ink">404</p>
        <p className="mt-3 text-ink-soft">This page wandered off.</p>
        <Link
          href="../"
          className="btn-liquid mt-8 inline-flex h-12 items-center rounded-full bg-forest px-7 font-semibold text-cream"
          style={{ "--liquid": "var(--color-forest-mid)" } as React.CSSProperties}
        >
          Back to home
        </Link>
      </div>
    </div>
  );
}
