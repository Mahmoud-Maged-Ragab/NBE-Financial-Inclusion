import type { Locale } from "../config";

const en = {
  meta: {
    title: "Egypt vs India",
    description:
      "A like-for-like comparison of financial inclusion in Egypt and India across ten indicators, using World Bank Global Findex data from the same survey round.",
  },
  hero: {
    eyebrow: "Outlook",
    title: "Egypt and India compared",
    description:
      "Both countries entered the 2010s with large rural populations, extensive informal economies and low account ownership. Ten indicators from the same World Bank survey round show where they now stand.",
    caption:
      "Adults aged 15+ holding an account, World Bank Global Findex, 2024 survey round.",
  },
  thesis: {
    eyebrow: "The finding",
    quote:
      "Both countries face challenges involving rural communities, financial literacy, and informal economic activity. However, India has made significant progress in integrating digital technology into everyday financial transactions.",
    body: "Every element of that statement is supported by the indicators below. India's account ownership stands at 89.0% against Egypt's 43.1%, its rural rate exceeds its urban rate, and its gender gap has effectively closed. Both countries retain substantial informal sectors and clear education-linked gaps in inclusion.",
  },
  trend: {
    eyebrow: "Fourteen years",
    title: "Two different trajectories",
    description:
      "India crossed 50% account ownership between 2011 and 2014. Egypt reached 43.1% in 2024. The gap has been present throughout, and has widened rather than closed.",
    caption:
      "Adults aged 15+ with an account at a financial institution or mobile money provider.",
  },
  comparison: {
    eyebrow: "Ten indicators",
    title: "Side by side",
    description:
      "All figures come from the same World Bank survey round, so the comparison is like for like. The final two indicators reverse the pattern of the first eight.",
    egyptLeads: {
      title: "Where Egypt leads",
      body: "Egypt is ahead of India on mobile phone ownership, 84.6% against 66.5%, and on smartphone ownership, 55.7% against 42.0%. On the physical prerequisite for digital finance, Egypt is the better equipped of the two countries.",
    },
    indiaLeads: {
      title: "Where India leads",
      body: "India is ahead on every measure of financial behaviour: account ownership, rural inclusion, women's inclusion, digital payment use, formal saving and formal borrowing. It also pays utility bills in cash at roughly half the Egyptian rate.",
    },
  },
  reversal: {
    eyebrow: "The most useful comparison",
    title: "More phones, fewer accounts",
    description:
      "This inversion is the most instructive thing in the comparison, and it points at what the constraint in Egypt is not.",
    body1:
      "If device access were the binding constraint on digital financial inclusion, Egypt would be ahead. It is not. India reached 89.0% account ownership and 27.7% card or phone payment use with lower phone ownership and markedly lower smartphone ownership than Egypt.",
    body2:
      "What separates them is not hardware. It is that India built identity, accounts and payment rails as a connected system, then routed everyday obligations — wages, subsidies, pensions, merchant payments — through it. Accounts became used because there was a reason to use them.",
    body3:
      "For Egypt this is a comparatively encouraging diagnosis. The expensive, slow layer is already in place.",
    chartTitle: "Devices against usage",
    rows: {
      phone: "Own a mobile phone",
      smartphone: "Main phone is a smartphone",
      account: "Have an account",
      accountNote:
        "The ranking inverts here, and stays inverted for every behavioural indicator.",
      pay: "Pay with a card or phone",
    },
  },
  mechanism: {
    eyebrow: "Mechanism",
    title: "What India actually did",
    description:
      "India's approach is usually described as three components that only work together. Each addresses a different one of the barriers documented on this site.",
    items: [
      {
        icon: "landmark",
        title: "Accounts opened at scale",
        body: "The Pradhan Mantri Jan Dhan Yojana had reached 58.77 crore beneficiary accounts — roughly 588 million — by July 2026, holding ₹3.12 lakh crore in deposits. Around 77.8% of those accounts are in rural and semi-urban areas.",
        source: "pmjdy",
      },
      {
        icon: "fingerprint",
        title: "A digital identity layer",
        body: "A national biometric identity system made remote account opening and verification possible at very low cost, which is what allowed accounts to be opened in places with no branch and limited documentation.",
        source: "pmjdy",
      },
      {
        icon: "repeat",
        title: "A public payment rail",
        body: "The Unified Payments Interface processed 18,587 crore transactions — about 186 billion — in FY 2024–25, and now carries the large majority of India's retail payment volume. It is free at the point of use for individuals.",
        source: "npciUpi",
      },
      {
        icon: "users",
        title: "Accounts held by women",
        body: "Roughly 55.7% of Jan Dhan accounts are held by women, and government transfers were deliberately routed into them. India's gender gap in account ownership has since closed entirely.",
        source: "pmjdy",
      },
    ],
    note: {
      label: "The sequence matters more than any single component.",
      body: "Accounts alone produce dormancy. Identity alone produces a database. A payment rail alone serves people who already transact. India's result came from opening accounts, making them verifiable, giving them something to do, and then routing obligations people already had through them.",
    },
  },
  caveats: {
    eyebrow: "Read with care",
    title: "Where the comparison does not transfer",
    description:
      "India is a useful reference, not a template. Four differences bear directly on how far its approach could be replicated.",
    items: [
      {
        t: "Scale changes the economics",
        b: "India's population is more than ten times Egypt's. Fixed investment in national payment infrastructure is amortised across a far larger base, which alters what is affordable per user.",
      },
      {
        t: "Account ownership is not the whole story",
        b: "India's own commentary highlights account inactivity as a continuing issue. Ownership at 89.0% coexists with digitally enabled account ownership of 31.1% — high access, more moderate depth.",
      },
      {
        t: "Egypt starts from a different structure",
        b: "Egypt's inclusion measure already counts mobile wallets and prepaid cards, and its Central Bank reports 79% inclusion on that basis. The two countries are not simply at different points on one path.",
      },
      {
        t: "Both still have real gaps",
        b: "India's account ownership by education runs 87.1% against 93.1%, and only 15.1% of adults borrow formally. Convergence on account ownership has not eliminated differences in use.",
      },
    ],
  },
  cta: {
    title: "What could realistically change by 2030",
    description:
      "Not science fiction — the specific opportunities Egypt's existing infrastructure and strategy make plausible over the next decade.",
    primary: "The future of financial inclusion",
    secondary: "Review every source",
  },
};

