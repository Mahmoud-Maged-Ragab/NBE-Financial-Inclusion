import type { Stat } from "./data";
import type { SourceId } from "./sources";
import type { Locale } from "./i18n/config";

/**
 * NBE's contribution to financial inclusion, as published by NBE itself.
 *
 * Rules for this file — the same rules the rest of the site follows:
 *  - Nothing here is estimated, rounded for effect, or inferred.
 *  - Every figure is reproduced from a published NBE document and carries
 *    the source id and the year the figure describes.
 *  - NBE's own programme results are kept strictly separate from Egypt's
 *    national indicators. The national rates below are Central Bank of
 *    Egypt indicators that NBE reprints in its Economic Bulletin; they
 *    describe the whole country and are NOT NBE achievements.
 *
 * Data freshness, checked August 2026:
 *  - National indicators use the CBE's June 2026 announcement — the newest
 *    published anywhere.
 *  - NBE's own balance sheet and awards use NBE's March 2026 bulletin
 *    (position at September 2025; awards for 2025).
 *  - NBE's programme-level results are still 2023. That is the most recent
 *    year NBE has published this level of detail for; no 2024 or 2025 ESG or
 *    annual report was found. Those figures are labelled 2023 rather than
 *    presented as current.
 *
 * Primary sources:
 *  - 2023 NBE Progress ESG Report                  (`nbeEsg2023`)
 *  - NBE Annual Report 2023                        (`nbeAnnual2023`)
 *  - NBE Economic Bulletin, June 2025              (`nbeBulletin2025`)
 *  - NBE Economic Bulletin, March 2026             (`nbeBulletin2026`)
 *  - CBE financial inclusion indicators, June 2026 (`cbeInclusion2026`)
 */

type L = Record<Locale, string>;

/** A figure plus the year it describes, so nothing is read as "current". */
export interface DatedStat extends Stat {
  /** Year or period the figure refers to, shown beside the number. */
  year: string;
  /**
   * Taken from one of the 2026 bulletins or the 2026 CBE release, so the UI
   * marks it as the latest available. The year field still states the exact
   * period the figure describes, which is often earlier than 2026.
   */
  latest?: boolean;
}

/* ------------------------------------------------------------------
   Financial inclusion programmes — 2023
   ------------------------------------------------------------------ */

export const NBE_INCLUSION_STATS: DatedStat[] = [
  {
    value: 15000,
    unit: "+",
    year: "2023",
    label: {
      en: "Individuals reached",
      ar: "فرد تم الوصول إليهم",
    },
    detail: {
      en: "Reached through financial literacy sessions and community outreach under the Haya Karima initiative.",
      ar: "تم الوصول إليهم من خلال جلسات التثقيف المالي والتوعية المجتمعية ضمن مبادرة حياة كريمة.",
    },
    source: "nbeEsg2023",
  },
  {
    value: 163,
    year: "2023",
    label: {
      en: "Villages reached",
      ar: "قرية تم الوصول إليها",
    },
    detail: {
      en: "Villages covered by financial literacy sessions under the Haya Karima initiative.",
      ar: "قرى شملتها جلسات التثقيف المالي ضمن مبادرة حياة كريمة.",
    },
    source: "nbeEsg2023",
  },
  {
    value: 4000,
    year: "2023",
    label: {
      en: "University students reached",
      ar: "طالب جامعي تم الوصول إليهم",
    },
    detail: {
      en: "Students who attended financial literacy sessions covering saving, budgeting and available financial products.",
      ar: "طلاب حضروا جلسات تثقيف مالي تناولت الادخار وإعداد الميزانية والمنتجات المالية المتاحة.",
    },
    source: "nbeEsg2023",
  },
  {
    value: 4,
    year: "2023",
    label: {
      en: "Universities involved",
      ar: "جامعات مشاركة",
    },
    detail: {
      en: "Cairo, Helwan, Beni Suef and Menoufiya universities.",
      ar: "جامعات القاهرة وحلوان وبني سويف والمنوفية.",
    },
    source: "nbeEsg2023",
  },
  {
    value: 720000,
    year: "2023",
    label: {
      en: "Previously unbanked customers integrated",
      ar: "عميل غير متعامل مع البنوك سابقًا تم دمجهم",
    },
    detail: {
      en: "Brought into the formal financial sector when NBE rolled out Meeza prepaid unified cards.",
      ar: "دخلوا القطاع المالي الرسمي بعدما طرح البنك بطاقات ميزة الموحدة مسبقة الدفع.",
    },
    source: "nbeEsg2023",
  },
  {
    value: 10000,
    year: "2023",
    label: {
      en: "Citizens reached with the World Food Programme",
      ar: "مواطن تم الوصول إليهم مع برنامج الأغذية العالمي",
    },
    detail: {
      en: "Awareness sessions across 35 villages in 5 governorates, reported in NBE's Annual Report 2023.",
      ar: "جلسات توعية في 35 قرية بـ5 محافظات، وفق التقرير السنوي للبنك لعام 2023.",
    },
    source: "nbeAnnual2023",
  },
  {
    value: 12000,
    year: "2023",
    label: {
      en: "Students at universities and educational institutes",
      ar: "طالب في الجامعات والمعاهد التعليمية",
    },
    detail: {
      en: "A wider count than the 4,000-student university literacy programme, including the Sabek Helmk presidential initiative.",
      ar: "عدد أوسع من برنامج التثقيف الجامعي البالغ 4,000 طالب، ويشمل المبادرة الرئاسية «سابق حلمك».",
    },
    source: "nbeAnnual2023",
  },
  {
    value: 42000,
    year: "2023",
    label: {
      en: "Individuals engaged on observance days",
      ar: "فرد تم التواصل معهم في المناسبات العالمية",
    },
    detail: {
      en: "Reached through financial education events built around global observance days.",
      ar: "تم التواصل معهم عبر فعاليات تثقيف مالي أُقيمت بمناسبة أيام عالمية.",
    },
    source: "nbeEsg2023",
  },
];

