import type { SourceId } from "./sources";
import type { Locale } from "./i18n/config";

/**
 * Verified figures used across the site.
 *
 * Rules for this file:
 *  - No estimated, rounded-for-effect or illustrative numbers.
 *  - Every entry carries the source id it came from.
 *  - Findex percentages are the share of adults aged 15+ unless stated.
 *
 * Labels are localised; the numbers themselves are language-independent.
 */

type L = Record<Locale, string>;

export interface Stat {
  value: number;
  /** Rendered suffix, e.g. "%" or "M". */
  unit?: string;
  label: L;
  detail?: L;
  source: SourceId;
  decimals?: number;
}

/* ------------------------------------------------------------------
   Headline indicators — Egypt
   ------------------------------------------------------------------ */

export const EGYPT_HEADLINE: Stat[] = [
  {
    value: 79,
    unit: "%",
    label: {
      en: "Financial inclusion rate",
      ar: "معدل الشمول المالي",
    },
    detail: {
      en: "The share of Egyptians aged 15+ with an active account, using the Central Bank's own definition — up from 77.6% at the end of 2025.",
      ar: "نسبة المصريين من عمر 15 عامًا فأكثر الذين يملكون حسابًا نشطًا، وفق تعريف البنك المركزي نفسه — ارتفاعًا من 77.6% في نهاية 2025.",
    },
    source: "cbeInclusion2026",
  },
  {
    value: 56.4,
    unit: "M",
    label: {
      en: "Citizens with active accounts",
      ar: "مواطنًا يملكون حسابات نشطة (بالمليون)",
    },
    detail: {
      en: "Out of 71.4 million Egyptians aged 15 and up. That account could be at a bank, at Egypt Post, a mobile wallet, or a prepaid card.",
      ar: "من إجمالي 71.4 مليون مصري من عمر 15 عامًا فأكثر. وقد يكون هذا الحساب في بنك، أو في البريد المصري، أو محفظة إلكترونية، أو بطاقة مسبقة الدفع.",
    },
    source: "cbeInclusion2026",
    decimals: 1,
  },
  {
    value: 43.1,
    unit: "%",
    label: {
      en: "Account ownership (World Bank)",
      ar: "امتلاك الحسابات (البنك الدولي)",
    },
    detail: {
      en: "The World Bank's own measure, based on a survey — it counts anyone who told researchers they hold a bank account or a mobile money account.",
      ar: "مقياس البنك الدولي القائم على المسح — يحصي كل من أخبر الباحثين بأنه يملك حسابًا بنكيًا أو محفظة هاتف محمول.",
    },
    source: "findex2025",
    decimals: 1,
  },
  {
    value: 229,
    unit: "%",
    label: {
      en: "Growth in inclusion since 2016",
      ar: "نمو الشمول المالي منذ 2016",
    },
    detail: {
      en: "How much ownership and use of financial services grew between 2016 and June 2026, according to the CBE's Financial Inclusion Data Hub.",
      ar: "مقدار نمو امتلاك الخدمات المالية واستخدامها بين 2016 ويونيو 2026، وفق منصة بيانات الشمول المالي التابعة للبنك المركزي.",
    },
    source: "cbeInclusion2026",
  },
];

/** Account ownership over time, World Bank Global Findex survey waves. */
export const ACCOUNT_OWNERSHIP_SERIES: {
  year: number;
  egypt: number;
  kenya: number;
}[] = [
  { year: 2011, egypt: 9.7, kenya: 42.3 },
  { year: 2014, egypt: 14.1, kenya: 74.7 },
  { year: 2017, egypt: 32.8, kenya: 81.6 },
  { year: 2021, egypt: 27.4, kenya: 79.2 },
  { year: 2024, egypt: 43.1, kenya: 90.1 },
];

