import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { NextStep } from "@/components/ui/NextStep";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { ChallengeList, type Challenge } from "@/components/ui/ChallengeList";
import { SourceBadge } from "@/components/ui/SourceBadge";
import { Card } from "@/components/ui/Card";
import { BankAwarenessCTA } from "@/components/ui/BankAwarenessCTA";
import { getContent, getCommon, requireLocale } from "@/lib/i18n/dictionary";
import { languageAlternates, localePath } from "@/lib/i18n/config";

const TONES = [
  "border-brand-300 bg-brand-50",
  "border-ink-200 bg-white",
  "border-ink-200 bg-white",
];

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/challenges">): Promise<Metadata> {
  const { locale } = await params;
  const t = getContent(locale, "challenges");
  return {
    title: t.meta.title,
    description: t.meta.description,
    alternates: languageAlternates("/challenges"),
  };
}

export default async function ChallengesPage({
  params,
}: PageProps<"/[locale]/challenges">) {
  const { locale: raw } = await params;
  const locale = requireLocale(raw);
  const t = getContent(locale, "challenges");
  const c = getCommon(locale);

  return (
    <>
      <PageHero
        eyebrow={t.hero.eyebrow}
        title={t.hero.title}
        description={t.hero.description}
      />

      <Section>
        <Reveal>
          <SectionHeader
            eyebrow={t.intro.eyebrow}
            title={t.intro.title}
            description={t.intro.description}
          />
        </Reveal>

        <Reveal delay={100} className="mt-12">
          <ChallengeList
            items={t.items as Challenge[]}
            labels={{
              problem: c.ui.theProblem,
              why: c.ui.whyItMatters,
              solution: c.ui.possibleSolution,
            }}
          />
        </Reveal>

        <Reveal delay={140}>
          <div className="mt-8 flex flex-wrap gap-2">
            <SourceBadge source="findexApi" />
            <SourceBadge source="cbeStrategy" />
            <SourceBadge source="cbeMsme" />
            <SourceBadge source="imfFas" />
            <SourceBadge source="pwcShadow" />
            <SourceBadge source="oecdSme" />
          </div>
        </Reveal>
      </Section>

      <Section muted>
        <div className="grid gap-8 lg:grid-cols-3">
          <Reveal>
            <SectionHeader
              eyebrow={t.sequencing.eyebrow}
              title={t.sequencing.title}
            />
            <p className="mt-6 leading-relaxed text-ink-700">
              {t.sequencing.intro}
            </p>
          </Reveal>

          <Reveal delay={90} className="lg:col-span-2">
            <div className="grid gap-5 sm:grid-cols-3">
              {t.sequencing.groups.map((group, i) => (
                <div
                  key={group.horizon}
                  className={`rounded-xl border p-6 ${TONES[i] ?? TONES[1]}`}
                >
                  <h3 className="text-sm font-semibold text-ink-900">
                    {group.horizon}
                  </h3>
                  <ul className="mt-3 space-y-1.5">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="flex gap-2 text-sm font-medium text-brand-700"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-1.5 size-1.5 shrink-0 rounded-full bg-gold-400"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-4 text-sm leading-relaxed text-ink-600">
                    {group.body}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={140}>
          <Card className="mt-8 border-gold-200 bg-gold-100/50">
            <p className="leading-relaxed text-pretty text-ink-800">
              {t.sequencing.note}
            </p>
          </Card>
        </Reveal>
      </Section>

      <NextStep
        title={t.cta.title}
        description={t.cta.description}
        primary={{
          href: localePath(locale, "/digital-finance"),
          label: t.cta.primary,
        }}
        secondary={{
          href: localePath(locale, "/fintech"),
          label: t.cta.secondary,
        }}
      />

      <BankAwarenessCTA />
    </>
  );
}