/* ------------------------------------------------------------------
   Reach and network — as at 31 December 2023
   ------------------------------------------------------------------ */

export const NBE_SCALE: DatedStat[] = [
  {
    value: 657,
    year: "2023",
    label: { en: "Branches nationwide", ar: "فرعًا على مستوى الجمهورية" },
    detail: {
      en: "Roughly 47% in Greater Cairo and 20% in Upper Egypt, with the rest across Alexandria, the Delta, Canal and Sharqia.",
      ar: "نحو 47% في القاهرة الكبرى و20% في صعيد مصر، والباقي موزع على الإسكندرية والدلتا والقناة والشرقية.",
    },
    source: "nbeEsg2023",
  },
  {
    value: 6797,
    year: "2023",
    label: { en: "ATMs", ar: "ماكينة صراف آلي" },
    detail: {
      en: "Including 1,238 designed for visually impaired customers and 34 accessible to wheelchair users.",
      ar: "منها 1,238 مصممة لخدمة ضعاف البصر و34 مهيأة لمستخدمي الكراسي المتحركة.",
    },
    source: "nbeEsg2023",
  },
  {
    value: 20,
    unit: "M+",
    year: "2023",
    label: { en: "Customers served", ar: "مليون عميل" },
    detail: {
      en: "NBE reports a market share of 44% of Egypt's banking sector.",
      ar: "يفيد البنك بأن حصته السوقية تبلغ 44% من القطاع المصرفي المصري.",
    },
    source: "nbeEsg2023",
  },
  {
    value: 6,
    year: "2023",
    label: { en: "Bus branches", ar: "فرع متنقل (أتوبيس)" },
    detail: {
      en: "Mobile branches alongside 38 electronic service branches and 42 solar-powered branches.",
      ar: "فروع متنقلة إلى جانب 38 فرع خدمة إلكترونية و42 فرعًا يعمل بالطاقة الشمسية.",
    },
    source: "nbeEsg2023",
  },
];

/* ------------------------------------------------------------------
   Who NBE's customer base reaches — 2023
   ------------------------------------------------------------------ */

export const NBE_INCLUSIVE_BANKING: DatedStat[] = [
  {
    value: 41,
    unit: "%",
    year: "2023",
    label: { en: "of NBE customers are women", ar: "من عملاء البنك من النساء" },
    detail: {
      en: "NBE reports 4 million women among its deposit customers — the customers who keep their savings with the bank, as opposed to those who borrow from it.",
      ar: "يفيد البنك بوجود 4 ملايين عميلة ضمن عملاء الودائع — أي العملاء الذين يحتفظون بمدخراتهم لدى البنك، مقابل من يقترضون منه.",
    },
    source: "nbeEsg2023",
  },
  {
    value: 37,
    unit: "%",
    year: "2023",
    label: {
      en: "of account holders are under 35",
      ar: "من أصحاب الحسابات دون سن 35",
    },
    detail: {
      en: "Young deposit customers aged 21 to 36 make up the same share of the base.",
      ar: "يمثل عملاء الودائع الشباب من عمر 21 إلى 36 عامًا النسبة نفسها من القاعدة.",
    },
    source: "nbeEsg2023",
  },
  {
    value: 402,
    unit: "K",
    year: "2023",
    label: {
      en: "Customers on low incomes",
      ar: "ألف عميل من ذوي الدخل المنخفض",
    },
    detail: {
      en: "Customers with income up to EGP 5,000.",
      ar: "عملاء بدخل يصل إلى 5,000 جنيه مصري.",
    },
    source: "nbeEsg2023",
  },
  {
    value: 48,
    unit: "%",
    year: "2023",
    label: {
      en: "of the retail portfolio is outside Cairo and Alexandria",
      ar: "من محفظة الأفراد خارج القاهرة والإسكندرية",
    },
    detail: {
      en: "230 branches have employees literate in sign language.",
      ar: "يوجد 230 فرعًا به موظفون يجيدون لغة الإشارة.",
    },
    source: "nbeEsg2023",
  },
];