/** Who is included, and who is left out — Egypt, Findex 2024. */
export const EGYPT_GAPS: {
  group: L;
  a: { label: L; value: number };
  b: { label: L; value: number };
  insight: L;
}[] = [
  {
    group: { en: "Income", ar: "الدخل" },
    a: {
      label: { en: "Poorest 40%", ar: "الأفقر 40%" },
      value: 33.1,
    },
    b: {
      label: { en: "Richest 60%", ar: "الأغنى 60%" },
      value: 49.8,
    },
    insight: {
      en: "This is the widest gap in the Egyptian data — 16.7 percentage points between the poorest 40% and the richest 60%.",
      ar: "هذه أوسع فجوة في البيانات المصرية — 16.7 نقطة مئوية بين الأفقر 40% والأغنى 60%.",
    },
  },
  {
    group: { en: "Education", ar: "التعليم" },
    a: {
      label: {
        en: "Primary education or less",
        ar: "تعليم ابتدائي أو أقل",
      },
      value: 38.5,
    },
    b: {
      label: {
        en: "Secondary education or more",
        ar: "تعليم ثانوي أو أعلى",
      },
      value: 48.3,
    },
    insight: {
      en: "People with a secondary education or more are almost 10 percentage points more likely to have an account.",
      ar: "من أنهوا تعليمهم الثانوي أو أعلى أقرب إلى امتلاك حساب بفارق يقارب 10 نقاط مئوية.",
    },
  },
  {
    group: { en: "Location", ar: "المكان" },
    a: { label: { en: "Rural", ar: "الريف" }, value: 39.3 },
    b: { label: { en: "Urban", ar: "الحضر" }, value: 45.3 },
    insight: {
      en: "A 6-point gap between rural and urban areas — and most Egyptians live in rural areas.",
      ar: "فجوة 6 نقاط بين الريف والحضر، في بلد يعيش معظم سكانه في الريف.",
    },
  },
  {
    group: { en: "Gender", ar: "النوع" },
    a: { label: { en: "Women", ar: "النساء" }, value: 40.2 },
    b: { label: { en: "Men", ar: "الرجال" }, value: 46.0 },
    insight: {
      en: "A 5.7-point gap between men and women — narrower than the rest of the MENA region, but still there.",
      ar: "فجوة 5.7 نقطة بين الرجال والنساء — أضيق من متوسط الشرق الأوسط وشمال أفريقيا، لكنها موجودة.",
    },
  },
];

/** Digital readiness versus digital usage — the core Egyptian paradox. */
export const EGYPT_DIGITAL_FUNNEL: Stat[] = [
  {
    value: 84.6,
    unit: "%",
    label: { en: "Own a mobile phone", ar: "يملكون هاتفًا محمولًا" },
    source: "findexApi",
    decimals: 1,
  },
  {
    value: 55.7,
    unit: "%",
    label: {
      en: "Main phone is a smartphone",
      ar: "هاتفهم الأساسي هاتف ذكي",
    },
    source: "findexApi",
    decimals: 1,
  },
  {
    value: 43.1,
    unit: "%",
    label: { en: "Have an account", ar: "يملكون حسابًا" },
    source: "findexApi",
    decimals: 1,
  },
  {
    value: 28.2,
    unit: "%",
    label: {
      en: "Have a digitally enabled account",
      ar: "يملكون حسابًا مفعَّلًا رقميًا",
    },
    source: "findexApi",
    decimals: 1,
  },
  {
    value: 18.5,
    unit: "%",
    label: {
      en: "Pay with a card or phone",
      ar: "يدفعون ببطاقة أو هاتف",
    },
    source: "findexApi",
    decimals: 1,
  },
];

/** How Egyptians use — or do not use — formal finance. */
export const EGYPT_USAGE: { value: number; label: L; tone: "good" | "bad" | "mixed" }[] =
  [
    {
      value: 13.8,
      label: {
        en: "Saved at a financial institution or mobile money account",
        ar: "ادّخروا لدى مؤسسة مالية أو محفظة إلكترونية",
      },
      tone: "good",
    },
    {
      value: 10.4,
      label: {
        en: "Borrowed formally from a bank or mobile money provider",
        ar: "اقترضوا رسميًا من بنك أو مقدم خدمة محفظة",
      },
      tone: "good",
    },
    {
      value: 38.4,
      label: {
        en: "Borrowed from family or friends",
        ar: "اقترضوا من الأهل أو الأصدقاء",
      },
      tone: "mixed",
    },
    {
      value: 48.4,
      label: {
        en: "Pay utility bills in cash only",
        ar: "يسددون فواتير المرافق نقدًا فقط",
      },
      tone: "bad",
    },
    {
      value: 26.5,
      label: {
        en: "Receive wages in cash only",
        ar: "يتقاضون أجورهم نقدًا فقط",
      },
      tone: "bad",
    },
    {
      value: 27.6,
      label: {
        en: "Sent or received domestic remittances",
        ar: "أرسلوا أو تلقوا تحويلات محلية",
      },
      tone: "good",
    },
  ];

/** Self-reported barriers among Egyptian adults who have no account. */
export const EGYPT_BARRIERS: { label: L; value: number }[] = [
  {
    label: {
      en: "Not enough money to use an account",
      ar: "لا يوجد مال كافٍ لاستخدام حساب",
    },
    value: 90.1,
  },
  {
    label: {
      en: "Financial services are too expensive",
      ar: "الخدمات المالية مرتفعة التكلفة",
    },
    value: 20.4,
  },
  {
    label: {
      en: "Someone else in the family already has one",
      ar: "يوجد بالفعل حساب لأحد أفراد الأسرة",
    },
    value: 16.9,
  },
];

/* ------------------------------------------------------------------
   Women
   ------------------------------------------------------------------ */

