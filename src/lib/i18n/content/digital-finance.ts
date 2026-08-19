import type { Locale } from "../config";

const en = {
  meta: {
    title: "Digital Finance",
    description:
      "How a phone becomes a gateway to financial services: mobile banking, mobile wallets, QR payments, instant transfers — and what changes once payments leave cash behind.",
  },
  hero: {
    eyebrow: "Technology",
    title: "Digital finance",
    description:
      "Digital infrastructure does not make anyone wealthier. What it does is remove the physical and administrative costs that made serving low-income and remote customers uneconomic — which is why it sits at the centre of Egypt's inclusion strategy.",
  },
  gateway: {
    eyebrow: "Start here",
    title: "Could your phone become your gateway to financial services?",
    description:
      "For most people in Egypt the device is already in hand. 84.6% of adults own a mobile phone and 55.7% have a smartphone. What follows is what that phone can become, one step at a time.",
    steps: [
      {
        id: "phone",
        icon: "smartphone",
        label: "Phone",
        detail:
          "The starting point, and the part Egypt has largely solved. A basic phone can receive a wallet; a smartphone can run a full banking app. Neither requires you to travel anywhere to begin.",
      },
      {
        id: "banking",
        icon: "laptop",
        label: "Mobile banking",
        detail:
          "The phone connects to an account — either a bank account operated through its official app, or a mobile wallet identified by your phone number. Balances, transfers and bill payments stop requiring a branch visit.",
      },
      {
        id: "payment",
        icon: "qrCode",
        label: "Digital payment",
        detail:
          "Money moves without being converted back into cash: a card or QR code at a shop, a transfer to a relative, a bill paid from the app. In Egypt 48.4% of adults still pay utility bills in cash only, so this is where most of the change remains to be made.",
      },
      {
        id: "record",
        icon: "receipt",
        label: "Transaction record",
        detail:
          "Every payment leaves a dated entry. Individually that is a receipt; accumulated, it becomes evidence of income and spending — the raw material for assessing a borrower who holds no collateral.",
      },
      {
        id: "management",
        icon: "lineChart",
        label: "Financial management",
        detail:
          "With a record in place, budgeting rests on real figures rather than memory, disputes can be settled, and other financial services become possible to apply for — subject always to each provider's own conditions.",
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
      body: "A channel to a bank account you already hold. You get the bank's full range of services — statements, transfers, card controls — operated from an app instead of a counter. Opening the underlying account requires the bank's full process.",
      points: [
        "Connects to a full bank account",
        "Wider range of services available",
        "Requires standard account opening",
        "Use only the bank's official app",
      ],
    },
    wallet: {
      title: "Mobile wallet",
      body: "An account in its own right, identified by your phone number. Cash goes in and out through agents — often a nearby shop — and money can be sent from the phone. It typically opens on lighter documentation, with lower transaction limits to match.",
      points: [
        "Phone number acts as the account",
        "Cash in and out through local agents",
        "Often lighter documentation to open",
        "Lower limits than a full bank account",
      ],
    },
    note: "Which suits a person depends on their circumstances, what they need it for, and what each provider currently offers. Compare the terms and confirm current requirements with the provider.",
  },
  journey: {
    eyebrow: "The wider progression",
    title: "From cash to a digital economy",
    description:
      "Each stage removes a constraint the previous one could not. Select a stage to read what it changes, and where Egypt currently sits.",
    steps: [
      {
        id: "cash",
        icon: "banknote",
        label: "Cash",
        detail:
          "Money exists only as physical notes. It has to be carried, stored and handed over in person. Nothing is recorded, so nothing accumulates into evidence. In Egypt 26.5% of adults are still paid entirely this way.",
      },
      {
        id: "account",
        icon: "landmark",
        label: "Bank account",
        detail:
          "Money gains a place to sit that is not a drawer. Deposits become safe and the account creates a transaction record. But if the only way to reach it is a branch visit, the account is still bounded by geography and opening hours.",
      },
      {
        id: "wallet",
        icon: "smartphone",
        label: "Mobile wallet",
        detail:
          "The account detaches from the building. A phone number becomes an account identifier and a local agent becomes the cash point. This is the step that reaches rural areas where a branch could never be commercially justified.",
      },
      {
        id: "payment",
        icon: "qrCode",
        label: "Digital payment",
        detail:
          "Money moves without returning to cash at each step. Wages arrive in an account, bills are paid from it, transfers reach another governorate in seconds. Egypt's attrition is sharpest here: 43.1% hold an account, 18.5% pay with a card or phone.",
      },
      {
        id: "economy",
        icon: "building",
        label: "Digital economy",
        detail:
          "Second-order effects follow. Transaction histories let lenders assess borrowers with no collateral. Merchants reach customers who carry no cash. Government transfers are delivered directly. Activity that was invisible becomes measurable.",
      },
    ],
  },
  position: {
    eyebrow: "The measured position",
    title: "Built infrastructure, unbuilt habit",
    description:
      "Egypt's device layer is strong and its payment rails are modern. The figures that lag are the ones describing what people do with them.",
    stats: {
      phone: { label: "Own a mobile phone", detail: "Higher than India, at 66.5%." },
      smartphone: {
        label: "Main phone is a smartphone",
        detail: "Also ahead of India, at 42.0%.",
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
    chartTitle: "Cash is still the default for routine obligations",
    chartRows: {
      utilityAny: "Made a utility payment (any method)",
      utilityCash: "Paid utility bills in cash only",
      utilityCashNote:
        "Almost everyone who pays a utility bill in Egypt pays it in cash.",
      wagesCash: "Received wages in cash only",
      wagesAccount: "Received wages into an account",
    },
  },
  beforeAfter: {
    eyebrow: "What changes",
    title: "Before and after",
    description:
      "The same five aspects of financial life, in a cash economy and in a digital one.",
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
            "Money is held physically, at home or on the person. It can be lost or stolen, and it earns nothing while inflation reduces what it buys.",
        },
        after: {
          icon: "wallet",
          label: "A digital wallet",
          detail:
            "Money sits in an account tied to a phone number, protected by a PIN, and can be moved without being physically present.",
        },
      },
      {
        aspect: "Where you go",
        before: {
          icon: "landmark",
          label: "A physical branch",
          detail:
            "Every transaction requires travelling to a branch during opening hours — with roughly 6.56 branches per 100,000 adults, often a long way.",
        },
        after: {
          icon: "smartphone",
          label: "A phone, anywhere",
          detail:
            "The service is wherever the customer is. For rural households this converts a half-day journey into a task that takes under a minute.",
        },
      },
      {
        aspect: "What is required",
        before: {
          icon: "fileText",
          label: "Paperwork",
          detail:
            "Forms, proof of address and documents that informal workers and internal migrants often do not hold.",
        },
        after: {
          icon: "fingerprint",
          label: "Tiered onboarding",
          detail:
            "A basic wallet can be opened on minimal documentation with low transaction limits, with requirements rising only as the account is used more.",
        },
      },
      {
        aspect: "Who can reach it",
        before: {
          icon: "mapPin",
          label: "Limited access",
          detail:
            "Access is decided by geography and working hours. Anyone outside a branch's catchment is outside the system by default.",
        },
        after: {
          icon: "signal",
          label: "Remote access",
          detail:
            "Coverage follows the mobile network rather than the branch network. Egypt's 84.6% mobile phone ownership makes that a far wider footprint.",
        },
      },
      {
        aspect: "What it leaves behind",
        before: {
          icon: "circleSlash",
          label: "No record",
          detail:
            "A cash transaction proves nothing afterwards. Income cannot be evidenced, so credit cannot be assessed on it.",
        },
        after: {
          icon: "lineChart",
          label: "A transaction history",
          detail:
            "Each payment adds to a record that can support an application — the basis for lending to borrowers who have no collateral.",
        },
      },
    ],
  },
  caution: {
    label: "A caution.",
    body: "Digital finance removes cost and distance. It does not remove poverty, and it introduces risks of its own — fraud, exclusion of those without connectivity or confidence, and dependence on systems that can fail. The 90.1% of unbanked Egyptian adults who cite insufficient funds are not describing a problem that an app solves.",
  },
  rails: {
    eyebrow: "The instruments",
    title: "What digital finance is made of",
    description:
      "Six mechanisms doing different jobs. Their value to inclusion depends less on sophistication than on how little they demand of the user.",
    items: [
      {
        icon: "wallet",
        title: "Mobile wallets",
        body: "An account identified by a phone number, topped up and cashed out through a network of agents. The lightest route into the formal system, and the one best suited to areas with no branch.",
      },
      {
        icon: "smartphone",
        title: "Mobile banking",
        body: "A conventional bank account operated from an app: balances, transfers, bill payments and card controls without a branch visit. It deepens the relationship for people already banked.",
      },
      {
        icon: "landmark",
        title: "Instant transfers",
        body: "Egypt's Instant Payment Network, launched in 2022, moves money between banks and payment providers in real time. Account ownership growth accelerated markedly in the period that followed.",
      },
      {
        icon: "qrCode",
        title: "QR payments",
        body: "A printed code lets a small merchant accept digital payment without a card terminal. The cost of acceptance falls close to zero, which matters most for the smallest traders.",
      },
      {
        icon: "creditCard",
        title: "Cards and prepaid",
        body: "Debit and prepaid cards, including domestic scheme cards, extend digital payment to people who prefer a physical instrument. The Central Bank counts prepaid cards within its inclusion measure.",
      },
      {
        icon: "nfc",
        title: "Contactless and online",
        body: "Tap-to-pay and online checkout reduce friction at the point of sale. Their reach depends on merchant acceptance, which remains the binding constraint outside major cities.",
      },
    ],
  },
  cta: {
    title: "Who is building these systems in Egypt",
    description:
      "The FinTech sector, the categories it covers, and what it means for consumers, businesses, banks and government.",
    primary: "FinTech in Egypt",
    secondary: "Know your banking options",
  },
};

