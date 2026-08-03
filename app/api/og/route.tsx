import { ImageResponse } from "next/og";
import type { NextRequest } from "next/server";

export const runtime = "edge";

/** 动态 OG 图：/api/og?title=...&kind=product|article|logo */
export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const title = (searchParams.get("title") ?? "EMBEPET").slice(0, 90);
  const kind = searchParams.get("kind") ?? "page";

  const kicker =
    kind === "product"
      ? "WHOLESALE PET SUPPLEMENT PORTFOLIO"
      : kind === "article"
        ? "SOURCE-CITED PET SUPPLEMENT INSIGHTS"
        : "PET SUPPLEMENT OEM · ODM · WHOLESALE";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "linear-gradient(135deg, #1d3f2f 0%, #16301f 60%, #244c38 100%)",
          color: "#f6f3ea",
          fontFamily: "Georgia, serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 999,
              background: "#f6f3ea",
              color: "#1d3f2f",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 30,
              fontWeight: 700,
            }}
          >
            🐾
          </div>
          <div style={{ fontSize: 34, letterSpacing: 6, fontWeight: 700 }}>EMBEPET</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
          <div style={{ fontSize: 20, letterSpacing: 5, color: "#e7b96a", fontWeight: 600 }}>{kicker}</div>
          <div style={{ fontSize: title.length > 50 ? 52 : 64, lineHeight: 1.12, fontWeight: 700, maxWidth: 980 }}>
            {title}
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 20, color: "rgba(246,243,234,0.65)" }}>
          <div>GMP audit recognition · SQF certified manufacturing</div>
          <div>embepet.com</div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