/* ------------------------------------------------------------------
   National context — Central Bank of Egypt indicators, reprinted by NBE
   These describe Egypt as a whole. They are NOT NBE achievements.
   ------------------------------------------------------------------ */

export const NATIONAL_CONTEXT: DatedStat[] = [
  {
    value: 79,
    unit: "%",
    year: "June 2026",
    label: {
      en: "of adults in Egypt have an active account",
      ar: "من البالغين في مصر لديهم حساب نشط",
    },
    detail: {
      en: "56.4 million people out of 71.4 million aged 15 and above. An active account can be a bank account, an Egypt Post account, a mobile wallet or a prepaid card.",
      ar: "56.4 مليون شخص من إجمالي 71.4 مليون من عمر 15 عامًا فأكثر. والحساب النشط قد يكون حسابًا بنكيًا أو حسابًا بالبريد المصري أو محفظة إلكترونية أو بطاقة مسبقة الدفع.",
    },
    source: "cbeInclusion2026",
  },
  {
    value: 72.5,
    unit: "%",
    decimals: 1,
    year: "June 2026",
    label: {
      en: "of women have an active account",
      ar: "من النساء لديهن حساب نشط",
    },
    detail: {
      en: "Up from 19.1% in 2016 — the number of women included has grown by 327%.",
      ar: "ارتفاعًا من 19.1% في 2016 — بزيادة 327% في عدد النساء المشمولات.",
    },
    source: "cbeInclusion2026",
  },
  {
    value: 58,
    unit: "%",
    year: "June 2026",
    label: {
      en: "of young people have an active account",
      ar: "من الشباب لديهم حساب نشط",
    },
    detail: {
      en: "Ages 15 to 35, up from 36.3% in 2020 — a rise of 85%.",
      ar: "من عمر 15 إلى 35 عامًا، ارتفاعًا من 36.3% في 2020 — بزيادة 85%.",
    },
    source: "cbeInclusion2026",
  },
];

/* ------------------------------------------------------------------
   NBE's own position and recognition — the most recent NBE publication
   ------------------------------------------------------------------ */

