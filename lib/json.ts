export function parseJson<T>(raw: string | null | undefined, fallback: T): T {
  if (!raw) return fallback;
  try {
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
}

export type Benefit = { title: string; body: string };
export type Ingredient = { name: string; amount: string; purpose: string };
export type FeedingRow = { weight: string; amount: string };
export type Faq = { q: string; a: string };
export type Source = { label: string; url?: string };

const SOURCE_URL_OVERRIDES: Record<string, string> = {
  "Kealy et al., Effects of diet restriction on life span and age-related changes in dogs (JAVMA, 14-year Labrador study)":
    "https://pubmed.ncbi.nlm.nih.gov/11991408/",
  "Cornell University College of Veterinary Medicine — Canine Health Information":
    "https://www.vet.cornell.edu/departments-centers-and-institutes/riney-canine-health-center/canine-health-topics",
  "Frontiers in Veterinary Science — FLUTD/FIC epidemiology reviews":
    "https://pubmed.ncbi.nlm.nih.gov/31322040/",
  "Journal of Feline Medicine and Surgery — long-term FLUTD recurrence studies":
    "https://pubmed.ncbi.nlm.nih.gov/29943625/",
  "Salonen et al. 2020 — Prevalence of anxiety-related traits in 13,700 Finnish pet dogs":
    "https://pubmed.ncbi.nlm.nih.gov/32139728/",
  "Tiira et al. 2016 — Prevalence and comorbidity of anxieties in dogs":
    "https://pubmed.ncbi.nlm.nih.gov/26930680/",
  "Open Veterinary Journal — reviews of nutraceutical use in canine osteoarthritis":
    "https://pubmed.ncbi.nlm.nih.gov/36142319/",
  "Cornell Riney Canine Health Center — Probiotics for dogs":
    "https://www.vet.cornell.edu/departments-centers-and-institutes/riney-canine-health-center/canine-health-topics/power-probiotics",
  "International Cat Care — grooming and coat health":
    "https://icatcare.org/articles/over-grooming-in-cats",
  "Bauer JE — Therapeutic use of fish oils in companion animals (JAVMA review)":
    "https://pubmed.ncbi.nlm.nih.gov/22087720/",
  "Journal of Veterinary Science — canine cognitive dysfunction prevalence reviews":
    "https://pubmed.ncbi.nlm.nih.gov/30846383/",
  "Purina Institute — MCT and brain-aging research in senior dogs":
    "https://pubmed.ncbi.nlm.nih.gov/20141643/",
  "American College of Veterinary Behaviorists — noise aversion resources":
    "https://www.dacvb.org/",
  "FDA — Structure/Function Claims guidance":
    "https://www.fda.gov/animal-veterinary/animal-foods-feeds/animal-food-labeling-and-pet-food-claims",
};

export function enrichSources(sources: Source[]): Source[] {
  return sources.map((source) => ({
    ...source,
    url: source.url || SOURCE_URL_OVERRIDES[source.label],
  }));
}
