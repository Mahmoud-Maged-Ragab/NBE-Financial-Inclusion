import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { NextStep } from "@/components/ui/NextStep";
import { Rule, Section, SectionHeader } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Card, FeatureCard } from "@/components/ui/Card";
import { FlowDiagram, type FlowStep } from "@/components/ui/FlowDiagram";
import { SourceBadge } from "@/components/ui/SourceBadge";
import { BankAwarenessCTA } from "@/components/ui/BankAwarenessCTA";
import { ICONS } from "@/components/ui/icons";
import { getContent, getCommon, requireLocale } from "@/lib/i18n/dictionary";
import { languageAlternates, localePath } from "@/lib/i18n/config";

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/understanding">): Promise<Metadata> {
  const { locale } = await params;
  const t = getContent(locale, "understanding");
  return {
    title: t.meta.title,
    description: t.meta.description,
    alternates: languageAlternates("/understanding"),
  };
}

export default async function UnderstandingPage({
  params,
}: PageProps<"/[locale]/understanding">) {
  const { locale: raw } = await params;
  const locale = requireLocale(raw);
  const t = getContent(locale, "understanding");
  const c = getCommon(locale);

  return (
    <>
      <PageHero
        eyebrow={t.hero.eyebrow}
        title={t.hero.title}
        description={t.hero.description}
      />

      {/* -------- Definition -------- */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
          <Reveal>
            <SectionHeader
              eyebrow={t.definition.eyebrow}
              title={t.definition.title}
            />
            <Rule className="mt-6" />
            <blockquote className="mt-8 border-s-2 border-brand-600 ps-6">
              <p className="text-xl leading-relaxed text-pretty text-ink-800">
                {t.definition.quote}
              </p>
              <footer className="mt-4 text-sm text-ink-500">
                {t.definition.attribution}
              </footer>
            </blockquote>
            <p className="mt-8 leading-relaxed text-ink-700">
              {t.definition.bodyIntro}
            </p>
            <ul className="mt-4 space-y-2.5">
              {t.definition.terms.map((item) => (
                <li key={item.term} className="leading-relaxed text-ink-700">
                  <strong className="font-semibold text-ink-900">
                    {item.term}
                  </strong>{" "}
                  {item.gloss}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={120}>
            <div className="grid gap-4">
              {t.misconceptions.map((m) => (
                <FeatureCard
                  key={m.title}
                  icon={ICONS[m.icon as keyof typeof ICONS]}
                  title={m.title}
                >
                  {m.body}
                </FeatureCard>
              ))}
            </div>
          </Reveal>
        </div>
      </Section>

      {/* -------- The ladder -------- */}
      <Section muted>
        <Reveal>
          <SectionHeader
            eyebrow={t.ladder.eyebrow}
            title={t.ladder.title}
            description={t.ladder.description}
          />
        </Reveal>
        <Reveal delay={100} className="mt-12">
          <FlowDiagram
            steps={t.ladder.steps as FlowStep[]}
            stageLabel={c.ui.stageOf}
          />
        </Reveal>
        <Reveal delay={140}>
          <div className="mt-6 flex flex-wrap gap-2">
            <SourceBadge source="findexApi" />
            <SourceBadge source="findex2025" />
          </div>
        </Reveal>
      </Section>

      {/* -------- Measurement -------- */}
      <Section id="measurement">
        <Reveal>
          <SectionHeader
            eyebrow={t.measurement.eyebrow}
            title={t.measurement.title}
            description={t.measurement.description}
          />
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {[
            { d: t.measurement.supply, accent: true, src: "cbeInclusion2025" },
            { d: t.measurement.demand, accent: false, src: "findex2025" },
          ].map((panel, i) => (
            <Reveal key={panel.d.title} delay={i * 100}>
              <Card
                className={`h-full ${panel.accent ? "border-brand-200 bg-brand-50" : ""}`}
              >
                <p
                  className={`text-xs font-semibold tracking-[0.14em] uppercase ${
                    panel.accent ? "text-brand-700" : "text-gold-600"
                  }`}
                >
                  {panel.d.tag}
                </p>
                <p
                  className={`tabular mt-3 text-4xl font-semibold ${
                    panel.accent ? "text-brand-700" : "text-ink-900"
                  }`}
                >
                  {panel.d.value}
                </p>
                <h3 className="mt-2 text-lg font-semibold text-ink-900">
                  {panel.d.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-700">
                  {panel.d.body}
                </p>
                <ul className="mt-4 space-y-2 text-sm text-ink-600">
                  {panel.d.points.map((p) => (
                    <li key={p} className="flex gap-2.5">
                      <span
                        aria-hidden="true"
                        className="mt-1.5 size-1.5 shrink-0 rounded-full bg-gold-400"
                      />
                      <span className="leading-relaxed">{p}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-5">
                  <SourceBadge
                    source={panel.src as "cbeInclusion2025" | "findex2025"}
                  />
                </div>
              </Card>
            </Reveal>
          ))}
        </div>

        <Reveal delay={140}>
          <div className="mt-8 rounded-xl border border-gold-200 bg-gold-100/50 p-6">
            <p className="leading-relaxed text-pretty text-ink-800">
              <strong className="font-semibold">
                {t.measurement.readTogetherLabel}
              </strong>{" "}
              {t.measurement.readTogether}
            </p>
          </div>
        </Reveal>
      </Section>

      <NextStep
        title={t.cta.title}
        description={t.cta.description}
        primary={{
          href: localePath(locale, "/banking"),
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