export const LATEST_NBE: DatedStat[] = [
  {
    value: 1,
    unit: "st",
    year: "Q1 2026",
    latest: true,
    label: {
      en: "in Egypt for large business financing",
      ar: "الأول في مصر في تمويل المشروعات الكبرى",
    },
    detail: {
      en: "When a project is too big for one bank, several lend together. NBE arranged more of these than any other bank in Egypt — 12 deals worth EGP 141.5 billion in the first three months of 2026.",
      ar: "حين يكون المشروع أكبر من قدرة بنك واحد، تشترك عدة بنوك في تمويله. وقد رتّب البنك الأهلي من هذه الصفقات أكثر من أي بنك آخر في مصر — 12 صفقة بقيمة 141.5 مليار جنيه في الأشهر الثلاثة الأولى من 2026.",
    },
    source: "nbeBulletin2No2026",
  },
  {
    value: 1,
    unit: "st",
    year: "2026",
    latest: true,
    label: {
      en: "most valuable banking brand in Egypt",
      ar: "أقوى علامة مصرفية قيمةً في مصر",
    },
    detail: {
      en: "Ranked top of Egypt's banking brands by Brand Finance, which values brands worldwide. Three Egyptian banks made its global top 500.",
      ar: "جاء في صدارة العلامات المصرفية في مصر وفق Brand Finance المتخصصة في تقييم العلامات التجارية عالميًا. وقد ضمت قائمتها لأكبر 500 علامة مصرفية ثلاثة بنوك مصرية.",
    },
    source: "nbeBulletin2No2026",
  },
  {
    value: 5.63,
    unit: "T",
    decimals: 2,
    year: "Sept 2025",
    latest: true,
    label: {
      en: "EGP that customers keep with NBE",
      ar: "تريليون جنيه يحتفظ بها العملاء لدى البنك",
    },
    detail: {
      en: "Money people and businesses have deposited, up from EGP 4.69 trillion a year earlier. A bigger deposit base means more people are using a bank rather than holding cash.",
      ar: "أموال أودعها الأفراد والمشروعات، ارتفاعًا من 4.69 تريليون جنيه قبل عام. واتساع قاعدة الودائع يعني أن مزيدًا من الناس يستخدمون البنك بدلًا من الاحتفاظ بالنقود.",
    },
    source: "nbeBulletin2No2026",
  },
  {
    value: 8.93,
    unit: "T",
    decimals: 2,
    year: "Sept 2025",
    latest: true,
    label: { en: "EGP in total assets", ar: "تريليون جنيه إجمالي الأصول" },
    detail: {
      en: "Everything the bank owns and is owed, up from EGP 7.39 trillion a year earlier. It is the usual measure of how large a bank is.",
      ar: "كل ما يملكه البنك وما له من مستحقات، ارتفاعًا من 7.39 تريليون جنيه قبل عام. وهو المقياس المعتاد لحجم البنك.",
    },
    source: "nbeBulletin2No2026",
  },
  {
    value: 20,
    unit: "M+",
    year: "2023",
    label: { en: "customers bank with NBE", ar: "مليون عميل يتعاملون مع البنك" },
    detail: {
      en: "NBE describes this as the largest customer base of any Egyptian bank. It has not published an updated count since 2023.",
      ar: "يصف البنك هذه القاعدة بأنها الأكبر بين البنوك المصرية. ولم ينشر عددًا محدثًا منذ 2023.",
    },
    source: "nbeAnnual2023",
  },
  {
    value: 1,
    unit: "st",
    year: "2025",
    label: {
      en: "Excellence in Financial Inclusion — Egypt",
      ar: "التميز في الشمول المالي — مصر",
    },
    detail: {
      en: "An award NBE reports receiving from World Economic Magazine for 2025, alongside Best Bank for ESG — Egypt 2025.",
      ar: "جائزة يفيد البنك بحصوله عليها من World Economic Magazine عن عام 2025، إلى جانب جائزة أفضل بنك في معايير الاستدامة — مصر 2025.",
    },
    source: "nbeBulletin2026",
  },
];

/* ------------------------------------------------------------------
   Egypt's financial plumbing — Central Bank of Egypt figures for
   December 2025, reprinted in NBE Economic Bulletin No. 2 - 2026.
   Country-wide, NOT NBE's own numbers.
   ------------------------------------------------------------------ */

/** The payments-facing subset, shown on the Digital Finance page. */
export const EGYPT_PAYMENTS_ACCESS = (): DatedStat[] =>
  EGYPT_ACCESS.filter((s) =>
    ["mobile wallets registered in Egypt", "EGP moved through mobile wallets", "ATMs across Egypt", "people in Egypt hold a prepaid card"].includes(
      s.label.en,
    ),
  );

