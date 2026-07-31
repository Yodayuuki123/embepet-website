import "server-only";
import { cookies } from "next/headers";
import { isLocale, type Locale, DEFAULT_LOCALE } from "./locales";
import en, { type Dictionary } from "./dictionaries/en";
import zh from "./dictionaries/zh";
import es from "./dictionaries/es";
import fr from "./dictionaries/fr";
import de from "./dictionaries/de";
import ja from "./dictionaries/ja";

const dictionaries: Record<Locale, Dictionary> = { zh, en, es, fr, de, ja };

export function getDict(locale: string): Dictionary {
  return isLocale(locale) ? dictionaries[locale] : en;
}

/** Server Action 中获取当前语言（middleware 写入的 cookie） */
export async function localeFromCookie(): Promise<Locale> {
  const store = await cookies();
  const value = store.get("ep_locale")?.value;
  return value && isLocale(value) ? value : DEFAULT_LOCALE;
}

/** 给站内路径补 locale 前缀（Server Action 里 redirect 用） */
export async function localePath(path: string): Promise<string> {
  const locale = await localeFromCookie();
  if (path.startsWith("/admin") || path.startsWith("/api")) return path;
  return path === "/" ? `/${locale}` : `/${locale}${path}`;
}

export type { Dictionary };

/** 从数据库记录的 translations JSON 中取本地化字段，缺失时回退英文原文 */
export function tField<T extends Record<string, unknown>>(
  record: T,
  translationsJson: string | null | undefined,
  field: keyof T & string,
  locale: Locale,
): string {
  const fallback = String(record[field] ?? "");
  if (!translationsJson || locale === "en") return fallback;
  try {
    const parsed = JSON.parse(translationsJson) as Record<string, Record<string, string>>;
    return parsed?.[locale]?.[field] || fallback;
  } catch {
    return fallback;
  }
}
