import type { Locale } from "../config";

const en = {
  meta: {
    title: "Banking, Explained Simply",
    description:
      "Never used a bank before? Learn what a bank does, how an account works, what digital payments are, and how financial inclusion is going in Egypt — all in plain language.",
  },
  hero: {
    badge: "An educational resource built on published data",
    title: "Your First Step Into the World of Banking",
    subtitle:
      "Not sure how banks work? You're in the right place. Learn the basics of banking, financial inclusion, digital payments, and managing your money — in simple language.",
    primaryCta: "Start learning",
    secondaryCta: "Why does banking matter?",
    journeyLabel: "Where your money can go",
    journey: [
      "Cash only",
      "A bank account",
      "Paying by phone",
      "Saving",
      "More options",
    ],
  },
  message: {
    quote:
      "Financial inclusion isn't just about having a bank account — it's about having more opportunities, security, and control over your money.",
  },
  why: {
    eyebrow: "The practical case",
    title: "Why open a bank account?",
    description:
      "Six things an account changes about how you hold and move money. Select one to read more.",
    note: "An account is a tool, not a guarantee. What it offers is more options — it does not promise any particular financial result, and terms differ between banks.",
    cards: [
      {
        id: "security",
        icon: "lock",
        title: "Security",
        summary: "Keep your money safer than carrying large amounts of cash.",
        detail:
          "Cash that is lost or stolen is usually gone for good. Money held in a regulated account is protected by the rules that govern the institution holding it, and it cannot be taken from your pocket.",
        points: [
          "No need to carry or store large sums at home",
          "Held by an institution supervised by the Central Bank",
          "Access controlled by a PIN or password you set",
          "A lost card can be stopped; lost cash cannot",
        ],
      },
      {
        id: "convenience",
        icon: "smartphone",
        title: "Convenience",
        summary:
          "Send, receive, and manage money without always visiting a branch.",
        detail:
          "Much of what once required a branch visit can be done from a phone: checking a balance, transferring money, paying a bill. For anyone whose nearest branch is far away, this is the difference between a half-day trip and a task that takes a minute.",
        points: [
          "Transfers that arrive in seconds, not days",
          "Balances and history available at any hour",
          "No travel cost and no lost working time",
          "Money sent to family in another governorate quickly",
        ],
      },
      {
        id: "saving",
        icon: "piggyBank",
        title: "Saving",
        summary: "Use formal financial tools to organise and build your savings.",
        detail:
          "Saving at home is possible but difficult: the money is always within reach, and it is exposed to loss. An account separates what you are saving from what you are spending, which makes a plan easier to keep.",
        points: [
          "Savings kept apart from everyday spending money",
          "A clear record of what you have set aside",
          "Different account types suited to different goals",
          "Terms and any returns vary — always check with the bank",
        ],
      },
      {
        id: "payments",
        icon: "qrCode",
        title: "Payments",
        summary: "Pay bills and make purchases through digital channels.",
        detail:
          "Utilities, mobile top-ups, school fees and shopping can be paid digitally. In Egypt 48.4% of adults still pay utility bills in cash only, which usually means queuing in person to do it.",
        points: [
          "Bills paid without queuing or travelling",
          "Card, QR code or app accepted by more merchants",
          "Payments dated and recorded automatically",
          "Fewer problems from not having exact change",
        ],
      },
      {
        id: "access",
        icon: "landmark",
        title: "Access",
        summary:
          "Build a relationship with the formal financial system and access additional services.",
        detail:
          "An account is the entry point to the rest of the financial system. Being a customer of a regulated institution puts other services within reach — though whether you qualify for any particular one is always the provider's decision.",
        points: [
          "A recognised relationship with a regulated institution",
          "Other services become possible to apply for",
          "Wages and government payments can be paid in directly",
          "Eligibility is never automatic and is set by each provider",
        ],
      },
      {
        id: "record",
        icon: "receipt",
        title: "Record",
        summary:
          "Create a formal record of transactions that can make managing your finances easier.",
        detail:
          "Every digital transaction leaves a dated record. That makes it far easier to see where money actually goes, to settle a dispute about whether something was paid, and to demonstrate income when it needs demonstrating.",
        points: [
          "A clear view of income and spending over time",
          "Proof that a payment was made, and when",
          "Useful when income needs to be evidenced",
          "Easier household budgeting from real figures",
        ],
      },
    ],
  },
  imagine: {
    eyebrow: "See the difference",
    title: "Imagine your money without a bank account",
    description:
      "The same everyday situations, handled two ways. Switch between them to compare.",
    beforeLabel: "Cash-only",
    afterLabel: "Bank + digital",
    beforeHeading: "Cash-only",
    afterHeading: "Bank + digital finance",
    switchLabel: "Choose cash-only or bank and digital",
    rows: [
      {
        aspect: "Holding money",
        before: {
          icon: "banknote",
          label: "Carrying physical cash",
          detail:
            "Money is kept on you or at home. It has to be counted, guarded, and replaced by you if it goes missing.",
        },
        after: {
          icon: "wallet",
          label: "Money held in an account",
          detail:
            "Funds sit with a regulated institution and are reached with a card, an app or a wallet on your phone.",
        },
      },
      {
        aspect: "Getting things done",
        before: {
          icon: "landmark",
          label: "Visiting branches or offices",
          detail:
            "Certain services need a physical visit during working hours, which can cost a day's travel and wages.",
        },
        after: {
          icon: "smartphone",
          label: "Online and mobile banking",
          detail:
            "Balances, transfers and bill payments are handled from a phone, at whatever hour suits you.",
        },
      },
      {
        aspect: "Paying",
        before: {
          icon: "circleSlash",
          label: "Limited digital payment options",
          detail:
            "Anything that cannot be paid in cash is difficult, and online purchases are largely out of reach.",
        },
        after: {
          icon: "qrCode",
          label: "Digital payments",
          detail:
            "Bills, shops and online purchases can be paid by card, app or QR code where the merchant accepts them.",
        },
      },
      {
        aspect: "Keeping track",
        before: {
          icon: "search",
          label: "Difficult to track transactions",
          detail:
            "There is no automatic record. Remembering what was spent, and proving what was paid, depends on memory and receipts.",
        },
        after: {
          icon: "receipt",
          label: "Transaction history",
          detail:
            "Every movement is dated and listed, which makes budgeting and settling disputes considerably easier.",
        },
      },
      {
        aspect: "What comes next",
        before: {
          icon: "circleSlash",
          label: "Greater dependence on cash",
          detail:
            "Without a formal record, the rest of the financial system stays largely out of reach.",
        },
        after: {
          icon: "trendingUp",
          label: "Access to further services",
          detail:
            "Being a customer makes other services possible to explore — subject to each provider's own conditions.",
        },
      },
    ],
  },
  what: {
    eyebrow: "The idea",
    title: "What is financial inclusion?",
    description:
      "Financial inclusion means individuals and businesses can reach useful, affordable financial products that meet their needs — payments, savings, credit and insurance — delivered responsibly.",
    body1:
      "In practice it is simpler than the definition sounds. It asks whether an ordinary person can be paid without being handed cash, keep money somewhere safe, send it to a relative in another governorate, and do all of that at a price that makes sense on their income.",
    body2:
      "When the answer is no, people are not merely inconvenienced. They pay more for the same services, save less, and absorb shocks by selling what they own.",
    globalLabel: "Global context",
    globalNote:
      "Yet 1.3 billion adults remain unbanked, and account ownership across the Middle East and North Africa stands at 53%.",
    pillarsIntro: "Four conditions have to hold at once. Select one to read more.",
    pillarsLabel: "The four conditions of financial inclusion",
    pillars: [
      {
        id: "access",
        icon: "landmark",
        title: "Access",
        summary: "Being able to reach a financial service in the first place.",
        detail:
          "Access is the starting condition: an account can be opened, a branch or agent is reachable, and the paperwork required is paperwork a person actually holds. In Egypt there are 6.56 commercial bank branches per 100,000 adults, and most sit in cities.",
        points: [
          "A branch, ATM, agent or mobile wallet within practical reach",
          "Identity documents that satisfy know-your-customer rules",
          "Account types that do not demand a high minimum balance",
          "Services offered in a language and format people understand",
        ],
      },
      {
        id: "affordability",
        icon: "dollar",
        title: "Affordability",
        summary: "The service has to be worth what it costs to hold and use.",
        detail:
          "An account that costs more in fees than it returns in value will be abandoned. Among Egyptian adults without an account, 20.4% cite financial services being too expensive as a reason.",
        points: [
          "Low or no minimum balance requirements",
          "Fees proportionate to small transactions",
          "No hidden charges that erode small balances",
          "The travel and time cost of reaching a branch counts too",
        ],
      },
      {
        id: "usage",
        icon: "repeat",
        title: "Usage",
        summary: "An account only counts once it is actually used.",
        detail:
          "Opening an account is not the same as using one. This is where Egypt's gap is widest — 43.1% of adults hold an account, but only 18.5% pay with a card or a phone.",
        points: [
          "Wages and transfers arriving directly into an account",
          "Everyday payments made digitally rather than in cash",
          "Money saved in, not just passed through, the account",
          "Credit available for emergencies and for investment",
        ],
      },
      {
        id: "security",
        icon: "shield",
        title: "Security",
        summary: "People use what they trust, and trust has to be earned.",
        detail:
          "Security covers deposit protection, fraud prevention, clear pricing and a real route to complain. Consumer protection sits at the centre of the Central Bank of Egypt's strategy for exactly this reason.",
        points: [
          "Deposits protected and clearly regulated",
          "Fraud prevention and reliable dispute resolution",
          "Transparent, comparable pricing before signing up",
          "Data protection people can understand and rely on",
        ],
      },
    ],
  },
  matter: {
    eyebrow: "The stakes",
    title: "Why does it matter?",
    description:
      "The effects compound outwards — from a single household budget to the structure of the national economy.",
    label: "Who financial inclusion affects",
    items: [
      {
        id: "individuals",
        icon: "wallet",
        title: "Individuals",
        summary: "A safe place to keep money, and a way to plan ahead.",
        detail:
          "An account turns irregular income into something that can be managed: a safe place for wages, a way to pay bills without travelling, and a record that can later support an application. In Egypt only 13.8% of adults save at a financial institution or mobile money account.",
        points: [
          "Wages held safely rather than carried as cash",
          "Bills paid without losing a day's work to travel",
          "A transaction history that can support future applications",
          "Savings kept separate and protected",
        ],
      },
      {
        id: "families",
        icon: "users",
        title: "Families",
        summary: "Absorbing shocks without selling what you own.",
        detail:
          "Costs do not arrive on schedule: medical bills, school fees, a failed harvest. In Egypt 56.1% of adults borrowed money in 2024, but only 10.4% borrowed formally — most borrowing runs through family and friends, at 38.4%.",
        points: [
          "Emergencies met from savings rather than distress sales",
          "Remittances from relatives arriving quickly and safely",
          "School fees and health costs spread over time",
          "Less dependence on informal lenders and their terms",
        ],
      },
      {
        id: "businesses",
        icon: "store",
        title: "Businesses",
        summary: "Records that prove a business exists, and customers who pay digitally.",
        detail:
          "Micro, small and medium enterprises make up around 90% of Egypt's private sector and roughly 43% of GDP. A business without a payment record cannot easily prove revenue. Only 3.6% of Egyptian adults borrowed to start or run a business in 2024.",
        points: [
          "Digital payment records that evidence real revenue",
          "Access to customers who no longer carry cash",
          "Less time and risk handling physical cash",
          "A route from the informal economy into the formal one",
        ],
      },
      {
        id: "economy",
        icon: "building",
        title: "The Economy",
        summary: "Savings that can be lent, and activity that can be seen.",
        detail:
          "Money in accounts becomes deposits banks can lend, and formal transactions become activity the state can measure. Around 40% of Egypt's GDP is estimated to sit in the informal economy.",
        points: [
          "Household savings channelled into productive lending",
          "A broader tax base without raising existing rates",
          "Subsidies and transfers delivered directly and traceably",
          "Better data on which to build economic policy",
        ],
      },
    ],
    sourcesNote: "Figures in this section are cited in full on the",
    sourcesLink: "Sources",
    sourcesNoteEnd: "page.",
  },
  stats: {
    eyebrow: "Where Egypt stands",
    title: "Two measures, one country",
    description:
      "Egypt's progress looks different depending on who is counting. The Central Bank counts anyone holding an active transactional account. The World Bank surveys individuals directly. Both are shown throughout this site, always labelled.",
  },
  path: {
    eyebrow: "How to read this site",
    title: "Your journey through financial inclusion",
    cards: [
      {
        step: "01",
        title: "Understand the idea",
        body: "What financial inclusion means, and what a bank account actually does for you.",
        links: [
          { href: "/understanding", key: "understanding" },
          { href: "/banking", key: "banking" },
        ],
      },
      {
        step: "02",
        title: "See the situation in Egypt",
        body: "The national data, the difference between rural and urban Egypt, and the barriers that persist.",
        links: [
          { href: "/egypt", key: "egypt" },
          { href: "/rural-urban", key: "ruralUrban" },
          { href: "/challenges", key: "challenges" },
        ],
      },
      {
        step: "03",
        title: "Learn how to take part safely",
        body: "How digital finance works, how to protect yourself, and what other countries have achieved.",
        links: [
          { href: "/digital-finance", key: "digitalFinance" },
          { href: "/fintech", key: "fintech" },
          { href: "/egypt-vs-india", key: "egyptVsIndia" },
        ],
      },
    ],
  },
  finalCta: {
    title: "Start your financial inclusion journey",
    description:
      "Begin with what financial inclusion means, or go straight to how accounts, cards and wallets actually work.",
    primary: "Understand the concept",
    secondary: "Know your banking options",
  },
};

