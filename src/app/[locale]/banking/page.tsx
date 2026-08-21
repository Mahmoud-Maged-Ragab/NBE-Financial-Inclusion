import type { Metadata } from "next";
// `Info` was dropped from this import when the educational-notice block below
// was commented out. Re-add it if that section is restored.
import { ShieldAlert } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { NextStep } from "@/components/ui/NextStep";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Card } from "@/components/ui/Card";
import {
  SelectableCards,
  type SelectableItem,
} from "@/components/ui/SelectableCards";
import { StepList, Callout, type Step } from "@/components/ui/StepList";
import { BankAwarenessCTA } from "@/components/ui/BankAwarenessCTA";
import { ICONS } from "@/components/ui/icons";
import { getContent, requireLocale } from "@/lib/i18n/dictionary";
import { languageAlternates, localePath } from "@/lib/i18n/config";

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/banking">): Promise<Metadata> {
  const { locale } = await params;
  const t = getContent(locale, "banking");
  return {
    title: t.meta.title,
    description: t.meta.description,
    alternates: languageAlternates("/banking"),
  };
}

export default async function BankingPage({
  params,
}: PageProps<"/[locale]/banking">) {
  const { locale: raw } = await params;
  const locale = requireLocale(raw);
  const t = getContent(locale, "banking");

  return (
    <>
      <PageHero
        eyebrow={t.hero.eyebrow}
        title={t.hero.title}
        description={t.hero.description}
      />

      {/* -------- Educational notice -------- */}
      {/* <section className="border-b border-ink-200 bg-white">
        <div className="mx-auto w-full max-w-6xl px-5 py-8 sm:px-8">
          <div className="flex gap-4 rounded-xl border border-ink-200 bg-ink-50 p-5">
            <Info
              aria-hidden="true"
              className="mt-0.5 size-5 shrink-0 text-brand-700"
            />
            <div>
              <p className="text-sm font-semibold text-ink-900">
                {t.notice.title}
              </p>
              <p className="mt-1.5 text-sm leading-relaxed text-ink-600">
                {t.notice.body}
              </p>
            </div>
          </div>
        </div>
      </section> */}

      {/* -------- Glossary -------- */}
      <Section>
        <Reveal>
          <SectionHeader
            eyebrow={t.glossary.eyebrow}
            title={t.glossary.title}
            description={t.glossary.description}
          />
        </Reveal>
        <Reveal delay={100} className="mt-12">
          <SelectableCards
            items={t.glossary.items as SelectableItem[]}
            ariaLabel={t.glossary.label}
            columns={4}
          />
        </Reveal>
      </Section>

      {/* -------- How a bank helps -------- */}
      <Section muted>
        <Reveal>
          <SectionHeader
            eyebrow={t.help.eyebrow}
            title={t.help.title}
            description={t.help.description}
            align="center"
          />
        </Reveal>
        <Reveal delay={100} className="mt-12">
          <StepList steps={t.help.steps as Step[]} />
        </Reveal>
      </Section>

      {/* -------- What do I need to start -------- */}
      <Section>
        <Reveal>
          <SectionHeader
            eyebrow={t.start.eyebrow}
            title={t.start.title}
            description={t.start.description}
          />
        </Reveal>

        <Reveal delay={80} className="mt-8">
          <Callout icon="alert" title={t.start.warning.title}>
            {t.start.warning.body}
          </Callout>
        </Reveal>

        <Reveal delay={120} className="mt-8">
          <StepList steps={t.start.steps as Step[]} />
        </Reveal>
      </Section>

      {/* -------- Stay safe -------- */}
      <Section muted>
        <Reveal>
          <SectionHeader
            eyebrow={t.safety.eyebrow}
            title={t.safety.title}
            description={t.safety.description}
          />
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_1.15fr] lg:gap-10">
          <Reveal>
            <div className="h-full rounded-xl border-2 border-data-6/30 bg-white p-6 sm:p-8">
              <p className="flex items-center gap-3 text-lg font-semibold text-ink-900">
                <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-lg bg-data-6/10 text-data-6">
                  <ShieldAlert aria-hidden="true" className="size-5" />
                </span>
                {t.safety.neverShareTitle}
              </p>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {t.safety.neverShare.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2.5 rounded-lg bg-ink-50 px-4 py-3 text-sm font-medium text-ink-900"
                  >
                    <span
                      aria-hidden="true"
                      className="inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-data-6/15 text-xs font-bold text-data-6"
                    >
                      ×
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-sm leading-relaxed text-ink-700">
                {t.safety.neverShareNote}
              </p>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <p className="mb-4 text-sm font-semibold text-ink-900">
              {t.safety.tipsTitle}
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {t.safety.tips.map((tip) => {
                const Icon = ICONS[tip.icon as keyof typeof ICONS];
                return (
                  <Card key={tip.title} interactive className="h-full">
                    <span className="inline-flex size-10 items-center justify-center rounded-lg bg-brand-50 text-brand-700">
                      <Icon aria-hidden="true" className="size-5" />
                    </span>
                    <h3 className="mt-4 text-base font-semibold text-ink-900">
                      {tip.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-600">
                      {tip.body}
                    </p>
                  </Card>
                );
              })}
            </div>
          </Reveal>
        </div>
      </Section>

      <NextStep
        title={t.cta.title}
        description={t.cta.description}
        primary={{
          href: localePath(locale, "/digital-finance"),
          label: t.cta.primary,
        }}
        secondary={{
          href: localePath(locale, "/egypt"),
          label: t.cta.secondary,
        }}
      />

      <BankAwarenessCTA />
    </>
  );
}
