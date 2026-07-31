import type { Metadata } from "next";
import { buildMetadata, metaWithLocale } from "@/lib/seo";
import { getSettings } from "@/lib/settings";
import PolicyPage from "@/components/site/PolicyPage";

export function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  return metaWithLocale(params, {
  title: "Privacy Policy",
  description: "How EMBEPET collects, uses and protects your personal information.",
  path: "/privacy",
  });
}

export default async function PrivacyPage() {
  const settings = await getSettings();
  const content = `
This policy explains what information **${settings.brandName}** ("we", "us") collects when you use this website, why we collect it, and the choices you have. The short version: we collect only what we need to run the store, we never sell your personal data, and you can ask us to delete it at any time.

## Information we collect

- **Order information** — name, shipping address, email, phone (optional), and the items you purchase.
- **Account information** — email, name and a hashed password if you create an account.
- **Payment information** — processed entirely by our payment provider (Stripe). Card numbers never touch our servers.
- **Communications** — messages you send through contact or inquiry forms, and reviews you submit.
- **Usage data** — standard server logs (IP, browser type, pages visited) used for security and performance.

## How we use it

- Fulfill and deliver your orders, send order confirmations and shipping updates.
- Provide customer support and respond to inquiries.
- Send marketing emails **only if you subscribe** — every email includes one-click unsubscribe.
- Prevent fraud and secure the service.
- Improve products and site experience through aggregated, de-identified analytics.

## What we never do

- We never sell or rent your personal information.
- We never share your data with third parties except the service providers required to run the store (payment processing, shipping carriers, email delivery), each bound by their own privacy obligations.

## Cookies

We use strictly necessary cookies for cart, sign-in sessions and coupon state. These do not track you across other websites.

## Data retention & your rights

We keep order records as long as required for tax and accounting. You may request access to, correction of, or deletion of your personal data at any time by emailing **${settings.supportEmail}**. California residents may exercise rights under the CCPA/CPRA; we honor verified requests within 45 days.

## Children

This site is intended for users aged 18 and over. We do not knowingly collect information from children.

## Changes

We will post any changes to this policy on this page and update the date above. Material changes will be announced by email to account holders.

Questions? Contact **${settings.supportEmail}**.
`;

  return (
    <PolicyPage eyebrow="Policies" title="Privacy Policy" path="/privacy">
      {content}
    </PolicyPage>
  );
}
