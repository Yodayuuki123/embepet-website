import { SITE_URL } from "@/lib/seo";
import { B2B_CATALOG, USD_CNY_RATE, usdFromCny } from "@/lib/b2b-catalog";

export async function GET() {
  const url = (path: string) => `${SITE_URL}/en${path}`;
  const lines: string[] = [
    "# EMBEPET - B2B product and manufacturing index",
    "",
    "> EMBEPET supports global business operations. Taizhou Beno Biotech Co., Ltd. manufactures pet supplement products for wholesale, private label and OEM/ODM projects.",
    "",
    "## Verified certificates",
    "- Eurofins GMP audit recognition: audit 12-14 June 2026, score 86%, expires 14 June 2027, certificate ID ACCB8AAA422_1.",
    "- SQF Food Safety Code: Pet Food Manufacturing, Edition 9; certificate / SIN 105690; audit 14 June 2026; expires 28 August 2027; scope FSC 32 - Pet Premix food.",
    `- Certificate library: ${url("/science")}`,
    "",
    "## Product catalog",
    `Reference conversion: 1 USD = ${USD_CNY_RATE} CNY. Prices are comparison references, not final commercial quotations.`,
    "",
  ];

  for (const product of B2B_CATALOG) {
    lines.push(`### ${product.name}`);
    lines.push(`Species: ${product.species}; format: ${product.format}; category: ${product.category}.`);
    lines.push(product.subtitle);
    lines.push(
      product.referenceCny
        ? `Reference price: US$${usdFromCny(product.referenceCny).toFixed(2)} per unit (source RMB ${product.referenceCny}).`
        : "Reference price: confirm by quotation."
    );
    lines.push(product.moq ? `Starting MOQ: ${product.moq} units.` : "Starting MOQ: confirm by quotation.");
    lines.push(`Inquiry: ${url("/private-label#inquiry")}`);
    lines.push("");
  }

  lines.push("## Five primary pages");
  lines.push(`Home: ${url("/")}`);
  lines.push(`Products and wholesale: ${url("/shop")}`);
  lines.push(`Private label / OEM / ODM: ${url("/private-label")}`);
  lines.push(`Manufacturing and company: ${url("/factory")}`);
  lines.push(`Quality and certificates: ${url("/science")}`);

  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
