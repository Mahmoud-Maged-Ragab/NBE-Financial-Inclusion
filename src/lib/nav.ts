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
];

export const NAV_GROUPS: NavGroupKey[] = [
  "foundations",
  "egypt",
  "technology",
  "people",
  "outlook",
];

/** Links kept inline in the header on large screens. */
export const PRIMARY_NAV: {
  href: string;
  short: keyof CommonDict["nav"]["short"];
}[] = [
  { href: "/understanding", short: "understanding" },
  { href: "/banking", short: "banking" },
  { href: "/egypt", short: "egypt" },
  { href: "/digital-finance", short: "digitalFinance" },
];