export const WOMEN_STATS: Stat[] = [
  {
    value: 72.5,
    unit: "%",
    label: {
      en: "Women's financial inclusion rate in Egypt",
      ar: "معدل الشمول المالي للمرأة في مصر",
    },
    detail: {
      en: "As of June 2026, up from 19.1% in 2016 — that's a 327% increase in the number of women included, on the CBE's own measure.",
      ar: "حتى يونيو 2026، ارتفاعًا من 19.1% في 2016 — أي بزيادة 327% في عدد النساء المشمولات وفق مقياس البنك المركزي.",
    },
    source: "cbeInclusion2026",
    decimals: 1,
  },
  {
    value: 40.2,
    unit: "%",
    label: {
      en: "Egyptian women with an account",
      ar: "نساء مصريات يملكن حسابًا",
    },
    detail: {
      en: "On the World Bank's survey measure — against 46.0% of Egyptian men.",
      ar: "وفق مسح البنك الدولي، مقابل 46.0% من الرجال المصريين.",
    },
    source: "findexApi",
    decimals: 1,
  },
  {
    value: 5.7,
    unit: "pp",
    label: {
      en: "Gender gap in account ownership",
      ar: "الفجوة بين الجنسين في امتلاك الحسابات",
    },
    detail: {
      en: "The percentage-point gap between Egyptian men and women.",
      ar: "الفارق بالنقاط المئوية بين الرجال والنساء في مصر.",
    },
    source: "findexApi",
    decimals: 1,
  },
  {
    value: 77,
    unit: "%",
    label: {
      en: "Women worldwide with an account",
      ar: "نساء حول العالم يملكن حسابًا",
    },
    detail: {
      en: "The global gender gap has narrowed to 4 percentage points.",
      ar: "تقلصت الفجوة العالمية بين الجنسين إلى 4 نقاط مئوية.",
    },
    source: "findex2025",
  },
];

/**
 * Account ownership among Egyptian women, Findex survey waves.
 * The 2011 wave has no published female figure for Egypt, so the series
 * starts at 2014.
 */
export const WOMEN_TREND: { year: number; value: number }[] = [
  { year: 2014, value: 9.3 },
  { year: 2017, value: 27.0 },
  { year: 2021, value: 24.2 },
  { year: 2024, value: 40.2 },
];

/* ------------------------------------------------------------------
   Small business
   ------------------------------------------------------------------ */

export const SME_STATS: Stat[] = [
  {
    value: 43,
    unit: "%",
    label: {
      en: "Of Egypt's GDP comes from MSMEs",
      ar: "من الناتج المحلي المصري مصدره المشروعات الصغيرة",
    },
    source: "msmeda",
  },
  {
    value: 90,
    unit: "%",
    label: {
      en: "Of Egypt's private sector is MSMEs",
      ar: "من القطاع الخاص المصري مشروعات صغيرة",
    },
    source: "msmeda",
  },
  {
    value: 25,
    unit: "%",
    label: {
      en: "Of bank lending portfolios directed to MSMEs",
      ar: "من محافظ إقراض البنوك موجهة للمشروعات الصغيرة",
    },
    detail: {
      en: "A target the Central Bank of Egypt set for banks, with at least 10% of it earmarked for small enterprises specifically.",
      ar: "مستهدف حدده البنك المركزي المصري للبنوك، بما لا يقل عن 10% منه مخصص للمشروعات الصغيرة تحديدًا.",
    },
    source: "cbeMsme",
  },
  {
    value: 3.6,
    unit: "%",
    label: {
      en: "Of adults borrowed to start or run a business",
      ar: "من البالغين اقترضوا لبدء مشروع أو تشغيله",
    },
    detail: {
      en: "Kenya's Global Findex figure sits close by, at 7.5% — see the Egypt vs Kenya comparison.",
      ar: "رقم كينيا في المؤشر العالمي للشمول المالي قريب من هذا، عند 7.5% — راجع المقارنة بين مصر وكينيا.",
    },
    source: "findexApi",
    decimals: 1,
  },
];

/* ------------------------------------------------------------------
   Egypt vs Kenya
   ------------------------------------------------------------------ */

export interface ComparisonRow {
  metric: L;
  egypt: number;
  kenya: number;
  unit: string;
  note?: L;
}