export type EgyptVsIndiaDict = typeof en;

const ar: EgyptVsIndiaDict = {
  meta: {
    title: "مصر والهند",
    description:
      "مقارنة متكافئة للشمول المالي بين مصر والهند عبر عشرة مؤشرات، باستخدام بيانات المؤشر العالمي للشمول المالي من جولة المسح نفسها.",
  },
  hero: {
    eyebrow: "نظرة مستقبلية",
    title: "مقارنة بين مصر والهند",
    description:
      "دخل البلدان عقد 2010 بتجمعات ريفية كبيرة، واقتصادات غير رسمية واسعة، وامتلاك منخفض للحسابات. وعشرة مؤشرات من جولة المسح نفسها للبنك الدولي تبيّن أين يقفان اليوم.",
    caption:
      "البالغون من عمر 15 عامًا فأكثر ممن يملكون حسابًا، المؤشر العالمي للشمول المالي، جولة مسح 2024.",
  },
  thesis: {
    eyebrow: "الخلاصة",
    quote:
      "يواجه البلدان تحديات تتعلق بالمجتمعات الريفية والثقافة المالية والنشاط الاقتصادي غير الرسمي. غير أن الهند حققت تقدمًا كبيرًا في دمج التكنولوجيا الرقمية في المعاملات المالية اليومية.",
    body: "كل عنصر في هذه العبارة تدعمه المؤشرات أدناه. فامتلاك الحسابات في الهند يبلغ 89.0% مقابل 43.1% في مصر، ومعدلها الريفي يفوق الحضري، وفجوتها بين الجنسين أُغلقت فعليًا. وفي الوقت نفسه يحتفظ البلدان بقطاعات غير رسمية كبيرة وفجوات واضحة مرتبطة بالتعليم.",
  },
  trend: {
    eyebrow: "أربعة عشر عامًا",
    title: "مساران مختلفان",
    description:
      "تجاوزت الهند نسبة 50% في امتلاك الحسابات بين 2011 و2014. أما مصر فبلغت 43.1% في 2024. والفجوة قائمة طوال الفترة، وقد اتسعت بدل أن تضيق.",
    caption:
      "البالغون من عمر 15 عامًا فأكثر ممن يملكون حسابًا لدى مؤسسة مالية أو مقدم خدمة محفظة إلكترونية.",
  },
  comparison: {
    eyebrow: "عشرة مؤشرات",
    title: "جنبًا إلى جنب",
    description:
      "جميع الأرقام مأخوذة من جولة المسح نفسها للبنك الدولي، فالمقارنة متكافئة. والمؤشران الأخيران يعكسان النمط السائد في المؤشرات الثمانية الأولى.",
    egyptLeads: {
      title: "أين تتقدم مصر",
      body: "تتقدم مصر على الهند في امتلاك الهاتف المحمول، 84.6% مقابل 66.5%، وفي امتلاك الهاتف الذكي، 55.7% مقابل 42.0%. وفي الشرط المادي المسبق للتمويل الرقمي، تعد مصر الأفضل تجهيزًا بين البلدين.",
    },
    indiaLeads: {
      title: "أين تتقدم الهند",
      body: "تتقدم الهند في كل مقياس للسلوك المالي: امتلاك الحسابات، والشمول في الريف، وشمول النساء، واستخدام الدفع الرقمي، والادخار والاقتراض الرسميين. كما أن نسبة سداد فواتير المرافق نقدًا فيها نحو نصف نظيرتها المصرية.",
    },
  },
  reversal: {
    eyebrow: "أكثر المقارنات فائدة",
    title: "هواتف أكثر، وحسابات أقل",
    description:
      "هذا الانعكاس هو أكثر ما يفيدنا في المقارنة، وهو يشير إلى ما ليس هو القيد في مصر.",
    body1:
      "لو كان الوصول إلى الأجهزة هو القيد الحاسم على الشمول المالي الرقمي، لكانت مصر في المقدمة. وهي ليست كذلك. فقد بلغت الهند 89.0% في امتلاك الحسابات و27.7% في الدفع ببطاقة أو هاتف، بامتلاك أقل للهواتف وامتلاك أقل بوضوح للهواتف الذكية مقارنة بمصر.",
    body2:
      "ما يفصل بينهما ليس الأجهزة، بل أن الهند بنت الهوية والحسابات وقنوات المدفوعات كمنظومة مترابطة، ثم وجّهت الالتزامات اليومية عبرها — الأجور والدعم والمعاشات ومدفوعات التجار. فصارت الحسابات مستخدَمة لأن هناك سببًا لاستخدامها.",
    body3:
      "وبالنسبة لمصر يعد هذا تشخيصًا مشجعًا نسبيًا. فالطبقة الأعلى كلفة والأبطأ بناءً موجودة بالفعل.",
    chartTitle: "الأجهزة مقابل الاستخدام",
    rows: {
      phone: "امتلاك هاتف محمول",
      smartphone: "الهاتف الأساسي هاتف ذكي",
      account: "امتلاك حساب",
      accountNote: "ينعكس الترتيب هنا، ويظل معكوسًا في كل مؤشر سلوكي.",
      pay: "الدفع ببطاقة أو هاتف",
    },
  },
  mechanism: {
    eyebrow: "الآلية",
    title: "ما الذي فعلته الهند بالضبط",
    description:
      "يُوصف نهج الهند عادةً بثلاثة مكونات لا تعمل إلا مجتمعة. ويعالج كل منها عقبة مختلفة من العقبات الموثقة في هذا الموقع.",
    items: [
      {
        icon: "landmark",
        title: "فتح الحسابات على نطاق واسع",
        body: "بلغ برنامج «جان دان» 58.77 كرور حساب مستفيد — نحو 588 مليونًا — بحلول يوليو 2026، بودائع قدرها 3.12 لكح كرور روبية. ونحو 77.8% من هذه الحسابات في مناطق ريفية وشبه حضرية.",
        source: "pmjdy",
      },
      {
        icon: "fingerprint",
        title: "طبقة هوية رقمية",
        body: "أتاح نظام هوية بيومترية وطني فتح الحسابات والتحقق منها عن بُعد بتكلفة منخفضة جدًا، وهو ما سمح بفتح حسابات في أماكن بلا فروع وبمستندات محدودة.",
        source: "pmjdy",
      },
      {
        icon: "repeat",
        title: "قناة مدفوعات عامة",
        body: "عالجت واجهة المدفوعات الموحدة 18,587 كرور معاملة — نحو 186 مليار — في السنة المالية 2024–25، وهي تحمل اليوم الغالبية العظمى من حجم مدفوعات التجزئة في الهند. وهي مجانية عند الاستخدام للأفراد.",
        source: "npciUpi",
      },
      {
        icon: "users",
        title: "حسابات باسم النساء",
        body: "نحو 55.7% من حسابات «جان دان» تملكها نساء، ووُجهت التحويلات الحكومية إليها عن قصد. وقد أُغلقت فجوة الهند بين الجنسين في امتلاك الحسابات تمامًا منذ ذلك الحين.",
        source: "pmjdy",
      },
    ],
    note: {
      label: "الترتيب أهم من أي مكوّن منفرد.",
      body: "الحسابات وحدها تنتج خمولًا. والهوية وحدها تنتج قاعدة بيانات. وقناة المدفوعات وحدها تخدم من يتعاملون ماليًا بالفعل. أما نتيجة الهند فجاءت من فتح الحسابات، ثم جعلها قابلة للتحقق، ثم منحها ما تفعله، ثم توجيه التزامات قائمة بالفعل عبرها.",
    },
  },
  caveats: {
    eyebrow: "اقرأ بتمعّن",
    title: "أين لا تنتقل المقارنة",
    description:
      "الهند مرجع مفيد لا قالب جاهز. وأربعة فوارق تؤثر مباشرة في مدى إمكانية تكرار نهجها.",
    items: [
      {
        t: "الحجم يغيّر الاقتصاديات",
        b: "عدد سكان الهند يفوق مصر بأكثر من عشرة أضعاف. والاستثمار الثابت في البنية التحتية الوطنية للمدفوعات يُوزَّع على قاعدة أكبر بكثير، مما يغيّر ما هو ميسور التكلفة لكل مستخدم.",
      },
      {
        t: "امتلاك الحساب ليس القصة كاملة",
        b: "تُبرز التعليقات الهندية نفسها خمول الحسابات كإشكال مستمر. فامتلاك بنسبة 89.0% يتعايش مع امتلاك حسابات مفعَّلة رقميًا بنسبة 31.1% — وصول مرتفع وعمق أكثر اعتدالًا.",
      },
      {
        t: "مصر تنطلق من بنية مختلفة",
        b: "مقياس الشمول في مصر يحتسب بالفعل المحافظ الإلكترونية والبطاقات مسبقة الدفع، ويفيد بنكها المركزي بنسبة شمول 79% على هذا الأساس. فالبلدان ليسا ببساطة عند نقطتين مختلفتين على مسار واحد.",
      },
      {
        t: "ما زالت لدى الاثنين فجوات حقيقية",
        b: "امتلاك الحسابات في الهند بحسب التعليم يبلغ 87.1% مقابل 93.1%، ولا يقترض رسميًا سوى 15.1% من البالغين. فالتقارب في امتلاك الحسابات لم يُلغِ الفوارق في الاستخدام.",
      },
    ],
  },
  cta: {
    title: "ما الذي يمكن أن يتغير واقعيًا بحلول 2030",
    description:
      "ليس خيالًا علميًا — بل الفرص المحددة التي تجعلها البنية التحتية القائمة في مصر واستراتيجيتها معقولة خلال العقد المقبل.",
    primary: "مستقبل الشمول المالي",
    secondary: "اطّلع على جميع المصادر",
  },
};

export const egyptVsIndia: Record<Locale, EgyptVsIndiaDict> = { en, ar };
