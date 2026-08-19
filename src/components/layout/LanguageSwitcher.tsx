"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Globe } from "lucide-react";
import {
  LOCALES,
  LOCALE_META,
  localePath,
  stripLocale,
  type Locale,
} from "@/lib/i18n/config";
import { rememberLocale } from "@/lib/i18n/rememberLocale";

interface LanguageSwitcherProps {
  locale: Locale;
  label: string;
  /** Compact segmented control for the header; stacked list for the panel. */
  variant?: "inline" | "stacked";
}

/**
 * Switches locale by navigating to the same route under the other prefix.
 *
 * Uses `<Link>`, so the change is a client-side transition rather than a full
 * page reload, and writes a cookie so the choice survives a later visit to `/`.
 */
export function LanguageSwitcher({
  locale,
  label,
  variant = "inline",
}: LanguageSwitcherProps) {
  const pathname = usePathname();
  const bare = stripLocale(pathname ?? "/");

  if (variant === "stacked") {
    return (
      <div>
        <p className="mb-3 text-xs font-semibold tracking-[0.14em] text-brand-600 uppercase">
          {label}
        </p>
        <ul className="space-y-1">
          {LOCALES.map((code) => {
            const meta = LOCALE_META[code];
            const active = code === locale;
            return (
              <li key={code}>
                <Link
                  href={localePath(code, bare)}
                  hrefLang={meta.htmlLang}
                  lang={meta.htmlLang}
                  aria-current={active ? "true" : undefined}
                  onClick={() => rememberLocale(code)}
                  className={`flex items-center gap-2.5 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                    active
                      ? "bg-brand-50 text-brand-700"
                      : "text-ink-800 hover:bg-ink-50"
                  }`}
                >
                  <Globe aria-hidden="true" className="size-4 shrink-0" />
                  {meta.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }

  return (
    <div
      className="flex items-center rounded-md border border-ink-200 p-0.5"
      role="group"
      aria-label={label}
    >
      {LOCALES.map((code) => {
        const meta = LOCALE_META[code];
        const active = code === locale;
        return (
          <Link
            key={code}
            href={localePath(code, bare)}
            hrefLang={meta.htmlLang}
            lang={meta.htmlLang}
            aria-current={active ? "true" : undefined}
            onClick={() => rememberLocale(code)}
            className={`rounded px-2.5 py-1.5 text-xs font-semibold transition-colors ${
              active
                ? "bg-brand-700 text-white"
                : "text-ink-600 hover:bg-ink-50 hover:text-ink-900"
            }`}
          >
            {meta.label}
          </Link>
        );
      })}
    </div>
  );
}
