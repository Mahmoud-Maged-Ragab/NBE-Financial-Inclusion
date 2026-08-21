import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { TeamGrid } from "@/components/ui/TeamGrid";
import { AboutProject } from "@/components/ui/AboutProject";
import { BankAwarenessCTA } from "@/components/ui/BankAwarenessCTA";
import { TEAM_MEMBERS } from "@/lib/teamMembers";
import { getContent, requireLocale } from "@/lib/i18n/dictionary";
import { languageAlternates } from "@/lib/i18n/config";

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/team">): Promise<Metadata> {
  const { locale } = await params;
  const t = getContent(locale, "team");
  return {
    title: t.meta.title,
    description: t.meta.description,
    alternates: languageAlternates("/team"),
  };
}

export default async function TeamPage({ params }: PageProps<"/[locale]/team">) {
  const { locale: raw } = await params;
  const locale = requireLocale(raw);
  const t = getContent(locale, "team");

  return (
    <>
      <PageHero
        eyebrow={t.hero.eyebrow}
        title={t.hero.title}
        description={t.hero.description}
      />

      <Section muted>
        <Reveal>
          <SectionHeader
            eyebrow={t.grid.eyebrow}
            title={t.grid.title}
            description={t.grid.description}
          />
        </Reveal>

        <TeamGrid
          members={TEAM_MEMBERS}
          locale={locale}
          columns={4}
          labels={{
            university: t.grid.university,
            major: t.grid.major,
          }}
          ariaLabel={t.grid.ariaLabel}
          emptyMessage={t.grid.empty}
          className="mt-12"
        />

        <Reveal>
          <p className="mt-8 max-w-3xl text-sm leading-relaxed text-ink-500">
            {t.note}
          </p>
        </Reveal>
      </Section>

      <AboutProject />

      <BankAwarenessCTA />
    </>
  );
}
