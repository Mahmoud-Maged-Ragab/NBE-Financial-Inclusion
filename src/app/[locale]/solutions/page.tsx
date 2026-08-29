import Link from "next/link";
import type { Metadata } from "next";
import { ArrowDown, CheckCircle2 } from "lucide-react";
import { PageHero, CTA } from "@/components/ui/PageHero";
import { Section, SectionHeader, Rule } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Card, FeatureCard } from "@/components/ui/Card";
import { ProblemCard, SolutionCard } from "@/components/ui/SolutionCard";
import { SolutionPath } from "@/components/ui/SolutionPath";
import {
  ContributionCard,
  NationalNote,
  NbeContribution,
} from "@/components/ui/NbeContribution";
import { StepList, Callout } from "@/components/ui/StepList";
import { ImpactStatCard } from "@/components/ui/ImpactStatCard";
import { SourceBadge } from "@/components/ui/SourceBadge";
import { NBELogo } from "@/components/ui/NBELogo";
import { ICONS, type IconName } from "@/components/ui/icons";
import type { SourceId } from "@/lib/sources";
import {
  LATEST_NBE,
  NATIONAL_CONTEXT,
  SOLUTIONS_PROGRAMME_STATS,
} from "@/lib/nbeImpact";
import { getContent, getCommon, requireLocale } from "@/lib/i18n/dictionary";
import { languageAlternates, localePath } from "@/lib/i18n/config";

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/solutions">): Promise<Metadata> {
  const { locale } = await params;
  const t = getContent(locale, "solutions");
  return {
    title: t.meta.title,
    description: t.meta.description,
    alternates: languageAlternates("/solutions"),
  };
}

/**
 * Citations for the seven detailed solution sections.
 *
 * Kept here rather than in the dictionary because they are structural, not
 * translatable: the same document is cited in both languages.
 */
const NBE_SOURCES = {
  education: ["nbeEsg2023", "nbeAnnual2023"],
  digital: ["nbeEsg2023"],
  rural: ["nbeEsg2023", "nbeAnnual2023"],
  women: ["nbeEsg2023"],
  youth: ["nbeEsg2023", "nbeAnnual2023"],
  business: ["nbeEsg2023"],
} satisfies Record<string, SourceId[]>;

/** Country-wide figures shown beside a section, and where each comes from. */
const NATIONAL_SOURCES = {
  digital: "nbeBulletin2No2026",
  women: "cbeInclusion2026",
  youth: "cbeInclusion2026",
  business: "nbeBulletin2No2026",
} satisfies Record<string, SourceId>;

