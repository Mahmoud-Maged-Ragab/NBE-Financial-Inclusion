import type { Locale } from "../config";

const en = {
  meta: {
    title: "NBE & Financial Inclusion",
    description:
      "How the National Bank of Egypt contributes to financial inclusion, using NBE's own published reports and the Central Bank of Egypt's June 2026 national indicators.",
  },
  hero: {
    eyebrow: "About this project",
    title: "NBE & Financial Inclusion",
    description:
      "How the National Bank of Egypt contributes to financial inclusion in Egypt — presented as educational information drawn from NBE's own published reports.",
  },
  disclaimer:
    "This page is an educational summary compiled by the project team from NBE's published reports. It is not an official National Bank of Egypt publication, no account can be opened through it, and it does not promote any product.",
  latestLabel: "Latest NBE data",
  recent: {
    eyebrow: "What NBE reports now",
    title: "What NBE Reported for 2025 and 2026",
    description:
      "These are NBE's own latest published results, from its Economic Bulletins No. 1 and No. 2 of 2026. Each card shows the exact period it covers — a bulletin printed in 2026 usually reports results from 2025, and it is labelled that way rather than rounded up to look newer.",
    note: "This is everything NBE itself has published recently. Its bulletins report the bank's balance sheet and its awards; they do not report on its financial education programmes, which is why those appear separately below with their own year.",
  },
  access: {
    eyebrow: "Egypt, not NBE",
    title: "How Egypt Pays and Banks Now",
    description:
      "These are country-wide figures for all of Egypt, published by the Central Bank of Egypt and reprinted in NBE Economic Bulletin No. 2 – 2026. They describe the whole banking system, not NBE's customers.",
    meaning: "What this means for you",
    meaningBody:
      "More wallets, more cards and more places to use them mean fewer errands, less cash to carry, and more ways to be paid without queueing for it.",
  },
  programmes: {
    eyebrow: "Earlier reporting",
    title: "Financial Education Programmes — Last Reported for 2023",
    description:
      "How many people NBE's financial education work reached. 2023 is the most recent year NBE has published these numbers for: its 2025 and 2026 Economic Bulletins cover the bank's finances and awards, not its programmes. So these are shown as the 2023 results they are, not as current figures.",
    caveat:
      "Looking for NBE's current position? That is the section above, drawn from its 2026 bulletins.",
  },
  scale: {
    eyebrow: "Reach",
    title: "The network behind the programmes",
    description:
      "Figures as at 31 December 2023, as reported by NBE. A branch network matters for inclusion because distance is one of the barriers that keeps people out.",
  },
  base: {
    eyebrow: "Who the customer base reaches",
    title: "Inclusive banking, in NBE's own numbers",
    description:
      "NBE segments its customer base by gender, age and income and publishes the shares below.",
  },
  timeline: {
    eyebrow: "Timeline",
    title: "A documented path",
    description:
      "Only milestones NBE has itself put a date to are shown. Where a step describes Egypt as a whole rather than the bank, that is stated on the entry.",
    sourceLabel: "Source",
  },
  initiatives: {
    eyebrow: "Initiatives",
    title: "NBE initiatives, in plain language",
    description:
      "What each one is, why it matters, and who it reaches. Descriptions follow NBE's own account of the programme.",
    what: "What is it?",
    why: "Why does it matter?",
    who: "Who does it help?",
  },
  youth: {
    eyebrow: "Young people",
    title: "Helping Young People Understand Money",
    body: "NBE reported financial literacy sessions reaching 4,000 students across four universities — Cairo, Helwan, Beni Suef and Menoufiya — in 2023. The sessions covered saving, budgeting and the financial products available to students.",
    why: "Understanding saving, budgeting, and financial products can help young people make more informed financial decisions as they enter the workforce.",
    extra:
      "In the same year NBE launched the Meeza Unified card for university students, which works as both a student ID and a banking tool.",
  },
  rural: {
    eyebrow: "Rural and underserved communities",
    title: "Bringing Financial Services Closer to Communities",
    body: "NBE reported reaching 15,000 individuals across 163 villages through its financial literacy initiative under Haya Karima in 2023. NBE describes adapting the content to each governorate, and names distance, cultural barriers and low financial literacy as the obstacles it had to work around.",
    why: "Programmes like these help bring financial education and banking awareness to communities that may have less access to traditional financial services.",
    extra:
      "NBE also operates six bus branches and reports that 48% of its retail portfolio sits outside Cairo and Alexandria.",
  },
  women: {
    eyebrow: "Women",
    title: "Supporting Women's Financial Inclusion",
    body: "NBE reports that women make up 41% of its customer base, with 4 million female liabilities customers as at the end of 2023.",
    why: "Access to an account, to awareness, to digital services and to credit are the four places where the gender gap usually shows up. NBE reports activity in each.",
    points: [
      {
        t: "Accounts and customer base",
        b: "Women are 41% of NBE's customer base, with 4 million female liabilities customers (2023).",
      },
      {
        t: "Entrepreneurship support",
        b: "EGP 200 million in dedicated MSMEDA funding channels for female-owned enterprises, and an EGP 350 million agreement prioritising women entrepreneurs in microfinance (2023).",
      },
      {
        t: "Non-financial services",
        b: "585 female entrepreneurs reached through partnerships including the I Make This platform (2023).",
      },
      {
        t: "National context",
        b: "Across Egypt, 72.5% of women held an active account by June 2026, up from 19.1% in 2016. That is a Central Bank of Egypt national figure, not an NBE result.",
      },
    ],
  },
  national: {
    eyebrow: "National context",
    title: "Where Egypt stands overall",
    description:
      "These are Central Bank of Egypt indicators for the whole country, announced in August 2026 and current to the end of June 2026. They describe Egypt, not NBE's customers, and are shown here so the bank's programmes can be read in proportion.",
  },
  sources: {
    eyebrow: "Sources",
    title: "Where these figures come from",
    description:
      "Five publications underpin this page: NBE's 2023 ESG report and 2023 annual report for its programmes, NBE Economic Bulletins No. 1 and No. 2 of 2026 for its latest numbers, and the Central Bank of Egypt for Egypt's national rates. All are listed in full on the Sources page, with the pages the figures come from.",
    seeAll: "See the full source list",
  },
  cta: {
    title: "See how the wider picture fits together",
    description:
      "NBE's programmes are one part of Egypt's financial inclusion story. The rest of this site covers the national data, the barriers that remain, and what digital finance changes.",
    primary: "Financial inclusion in Egypt",
    secondary: "Watch the videos",
  },
  preview: {
    eyebrow: "NBE & financial inclusion",
    title: "NBE & Financial Inclusion",
    description:
      "Across Egypt, 79% of adults now hold an active account. Here is where the National Bank of Egypt stands, and what its financial education programmes have reached.",
    cta: "Explore NBE's impact",
  },
};

