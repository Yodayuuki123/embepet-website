import type { Metadata } from "next";
import { buildMetadata, metaWithLocale } from "@/lib/seo";
import { getSettings } from "@/lib/settings";
import PolicyPage from "@/components/site/PolicyPage";

export function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  return metaWithLocale(params, {
  title: "Returns & Refunds",
  description:
    "EMBEPET 30-day money-back guarantee: if your pet doesn't love it, get a full refund — no need to ship anything back. Here's how it works.",
  path: "/returns",
  });
}

export default async function ReturnsPage() {
  const settings = await getSettings();
  const content = `
Every EMBEPET purchase is covered by a **30-day money-back guarantee**. If your pet won't take it, or you're not seeing what you hoped for, email us within 30 days of delivery for a **full refund of the product price — you don't need to ship anything back**.

## How to request a refund

1. Email **${settings.supportEmail}** with your order number (starts with EMB-).
2. Tell us briefly what didn't work — it genuinely helps us improve formulas and flavors.
3. Refunds are issued to your original payment method within **3–5 business days** of approval.

## What's covered

- First purchase of any product, up to 2 units per SKU per household.
- Products bought directly from our website. For purchases made through retail partners, please use the retailer's return process.

## What's not covered

- Original shipping fees (when applicable) are non-refundable.
- Bulk or wholesale orders — these follow the terms in your wholesale agreement.
- Repeated refund requests on the same SKU beyond the limits above.

## Damaged, wrong or missing items

Mistakes are on us. If anything arrives damaged, incorrect or incomplete, contact us within 48 hours of delivery and we'll ship a replacement immediately at no cost — photos help us fix it faster.

## Subscription-style reorders

If you set up recurring reorders, you can pause or cancel anytime from your account before the next billing date. Already-shipped renewal orders fall under the standard 30-day guarantee.
`;

  return (
    <PolicyPage eyebrow="Policies" title="Returns & Refunds" path="/returns">
      {content}
    </PolicyPage>
  );
}
