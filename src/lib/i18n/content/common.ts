import type { Locale } from "../config";

const en = {
  site: {
    name: "Financial Inclusion",
    nameSuffix: "in Egypt",
    skipToContent: "Skip to content",
    home: "Financial Inclusion in Egypt — home",
  },
  nav: {
    sections: "Sections",
    close: "Close",
    primary: "Primary",
    language: "Language",
    switchTo: "Switch to Arabic",
    groups: {
      foundations: "Foundations",
      egypt: "Egypt in focus",
      technology: "Technology",
      people: "People",
      outlook: "Outlook",
    },
    short: {
      understanding: "Understanding",
      banking: "Banking",
      egypt: "Egypt",
      digitalFinance: "Digital Finance",
    },
  },
  items: {
    understanding: {
      label: "Understanding Financial Inclusion",
      blurb: "What it means, and the four conditions that define it.",
    },
    banking: {
      label: "Know Your Banking Options",
      blurb: "Accounts, cards and wallets explained in plain language.",
    },
    egypt: {
      label: "Financial Inclusion in Egypt",
      blurb: "The national picture, measured two different ways.",
    },
    ruralUrban: {
      label: "Rural vs Urban Egypt",
      blurb: "Two geographies, two sets of barriers — and what helps.",
    },
    challenges: {
      label: "Challenges",
      blurb: "Eight barriers, why they matter, and what can be done.",
    },
    digitalFinance: {
      label: "Digital Finance",
      blurb: "How a phone becomes a gateway to financial services.",
    },
    fintech: {
      label: "FinTech in Egypt",
      blurb: "The categories, the players, and who benefits.",
    },
    women: {
      label: "Women & Financial Inclusion",
      blurb: "Where the gender gap sits, and where it is closing.",
    },
    smallBusiness: {
      label: "Small Businesses",
      blurb: "MSMEs, credit access, and the cost of staying informal.",
    },
    egyptVsIndia: {
      label: "Egypt vs India",
      blurb: "A like-for-like comparison on ten indicators.",
    },
    future: {
      label: "Future of Financial Inclusion",
      blurb: "A realistic view of Egypt towards 2030.",
    },
    sources: {
      label: "Sources",
      blurb: "Every figure on this site, traced to its origin.",
    },
  },
  footer: {
    description:
      "An educational resource on how people, businesses and communities in Egypt connect to the financial system — built on published data from the World Bank, the Central Bank of Egypt, the IMF and Egyptian government bodies.",
    reviewSources: "Review every source",
    disclaimer:
      "Educational project. Figures are reproduced from published sources. This site does not provide financial advice and does not promote any bank or provider.",
    dataNote: "Data current as of the periods stated beside each figure.",
  },
  ui: {
    opensInNewTab: "(opens in a new tab)",
    selectTopic: "Select a topic",
    chooseSetting: "Choose a setting",
    stageOf: "Stage {current} of {total}",
    ppGap: "{value} pp gap",
    theProblem: "The problem",
    whyItMatters: "Why it matters",
    possibleSolution: "Possible solution",
    problem: "Problem",
    howInclusionHelps: "How financial inclusion can help",
    adults15: "Adults aged 15+.",
    visitSource: "Visit source",
    before: "Before",
    after: "After",
    egypt: "Egypt",
    india: "India",
    women: "Women",
    men: "Men",
  },
  cta: {
    bankAwareness: {
      title: "Ready to understand your financial options?",
      description:
        "Learn how accounts, cards and digital payments actually work — then decide for yourself, with reliable information behind you.",
      exploreBanking: "Explore Banking",
      learnDigital: "Learn About Digital Finance",
      compare: "Compare Egypt & India",
    },
    startJourney: "Start Your Financial Inclusion Journey",
    learnBeforeChoose: "Learn Before You Choose",
    understandOptions: "Understand Your Financial Options",
  },
  trust: {
    eyebrow: "Trust and credibility",
    title: "Learn from reliable sources",
    description:
      "Nothing on this site is invented. Every figure comes from a published institution, is labelled with the period it covers, and links back to the publisher so you can check it yourself.",
    items: [
      {
        name: "Central Bank of Egypt",
        role: "Egypt's national financial inclusion data and strategy.",
      },
      {
        name: "World Bank",
        role: "The Global Findex survey of how adults actually use money.",
      },
      {
        name: "International Monetary Fund",
        role: "Branch, ATM and agent network data reported by authorities.",
      },
      {
        name: "Egyptian government bodies",
        role: "MSMEDA, Egypt Vision 2030 and official information services.",
      },
    ],
    seeAll: "See the full source list",
  },
  project: {
    logoAlt: "National Bank of Egypt logo",
    createdBy: "Created by Credit Administration Interns",
    org: "National Bank of Egypt (NBE)",
    footerLine:
      "An educational project created by Credit Administration Interns at the National Bank of Egypt (NBE).",
    aboutEyebrow: "About this project",
    aboutTitle: "About This Project",
    aboutBody:
      "This educational project was created by Credit Administration Interns at the National Bank of Egypt (NBE) to raise awareness about financial inclusion, digital finance, and the importance of access to formal financial services in Egypt.",
    notOfficial:
      "This is an educational awareness project. It is not an official National Bank of Egypt banking platform, no account can be opened through it, and it does not provide financial advice or guarantee any financial outcome.",
  },
  disclaimer: {
    short:
      "This site is educational. It does not give financial advice, does not promote any bank, and cannot promise any financial outcome.",
  },
};

