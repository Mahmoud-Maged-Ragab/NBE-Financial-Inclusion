import { NextResponse, type NextRequest } from "next/server";

/**
 * Redirects locale-less paths to a locale-prefixed one.
 *
 * Proxy is deployed separately from the render code, so the locale list is
 * declared inline here rather than imported from `@/lib/i18n/config`.
 */
const LOCALES = ["en", "ar"] as const;
const DEFAULT_LOCALE = "en";
const LOCALE_COOKIE = "fi_locale";

function resolveLocale(request: NextRequest): string {
  // A previous explicit choice wins over browser settings.
  const saved = request.cookies.get(LOCALE_COOKIE)?.value;
  if (saved && (LOCALES as readonly string[]).includes(saved)) return saved;

  const header = request.headers.get("accept-language");
  if (header) {
    const preferred = header
      .split(",")
      .map((part) => {
        const [tag, q] = part.trim().split(";q=");
        return { tag: tag.toLowerCase(), q: q ? Number(q) : 1 };
      })
      .sort((a, b) => b.q - a.q);

    for (const { tag } of preferred) {
      const base = tag.split("-")[0];
      if ((LOCALES as readonly string[]).includes(base)) return base;
    }
  }

  return DEFAULT_LOCALE;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const hasLocale = LOCALES.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`),
  );
  if (hasLocale) return;

  const locale = resolveLocale(request);
  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  // Skip Next internals and anything that looks like a static file.
  matcher: ["/((?!_next|.*\\..*).*)"],
};
