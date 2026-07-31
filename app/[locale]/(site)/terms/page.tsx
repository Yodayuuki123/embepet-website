import type { Metadata } from "next";
import { buildMetadata, metaWithLocale } from "@/lib/seo";
import { getSettings } from "@/lib/settings";
import PolicyPage from "@/components/site/PolicyPage";

export function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  return metaWithLocale(params, {
  title: "Terms of Service",
  description: "The terms that govern your use of the EMBEPET website and purchases made through it.",
  path: "/terms",
  });
}

export default async function TermsPage() {
  const settings = await getSettings();
  const content = `
By using this website or placing an order, you agree to these terms. Please read them — they cover the important stuff about purchases, product use, and your responsibilities.

## Products & intended use

${settings.brandName} products are **nutritional supplements for dogs and cats**. They support normal body structure and function and are **not intended to diagnose, treat, cure or prevent any disease**. Statements on this site have not been evaluated by the Food and Drug Administration. Always follow label feeding guidelines and consult your veterinarian if your pet is pregnant, nursing, on medication, or has a medical condition.

## Orders & payment

- All prices are in US dollars. Applicable taxes are calculated at checkout.
- We reserve the right to refuse or cancel orders showing signs of fraud, resale abuse or pricing errors; you will be refunded in full if we cancel.
- Payment is processed by Stripe. By submitting payment you represent that you are authorized to use the payment method.

## Shipping, returns & guarantees

Shipping timelines are described in our [Shipping Policy](/shipping). Purchases are covered by the 30-day money-back guarantee described in [Returns & Refunds](/returns).

## Accounts

You are responsible for keeping your login credentials confidential and for all activity under your account. We may suspend accounts involved in abuse, fraud or violation of these terms.

## Reviews & submitted content

By submitting reviews or other content you grant us a non-exclusive, royalty-free license to display it on this site and in marketing materials, with your first name and pet's name. We may moderate or remove content that is false, offensive, or unrelated to the product.

## Intellectual property

All site content — text, formulas descriptions, graphics, logos and product designs — belongs to ${settings.brandName} or its licensors and may not be reproduced without permission.

## Limitation of liability

To the maximum extent permitted by law, our total liability for any claim related to an order is limited to the amount you paid for that order. We are not liable for indirect or consequential damages.

## Governing law

These terms are governed by the laws of the State of Delaware, USA, without regard to conflict-of-law rules. Disputes will be resolved in the state or federal courts located in Delaware.

## Contact

Questions about these terms: **${settings.supportEmail}**.
`;

  return (
    <PolicyPage eyebrow="Policies" title="Terms of Service" path="/terms">
      {content}
    </PolicyPage>
  );
}
