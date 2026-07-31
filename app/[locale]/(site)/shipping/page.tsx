import type { Metadata } from "next";
import { buildMetadata, metaWithLocale } from "@/lib/seo";
import { getSettings } from "@/lib/settings";
import { money } from "@/lib/format";
import PolicyPage from "@/components/site/PolicyPage";

export function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  return metaWithLocale(params, {
  title: "Shipping Policy",
  description:
    "EMBEPET shipping policy: free US standard shipping over $49, flat $5.99 under, 2–5 business day delivery, tracking on every order.",
  path: "/shipping",
  });
}

export default async function ShippingPage() {
  const settings = await getSettings();
  const threshold = money(settings.freeShippingThresholdCents);
  const flat = money(settings.flatShippingCents);

  const content = `
Orders over **${threshold}** ship free anywhere in the contiguous United States. Orders under ${threshold} ship at a flat rate of **${flat}**. Most orders arrive within **2–5 business days** and every shipment includes tracking.

## Processing time

Orders placed before 2:00 PM ET on business days are processed the same day. Orders placed after the cutoff, on weekends or on US holidays are processed the next business day.

## Delivery estimates

| Service | Cost | Delivery estimate |
| --- | --- | --- |
| Standard (orders ${threshold}+) | Free | 2–5 business days |
| Standard (under ${threshold}) | ${flat} | 2–5 business days |

Delivery estimates begin once your order leaves the warehouse, not at checkout. During peak seasons or carrier disruptions, delivery may take 1–2 days longer.

## Tracking your order

You will receive a tracking link by email as soon as your order ships. You can also find tracking in **Account → Orders** at any time.

## Address changes & failed deliveries

Need to fix an address? Contact us within 2 hours of ordering and we will do our best to catch it before it ships. Packages returned to us due to an incorrect address can be reshipped (reshipping fee applies) or refunded minus original shipping.

## Damaged or lost packages

If your order arrives damaged, or tracking shows delivered but nothing arrived within 48 hours, email ${settings.supportEmail} with your order number — we will replace or refund it. Every order is covered.

## International shipping

We currently ship consumer orders within the US only. For international wholesale and distribution, see our [Wholesale program](/wholesale).
`;

  return (
    <PolicyPage eyebrow="Policies" title="Shipping Policy" path="/shipping">
      {content}
    </PolicyPage>
  );
}