export type DigitalFinanceDict = typeof en;

const ar: DigitalFinanceDict = {
  meta: {
    title: "التمويل الرقمي",
    description:
      "كيف يصبح الهاتف بوابة إلى الخدمات المالية: الخدمات المصرفية عبر الهاتف، والمحافظ الإلكترونية، ورموز الاستجابة السريعة، والتحويلات الفورية — وما الذي يتغير حين تتجاوز المدفوعات النقد.",
  },
  hero: {
    eyebrow: "التكنولوجيا",
    title: "التمويل الرقمي",
    description:
      "البنية التحتية الرقمية لا تجعل أحدًا أكثر ثراء. ما تفعله هو إزالة التكاليف المادية والإدارية التي جعلت خدمة العملاء منخفضي الدخل والبعيدين غير مجدية اقتصاديًا — ولهذا تحتل موقع القلب في استراتيجية الشمول المالي في مصر.",
  },
  gateway: {
    eyebrow: "ابدأ من هنا",
    title: "هل يمكن لهاتفك أن يصبح بوابتك إلى الخدمات المالية؟",
    description:
      "بالنسبة لمعظم الناس في مصر، الجهاز موجود بالفعل في اليد. فـ84.6% من البالغين يملكون هاتفًا محمولًا و55.7% يملكون هاتفًا ذكيًا. وفيما يلي ما يمكن أن يصبح عليه هذا الهاتف، خطوة بخطوة.",
    steps: [
      {
        id: "phone",
        icon: "smartphone",
        label: "الهاتف",
        detail:
          "نقطة البداية، وهي الجزء الذي حلّته مصر إلى حد كبير. فالهاتف البسيط يمكنه استقبال محفظة، والهاتف الذكي يمكنه تشغيل تطبيق مصرفي كامل. ولا يتطلب أي منهما أن تنتقل إلى أي مكان لتبدأ.",
      },
      {
        id: "banking",
        icon: "laptop",
        label: "الخدمات المصرفية عبر الهاتف",
        detail:
          "يتصل الهاتف بحساب — إما حساب بنكي يُدار عبر التطبيق الرسمي، أو محفظة إلكترونية معرَّفة برقم هاتفك. وعندها تتوقف الأرصدة والتحويلات وسداد الفواتير عن اشتراط زيارة الفرع.",
      },
      {
        id: "payment",
        icon: "qrCode",
        label: "الدفع الرقمي",
        detail:
          "تتحرك الأموال دون تحويلها إلى نقد من جديد: بطاقة أو رمز استجابة سريعة في متجر، أو تحويل لقريب، أو فاتورة تُسدد من التطبيق. وفي مصر لا يزال 48.4% من البالغين يسددون فواتير المرافق نقدًا فقط، وهنا يبقى معظم التغيير المنتظر.",
      },
      {
        id: "record",
        icon: "receipt",
        label: "سجل المعاملات",
        detail:
          "كل دفعة تترك قيدًا مؤرخًا. وهو منفردًا مجرد إيصال؛ لكنه متراكمًا يصبح دليلًا على الدخل والإنفاق — وهو المادة الخام لتقييم مقترض لا يملك ضمانات.",
      },
      {
        id: "management",
        icon: "lineChart",
        label: "الإدارة المالية",
        detail:
          "مع وجود سجل، تستند الميزانية إلى أرقام حقيقية لا إلى الذاكرة، ويمكن حسم المنازعات، ويصبح التقدم بطلب خدمات مالية أخرى ممكنًا — رهنًا دائمًا بشروط كل مقدم خدمة.",
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
      body: "قناة للوصول إلى حساب بنكي تملكه بالفعل. وتحصل من خلالها على مجمل خدمات البنك — كشوف الحساب والتحويلات وأدوات التحكم في البطاقة — تُدار من تطبيق بدل الشباك. أما فتح الحساب الأساسي فيتطلب إجراءات البنك الكاملة.",
      points: [
        "يتصل بحساب بنكي كامل",
        "نطاق أوسع من الخدمات المتاحة",
        "يتطلب إجراءات فتح حساب معتادة",
        "استخدم التطبيق الرسمي للبنك فقط",
      ],
    },
    wallet: {
      title: "المحفظة الإلكترونية",
      body: "حساب قائم بذاته، معرَّف برقم هاتفك. يدخل النقد ويخرج عبر الوكلاء — غالبًا متجر قريب — ويمكن إرسال الأموال من الهاتف. وتُفتح عادةً بمستندات أخف، مع حدود معاملات أقل بالمقابل.",
      points: [
        "رقم الهاتف يعمل كحساب",
        "إيداع وسحب النقد عبر وكلاء محليين",
        "مستندات أخف لفتحها في الغالب",
        "حدود أقل من الحساب البنكي الكامل",
      ],
    },
    note: "ما يناسب شخصًا ما يتوقف على ظروفه، والغرض الذي يحتاجه من أجله، وما يقدمه كل مزود حاليًا. قارن الشروط وتأكد من المتطلبات السارية لدى مقدم الخدمة.",
  },
  journey: {
    eyebrow: "التدرج الأوسع",
    title: "من النقد إلى اقتصاد رقمي",
    description:
      "كل مرحلة تزيل قيدًا لم تستطع سابقتها إزالته. اختر مرحلة لتقرأ ما تغيّره، وأين تقف مصر حاليًا.",
    steps: [
      {
        id: "cash",
        icon: "banknote",
        label: "النقد",
        detail:
          "المال موجود في صورة أوراق فقط. يجب حمله وتخزينه وتسليمه شخصيًا. ولا يُسجَّل شيء، ومن ثم لا يتراكم شيء ليصبح دليلًا. وفي مصر لا يزال 26.5% من البالغين يتقاضون أجورهم بهذه الطريقة بالكامل.",
      },
      {
        id: "account",
        icon: "landmark",
        label: "الحساب البنكي",
        detail:
          "يجد المال مكانًا يستقر فيه غير الدرج. فتصبح الودائع آمنة وينشئ الحساب سجل معاملات. لكن إذا كانت الطريقة الوحيدة للوصول إليه هي زيارة الفرع، يظل الحساب مقيدًا بالجغرافيا وبساعات العمل.",
      },
      {
        id: "wallet",
        icon: "smartphone",
        label: "المحفظة الإلكترونية",
        detail:
          "ينفصل الحساب عن المبنى. فيصبح رقم الهاتف معرِّفًا للحساب والوكيل المحلي نقطة للنقد. وهذه هي الخطوة التي تصل إلى المناطق الريفية حيث لا يمكن تبرير فرع تجاريًا.",
      },
      {
        id: "payment",
        icon: "qrCode",
        label: "الدفع الرقمي",
        detail:
          "تتحرك الأموال دون العودة إلى النقد في كل خطوة. فالأجور تصل إلى الحساب، والفواتير تُسدد منه، والتحويلات تصل إلى محافظة أخرى في ثوانٍ. وتسرب مصر أشد ما يكون هنا: 43.1% يملكون حسابًا، و18.5% يدفعون ببطاقة أو هاتف.",
      },
      {
        id: "economy",
        icon: "building",
        label: "الاقتصاد الرقمي",
        detail:
          "تتبع ذلك آثار من الدرجة الثانية. فسجلات المعاملات تتيح للمقرضين تقييم مقترضين بلا ضمانات. والتجار يصلون إلى عملاء لا يحملون نقودًا. والتحويلات الحكومية تصل مباشرة. والنشاط الذي كان خفيًا يصبح قابلًا للقياس.",
      },
    ],
  },
  position: {
    eyebrow: "الوضع المقيس",
    title: "بنية تحتية مبنية، وعادة لم تُبنَ بعد",
    description:
      "طبقة الأجهزة في مصر قوية وقنوات المدفوعات حديثة. أما الأرقام المتأخرة فهي التي تصف ما يفعله الناس بها.",
    stats: {
      phone: {
        label: "يملكون هاتفًا محمولًا",
        detail: "أعلى من الهند، البالغة 66.5%.",
      },
      smartphone: {
        label: "هاتفهم الأساسي هاتف ذكي",
        detail: "أعلى أيضًا من الهند، البالغة 42.0%.",
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
    chartTitle: "النقد ما زال هو الأصل في الالتزامات المعتادة",
    chartRows: {
      utilityAny: "سددوا فاتورة مرافق (بأي وسيلة)",
      utilityCash: "سددوا فواتير المرافق نقدًا فقط",
      utilityCashNote:
        "كل من يسدد فاتورة مرافق في مصر تقريبًا يسددها نقدًا.",
      wagesCash: "تقاضوا أجورهم نقدًا فقط",
      wagesAccount: "تقاضوا أجورهم في حساب",
    },
  },
  beforeAfter: {
    eyebrow: "ما الذي يتغير",
    title: "قبل وبعد",
    description: "الجوانب الخمسة نفسها من الحياة المالية، في اقتصاد نقدي وفي اقتصاد رقمي.",
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
            "المال محفوظ ماديًا في المنزل أو مع الشخص. قد يُفقد أو يُسرق، ولا يحقق شيئًا بينما يقلل التضخم قوته الشرائية.",
        },
        after: {
          icon: "wallet",
          label: "محفظة رقمية",
          detail:
            "المال في حساب مرتبط برقم هاتف، محمي برقم سري، ويمكن تحريكه دون الحضور شخصيًا.",
        },
      },
      {
        aspect: "إلى أين تذهب",
        before: {
          icon: "landmark",
          label: "فرع فعلي",
          detail:
            "كل معاملة تتطلب الانتقال إلى فرع خلال ساعات العمل — ومع نحو 6.56 فرعًا لكل 100 ألف بالغ، غالبًا لمسافة طويلة.",
        },
        after: {
          icon: "smartphone",
          label: "هاتف، في أي مكان",
          detail:
            "الخدمة حيثما كان العميل. وبالنسبة للأسر الريفية يحوّل ذلك رحلة نصف يوم إلى مهمة تستغرق أقل من دقيقة.",
        },
      },
      {
        aspect: "ما هو مطلوب",
        before: {
          icon: "fileText",
          label: "أوراق ومستندات",
          detail:
            "نماذج وإثبات محل إقامة ومستندات لا يملكها غالبًا العاملون غير الرسميين والنازحون داخليًا.",
        },
        after: {
          icon: "fingerprint",
          label: "فتح متدرج",
          detail:
            "يمكن فتح محفظة أساسية بمستندات بسيطة وحدود معاملات منخفضة، ثم ترتفع الاشتراطات مع زيادة الاستخدام.",
        },
      },
      {
        aspect: "من يستطيع الوصول",
        before: {
          icon: "mapPin",
          label: "وصول محدود",
          detail:
            "الوصول تحدده الجغرافيا وساعات العمل. وكل من هو خارج نطاق الفرع يصبح خارج النظام تلقائيًا.",
        },
        after: {
          icon: "signal",
          label: "وصول عن بُعد",
          detail:
            "التغطية تتبع شبكة الهاتف المحمول لا شبكة الفروع. وامتلاك 84.6% من المصريين لهاتف يجعل هذا الانتشار أوسع بكثير.",
        },
      },
      {
        aspect: "ما الذي يتركه وراءه",
        before: {
          icon: "circleSlash",
          label: "لا سجل",
          detail:
            "المعاملة النقدية لا تثبت شيئًا بعد وقوعها. فلا يمكن إثبات الدخل، ومن ثم لا يمكن تقييم الائتمان بناءً عليه.",
        },
        after: {
          icon: "lineChart",
          label: "سجل معاملات",
          detail:
            "كل دفعة تضيف إلى سجل يمكنه دعم طلب — وهو أساس الإقراض لمقترضين لا يملكون ضمانات.",
        },
      },
    ],
  },
  caution: {
    label: "تنبيه.",
    body: "التمويل الرقمي يزيل التكلفة والمسافة. لكنه لا يزيل الفقر، ويأتي بمخاطره الخاصة — الاحتيال، واستبعاد من يفتقرون للاتصال أو الثقة، والاعتماد على أنظمة قد تتعطل. أما الـ90.1% من البالغين خارج النظام المصرفي في مصر الذين يذكرون عدم كفاية المال، فهم لا يصفون مشكلة يحلها تطبيق.",
  },
  rails: {
    eyebrow: "الأدوات",
    title: "مما يتكون التمويل الرقمي",
    description:
      "ست آليات تؤدي وظائف مختلفة. وقيمتها للشمول المالي تتوقف على قلة ما تطلبه من المستخدم أكثر من تطورها التقني.",
    items: [
      {
        icon: "wallet",
        title: "المحافظ الإلكترونية",
        body: "حساب معرَّف برقم هاتف، يُشحن ويُسحب منه عبر شبكة وكلاء. وهو أخف طريق للدخول إلى النظام الرسمي، والأنسب للمناطق التي لا فرع فيها.",
      },
      {
        icon: "smartphone",
        title: "الخدمات المصرفية عبر الهاتف",
        body: "حساب بنكي تقليدي يُدار من تطبيق: الأرصدة والتحويلات وسداد الفواتير وأدوات التحكم في البطاقة دون زيارة فرع. وهو يعمّق العلاقة لمن لديهم حسابات بالفعل.",
      },
      {
        icon: "landmark",
        title: "التحويلات الفورية",
        body: "شبكة المدفوعات اللحظية في مصر، التي أُطلقت عام 2022، تنقل الأموال بين البنوك ومقدمي خدمات الدفع في الوقت الحقيقي. وقد تسارع نمو امتلاك الحسابات بشكل ملحوظ في الفترة التالية.",
      },
      {
        icon: "qrCode",
        title: "الدفع برمز الاستجابة السريعة",
        body: "رمز مطبوع يتيح لتاجر صغير قبول الدفع الرقمي دون ماكينة بطاقات. وتنخفض تكلفة القبول إلى ما يقارب الصفر، وهو ما يهم أصغر التجار أكثر من غيرهم.",
      },
      {
        icon: "creditCard",
        title: "البطاقات ومسبقة الدفع",
        body: "بطاقات الخصم ومسبقة الدفع، بما فيها بطاقات الشبكة المحلية، توسّع الدفع الرقمي ليشمل من يفضلون أداة مادية. ويحتسب البنك المركزي البطاقات مسبقة الدفع ضمن مقياس الشمول لديه.",
      },
      {
        icon: "nfc",
        title: "الدفع اللاتلامسي وعبر الإنترنت",
        body: "الدفع باللمس والشراء الإلكتروني يقللان الاحتكاك عند نقطة البيع. ويتوقف انتشارهما على قبول التجار، وهو القيد الحاسم خارج المدن الكبرى.",
      },
    ],
  },
  cta: {
    title: "من الذي يبني هذه الأنظمة في مصر",
    description:
      "قطاع التكنولوجيا المالية، والمجالات التي يغطيها، وما يعنيه للمستهلكين والمشروعات والبنوك والحكومة.",
    primary: "التكنولوجيا المالية في مصر",
    secondary: "تعرف على خياراتك المصرفية",
  },
};

export const digitalFinance: Record<Locale, DigitalFinanceDict> = { en, ar };
