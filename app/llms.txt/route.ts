import { SITE_URL } from "@/lib/seo";
import { B2B_CATALOG, USD_CNY_RATE } from "@/lib/b2b-catalog";

export async function GET() {
  const url = (path: string) => `${SITE_URL}/en${path}`;
  const lines = [
    "# EMBEPET",
    "",
    "> EMBEPET supports global brand operations. Taizhou Beno Biotech Co., Ltd. is the manufacturing entity for pet supplement wholesale, private label and OEM/ODM projects.",
    "",
    "## Buyer information",
    `- Catalog: ${B2B_CATALOG.length} products for dogs and cats`,
    "- Formats: soft chews, powders, liquid drops, oils, tablets and pastes",
    "- Eligible private-label MOQ: from 500 units",
    `- USD references: converted at 1 USD = ${USD_CNY_RATE} CNY; final quotations vary by project`,
    "- Quality evidence: Eurofins GMP audit recognition and SQF Food Safety Code certificate",
    "- Website model: product comparison and business inquiry; no cart or retail checkout",
    "",
    "## Five primary pages",
    `- [Home](${url("/")})`,
    `- [Products and wholesale](${url("/shop")})`,
    `- [Private label / OEM / ODM](${url("/private-label")})`,
    `- [Manufacturing and company](${url("/factory")})`,
    `- [Quality and certificates](${url("/science")})`,
    "",
    `For the complete product index see: ${SITE_URL}/llms-full.txt`,
  ];

  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
