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
export type Source = { label: string; url: string };
