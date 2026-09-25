import type { CommonDict } from "./i18n/content/common";

export type NavGroupKey = keyof CommonDict["nav"]["groups"];
export type NavItemKey = keyof CommonDict["items"];

export interface NavItem {
  /** Key into `common.items`, which supplies the label and blurb. */
  key: NavItemKey;
  /** Route without a locale prefix. */
  href: string;
  group: NavGroupKey;
}

export const NAV_ITEMS: NavItem[] = [
  { key: "basics", href: "/basics", group: "start" },
  { key: "solutions", href: "/solutions", group: "start" },
  { key: "understanding", href: "/understanding", group: "foundations" },
  { key: "banking", href: "/banking", group: "foundations" },
  { key: "egypt", href: "/egypt", group: "egypt" },
  { key: "ruralUrban", href: "/rural-urban", group: "egypt" },
  { key: "challenges", href: "/challenges", group: "egypt" },
  { key: "digitalFinance", href: "/digital-finance", group: "technology" },
  { key: "fintech", href: "/fintech", group: "technology" },
  { key: "women", href: "/women", group: "people" },
  { key: "smallBusiness", href: "/small-business", group: "people" },
  { key: "egyptVsKenya", href: "/egypt-vs-kenya", group: "outlook" },
  { key: "future", href: "/future", group: "outlook" },
  { key: "sources", href: "/sources", group: "outlook" },
  { key: "videos", href: "/videos", group: "learn" },
  { key: "nbeImpact", href: "/nbe-impact", group: "learn" },
  { key: "team", href: "/team", group: "about" },
];

export const NAV_GROUPS: NavGroupKey[] = [
  "start",
  "foundations",
  "egypt",
  "technology",
  "people",
  "outlook",
  "learn",
  "about",
];

/**
 * Links kept inline in the header.
 *
 * The header row is capped at the page container width (max-w-6xl), which
 * leaves room for about six short links beside the logo and controls in either
 * language. Adding more pushes the Sections button out of the row, so keep
 * this list short. Everything remains one tap away in the Sections panel at
 * every width, and the logo already links home.
 */
export const PRIMARY_NAV: {
  href: string;
  short: keyof CommonDict["nav"]["short"];
  /** Held back until xl, where the header has room for one more link. */
  wideOnly?: boolean;
}[] = [
  { href: "/basics", short: "basics" },
  { href: "/solutions", short: "solutions" },
  { href: "/egypt", short: "egypt" },
  { href: "/digital-finance", short: "digitalFinance" },
  { href: "/videos", short: "videos" },
  { href: "/nbe-impact", short: "nbeImpact", wideOnly: true },
];
