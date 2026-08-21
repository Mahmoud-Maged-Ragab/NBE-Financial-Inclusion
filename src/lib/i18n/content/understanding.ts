import type { Locale } from "../config";

const en = {
  meta: {
    title: "Understanding Financial Inclusion",
    description:
      "What financial inclusion means, the ladder from unbanked to financially resilient, and why two credible sources report different numbers for the same country.",
  },
  hero: {
    eyebrow: "Foundations",
    title: "Understanding financial inclusion",
    description:
      "Financial inclusion is a simple idea with a careful definition. This page explains what it means, what it does not mean, and why two trusted institutions can publish very different numbers for the same country in the same year.",
  },
  definition: {
    eyebrow: "Definition",
    title: "A working definition",
    quote:
      "Financial inclusion means that individuals and businesses have access to useful and affordable financial products and services that meet their needs — transactions, payments, savings, credit and insurance — delivered in a responsible and sustainable way.",
    attribution:
      "The formulation used by the World Bank, and the one this site works from.",
    bodyIntro: "Four words in that sentence do most of the work.",
    terms: [
      { term: "Access", gloss: "means the service can be reached." },
      {
        term: "Affordable",
        gloss: "means it is worth having on the income a person actually earns.",
      },
      {
        term: "Needs",
        gloss:
          "means the product fits the life it is sold into — seasonal income, irregular work, small amounts.",
      },
      {
        term: "Responsible",
        gloss: "means the provider will still be there, and still able to pay, in ten years.",
      },
    ],
  },
  misconceptions: [
    {
      icon: "circleSlash",
      title: "It is not the same as having a bank account",
      body: "An account is the entry point, not the destination. A dormant account with no balance and no transactions delivers almost none of the benefits inclusion is supposed to produce. This is why the gap between Egypt's 43.1% account ownership and its 18.5% card or phone payment rate matters more than either figure alone.",
    },
    {
      icon: "scale",
      title: "It is not about pushing credit",
      body: "Lending to people who cannot repay is not inclusion. Responsible inclusion means credit assessed against real capacity to repay, alongside savings, payments and insurance — which are often the more useful products, and almost always the safer ones.",
    },
    {
      icon: "wallet",
      title: "It is not only about poverty",
      body: "Exclusion tracks income, but it is not reducible to it. Documentation requirements, distance, digital confidence and simple distrust all keep people outside the system who could otherwise afford to be inside it.",
    },
  ],
  ladder: {
    eyebrow: "A progression, not a switch",
    title: "From excluded to financially resilient",
    description:
      "Financial inclusion is usually reported as a single percentage, which makes it sound binary. It is closer to a ladder, and most of the value sits on the upper rungs. Select a stage to read what it involves.",
    steps: [
      {
        id: "excluded",
        icon: "banknote",
        label: "Financially excluded",
        detail:
          "No account of any kind. Wages, if there are any, arrive as cash. Money is stored at home, sent through people who are travelling anyway, and borrowed from family or neighbours. Nothing that happens leaves a record a bank would recognise.",
      },
      {
        id: "account",
        icon: "landmark",
        label: "Has an account",
        detail:
          "An account exists — at a bank, at Egypt Post, or as a mobile wallet. This is the threshold most headline statistics measure. It is a real step, but on its own it says nothing about whether the account is used.",
      },
      {
        id: "using",
        icon: "repeat",
        label: "Uses it regularly",
        detail:
          "The account becomes part of daily life: wages paid into it, bills paid out of it, money sent to relatives through it. This is the point at which an account starts to generate a transaction history.",
      },
      {
        id: "saving",
        icon: "piggyBank",
        label: "Saves and borrows formally",
        detail:
          "Money is set aside in the account rather than just passing through, and credit becomes possible to apply for on the strength of a record. In Egypt the numbers thin out sharply here: 13.8% of adults save formally and 10.4% borrow formally.",
      },
      {
        id: "resilient",
        icon: "shield",
        label: "Financially resilient",
        detail:
          "Insurance, savings and emergency credit mean an unexpected cost is absorbed rather than becoming a crisis. Globally, 56% of adults say they could reliably access extra money in an emergency. This is what inclusion is aiming at — not account ownership for its own sake.",
      },
    ],
  },
  measurement: {
    eyebrow: "Measurement",
    title: "Why the numbers disagree",
    description:
      "Throughout this site you will see two headline figures for Egypt that look contradictory. They are not. They measure different things, and both are correct on their own terms.",
    supply: {
      tag: "Supply side",
      value: "79%",
      title: "Central Bank of Egypt",
      body: "Counts Egyptians aged 15 and above who hold an active account of any kind — bank accounts, Egypt Post accounts, mobile wallets and prepaid cards — using records reported by the institutions themselves. On this basis 56.4 million of 71.4 million eligible citizens were included as at June 2026.",
      points: [
        "Broad definition of what counts as an account",
        "Drawn from institutional records, not interviews",
        "One person may hold several products",
      ],
    },
    demand: {
      tag: "Demand side",
      value: "43.1%",
      title: "World Bank Global Findex",
      body: "Asks a nationally representative sample of adults, in person, whether they personally have an account at a financial institution or with a mobile money provider. The 2025 edition surveyed roughly 145,000 adults across 141 economies, with Egyptian fieldwork carried out during 2024.",
      points: [
        "Narrower, individual-level definition",
        "Directly comparable across 141 countries",
        "Captures whether people know and use what they hold",
      ],
    },
    readTogetherLabel: "How to read them together:",
    readTogether:
      "the Central Bank figure describes how far the infrastructure now reaches — a genuine achievement, given it stood far lower a decade ago. The World Bank figure describes how many people experience themselves as having an account they use. The distance between the two is roughly the size of Egypt's remaining task: turning distributed products into everyday financial lives.",
  },
  cta: {
    title: "Now see what a bank account actually does",
    description:
      "Accounts, cards, wallets and digital payments explained in plain language — including what to check before you choose.",
    primary: "Know your banking options",
    secondary: "See the Egyptian data",
  },
};