export const EGYPT_ACCESS: DatedStat[] = [
  {
    value: 50.4,
    unit: "M",
    decimals: 1,
    year: "2025",
    latest: true,
    label: {
      en: "mobile wallets registered in Egypt",
      ar: "محفظة إلكترونية مسجلة في مصر",
    },
    detail: {
      en: "A wallet holds money against your phone number. Egypt had 15.2 million of them in 2019, so the number has more than tripled.",
      ar: "المحفظة تحفظ أموالك مقابل رقم هاتفك. وكان عددها في مصر 15.2 مليون محفظة عام 2019، أي أن العدد تضاعف أكثر من ثلاث مرات.",
    },
    source: "nbeBulletin2No2026",
  },
  {
    value: 4,
    unit: "T",
    year: "2025",
    latest: true,
    label: {
      en: "EGP moved through mobile wallets",
      ar: "تريليون جنيه تحركت عبر المحافظ الإلكترونية",
    },
    detail: {
      en: "The total value people sent, received and spent from their wallets during 2025. Paying by phone is no longer unusual.",
      ar: "إجمالي ما أرسله الناس واستقبلوه وأنفقوه من محافظهم خلال 2025. فالدفع بالهاتف لم يعد أمرًا غير معتاد.",
    },
    source: "nbeBulletin2No2026",
  },
  {
    value: 26160,
    year: "Dec 2025",
    latest: true,
    label: { en: "ATMs across Egypt", ar: "ماكينة صراف آلي في مصر" },
    detail: {
      en: "Alongside 4,787 bank branches and 1.35 million card machines in shops. More places to reach your money means fewer reasons to keep cash at home.",
      ar: "إلى جانب 4,787 فرعًا بنكيًا و1.35 مليون ماكينة دفع في المحال. وكلما زادت أماكن الوصول إلى أموالك قلّت أسباب الاحتفاظ بالنقود في البيت.",
    },
    source: "nbeBulletin2No2026",
  },
  {
    value: 21.6,
    unit: "M",
    decimals: 1,
    year: "Dec 2025",
    latest: true,
    label: {
      en: "people in Egypt hold a prepaid card",
      ar: "شخص في مصر يملكون بطاقة مسبقة الدفع",
    },
    detail: {
      en: "Plus 19.7 million with a debit card and 4.8 million with a credit card. A prepaid card is often a person's first card.",
      ar: "إضافة إلى 19.7 مليون يملكون بطاقة خصم و4.8 مليون يملكون بطاقة ائتمان. والبطاقة مسبقة الدفع غالبًا ما تكون أول بطاقة يمتلكها الشخص.",
    },
    source: "nbeBulletin2No2026",
  },
  {
    value: 390,
    unit: "%",
    year: "2015–2025",
    latest: true,
    label: {
      en: "growth in bank lending to small businesses",
      ar: "نمو إقراض البنوك للمشروعات الصغيرة",
    },
    detail: {
      en: "How much more banks lend to micro, small and medium businesses than they did ten years earlier.",
      ar: "مقدار الزيادة في إقراض البنوك للمشروعات متناهية الصغر والصغيرة والمتوسطة مقارنة بعشر سنوات مضت.",
    },
    source: "nbeBulletin2No2026",
  },
  {
    value: 107,
    unit: "B",
    year: "2025",
    latest: true,
    label: {
      en: "EGP in microfinance across Egypt",
      ar: "مليار جنيه تمويل متناهي الصغر في مصر",
    },
    detail: {
      en: "Small loans for people starting or running very small businesses, from banks and non-bank lenders together.",
      ar: "قروض صغيرة لمن يبدأون أو يديرون مشروعات متناهية الصغر، من البنوك وغير البنوك معًا.",
    },
    source: "nbeBulletin2No2026",
  },
];

/* ------------------------------------------------------------------
   Timeline — only milestones NBE has itself published a date for
   ------------------------------------------------------------------ */

export interface TimelineEntry {
  year: string;
  title: L;
  body: L;
  source: SourceId;
}

