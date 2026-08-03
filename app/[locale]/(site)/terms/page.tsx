import { metaWithLocale } from "@/lib/seo";
import { getSettings } from "@/lib/settings";
import PolicyPage from "@/components/site/PolicyPage";

export function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  return metaWithLocale(params, {
  title: "Terms of Service",
  description: "Terms governing use of the EMBEPET B2B website and product-inquiry materials.",
  path: "/terms",
  noIndex: true,
  });
}

export default async function TermsPage() {
  const settings = await getSettings();
  const content = `
These terms govern use of this B2B website. A product brief, sample discussion, catalog reference or website inquiry does not create a purchase contract. Any supply relationship is governed by the formal quotation, specification, quality agreement, purchase order and other commercial documents accepted by the relevant parties.

## Products & intended use

Website content describes manufacturing capabilities and product concepts for business evaluation. It is not veterinary, medical, regulatory or legal advice. Product classification, claims, ingredients, labels and market access must be confirmed for the intended destination before sale.

## Catalogs, samples and quotations

- Catalog prices, MOQ figures and currency conversions are non-binding comparison references unless incorporated into an accepted quotation.
- Formula, packaging, tests, volume, destination and Incoterm can change price, MOQ and lead time.
- Samples, specifications and documents may be subject to confidentiality, cost, availability and project-qualification requirements.

## Shipping, returns & guarantees

Shipping, inspection, claims, replacement and refund terms are defined in the accepted commercial documents for each B2B project. General information appears in our [B2B Shipping](/shipping) and [B2B Claims & Returns](/returns) pages.

## Submitted content

You represent that you are authorized to submit product briefs, artwork, files and other project information. Do not submit confidential third-party material unless you have permission. Separate nondisclosure and intellectual-property terms may be agreed for a qualified project.

## Intellectual property

Site content, graphics, logos and catalog materials belong to ${settings.brandName} or their respective licensors and may not be reproduced without permission. A website description does not transfer ownership of a formula, design, trademark or other intellectual property.

## Limitation of liability

The website is provided for general business information and may be updated without notice. Liability, warranties and remedies for an actual project are governed by the accepted commercial agreement and applicable law.

## Contact

Questions about these terms: **${settings.supportEmail}**.
`;

  return (
    <PolicyPage eyebrow="Policies" title="Terms of Service" path="/terms">
      {content}
    </PolicyPage>
  );
}
