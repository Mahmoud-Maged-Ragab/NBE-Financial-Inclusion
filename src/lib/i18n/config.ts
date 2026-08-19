export const LOCALES = ["en", "ar"] as const;

export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "en";

export interface LocaleMeta {
  /** Short label shown in the switcher. */
  label: string;
  /** Full name in its own language. */
  name: string;
  dir: "ltr" | "rtl";
  htmlLang: string;
}

export const LOCALE_META: Record<Locale, LocaleMeta> = {
  en: { label: "EN", name: "English", dir: "ltr", htmlLang: "en" },
  ar: { label: "العربية", name: "العربية", dir: "rtl", htmlLang: "ar" },
};

export function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value);
}

/**
 * Builds a locale-prefixed href.
 * `localePath("ar", "/egypt")` → `/ar/egypt`, and `"/"` → `/ar`.
 */
export function localePath(locale: Locale, path: string): string {
  if (path === "/") return `/${locale}`;
  const clean = path.startsWith("/") ? path : `/${path}`;
  return `/${locale}${clean}`;
}

/** Strips the locale prefix from a pathname, returning the bare route. */
export function stripLocale(pathname: string): string {
  for (const locale of LOCALES) {
    if (pathname === `/${locale}`) return "/";
    if (pathname.startsWith(`/${locale}/`)) {
      return pathname.slice(locale.length + 1);
    }
  }
  return pathname;
}

/** Cookie used to remember the visitor's choice between sessions. */
export const LOCALE_COOKIE = "fi_locale";

/**
 * Per-route `hreflang` alternates for page metadata, so each page points at its
 * own translation rather than at the site root.
 */
export function languageAlternates(route: string): {
  languages: Record<string, string>;
} {
  return {
    languages: Object.fromEntries(
      LOCALES.map((code) => [code, localePath(code, route)]),
    ),
  };
}
