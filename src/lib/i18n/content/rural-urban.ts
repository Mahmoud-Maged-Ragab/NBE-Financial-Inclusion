import type { Locale } from "../config";

const en = {
  meta: {
    title: "Rural vs Urban Egypt",
    description:
      "Rural and urban Egypt face different barriers to financial inclusion — and different solutions. A six percentage point gap in account ownership, in a majority-rural country.",
  },
  hero: {
    eyebrow: "Egypt in focus",
    title: "Rural and urban Egypt",
    description:
      "The national figure of 43.1% hides two very different situations. Each comes with its own obstacles — and its own realistic fixes.",
  },
  gap: {
    eyebrow: "The measured gap",
    title: "Six percentage points, and a majority on the wrong side of it",
    description:
      "Rural account ownership trails urban ownership. What turns a modest-looking gap into a national problem is how many people sit on the rural side of it.",
    callout: {
      label: "Why this matters more than it looks.",
      body: "A six point gap would be minor in a country that was mostly urban. Egypt is not. With 56.7% of the population living in rural areas, the smaller percentage applies to the larger group — so most of Egypt's unbanked adults are rural, even though the rate itself is not dramatically lower.",
    },
    stats: {
      rural: {
        label: "Rural account ownership",
        detail: "Adults aged 15+ in rural areas holding an account.",
      },
      urban: {
        label: "Urban account ownership",
        detail: "Adults aged 15+ in urban areas holding an account.",
      },
      ruralShare: {
        label: "Of Egyptians live rurally",
        detail:
          "Egypt remains a majority-rural country, unlike most economies at its income level.",
      },
      branches: {
        label: "Bank branches per 100,000 adults",
        detail: "Nationally — and the network is concentrated in the cities.",
      },
    },
  },
  map: {
    eyebrow: "Geography",
    title: "A country living on a river",
    description:
      "Egypt's population isn't spread out across the country — it's concentrated along the Nile and its Delta, and that shapes what a bank's branch network can realistically look like. Pick a region below to see what gets in the way of financial inclusion there.",
    note: "Regional descriptions are qualitative. Egypt's published inclusion statistics are reported nationally and by rural/urban split, not by governorate, so no governorate-level rates are shown here.",
    labels: {
      alt: "Schematic map of Egypt showing the Delta, the Nile valley and the desert regions",
      regionsLabel: "Regions of Egypt",
      barriersHeading: "Barriers that dominate here",
      caption:
        "Schematic, not to scale. Almost the whole population lives on the green land — the Nile valley and its Delta — while the deserts make up most of the territory.",
      delta: "Delta",
      easternDesert: "Eastern Desert",
      westernDesert: "Western Desert",
      sinai: "Sinai",
      upperEgypt: "Upper Egypt",
    },
    regions: [
      {
        id: "delta" as const,
        name: "The Delta and Greater Cairo",
        character: "Dense, urban, best served",
        description:
          "The Nile Delta and the Cairo–Alexandria corridor hold Egypt's biggest cities and most of its branches, ATMs and card machines. Getting to a branch is rarely the problem here — the obstacles are a different kind entirely: paperwork, cost, trust in digital channels, and an informal sector that keeps people's earnings in cash.",
        barriers: [
          "Complex account-opening procedures",
          "Concern about fraud and digital security",
          "A large informal workforce paid in cash",
          "Cost of living leaving little to deposit",
        ],
      },
      {
        id: "valley" as const,
        name: "The Nile Valley and Upper Egypt",
        character: "Rural, agricultural, thinly served",
        description:
          "South of Cairo, the inhabited land narrows to a strip just a few kilometres wide on either side of the river. There are plenty of communities, but they're small, and branches get sparser the further you go from a governorate capital. Income here tends to be agricultural and seasonal — which doesn't fit well with products built around a fixed monthly salary.",
        barriers: [
          "Distance to the nearest branch or ATM",
          "Seasonal and irregular farm income",
          "Lower financial literacy and confidence",
          "Limited formal credit for smallholders",
        ],
      },
      {
        id: "frontier" as const,
        name: "The deserts and Sinai",
        character: "Sparse, remote, hardest to reach",
        description:
          "The Western Desert, the Red Sea coast and Sinai make up most of Egypt's land area but hold only a small share of its people. Communities are scattered across long distances, so a conventional branch is hard to justify commercially. This is where agent banking and mobile wallets do the most good — neither one needs a building.",
        barriers: [
          "Very long distances between settlements",
          "Branch networks hard to sustain commercially",
          "Patchier connectivity in remote areas",
          "Greater reliance on cash and on agents",
        ],
      },
    ],
  },
  solutions: {
    eyebrow: "Problem and response",
    title: "What can actually help",
    description:
      "Naming the barriers is only half the picture. Each one has a known response — though every response still depends on infrastructure, availability, and whether people can actually get to it.",
    ruralTitle: "Rural Egypt",
    urbanTitle: "Urban Egypt",
    caveat:
      "Digital solutions depend on network coverage, device access, agent availability and a person's confidence in using them. Where any of those is missing, the solution is not yet a solution.",
    rural: [
      {
        icon: "mapPin",
        problem: "Distance from financial institutions",
        solution:
          "Mobile banking and agent networks turn local shops into cash-in, cash-out points — so a service doesn't need a branch building to exist.",
      },
      {
        icon: "tractor",
        problem: "Seasonal and irregular income",
        solution:
          "Formal savings and payment tools designed for irregular deposits, rather than products that assume a fixed monthly salary.",
      },
      {
        icon: "graduation",
        problem: "Limited financial literacy",
        solution:
          "Financial education delivered at the moment of decision — when an account is opened or a payment is first made — in plain Arabic.",
      },
      {
        icon: "qrCode",
        problem: "Limited access to formal payments",
        solution:
          "Digital payment services that let people receive wages, send remittances and pay bills without travelling to a counter.",
      },
    ],
    urban: [
      {
        icon: "qrCode",
        problem: "Cash-dominated everyday transactions",
        solution:
          "Wider merchant acceptance of cards, wallets and QR codes, so digital payment is possible wherever people already shop.",
      },
      {
        icon: "send",
        problem: "Slow or costly money transfers",
        solution:
          "Instant transfers between banks and providers, which settle in real time rather than over days.",
      },
      {
        icon: "laptop",
        problem: "Time lost to branch visits",
        solution:
          "Online and mobile banking for balances, transfers and bill payments, available outside working hours.",
      },
      {
        icon: "receipt",
        problem: "No record of income or spending",
        solution:
          "Automatic transaction histories that make budgeting easier and make it simple to prove income when you need to.",
      },
      {
        icon: "landmark",
        problem: "Distance from formal financial services",
        solution:
          "More account types to choose from, including lighter-documentation wallets for people the standard onboarding process shuts out.",
      },
      {
        icon: "bookOpen",
        problem: "Uncertainty about how products work",
        solution:
          "Financial education and clearer, comparable disclosure of fees and terms before a product is chosen.",
      },
    ],
  },
  safety: {
    eyebrow: "The other side of digital",
    title: "Stay safe",
    description:
      "Urban Egypt is where digital adoption is highest — and therefore where exposure to fraud is greatest. These risks are real and worth naming.",
    risks: [
      {
        icon: "shield",
        title: "Cybersecurity",
        body: "Accounts reached from a phone need the phone itself to be secured: a lock screen, a private PIN, and apps installed only from official sources.",
      },
      {
        icon: "alert",
        title: "Fraud",
        body: "Most fraud does not break into a bank. It persuades a customer to authorise a payment or hand over a code, often by creating urgency.",
      },
      {
        icon: "send",
        title: "Phishing",
        body: "Messages and emails that imitate a bank, with a link to a convincing fake page. Reach your bank by typing its address or using its official app.",
      },
      {
        icon: "circleSlash",
        title: "Digital scams",
        body: "Offers that are too good to be true, prizes requiring a fee, or callers claiming to be from a bank. Genuine institutions do not work this way.",
      },
    ],
    neverTitle: "Never share these with anyone",
    never: ["Passwords", "PINs", "OTP codes", "Banking credentials"],
    neverNote:
      "No real bank will ever ask for these. Use official banking channels only, and contact your bank on its published number if anything seems wrong.",
  },
  income: {
    eyebrow: "The common thread",
    title: "Income matters more than geography",
    description:
      "Compare the rural and urban figures against the income split, and the ranking flips. The widest gap in Egyptian account ownership isn't between village and city at all.",
    body1:
      "The rural–urban gap is 6.0 points. The gap between the poorest 40% and the richest 60% is 16.7 points — nearly three times as wide. Poverty predicts exclusion better than geography does, and it shows up in villages and cities alike.",
    body2:
      "That has a practical upshot. Building branches in villages helps with distance, which is a real problem but a secondary one. Products priced for small, irregular balances tackle the constraint that actually matters — and they help a low-income household in Cairo just as much as one in a village.",
    chartTitle: "Account ownership by group, Egypt",
    chartCaption: "Adults aged 15+ with an account, by group.",
    groups: {
      poorest: "Poorest 40% by income",
      rural: "Rural",
      women: "Women",
      national: "National average",
      urban: "Urban",
      men: "Men",
      secondary: "Secondary education or more",
      richest: "Richest 60% by income",
    },
  },
  cta: {
    title: "Eight barriers recur across the evidence",
    description:
      "Distance, literacy, informality, the digital divide, credit, trust, cybersecurity and documentation — each with what has been tried against it.",
    primary: "Read the challenges",
    secondary: "How digital changes this",
  },
};

