import { metaWithLocale } from "@/lib/seo";
import { getSettings } from "@/lib/settings";
import PolicyPage from "@/components/site/PolicyPage";

export function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  return metaWithLocale(params, {
  title: "Shipping Policy",
  description:
    "General B2B shipping information for EMBEPET wholesale, private-label and OEM/ODM projects.",
  path: "/shipping",
  noIndex: true,
  });
}

export default async function ShippingPage() {
  const settings = await getSettings();
  const content = `
EMBEPET is a B2B inquiry website, not a retail checkout. Freight method, shipment window, export documentation, insurance, destination charges and risk transfer are confirmed in the accepted quotation or sales contract for each wholesale, private-label or OEM/ODM project.

## Before shipment

- The formula, packaging, quantity, release specification and required documents must be approved.
- Production and packaging lead times begin from the milestone stated in the accepted quotation, which may include deposit, artwork approval or material availability.
- Shipment is arranged only after the agreed release and payment conditions are satisfied.

## Freight and Incoterms

Available freight routes depend on product, volume, origin, destination and any controlled or animal-origin ingredients. The quotation should state the Incoterm, named place, freight responsibility and which party handles import clearance, duties, taxes and local permits.

## Tracking your order

Tracking or transport documents are shared through the agreed project contact after dispatch when available.

## Changes and delays

Notify the project contact promptly if the consignee, destination, documents or shipping instructions change. Costs or delays caused by post-approval changes, customs, inspections, carrier disruption or force-majeure events are handled under the accepted commercial terms.

## Damaged or lost packages

Inspect the shipment and preserve packaging, photos, transport records and lot information. Report visible damage, shortage or document discrepancies within the notice period stated in the contract to **${settings.supportEmail}** and your named project contact.

For a shipping quotation, submit the destination country and city, expected quantity, packaging, preferred Incoterm and any importer requirements through the [B2B inquiry form](/contact).
`;

  return (
    <PolicyPage eyebrow="Policies" title="Shipping Policy" path="/shipping">
      {content}
    </PolicyPage>
  );
}
