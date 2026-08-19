"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { LayoutGrid, X } from "lucide-react";
import { NAV_GROUPS, NAV_ITEMS, PRIMARY_NAV } from "@/lib/nav";
import { Logo } from "@/components/ui/Logo";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { localePath, stripLocale, type Locale } from "@/lib/i18n/config";
import type { CommonDict } from "@/lib/i18n/content/common";

interface SiteHeaderProps {
  locale: Locale;
  dict: CommonDict;
}

export function SiteHeader({ locale, dict }: SiteHeaderProps) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const current = stripLocale(pathname ?? "/");

  // Close on Escape, and stop the page scrolling behind the panel.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previous;
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-ink-200 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center gap-3 px-5 sm:px-8">
        <Link
          href={localePath(locale, "/")}
          className="flex items-center gap-2.5 text-ink-900"
          aria-label={dict.site.home}
        >
          <Logo className="size-8 shrink-0" />
          <span className="hidden text-sm leading-tight font-semibold sm:block">
            {dict.site.name}
            <span className="block text-xs font-normal text-ink-500">
              {dict.site.nameSuffix}
            </span>
          </span>
        </Link>

        <nav
          aria-label={dict.nav.primary}
          className="ms-auto hidden items-center gap-1 lg:flex"
        >
          {PRIMARY_NAV.map((item) => {
            const active = current === item.href;
            return (
              <Link
                key={item.href}
                href={localePath(locale, item.href)}
                aria-current={active ? "page" : undefined}
                className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                  active
                    ? "bg-brand-50 text-brand-700"
                    : "text-ink-600 hover:bg-ink-50 hover:text-ink-900"
                }`}
              >
                {dict.nav.short[item.short]}
              </Link>
            );
          })}
        </nav>

        <div className="ms-auto flex items-center gap-2 lg:ms-3">
          <div className="hidden sm:block">
            <LanguageSwitcher locale={locale} label={dict.nav.language} />
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="section-panel"
            className="inline-flex items-center gap-2 rounded-md border border-ink-200 px-3 py-2 text-sm font-medium text-ink-700 transition-colors hover:border-brand-300 hover:text-brand-700"
          >
            {open ? (
              <X aria-hidden="true" className="size-4" />
            ) : (
              <LayoutGrid aria-hidden="true" className="size-4" />
            )}
            <span>{open ? dict.nav.close : dict.nav.sections}</span>
          </button>
        </div>
      </div>

      {/* Section panel */}
      <div
        id="section-panel"
        hidden={!open}
        className="max-h-[calc(100dvh-4rem)] overflow-y-auto border-t border-ink-200 bg-white"
      >
        <div className="mx-auto w-full max-w-6xl px-5 py-8 sm:px-8">
          <div className="grid gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
            {NAV_GROUPS.map((group) => {
              const items = NAV_ITEMS.filter((i) => i.group === group);
              if (items.length === 0) return null;
              return (
                <div key={group}>
                  <p className="mb-3 text-xs font-semibold tracking-[0.14em] text-brand-600 uppercase">
                    {dict.nav.groups[group]}
                  </p>
                  <ul className="space-y-1">
                    {items.map((item) => {
                      const active = current === item.href;
                      const entry = dict.items[item.key];
                      return (
                        <li key={item.href}>
                          <Link
                            href={localePath(locale, item.href)}
                            aria-current={active ? "page" : undefined}
                            onClick={() => setOpen(false)}
                            className={`block rounded-lg px-3 py-2.5 transition-colors ${
                              active
                                ? "bg-brand-50"
                                : "hover:bg-ink-50 focus-visible:bg-ink-50"
                            }`}
                          >
                            <span
                              className={`block text-sm font-medium ${
                                active ? "text-brand-700" : "text-ink-900"
                              }`}
                            >
                              {entry.label}
                            </span>
                            <span className="mt-0.5 block text-xs leading-relaxed text-ink-500">
                              {entry.blurb}
                            </span>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            })}

            <div className="sm:hidden">
              <LanguageSwitcher
                locale={locale}
                label={dict.nav.language}
                variant="stacked"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