export type RuralUrbanDict = typeof en;

const ar: RuralUrbanDict = {
  meta: {
    title: "الريف والحضر في مصر",
    description:
      "يواجه ريف مصر وحضرها عقبات مختلفة أمام الشمول المالي — وحلولًا مختلفة. فجوة قدرها ست نقاط مئوية في امتلاك الحسابات، في بلد أغلب سكانه في الريف.",
  },
  hero: {
    eyebrow: "مصر عن قرب",
    title: "الريف والحضر في مصر",
    description:
      "الرقم الوطني البالغ 43.1% يخفي في الحقيقة وضعين مختلفين تمامًا. لكل منهما عقباته، ولكل منهما أيضًا حلوله الواقعية.",
  },
  gap: {
    eyebrow: "الفجوة المقيسة",
    title: "ست نقاط مئوية، والأغلبية في الجانب الأصعب",
    description:
      "امتلاك الحسابات في الريف أقل منه في الحضر. وما يحوّل فجوة تبدو متواضعة إلى مشكلة وطنية هو عدد من يقعون في الجانب الريفي منها.",
    callout: {
      label: "لماذا الأمر أهم مما يبدو.",
      body: "فجوة من ست نقاط ستكون بسيطة في بلد أغلبه حضري. ومصر ليست كذلك. فمع عيش 56.7% من السكان في الريف، تنطبق النسبة الأقل على المجموعة الأكبر — ومن ثم فإن أغلب البالغين خارج النظام المصرفي في مصر هم من الريف، حتى وإن لم يكن المعدل نفسه أقل بفارق كبير.",
    },
    stats: {
      rural: {
        label: "امتلاك الحسابات في الريف",
        detail: "البالغون من عمر 15 عامًا فأكثر في المناطق الريفية ممن يملكون حسابًا.",
      },
      urban: {
        label: "امتلاك الحسابات في الحضر",
        detail: "البالغون من عمر 15 عامًا فأكثر في المناطق الحضرية ممن يملكون حسابًا.",
      },
      ruralShare: {
        label: "من المصريين يعيشون في الريف",
        detail:
          "ما زالت مصر بلدًا أغلب سكانه في الريف، بخلاف معظم الاقتصادات عند مستوى دخلها.",
      },
      branches: {
        label: "فرعًا مصرفيًا لكل 100 ألف بالغ",
        detail: "على المستوى الوطني — والشبكة متركزة في المدن.",
      },
    },
  },
  map: {
    eyebrow: "الجغرافيا",
    title: "بلد يعيش على نهر",
    description:
      "سكان مصر ليسوا موزعين على أراضيها بالتساوي — بل متركزون على ضفاف النيل ودلتاه، وهذا ما يحدد الشكل الذي يمكن أن تكون عليه شبكة فروع أي بنك اقتصاديًا. اختر منطقة من الأسفل لترى ما الذي يعيق الشمول المالي فيها.",
    note: "أوصاف المناطق نوعية. فإحصاءات الشمول المالي المنشورة في مصر تُعرض وطنيًا وبتقسيم ريف/حضر لا على مستوى المحافظات، ولذلك لا تُعرض هنا معدلات على مستوى المحافظة.",
    labels: {
      alt: "خريطة تخطيطية لمصر تُظهر الدلتا ووادي النيل والمناطق الصحراوية",
      regionsLabel: "مناطق مصر",
      barriersHeading: "العقبات الغالبة هنا",
      caption:
        "خريطة تخطيطية غير مرسومة بمقياس رسم. يعيش السكان كلهم تقريبًا على الأرض الخضراء — وادي النيل ودلتاه — بينما تشكل الصحاري معظم المساحة.",
      delta: "الدلتا",
      easternDesert: "الصحراء الشرقية",
      westernDesert: "الصحراء الغربية",
      sinai: "سيناء",
      upperEgypt: "صعيد مصر",
    },
    regions: [
      {
        id: "delta" as const,
        name: "الدلتا والقاهرة الكبرى",
        character: "كثيفة وحضرية والأفضل خدمة",
        description:
          "تضم دلتا النيل ومحور القاهرة–الإسكندرية أكبر مدن مصر ومعظم فروعها وماكينات الصراف ونقاط البيع. والوصول إلى فرع نادرًا ما يكون المشكلة هنا. العقبات مختلفة تمامًا: المستندات، والتكلفة، والثقة في القنوات الرقمية، وقطاع غير رسمي يُبقي دخل الناس نقدًا.",
        barriers: [
          "إجراءات معقدة لفتح الحساب",
          "القلق من الاحتيال وأمن المعاملات الرقمية",
          "قوة عمل غير رسمية كبيرة تتقاضى نقدًا",
          "تكلفة معيشة لا تترك الكثير للإيداع",
        ],
      },
      {
        id: "valley" as const,
        name: "وادي النيل وصعيد مصر",
        character: "ريفية وزراعية وقليلة الخدمة",
        description:
          "جنوب القاهرة، تضيق الأرض المأهولة إلى شريط لا يتجاوز عرضه بضعة كيلومترات على جانبي النهر. المجتمعات كثيرة لكنها صغيرة، وتقل الفروع كلما ابتعدنا عن عاصمة المحافظة. والدخل هنا غالبًا زراعي وموسمي — وهو ما لا يتلاءم جيدًا مع منتجات مبنية على راتب شهري ثابت.",
        barriers: [
          "بُعد المسافة إلى أقرب فرع أو ماكينة صراف",
          "دخل زراعي موسمي وغير منتظم",
          "ثقافة مالية وثقة أقل",
          "ائتمان رسمي محدود لصغار المزارعين",
        ],
      },
      {
        id: "frontier" as const,
        name: "الصحاري وسيناء",
        character: "متناثرة ونائية والأصعب وصولًا",
        description:
          "تشكل الصحراء الغربية وساحل البحر الأحمر وسيناء معظم مساحة مصر، لكنها لا تضم سوى نسبة صغيرة من سكانها. والتجمعات متباعدة عبر مسافات طويلة، ما يجعل تبرير إنشاء فرع تقليدي أمرًا صعبًا اقتصاديًا. وهنا تحديدًا تصنع الخدمات عبر الوكلاء والمحافظ الإلكترونية أكبر فرق — فلا واحدة منهما تحتاج إلى مبنى.",
        barriers: [
          "مسافات شاسعة بين التجمعات السكنية",
          "صعوبة استدامة شبكات الفروع تجاريًا",
          "تغطية شبكات أقل انتظامًا في المناطق النائية",
          "اعتماد أكبر على النقد وعلى الوكلاء",
        ],
      },
    ],
  },
  solutions: {
    eyebrow: "المشكلة والاستجابة",
    title: "ما الذي يمكن أن يساعد فعلًا",
    description:
      "تسمية العقبات نصف الصورة فقط. فلكل منها استجابة معروفة — لكن كل استجابة تظل مرهونة بالبنية التحتية والإتاحة وقدرة الناس فعليًا على الوصول إليها.",
    ruralTitle: "ريف مصر",
    urbanTitle: "حضر مصر",
    caveat:
      "تعتمد الحلول الرقمية على تغطية الشبكة، وإتاحة الأجهزة، وتوافر الوكلاء، وثقة الشخص في استخدامها. وحيثما غاب أي من ذلك، لا يكون الحل حلًا بعد.",
    rural: [
      {
        icon: "mapPin",
        problem: "البعد عن المؤسسات المالية",
        solution:
          "تحوّل الخدمات المصرفية عبر الهاتف وشبكات الوكلاء المتاجر المحلية إلى نقاط إيداع وسحب — فلا تحتاج الخدمة إلى مبنى فرع لتوجد.",
      },
      {
        icon: "tractor",
        problem: "دخل موسمي وغير منتظم",
        solution:
          "أدوات ادخار ومدفوعات رسمية مصممة للإيداعات غير المنتظمة، بدل منتجات تفترض راتبًا شهريًا ثابتًا.",
      },
      {
        icon: "graduation",
        problem: "ثقافة مالية محدودة",
        solution:
          "تثقيف مالي يُقدَّم في لحظة القرار — عند فتح الحساب أو إجراء أول دفعة — بلغة عربية بسيطة.",
      },
      {
        icon: "qrCode",
        problem: "وصول محدود للمدفوعات الرسمية",
        solution:
          "خدمات دفع رقمية تتيح استلام الأجور وإرسال التحويلات وسداد الفواتير دون الانتقال إلى شباك.",
      },
    ],
    urban: [
      {
        icon: "qrCode",
        problem: "هيمنة النقد على المعاملات اليومية",
        solution:
          "توسيع قبول التجار للبطاقات والمحافظ ورموز الاستجابة السريعة، ليصبح الدفع الرقمي ممكنًا حيث يتسوق الناس بالفعل.",
      },
      {
        icon: "send",
        problem: "تحويلات بطيئة أو مرتفعة التكلفة",
        solution:
          "تحويلات فورية بين البنوك ومقدمي الخدمة، تُسوّى في الوقت الحقيقي بدل أن تستغرق أيامًا.",
      },
      {
        icon: "laptop",
        problem: "وقت ضائع في زيارات الفروع",
        solution:
          "خدمات مصرفية عبر الإنترنت والهاتف للأرصدة والتحويلات وسداد الفواتير، متاحة خارج ساعات العمل.",
      },
      {
        icon: "receipt",
        problem: "غياب سجل للدخل والإنفاق",
        solution:
          "سجلات معاملات تلقائية تسهّل وضع الميزانية، وتجعل إثبات الدخل عند الحاجة أمرًا بسيطًا.",
      },
      {
        icon: "landmark",
        problem: "البعد عن الخدمات المالية الرسمية",
        solution:
          "خيارات أكثر لأنواع الحسابات، بما فيها محافظ بمستندات أخف لمن يُقصيهم إجراء الفتح الكامل.",
      },
      {
        icon: "bookOpen",
        problem: "عدم وضوح كيفية عمل المنتجات",
        solution:
          "تثقيف مالي وإفصاح أوضح وقابل للمقارنة عن الرسوم والشروط قبل اختيار المنتج.",
      },
    ],
  },
  safety: {
    eyebrow: "الوجه الآخر للرقمنة",
    title: "ابقَ آمنًا",
    description:
      "الحضر في مصر هو الأعلى في التبني الرقمي — ومن ثم الأكثر تعرضًا للاحتيال. وهذه مخاطر حقيقية تستحق التسمية.",
    risks: [
      {
        icon: "shield",
        title: "الأمن السيبراني",
        body: "الحسابات التي تُدار من الهاتف تتطلب تأمين الهاتف نفسه: قفل للشاشة، ورقم سري خاص، وتطبيقات تُثبَّت من المصادر الرسمية فقط.",
      },
      {
        icon: "alert",
        title: "الاحتيال",
        body: "معظم عمليات الاحتيال لا تخترق بنكًا، بل تقنع العميل باعتماد دفعة أو تسليم رمز، غالبًا عبر افتعال الاستعجال.",
      },
      {
        icon: "send",
        title: "التصيّد الإلكتروني",
        body: "رسائل وبريد إلكتروني تحاكي البنك، مع رابط لصفحة مزيفة مقنعة. تواصل مع بنكك بكتابة عنوانه بنفسك أو عبر تطبيقه الرسمي.",
      },
      {
        icon: "circleSlash",
        title: "عمليات النصب الرقمية",
        body: "عروض أفضل من أن تكون حقيقية، أو جوائز تتطلب رسومًا، أو متصلون يدّعون أنهم من بنك. المؤسسات الحقيقية لا تعمل بهذه الطريقة.",
      },
    ],
    neverTitle: "لا تشارك هذه المعلومات مع أي شخص",
    never: ["كلمات المرور", "الأرقام السرية", "رموز التحقق", "بيانات الدخول المصرفية"],
    neverNote:
      "لن يطلب منك أي بنك حقيقي هذه المعلومات أبدًا. استخدم القنوات المصرفية الرسمية فقط، وتواصل مع بنكك على رقمه المعلن إذا بدا أي شيء غير سليم.",
  },
  income: {
    eyebrow: "الخيط المشترك",
    title: "الدخل أهم من الجغرافيا",
    description:
      "قارن أرقام الريف والحضر بتقسيم الدخل، وسيتغيّر الترتيب تمامًا. فأوسع فجوة في امتلاك الحسابات في مصر ليست بين القرية والمدينة أصلًا.",
    body1:
      "الفجوة بين الريف والحضر 6.0 نقاط. أما الفجوة بين الأفقر 40% والأغنى 60% فهي 16.7 نقطة — أي نحو ثلاثة أضعاف. فالفقر مؤشر على الاستبعاد أقوى من مكان السكن، ويظهر في القرى والمدن على حد سواء.",
    body2:
      "ولهذا نتيجة عملية. بناء الفروع في القرى يعالج مشكلة المسافة، وهي حقيقية لكنها ثانوية. أما المنتجات المسعّرة للأرصدة الصغيرة وغير المنتظمة فتعالج القيد الذي يهم فعلًا — وتساعد أسرة منخفضة الدخل في القاهرة بقدر ما تساعد أسرة في قرية.",
    chartTitle: "امتلاك الحسابات بحسب الفئة، مصر",
    chartCaption: "البالغون من عمر 15 عامًا فأكثر ممن يملكون حسابًا، بحسب الفئة.",
    groups: {
      poorest: "الأفقر 40% بحسب الدخل",
      rural: "الريف",
      women: "النساء",
      national: "المتوسط الوطني",
      urban: "الحضر",
      men: "الرجال",
      secondary: "تعليم ثانوي أو أعلى",
      richest: "الأغنى 60% بحسب الدخل",
    },
  },
  cta: {
    title: "ثماني عقبات تتكرر عبر الأدلة",
    description:
      "المسافة، والثقافة المالية، والقطاع غير الرسمي، والفجوة الرقمية، والائتمان، والثقة، والأمن السيبراني، والمستندات — مع ما جُرِّب تجاه كل منها.",
    primary: "اقرأ التحديات",
    secondary: "كيف يغيّر التمويل الرقمي ذلك",
  },
};

export const ruralUrban: Record<Locale, RuralUrbanDict> = { en, ar };
