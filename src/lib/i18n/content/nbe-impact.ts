import type { Locale } from "../config";

const en = {
  meta: {
    title: "NBE & Financial Inclusion",
    description:
      "How the National Bank of Egypt contributes to financial inclusion, using figures published in NBE's own 2023 Progress ESG Report and its June 2025 Economic Bulletin.",
  },
  hero: {
    eyebrow: "About this project",
    title: "NBE & Financial Inclusion",
    description:
      "How the National Bank of Egypt contributes to financial inclusion in Egypt — presented as educational information drawn from NBE's own published reports.",
  },
  disclaimer:
    "This page is an educational summary compiled by the project team from NBE's published reports. It is not an official National Bank of Egypt publication, no account can be opened through it, and it does not promote any product.",
  programmes: {
    eyebrow: "Financial inclusion programmes",
    title: "What NBE reported for 2023",
    description:
      "Every figure below is reproduced from the 2023 National Bank of Egypt Progress ESG Report and describes 2023. Later years are shown separately further down.",
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
        b: "Egypt's women's financial inclusion rate reached 68.8% at the end of 2024 — a Central Bank of Egypt figure reprinted in NBE's June 2025 Economic Bulletin, not an NBE result.",
      },
    ],
  },
  national: {
    eyebrow: "National context",
    title: "Where Egypt stands overall",
    description:
      "These are Central Bank of Egypt indicators for the whole country, reprinted in NBE's Economic Bulletin of June 2025. They describe Egypt, not NBE's customers, and are shown here so the bank's programmes can be read in proportion.",
  },
  sources: {
    eyebrow: "Sources",
    title: "Where these figures come from",
    description:
      "Two NBE publications underpin this page. Both are linked in full on the Sources page, alongside every other figure used on this site.",
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
      "The National Bank of Egypt publishes what its financial inclusion programmes reached. Here are three figures from its 2023 report.",
    cta: "Explore NBE's impact",
  },
};

export type NbeImpactDict = typeof en;

const ar: NbeImpactDict = {
  meta: {
    title: "البنك الأهلي المصري والشمول المالي",
    description:
      "كيف يساهم البنك الأهلي المصري في الشمول المالي، بالاستناد إلى أرقام منشورة في تقرير التقدم البيئي والاجتماعي والحوكمي لعام 2023 والنشرة الاقتصادية لشهر يونيو 2025.",
  },
  hero: {
    eyebrow: "عن المشروع",
    title: "البنك الأهلي المصري والشمول المالي",
    description:
      "كيف يساهم البنك الأهلي المصري في الشمول المالي في مصر — معروضة كمعلومات تثقيفية مستمدة من تقارير البنك المنشورة.",
  },
  disclaimer:
    "هذه الصفحة ملخص تثقيفي أعده فريق المشروع من التقارير المنشورة للبنك الأهلي المصري. وهي ليست إصدارًا رسميًا للبنك، ولا يمكن فتح حساب من خلالها، ولا تروّج لأي منتج.",
  programmes: {
    eyebrow: "برامج الشمول المالي",
    title: "ما أعلنه البنك الأهلي عن عام 2023",
    description:
      "كل رقم أدناه منقول عن تقرير التقدم البيئي والاجتماعي والحوكمي للبنك الأهلي المصري لعام 2023، ويصف عام 2023. أما السنوات اللاحقة فتُعرض بشكل منفصل أدناه.",
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
        b: "بلغ معدل الشمول المالي للمرأة في مصر 68.8% في نهاية 2024 — وهو رقم صادر عن البنك المركزي المصري ومعاد نشره في النشرة الاقتصادية للبنك الأهلي في يونيو 2025، وليس نتيجة خاصة بالبنك الأهلي.",
      },
    ],
  },
  national: {
    eyebrow: "السياق القومي",
    title: "أين تقف مصر إجمالًا",
    description:
      "هذه مؤشرات صادرة عن البنك المركزي المصري وتخص البلاد كلها، أعيد نشرها في النشرة الاقتصادية للبنك الأهلي في يونيو 2025. وهي تصف مصر لا عملاء البنك الأهلي، وتُعرض هنا حتى تُقرأ برامج البنك في حجمها الصحيح.",
  },
  sources: {
    eyebrow: "المصادر",
    title: "من أين جاءت هذه الأرقام",
    description:
      "تستند هذه الصفحة إلى إصدارين للبنك الأهلي المصري. كلاهما مُدرج بالكامل في صفحة المصادر، إلى جانب كل رقم آخر مستخدم في هذا الموقع.",
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
      "ينشر البنك الأهلي المصري ما وصلت إليه برامجه للشمول المالي. وهذه ثلاثة أرقام من تقريره لعام 2023.",
    cta: "استكشف دور البنك الأهلي",
  },
};

export const nbeImpact: Record<Locale, NbeImpactDict> = { en, ar };
