import { metaWithLocale } from "@/lib/seo";
import { getSettings } from "@/lib/settings";
import PolicyPage from "@/components/site/PolicyPage";

export function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  return metaWithLocale(params, {
  title: "Returns & Refunds",
  description:
    "General notice and documentation process for B2B shipment claims, nonconformity review and returns.",
  path: "/returns",
  noIndex: true,
  });
}

export default async function ReturnsPage() {
  const settings = await getSettings();
  const content = `
EMBEPET supplies through project-specific B2B commercial terms rather than a consumer checkout. Inspection periods, acceptance criteria, claims, replacement, rework, return and refund rights are defined in the accepted specification, quotation, quality agreement and sales contract.

## How to report a shipment or product issue

1. Notify **${settings.supportEmail}** and the named project contact within the contractual notice period.
2. Identify the purchase order, shipment, SKU, lot or batch number and quantity affected.
3. Preserve representative samples, packaging and transport records.
4. Provide clear photos, inspection or laboratory records and a description of the observed nonconformity.

## Review process

The parties compare the evidence with the approved specification, release documents, retained samples and transport conditions. If a nonconformity is confirmed, the applicable remedy is determined under the accepted commercial agreement. No goods should be returned without written return authorization and routing instructions.

## Matters requiring separate review

- Damage or temperature exposure after risk has transferred under the agreed Incoterm.
- Storage, relabeling, repacking or handling outside the agreed conditions.
- Customer-supplied artwork, claims, formula inputs or packaging components.
- Natural sensory variation that remains within the approved specification.

This page is a general process summary and does not replace the signed commercial or quality agreement.
`;

  return (
    <PolicyPage eyebrow="Policies" title="Returns & Refunds" path="/returns">
      {content}
    </PolicyPage>
  );
}