/** The recognised responses to one barrier, as a checked list. */
function SolutionList({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-xl border border-ink-200 bg-white p-6 sm:p-7">
      <p className="text-[11px] font-semibold tracking-[0.12em] text-brand-600 uppercase">
        {title}
      </p>
      <ul className="mt-4 space-y-3">
        {items.map((item) => (
          <li
            key={item}
            className="flex gap-3 text-sm leading-relaxed text-ink-700"
          >
            <CheckCircle2
              aria-hidden="true"
              className="mt-0.5 size-4 shrink-0 text-brand-600"
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

/**
 * One detailed solution: the argument on the left, what NBE reports doing on
 * the right.
 *
 * The split is deliberate — the general case for a solution and a bank's
 * account of its own work are different kinds of claim, and the layout keeps
 * a reader from mistaking one for the other.
 */
function DeepSection({
  id,
  eyebrow,
  title,
  lead,
  body,
  listTitle,
  list,
  nbeLabel,
  nbePoints,
  nbeNote,
  nbeSources,
  nationalLabel,
  national,
  nationalSource,
  muted = false,
}: {
  id: string;
  eyebrow: string;
  title: string;
  lead: string;
  body?: string;
  listTitle: string;
  list: string[];
  nbeLabel: string;
  nbePoints: string[];
  nbeNote?: string;
  nbeSources: SourceId[];
  nationalLabel: string;
  national?: string;
  nationalSource?: SourceId;
  muted?: boolean;
}) {
  return (
    <Section id={id} muted={muted} className="scroll-mt-20">
      <Reveal>
        <SectionHeader eyebrow={eyebrow} title={title} description={lead} />
        {body ? (
          <p className="mt-4 max-w-3xl leading-relaxed text-pretty text-ink-700">
            {body}
          </p>
        ) : null}
        <Rule className="mt-8" />
      </Reveal>

      <div className="mt-10 grid gap-6 lg:grid-cols-2 lg:gap-8">
        <Reveal>
          <SolutionList title={listTitle} items={list} />
        </Reveal>

        <Reveal delay={120}>
          <div className="space-y-6">
            <NbeContribution
              label={nbeLabel}
              points={nbePoints}
              note={nbeNote}
              sources={nbeSources}
            />
            {national && nationalSource ? (
              <NationalNote
                label={nationalLabel}
                body={national}
                source={nationalSource}
              />
            ) : null}
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

export default async function SolutionsPage({
  params,
}: PageProps<"/[locale]/solutions">) {
  const { locale: raw } = await params;
  const locale = requireLocale(raw);
  const t = getContent(locale, "solutions");
  const c = getCommon(locale);
  const d = t.deep;

  return (
    <>
      <PageHero
        eyebrow={t.hero.eyebrow}
        title={t.hero.title}
        description={t.hero.description}
      >
        <a
          href="#solutions"
          className="group inline-flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-3.5 text-sm font-semibold text-brand-800 transition-colors hover:bg-gold-200"
        >
          {t.hero.cta}
          <ArrowDown
            aria-hidden="true"
            className="size-4 transition-transform duration-300 group-hover:translate-y-0.5"
          />
        </a>
      </PageHero>

      {/* -------- 1. The problem -------- */}
      <Section>
        <Reveal>
          <SectionHeader
            eyebrow={t.problems.eyebrow}
            title={t.problems.title}
            description={t.problems.description}
          />
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {t.problems.items.map((item, i) => (
            <Reveal key={item.id} delay={i * 60}>
              <ProblemCard item={{ ...item, icon: item.icon as IconName }} />
            </Reveal>
          ))}
        </div>
      </Section>

      {/* -------- 2. Solutions overview -------- */}
      <Section id="solutions" muted className="scroll-mt-20">
        <Reveal>
          <SectionHeader
            eyebrow={t.solutions.eyebrow}
            title={t.solutions.title}
            description={t.solutions.description}
          />
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {t.solutions.items.map((item, i) => (
            <Reveal key={item.id} delay={i * 60}>
              <SolutionCard
                index={i}
                item={{
                  ...item,
                  icon: item.icon as IconName,
                  href: item.href || undefined,
                }}
                helpsLabel={t.solutions.helps}
                moreLabel={t.solutions.more}
              />
            </Reveal>
          ))}
        </div>
      </Section>

      {/* -------- 3. Financial education -------- */}
      <DeepSection
        id={d.education.id}
        eyebrow={d.education.eyebrow}
        title={d.education.title}
        lead={d.education.lead}
        listTitle={t.labels.solutionsList}
        list={d.education.list}
        nbeLabel={t.labels.nbe}
        nbePoints={d.education.nbe.points}
        nbeNote={d.education.nbe.note}
        nbeSources={NBE_SOURCES.education}
        nationalLabel={t.labels.national}
      />

      {/* -------- 4. Digital banking -------- */}
      <DeepSection
        muted
        id={d.digital.id}
        eyebrow={d.digital.eyebrow}
        title={d.digital.title}
        lead={d.digital.lead}
        body={d.digital.body}
        listTitle={t.labels.solutionsList}
        list={d.digital.list}
        nbeLabel={t.labels.nbe}
        nbePoints={d.digital.nbe.points}
        nbeNote={d.digital.nbe.note}
        nbeSources={NBE_SOURCES.digital}
        nationalLabel={t.labels.national}
        national={d.digital.national}
        nationalSource={NATIONAL_SOURCES.digital}
      />

      {/* -------- 5. Rural access -------- */}
      <DeepSection
        id={d.rural.id}
        eyebrow={d.rural.eyebrow}
        title={d.rural.title}
        lead={d.rural.lead}
        listTitle={t.labels.solutionsList}
        list={d.rural.list}
        nbeLabel={t.labels.nbe}
        nbePoints={d.rural.nbe.points}
        nbeNote={d.rural.nbe.note}
        nbeSources={NBE_SOURCES.rural}
        nationalLabel={t.labels.national}
      />

      {/* -------- 6. Women -------- */}
      <DeepSection
        muted
        id={d.women.id}
        eyebrow={d.women.eyebrow}
        title={d.women.title}
        lead={d.women.lead}
        body={d.women.body}
        listTitle={t.labels.solutionsList}
        list={d.women.list}
        nbeLabel={t.labels.nbe}
        nbePoints={d.women.nbe.points}
        nbeNote={d.women.nbe.note}
        nbeSources={NBE_SOURCES.women}
        nationalLabel={t.labels.national}
        national={d.women.national}
        nationalSource={NATIONAL_SOURCES.women}
      />

      {/* -------- 7. Youth -------- */}
      <DeepSection
        id={d.youth.id}
        eyebrow={d.youth.eyebrow}
        title={d.youth.title}
        lead={d.youth.lead}
        listTitle={t.labels.solutionsList}
        list={d.youth.list}
        nbeLabel={t.labels.nbe}
        nbePoints={d.youth.nbe.points}
        nbeNote={d.youth.nbe.note}
        nbeSources={NBE_SOURCES.youth}
        nationalLabel={t.labels.national}
        national={d.youth.national}
        nationalSource={NATIONAL_SOURCES.youth}
      />

      {/* -------- 8. Small businesses -------- */}
      <DeepSection
        muted
        id={d.business.id}
        eyebrow={d.business.eyebrow}
        title={d.business.title}
        lead={d.business.lead}
        listTitle={t.labels.solutionsList}
        list={d.business.list}
        nbeLabel={t.labels.nbe}
        nbePoints={d.business.nbe.points}
        nbeNote={d.business.nbe.note}
        nbeSources={NBE_SOURCES.business}
        nationalLabel={t.labels.national}
        national={d.business.national}
        nationalSource={NATIONAL_SOURCES.business}
      />

      {/* -------- 9. Staying safe -------- */}
      <Section id={d.security.id} className="scroll-mt-20">
        <Reveal>
          <SectionHeader
            eyebrow={d.security.eyebrow}
            title={d.security.title}
            description={d.security.lead}
          />
          <Rule className="mt-8" />
        </Reveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-2 lg:gap-8">
          <Reveal>
            <SolutionList
              title={t.labels.solutionsList}
              items={d.security.list}
            />
          </Reveal>

          <Reveal delay={120}>
            <Callout icon="shield" title={d.security.warning.title}>
              <p className="text-base font-semibold text-ink-900">
                {d.security.warning.body}
              </p>
              <ul className="mt-4 space-y-3">
                {d.security.warning.items.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span
                      aria-hidden="true"
                      className="mt-2 size-1.5 shrink-0 rounded-full bg-gold-400"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-5 border-t border-gold-200 pt-4 text-xs leading-relaxed text-ink-600">
                {d.security.note}
              </p>
            </Callout>
          </Reveal>
        </div>
      </Section>

      {/* -------- 10. NBE's contribution -------- */}
      <Section muted>
        <Reveal>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeader
              eyebrow={t.contribution.eyebrow}
              title={t.contribution.title}
              description={t.contribution.description}
            />
            <NBELogo
              alt={c.project.logoAlt}
              size="md"
              className="shrink-0 self-start sm:self-end"
            />
          </div>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {t.contribution.items.map((item, i) => (
            <Reveal key={item.id} delay={i * 60}>
              <ContributionCard
                labels={t.contribution.labels}
                item={{
                  ...item,
                  icon: item.icon as IconName,
                  source: item.source as SourceId,
                }}
              />
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <Card className="mt-8 border-ink-200 bg-white">
            <p className="text-sm leading-relaxed text-ink-600">
              {t.disclaimer}
            </p>
          </Card>
        </Reveal>
      </Section>

      {/* -------- 11. The numbers -------- */}
      <Section>
        <Reveal>
          <SectionHeader
            eyebrow={t.impact.eyebrow}
            title={t.impact.title}
            description={t.impact.description}
          />
        </Reveal>

        {/* Most recent NBE publications */}
        <Reveal>
          <h3 className="mt-12 text-lg font-semibold text-ink-900">
            {t.impact.latestTitle}
          </h3>
          <p className="mt-2 max-w-3xl text-sm leading-relaxed text-ink-600">
            {t.impact.latestNote}
          </p>
        </Reveal>
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {LATEST_NBE.map((stat, i) => (
            <Reveal key={stat.label.en} delay={i * 60}>
              <ImpactStatCard
                stat={stat}
                locale={locale}
                emphasis={i === 0}
                latestLabel={t.impact.latestLabel}
              />
            </Reveal>
          ))}
        </div>

        {/* Programme results, last reported for 2023 */}
        <Reveal>
          <h3 className="mt-16 text-lg font-semibold text-ink-900">
            {t.impact.programmesTitle}
          </h3>
          <p className="mt-2 max-w-3xl text-sm leading-relaxed text-ink-600">
            {t.impact.programmesNote}
          </p>
        </Reveal>
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SOLUTIONS_PROGRAMME_STATS.map((stat, i) => (
            <Reveal key={stat.label.en} delay={i * 60}>
              <ImpactStatCard stat={stat} locale={locale} />
            </Reveal>
          ))}
        </div>

        {/* Egypt-wide indicators, kept visually separate */}
        <Reveal>
          <h3 className="mt-16 text-lg font-semibold text-ink-900">
            {t.impact.nationalTitle}
          </h3>
          <p className="mt-2 max-w-3xl text-sm leading-relaxed text-ink-600">
            {t.impact.nationalNote}
          </p>
        </Reveal>
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {NATIONAL_CONTEXT.map((stat, i) => (
            <Reveal key={stat.label.en} delay={i * 60}>
              <ImpactStatCard stat={stat} locale={locale} />
            </Reveal>
          ))}
        </div>
      </Section>

      {/* -------- 12. Problem → solution → benefit -------- */}
      <Section muted>
        <Reveal>
          <SectionHeader
            eyebrow={t.paths.eyebrow}
            title={t.paths.title}
            description={t.paths.description}
          />
        </Reveal>
        <div className="mt-12">
          <Reveal>
            <SolutionPath
              labels={t.paths.labels}
              items={t.paths.items.map((item) => ({
                ...item,
                icon: item.icon as IconName,
              }))}
            />
          </Reveal>
        </div>
      </Section>

      {/* -------- 13. What you can do -------- */}
      <Section>
        <Reveal>
          <SectionHeader
            eyebrow={t.journey.eyebrow}
            title={t.journey.title}
            description={t.journey.description}
          />
        </Reveal>

        <div className="mt-12">
          <Reveal>
            <StepList
              steps={t.journey.steps.map((step) => ({
                ...step,
                icon: step.icon as IconName,
              }))}
            />
          </Reveal>
        </div>

        <Reveal delay={120}>
          <div className="mt-10">
            <Link
              href={localePath(locale, "/basics")}
              className="group inline-flex items-center justify-center gap-2 rounded-lg bg-brand-700 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-brand-800"
            >
              {t.journey.cta}
              <ArrowDown
                aria-hidden="true"
                className="size-4 -rotate-90 transition-transform duration-300 group-hover:translate-x-1 rtl:rotate-90 rtl:group-hover:-translate-x-1"
              />
            </Link>
          </div>
        </Reveal>
      </Section>

      {/* -------- 14. What's next -------- */}
      <Section muted>
        <Reveal>
          <SectionHeader
            eyebrow={t.future.eyebrow}
            title={t.future.title}
            description={t.future.description}
          />
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {t.future.items.map((item, i) => (
            <Reveal key={item.title} delay={i * 60}>
              <FeatureCard
                icon={ICONS[item.icon as IconName]}
                title={item.title}
              >
                {item.body}
              </FeatureCard>
            </Reveal>
          ))}
        </div>

        <Reveal delay={140}>
          <Card className="mt-8 border-gold-200 bg-gold-100/50">
            <p className="leading-relaxed text-pretty text-ink-800">
              {t.future.note}
            </p>
            <div className="mt-4">
              <SourceBadge source="cbeInclusion2026" />
            </div>
          </Card>
        </Reveal>
      </Section>

      <CTA
        title={t.closing.title}
        description={t.closing.description}
        primary={{
          href: localePath(locale, "/basics"),
          label: t.closing.primary,
        }}
        secondary={{
          href: localePath(locale, "/nbe-impact"),
          label: t.closing.secondary,
        }}
      />
    </>
  );
}