export type CommonDict = typeof en;

const ar: CommonDict = {
  site: {
    name: "الشمول المالي",
    nameSuffix: "في مصر",
    skipToContent: "تخطَّ إلى المحتوى",
    home: "الشمول المالي في مصر — الصفحة الرئيسية",
  },
  nav: {
    sections: "الأقسام",
    close: "إغلاق",
    primary: "التنقل الرئيسي",
    language: "اللغة",
    switchTo: "التبديل إلى الإنجليزية",
    groups: {
      foundations: "الأساسيات",
      egypt: "مصر عن قرب",
      technology: "التكنولوجيا",
      people: "الأفراد والمشروعات",
      outlook: "نظرة مستقبلية",
    },
    short: {
      understanding: "المفهوم",
      banking: "الخدمات المصرفية",
      egypt: "مصر",
      digitalFinance: "التمويل الرقمي",
    },
  },
  items: {
    understanding: {
      label: "فهم الشمول المالي",
      blurb: "ما معناه، والشروط الأربعة التي تحدده.",
    },
    banking: {
      label: "تعرف على خياراتك المصرفية",
      blurb: "الحسابات والبطاقات والمحافظ بلغة بسيطة وواضحة.",
    },
    egypt: {
      label: "الشمول المالي في مصر",
      blurb: "الصورة الوطنية، مقيسة بطريقتين مختلفتين.",
    },
    ruralUrban: {
      label: "الريف والحضر في مصر",
      blurb: "بيئتان مختلفتان، وعقبات مختلفة — وما الذي يساعد.",
    },
    challenges: {
      label: "التحديات",
      blurb: "ثماني عقبات، وأهميتها، وما يمكن عمله تجاهها.",
    },
    digitalFinance: {
      label: "التمويل الرقمي",
      blurb: "كيف يصبح هاتفك بوابة إلى الخدمات المالية.",
    },
    fintech: {
      label: "التكنولوجيا المالية في مصر",
      blurb: "المجالات، والجهات الفاعلة، ومن يستفيد.",
    },
    women: {
      label: "المرأة والشمول المالي",
      blurb: "أين تقع الفجوة بين الجنسين، وأين بدأت تضيق.",
    },
    smallBusiness: {
      label: "المشروعات الصغيرة",
      blurb: "المشروعات متناهية الصغر والصغيرة والتمويل والقطاع غير الرسمي.",
    },
    egyptVsIndia: {
      label: "مصر والهند",
      blurb: "مقارنة متكافئة عبر عشرة مؤشرات.",
    },
    future: {
      label: "مستقبل الشمول المالي",
      blurb: "رؤية واقعية لمصر حتى عام 2030.",
    },
    sources: {
      label: "المصادر",
      blurb: "كل رقم على هذا الموقع، موثقًا بمصدره.",
    },
  },
  footer: {
    description:
      "مورد تعليمي يوضح كيف يرتبط الأفراد والمشروعات والمجتمعات في مصر بالنظام المالي — مبني على بيانات منشورة من البنك الدولي والبنك المركزي المصري وصندوق النقد الدولي وجهات حكومية مصرية.",
    reviewSources: "اطّلع على جميع المصادر",
    disclaimer:
      "مشروع تعليمي. الأرقام منقولة عن مصادر منشورة. لا يقدم هذا الموقع استشارات مالية ولا يروّج لأي بنك أو جهة مقدمة للخدمة.",
    dataNote: "البيانات محدّثة حتى الفترات المذكورة بجوار كل رقم.",
  },
  ui: {
    opensInNewTab: "(يفتح في نافذة جديدة)",
    selectTopic: "اختر موضوعًا",
    chooseSetting: "اختر البيئة",
    stageOf: "المرحلة {current} من {total}",
    ppGap: "فجوة {value} نقطة مئوية",
    theProblem: "المشكلة",
    whyItMatters: "لماذا تهم",
    possibleSolution: "حل ممكن",
    problem: "المشكلة",
    howInclusionHelps: "كيف يمكن للشمول المالي أن يساعد",
    adults15: "البالغون من عمر 15 عامًا فأكثر.",
    visitSource: "زيارة المصدر",
    before: "قبل",
    after: "بعد",
    egypt: "مصر",
    india: "الهند",
    women: "النساء",
    men: "الرجال",
  },
  cta: {
    bankAwareness: {
      title: "هل أنت مستعد لفهم خياراتك المالية؟",
      description:
        "تعرّف على كيفية عمل الحسابات والبطاقات والمدفوعات الرقمية فعليًا — ثم قرّر بنفسك، مستندًا إلى معلومات موثوقة.",
      exploreBanking: "استكشف الخدمات المصرفية",
      learnDigital: "تعرّف على التمويل الرقمي",
      compare: "قارن بين مصر والهند",
    },
    startJourney: "ابدأ رحلتك نحو الشمول المالي",
    learnBeforeChoose: "تعلّم قبل أن تختار",
    understandOptions: "افهم خياراتك المالية",
  },
  trust: {
    eyebrow: "الثقة والمصداقية",
    title: "تعلّم من مصادر موثوقة",
    description:
      "لا شيء في هذا الموقع من تأليفنا. كل رقم مأخوذ من جهة منشورة، ومُوضَّح بالفترة التي يغطيها، ومرتبط بالجهة الناشرة حتى تتمكن من التحقق منه بنفسك.",
    items: [
      {
        name: "البنك المركزي المصري",
        role: "بيانات واستراتيجية الشمول المالي في مصر.",
      },
      {
        name: "البنك الدولي",
        role: "مسح المؤشر العالمي للشمول المالي حول استخدام الأفراد للمال.",
      },
      {
        name: "صندوق النقد الدولي",
        role: "بيانات الفروع وماكينات الصراف والوكلاء المُبلغ عنها رسميًا.",
      },
      {
        name: "الجهات الحكومية المصرية",
        role: "جهاز تنمية المشروعات، ورؤية مصر 2030، والهيئات الرسمية.",
      },
    ],
    seeAll: "اطّلع على قائمة المصادر كاملة",
  },
  project: {
    logoAlt: "شعار البنك الأهلي المصري",
    createdBy: "إعداد متدربي إدارة الائتمان",
    org: "البنك الأهلي المصري (NBE)",
    footerLine:
      "مشروع تثقيفي من إعداد متدربي إدارة الائتمان في البنك الأهلي المصري (NBE).",
    aboutEyebrow: "عن المشروع",
    aboutTitle: "عن هذا المشروع",
    aboutBody:
      "تم إعداد هذا المشروع التثقيفي بواسطة متدربي إدارة الائتمان في البنك الأهلي المصري (NBE) بهدف زيادة الوعي بالشمول المالي، والتمويل الرقمي، وأهمية الوصول إلى الخدمات المالية الرسمية في مصر.",
    notOfficial:
      "هذا مشروع تثقيفي توعوي. وهو ليس منصة مصرفية رسمية تابعة للبنك الأهلي المصري، ولا يمكن فتح حساب من خلاله، ولا يقدم استشارات مالية ولا يضمن أي نتيجة مالية.",
  },
  disclaimer: {
    short:
      "هذا الموقع تعليمي. لا يقدّم استشارات مالية، ولا يروّج لأي بنك، ولا يمكنه أن يَعِد بأي نتيجة مالية.",
  },
};

export const common: Record<Locale, CommonDict> = { en, ar };