export const NBE_TIMELINE: TimelineEntry[] = [
  {
    year: "2016",
    title: {
      en: "A microfinance partnership begins",
      ar: "بداية شراكة في التمويل متناهي الصغر",
    },
    body: {
      en: "NBE's partnership with the I Am the Egyptian Foundation begins. By the 2023 report it covers 148,567 beneficiaries through 129 engaged NBE branches.",
      ar: "بدأت شراكة البنك الأهلي المصري مع مؤسسة أنا المصري. وبحلول تقرير 2023 وصلت إلى 148,567 مستفيدًا عبر 129 فرعًا مشاركًا من فروع البنك.",
    },
    source: "nbeEsg2023",
  },
  {
    year: "2019",
    title: {
      en: "A dedicated sustainable finance department",
      ar: "إدارة متخصصة للتمويل المستدام",
    },
    body: {
      en: "NBE's board approves a new sustainable finance and specialised programmes department, sitting within the Corporate Banking Group.",
      ar: "وافق مجلس إدارة البنك على إنشاء إدارة جديدة للتمويل المستدام والبرامج المتخصصة، ضمن مجموعة الخدمات المصرفية للشركات.",
    },
    source: "nbeEsg2023",
  },
  {
    year: "2021–2022",
    title: {
      en: "Microfinance volume grows",
      ar: "نمو حجم التمويل متناهي الصغر",
    },
    body: {
      en: "Financing volume through the I Am the Egyptian partnership rises from EGP 741.7 million in 2021 to EGP 1.218 billion in 2022.",
      ar: "ارتفع حجم التمويل عبر شراكة أنا المصري من 741.7 مليون جنيه في 2021 إلى 1.218 مليار جنيه في 2022.",
    },
    source: "nbeEsg2023",
  },
  {
    year: "2023",
    title: {
      en: "Financial literacy reaches villages and universities",
      ar: "التثقيف المالي يصل إلى القرى والجامعات",
    },
    body: {
      en: "NBE reports reaching 15,000 individuals across 163 villages under Haya Karima, and 4,000 students across four universities.",
      ar: "أفاد البنك بالوصول إلى 15,000 فرد في 163 قرية ضمن مبادرة حياة كريمة، و4,000 طالب في أربع جامعات.",
    },
    source: "nbeEsg2023",
  },
  {
    year: "2023",
    title: {
      en: "The Meeza Unified card launches",
      ar: "إطلاق بطاقة ميزة الموحدة",
    },
    body: {
      en: "A card that works as both a student ID and a banking tool. Separately, Meeza prepaid unified cards bring 720,000 previously unbanked customers into the formal sector.",
      ar: "بطاقة تعمل كهوية جامعية وأداة مصرفية في آن واحد. وبشكل منفصل، أدخلت بطاقات ميزة الموحدة مسبقة الدفع 720,000 عميل غير متعامل مع البنوك سابقًا إلى القطاع الرسمي.",
    },
    source: "nbeEsg2023",
  },
  {
    year: "2024",
    title: {
      en: "Three in four adults are included",
      ar: "ثلاثة من كل أربعة بالغين مشمولون",
    },
    body: {
      en: "NBE's June 2025 bulletin puts Egypt's financial inclusion rate at 74.8% at the end of 2024, up from 70.7% a year earlier. This is a Central Bank of Egypt national indicator, not an NBE result.",
      ar: "تضع نشرة البنك الأهلي في يونيو 2025 معدل الشمول المالي في مصر عند 74.8% في نهاية 2024، ارتفاعًا من 70.7% قبل عام. وهذا مؤشر قومي للبنك المركزي المصري وليس نتيجة خاصة بالبنك الأهلي.",
    },
    source: "nbeBulletin2025",
  },
  {
    year: "2025",
    title: {
      en: "Recognition for financial inclusion work",
      ar: "تقدير لجهود الشمول المالي",
    },
    body: {
      en: "NBE reports receiving Excellence in Financial Inclusion — Egypt 2025 and Best Bank for ESG — Egypt 2025 from World Economic Magazine. Its customer deposits stood at EGP 5.63 trillion in September 2025.",
      ar: "يفيد البنك بحصوله على جائزتي التميز في الشمول المالي — مصر 2025 وأفضل بنك في معايير الاستدامة — مصر 2025 من World Economic Magazine. وبلغت ودائع عملائه 5.63 تريليون جنيه في سبتمبر 2025.",
    },
    source: "nbeBulletin2026",
  },
  {
    year: "Q1 2026",
    title: {
      en: "First for large business financing",
      ar: "الأول في تمويل المشروعات الكبرى",
    },
    body: {
      en: "NBE reports ranking first in Egypt for syndicated loans in the first quarter of 2026 on Bloomberg's league tables, arranging 12 deals worth EGP 141.5 billion. Brand Finance also ranks it Egypt's most valuable banking brand for 2026.",
      ar: "يفيد البنك الأهلي بأنه جاء الأول في مصر في القروض المشتركة خلال الربع الأول من 2026 وفق جداول بلومبرج، برتيب 12 صفقة بقيمة 141.5 مليار جنيه. كما صنّفته Brand Finance أقوى علامة مصرفية قيمةً في مصر لعام 2026.",
    },
    source: "nbeBulletin2No2026",
  },
  {
    year: "June 2026",
    title: {
      en: "Egypt reaches 79%",
      ar: "مصر تصل إلى 79%",
    },
    body: {
      en: "The Central Bank of Egypt reports that 56.4 million of 71.4 million adults now hold an active account — 79%. It is also preparing a second National Financial Inclusion Strategy for 2026 to 2030. Again, a national indicator rather than an NBE result.",
      ar: "يفيد البنك المركزي المصري بأن 56.4 مليون من إجمالي 71.4 مليون بالغ باتوا يملكون حسابًا نشطًا — أي 79%. كما يُعِدّ استراتيجية وطنية ثانية للشمول المالي للفترة من 2026 إلى 2030. وهذا أيضًا مؤشر قومي لا نتيجة خاصة بالبنك الأهلي.",
    },
    source: "cbeInclusion2026",
  },
];

/* ------------------------------------------------------------------
   Initiatives
   ------------------------------------------------------------------ */

export interface Initiative {
  id: string;
  icon: string;
  title: L;
  /** What is it? */
  what: L;
  /** Why does it matter? */
  why: L;
  /** Who does it help? */
  who: L;
  source: SourceId;
}

