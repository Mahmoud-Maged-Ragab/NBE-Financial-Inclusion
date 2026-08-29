import type { Locale } from "./i18n/config";
export const MahmoudImg = "/team/MahmoudImg.jpeg";
export const BadrImg = "/team/BadrImg.jpeg";
export const OlaImg = "/team/OlaImg.jpeg";
export const SiefeImg = "/team/SiefeImg.jpeg";
/**
 * Neutral avatar shipped in `/public/team`. Any member still pointing at it is
 * showing placeholder art rather than a real photo.
 */
export const PLACEHOLDER_IMAGE = "/team/placeholder.svg";

/** How many members the home page preview shows. */
export const TEAM_PREVIEW_COUNT = 3;

export interface TeamMember {
  /** Stable key for the React list — any short unique string. */
  id: string;
  /** Full name, English. */
  name: string;
  /** Full name, Arabic. Leave empty to reuse the English name. */
  nameAr: string;
  university: string;
  universityAr: string;
  /** Major or programme of study. */
  major: string;
  majorAr: string;
  /** Role on this project. */
  /** Path under `/public`, e.g. `/team/member-1.jpg`. */
  image: string;
}

/* ============================================================
   REPLACE THE PLACEHOLDER INFORMATION BELOW WITH THE ACTUAL
   TEAM MEMBERS.
   ============================================================

   Nothing else needs to change. The /team page, the home page
   preview, English, Arabic and RTL all follow this array.

   Adding a photo
   --------------
   1. Drop the file into  public/team/   e.g. public/team/member-1.jpg
   2. Set  image: "/team/member-1.jpg"   on that member below.
   Leave `image` as PLACEHOLDER_IMAGE (or "") and a neutral avatar is
   shown instead — a missing or misspelled path falls back the same way.

   Arabic fields
   -------------
   Optional. Leave one empty ("") and the English value is used on the
   Arabic pages too.

   Adding or removing members
   --------------------------
   Add or delete entries freely — the grid reflows on its own. Give each
   one a unique `id`.
   ============================================================ */

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "member-1",
    name: "Mahmoud Maged Mahmoud Ragab",
    nameAr: "محمود ماجد محمود رجب",
    university: "Arab Academy For Science And Technology (AAST) ",
    universityAr: "الاكاديمية البحرية للعلوم و التكنولوجيا",
    major: "BIS",
    majorAr: "BIS",
    image: MahmoudImg, // ← e.g. "/team/member-1.jpg"
  },
  {
    id: "member-2",
    name: "Badr Mohammed Badr",
    nameAr: "بدر محمد بدر",
    university: "Misr University for Science & Technology (MUST)",
    universityAr: "جامعة مصر للعلوم والتكنولوجيا",
    major: "Finance",
    majorAr: "Finance",
    image: BadrImg, // ← e.g. "/team/member-2.jpg"
  },
  {
    id: "member-3",
    name: "Ola Elgohary",
    nameAr: " علا الجهاري",
    university: "Cairo University",
    universityAr: "  الجامعة القاهرة",
    major: "Accounting",
    majorAr: "محاسبة",
    image: OlaImg, // ← e.g. "/team/member-3.jpg"
  },
  {
    id: "member-4",
    name: "Siefe Farage",
    nameAr: "سيف فاراج",
    university: "Ain Shams University",
    universityAr: "جامعة عين شمس",
    major: "Economics",
    majorAr: "الاقتصاد",
    image: "", // ← e.g. "/team/member-4.jpg"
  },
];

/* ============================================================
   Nothing below needs editing to change the team.
   ============================================================ */

/** One member with the fields for the current language already picked. */
export interface LocalizedTeamMember {
  id: string;
  name: string;
  university: string;
  major: string;
  image: string;
}

/** Falls back to the English value when the Arabic one is left empty. */
function pick(en: string, ar: string, locale: Locale): string {
  return locale === "ar" && ar.trim() !== "" ? ar : en;
}

export function localizeMember(
  member: TeamMember,
  locale: Locale,
): LocalizedTeamMember {
  return {
    id: member.id,
    name: pick(member.name, member.nameAr, locale),
    university: pick(member.university, member.universityAr, locale),
    major: pick(member.major, member.majorAr, locale),
    image: member.image,
  };
}
