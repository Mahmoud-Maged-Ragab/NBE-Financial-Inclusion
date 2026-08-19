import type { Locale } from "../config";

const en = {
  meta: {
    title: "FinTech in Egypt",
    description:
      "What FinTech is, the categories operating in Egypt, verified Egyptian examples, and what the sector means for consumers, businesses, banks and government.",
  },
  hero: {
    eyebrow: "Technology",
    title: "FinTech in Egypt",
    description:
      "FinTech is the application of technology to financial services. In an economy where distance and administrative cost have made low-income customers unprofitable to serve, that is not a marginal improvement — it changes who can be served at all.",
  },
  what: {
    eyebrow: "Definition",
    title: "What FinTech actually changes",
    description:
      "Not the products themselves — payments, savings, credit and insurance are old. What changes is the cost of delivering them and the information available to price them.",
    points: [
      {
        n: "01",
        t: "It removes the branch from the equation",
        b: "A phone and an agent can do what previously required a building, staff and opening hours. In a country with 6.56 branches per 100,000 adults, this is the difference between a service existing and not existing.",
      },
      {
        n: "02",
        t: "It collapses the cost per transaction",
        b: "When processing a payment costs almost nothing, small and frequent transactions become worth serving. That is precisely the transaction profile of low-income customers.",
      },
      {
        n: "03",
        t: "It creates data where there was none",
        b: "Every digital payment adds to a record. For a borrower with no collateral and no payslip, that record is the only realistic basis on which a lender could ever say yes.",
      },
    ],
    caveat: {
      title: "A caveat worth stating plainly",
      body1:
        "FinTech is an enabler, not an outcome. It lowers the cost of serving people who were previously uneconomic to serve. It does not raise their incomes, and it cannot by itself resolve the reason 90.1% of unbanked Egyptian adults give for having no account — that they do not have enough money.",
      body2:
        "It also introduces genuine risks: fraud that targets inexperienced users, credit extended faster than it can be assessed, and dependence on systems that occasionally fail. A serious account of FinTech and inclusion has to hold both the opportunity and the risk at once.",
    },
  },
  categories: {
    eyebrow: "The sector",
    title: "Six categories",
    description:
      "Each does a different job, and they contribute to inclusion in very different measure. Select a category to read what it covers.",
    label: "FinTech categories",
    items: [
      {
        id: "payments",
        icon: "qrCode",
        title: "Digital payments",
        summary: "Moving money between people, merchants and institutions.",
        detail:
          "The largest and most mature category in Egypt, and the one with the most direct bearing on inclusion. Payments matter disproportionately because they are the entry point: most people meet the formal financial system by paying for something, not by opening a savings product.",
        points: [
          "Bill payment and cash-in/cash-out agent networks",
          "Merchant acceptance through cards, QR codes and links",
          "Mobile wallets operated by banks and telecom providers",
          "Instant account-to-account transfers between institutions",
        ],
      },
      {
        id: "banking",
        icon: "smartphone",
        title: "Digital banking",
        summary: "Banking services delivered without a branch.",
        detail:
          "Mobile-first banking covers established banks putting services into an app and newer entrants building around a digital-only model. For inclusion the significant feature is onboarding: how much documentation is required, and whether an account can be opened without visiting a building.",
        points: [
          "Remote account opening with tiered documentation",
          "Everyday banking operated entirely from a phone",
          "Lower cost to serve, which makes small balances viable",
          "Card controls, limits and alerts managed by the customer",
        ],
      },
      {
        id: "lending",
        icon: "coins",
        title: "Lending and microfinance",
        summary: "Credit assessed on data rather than collateral.",
        detail:
          "Only 10.4% of Egyptian adults borrowed from a formal institution in 2024, against 38.4% who borrowed from family or friends. Digital lenders address this by assessing borrowers on transaction history rather than property. It is also where consumer protection matters most, because badly underwritten credit harms the people it is supposed to help.",
        points: [
          "Microfinance for traders and smallholders",
          "Working capital advanced against payment history",
          "Instalment products offered at checkout",
          "Supply chain and invoice finance for small suppliers",
        ],
      },
      {
        id: "insurtech",
        icon: "shield",
        title: "InsurTech",
        summary: "Insurance sold and settled digitally, in smaller units.",
        detail:
          "Insurance is the least developed part of the inclusion picture in Egypt and across the region. The FinTech contribution is mostly in distribution and unit size: policies sold through a phone, priced in amounts a low-income household can commit to, and settled without a months-long paper process.",
        points: [
          "Policies distributed digitally rather than through agents",
          "Smaller, shorter-duration cover suited to low incomes",
          "Faster, lower-friction claims handling",
          "Cover bundled with products people already use",
        ],
      },
      {
        id: "investment",
        icon: "lineChart",
        title: "Investment technology",
        summary: "Saving and investing at accessible minimums.",
        detail:
          "Platforms that lower the minimum amount and the minimum knowledge required to save or invest. With 13.8% of Egyptian adults saving at a financial institution, the gap is wide — though investment products serve people who already have a surplus, which makes this a later-stage inclusion category.",
        points: [
          "Low minimum balances for savings and funds",
          "Automated and rules-based saving",
          "Access to instruments previously restricted by size",
          "Education embedded in the product itself",
        ],
      },
      {
        id: "infrastructure",
        icon: "building",
        title: "Payment infrastructure",
        summary: "The rails everything else is built on.",
        detail:
          "The least visible category and arguably the most consequential. National switches, instant payment networks, domestic card schemes and the interfaces connecting banks determine what any consumer-facing product can offer. Egypt's Instant Payment Network, launched in 2022, is the clearest example.",
        points: [
          "The national instant payment network and its participants",
          "The domestic card scheme used for public disbursements",
          "Interfaces connecting banks, wallets and providers",
          "Identity and verification services underpinning onboarding",
        ],
      },
    ],
  },
  examples: {
    eyebrow: "On the ground",
    title: "Egyptian examples",
    description:
      "Only institutions and infrastructure whose existence and role can be verified from public records are named here. Figures on individual company performance are deliberately not reproduced, because they change quickly and are not central to the argument.",
    items: [
      {
        name: "Fawry",
        category: "Payments and agent network",
        body: "Founded in 2008 and listed on the Egyptian Exchange since 2019 under the ticker FWRY, Fawry operates one of Egypt's largest bill payment and agent networks. Its relevance to inclusion is the agent model: a corner shop can act as a payment point, extending reach where a branch would never be built.",
        source: "egx",
      },
      {
        name: "Instant Payment Network and InstaPay",
        category: "Payment infrastructure",
        body: "Egypt's instant payment rail, launched in 2022 and operated by the Egyptian Banks Company for Technological Advancement, moves money between participating banks and providers in real time. The World Bank notes Egypt's account ownership growth ran well above average in the period following its launch.",
        source: "instapay",
      },
      {
        name: "Mobile wallets",
        category: "Digital payments and banking",
        body: "Wallets offered by banks and telecom operators are counted within the Central Bank's financial inclusion measure alongside bank accounts, Egypt Post accounts and prepaid cards. They are the mechanism through which much of the recent growth in that measure has been delivered.",
        source: "cbeInclusion2025",
      },
      {
        name: "FinTech Egypt",
        category: "Ecosystem and regulation",
        body: "The Central Bank of Egypt launched its FinTech and Innovation Strategy in 2019 and established FinTech Egypt to map and support the sector. Its landscape report identified a sector of several hundred stakeholders, including startups and licensed payment service providers.",
        source: "cbeFintech",
      },
    ],
  },
  benefits: {
    eyebrow: "Who gains",
    title: "Four groups, four different returns",
    description:
      "FinTech only sustains itself where it benefits every party in the chain. Where one side carries the cost and another takes the gain, adoption stalls.",
    items: [
      {
        icon: "smartphone",
        title: "For consumers",
        points: [
          "Reach a financial service without reaching a branch",
          "Lower cost per transaction, which makes small payments worth making",
          "Products that fit irregular income rather than a monthly salary",
          "A transaction record that can support a future application",
        ],
      },
      {
        icon: "building",
        title: "For businesses",
        points: [
          "Accept payment from customers who carry no cash",
          "Evidence real revenue when applying for working capital",
          "Spend less time and risk handling physical cash",
          "Sell beyond the immediate neighbourhood",
        ],
      },
      {
        icon: "landmark",
        title: "For banks",
        points: [
          "Serve small balances at a cost that makes them viable",
          "Acquire customers without opening new branches",
          "Assess credit risk using data rather than collateral alone",
          "Meet the 25% MSME lending requirement with better information",
        ],
      },
      {
        icon: "trendingUp",
        title: "For government",
        points: [
          "Deliver subsidies and transfers directly and traceably",
          "Reduce the cost of distributing public payments",
          "Widen the tax base as informal activity becomes visible",
          "Build better data on which to base economic policy",
        ],
      },
    ],
  },
  regulation: {
    eyebrow: "The other half",
    title: "Regulation is what makes it usable",
    items: [
      {
        icon: "shield",
        title: "Consumer protection",
        body: "Named as a pillar of Egypt's national financial inclusion strategy. Without transparent pricing and working dispute resolution, adoption depends on trust that has no basis.",
      },
      {
        icon: "banknote",
        title: "MSME lending requirements",
        body: "The Central Bank requires banks to direct 25% of lending portfolios to MSMEs, with at least 10% to small enterprises — pushing credit towards firms that FinTech data can now help assess.",
      },
      {
        icon: "landmark",
        title: "Licensing and oversight",
        body: "Payment service providers operate under Central Bank authorisation. Licensing is what separates a financial service from an unregulated app holding people's money.",
      },
      {
        icon: "trendingUp",
        title: "A strategy with a horizon",
        body: "The second national financial inclusion strategy runs from 2026 to 2030 and names digital financial services, financial literacy, consumer protection and SME growth among its priorities.",
      },
    ],
  },
  cta: {
    title: "Who is still being left behind",
    description:
      "Egypt's gender gap has narrowed sharply on one measure and persists on another. The evidence is worth reading carefully.",
    primary: "Women & Financial Inclusion",
    secondary: "Small Businesses",
  },
};

