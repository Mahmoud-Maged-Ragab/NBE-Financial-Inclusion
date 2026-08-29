import type { Locale } from "../config";

const en = {
  meta: {
    title: "Digital Finance",
    description:
      "How a phone turns into a gateway to financial services: mobile banking, mobile wallets, QR payments, instant transfers — and what changes once payments stop being cash.",
  },
  hero: {
    eyebrow: "Technology",
    title: "Digital finance",
    description:
      "Digital infrastructure doesn't make anyone richer. What it does is cut the physical and administrative costs that used to make serving low-income and remote customers not worth the effort — and that's exactly why it sits at the centre of Egypt's inclusion strategy.",
  },
  gateway: {
    eyebrow: "Start here",
    title: "Could your phone become your gateway to financial services?",
    description:
      "For most people in Egypt, the device is already there — 84.6% of adults own a mobile phone, and 55.7% have a smartphone. Here's what that phone can turn into, one step at a time.",
    steps: [
      {
        id: "phone",
        icon: "smartphone",
        label: "Phone",
        detail:
          "This is the starting point, and it's the part Egypt has mostly figured out already. A basic phone can receive a wallet; a smartphone can run a full banking app. Either way, you don't have to go anywhere to get started.",
      },
      {
        id: "banking",
        icon: "laptop",
        label: "Mobile banking",
        detail:
          "The phone connects to an account — either a bank account run through its official app, or a mobile wallet tied to your phone number. Once that happens, checking your balance, sending money and paying bills no longer mean a trip to a branch.",
      },
      {
        id: "payment",
        icon: "qrCode",
        label: "Digital payment",
        detail:
          "Money moves without turning back into cash: a card or QR code at a shop, a transfer to a relative, a bill paid from the app. In Egypt, 48.4% of adults still pay utility bills in cash only — this is where most of the remaining work is.",
      },
      {
        id: "record",
        icon: "receipt",
        label: "Transaction record",
        detail:
          "Every payment leaves a dated entry. On its own, that's just a receipt. Add enough of them together, though, and they become evidence of income and spending — exactly what a lender needs to assess someone with no collateral to offer.",
      },
      {
        id: "management",
        icon: "lineChart",
        label: "Financial management",
        detail:
          "Once that record exists, budgeting can rest on real numbers instead of memory, disputes get easier to settle, and applying for other financial services becomes possible — though it's always down to what each provider requires.",
      },
    ],
  },
  wallets: {
    eyebrow: "Two routes in",
    title: "Mobile banking and mobile wallets",
    description:
      "These are often spoken about together, but they are different things. Understanding which is which makes the choice easier.",
    banking: {
      title: "Mobile banking",
      body: "This is a channel to a bank account you already have. You get the bank's full range of services — statements, transfers, card controls — run from an app instead of a counter. Opening the account underneath it still means going through the bank's usual process.",
      points: [
        "Connects to a full bank account",
        "Wider range of services available",
        "Requires standard account opening",
        "Use only the bank's official app",
      ],
    },
    wallet: {
      title: "Mobile wallet",
      body: "This is an account in its own right, identified by your phone number rather than a bank branch. Cash goes in and out through agents — often just a nearby shop — and you can send money straight from the phone. Opening one usually asks for less paperwork, with lower transaction limits in return.",
      points: [
        "Phone number acts as the account",
        "Cash in and out through local agents",
        "Often lighter documentation to open",
        "Lower limits than a full bank account",
      ],
    },
    note: "Which one suits you depends on your circumstances, what you need it for, and what each provider currently offers. It's worth comparing the terms and checking current requirements directly with the provider.",
  },
  journey: {
    eyebrow: "The wider progression",
    title: "From cash to a digital economy",
    description:
      "Each stage removes a limit the one before it couldn't. Pick a stage to see what it changes, and where Egypt sits right now.",
    steps: [
      {
        id: "cash",
        icon: "banknote",
        label: "Cash",
        detail:
          "Money exists only as physical notes. It has to be carried, stored and handed over in person. None of that gets recorded, so none of it ever adds up into evidence of anything. In Egypt, 26.5% of adults are still paid entirely this way.",
      },
      {
        id: "account",
        icon: "landmark",
        label: "Bank account",
        detail:
          "Now money has somewhere to sit that isn't a drawer. Deposits are safe, and the account starts building a transaction record. But if the only way to reach it is a branch visit, you're still limited by geography and opening hours.",
      },
      {
        id: "wallet",
        icon: "smartphone",
        label: "Mobile wallet",
        detail:
          "The account breaks free of the building. A phone number becomes the account, and a local agent becomes the place you go for cash. This is the step that reaches rural areas where a branch would never make commercial sense.",
      },
      {
        id: "payment",
        icon: "qrCode",
        label: "Digital payment",
        detail:
          "Money moves without turning back into cash at any step. Wages land in an account, bills get paid from it, transfers reach another governorate in seconds. This is where Egypt loses the most people: 43.1% hold an account, but only 18.5% pay with a card or phone.",
      },
      {
        id: "economy",
        icon: "building",
        label: "Digital economy",
        detail:
          "From here, other things follow. Lenders can assess borrowers who have no collateral, just a transaction history. Merchants can reach customers who don't carry cash. Government transfers go straight through. Activity that used to be invisible becomes something you can actually measure.",
      },
    ],
  },
  position: {
    eyebrow: "The measured position",
    title: "Built infrastructure, unbuilt habit",
    description:
      "Egypt has the devices, and its payment rails are modern. Where the numbers fall behind is in what people actually do with them.",
    stats: {
      phone: { label: "Own a mobile phone", detail: "Behind Kenya, at 92.7%." },
      smartphone: {
        label: "Main phone is a smartphone",
        detail: "Also behind Kenya, at 72.6%.",
      },
      digital: {
        label: "Have a digitally enabled account",
        detail: "An account that can actually transact digitally.",
      },
      pay: {
        label: "Pay with a card or phone",
        detail: "The step where the largest share drops out.",
      },
    },
    chartTitle: "Cash is still how most routine payments get made",
    chartRows: {
      utilityAny: "Made a utility payment (any method)",
      utilityCash: "Paid utility bills in cash only",
      utilityCashNote:
        "Almost everyone who pays a utility bill in Egypt still pays it in cash.",
      wagesCash: "Received wages in cash only",
      wagesAccount: "Received wages into an account",
    },
  },
  beforeAfter: {
    eyebrow: "What changes",
    title: "Before and after",
    description:
      "The same five parts of everyday financial life — once in a cash economy, once in a digital one.",
    beforeLabel: "Before",
    afterLabel: "After",
    beforeHeading: "Before — a cash economy",
    afterHeading: "After — a digital economy",
    switchLabel: "Choose before or after",
    rows: [
      {
        aspect: "Where money lives",
        before: {
          icon: "banknote",
          label: "Cash in hand",
          detail:
            "Money is kept physically, at home or on you. It can be lost or stolen, and it just sits there losing value while inflation eats into what it can buy.",
        },
        after: {
          icon: "wallet",
          label: "A digital wallet",
          detail:
            "Money sits in an account tied to a phone number, protected by a PIN, and it can move without you having to be there in person.",
        },
      },
      {
        aspect: "Where you go",
        before: {
          icon: "landmark",
          label: "A physical branch",
          detail:
            "Every transaction means getting to a branch during working hours — and with roughly 6.56 branches per 100,000 adults, that's often a long trip.",
        },
        after: {
          icon: "smartphone",
          label: "A phone, anywhere",
          detail:
            "The service goes wherever you are. For rural households, that turns a half-day journey into something that takes under a minute.",
        },
      },
      {
        aspect: "What is required",
        before: {
          icon: "fileText",
          label: "Paperwork",
          detail:
            "Forms, proof of address, and documents that informal workers and people who've moved around a lot often just don't have.",
        },
        after: {
          icon: "fingerprint",
          label: "Tiered onboarding",
          detail:
            "A basic wallet can open on minimal paperwork, with low transaction limits — and the requirements only rise as the account gets used more.",
        },
      },
      {
        aspect: "Who can reach it",
        before: {
          icon: "mapPin",
          label: "Limited access",
          detail:
            "Access comes down to geography and opening hours. Fall outside a branch's catchment area, and you're outside the system by default.",
        },
        after: {
          icon: "signal",
          label: "Remote access",
          detail:
            "Coverage follows the mobile network instead of the branch network — and with 84.6% of Egyptians owning a phone, that reaches a lot further.",
        },
      },
      {
        aspect: "What it leaves behind",
        before: {
          icon: "circleSlash",
          label: "No record",
          detail:
            "A cash transaction proves nothing once it's done. There's no way to show what you earned, so there's nothing for a lender to assess.",
        },
        after: {
          icon: "lineChart",
          label: "A transaction history",
          detail:
            "Every payment adds to a record that can back up an application — the whole basis for lending to someone with no collateral.",
        },
      },
    ],
  },
  caution: {
    label: "A word of caution",
    body: "Digital finance cuts cost and distance. It doesn't cut poverty, and it brings risks of its own — fraud, leaving out people without connectivity or confidence, and relying on systems that can fail. The 90.1% of unbanked Egyptian adults who point to not having enough money aren't describing a problem an app can solve.",
  },
  nowLatest: {
    label: "Latest NBE data",
    eyebrow: "Where Egypt is now",
    title: "More people are paying with a phone or a card",
    description:
      "Cash isn't going away, but it's no longer the only option for most people. These are country-wide figures published by the Central Bank of Egypt and reprinted in NBE Economic Bulletin No. 2 – 2026.",
    meaning: "What this means for you",
    meaningBody:
      "You don't have to be first. Wallets, cards and machines are common enough now that paying without cash is just a normal thing to do, in most places, most of the time.",
  },
  rails: {
    eyebrow: "The instruments",
    title: "What digital finance is made of",
    description:
      "Six mechanisms, each doing a different job. What makes them useful for inclusion isn't how advanced they are — it's how little they ask of the person using them.",
    items: [
      {
        icon: "wallet",
        title: "Mobile wallets",
        body: "An account identified by a phone number, topped up and cashed out through a network of agents. This is the easiest way into the formal system, and the best fit for areas with no branch nearby.",
      },
      {
        icon: "smartphone",
        title: "Mobile banking",
        body: "A regular bank account run from an app: balances, transfers, bill payments and card controls, no branch visit needed. It's more about deepening the relationship for people who are already banked.",
      },
      {
        icon: "landmark",
        title: "Instant transfers",
        body: "Egypt's Instant Payment Network, launched in 2022, moves money between banks and payment providers in real time. Account ownership picked up noticeably in the period after it launched.",
      },
      {
        icon: "qrCode",
        title: "QR payments",
        body: "A printed code lets a small merchant take digital payment without a card terminal. The cost of accepting it drops close to zero, which matters most to the smallest traders.",
      },
      {
        icon: "creditCard",
        title: "Cards and prepaid",
        body: "Debit and prepaid cards, including domestic scheme cards, bring digital payment to people who'd rather use a physical card. The Central Bank counts prepaid cards in its inclusion figures.",
      },
      {
        icon: "nfc",
        title: "Contactless and online",
        body: "Tap-to-pay and online checkout make paying quicker at the point of sale. How far they reach depends on merchant acceptance, which is still the real limit outside major cities.",
      },
    ],
  },
  cta: {
    title: "Who's actually building these systems in Egypt?",
    description:
      "The fintech sector, the categories it covers, and what it means for consumers, businesses, banks and government.",
    primary: "FinTech in Egypt",
    secondary: "Know your banking options",
  },
};