export type NbeImpactDict = typeof en;

const ar: NbeImpactDict = {
  meta: {
    title: "البنك الأهلي المصري والشمول المالي",
    description:
      "كيف يساهم البنك الأهلي المصري في الشمول المالي، بالاستناد إلى تقارير البنك المنشورة وإلى المؤشرات القومية للبنك المركزي المصري في يونيو 2026.",
  },
  hero: {
    eyebrow: "عن المشروع",
    title: "البنك الأهلي المصري والشمول المالي",
    description:
      "كيف يساهم البنك الأهلي المصري في الشمول المالي في مصر — معروضة كمعلومات تثقيفية مستمدة من تقارير البنك المنشورة.",
  },
  disclaimer:
    "هذه الصفحة ملخص تثقيفي أعده فريق المشروع من التقارير المنشورة للبنك الأهلي المصري. وهي ليست إصدارًا رسميًا للبنك، ولا يمكن فتح حساب من خلالها، ولا تروّج لأي منتج.",
  latestLabel: "أحدث بيانات البنك الأهلي المصري",
  recent: {
    eyebrow: "ما يعلنه البنك الأهلي الآن",
    title: "ما أعلنه البنك الأهلي المصري عن 2025 و2026",
    description:
      "هذه أحدث النتائج التي نشرها البنك الأهلي بنفسه، من نشرتيه الاقتصاديتين العدد الأول والعدد الثاني لعام 2026. وتوضح كل بطاقة الفترة التي تغطيها بالضبط — فالنشرة الصادرة في 2026 تعرض عادةً نتائج عام 2025، وقد وُضّح ذلك بدل تقديمها وكأنها أحدث مما هي عليه.",
    note: "هذا كل ما نشره البنك الأهلي حديثًا. فنشراته تعرض مركز الميزانية والجوائز، ولا تتناول برامج التثقيف المالي، ولذلك تظهر تلك البرامج بشكل منفصل أدناه بسنتها الخاصة.",
  },
  access: {
    eyebrow: "مصر لا البنك الأهلي",
    title: "كيف تدفع مصر وتتعامل مع البنوك الآن",
    description:
      "هذه أرقام على مستوى مصر كلها، صادرة عن البنك المركزي المصري ومعاد نشرها في النشرة الاقتصادية للبنك الأهلي العدد الثاني 2026. وهي تصف النظام المصرفي بأكمله لا عملاء البنك الأهلي.",
    meaning: "ماذا يعني هذا لك",
    meaningBody:
      "زيادة المحافظ والبطاقات وأماكن استخدامها تعني مشاوير أقل، ونقودًا أقل تحملها معك، وطرقًا أكثر لتصلك أموالك دون وقوف في طابور.",
  },
  programmes: {
    eyebrow: "تقارير سابقة",
    title: "برامج التثقيف المالي — آخر ما أُعلن عنه كان عام 2023",
    description:
      "عدد من وصلت إليهم جهود التثقيف المالي لدى البنك الأهلي. و2023 هو آخر عام نشر فيه البنك هذه الأرقام: فنشراته الاقتصادية لعامي 2025 و2026 تتناول أوضاعه المالية وجوائزه لا برامجه. ولذلك تُعرض هنا بوصفها نتائج عام 2023، لا أرقامًا حالية.",
    caveat:
      "تبحث عن وضع البنك الأهلي الحالي؟ ستجده في القسم أعلاه، المأخوذ من نشرتيه لعام 2026.",
  },
  scale: {
    eyebrow: "الانتشار",
    title: "الشبكة التي تقف خلف البرامج",
    description:
      "أرقام كما في 31 ديسمبر 2023 وفق ما أعلنه البنك. شبكة الفروع مهمة للشمول المالي لأن بُعد المسافة أحد العوائق التي تُبقي الناس خارج النظام.",
  },
  base: {
    eyebrow: "من تصل إليهم قاعدة العملاء",
    title: "الخدمات المصرفية الشاملة بأرقام البنك نفسه",
    description:
      "يقسّم البنك قاعدة عملائه حسب النوع والعمر والدخل، ويعلن النسب التالية.",
  },
  timeline: {
    eyebrow: "الخط الزمني",
    title: "مسار موثّق",
    description:
      "تُعرض فقط المحطات التي حدد البنك تاريخها بنفسه. وحين تصف خطوة ما مصر كلها لا البنك، فذلك مذكور في البند نفسه.",
    sourceLabel: "المصدر",
  },
  initiatives: {
    eyebrow: "المبادرات",
    title: "مبادرات البنك الأهلي بلغة بسيطة",
    description:
      "ما هي كل مبادرة، ولماذا تهم، ومن تصل إليهم. والأوصاف تتبع ما ذكره البنك عن البرنامج.",
    what: "ما هي؟",
    why: "لماذا تهم؟",
    who: "من تساعد؟",
  },
  youth: {
    eyebrow: "الشباب",
    title: "مساعدة الشباب على فهم المال",
    body: "أفاد البنك الأهلي المصري بأن جلسات التثقيف المالي وصلت إلى 4,000 طالب في أربع جامعات — القاهرة وحلوان وبني سويف والمنوفية — خلال عام 2023. وتناولت الجلسات الادخار وإعداد الميزانية والمنتجات المالية المتاحة للطلاب.",
    why: "فهم الادخار وإعداد الميزانية والمنتجات المالية يساعد الشباب على اتخاذ قرارات مالية أكثر وعيًا عند دخولهم سوق العمل.",
    extra:
      "وفي العام نفسه أطلق البنك بطاقة ميزة الموحدة لطلاب الجامعات، وهي تعمل كهوية جامعية وأداة مصرفية في آن واحد.",
  },
  rural: {
    eyebrow: "المجتمعات الريفية والأقل خدمة",
    title: "تقريب الخدمات المالية من المجتمعات",
    body: "أفاد البنك الأهلي المصري بالوصول إلى 15,000 فرد في 163 قرية عبر مبادرته للتثقيف المالي ضمن حياة كريمة خلال عام 2023. ويذكر البنك أنه كيّف المحتوى حسب كل محافظة، ويحدد بُعد المسافة والعوائق الثقافية وضعف الثقافة المالية كعقبات كان عليه تجاوزها.",
    why: "برامج كهذه تساعد على إيصال التثقيف المالي والوعي المصرفي إلى مجتمعات قد يكون وصولها إلى الخدمات المالية التقليدية أقل.",
    extra:
      "كما يشغّل البنك ستة فروع متنقلة، ويفيد بأن 48% من محفظة الأفراد لديه خارج القاهرة والإسكندرية.",
  },
  women: {
    eyebrow: "المرأة",
    title: "دعم الشمول المالي للمرأة",
    body: "يفيد البنك الأهلي المصري بأن النساء يمثلن 41% من قاعدة عملائه، بواقع 4 ملايين عميلة في جانب الالتزامات كما في نهاية 2023.",
    why: "الحساب، والوعي، والخدمات الرقمية، والتمويل هي المواضع الأربعة التي تظهر فيها الفجوة بين الجنسين عادةً. ويفيد البنك بوجود نشاط في كل منها.",
    points: [
      {
        t: "الحسابات وقاعدة العملاء",
        b: "النساء يمثلن 41% من قاعدة عملاء البنك، بواقع 4 ملايين عميلة في جانب الالتزامات (2023).",
      },
      {
        t: "دعم ريادة الأعمال",
        b: "200 مليون جنيه في قنوات تمويل مخصصة عبر جهاز تنمية المشروعات للمشروعات المملوكة للنساء، واتفاق بقيمة 350 مليون جنيه يعطي الأولوية لرائدات الأعمال في التمويل متناهي الصغر (2023).",
      },
      {
        t: "الخدمات غير المالية",
        b: "الوصول إلى 585 رائدة أعمال عبر شراكات من بينها منصة «أنا اللي عملته» (2023).",
      },
      {
        t: "السياق القومي",
        b: "على مستوى مصر، بلغت نسبة النساء اللاتي يملكن حسابًا نشطًا 72.5% في يونيو 2026، ارتفاعًا من 19.1% في 2016. وهو رقم قومي للبنك المركزي المصري وليس نتيجة خاصة بالبنك الأهلي.",
      },
    ],
  },
  national: {
    eyebrow: "السياق القومي",
    title: "أين تقف مصر إجمالًا",
    description:
      "هذه مؤشرات صادرة عن البنك المركزي المصري وتخص البلاد كلها، أُعلنت في أغسطس 2026 وتغطي حتى نهاية يونيو 2026. وهي تصف مصر لا عملاء البنك الأهلي، وتُعرض هنا حتى تُقرأ برامج البنك في حجمها الصحيح.",
  },
  sources: {
    eyebrow: "المصادر",
    title: "من أين جاءت هذه الأرقام",
    description:
      "تستند هذه الصفحة إلى خمسة مصادر: تقرير الاستدامة والتقرير السنوي للبنك الأهلي لعام 2023 لبرامجه، والنشرتين الاقتصاديتين العدد الأول والعدد الثاني لعام 2026 لأحدث أرقامه، والبنك المركزي المصري للمعدلات القومية. وجميعها مُدرجة بالكامل في صفحة المصادر مع أرقام الصفحات المأخوذة منها.",
    seeAll: "اطّلع على قائمة المصادر كاملة",
  },
  cta: {
    title: "شاهد كيف تتكامل الصورة الأوسع",
    description:
      "برامج البنك الأهلي جزء واحد من قصة الشمول المالي في مصر. وبقية هذا الموقع تتناول البيانات القومية والعقبات المتبقية وما يغيّره التمويل الرقمي.",
    primary: "الشمول المالي في مصر",
    secondary: "شاهد الفيديوهات",
  },
  preview: {
    eyebrow: "البنك الأهلي والشمول المالي",
    title: "البنك الأهلي المصري والشمول المالي",
    description:
      "على مستوى مصر، بات 79% من البالغين يملكون حسابًا نشطًا. وهذا هو موقف البنك الأهلي المصري وما وصلت إليه برامجه للتثقيف المالي.",
    cta: "استكشف دور البنك الأهلي",
  },
};

export const nbeImpact: Record<Locale, NbeImpactDict> = { en, ar };
