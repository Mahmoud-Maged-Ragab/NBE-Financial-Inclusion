import Link from "next/link";
import { NAV_GROUPS, NAV_ITEMS } from "@/lib/nav";
import { Logo } from "@/components/ui/Logo";
import { NBELogo } from "@/components/ui/NBELogo";
import { localePath, type Locale } from "@/lib/i18n/config";
import type { CommonDict } from "@/lib/i18n/content/common";

export function SiteFooter({
  locale,
  dict,
}: {
  locale: Locale;
  dict: CommonDict;
}) {
  return (
    <footer className="mt-auto border-t border-ink-200 bg-ink-950 text-ink-300">
      <div className="mx-auto w-full max-w-6xl px-5 py-14 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_2fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <Logo className="size-8" />
              <span className="text-sm leading-tight font-semibold text-white">
                {dict.site.name}
                <span className="block text-xs font-normal text-ink-400">
                  {dict.site.nameSuffix}
                </span>
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink-400">
              {dict.footer.description}
            </p>
            <Link
              href={localePath(locale, "/sources")}
              className="mt-5 inline-block text-sm font-medium text-gold-300 underline-offset-4 hover:underline"
            >
              {dict.footer.reviewSources}
            </Link>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            {NAV_GROUPS.map((group) => {
              const items = NAV_ITEMS.filter((i) => i.group === group);
              if (items.length === 0) return null;
              return (
                <div key={group}>
                  <p className="mb-3 text-xs font-semibold tracking-[0.14em] text-ink-500 uppercase">
                    {dict.nav.groups[group]}
                  </p>
                  <ul className="space-y-2">
                    {items.map((item) => (
                      <li key={item.href}>
                        <Link
                          href={localePath(locale, item.href)}
                          className="text-sm text-ink-300 transition-colors hover:text-white"
                        >
                          {dict.items[item.key].label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>

        {/* Project attribution */}
        <div className="mt-12 border-t border-white/10 pt-8">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-7">
            <NBELogo alt={dict.project.logoAlt} size="md" plate />
            <div>
              <p className="text-sm font-semibold text-white">
                {dict.project.createdBy}
              </p>
              <p className="mt-0.5 text-sm text-ink-300">{dict.project.org}</p>
            </div>
          </div>
          <p className="mt-5 max-w-3xl text-xs leading-relaxed text-ink-500">
            {dict.project.notOfficial}
          </p>
        </div>

        <div className="mt-8 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-ink-500 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-2xl">{dict.footer.disclaimer}</p>
          <p>{dict.footer.dataNote}</p>
        </div>
      </div>
    </footer>
  );
}