export type DigitalFinanceDict = typeof en;

const ar: DigitalFinanceDict = {
  meta: {
    title: "التمويل الرقمي",
    description:
      "كيف يتحول الهاتف إلى بوابة للخدمات المالية: الخدمات المصرفية عبر الهاتف، والمحافظ الإلكترونية، ورموز الاستجابة السريعة، والتحويلات الفورية — وما الذي يتغير حين تتوقف المدفوعات عن أن تكون نقدًا.",
  },
  hero: {
    eyebrow: "التكنولوجيا",
    title: "التمويل الرقمي",
    description:
      "البنية التحتية الرقمية لا تجعل أحدًا أكثر ثراءً. كل ما تفعله هو خفض التكاليف المادية والإدارية التي كانت تجعل خدمة العملاء منخفضي الدخل والبعيدين جغرافيًا غير مجدية. ولهذا السبب بالتحديد تحتل موقعًا مركزيًا في استراتيجية الشمول المالي في مصر.",
  },
  gateway: {
    eyebrow: "ابدأ من هنا",
    title: "هل يمكن لهاتفك أن يصبح بوابتك إلى الخدمات المالية؟",
    description:
      "بالنسبة لمعظم الناس في مصر، الجهاز موجود بالفعل في اليد — إذ يملك 84.6% من البالغين هاتفًا محمولًا، و55.7% منهم يملكون هاتفًا ذكيًا. وفيما يلي ما يمكن أن يتحول إليه هذا الهاتف، خطوة بخطوة.",
    steps: [
      {
        id: "phone",
        icon: "smartphone",
        label: "الهاتف",
        detail:
          "هذه هي نقطة البداية، وهي الجزء الذي حسمته مصر إلى حد كبير بالفعل. فالهاتف البسيط يمكنه استقبال محفظة إلكترونية، والهاتف الذكي يمكنه تشغيل تطبيق مصرفي كامل. وفي الحالتين، لست بحاجة للذهاب إلى أي مكان لتبدأ.",
      },
      {
        id: "banking",
        icon: "laptop",
        label: "الخدمات المصرفية عبر الهاتف",
        detail:
          "يتصل الهاتف بحساب — إما حساب بنكي يُدار عبر تطبيقه الرسمي، أو محفظة إلكترونية مرتبطة برقم هاتفك. وبمجرد أن يحدث ذلك، لم يعد الاطلاع على رصيدك أو تحويل الأموال أو سداد الفواتير يستلزم رحلة إلى الفرع.",
      },
      {
        id: "payment",
        icon: "qrCode",
        label: "الدفع الرقمي",
        detail:
          "تتحرك الأموال دون أن تتحول إلى نقد من جديد: بطاقة أو رمز استجابة سريعة في متجر، أو تحويل لأحد الأقارب، أو فاتورة تُسدد من التطبيق. وفي مصر لا يزال 48.4% من البالغين يسددون فواتير المرافق نقدًا فقط — وهنا يتركز معظم العمل المتبقي.",
      },
      {
        id: "record",
        icon: "receipt",
        label: "سجل المعاملات",
        detail:
          "كل دفعة تترك قيدًا مؤرخًا. بمفردها هي مجرد إيصال. لكن اجمع منها ما يكفي، وستتحول إلى دليل على الدخل والإنفاق — وهو بالضبط ما يحتاجه المُقرض لتقييم شخص لا يملك ضمانات يقدّمها.",
      },
      {
        id: "management",
        icon: "lineChart",
        label: "الإدارة المالية",
        detail:
          "بمجرد وجود هذا السجل، يمكن أن تستند الميزانية إلى أرقام حقيقية بدل الذاكرة، وتصبح تسوية الخلافات أسهل، ويصبح التقدم بطلب خدمات مالية أخرى ممكنًا — وإن كان ذلك يتوقف دائمًا على شروط كل مقدم خدمة.",
      },
    ],
  },
  wallets: {
    eyebrow: "طريقان للدخول",
    title: "الخدمات المصرفية عبر الهاتف والمحافظ الإلكترونية",
    description:
      "كثيرًا ما يُذكران معًا، لكنهما شيئان مختلفان. وفهم الفرق بينهما يجعل الاختيار أسهل.",
    banking: {
      title: "الخدمات المصرفية عبر الهاتف",
      body: "هذه قناة للوصول إلى حساب بنكي تملكه بالفعل. وتحصل من خلالها على كل خدمات البنك — كشوف الحساب والتحويلات والتحكم في البطاقة — تُدار من تطبيق بدل الشباك. أما فتح الحساب نفسه فلا يزال يتطلب إجراءات البنك المعتادة.",
      points: [
        "يتصل بحساب بنكي كامل",
        "نطاق أوسع من الخدمات المتاحة",
        "يتطلب إجراءات فتح حساب معتادة",
        "استخدم التطبيق الرسمي للبنك فقط",
      ],
    },
    wallet: {
      title: "المحفظة الإلكترونية",
      body: "هذا حساب قائم بذاته، معرَّف برقم هاتفك بدلًا من فرع بنكي. يدخل النقد ويخرج عبر الوكلاء — وغالبًا ما يكون الوكيل متجرًا قريبًا — ويمكنك إرسال الأموال مباشرة من الهاتف. وعادةً ما يتطلب فتحه مستندات أقل، مقابل حدود معاملات أقل.",
      points: [
        "رقم الهاتف يعمل كحساب",
        "إيداع وسحب النقد عبر وكلاء محليين",
        "مستندات أخف لفتحها في الغالب",
        "حدود أقل من الحساب البنكي الكامل",
      ],
    },
    note: "ما يناسبك يتوقف على ظروفك، وما تحتاجه من أجله، وما يقدمه كل مزود حاليًا. يستحق الأمر أن تقارن الشروط وتتأكد من المتطلبات السارية مباشرة مع مقدم الخدمة.",
  },
  journey: {
    eyebrow: "التدرج الأوسع",
    title: "من النقد إلى اقتصاد رقمي",
    description:
      "كل مرحلة تزيل قيدًا عجزت المرحلة السابقة عن إزالته. اختر مرحلة لترى ما تغيّره، وأين تقف مصر الآن.",
    steps: [
      {
        id: "cash",
        icon: "banknote",
        label: "النقد",
        detail:
          "المال هنا مجرد أوراق نقدية. يجب حمله وتخزينه وتسليمه شخصيًا. ولا يُسجَّل أي من ذلك، فلا يتراكم شيء ليصبح دليلًا على أي شيء. وفي مصر لا يزال 26.5% من البالغين يتقاضون أجورهم بهذه الطريقة بالكامل.",
      },
      {
        id: "account",
        icon: "landmark",
        label: "الحساب البنكي",
        detail:
          "الآن أصبح للمال مكان يستقر فيه غير الدرج. فالودائع آمنة، ويبدأ الحساب في بناء سجل معاملات. لكن إذا كانت الطريقة الوحيدة للوصول إليه هي زيارة الفرع، تظل مقيدًا بالجغرافيا وساعات العمل.",
      },
      {
        id: "wallet",
        icon: "smartphone",
        label: "المحفظة الإلكترونية",
        detail:
          "يتحرر الحساب من المبنى. فيصبح رقم الهاتف هو الحساب، ويصبح الوكيل المحلي هو المكان الذي تذهب إليه للحصول على نقد. وهذه هي الخطوة التي تصل إلى المناطق الريفية حيث لن يكون لفرع بنكي أي جدوى تجارية.",
      },
      {
        id: "payment",
        icon: "qrCode",
        label: "الدفع الرقمي",
        detail:
          "تتحرك الأموال دون أن تعود نقدًا في أي خطوة. فالأجور تصل إلى الحساب، وتُسدد منه الفواتير، وتصل التحويلات إلى محافظة أخرى في ثوانٍ. وهنا تفقد مصر أكبر عدد من الناس: يملك 43.1% حسابًا، لكن 18.5% فقط يدفعون ببطاقة أو هاتف.",
      },
      {
        id: "economy",
        icon: "building",
        label: "الاقتصاد الرقمي",
        detail:
          "من هنا تتبع أشياء أخرى. يستطيع المقرضون تقييم مقترضين لا يملكون ضمانات، بل سجل معاملات فقط. ويصل التجار إلى عملاء لا يحملون نقودًا. وتمر التحويلات الحكومية مباشرة. والنشاط الذي كان خفيًا يصبح شيئًا يمكن فعلًا قياسه.",
      },
    ],
  },
  position: {
    eyebrow: "الوضع المقيس",
    title: "بنية تحتية مبنية، وعادة لم تُبنَ بعد",
    description:
      "مصر تملك الأجهزة، وقنوات الدفع لديها حديثة. أما الأرقام المتأخرة فهي التي تصف ما يفعله الناس بهذه الأجهزة فعليًا.",
    stats: {
      phone: {
        label: "يملكون هاتفًا محمولًا",
        detail: "أقل من كينيا، البالغة 92.7%.",
      },
      smartphone: {
        label: "هاتفهم الأساسي هاتف ذكي",
        detail: "أقل أيضًا من كينيا، البالغة 72.6%.",
      },
      digital: {
        label: "يملكون حسابًا مفعَّلًا رقميًا",
        detail: "حساب يمكنه فعليًا إجراء معاملات رقمية.",
      },
      pay: {
        label: "يدفعون ببطاقة أو هاتف",
        detail: "الخطوة التي تتسرب عندها أكبر شريحة.",
      },
    },
    chartTitle: "النقد لا يزال الوسيلة التي تتم بها معظم المدفوعات المعتادة",
    chartRows: {
      utilityAny: "سددوا فاتورة مرافق (بأي وسيلة)",
      utilityCash: "سددوا فواتير المرافق نقدًا فقط",
      utilityCashNote:
        "يكاد كل من يسدد فاتورة مرافق في مصر يسددها نقدًا حتى الآن.",
      wagesCash: "تقاضوا أجورهم نقدًا فقط",
      wagesAccount: "تقاضوا أجورهم في حساب",
    },
  },
  beforeAfter: {
    eyebrow: "ما الذي يتغير",
    title: "قبل وبعد",
    description: "الأجزاء الخمسة نفسها من الحياة المالية اليومية — مرة في اقتصاد نقدي، ومرة في اقتصاد رقمي.",
    beforeLabel: "قبل",
    afterLabel: "بعد",
    beforeHeading: "قبل — اقتصاد نقدي",
    afterHeading: "بعد — اقتصاد رقمي",
    switchLabel: "اختر قبل أو بعد",
    rows: [
      {
        aspect: "أين يوجد المال",
        before: {
          icon: "banknote",
          label: "نقود في اليد",
          detail:
            "المال محفوظ ماديًا، في المنزل أو معك. يمكن أن يُفقد أو يُسرق، ويبقى مكانه يخسر قيمته بينما يقضم التضخم قدرته الشرائية.",
        },
        after: {
          icon: "wallet",
          label: "محفظة رقمية",
          detail:
            "المال في حساب مرتبط برقم هاتف، محمي برقم سري، ويمكن أن يتحرك دون أن تكون حاضرًا شخصيًا.",
        },
      },
      {
        aspect: "إلى أين تذهب",
        before: {
          icon: "landmark",
          label: "فرع فعلي",
          detail:
            "كل معاملة تعني الوصول إلى فرع خلال ساعات العمل — ومع وجود نحو 6.56 فرعًا لكل 100 ألف بالغ، غالبًا ما تكون رحلة طويلة.",
        },
        after: {
          icon: "smartphone",
          label: "هاتف، في أي مكان",
          detail:
            "الخدمة تصل إلى أينما كنت. وبالنسبة للأسر الريفية، يحوّل ذلك رحلة نصف يوم إلى أمر يستغرق أقل من دقيقة.",
        },
      },
      {
        aspect: "ما هو مطلوب",
        before: {
          icon: "fileText",
          label: "أوراق ومستندات",
          detail:
            "نماذج، وإثبات محل إقامة، ومستندات كثيرًا ما لا يملكها العاملون غير الرسميين ومن انتقلوا بين أماكن كثيرة.",
        },
        after: {
          icon: "fingerprint",
          label: "فتح متدرج",
          detail:
            "يمكن فتح محفظة أساسية بأقل قدر من المستندات، وبحدود معاملات منخفضة — ولا ترتفع الاشتراطات إلا مع زيادة استخدام الحساب.",
        },
      },
      {
        aspect: "من يستطيع الوصول",
        before: {
          icon: "mapPin",
          label: "وصول محدود",
          detail:
            "الوصول يتوقف على الجغرافيا وساعات العمل. وإن كنت خارج النطاق الذي يخدمه الفرع، فأنت خارج النظام تلقائيًا.",
        },
        after: {
          icon: "signal",
          label: "وصول عن بُعد",
          detail:
            "التغطية تتبع شبكة الهاتف المحمول بدلًا من شبكة الفروع — ومع امتلاك 84.6% من المصريين لهاتف، يصل ذلك إلى مدى أوسع بكثير.",
        },
      },
      {
        aspect: "ما الذي يتركه وراءه",
        before: {
          icon: "circleSlash",
          label: "لا سجل",
          detail:
            "المعاملة النقدية لا تثبت شيئًا بعد إتمامها. لا توجد طريقة لإثبات ما كسبته، ومن ثم لا يوجد شيء يقيّمه المُقرض.",
        },
        after: {
          icon: "lineChart",
          label: "سجل معاملات",
          detail:
            "كل دفعة تُضاف إلى سجل يمكن أن يدعم طلبًا — وهو الأساس الذي يقوم عليه إقراض من لا يملك ضمانات.",
        },
      },
    ],
  },
  caution: {
    label: "كلمة تحذير",
    body: "التمويل الرقمي يقلّص التكلفة والمسافة. لكنه لا يقلّص الفقر، ويحمل مخاطره الخاصة — الاحتيال، واستبعاد من يفتقرون للاتصال أو الثقة، والاعتماد على أنظمة قد تتعطل. أما الـ90.1% من البالغين خارج النظام المصرفي في مصر الذين يذكرون عدم كفاية المال، فهم لا يصفون مشكلة يستطيع تطبيق حلّها.",
  },
  nowLatest: {
    label: "أحدث بيانات البنك الأهلي المصري",
    eyebrow: "أين وصلت مصر الآن",
    title: "المزيد من الناس يدفعون بالموبايل أو بالبطاقة",
    description:
      "النقود لن تختفي، لكنها لم تعد الخيار الوحيد أمام معظم الناس. وهذه أرقام على مستوى مصر كلها، نشرها البنك المركزي المصري وأعاد البنك الأهلي نشرها في نشرته الاقتصادية، العدد الثاني لعام 2026.",
    meaning: "ماذا يعني هذا لك",
    meaningBody:
      "لست مضطرًا لأن تكون الأول. فالمحافظ والبطاقات والماكينات باتت منتشرة بما يكفي لتجعل الدفع بلا نقود أمرًا عاديًا تمامًا، في معظم الأماكن ومعظم الأوقات.",
  },
  rails: {
    eyebrow: "الأدوات",
    title: "مما يتكون التمويل الرقمي",
    description:
      "ست آليات، تؤدي كل منها وظيفة مختلفة. وما يجعلها مفيدة للشمول المالي ليس مدى تطورها التقني، بل مدى قلة ما تطلبه ممن يستخدمها.",
    items: [
      {
        icon: "wallet",
        title: "المحافظ الإلكترونية",
        body: "حساب معرَّف برقم هاتف، يُشحن ويُسحب منه عبر شبكة وكلاء. وهو أسهل طريق للدخول إلى النظام الرسمي، والأنسب للمناطق التي لا يوجد فيها فرع قريب.",
      },
      {
        icon: "smartphone",
        title: "الخدمات المصرفية عبر الهاتف",
        body: "حساب بنكي عادي يُدار من تطبيق: الأرصدة والتحويلات وسداد الفواتير والتحكم في البطاقة، دون الحاجة لزيارة فرع. وهو أقرب إلى تعميق العلاقة مع من لديهم حسابات بالفعل.",
      },
      {
        icon: "landmark",
        title: "التحويلات الفورية",
        body: "شبكة المدفوعات اللحظية في مصر، التي أُطلقت عام 2022، تنقل الأموال بين البنوك ومقدمي خدمات الدفع في الوقت الحقيقي. وقد تسارع نمو امتلاك الحسابات بشكل ملحوظ في الفترة التي تلت إطلاقها.",
      },
      {
        icon: "qrCode",
        title: "الدفع برمز الاستجابة السريعة",
        body: "رمز مطبوع يتيح لتاجر صغير قبول الدفع الرقمي دون ماكينة بطاقات. وتنخفض تكلفة قبوله لتقترب من الصفر، وهو ما يهم أصغر التجار أكثر من غيرهم.",
      },
      {
        icon: "creditCard",
        title: "البطاقات ومسبقة الدفع",
        body: "بطاقات الخصم ومسبقة الدفع، بما فيها بطاقات الشبكة المحلية، تصل بالدفع الرقمي إلى من يفضلون استخدام بطاقة مادية. ويحتسب البنك المركزي البطاقات مسبقة الدفع ضمن أرقام الشمول لديه.",
      },
      {
        icon: "nfc",
        title: "الدفع اللاتلامسي وعبر الإنترنت",
        body: "الدفع باللمس والشراء الإلكتروني يجعلان الدفع أسرع عند نقطة البيع. ومدى انتشارهما يتوقف على قبول التجار، الذي يظل القيد الحقيقي خارج المدن الكبرى.",
      },
    ],
  },
  cta: {
    title: "من الذي يبني فعليًا هذه الأنظمة في مصر؟",
    description:
      "قطاع التكنولوجيا المالية، والمجالات التي يغطيها، وما يعنيه للمستهلكين والمشروعات والبنوك والحكومة.",
    primary: "التكنولوجيا المالية في مصر",
    secondary: "تعرف على خياراتك المصرفية",
  },
};

export const digitalFinance: Record<Locale, DigitalFinanceDict> = { en, ar };