export type UnderstandingDict = typeof en;

const ar: UnderstandingDict = {
  meta: {
    title: "فهم الشمول المالي",
    description:
      "ما معنى الشمول المالي، وسلّم الانتقال من خارج النظام المصرفي إلى المرونة المالية، ولماذا تنشر جهتان موثوقتان أرقامًا مختلفة للبلد نفسه.",
  },
  hero: {
    eyebrow: "الأساسيات",
    title: "فهم الشمول المالي",
    description:
      "الشمول المالي فكرة بسيطة لها تعريف دقيق. تشرح هذه الصفحة ما يعنيه، وما لا يعنيه، ولماذا قد تنشر مؤسستان موثوقتان أرقامًا مختلفة تمامًا عن البلد نفسه في العام نفسه.",
  },
  definition: {
    eyebrow: "التعريف",
    title: "تعريف عملي",
    quote:
      "الشمول المالي يعني أن يتمكن الأفراد والمشروعات من الوصول إلى منتجات وخدمات مالية مفيدة وميسورة التكلفة تلبي احتياجاتهم — المعاملات والمدفوعات والادخار والائتمان والتأمين — تُقدَّم بطريقة مسؤولة ومستدامة.",
    attribution: "الصيغة التي يعتمدها البنك الدولي، وهي المعتمدة في هذا الموقع.",
    bodyIntro: "أربع كلمات في هذه الجملة تحمل معظم المعنى.",
    terms: [
      { term: "الوصول", gloss: "يعني إمكانية بلوغ الخدمة فعليًا." },
      {
        term: "ميسورة التكلفة",
        gloss: "تعني أنها تستحق الاحتفاظ بها بالنسبة للدخل الفعلي للشخص.",
      },
      {
        term: "الاحتياجات",
        gloss:
          "تعني أن المنتج يناسب الحياة التي يُقدَّم لها — دخل موسمي، وعمل غير منتظم، ومبالغ صغيرة.",
      },
      {
        term: "مسؤولة",
        gloss: "تعني أن مقدم الخدمة سيظل قائمًا وقادرًا على الوفاء بعد عشر سنوات.",
      },
    ],
  },
  misconceptions: [
    {
      icon: "circleSlash",
      title: "ليس مجرد امتلاك حساب بنكي",
      body: "الحساب هو نقطة الدخول لا الوجهة. فالحساب الخامل بلا رصيد ولا معاملات لا يحقق تقريبًا أيًّا من فوائد الشمول المالي. ولهذا فإن الفجوة بين نسبة امتلاك الحسابات في مصر البالغة 43.1% ونسبة الدفع ببطاقة أو هاتف البالغة 18.5% أهم من كل رقم منهما على حدة.",
    },
    {
      icon: "scale",
      title: "ليس دفعًا نحو الاقتراض",
      body: "إقراض من لا يستطيعون السداد ليس شمولًا ماليًا. فالشمول المسؤول يعني ائتمانًا يُقيَّم وفق القدرة الحقيقية على السداد، إلى جانب الادخار والمدفوعات والتأمين — وهي غالبًا المنتجات الأنفع، والأكثر أمانًا دائمًا تقريبًا.",
    },
    {
      icon: "wallet",
      title: "ليس مرتبطًا بالفقر وحده",
      body: "الاستبعاد يرتبط بالدخل لكنه لا يُختزل فيه. فمتطلبات المستندات، والمسافة، والثقة في الوسائل الرقمية، وعدم الثقة عمومًا، كلها تُبقي خارج النظام أشخاصًا كان بوسعهم تحمل تكلفة الدخول إليه.",
    },
  ],
  ladder: {
    eyebrow: "تدرّج وليس مفتاحًا",
    title: "من الاستبعاد إلى المرونة المالية",
    description:
      "يُعرض الشمول المالي عادةً كنسبة واحدة، مما يوحي بأنه إما نعم أو لا. لكنه أقرب إلى سلّم، ومعظم القيمة تقع في درجاته العليا. اختر مرحلة لتقرأ ما تتضمنه.",
    steps: [
      {
        id: "excluded",
        icon: "banknote",
        label: "خارج النظام المالي",
        detail:
          "لا يوجد حساب من أي نوع. الأجر، إن وُجد، يصل نقدًا. المال يُحفظ في المنزل، ويُرسل مع مسافرين، ويُقترض من الأهل أو الجيران. ولا شيء مما يحدث يترك سجلًا يعترف به بنك.",
      },
      {
        id: "account",
        icon: "landmark",
        label: "يملك حسابًا",
        detail:
          "يوجد حساب — في بنك، أو البريد المصري، أو محفظة إلكترونية. وهذه هي العتبة التي تقيسها معظم الإحصاءات الرئيسية. خطوة حقيقية، لكنها وحدها لا تخبرنا إن كان الحساب يُستخدم.",
      },
      {
        id: "using",
        icon: "repeat",
        label: "يستخدمه بانتظام",
        detail:
          "يصبح الحساب جزءًا من الحياة اليومية: الأجر يدخل إليه، والفواتير تُسدد منه، والأموال تُرسل للأقارب عبره. وعند هذه النقطة يبدأ الحساب في تكوين سجل معاملات.",
      },
      {
        id: "saving",
        icon: "piggyBank",
        label: "يدّخر ويقترض رسميًا",
        detail:
          "يُجنَّب المال في الحساب بدل أن يمر به فقط، ويصبح التقدم بطلب ائتمان ممكنًا استنادًا إلى السجل. وفي مصر تتراجع الأرقام بشدة هنا: 13.8% يدّخرون رسميًا و10.4% يقترضون رسميًا.",
      },
      {
        id: "resilient",
        icon: "shield",
        label: "مرونة مالية",
        detail:
          "التأمين والمدخرات وائتمان الطوارئ تعني أن التكلفة غير المتوقعة تُمتص بدل أن تتحول إلى أزمة. وعالميًا، يقول 56% من البالغين إنهم يستطيعون تدبير مال إضافي عند الطوارئ. وهذا هو هدف الشمول المالي — لا امتلاك الحساب في حد ذاته.",
      },
    ],
  },
  measurement: {
    eyebrow: "القياس",
    title: "لماذا تختلف الأرقام",
    description:
      "ستجد في هذا الموقع رقمين رئيسيين لمصر يبدوان متناقضين. وهما ليسا كذلك. فكل منهما يقيس شيئًا مختلفًا، وكلاهما صحيح وفق تعريفه.",
    supply: {
      tag: "من جانب العرض",
      value: "79%",
      title: "البنك المركزي المصري",
      body: "يحصي المصريين من عمر 15 عامًا فأكثر ممن يملكون حسابًا نشطًا من أي نوع — حسابات بنكية أو حسابات البريد المصري أو محافظ إلكترونية أو بطاقات مسبقة الدفع — بالاعتماد على سجلات تُبلغ عنها المؤسسات نفسها. وعلى هذا الأساس كان 56.4 مليون من إجمالي 71.4 مليون مواطن مؤهل مشمولين حتى يونيو 2026.",
      points: [
        "تعريف واسع لما يُعد حسابًا",
        "مستمد من سجلات المؤسسات لا من المقابلات",
        "قد يملك الشخص الواحد عدة منتجات",
      ],
    },
    demand: {
      tag: "من جانب الطلب",
      value: "43.1%",
      title: "المؤشر العالمي للشمول المالي",
      body: "يسأل عينة ممثلة وطنيًا من البالغين، وجهًا لوجه، عمّا إذا كانوا يملكون شخصيًا حسابًا لدى مؤسسة مالية أو مقدم خدمة محفظة إلكترونية. وقد شملت نسخة 2025 نحو 145 ألف بالغ في 141 اقتصادًا، وأُجري العمل الميداني في مصر خلال 2024.",
      points: [
        "تعريف أضيق على مستوى الفرد",
        "قابل للمقارنة مباشرة عبر 141 دولة",
        "يرصد ما إذا كان الناس يعرفون ما يملكونه ويستخدمونه",
      ],
    },
    readTogetherLabel: "كيف نقرأ الرقمين معًا:",
    readTogether:
      "رقم البنك المركزي يصف مدى اتساع البنية التحتية اليوم — وهو إنجاز حقيقي بالنظر إلى ما كان عليه قبل عقد. أما رقم البنك الدولي فيصف عدد من يشعرون فعلًا بأنهم يملكون حسابًا يستخدمونه. والمسافة بين الرقمين تقارب حجم المهمة المتبقية أمام مصر: تحويل المنتجات الموزعة إلى حياة مالية يومية.",
  },
  cta: {
    title: "والآن، ما الذي يفعله الحساب البنكي فعليًا",
    description:
      "الحسابات والبطاقات والمحافظ والمدفوعات الرقمية بلغة بسيطة — بما في ذلك ما ينبغي التحقق منه قبل أن تختار.",
    primary: "تعرف على خياراتك المصرفية",
    secondary: "اطّلع على بيانات مصر",
  },
};

export const understanding: Record<Locale, UnderstandingDict> = { en, ar };