export type FintechDict = typeof en;

const ar: FintechDict = {
  meta: {
    title: "التكنولوجيا المالية في مصر",
    description:
      "ما هي التكنولوجيا المالية، والمجالات العاملة في مصر، وأمثلة مصرية موثقة، وما يعنيه القطاع للمستهلكين والمشروعات والبنوك والحكومة.",
  },
  hero: {
    eyebrow: "التكنولوجيا",
    title: "التكنولوجيا المالية في مصر",
    description:
      "التكنولوجيا المالية هي تطبيق التقنية على الخدمات المالية. وفي اقتصاد جعلت فيه المسافة والتكلفة الإدارية خدمة العملاء منخفضي الدخل غير مربحة، لا يعد ذلك تحسينًا هامشيًا — بل يغيّر من يمكن خدمته أصلًا.",
  },
  what: {
    eyebrow: "التعريف",
    title: "ما الذي تغيّره التكنولوجيا المالية فعلًا",
    description:
      "ليست المنتجات نفسها — فالمدفوعات والادخار والائتمان والتأمين قديمة. ما يتغير هو تكلفة تقديمها والمعلومات المتاحة لتسعيرها.",
    points: [
      {
        n: "01",
        t: "تُخرج الفرع من المعادلة",
        b: "هاتف ووكيل يمكنهما أداء ما كان يتطلب مبنى وموظفين وساعات عمل. وفي بلد به 6.56 فرعًا لكل 100 ألف بالغ، هذا هو الفرق بين وجود الخدمة وعدم وجودها.",
      },
      {
        n: "02",
        t: "تخفض تكلفة المعاملة الواحدة بشدة",
        b: "حين تصبح معالجة الدفعة شبه مجانية، تصير المعاملات الصغيرة والمتكررة جديرة بالخدمة. وهذا بالضبط هو نمط معاملات العملاء منخفضي الدخل.",
      },
      {
        n: "03",
        t: "تُنشئ بيانات حيث لم تكن موجودة",
        b: "كل دفعة رقمية تضيف إلى سجل. وبالنسبة لمقترض بلا ضمانات وبلا كشف راتب، فإن ذلك السجل هو الأساس الواقعي الوحيد الذي يمكن لمقرض أن يوافق بناءً عليه.",
      },
    ],
    caveat: {
      title: "تحفظ يستحق التصريح به بوضوح",
      body1:
        "التكنولوجيا المالية عامل تمكين لا نتيجة. فهي تخفض تكلفة خدمة من كانت خدمتهم غير مجدية اقتصاديًا. لكنها لا ترفع دخولهم، ولا تستطيع وحدها معالجة السبب الذي يذكره 90.1% من البالغين خارج النظام المصرفي في مصر — وهو عدم كفاية المال.",
      body2:
        "كما أنها تأتي بمخاطر حقيقية: احتيال يستهدف المستخدمين قليلي الخبرة، وائتمان يُمنح أسرع مما يمكن تقييمه، واعتماد على أنظمة قد تتعطل أحيانًا. وأي عرض جاد للتكنولوجيا المالية والشمول لا بد أن يحمل الفرصة والمخاطرة معًا.",
    },
  },
  categories: {
    eyebrow: "القطاع",
    title: "ستة مجالات",
    description:
      "كل منها يؤدي وظيفة مختلفة، وتتفاوت مساهمتها في الشمول المالي تفاوتًا كبيرًا. اختر مجالًا لتقرأ ما يشمله.",
    label: "مجالات التكنولوجيا المالية",
    items: [
      {
        id: "payments",
        icon: "qrCode",
        title: "المدفوعات الرقمية",
        summary: "تحريك الأموال بين الأفراد والتجار والمؤسسات.",
        detail:
          "أكبر المجالات وأنضجها في مصر، والأوثق صلة بالشمول المالي. وتكتسب المدفوعات أهمية غير متناسبة لأنها نقطة الدخول: فمعظم الناس يلتقون بالنظام المالي الرسمي عبر الدفع مقابل شيء، لا عبر فتح منتج ادخاري.",
        points: [
          "شبكات سداد الفواتير والوكلاء للإيداع والسحب",
          "قبول التجار عبر البطاقات ورموز الاستجابة السريعة والروابط",
          "محافظ إلكترونية تديرها البنوك وشركات الاتصالات",
          "تحويلات فورية بين الحسابات عبر المؤسسات",
        ],
      },
      {
        id: "banking",
        icon: "smartphone",
        title: "الخدمات المصرفية الرقمية",
        summary: "خدمات مصرفية تُقدَّم دون فرع.",
        detail:
          "تشمل الخدمات المصرفية القائمة على الهاتف بنوكًا قائمة تنقل خدماتها إلى تطبيق، وجهات أحدث تُبنى حول نموذج رقمي بالكامل. والسمة المهمة للشمول هي إجراءات الفتح: حجم المستندات المطلوبة، وإمكانية فتح حساب دون زيارة مبنى.",
        points: [
          "فتح حساب عن بُعد بمستندات متدرجة",
          "خدمات مصرفية يومية تُدار كليًا من الهاتف",
          "تكلفة خدمة أقل تجعل الأرصدة الصغيرة مجدية",
          "أدوات تحكم وحدود وتنبيهات يديرها العميل",
        ],
      },
      {
        id: "lending",
        icon: "coins",
        title: "الإقراض والتمويل متناهي الصغر",
        summary: "ائتمان يُقيَّم بالبيانات لا بالضمانات.",
        detail:
          "اقترض 10.4% فقط من البالغين في مصر من مؤسسة رسمية في 2024، مقابل 38.4% اقترضوا من الأهل أو الأصدقاء. ويعالج المقرضون الرقميون ذلك بتقييم المقترضين وفق سجل معاملاتهم لا وفق ممتلكاتهم. وهو أيضًا المجال الذي تكتسب فيه حماية المستهلك أكبر أهمية، لأن الائتمان سيئ التقييم يضر بمن يُفترض أن يساعدهم.",
        points: [
          "تمويل متناهي الصغر للتجار وصغار المزارعين",
          "رأس مال عامل يُمنح مقابل سجل المدفوعات",
          "منتجات تقسيط تُعرض عند نقطة الشراء",
          "تمويل سلاسل التوريد والفواتير للموردين الصغار",
        ],
      },
      {
        id: "insurtech",
        icon: "shield",
        title: "تكنولوجيا التأمين",
        summary: "تأمين يُباع ويُسوَّى رقميًا، بوحدات أصغر.",
        detail:
          "التأمين هو الجزء الأقل تطورًا في صورة الشمول المالي في مصر والمنطقة. ومساهمة التكنولوجيا المالية تتركز في التوزيع وحجم الوحدة: وثائق تُباع عبر الهاتف، ومسعّرة بمبالغ تستطيع الأسرة منخفضة الدخل الالتزام بها، وتُسوَّى دون إجراءات ورقية تستغرق شهورًا.",
        points: [
          "وثائق تُوزَّع رقميًا بدل الوكلاء",
          "تغطية أصغر وأقصر مدة تناسب الدخول المنخفضة",
          "معالجة مطالبات أسرع وأقل احتكاكًا",
          "تغطية مدمجة مع منتجات يستخدمها الناس بالفعل",
        ],
      },
      {
        id: "investment",
        icon: "lineChart",
        title: "تكنولوجيا الاستثمار",
        summary: "ادخار واستثمار بحدود دنيا في المتناول.",
        detail:
          "منصات تخفض الحد الأدنى للمبلغ والحد الأدنى من المعرفة اللازمين للادخار أو الاستثمار. ومع ادخار 13.8% فقط من البالغين في مصر لدى مؤسسة مالية، تبدو الفجوة واسعة — وإن كانت المنتجات الاستثمارية تخدم من لديهم فائض بالفعل، مما يجعلها مجالًا لمرحلة لاحقة من الشمول.",
        points: [
          "حدود دنيا منخفضة للأرصدة والصناديق",
          "ادخار آلي وقائم على قواعد",
          "الوصول لأدوات كانت مقيدة بحجم الاستثمار",
          "تثقيف مدمج داخل المنتج نفسه",
        ],
      },
      {
        id: "infrastructure",
        icon: "building",
        title: "البنية التحتية للمدفوعات",
        summary: "القنوات التي يُبنى عليها كل ما سبق.",
        detail:
          "أقل المجالات ظهورًا وربما أكثرها أثرًا. فالمقاصة الوطنية وشبكات المدفوعات اللحظية وشبكات البطاقات المحلية والواجهات التي تربط البنوك تحدد ما يمكن لأي منتج موجه للمستهلك أن يقدمه. وشبكة المدفوعات اللحظية في مصر، التي أُطلقت عام 2022، أوضح مثال على ذلك.",
        points: [
          "شبكة المدفوعات اللحظية الوطنية والمشاركون فيها",
          "شبكة البطاقات المحلية المستخدمة في الصرف الحكومي",
          "واجهات تربط البنوك والمحافظ ومقدمي الخدمة",
          "خدمات الهوية والتحقق التي ترتكز عليها إجراءات الفتح",
        ],
      },
    ],
  },
  examples: {
    eyebrow: "على أرض الواقع",
    title: "أمثلة مصرية",
    description:
      "لم تُذكر هنا سوى مؤسسات وبنى تحتية يمكن التحقق من وجودها ودورها من السجلات العامة. وقد امتنعنا عمدًا عن إيراد أرقام أداء الشركات الفردية، لأنها تتغير سريعًا وليست جوهرية في هذا العرض.",
    items: [
      {
        name: "فوري",
        category: "المدفوعات وشبكة الوكلاء",
        body: "تأسست عام 2008 ومقيدة في البورصة المصرية منذ 2019 برمز FWRY، وتدير فوري واحدة من أكبر شبكات سداد الفواتير والوكلاء في مصر. وصلتها بالشمول المالي هي نموذج الوكيل: فمتجر صغير يمكن أن يكون نقطة دفع، مما يوسّع الانتشار حيث لا يمكن بناء فرع.",
        source: "egx",
      },
      {
        name: "شبكة المدفوعات اللحظية وإنستاباي",
        category: "البنية التحتية للمدفوعات",
        body: "قناة المدفوعات اللحظية في مصر، التي أُطلقت عام 2022 وتديرها شركة البنوك المصرية للتقدم التكنولوجي، تنقل الأموال بين البنوك ومقدمي الخدمة المشاركين في الوقت الحقيقي. ويشير البنك الدولي إلى أن نمو امتلاك الحسابات في مصر فاق المتوسط بكثير في الفترة التالية لإطلاقها.",
        source: "instapay",
      },
      {
        name: "المحافظ الإلكترونية",
        category: "المدفوعات والخدمات المصرفية الرقمية",
        body: "المحافظ التي تقدمها البنوك وشركات الاتصالات محتسبة ضمن مقياس الشمول المالي لدى البنك المركزي إلى جانب الحسابات البنكية وحسابات البريد المصري والبطاقات مسبقة الدفع. وهي الآلية التي تحقق عبرها جانب كبير من النمو الأخير في هذا المقياس.",
        source: "cbeInclusion2025",
      },
      {
        name: "فينتك مصر",
        category: "المنظومة والتنظيم",
        body: "أطلق البنك المركزي المصري استراتيجيته للتكنولوجيا المالية والابتكار عام 2019 وأنشأ «فينتك مصر» لرصد القطاع ودعمه. وقد حدد تقريره لمنظومة القطاع وجود عدة مئات من الجهات، بينها شركات ناشئة ومقدمو خدمات دفع مرخصون.",
        source: "cbeFintech",
      },
    ],
  },
  benefits: {
    eyebrow: "من يستفيد",
    title: "أربع فئات، أربعة عوائد مختلفة",
    description:
      "لا تستمر التكنولوجيا المالية إلا حيث تفيد كل أطراف السلسلة. وحين يتحمل طرف التكلفة ويجني آخر المكسب، يتعثر التبني.",
    items: [
      {
        icon: "smartphone",
        title: "للمستهلكين",
        points: [
          "الوصول إلى خدمة مالية دون الوصول إلى فرع",
          "تكلفة أقل للمعاملة تجعل المدفوعات الصغيرة مجدية",
          "منتجات تناسب الدخل غير المنتظم لا الراتب الشهري",
          "سجل معاملات يمكنه دعم طلب مستقبلي",
        ],
      },
      {
        icon: "building",
        title: "للمشروعات",
        points: [
          "قبول الدفع من عملاء لا يحملون نقودًا",
          "إثبات إيرادات حقيقية عند طلب رأس مال عامل",
          "وقت وأخطار أقل في التعامل مع النقد",
          "البيع خارج نطاق الحي المباشر",
        ],
      },
      {
        icon: "landmark",
        title: "للبنوك",
        points: [
          "خدمة الأرصدة الصغيرة بتكلفة تجعلها مجدية",
          "اكتساب عملاء دون افتتاح فروع جديدة",
          "تقييم مخاطر الائتمان بالبيانات لا بالضمانات وحدها",
          "الوفاء بنسبة 25% لإقراض المشروعات الصغيرة بمعلومات أفضل",
        ],
      },
      {
        icon: "trendingUp",
        title: "للحكومة",
        points: [
          "إيصال الدعم والتحويلات مباشرة وبشكل قابل للتتبع",
          "خفض تكلفة توزيع المدفوعات العامة",
          "توسيع القاعدة الضريبية مع ظهور النشاط غير الرسمي",
          "بناء بيانات أفضل تُبنى عليها السياسة الاقتصادية",
        ],
      },
    ],
  },
  regulation: {
    eyebrow: "النصف الآخر",
    title: "التنظيم هو ما يجعلها قابلة للاستخدام",
    items: [
      {
        icon: "shield",
        title: "حماية المستهلك",
        body: "مذكورة كركيزة في الاستراتيجية الوطنية للشمول المالي في مصر. فبدون تسعير شفاف وتسوية فعالة للمنازعات، يقوم التبني على ثقة بلا أساس.",
      },
      {
        icon: "banknote",
        title: "اشتراطات إقراض المشروعات",
        body: "يُلزم البنك المركزي البنوك بتوجيه 25% من محافظ الإقراض للمشروعات الصغيرة، بما لا يقل عن 10% للمشروعات الصغيرة — مما يدفع الائتمان نحو منشآت باتت بيانات التكنولوجيا المالية تساعد على تقييمها.",
      },
      {
        icon: "landmark",
        title: "الترخيص والرقابة",
        body: "يعمل مقدمو خدمات الدفع بترخيص من البنك المركزي. والترخيص هو ما يفصل بين خدمة مالية وتطبيق غير خاضع للرقابة يحتفظ بأموال الناس.",
      },
      {
        icon: "trendingUp",
        title: "استراتيجية لها أفق",
        body: "تمتد الاستراتيجية الوطنية الثانية للشمول المالي من 2026 إلى 2030، وتذكر ضمن أولوياتها الخدمات المالية الرقمية والثقافة المالية وحماية المستهلك ونمو المشروعات الصغيرة والمتوسطة.",
      },
    ],
  },
  cta: {
    title: "من الذي ما زال خارج الصورة",
    description:
      "تقلصت الفجوة بين الجنسين في مصر بشدة وفق مقياس، وظلت قائمة وفق آخر. والأدلة تستحق قراءة متأنية.",
    primary: "المرأة والشمول المالي",
    secondary: "المشروعات الصغيرة",
  },
};

export const fintech: Record<Locale, FintechDict> = { en, ar };