export const EGYPT_KENYA_COMPARISON: ComparisonRow[] = [
  {
    metric: { en: "Account ownership", ar: "امتلاك الحسابات" },
    egypt: 43.1,
    kenya: 90.1,
    unit: "%",
  },
  {
    metric: { en: "Rural account ownership", ar: "امتلاك الحسابات في الريف" },
    egypt: 39.3,
    kenya: 88.7,
    unit: "%",
    note: {
      en: "Kenya's rural rate sits only 6.3 points behind its urban rate (95.1%) — a far narrower gap than Egypt's.",
      ar: "لا يقل معدل الريف في كينيا عن معدل الحضر (95.1%) سوى بفارق 6.3 نقطة — فجوة أضيق كثيرًا من فجوة مصر.",
    },
  },
  {
    metric: { en: "Women with an account", ar: "النساء اللاتي يملكن حسابًا" },
    egypt: 40.2,
    kenya: 86.5,
    unit: "%",
    note: {
      en: "Kenya's gender gap has narrowed to 7.4 points, against 5.7 points in Egypt — narrow on both sides, wide apart overall.",
      ar: "ضاقت الفجوة بين الجنسين في كينيا إلى 7.4 نقطة، مقابل 5.7 نقطة في مصر — ضيقة في البلدين، لكن الفارق الكلي بينهما واسع.",
    },
  },
  {
    metric: { en: "Mobile money account", ar: "حساب محفظة الهاتف المحمول" },
    egypt: 15.6,
    kenya: 87.5,
    unit: "%",
    note: {
      en: "In Kenya, mobile money is not a niche channel — it is nearly the whole of account ownership.",
      ar: "في كينيا لا تمثل محفظة الهاتف قناة هامشية — بل هي تكاد تكون كل امتلاك الحسابات.",
    },
  },
  {
    metric: { en: "Digitally enabled account", ar: "حساب مفعَّل رقميًا" },
    egypt: 28.2,
    kenya: 89.4,
    unit: "%",
  },
  {
    metric: { en: "Pay with a card or phone", ar: "الدفع ببطاقة أو هاتف" },
    egypt: 18.5,
    kenya: 28.3,
    unit: "%",
  },
  {
    metric: {
      en: "Saved money in the past year",
      ar: "الادخار خلال العام الماضي",
    },
    egypt: 23.0,
    kenya: 70.2,
    unit: "%",
  },
  {
    metric: { en: "Borrowed money in the past year", ar: "الاقتراض خلال العام الماضي" },
    egypt: 56.1,
    kenya: 81.9,
    unit: "%",
  },
  {
    metric: { en: "Own a mobile phone", ar: "امتلاك هاتف محمول" },
    egypt: 84.6,
    kenya: 92.7,
    unit: "%",
    note: {
      en: "Kenya leads here too — the gap between the two countries is narrowest on devices, and widest on accounts.",
      ar: "تتقدم كينيا هنا أيضًا — الفجوة بين البلدين أضيق ما تكون في الأجهزة، وأوسع ما تكون في الحسابات.",
    },
  },
  {
    metric: {
      en: "Smartphone ownership",
      ar: "امتلاك هاتف ذكي",
    },
    egypt: 55.7,
    kenya: 72.6,
    unit: "%",
    note: {
      en: "Kenya's figure is from the national telecoms regulator, not Global Findex, so treat it as indicative rather than strictly like-for-like.",
      ar: "رقم كينيا صادر عن الهيئة الوطنية لتنظيم الاتصالات وليس من المؤشر العالمي للشمول المالي، لذا فهو إرشادي وليس متكافئًا تمامًا مع رقم مصر.",
    },
  },
];

/* ------------------------------------------------------------------
   Context figures
   ------------------------------------------------------------------ */

export const CONTEXT = {
  ruralShare: {
    value: 56.7,
    label: {
      en: "of Egyptians live in rural areas",
      ar: "من المصريين يعيشون في الريف",
    },
    source: "wdiRural" as SourceId,
  },
  branchDensity: {
    value: 6.56,
    label: {
      en: "commercial bank branches per 100,000 adults in Egypt",
      ar: "فرعًا مصرفيًا تجاريًا لكل 100 ألف بالغ في مصر",
    },
    source: "imfFas" as SourceId,
  },
  informalGdp: {
    value: 40,
    label: {
      en: "of Egyptian GDP is estimated to sit in the informal economy",
      ar: "من الناتج المحلي المصري يُقدَّر وقوعه في الاقتصاد غير الرسمي",
    },
    source: "pwcShadow" as SourceId,
  },
  globalAccount: {
    value: 79,
    label: {
      en: "of adults worldwide now hold an account",
      ar: "من البالغين حول العالم يملكون حسابًا",
    },
    source: "findex2025" as SourceId,
  },
  unbanked: {
    value: 1.3,
    label: {
      en: "billion adults worldwide remain unbanked",
      ar: "مليار بالغ حول العالم ما زالوا خارج النظام المصرفي",
    },
    source: "findex2025" as SourceId,
  },
  menaAccount: {
    value: 53,
    label: {
      en: "account ownership across the Middle East and North Africa",
      ar: "نسبة امتلاك الحسابات في الشرق الأوسط وشمال أفريقيا",
    },
    source: "findex2025" as SourceId,
  },
} as const;
