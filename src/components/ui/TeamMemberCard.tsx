import { Building2, GraduationCap } from "lucide-react";
import { TeamAvatar } from "./TeamAvatar";
import type { LocalizedTeamMember } from "@/lib/teamMembers";

export interface TeamCardLabels {
  university: string;
  major: string;
}

interface TeamMemberCardProps {
  member: LocalizedTeamMember;
  labels: TeamCardLabels;
  /** Passed through to the portrait for responsive image sizing. */
  sizes: string;
}

/**
 * One contributor: portrait, name, university and programme of study.
 *
 * The body is a column with the programme pinned to the bottom, so cards in a
 * row line up regardless of how long the names above them run.
 */
export function TeamMemberCard({ member, labels, sizes }: TeamMemberCardProps) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-ink-200 bg-white transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-[0_12px_32px_-12px_rgba(15,70,52,0.25)]">
      <div className="relative aspect-4/5 w-full overflow-hidden bg-ink-100">
        <TeamAvatar src={member.image} alt={member.name} sizes={sizes} />
        {/* Gold rule that draws itself in on hover. */}
        <span
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-gold-400 transition-transform duration-500 ease-out group-hover:scale-x-100 rtl:origin-right"
        />
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-base font-semibold text-balance text-ink-900">
          {member.name}
        </h3>

        <p className="mt-2.5 flex items-start gap-2 text-sm leading-relaxed text-ink-600">
          <Building2
            aria-hidden="true"
            className="mt-0.5 size-3.5 shrink-0 text-ink-400"
          />
          <span>
            <span className="sr-only">{labels.university}: </span>
            {member.university}
          </span>
        </p>

        <div className="mt-auto border-t border-ink-100 pt-4">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-50 px-3 py-1 text-xs font-medium text-brand-700 transition-colors duration-300 group-hover:bg-brand-700 group-hover:text-white">
            <GraduationCap aria-hidden="true" className="size-3.5 shrink-0" />
            <span className="sr-only">{labels.major}: </span>
            {member.major}
          </span>
        </div>
      </div>
    </article>
  );
}