export type HomeDict = typeof en;

const ar: HomeDict = {
  meta: {
    title: "التعامل مع البنوك ببساطة",
    description:
      "أول مرة تتعامل مع بنك؟ اعرف ماذا يفعل البنك، وكيف يعمل الحساب، وما هي المدفوعات الرقمية، وأين وصل الشمول المالي في مصر — كل ذلك بلغة بسيطة.",
  },
  hero: {
    badge: "مورد تعليمي مبني على بيانات منشورة",
    title: "خطوتك الأولى في عالم البنوك",
    subtitle:
      "مش عارف البنوك بتشتغل إزاي؟ أنت في المكان الصح. اتعلّم أساسيات التعامل مع البنوك، والشمول المالي، والمدفوعات الرقمية، وإدارة أموالك — بلغة بسيطة.",
    primaryCta: "ابدأ التعلّم",
    secondaryCta: "ليه التعامل مع البنوك مهم؟",
    journeyLabel: "إلى أين يمكن أن تصل أموالك",
    journey: [
      "نقدًا فقط",
      "حساب بنكي",
      "الدفع بالموبايل",
      "الادخار",
      "خيارات أكثر",
    ],
  },
  message: {
    quote:
      "الشمول المالي ليس مجرد امتلاك حساب بنكي — بل هو امتلاك فرص أكثر، وأمان أكبر، وتحكم حقيقي في أموالك.",
  },
  why: {
    eyebrow: "الفائدة العملية",
    title: "لماذا تفتح حسابًا بنكيًا؟",
    description:
      "ستة أمور يغيّرها الحساب في طريقة حفظك لأموالك وتحريكها. اختر واحدًا لتقرأ المزيد.",
    note: "الحساب أداة وليس ضمانًا. ما يوفره هو خيارات أوسع — وهو لا يَعِد بأي نتيجة مالية بعينها، كما تختلف الشروط من بنك لآخر.",
    cards: [
      {
        id: "security",
        icon: "lock",
        title: "الأمان",
        summary: "احفظ أموالك بأمان أكبر من حمل مبالغ نقدية كبيرة.",
        detail:
          "النقود التي تُفقد أو تُسرق تضيع غالبًا بلا رجعة. أما الأموال في حساب خاضع للرقابة فتحميها القواعد المنظِّمة للمؤسسة التي تحتفظ بها، ولا يمكن أخذها من جيبك.",
        points: [
          "لا حاجة لحمل مبالغ كبيرة أو تخزينها في المنزل",
          "محفوظة لدى مؤسسة تخضع لإشراف البنك المركزي",
          "الوصول محمي برقم سري أو كلمة مرور تختارها أنت",
          "البطاقة المفقودة يمكن إيقافها، أما النقود فلا",
        ],
      },
      {
        id: "convenience",
        icon: "smartphone",
        title: "السهولة",
        summary: "أرسل واستقبل وأدر أموالك دون الحاجة لزيارة الفرع دائمًا.",
        detail:
          "كثير مما كان يتطلب زيارة الفرع صار ممكنًا من الهاتف: الاطلاع على الرصيد، وتحويل الأموال، وسداد فاتورة. ولمن يبعد عنه أقرب فرع، هذا هو الفرق بين رحلة نصف يوم ومهمة تستغرق دقيقة.",
        points: [
          "تحويلات تصل في ثوانٍ وليس في أيام",
          "الرصيد وسجل المعاملات متاح في أي وقت",
          "دون تكلفة انتقال أو ساعات عمل ضائعة",
          "إرسال الأموال إلى الأسرة في محافظة أخرى بسرعة",
        ],
      },
      {
        id: "saving",
        icon: "piggyBank",
        title: "الادخار",
        summary: "استخدم أدوات مالية رسمية لتنظيم مدخراتك وبنائها.",
        detail:
          "الادخار في المنزل ممكن لكنه صعب: المال دائمًا في متناول اليد ومعرَّض للضياع. أما الحساب فيفصل ما تدّخره عمّا تنفقه، مما يجعل الالتزام بالخطة أيسر.",
        points: [
          "مدخرات منفصلة عن مصروفات الحياة اليومية",
          "سجل واضح لما جنّبته من أموال",
          "أنواع حسابات مختلفة تناسب أهدافًا مختلفة",
          "الشروط والعوائد تختلف — راجعها دائمًا مع البنك",
        ],
      },
      {
        id: "payments",
        icon: "qrCode",
        title: "المدفوعات",
        summary: "سدّد الفواتير واشترِ عبر القنوات الرقمية.",
        detail:
          "المرافق وشحن الهاتف والمصروفات الدراسية والتسوق يمكن سدادها رقميًا. وفي مصر لا يزال 48.4% من البالغين يسددون فواتير المرافق نقدًا فقط، وهو ما يعني عادةً الوقوف في طابور.",
        points: [
          "سداد الفواتير دون طوابير أو تنقل",
          "بطاقة أو رمز استجابة سريعة أو تطبيق يقبله تجار أكثر",
          "مدفوعات مؤرخة ومسجَّلة تلقائيًا",
          "مشكلات أقل بسبب عدم توفر فكة",
        ],
      },
      {
        id: "access",
        icon: "landmark",
        title: "الوصول",
        summary: "ابنِ علاقة بالنظام المالي الرسمي واطّلع على خدمات إضافية.",
        detail:
          "الحساب هو مدخلك إلى بقية النظام المالي. وكونك عميلًا لدى مؤسسة خاضعة للرقابة يجعل خدمات أخرى في المتناول — أما استحقاقك لأي منها فقرار يعود دائمًا لمقدم الخدمة.",
        points: [
          "علاقة معترف بها مع مؤسسة خاضعة للرقابة",
          "إمكانية التقدم بطلب للحصول على خدمات أخرى",
          "استلام الرواتب والمدفوعات الحكومية مباشرة",
          "الاستحقاق ليس تلقائيًا ويحدده كل مقدم خدمة",
        ],
      },
      {
        id: "record",
        icon: "receipt",
        title: "السجل",
        summary: "أنشئ سجلًا رسميًا لمعاملاتك يسهّل إدارة أموالك.",
        detail:
          "كل معاملة رقمية تترك سجلًا مؤرخًا. وهذا يجعل من الأسهل بكثير معرفة أين تذهب أموالك فعلًا، وحسم أي خلاف حول سداد مبلغ من عدمه، وإثبات الدخل عند الحاجة.",
        points: [
          "رؤية واضحة للدخل والإنفاق عبر الوقت",
          "إثبات بأن الدفع قد تم، ومتى تم",
          "مفيد عندما يلزم إثبات الدخل",
          "وضع ميزانية للأسرة انطلاقًا من أرقام حقيقية",
        ],
      },
    ],
  },
  imagine: {
    eyebrow: "شاهد الفرق",
    title: "تخيّل أموالك بدون حساب بنكي",
    description:
      "المواقف اليومية نفسها، بطريقتين مختلفتين. بدّل بينهما للمقارنة.",
    beforeLabel: "نقدًا فقط",
    afterLabel: "حساب + رقمي",
    beforeHeading: "نقدًا فقط",
    afterHeading: "حساب بنكي وتمويل رقمي",
    switchLabel: "اختر بين النقد فقط أو الحساب البنكي والرقمي",
    rows: [
      {
        aspect: "حفظ الأموال",
        before: {
          icon: "banknote",
          label: "حمل النقود الورقية",
          detail:
            "المال محفوظ معك أو في المنزل. عليك عدّه وحراسته وتعويضه بنفسك إذا ضاع.",
        },
        after: {
          icon: "wallet",
          label: "أموال محفوظة في حساب",
          detail:
            "الأموال لدى مؤسسة خاضعة للرقابة، وتصل إليها ببطاقة أو تطبيق أو محفظة على هاتفك.",
        },
      },
      {
        aspect: "إنجاز المعاملات",
        before: {
          icon: "landmark",
          label: "زيارة الفروع والمكاتب",
          detail:
            "بعض الخدمات تتطلب حضورًا شخصيًا خلال ساعات العمل، وقد يكلف ذلك يوم انتقال وأجرًا ضائعًا.",
        },
        after: {
          icon: "smartphone",
          label: "خدمات مصرفية عبر الإنترنت والهاتف",
          detail:
            "الأرصدة والتحويلات وسداد الفواتير تُدار من الهاتف، في أي وقت يناسبك.",
        },
      },
      {
        aspect: "الدفع",
        before: {
          icon: "circleSlash",
          label: "خيارات دفع رقمية محدودة",
          detail:
            "كل ما لا يمكن دفعه نقدًا يصبح صعبًا، والشراء عبر الإنترنت يكاد يكون خارج المتناول.",
        },
        after: {
          icon: "qrCode",
          label: "مدفوعات رقمية",
          detail:
            "الفواتير والمتاجر والمشتريات الإلكترونية يمكن دفعها ببطاقة أو تطبيق أو رمز استجابة سريعة حيثما يقبلها التاجر.",
        },
      },
      {
        aspect: "المتابعة",
        before: {
          icon: "search",
          label: "صعوبة تتبع المعاملات",
          detail:
            "لا يوجد سجل تلقائي. تذكّر ما أُنفق وإثبات ما سُدد يعتمد على الذاكرة والإيصالات.",
        },
        after: {
          icon: "receipt",
          label: "سجل للمعاملات",
          detail:
            "كل حركة مؤرخة ومدرجة، مما يجعل وضع الميزانية وحسم الخلافات أسهل بكثير.",
        },
      },
      {
        aspect: "ما بعد ذلك",
        before: {
          icon: "circleSlash",
          label: "اعتماد أكبر على النقد",
          detail:
            "بدون سجل رسمي، تبقى بقية خدمات النظام المالي بعيدة عن المتناول إلى حد كبير.",
        },
        after: {
          icon: "trendingUp",
          label: "الوصول إلى خدمات إضافية",
          detail:
            "كونك عميلًا يتيح لك استكشاف خدمات أخرى — وفقًا لشروط كل مقدم خدمة.",
        },
      },
    ],
  },
  what: {
    eyebrow: "الفكرة",
    title: "ما هو الشمول المالي؟",
    description:
      "الشمول المالي يعني أن يتمكن الأفراد والمشروعات من الوصول إلى منتجات مالية مفيدة وميسورة التكلفة تلبي احتياجاتهم — المدفوعات والادخار والائتمان والتأمين — تُقدَّم بمسؤولية.",
    body1:
      "عمليًا، الأمر أبسط مما يوحي التعريف. السؤال هو: هل يستطيع شخص عادي أن يتقاضى أجره دون أن يُسلَّم نقدًا، وأن يحفظ ماله في مكان آمن، وأن يرسله لقريب في محافظة أخرى، وأن يفعل ذلك كله بتكلفة معقولة بالنسبة لدخله؟",
    body2:
      "عندما تكون الإجابة لا، فالأمر ليس مجرد إزعاج. إذ يدفع الناس أكثر مقابل الخدمات نفسها، ويدّخرون أقل، ويواجهون الأزمات ببيع ما يملكون.",
    globalLabel: "السياق العالمي",
    globalNote:
      "ومع ذلك لا يزال 1.3 مليار بالغ خارج النظام المصرفي، وتبلغ نسبة امتلاك الحسابات في الشرق الأوسط وشمال أفريقيا 53%.",
    pillarsIntro: "أربعة شروط يجب أن تتحقق معًا. اختر أحدها لتقرأ المزيد.",
    pillarsLabel: "شروط الشمول المالي الأربعة",
    pillars: [
      {
        id: "access",
        icon: "landmark",
        title: "إمكانية الوصول",
        summary: "أن تتمكن أساسًا من الوصول إلى الخدمة المالية.",
        detail:
          "الوصول هو الشرط الأول: إمكانية فتح حساب، ووجود فرع أو وكيل في المتناول، وأن تكون المستندات المطلوبة مما يملكه الشخص فعلًا. في مصر يوجد 6.56 فرعًا مصرفيًا لكل 100 ألف بالغ، ومعظمها في المدن.",
        points: [
          "فرع أو ماكينة صراف أو وكيل أو محفظة إلكترونية في المتناول",
          "مستندات هوية تفي بمتطلبات «اعرف عميلك»",
          "أنواع حسابات لا تشترط حدًا أدنى مرتفعًا للرصيد",
          "خدمات مقدَّمة بلغة وصيغة يفهمها الناس",
        ],
      },
      {
        id: "affordability",
        icon: "dollar",
        title: "القدرة على التحمل",
        summary: "أن تستحق الخدمة ما تكلفه من رسوم واستخدام.",
        detail:
          "الحساب الذي تفوق رسومه قيمته سيُهجر. ومن بين البالغين في مصر ممن لا يملكون حسابًا، يذكر 20.4% أن ارتفاع تكلفة الخدمات المالية سبب لذلك.",
        points: [
          "حد أدنى منخفض للرصيد أو عدم اشتراطه",
          "رسوم متناسبة مع المعاملات الصغيرة",
          "بلا رسوم خفية تلتهم الأرصدة الصغيرة",
          "تكلفة الانتقال والوقت للوصول للفرع تُحتسب أيضًا",
        ],
      },
      {
        id: "usage",
        icon: "repeat",
        title: "الاستخدام",
        summary: "الحساب لا يُحتسب إلا حين يُستخدم فعلًا.",
        detail:
          "فتح الحساب شيء واستخدامه شيء آخر. وهنا تتسع الفجوة في مصر أكثر ما تتسع — 43.1% من البالغين يملكون حسابًا، لكن 18.5% فقط يدفعون ببطاقة أو هاتف.",
        points: [
          "وصول الرواتب والتحويلات مباشرة إلى الحساب",
          "سداد المدفوعات اليومية رقميًا بدل النقد",
          "ادخار الأموال في الحساب لا مجرد مرورها به",
          "توافر ائتمان للطوارئ وللاستثمار",
        ],
      },
      {
        id: "security",
        icon: "shield",
        title: "الأمان",
        summary: "الناس تستخدم ما تثق به، والثقة تُكتسب.",
        detail:
          "يشمل الأمان حماية الودائع ومنع الاحتيال ووضوح التسعير ووجود سبيل حقيقي للشكوى. ولهذا السبب تحديدًا تحتل حماية المستهلك موقع القلب في استراتيجية البنك المركزي المصري.",
        points: [
          "ودائع محمية وخاضعة لتنظيم واضح",
          "منع الاحتيال وتسوية موثوقة للمنازعات",
          "تسعير شفاف وقابل للمقارنة قبل التعاقد",
          "حماية للبيانات يفهمها الناس ويعتمدون عليها",
        ],
      },
    ],
  },
  matter: {
    eyebrow: "ما هو على المحك",
    title: "لماذا يهم الشمول المالي؟",
    description:
      "تتسع آثاره دائرة بعد دائرة — من ميزانية أسرة واحدة إلى بنية الاقتصاد الوطني.",
    label: "من يتأثر بالشمول المالي",
    items: [
      {
        id: "individuals",
        icon: "wallet",
        title: "الأفراد",
        summary: "مكان آمن لحفظ المال، ووسيلة للتخطيط للمستقبل.",
        detail:
          "الحساب يحوّل الدخل غير المنتظم إلى شيء يمكن إدارته: مكان آمن للأجر، ووسيلة لسداد الفواتير دون تنقل، وسجل قد يدعم طلبًا مستقبليًا. وفي مصر يدّخر 13.8% فقط من البالغين لدى مؤسسة مالية أو محفظة إلكترونية.",
        points: [
          "أجور محفوظة بأمان بدل حملها نقدًا",
          "فواتير تُسدد دون خسارة يوم عمل في التنقل",
          "سجل معاملات يدعم الطلبات المستقبلية",
          "مدخرات منفصلة ومحمية",
        ],
      },
      {
        id: "families",
        icon: "users",
        title: "الأسر",
        summary: "امتصاص الصدمات دون بيع ما تملك.",
        detail:
          "التكاليف لا تأتي في مواعيد: فواتير علاج، ومصروفات دراسية، ومحصول متعثر. وفي مصر اقترض 56.1% من البالغين في 2024، لكن 10.4% فقط اقترضوا رسميًا، بينما اقترض 38.4% من الأهل والأصدقاء.",
        points: [
          "مواجهة الطوارئ من المدخرات بدل البيع الاضطراري",
          "تحويلات الأقارب تصل بسرعة وأمان",
          "توزيع المصروفات الدراسية والعلاجية على الوقت",
          "اعتماد أقل على المقرضين غير الرسميين وشروطهم",
        ],
      },
      {
        id: "businesses",
        icon: "store",
        title: "المشروعات",
        summary: "سجلات تثبت وجود المشروع، وعملاء يدفعون رقميًا.",
        detail:
          "تمثل المشروعات متناهية الصغر والصغيرة والمتوسطة نحو 90% من القطاع الخاص في مصر ونحو 43% من الناتج المحلي. والمشروع بلا سجل مدفوعات لا يستطيع إثبات إيراداته بسهولة. ولم يقترض سوى 3.6% من البالغين لبدء مشروع أو تشغيله في 2024.",
        points: [
          "سجلات دفع رقمية تثبت إيرادات حقيقية",
          "الوصول إلى عملاء لم يعودوا يحملون نقودًا",
          "وقت وأخطار أقل في التعامل مع النقد",
          "طريق للانتقال من القطاع غير الرسمي إلى الرسمي",
        ],
      },
      {
        id: "economy",
        icon: "building",
        title: "الاقتصاد",
        summary: "مدخرات قابلة للإقراض، ونشاط اقتصادي مرئي.",
        detail:
          "الأموال في الحسابات تتحول إلى ودائع تستطيع البنوك إقراضها، والمعاملات الرسمية تصبح نشاطًا يمكن للدولة قياسه. ويُقدَّر أن نحو 40% من الناتج المحلي المصري يقع في الاقتصاد غير الرسمي.",
        points: [
          "توجيه مدخرات الأسر نحو إقراض منتج",
          "قاعدة ضريبية أوسع دون رفع المعدلات القائمة",
          "إيصال الدعم والتحويلات مباشرة وبشكل قابل للتتبع",
          "بيانات أفضل تُبنى عليها السياسات الاقتصادية",
        ],
      },
    ],
    sourcesNote: "الأرقام الواردة في هذا القسم موثقة بالكامل في صفحة",
    sourcesLink: "المصادر",
    sourcesNoteEnd: ".",
  },
  stats: {
    eyebrow: "أين تقف مصر",
    title: "مقياسان، بلد واحد",
    description:
      "يبدو تقدم مصر مختلفًا بحسب الجهة التي تقيسه. فالبنك المركزي يحصي كل من يملك حساب معاملات نشطًا، بينما يستطلع البنك الدولي الأفراد مباشرة. ويُعرض المقياسان معًا في هذا الموقع، مع توضيح مصدر كل رقم.",
  },
  path: {
    eyebrow: "كيف تقرأ هذا الموقع",
    title: "رحلتك عبر الشمول المالي",
    cards: [
      {
        step: "01",
        title: "افهم الفكرة",
        body: "ما معنى الشمول المالي، وما الذي يقدمه لك الحساب البنكي فعليًا.",
        links: [
          { href: "/understanding", key: "understanding" },
          { href: "/banking", key: "banking" },
        ],
      },
      {
        step: "02",
        title: "تعرّف على الوضع في مصر",
        body: "البيانات الوطنية، والفرق بين الريف والحضر، والعقبات التي ما زالت قائمة.",
        links: [
          { href: "/egypt", key: "egypt" },
          { href: "/rural-urban", key: "ruralUrban" },
          { href: "/challenges", key: "challenges" },
        ],
      },
      {
        step: "03",
        title: "تعلّم كيف تشارك بأمان",
        body: "كيف يعمل التمويل الرقمي، وكيف تحمي نفسك، وما الذي حققته دول أخرى.",
        links: [
          { href: "/digital-finance", key: "digitalFinance" },
          { href: "/fintech", key: "fintech" },
          { href: "/egypt-vs-india", key: "egyptVsIndia" },
        ],
      },
    ],
  },
  finalCta: {
    title: "ابدأ رحلتك نحو الشمول المالي",
    description:
      "ابدأ بمعنى الشمول المالي، أو انتقل مباشرة إلى كيفية عمل الحسابات والبطاقات والمحافظ.",
    primary: "افهم المفهوم",
    secondary: "تعرف على خياراتك المصرفية",
  },
};

export const home: Record<Locale, HomeDict> = { en, ar };
