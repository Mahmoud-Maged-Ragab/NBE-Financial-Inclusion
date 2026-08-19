import { LOCALE_COOKIE, type Locale } from "./config";

/**
 * Persists the visitor's language choice for a year, so a later visit to a
 * locale-less URL is redirected by the proxy to the language they picked.
 *
 * Kept outside the component so the assignment to `document.cookie` is a plain
 * module-level side effect rather than a mutation inside a React render scope.
 */
export function rememberLocale(next: Locale): void {
  if (typeof document === "undefined") return;
  document.cookie = `${LOCALE_COOKIE}=${next}; path=/; max-age=31536000; samesite=lax`;
}
