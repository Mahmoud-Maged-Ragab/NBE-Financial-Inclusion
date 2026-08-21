import { locale as rootLocale } from "next/root-params";
import { Container } from "./Section";
import { Reveal } from "./Reveal";
import { NBELogo } from "./NBELogo";
import { getCommon } from "@/lib/i18n/dictionary";
import { DEFAULT_LOCALE, type Locale } from "@/lib/i18n/config";

/**
 * Project authorship block: who made the site, why, and — just as importantly —
 * what it is not. Kept restrained so the page stays an educational resource
 * rather than turning into bank promotion.
 */
export async function AboutProject({ muted = false }: { muted?: boolean }) {
  const current = ((await rootLocale()) ?? DEFAULT_LOCALE) as Locale;
  const dict = getCommon(current);
  const p = dict.project;

  return (
    <section className={muted ? "bg-ink-50" : "bg-white"}>
      <Container className="py-16 sm:py-20">
        <Reveal>
          <div className="mx-auto max-w-3xl rounded-2xl border border-ink-200 bg-white p-7 sm:p-10">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:gap-8">
              <NBELogo alt={p.logoAlt} size="lg" className="shrink-0" />

              <div className="min-w-0">
                <p className="text-xs font-semibold tracking-[0.14em] text-brand-600 uppercase">
                  {p.aboutEyebrow}
                </p>
                <h2 className="mt-2 text-2xl font-semibold tracking-tight text-ink-900">
                  {p.aboutTitle}
                </h2>
                <p className="mt-4 leading-relaxed text-pretty text-ink-700">
                  {p.aboutBody}
                </p>

                <div className="mt-6 border-t border-ink-100 pt-5">
                  <p className="text-sm font-semibold text-ink-900">
                    {p.createdBy}
                  </p>
                  <p className="mt-0.5 text-sm text-ink-600">{p.org}</p>
                </div>

                <p className="mt-5 rounded-lg bg-ink-50 px-4 py-3 text-xs leading-relaxed text-ink-600">
                  {p.notOfficial}
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
