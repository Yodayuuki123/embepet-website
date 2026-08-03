/* ═══════════════════════════════════════════════════════════════
   News / SEO articles — static content source.
   Self-contained (no database) so it renders in preview and stays
   fully indexable. Add a new object to NEWS_ARTICLES to publish an
   article; each becomes /news/<slug> automatically.

   `body` is an ordered list of blocks:
     { h2: "..." }              → keyword-phrase section heading
     { p: "..." }               → paragraph
     { list: ["...", "..."] }   → bullet list
   ═══════════════════════════════════════════════════════════════ */

export type NewsBlock = { h2: string } | { p: string } | { list: string[] };

export type NewsArticle = {
  slug: string;
  category: string;
  title: string; // keyword-first H1
  seoTitle: string; // <title>
  description: string; // meta description
  excerpt: string; // card + list summary
  date: string; // ISO yyyy-mm-dd
  updated?: string; // ISO yyyy-mm-dd
  readMinutes: number;
  author: string;
  image: string;
  keywords: string[];
  sources: { label: string; url: string }[];
  answer: string; // quick-answer capsule
  body: NewsBlock[];
  faqs: { q: string; a: string }[];
};

export const NEWS_ARTICLES: NewsArticle[] = [
  {
    slug: "pet-supplement-oem-guide",
    category: "OEM Guide",
    title: "Pet Supplement OEM: A Complete Guide from Formula to Market Launch",
    seoTitle: "Pet Supplement OEM Guide: Formula to Launch | EMBEPET",
    description:
      "A complete pet supplement OEM guide for brand owners — contract manufacturing timelines, MOQs, formula development, packaging and the regulatory steps to launch.",
    excerpt:
      "Contract-manufacturing timelines, MOQs and the regulatory steps every pet supplement brand owner should plan for before launch.",
    date: "2026-06-15",
    updated: "2026-07-20",
    readMinutes: 8,
    author: "EMBEPET Product Team",
    image: "/images/b2b/news/news-oem-guide.png",
    keywords: [
      "pet supplement OEM",
      "private label pet supplements",
      "pet supplement contract manufacturing",
      "pet supplement labeling",
    ],
    sources: [
      {
        label: "FDA — How Do I Start an Animal Food Business?",
        url: "https://www.fda.gov/animal-veterinary/animal-foods-feeds/how-do-i-start-animal-food-business",
      },
      {
        label: "FDA — Animal Food Labeling and Pet Food Claims",
        url: "https://www.fda.gov/animal-veterinary/animal-foods-feeds/animal-food-labeling-and-pet-food-claims",
      },
      {
        label: "AAFCO — Pet Food Labeling Guide",
        url: "https://www.aafco.org/resources/guides-and-manuals/pet-food-labeling-guide/",
      },
    ],
    answer:
      "Pet supplement OEM lets a brand commercialize a product made to an agreed specification. The core stages are product brief, formula and sample review, packaging and label review, controlled production, finished-product checks, and destination-specific documentation. Timing and MOQ depend on the formula, format, tests, packaging and market.",
    body: [
      {
        h2: "What Is Pet Supplement OEM?",
      },
      {
        p: "OEM (original equipment manufacturing) means a manufacturing site produces a supplement to an agreed specification while the customer owns the label, positioning and go-to-market. It can remove the need to build a dedicated production facility, but the brand remains responsible for confirming the regulatory and labeling requirements of each destination market.",
      },
      {
        p: "Private label usually starts from an existing formula and agreed packaging configuration, while ODM adds custom product-development work. The appropriate route depends on differentiation goals, order volume, test requirements, intellectual-property terms and launch schedule.",
      },
      {
        h2: "Pet Supplement OEM Development Timeline",
      },
      {
        p: "There is no universal OEM lead time. A realistic schedule can be confirmed only after the formula, dosage form, testing plan, packaging components, artwork and destination-market requirements are known. The main workstreams are:",
      },
      {
        list: [
          "Brief and feasibility: define target market, species, intended positioning, dosage form, volume and test expectations.",
          "Formula and sample review: agree target specifications and evaluate appearance, handling and palatability as applicable.",
          "Packaging and label review: select components and check required product identity, net quantity, business details and ingredient information for the destination market.",
          "Production and quality control: manufacture against the approved specification with documented in-process and finished-product checks.",
          "Release and documentation: align the certificate of analysis, shipment records and any destination-specific evidence before dispatch.",
        ],
      },
      {
        h2: "Minimum Order Quantities and Pricing",
      },
      {
        p: "MOQ depends on the formula, dosage form, batch size, packaging components, test plan and whether the project uses an existing or custom specification. A purchase-ready price and MOQ should be confirmed only after packaging, testing, volume, destination and Incoterm are aligned.",
      },
      {
        h2: "Regulatory Steps Before Launch",
      },
      {
        p: "Required evidence changes by destination market, ingredient set and product claim. For the United States, FDA explains that animal-food labeling includes core identity, net-quantity, responsible-business and ingredient information, while state rules may also apply. Plan the label, claims, batch release records and shelf-life support before production; do not assume one certificate makes a product compliant in every market.",
      },
    ],
    faqs: [
      {
        q: "What is the difference between OEM and ODM for pet supplements?",
        a: "Private label generally uses an existing formula and agreed packaging configuration. OEM manufactures to an agreed customer specification, while ODM adds custom product-development work. Commercial terms and intellectual-property ownership should be documented for each project.",
      },
      {
        q: "How long does a pet supplement OEM project take?",
        a: "There is no reliable universal lead time. It depends on formula complexity, ingredient availability, sample rounds, required tests, packaging procurement, label review, batch scheduling and destination-market documentation.",
      },
      {
        q: "What documentation should a brand expect from an OEM manufacturer?",
        a: "Agree the finished-product specification and release documents before ordering. Depending on the project, this can include a certificate of analysis, test reports, lot traceability, shelf-life support and destination-specific shipment or registration documents.",
      },
    ],
  },
];
NEWS_ARTICLES.push(
  {
    slug: "dosage-form-comparison",
    category: "Product Development",
    title: "Soft Chews vs Powders vs Drops: Choosing the Right Pet Supplement Format",
    seoTitle: "Pet Supplement Formats: Chews vs Powders vs Drops | EMBEPET",
    description:
      "Compare pet supplement dosage forms — soft chews, powders and liquid drops — by palatability, stability, cost and consumer preference to choose the right format for your brand.",
    excerpt:
      "A practical comparison of dosage forms — palatability, stability and consumer preference — to help brands pick the right format.",
    date: "2026-05-22",
    updated: "2026-07-18",
    readMinutes: 7,
    author: "EMBEPET Product Team",
    image: "/images/b2b/news/news-dosage-form.png",
    keywords: [
      "pet supplement dosage forms",
      "soft chew pet supplements",
      "pet supplement powders",
      "liquid pet supplements",
    ],
    sources: [
      {
        label: "PubMed — Oral delivery of medications to companion animals",
        url: "https://pubmed.ncbi.nlm.nih.gov/15191789/",
      },
      {
        label: "PubMed — Companion animal physiology and dosage form performance",
        url: "https://pubmed.ncbi.nlm.nih.gov/15191788/",
      },
      {
        label: "FDA — Pet Food",
        url: "https://www.fda.gov/animal-veterinary/animal-foods-feeds/pet-food",
      },
    ],
    answer:
      "Choose a pet supplement format by matching ingredient load and stability, target serving, species acceptance, packaging, test plan, cost and consumer use. Soft chews can support treat-like administration, powders suit measured mix-in use, and liquids allow measured dropper or pump delivery; none is universally best.",
    body: [
      { h2: "Why Dosage Form Decides Product Success" },
      {
        p: "Format affects palatability, dosing accuracy, shelf stability, packaging cost and how a product is perceived on shelf. Choosing it early — before artwork and MOQ — keeps a project efficient and avoids reformulating later.",
      },
      { h2: "Soft Chews: The Mainstream Choice" },
      {
        p: "Palatable chewable formats can reduce administration friction for some dogs, and published companion-animal dosage-form research identifies voluntary acceptance as an important design goal. Acceptance still depends on species, flavor system, texture, serving size and the individual animal, so palatability should be evaluated for the actual formula.",
      },
      { h2: "Powders: High Dose at Low Cost" },
      {
        p: "Powders can accommodate formulas where a measured serving is mixed with food. They may simplify some high-weight ingredient blends, but flow, moisture control, scoop accuracy, dusting and the pet's acceptance of the mixed meal must be considered. Cost and minimum batch size remain project-specific.",
      },
      { h2: "Liquid Drops and Oils: Premium and Precise" },
      {
        p: "Droppers and pumps provide a measured liquid-delivery method and can be applied directly or used as a food topper when the formula permits. The brand should define viscosity, fill volume, container compatibility, oxidation or microbial controls, and clear serving instructions before choosing this route.",
      },
      { h2: "How to Choose for Your Range" },
      {
        list: [
          "Confirm ingredient compatibility, target amount per serving and stability before selecting the format.",
          "Evaluate species acceptance and administration behavior with the actual sample, not a generic format assumption.",
          "Model packaging, testing, freight, shelf life and minimum batch size together rather than comparing fill cost alone.",
          "Write serving directions and label claims for the destination market before final artwork approval.",
        ],
      },
    ],
    faqs: [
      {
        q: "Which pet supplement format is best?",
        a: "No single format is best for every project. Compare ingredient compatibility, target serving, species acceptance, stability, packaging, testing, cost and consumer use before choosing.",
      },
      {
        q: "Are powders cheaper than soft chews?",
        a: "Not necessarily. Powder economics depend on the formula, batch size, testing, packaging, scoop and freight. A powder can fit some larger measured servings, but the final cost must be quoted against the complete specification.",
      },
      {
        q: "Should a new brand launch more than one format?",
        a: "A focused first SKU can simplify validation, artwork and inventory. A second format can serve a different administration preference, but it should have a clear customer need and separate stability, packaging and demand assumptions.",
      },
    ],
  },
  {
    slug: "gmp-sqf-certification",
    category: "Quality",
    title: "GMP Audits & SQF Certification for Pet Supplement Manufacturing",
    seoTitle: "GMP Audits & SQF Certification for Pet Supplements | EMBEPET",
    description:
      "Understand GMP audit evidence and SQF certification for pet supplement manufacturing, what each record covers, and how buyers can verify scope, issuer and validity.",
    excerpt:
      "A buyer-focused guide to GMP audit evidence, SQF certification and practical credential verification.",
    date: "2026-04-10",
    updated: "2026-07-15",
    readMinutes: 6,
    author: "EMBEPET Quality Team",
    image: "/images/b2b/news/news-gmp-sqf.png",
    keywords: [
      "pet supplement GMP audit",
      "SQF pet food manufacturing",
      "pet supplement quality certification",
      "pet supplement supplier audit",
    ],
    sources: [
      {
        label: "FDA — FSMA Final Rule for Preventive Controls for Animal Food",
        url: "https://www.fda.gov/food/food-safety-modernization-act-fsma/fsma-final-rule-preventive-controls-animal-food",
      },
      {
        label: "SQFI — Food Safety Code: Pet Food Manufacturing, Edition 9",
        url: "https://www.sqfi.com/docs/sqfilibraries/code-documents/edition-9/code-pdfs/20227fmin_petfood_v3-2-final-w-links.pdf?sfvrsn=cf357a8_5",
      },
      {
        label: "SQFI — Quality Code, Edition 9",
        url: "https://www.sqfi.com/docs/sqfilibraries/code-documents/edition-9/code-pdfs/20227fmin_quality_v3-2-final-w-links.pdf?sfvrsn=9c118a46_9",
      },
    ],
    answer:
      "GMP requirements address controlled manufacturing practices; an audit report or recognition records what a named auditor assessed at a site. SQF certification is a separate, scoped certification against an SQF Code. Buyers should verify the issuer, site name, standard, scope, audit date, certificate number and expiry instead of treating every quality logo as equivalent.",
    body: [
      { h2: "What GMP Audit Evidence Means" },
      {
        p: "Good Manufacturing Practice requirements address documented procedures, personnel practices, sanitation, process controls and records. In the United States, FDA's preventive-controls rule states that covered animal-food facilities must follow current good manufacturing practices. A supplier's separate GMP audit report or recognition should be read for its exact auditor, scope, date and conclusion; it is not interchangeable with FDA approval.",
      },
      { h2: "What SQF Certification Adds" },
      {
        p: "SQF certification is issued against a named SQF Code and site scope. The Edition 9 Pet Food Manufacturing Code sets system and manufacturing requirements for sites in its applicable categories. A buyer should verify that the legal entity, site address, food-sector category and certified activities on the certificate match the proposed product.",
      },
      { h2: "Why Certification Matters for Your Brand" },
      {
        list: [
          "Due diligence: records give buyers a defined standard, site, scope and audit trail to review.",
          "Vendor qualification: certification can form one part of a retailer or distributor's onboarding evidence.",
          "Specification control: the audit framework helps structure procedures, records and corrective actions.",
          "Claim accuracy: exact terminology prevents misleading statements such as 'FDA certified' or treating an audit recognition as a regulatory approval.",
        ],
      },
      { h2: "How to Verify a Manufacturer's Credentials" },
      {
        p: "Ask for the original certificate or audit record and check the legal entity, physical site, issuing body, standard or code edition, scope, identifier, audit date and expiry. Confirm the record is current and applies to the activity you plan to buy. Then separately agree product-specific specifications, release testing, traceability and shelf-life evidence.",
      },
    ],
    faqs: [
      {
        q: "What is the difference between GMP audit evidence and SQF certification?",
        a: "GMP requirements concern manufacturing practices and controls; a GMP audit record documents a specific assessment. SQF certification is issued against a named SQF Code and site scope. Always read the exact document rather than relying on a logo or shorthand claim.",
      },
      {
        q: "Do pet supplements legally require GMP or SQF certification?",
        a: "Requirements vary by jurisdiction, product classification, facility and sales channel. For example, FDA rules require covered US animal-food facilities to follow CGMPs, while a retailer may separately request third-party certification. Obtain market-specific legal advice rather than assuming one certificate is universally required.",
      },
      {
        q: "How can a brand verify a manufacturer is certified?",
        a: "Request the original record and verify the legal entity, site, issuer, standard, scope, identifier, audit date and expiry. Confirm that it covers the proposed activity, then review product-specific specifications and release evidence separately.",
      },
    ],
  },
);

export function getArticle(slug: string): NewsArticle | undefined {
  return NEWS_ARTICLES.find((a) => a.slug === slug);
}

export function articlesByDate(): NewsArticle[] {
  return [...NEWS_ARTICLES].sort((a, b) => b.date.localeCompare(a.date));
}
