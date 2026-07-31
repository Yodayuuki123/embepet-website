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
    answer:
      "Pet supplement OEM lets a brand sell products made by a certified manufacturer. A typical project runs 8–14 weeks: brief and formula selection, sampling, packaging and artwork, GMP production with QC, then export documentation.",
    body: [
      {
        h2: "What Is Pet Supplement OEM?",
      },
      {
        p: "OEM (original equipment manufacturing) means a certified factory produces a supplement to your brand's specification while you own the label, positioning and go-to-market. For pet-supplement brands it is the fastest route from concept to a shelf-ready, compliant product without building a facility of your own.",
      },
      {
        p: "OEM covers stock formulas taken under a private label, while ODM (original design manufacturing) adds custom formula development. Most brands begin with a proven stock formula to reach market quickly, then commission custom work once volume justifies it.",
      },
      {
        h2: "Pet Supplement OEM Development Timeline",
      },
      {
        p: "A first OEM project usually runs eight to fourteen weeks. The main stages are consistent across formats:",
      },
      {
        list: [
          "Brief and formula selection (week 1–2): target market, species, benefit, dosage form and volume.",
          "Sampling (week 3–6): evaluate palatability, appearance and stability before committing.",
          "Packaging and artwork (week 5–8): choose format, finalise label to destination-market rules.",
          "Production and QC (week 8–12): GMP batch manufacture with in-line and finished-product testing.",
          "Documentation and export (week 12–14): COA, stability data and dossiers for customs.",
        ],
      },
      {
        h2: "Minimum Order Quantities and Pricing",
      },
      {
        p: "MOQ depends on the dosage form, packaging and whether the formula is stock or custom. Stock soft chews can start low for early comparison, while custom liquids and specialty formats carry higher minimums because of fill lines and component sourcing. A purchase-ready price is confirmed only after packaging, testing, volume and Incoterm are aligned.",
      },
      {
        h2: "Regulatory Steps Before Launch",
      },
      {
        p: "Required evidence changes by destination market and product claim. Plan for a certificate of analysis per batch, stability data supporting shelf life, and any registration or labelling requirements in the target country. Working with a GMP- and SQF-certified manufacturer means this documentation is prepared as part of the project rather than retrofitted later.",
      },
    ],
    faqs: [
      {
        q: "What is the difference between OEM and ODM for pet supplements?",
        a: "OEM produces a product to your specification, often from a stock formula under a private label. ODM adds custom formula development. Many brands start with OEM stock formulas to launch quickly, then move to ODM as volume grows.",
      },
      {
        q: "How long does a pet supplement OEM project take?",
        a: "A typical first project runs 8–14 weeks across brief, sampling, packaging, GMP production and export documentation. Custom formulas and specialty formats sit at the longer end.",
      },
      {
        q: "What documentation should a brand expect from an OEM manufacturer?",
        a: "Expect a certificate of analysis per batch, stability data supporting the shelf life, and regulatory dossiers matched to the destination market and product claims.",
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
    answer:
      "Soft chews win on palatability and mainstream appeal, powders suit high-dose and mix-in positioning at low cost, and liquid drops signal premium and ease precise dosing. Most brands lead with soft chews and add a second format to broaden the range.",
    body: [
      { h2: "Why Dosage Form Decides Product Success" },
      {
        p: "Format affects palatability, dosing accuracy, shelf stability, packaging cost and how a product is perceived on shelf. Choosing it early — before artwork and MOQ — keeps a project efficient and avoids reformulating later.",
      },
      { h2: "Soft Chews: The Mainstream Choice" },
      {
        p: "Meat-based soft chews are the highest-volume format in pet supplements because pets accept them as treats and owners find them easy to give. They suit joint, calming, skin-and-coat and multivitamin positioning, and photograph well for retail and marketplace listings.",
      },
      { h2: "Powders: High Dose at Low Cost" },
      {
        p: "Powders carry large actives loads efficiently, which makes them ideal for probiotics, goat milk, mushroom blends and dental care. They mix into food, avoid a palatability barrier and keep per-unit cost down, though dosing is less precise than a pre-portioned chew.",
      },
      { h2: "Liquid Drops and Oils: Premium and Precise" },
      {
        p: "Droppers and pump oils enable precise dosing and premium positioning. They work for urinary, tear-stain, omega and calming concepts, and let a brand offer a topper alongside its chews to lift average order value.",
      },
      { h2: "How to Choose for Your Range" },
      {
        list: [
          "Lead with soft chews for a mainstream, high-appeal entry SKU.",
          "Add a powder for high-dose or budget-friendly positioning.",
          "Use drops or oils to signal premium and capture topper sales.",
          "Match format to the actives — some ingredients are more stable in one form than another.",
        ],
      },
    ],
    faqs: [
      {
        q: "Which pet supplement format is most popular?",
        a: "Soft chews are the most popular because pets accept them like treats and owners find them easy to dose. They dominate joint, calming, skin-and-coat and multivitamin ranges.",
      },
      {
        q: "Are powders cheaper than soft chews?",
        a: "Powders often have a lower per-unit cost and carry high actives loads efficiently, which suits probiotics, goat milk and mushroom blends. The trade-off is less precise dosing than a pre-portioned chew.",
      },
      {
        q: "Should a new brand launch more than one format?",
        a: "Most brands lead with soft chews and add a second format — often a powder or an oil topper — to broaden the range and lift average order value once the first SKU is established.",
      },
    ],
  },
  {
    slug: "gmp-sqf-certification",
    category: "Quality",
    title: "Understanding GMP & SQF Certification for Pet Supplements",
    seoTitle: "GMP & SQF Certification for Pet Supplements Explained | EMBEPET",
    description:
      "What GMP and SQF certification mean for pet supplements, why they matter for market access and retailer acceptance, and how to verify a manufacturer's credentials.",
    excerpt:
      "Why certifications matter for market access, retailer acceptance and brand credibility — and how to verify them.",
    date: "2026-04-10",
    updated: "2026-07-15",
    readMinutes: 6,
    author: "EMBEPET Quality Team",
    answer:
      "GMP (Good Manufacturing Practice) governs consistent, controlled production, while SQF (Safe Quality Food) is a GFSI-recognised food-safety certification. Together they signal audited quality that retailers and importers increasingly require before onboarding a pet-supplement brand.",
    body: [
      { h2: "What GMP Certification Means" },
      {
        p: "Good Manufacturing Practice is a system of documented procedures, facility controls and record-keeping that ensures every batch is produced consistently and traceably. For pet supplements it covers raw-material control, in-process checks, sanitation, and finished-product testing.",
      },
      { h2: "What SQF Certification Adds" },
      {
        p: "The SQF (Safe Quality Food) Code is recognised by the Global Food Safety Initiative (GFSI). Its pet-food edition applies food-grade safety management to supplement manufacturing, backed by an independent annual audit — evidence many retailers and importers now expect.",
      },
      { h2: "Why Certification Matters for Your Brand" },
      {
        list: [
          "Market access: several destinations and channels require audited manufacturing before import or listing.",
          "Retailer acceptance: certification shortens vendor onboarding and buyer due diligence.",
          "Brand credibility: it substantiates quality claims to distributors and end customers.",
          "Risk reduction: documented controls lower the chance of recalls and compliance issues.",
        ],
      },
      { h2: "How to Verify a Manufacturer's Credentials" },
      {
        p: "Ask for the certificate itself with its identifier, audit date and validity period, and confirm the certified scope matches your product's dosage form. Request a sample certificate of analysis and stability data so you can see the documentation you will receive per batch.",
      },
    ],
    faqs: [
      {
        q: "What is the difference between GMP and SQF?",
        a: "GMP governs consistent, controlled production through documented procedures and facility controls. SQF is a GFSI-recognised food-safety certification verified by independent annual audit. They are complementary — GMP is the practice, SQF is the audited food-safety standard.",
      },
      {
        q: "Do pet supplements legally require GMP or SQF certification?",
        a: "Requirements vary by destination market and channel. Even where not strictly mandatory, many retailers and importers require audited GMP and SQF manufacturing before onboarding a brand, so it is effectively necessary for wide distribution.",
      },
      {
        q: "How can a brand verify a manufacturer is certified?",
        a: "Request the certificate with its identifier, audit date and validity period, confirm the certified scope covers your dosage form, and ask for a sample COA and stability data to see the batch documentation provided.",
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

