import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { NextStep } from "@/components/ui/NextStep";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Card, FeatureCard } from "@/components/ui/Card";
import {
  SelectableCards,
  type SelectableItem,
} from "@/components/ui/SelectableCards";
import { SourceBadge } from "@/components/ui/SourceBadge";
import { BankAwarenessCTA } from "@/components/ui/BankAwarenessCTA";
import { ICONS } from "@/components/ui/icons";
import type { SourceId } from "@/lib/sources";
import { getContent, requireLocale } from "@/lib/i18n/dictionary";
import { languageAlternates, localePath } from "@/lib/i18n/config";

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/fintech">): Promise<Metadata> {
  const { locale } = await params;
  const t = getContent(locale, "fintech");
  return {
    title: t.meta.title,
    description: t.meta.description,
    alternates: languageAlternates("/fintech"),
  };
}

export default async function FintechPage({
  params,
}: PageProps<"/[locale]/fintech">) {
  const { locale: raw } = await params;
  const locale = requireLocale(raw);
  const t = getContent(locale, "fintech");

  return (
    <>
      <PageHero
        eyebrow={t.hero.eyebrow}
        title={t.hero.title}
        description={t.hero.description}
      />

      {/* -------- What it is -------- */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
          <Reveal>
            <SectionHeader
              eyebrow={t.what.eyebrow}
              title={t.what.title}
              description={t.what.description}
            />
            <div className="mt-8 space-y-5">
              {t.what.points.map((item) => (
                <div key={item.n} className="flex gap-5">
                  <span className="tabular text-sm font-semibold text-gold-500">
                    {item.n}
                  </span>
                  <div>
                    <h3 className="text-base font-semibold text-ink-900">
                      {item.t}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-ink-600">
                      {item.b}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={120}>
            <Card className="border-brand-200 bg-brand-50">
              <h3 className="text-lg font-semibold text-ink-900">
                {t.what.caveat.title}
              </h3>
              <p className="mt-3 leading-relaxed text-ink-700">
                {t.what.caveat.body1}
              </p>
              <p className="mt-4 leading-relaxed text-ink-700">
                {t.what.caveat.body2}
              </p>
              <div className="mt-5">
                <SourceBadge source="findexApi" />
              </div>
            </Card>
          </Reveal>
        </div>
      </Section>

      {/* -------- Categories -------- */}
      <Section muted>
        <Reveal>
          <SectionHeader
            eyebrow={t.categories.eyebrow}
            title={t.categories.title}
            description={t.categories.description}
          />
        </Reveal>
        <Reveal delay={100} className="mt-12">
          <SelectableCards
            items={t.categories.items as SelectableItem[]}
            ariaLabel={t.categories.label}
            columns={3}
          />
        </Reveal>
      </Section>

      {/* -------- Egyptian examples -------- */}
      <Section>
        <Reveal>
          <SectionHeader
            eyebrow={t.examples.eyebrow}
            title={t.examples.title}
            description={t.examples.description}
          />
        </Reveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {t.examples.items.map((e, i) => (
            <Reveal key={e.name} delay={i * 80}>
              <Card interactive className="h-full">
                <p className="text-xs font-semibold tracking-[0.14em] text-brand-600 uppercase">
                  {e.category}
                </p>
                <h3 className="mt-2 text-xl font-semibold text-ink-900">
                  {e.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-600">
                  {e.body}
                </p>
                <div className="mt-5">
                  <SourceBadge source={e.source as SourceId} />
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* -------- Who benefits -------- */}
      <Section muted>
        <Reveal>
          <SectionHeader
            eyebrow={t.benefits.eyebrow}
            title={t.benefits.title}
            description={t.benefits.description}
            align="center"
          />
        </Reveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {t.benefits.items.map((b, i) => (
            <Reveal key={b.title} delay={i * 80}>
              <FeatureCard
                icon={ICONS[b.icon as keyof typeof ICONS]}
                title={b.title}
              >
                <ul className="space-y-2.5">
                  {b.points.map((p) => (
                    <li key={p} className="flex gap-2.5">
                      <span
                        aria-hidden="true"
                        className="mt-1.5 size-1.5 shrink-0 rounded-full bg-gold-400"
                      />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </FeatureCard>
            </Reveal>
          ))}
        </div>
        <Reveal delay={140}>
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            <SourceBadge source="cbeFintech" />
            <SourceBadge source="cbeMsme" />
            <SourceBadge source="findexApi" />
          </div>
        </Reveal>
      </Section>

      {/* -------- Regulation -------- */}
      <Section>
        <div className="grid gap-10 lg:grid-cols-3">
          <Reveal>
            <SectionHeader
              eyebrow={t.regulation.eyebrow}
              title={t.regulation.title}
            />
          </Reveal>
          <Reveal delay={90} className="lg:col-span-2">
            <div className="grid gap-5 sm:grid-cols-2">
              {t.regulation.items.map((r) => (
                <FeatureCard
                  key={r.title}
                  icon={ICONS[r.icon as keyof typeof ICONS]}
                  title={r.title}
                >
                  {r.body}
                </FeatureCard>
              ))}
            </div>
          </Reveal>
        </div>
      </Section>

      <NextStep
        title={t.cta.title}
        description={t.cta.description}
        primary={{ href: localePath(locale, "/women"), label: t.cta.primary }}
        secondary={{
          href: localePath(locale, "/small-business"),
          label: t.cta.secondary,
        }}
      />

      <BankAwarenessCTA />
    </>
  );
}
