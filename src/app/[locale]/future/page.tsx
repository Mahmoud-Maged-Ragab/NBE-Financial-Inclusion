import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { NextStep } from "@/components/ui/NextStep";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Card } from "@/components/ui/Card";
import {
  SelectableCards,
  type SelectableItem,
} from "@/components/ui/SelectableCards";
import { SourceBadge } from "@/components/ui/SourceBadge";
import { BankAwarenessCTA } from "@/components/ui/BankAwarenessCTA";
import { ICONS } from "@/components/ui/icons";
import { getContent, requireLocale } from "@/lib/i18n/dictionary";
import { languageAlternates, localePath } from "@/lib/i18n/config";

const GROUP_TONES = [
  "border-brand-200 bg-brand-50",
  "border-gold-200 bg-gold-100/50",
  "border-ink-200 bg-white",
];

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/future">): Promise<Metadata> {
  const { locale } = await params;
  const t = getContent(locale, "future");
  return {
    title: t.meta.title,
    description: t.meta.description,
    alternates: languageAlternates("/future"),
  };
}

export default async function FuturePage({
  params,
}: PageProps<"/[locale]/future">) {
  const { locale: raw } = await params;
  const locale = requireLocale(raw);
  const t = getContent(locale, "future");

  return (
    <>
      <PageHero
        eyebrow={t.hero.eyebrow}
        title={t.hero.title}
        description={t.hero.description}
      />

      {/* -------- Framing -------- */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
          <Reveal>
            <SectionHeader
              eyebrow={t.start.eyebrow}
              title={t.start.title}
              description={t.start.description}
            />
            <p className="mt-6 leading-relaxed text-ink-700">{t.start.body1}</p>
            <p className="mt-4 leading-relaxed text-ink-700">{t.start.body2}</p>
            <p className="mt-4 leading-relaxed text-ink-700">{t.start.body3}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              <SourceBadge source="findexApi" />
              <SourceBadge source="cbeInclusion2025" />
            </div>
          </Reveal>

          <Reveal delay={120}>
            <Card className="h-full border-brand-200 bg-brand-50">
              <h3 className="text-lg font-semibold text-ink-900">
                {t.start.strategy.title}
              </h3>
              <p className="mt-3 leading-relaxed text-ink-700">
                {t.start.strategy.intro}
              </p>
              <ul className="mt-5 space-y-3">
                {t.start.strategy.items.map((p) => (
                  <li key={p} className="flex gap-3 text-sm text-ink-700">
                    <span
                      aria-hidden="true"
                      className="mt-1.5 size-1.5 shrink-0 rounded-full bg-gold-400"
                    />
                    <span className="leading-relaxed">{p}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-sm leading-relaxed text-ink-600">
                {t.start.strategy.note}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                <SourceBadge source="cbeInclusion2025" />
                <SourceBadge source="egyptVision2030" />
              </div>
            </Card>
          </Reveal>
        </div>
      </Section>

      {/* -------- Technologies -------- */}
      <Section muted>
        <Reveal>
          <SectionHeader
            eyebrow={t.tech.eyebrow}
            title={t.tech.title}
            description={t.tech.description}
          />
        </Reveal>
        <Reveal delay={100} className="mt-12">
          <SelectableCards
            items={t.tech.items as SelectableItem[]}
            ariaLabel={t.tech.label}
            columns={3}
          />
        </Reveal>
      </Section>

      {/* -------- 2030 conditions -------- */}
      <Section>
        <Reveal>
          <SectionHeader
            eyebrow={t.conditions.eyebrow}
            title={t.conditions.title}
            description={t.conditions.description}
            align="center"
          />
        </Reveal>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {t.conditions.groups.map((group, i) => {
            const Icon = ICONS[group.icon as keyof typeof ICONS];
            return (
              <Reveal key={group.title} delay={i * 90}>
                <div
                  className={`h-full rounded-xl border p-6 ${GROUP_TONES[i] ?? GROUP_TONES[2]}`}
                >
                  <span className="inline-flex size-11 items-center justify-center rounded-lg bg-white text-brand-700 ring-1 ring-ink-200">
                    <Icon aria-hidden="true" className="size-5" />
                  </span>
                  <h3 className="mt-4 text-lg font-semibold text-ink-900">
                    {group.title}
                  </h3>
                  <ul className="mt-4 space-y-3">
                    {group.items.map((item) => (
                      <li key={item} className="flex gap-3 text-sm text-ink-700">
                        <span
                          aria-hidden="true"
                          className="mt-1.5 size-1.5 shrink-0 rounded-full bg-gold-400"
                        />
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={140}>
          <Card className="mt-8">
            <h3 className="text-lg font-semibold text-ink-900">
              {t.conditions.note.title}
            </h3>
            <p className="mt-3 leading-relaxed text-pretty text-ink-700">
              {t.conditions.note.body1}
            </p>
            <p className="mt-4 leading-relaxed text-pretty text-ink-700">
              {t.conditions.note.body2}
            </p>
            <div className="mt-5">
              <SourceBadge source="findexApi" />
            </div>
          </Card>
        </Reveal>
      </Section>

      <NextStep
        title={t.cta.title}
        description={t.cta.description}
        primary={{
          href: localePath(locale, "/sources"),
          label: t.cta.primary,
        }}
        secondary={{ href: localePath(locale, "/"), label: t.cta.secondary }}
      />

      <BankAwarenessCTA />
    </>
  );
}
