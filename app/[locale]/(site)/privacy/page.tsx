import { metaWithLocale } from "@/lib/seo";
import { getSettings } from "@/lib/settings";
import PolicyPage from "@/components/site/PolicyPage";

export function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  return metaWithLocale(params, {
  title: "Privacy Policy",
  description: "How EMBEPET handles information submitted through its B2B website and inquiry forms.",
  path: "/privacy",
  noIndex: true,
  });
}

export default async function PrivacyPage() {
  const settings = await getSettings();
  const content = `
This policy explains what information **${settings.brandName}** ("we", "us") receives when you use this B2B website or send a product inquiry, why it is used, and how to contact us about it.

## Information we collect

- **Business inquiry information** — name, company, work email, phone, destination market, product requirements and files or notes you choose to submit.
- **Communications** — follow-up messages exchanged about samples, quotations, supplier qualification or product development.
- **Usage data** — standard server logs (IP, browser type, pages visited) used for security and performance.

## How we use it

- Respond to product, manufacturing and supplier-qualification inquiries.
- Prepare requested samples, specifications or quotations and manage the resulting business relationship.
- Send marketing emails **only if you subscribe** — every email includes one-click unsubscribe.
- Prevent fraud and secure the service.
- Improve site performance and content using aggregated or de-identified information.

## What we never do

- We never sell or rent your personal information.
- We share information only with service providers or project participants needed to operate the site, communicate with you or evaluate your requested project, subject to their applicable obligations.

## Cookies

We may use necessary cookies and standard analytics or security technologies to operate, protect and measure the website. Where consent is legally required, the applicable consent controls should be used.

## Data retention & your rights

We retain inquiry and business records only as needed for the stated purpose, security, legal obligations and legitimate business records. You may request access, correction or deletion by emailing **${settings.supportEmail}**. Applicable rights and response periods depend on your jurisdiction.

## Children

This site is intended for users aged 18 and over. We do not knowingly collect information from children.

## Changes

We may update this policy as the website or applicable requirements change. The current version will be posted on this page.

Questions? Contact **${settings.supportEmail}**.
`;

  return (
    <PolicyPage eyebrow="Policies" title="Privacy Policy" path="/privacy">
      {content}
    </PolicyPage>
  );
}
