import { ExternalLink } from "lucide-react";
import { locale as rootLocale } from "next/root-params";
import { getSource, type SourceId } from "@/lib/sources";
import { getCommon } from "@/lib/i18n/dictionary";
import { DEFAULT_LOCALE } from "@/lib/i18n/config";

interface SourceBadgeProps {
  source: SourceId;
  /** Optional override; otherwise the source's own period is shown. */
  period?: string;
  className?: string;
}

/**
 * Inline citation shown next to any figure on the site.
 *
 * Reads the active locale from the root route param rather than taking it as a
 * prop, so it can be dropped anywhere without threading language through.
 */
export async function SourceBadge({
  source,
  period,
  className = "",
}: SourceBadgeProps) {
  const current = (await rootLocale()) ?? DEFAULT_LOCALE;
  const dict = getCommon(current);
  const entry = getSource(source);
  const lang = current === "ar" ? "ar" : "en";

  const label = period ?? entry.period[lang];

  return (
    <a
      href={entry.url}
      target="_blank"
      rel="noreferrer noopener"
      title={`${entry.publisher[lang]} — ${entry.title}`}
      className={`group inline-flex max-w-full items-center gap-1.5 rounded-full border border-ink-200 bg-white px-2.5 py-1 text-[11px] leading-tight font-medium text-ink-600 transition-colors hover:border-brand-300 hover:text-brand-700 ${className}`}
    >
      {/* Wraps rather than truncating: a nowrap label makes the badge's
          min-content width the full citation, which stretches any grid or
          flex parent past a phone-width viewport. */}
      <span className="min-w-0 break-words">
        {entry.short[lang]}
        {label ? ` · ${label}` : ""}
      </span>
      <ExternalLink
        aria-hidden="true"
        className="size-3 shrink-0 text-ink-400 transition-colors group-hover:text-brand-600"
      />
      <span className="sr-only">{dict.ui.opensInNewTab}</span>
    </a>
  );
}
