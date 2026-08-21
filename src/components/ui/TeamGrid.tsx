import { Reveal } from "./Reveal";
import { TeamMemberCard, type TeamCardLabels } from "./TeamMemberCard";
import { localizeMember, type TeamMember } from "@/lib/teamMembers";
import type { Locale } from "@/lib/i18n/config";

interface TeamGridProps {
  members: TeamMember[];
  locale: Locale;
  labels: TeamCardLabels;
  ariaLabel: string;
  emptyMessage: string;
  /** Widest row: 3 columns, or 4 on very large screens. */
  columns?: 3 | 4;
  className?: string;
}

/** One card per row on phones, two on tablets, three or four on desktops. */
const COLUMNS = {
  3: "sm:grid-cols-2 lg:grid-cols-3",
  4: "sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
} as const;

const SIZES = {
  3: "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 360px",
  4: "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 270px",
} as const;

/**
 * The team card grid, shared by the Team page and the home page preview.
 * Cards stretch to a common height per row, so uneven names and university
 * names do not stagger the layout.
 */
export function TeamGrid({
  members,
  locale,
  labels,
  ariaLabel,
  emptyMessage,
  columns = 4,
  className = "",
}: TeamGridProps) {
  if (members.length === 0) {
    return (
      <p
        className={`rounded-xl border border-dashed border-ink-200 bg-ink-50 px-6 py-10 text-center text-sm text-ink-500 ${className}`}
      >
        {emptyMessage}
      </p>
    );
  }

  return (
    <ul
      aria-label={ariaLabel}
      className={`grid grid-cols-1 gap-5 ${COLUMNS[columns]} ${className}`}
    >
      {members.map((member, i) => (
        <li key={member.id} className="h-full">
          {/* Stagger restarts each row so later rows do not wait on earlier ones. */}
          <Reveal delay={(i % columns) * 80} className="h-full">
            <TeamMemberCard
              member={localizeMember(member, locale)}
              labels={labels}
              sizes={SIZES[columns]}
            />
          </Reveal>
        </li>
      ))}
    </ul>
  );
}
