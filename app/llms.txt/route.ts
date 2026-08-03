import { SITE_URL } from "@/lib/seo";
import { B2B_CATALOG } from "@/lib/b2b-catalog";

export async function GET() {
  const url = (path: string) => `${SITE_URL}/en${path}`;
  const lines = [
    "# EMBEPET",
    "",
    "> EMBEPET is a B2B pet supplement brand and project interface. Taizhou Beno Biotech Co., Ltd. is the manufacturing entity for wholesale, private-label and OEM/ODM projects.",
    "",
    "## Verified entity facts",
    "- Manufacturing entity: Taizhou Beno Biotech Co., Ltd., established in 2016 in Taixing City, Jiangsu, China",
    "- Facility: 3,000 m² with 3 production lines and approximately 30 production staff",
    `- Catalog: ${B2B_CATALOG.length} products for dogs and cats`,
    "- Formats: soft chews, powders, liquid drops, oils, tablets and pastes",
    "- Licensed scope: solid, semi-solid and liquid pet additive premixed feed",
    "- Quality evidence: Eurofins GMP audit recognition; SQF Food Safety Code: Pet Food Manufacturing, Edition 9; SQF Quality Code, Edition 9",
    "- FDA status: FDA Food Facility Registered. This is a facility registration, not FDA product approval or certification",
    "- MOQ, lead time and price: confirmed per formula, format, testing, packaging, volume, destination and Incoterm",
    "- Website model: product comparison and business inquiry; no cart or retail checkout",
    "",
    "## Primary pages",
    `- [Home](${url("/")})`,
    `- [Products and wholesale](${url("/shop")})`,
    `- [Private label / OEM / ODM](${url("/private-label")})`,
    `- [Manufacturing and company](${url("/factory")})`,
    `- [Quality and certificates](${url("/science")})`,
    `- [About the company and brand](${url("/about")})`,
    `- [B2B contact and product brief](${url("/contact")})`,
    `- [Manufacturing insights](${url("/news")})`,
    `- [Source-cited knowledge hub](${url("/learn")})`,
    "",
    `For the complete product and article index, see: ${SITE_URL}/llms-full.txt`,
  ];

  return new Response(lines.join("\n"), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Content-Language": "en",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
