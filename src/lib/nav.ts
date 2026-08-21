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
  { key: "understanding", href: "/understanding", group: "foundations" },
  { key: "banking", href: "/banking", group: "foundations" },
  { key: "egypt", href: "/egypt", group: "egypt" },
  { key: "ruralUrban", href: "/rural-urban", group: "egypt" },
  { key: "challenges", href: "/challenges", group: "egypt" },
  { key: "digitalFinance", href: "/digital-finance", group: "technology" },
  { key: "fintech", href: "/fintech", group: "technology" },
  { key: "women", href: "/women", group: "people" },
  { key: "smallBusiness", href: "/small-business", group: "people" },
  { key: "egyptVsIndia", href: "/egypt-vs-india", group: "outlook" },
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
 * The full set only fits once there is room for it, so the lower-priority
 * links are held back until `xl`. Everything remains one tap away in the
 * Sections panel at every width.
 */
export const PRIMARY_NAV: {
  href: string;
  short: keyof CommonDict["nav"]["short"];
  /** Held back until xl, where the header has room for all seven. */
  wideOnly?: boolean;
}[] = [
  { href: "/", short: "home", wideOnly: true },
  { href: "/basics", short: "basics" },
  { href: "/understanding", short: "understanding", wideOnly: true },
  { href: "/egypt", short: "egypt" },
  { href: "/digital-finance", short: "digitalFinance" },
  { href: "/videos", short: "videos" },
  { href: "/nbe-impact", short: "nbeImpact", wideOnly: true },
  { href: "/team", short: "team", wideOnly: true },
];