export const NBE_INITIATIVES: Initiative[] = [
  {
    id: "haya-karima",
    icon: "sprout",
    title: {
      en: "Haya Karima village outreach",
      ar: "التوعية بالقرى ضمن حياة كريمة",
    },
    what: {
      en: "Financial literacy sessions held in villages as part of the national Haya Karima initiative, with the content tailored to each governorate.",
      ar: "جلسات تثقيف مالي تُعقد في القرى ضمن مبادرة حياة كريمة الوطنية، بمحتوى مُصمَّم خصيصًا لكل محافظة.",
    },
    why: {
      en: "NBE reports that financial literacy gaps are widest in rural areas, where branches are furthest away.",
      ar: "يفيد البنك بأن فجوات التثقيف المالي تتسع في المناطق الريفية حيث تبعد الفروع أكثر.",
    },
    who: {
      en: "15,000 individuals across 163 villages in 2023.",
      ar: "15,000 فرد في 163 قرية خلال عام 2023.",
    },
    source: "nbeEsg2023",
  },
  {
    id: "university-literacy",
    icon: "graduation",
    title: {
      en: "University financial literacy programme",
      ar: "برنامج التثقيف المالي الجامعي",
    },
    what: {
      en: "Sessions for university students covering saving, budgeting and the financial products available to them.",
      ar: "جلسات لطلاب الجامعات تتناول الادخار وإعداد الميزانية والمنتجات المالية المتاحة لهم.",
    },
    why: {
      en: "It prepares young adults for financial independence before they enter the workforce.",
      ar: "تُعدّ الشباب للاستقلال المالي قبل دخولهم سوق العمل.",
    },
    who: {
      en: "4,000 students at Cairo, Helwan, Beni Suef and Menoufiya universities in 2023.",
      ar: "4,000 طالب في جامعات القاهرة وحلوان وبني سويف والمنوفية خلال عام 2023.",
    },
    source: "nbeEsg2023",
  },
  {
    id: "meeza-unified",
    icon: "creditCard",
    title: { en: "Meeza Unified card", ar: "بطاقة ميزة الموحدة" },
    what: {
      en: "A card launched for university students that works as both a student ID and a banking tool. It supports e-payments, contactless transactions and mobile wallet services.",
      ar: "بطاقة أُطلقت لطلاب الجامعات تعمل كهوية جامعية وأداة مصرفية في آن واحد. وتدعم المدفوعات الإلكترونية والمعاملات اللاتلامسية وخدمات المحفظة الإلكترونية.",
    },
    why: {
      en: "It puts a first payment product in students' hands at the point where they are forming financial habits.",
      ar: "تضع أول منتج للدفع في يد الطالب في المرحلة التي تتشكل فيها عاداته المالية.",
    },
    who: {
      en: "University students. Separately, Meeza prepaid unified cards brought 720,000 previously unbanked customers into the formal sector in 2023.",
      ar: "طلاب الجامعات. وبشكل منفصل، أدخلت بطاقات ميزة الموحدة مسبقة الدفع 720,000 عميل غير متعامل مع البنوك سابقًا إلى القطاع الرسمي في 2023.",
    },
    source: "nbeEsg2023",
  },
  {
    id: "women-entrepreneurs",
    icon: "handshake",
    title: {
      en: "Funding channels for women entrepreneurs",
      ar: "قنوات تمويل لرائدات الأعمال",
    },
    what: {
      en: "MSMEDA runs a dedicated EGP 200 million funding channel for female-owned enterprises, plus a separate EGP 350 million agreement that prioritises women entrepreneurs in microfinance.",
      ar: "يدير جهاز تنمية المشروعات قناة تمويل مخصصة بقيمة 200 مليون جنيه للمشروعات المملوكة للنساء، إلى جانب اتفاق منفصل بقيمة 350 مليون جنيه يعطي الأولوية لرائدات الأعمال في التمويل متناهي الصغر.",
    },
    why: {
      en: "Access to credit is one of the barriers that keeps women's businesses informal.",
      ar: "يمثل الحصول على التمويل أحد العوائق التي تبقي مشروعات النساء في القطاع غير الرسمي.",
    },
    who: {
      en: "NBE reports reaching 585 female entrepreneurs with non-financial services in 2023.",
      ar: "أفاد البنك بالوصول إلى 585 رائدة أعمال بخدمات غير مالية خلال عام 2023.",
    },
    source: "nbeEsg2023",
  },
  {
    id: "accessible-banking",
    icon: "userCheck",
    title: {
      en: "Banking for customers with disabilities",
      ar: "خدمات مصرفية لذوي الإعاقة",
    },
    what: {
      en: "1,238 ATMs designed for visually impaired customers, 34 accessible to wheelchair users, and 230 branches with employees literate in sign language.",
      ar: "1,238 ماكينة صراف مصممة لخدمة ضعاف البصر، و34 مهيأة لمستخدمي الكراسي المتحركة، و230 فرعًا به موظفون يجيدون لغة الإشارة.",
    },
    why: {
      en: "A branch or machine that cannot be used is the same as no branch at all.",
      ar: "الفرع أو الماكينة التي يتعذر استخدامها لا تختلف عن عدم وجودها أصلًا.",
    },
    who: {
      en: "NBE also licensed the Nour El-Basira Association for the visually impaired through customised account services.",
      ar: "كما رخّص البنك لجمعية نور البصيرة للمكفوفين من خلال خدمات حسابات مُخصصة.",
    },
    source: "nbeEsg2023",
  },
  {
    id: "mobile-branches",
    icon: "mapPin",
    title: {
      en: "Bus branches and electronic service branches",
      ar: "الفروع المتنقلة وفروع الخدمة الإلكترونية",
    },
    what: {
      en: "Six mobile bus branches and 38 electronic service branches, alongside a network of 657 branches and 6,797 ATMs.",
      ar: "ستة فروع متنقلة (أتوبيس) و38 فرع خدمة إلكترونية، إلى جانب شبكة من 657 فرعًا و6,797 ماكينة صراف آلي.",
    },
    why: {
      en: "They bring services to places where a permanent branch is not viable.",
      ar: "تصل بالخدمات إلى أماكن يصعب فيها إنشاء فرع دائم.",
    },
    who: {
      en: "Communities away from the main branch network. NBE reports 48% of its retail portfolio sits outside Cairo and Alexandria.",
      ar: "المجتمعات البعيدة عن شبكة الفروع الرئيسية. ويفيد البنك بأن 48% من محفظة الأفراد لديه خارج القاهرة والإسكندرية.",
    },
    source: "nbeEsg2023",
  },
  {
    id: "nilepreneurs",
    icon: "store",
    title: { en: "NilePreneurs and BDS Hubs", ar: "نايل بيرنرز ومراكز خدمات تطوير الأعمال" },
    what: {
      en: "A national programme led by the Central Bank of Egypt with Nile University, which NBE supports, offering incubation, training and Business Development Service hubs.",
      ar: "برنامج وطني بقيادة البنك المركزي المصري بالتعاون مع جامعة النيل، ويدعمه البنك الأهلي، ويقدم الاحتضان والتدريب ومراكز خدمات تطوير الأعمال.",
    },
    why: {
      en: "It helps small businesses build the records and skills that formal finance requires.",
      ar: "يساعد المشروعات الصغيرة على بناء السجلات والمهارات التي يتطلبها التمويل الرسمي.",
    },
    who: {
      en: "32,707 beneficiaries and 13,145 new entrepreneurs across 12 governorates and 70 engaged NBE branches in 2023.",
      ar: "32,707 مستفيد و13,145 رائد أعمال جديد في 12 محافظة و70 فرعًا مشاركًا من فروع البنك خلال 2023.",
    },
    source: "nbeEsg2023",
  },
  {
    id: "business-expos",
    icon: "users",
    title: { en: "Business expo outreach", ar: "التوعية عبر معارض الأعمال" },
    what: {
      en: "Participation in business expos to explain financial solutions to entrepreneurs and business owners face to face.",
      ar: "المشاركة في معارض الأعمال لشرح الحلول المالية لرواد الأعمال وأصحاب المشروعات وجهًا لوجه.",
    },
    why: {
      en: "Many small business owners have never had a product explained to them by a bank directly.",
      ar: "كثير من أصحاب المشروعات الصغيرة لم يسبق أن شرح لهم بنك منتجاته مباشرة.",
    },
    who: {
      en: "2,000 entrepreneurs and business owners in 2023.",
      ar: "2,000 رائد أعمال وصاحب مشروع خلال عام 2023.",
    },
    source: "nbeEsg2023",
  },
];

/* ------------------------------------------------------------------
   Curated views used by the Solutions page.

   These select entries already defined above rather than restating any
   figure, so the Solutions page cannot drift away from the numbers on the
   NBE Impact page.
   ------------------------------------------------------------------ */

/** Selects by English label, keeping the order the labels are given in. */
function selectStats(list: DatedStat[], labels: string[]): DatedStat[] {
  return labels.flatMap((label) => list.filter((s) => s.label.en === label));
}

/** Programme results that evidence the education and outreach solutions. */
export const SOLUTIONS_PROGRAMME_STATS: DatedStat[] = selectStats(
  NBE_INCLUSION_STATS,
  [
    "Individuals reached",
    "Villages reached",
    "University students reached",
    "Previously unbanked customers integrated",
    "Students at universities and educational institutes",
    "Individuals engaged on observance days",
  ],
);
