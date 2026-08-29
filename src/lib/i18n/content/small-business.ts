import type { Locale } from "../config";

const en = {
  meta: {
    title: "Small Businesses",
    description:
      "MSMEs make up around 90% of Egypt's private sector and 43% of its GDP. How financial inclusion shapes access to credit, growth and formalisation for small businesses, entrepreneurs and farmers.",
  },
  hero: {
    eyebrow: "People",
    title: "Small businesses",
    description:
      "Micro, small and medium enterprises are the larger part of the Egyptian private sector. Their relationship with the financial system determines whether they can invest — and, for many, whether they can operate formally at all.",
  },
  scale: {
    eyebrow: "Scale and constraint",
    title: "A large share of the economy, a small share of the credit",
    description:
      "MSMEs make up most of Egypt's private businesses by sheer number, and together they produce close to half the country's output. Formal borrowing to fund them is still rare.",
    chartTitle: "Business borrowing, saving and credit, Egypt and Kenya",
    rows: {
      business: "Borrowed to start or operate a business",
      businessNote:
        "Adults in Kenya are roughly twice as likely to have borrowed for a business.",
      formal: "Borrowed money in the past year",
      saved: "Saved money in the past year",
      savedNote:
        "Savings are the other side of the same coin: deposits are what banks lend on.",
    },
    body1:
      "The constraint on Egyptian small businesses is visible in the borrowing data. A majority of adults borrow — 56.1% did so in 2024 — but formal institutions supply only a small part of it, and borrowing specifically to start or run a business is rarer still at 3.6%.",
    body2:
      "The reason is not primarily unwillingness to lend. It is that a cash-based business generates nothing a lender can assess. No statements, no verifiable turnover, and usually no collateral. From the lender's side, the applicant is indistinguishable from any other.",
    body3:
      "This is why payment digitisation matters more to small business finance than to consumer finance. A payment record is not just convenient — it is the raw material of a credit assessment.",
  },
  chain: {
    eyebrow: "How the effect propagates",
    title: "From financial access to economic development",
    description:
      "Each stage depends on the one before it. Choose a stage below to see what it involves, and where Egypt's own numbers sit.",
    note: "This chain describes a mechanism, not a guarantee. Access to finance is one input among several — demand, competition, input costs and management all bear on whether a business grows. Credit extended to a business that cannot service it makes matters worse, not better.",
    steps: [
      {
        id: "access",
        icon: "landmark",
        label: "Financial access",
        detail:
          "The business gains an account it can be paid into and pay out of, and a payment record starts to accumulate. This is the step that makes everything after it assessable: before it, a lender has nothing to look at but the owner's word.",
      },
      {
        id: "investment",
        icon: "coins",
        label: "Business investment",
        detail:
          "With credit available on the strength of that record, the business can buy stock ahead of demand, replace equipment, or take on a larger order. Only 3.6% of Egyptian adults borrowed to start or run a business in 2024, against 7.5% in Kenya.",
      },
      {
        id: "growth",
        icon: "trendingUp",
        label: "Business growth",
        detail:
          "Investment makes a bigger, steadier operation possible: more stock, better margins on bulk purchases, customers who pay by card. Growth is never automatic — most small businesses face demand and competition problems as well as capital ones — but without capital, it simply isn't possible.",
      },
      {
        id: "employment",
        icon: "users",
        label: "Employment",
        detail:
          "Businesses that grow hire. MSMEs are reported to employ around 75% of Egypt's workforce, so their ability to expand directly shapes how many people have jobs and on what terms.",
      },
      {
        id: "development",
        icon: "building",
        label: "Economic development",
        detail:
          "Add it up across the whole economy, and more productive small businesses raise output, widen the tax base as activity formalises, and spread economic activity beyond a handful of large firms. MSMEs already account for around 43% of Egyptian GDP.",
      },
    ],
  },
  scenario: {
    eyebrow: "Interactive",
    title: "Two businesses, six situations",
    description:
      "The same small business, once operating entirely in cash and once digitally connected. Choose a situation to see how each is placed to handle it.",
    labels: {
      choose: "Choose a situation",
      listName: "Business situations",
      cashTitle: "Cash-only business",
      digitalTitle: "Digitally connected business",
      disclaimer:
        "These describe what each set-up makes possible, not predictions of financial results. Digital connection changes the options available to a business; it does not guarantee revenue, credit approval or profit.",
    },
    situations: [
      {
        id: "customer",
        label: "A customer has no cash",
        prompt:
          "Someone wants to buy, but has no notes on them — only a phone and a card.",
        cash: "The sale does not happen, or the customer is sent to find an ATM and may not come back. Every customer who has stopped carrying cash is a customer the business cannot serve.",
        digital:
          "The sale completes by QR code or card. Accepting a code costs the merchant close to nothing to set up, which is why acceptance matters most for the smallest traders.",
      },
      {
        id: "loan",
        label: "Applying for working capital",
        prompt:
          "The business needs to buy stock ahead of a busy season and approaches a lender.",
        cash: "There is no record of turnover. The lender has nothing to assess beyond a verbal account and whatever collateral the owner can offer — which, for most micro-businesses, is nothing.",
        digital:
          "Months of payment records evidence real revenue. This is the basis of cash-flow lending, which assesses a borrower on money moving through the business rather than on property.",
      },
      {
        id: "supplier",
        label: "Paying a supplier in another city",
        prompt:
          "Stock has to be paid for, and the supplier is several hours away.",
        cash: "Cash is carried in person or sent with someone travelling. Both cost time, and both carry risk that is borne entirely by the business.",
        digital:
          "The transfer settles in real time over the instant payment network. The journey disappears, and so does the risk attached to carrying money.",
      },
      {
        id: "theft",
        label: "Cash goes missing",
        prompt: "A day's takings are lost or stolen.",
        cash: "The loss is total and unrecoverable. Holding a float of physical cash is itself a standing risk that grows with the size of the business.",
        digital:
          "Balances sit in an account rather than a drawer. Digital funds carry their own risks — fraud in particular — but they are not lost to simple physical theft.",
      },
      {
        id: "season",
        label: "A slow season arrives",
        prompt:
          "Income drops for two months, but rent and supplier bills continue.",
        cash: "Savings, if there are any, are held informally. Bridging the gap usually means borrowing from family or an informal lender — in Egypt 38.4% of adults borrow from family or friends, against 10.4% borrowing formally.",
        digital:
          "A documented trading history makes a formal short-term facility possible in principle, and savings held in an account remain available. Access is not guaranteed, but the option exists.",
      },
      {
        id: "formalise",
        label: "Deciding whether to register",
        prompt:
          "The owner weighs up formalising the business against staying informal.",
        cash: "Around 40% of Egyptian GDP is estimated to be informal. Staying informal avoids administrative cost, but it closes off bank credit, larger contracts and legal protection.",
        digital:
          "MSME Law No. 152 of 2020 attaches tax and non-tax incentives to formalising, and a payment record makes the transition easier to evidence. The decision remains a genuine trade-off, not an obvious one.",
      },
    ],
  },
  segments: {
    eyebrow: "Not one group",
    title: "Four kinds of small business, four different problems",
    description:
      "Policy that treats MSMEs as a single category tends to serve the largest of them. The financing needs below differ in size, timing and assessability.",
    items: [
      {
        icon: "store",
        title: "Micro and small enterprises",
        body: "The shops, workshops and traders that make up the bulk of Egypt's private sector. Their financing need is usually small, short-term working capital — exactly the size of loan that collateral-based lending handles worst.",
      },
      {
        icon: "sprout",
        title: "Entrepreneurs and startups",
        body: "Newer firms have no trading history at all, which makes them hardest to assess and most dependent on equity, family capital or specialist lenders. Egypt has an established FinTech sector that both needs this financing and increasingly supplies it.",
      },
      {
        icon: "tractor",
        title: "Farmers and agricultural traders",
        body: "Income arrives after a harvest, not monthly, and 3.5% of Egyptian adults receive payments for agricultural products — of whom almost all are paid in cash. Products designed around regular salaries fit this reality poorly.",
      },
      {
        icon: "shoppingBag",
        title: "Informal businesses",
        body: "Operating outside formal registration avoids administrative cost but forecloses bank credit, larger contracts and legal protection. With around 40% of GDP estimated to be informal, this is the largest single group.",
      },
    ],
  },
  policy: {
    eyebrow: "What is in place",
    title: "The policy response",
    intro:
      "Egypt has approached small business finance from both directions: requiring banks to lend more to MSMEs, and making it more attractive for MSMEs to become the kind of business a bank can lend to.",
    items: [
      {
        title: "A lending quota",
        body: "The Central Bank of Egypt requires banks to direct 25% of their total lending portfolios to MSMEs, with a minimum of 10% to small enterprises. Egyptian banks' MSME lending has expanded very substantially under this framework.",
        source: "cbeMsme",
      },
      {
        title: "A unified legal definition",
        body: "MSME Law No. 152 of 2020 established a single definition of micro, small and medium enterprises and attached tax and non-tax incentives to formal registration, lowering the cost of leaving the informal economy.",
        source: "oecdSme",
      },
      {
        title: "SME growth in the national strategy",
        body: "Supporting SME growth is named among the priorities of the Central Bank's second financial inclusion strategy, running from 2026 to 2030, alongside digital financial services and financial literacy.",
        source: "cbeInclusion2025",
      },
      {
        title: "A development agency with a mandate",
        body: "MSMEDA is the government body responsible for developing the sector, and is the source of the widely cited figures on the MSME share of private enterprise, employment and GDP.",
        source: "msmeda",
      },
    ],
  },
  cta: {
    title: "How does this compare with a country that moved faster?",
    description:
      "Kenya took a different route to a different place, driven by a mobile money network rather than a bank branch. Ten indicators, side by side.",
    primary: "Egypt vs Kenya",
    secondary: "The decade ahead",
  },
};

export type SmallBusinessDict = typeof en;

const ar: SmallBusinessDict = {
  meta: {
    title: "المشروعات الصغيرة",
    description:
      "تمثل المشروعات الصغيرة نحو 90% من القطاع الخاص في مصر و43% من ناتجها المحلي. كيف يشكّل الشمول المالي فرص الحصول على التمويل والنمو والتحول للرسمية للمشروعات الصغيرة ورواد الأعمال والمزارعين.",
  },
  hero: {
    eyebrow: "الأفراد والمشروعات",
    title: "المشروعات الصغيرة",
    description:
      "المشروعات متناهية الصغر والصغيرة والمتوسطة هي الجزء الأكبر من القطاع الخاص المصري. وعلاقتها بالنظام المالي هي ما يحدد قدرتها على الاستثمار — وبالنسبة لكثير منها، قدرتها على العمل بشكل رسمي من الأساس.",
  },
  scale: {
    eyebrow: "الحجم والقيد",
    title: "حصة كبيرة من الاقتصاد، وحصة صغيرة من الائتمان",
    description:
      "تشكّل المشروعات الصغيرة معظم منشآت القطاع الخاص في مصر من حيث العدد، وتسهم معًا بما يقارب نصف الناتج الوطني. ومع ذلك، ما زال الاقتراض الرسمي لتمويلها نادرًا.",
    chartTitle: "اقتراض المشروعات والادخار والائتمان، مصر وكينيا",
    rows: {
      business: "اقترضوا لبدء مشروع أو تشغيله",
      businessNote:
        "احتمال اقتراض البالغين في كينيا لأغراض مشروع يبلغ ضعف احتمال مصر تقريبًا.",
      formal: "اقترضوا خلال العام الماضي",
      saved: "ادّخروا خلال العام الماضي",
      savedNote:
        "الادخار هو الوجه الآخر للعملة نفسها: فالودائع هي ما تقرضه البنوك.",
    },
    body1:
      "القيد على المشروعات الصغيرة في مصر ظاهر في بيانات الاقتراض. فغالبية البالغين يقترضون — 56.1% فعلوا ذلك في 2024 — لكن المؤسسات الرسمية توفر جزءًا صغيرًا منه، والاقتراض تحديدًا لبدء مشروع أو تشغيله أندر عند 3.6%.",
    body2:
      "والسبب ليس أساسًا عزوف البنوك عن الإقراض، بل أن المشروع القائم على النقد لا يولّد شيئًا يمكن للمقرض تقييمه. لا كشوف حساب، ولا إيرادات قابلة للتحقق، وغالبًا لا ضمانات. ومن جهة المقرض، لا يمكن تمييز مقدم الطلب عن غيره.",
    body3:
      "ولهذا فإن رقمنة المدفوعات أهم لتمويل المشروعات الصغيرة منها لتمويل الأفراد. فسجل المدفوعات ليس مجرد وسيلة راحة — بل هو المادة الخام لتقييم الائتمان.",
  },
  chain: {
    eyebrow: "كيف ينتقل الأثر",
    title: "من الوصول المالي إلى التنمية الاقتصادية",
    description:
      "كل مرحلة تعتمد على سابقتها. اختر مرحلة من الأسفل لترى ما تتضمنه، وأين تقف أرقام مصر نفسها.",
    note: "تصف هذه السلسلة آلية لا ضمانًا. فالحصول على التمويل مدخل واحد بين عدة مدخلات — إذ يؤثر الطلب والمنافسة وتكاليف المدخلات والإدارة كلها في نمو المشروع. والائتمان الممنوح لمشروع لا يستطيع خدمته يزيد الأمر سوءًا لا تحسنًا.",
    steps: [
      {
        id: "access",
        icon: "landmark",
        label: "الوصول المالي",
        detail:
          "يحصل المشروع على حساب يمكن أن يُدفع إليه ويدفع منه، ويبدأ سجل المدفوعات في التراكم. وهذه هي الخطوة التي تجعل كل ما بعدها قابلًا للتقييم: فقبلها لا يجد المقرض سوى كلام صاحب المشروع.",
      },
      {
        id: "investment",
        icon: "coins",
        label: "الاستثمار في المشروع",
        detail:
          "مع توافر ائتمان استنادًا إلى ذلك السجل، يستطيع المشروع شراء بضاعة قبل الطلب، أو استبدال معدات، أو قبول طلبية أكبر. ولم يقترض سوى 3.6% من البالغين في مصر لبدء مشروع أو تشغيله في 2024، مقابل 7.5% في كينيا.",
      },
      {
        id: "growth",
        icon: "trendingUp",
        label: "نمو المشروع",
        detail:
          "الاستثمار يجعل عملية أكبر وأكثر استقرارًا ممكنة: بضاعة أكثر، وهوامش أفضل عند الشراء بالجملة، وعملاء يدفعون بالبطاقة. والنمو ليس تلقائيًا أبدًا — فمعظم المشروعات الصغيرة تواجه مشكلات الطلب والمنافسة إلى جانب قيود رأس المال — لكن بدون رأس مال، لا يصبح ممكنًا أصلًا.",
      },
      {
        id: "employment",
        icon: "users",
        label: "التشغيل",
        detail:
          "المشروعات التي تنمو توظّف. ويُذكر أن المشروعات الصغيرة تشغّل نحو 75% من قوة العمل في مصر، ولذلك فإن قدرتها على التوسع تحدد مباشرة عدد من يجدون عملًا وشروط هذا العمل.",
      },
      {
        id: "development",
        icon: "building",
        label: "التنمية الاقتصادية",
        detail:
          "واجمع هذا الأثر على مستوى الاقتصاد كله: المشروعات الصغيرة الأكثر إنتاجية ترفع الناتج، وتوسّع القاعدة الضريبية مع تحول النشاط إلى الرسمية، وتوزّع النشاط الاقتصادي بدل حصره في حفنة من الشركات الكبرى. وتمثل هذه المشروعات بالفعل نحو 43% من الناتج المحلي المصري.",
      },
    ],
  },
  scenario: {
    eyebrow: "تفاعلي",
    title: "مشروعان، ستة مواقف",
    description:
      "المشروع الصغير نفسه، مرة يعمل نقدًا بالكامل ومرة متصل رقميًا. اختر موقفًا لترى كيف يتعامل كل منهما معه.",
    labels: {
      choose: "اختر موقفًا",
      listName: "مواقف المشروعات",
      cashTitle: "مشروع نقدي بالكامل",
      digitalTitle: "مشروع متصل رقميًا",
      disclaimer:
        "هذه أوصاف لما يتيحه كل نمط، وليست تنبؤات بنتائج مالية. فالاتصال الرقمي يغيّر الخيارات المتاحة أمام المشروع؛ لكنه لا يضمن إيرادًا ولا موافقة على ائتمان ولا ربحًا.",
    },
    situations: [
      {
        id: "customer",
        label: "عميل لا يحمل نقودًا",
        prompt: "شخص يريد الشراء، لكنه لا يحمل نقودًا — بل هاتفًا وبطاقة فقط.",
        cash: "لا تتم عملية البيع، أو يُطلب من العميل البحث عن ماكينة صراف وقد لا يعود. فكل عميل توقف عن حمل النقود هو عميل لا يستطيع المشروع خدمته.",
        digital:
          "تكتمل عملية البيع برمز استجابة سريعة أو بطاقة. وقبول الرمز لا يكلف التاجر شيئًا يُذكر لإعداده، ولهذا يهم القبول أصغر التجار أكثر من غيرهم.",
      },
      {
        id: "loan",
        label: "طلب رأس مال عامل",
        prompt: "يحتاج المشروع لشراء بضاعة قبل موسم الذروة ويتوجه إلى جهة مقرضة.",
        cash: "لا يوجد سجل للإيرادات. فليس أمام المقرض ما يقيّمه سوى كلام شفهي وأي ضمان يستطيع صاحب المشروع تقديمه — وهو في معظم المشروعات متناهية الصغر لا شيء.",
        digital:
          "شهور من سجلات المدفوعات تثبت إيرادات حقيقية. وهذا هو أساس الإقراض القائم على التدفق النقدي، الذي يقيّم المقترض وفق الأموال المتحركة عبر المشروع لا وفق ممتلكاته.",
      },
      {
        id: "supplier",
        label: "سداد مستحقات مورد في مدينة أخرى",
        prompt: "يجب سداد ثمن البضاعة، والمورد يبعد ساعات عدة.",
        cash: "تُحمل النقود شخصيًا أو تُرسل مع مسافر. وكلاهما يكلف وقتًا، وكلاهما يحمل مخاطرة يتحملها المشروع وحده.",
        digital:
          "يُسوَّى التحويل في الوقت الحقيقي عبر شبكة المدفوعات اللحظية. فتختفي الرحلة، وتختفي معها مخاطرة حمل المال.",
      },
      {
        id: "theft",
        label: "ضياع النقود",
        prompt: "تُفقد أو تُسرق متحصلات يوم كامل.",
        cash: "الخسارة كاملة وغير قابلة للاسترداد. والاحتفاظ برصيد نقدي هو في حد ذاته مخاطرة دائمة تكبر بكبر حجم المشروع.",
        digital:
          "الأرصدة في حساب لا في درج. والأموال الرقمية لها مخاطرها الخاصة — الاحتيال تحديدًا — لكنها لا تُفقد بالسرقة المادية البسيطة.",
      },
      {
        id: "season",
        label: "حلول موسم راكد",
        prompt: "ينخفض الدخل لشهرين، بينما يستمر الإيجار وفواتير الموردين.",
        cash: "المدخرات، إن وُجدت، محفوظة بشكل غير رسمي. وسد الفجوة يعني عادةً الاقتراض من الأهل أو من مقرض غير رسمي — ففي مصر يقترض 38.4% من البالغين من الأهل والأصدقاء مقابل 10.4% يقترضون رسميًا.",
        digital:
          "سجل تجاري موثق يجعل الحصول على تسهيل رسمي قصير الأجل ممكنًا من حيث المبدأ، وتظل المدخرات في الحساب متاحة. والحصول عليه غير مضمون، لكن الخيار موجود.",
      },
      {
        id: "formalise",
        label: "قرار التسجيل الرسمي",
        prompt: "يوازن صاحب المشروع بين تسجيله رسميًا والبقاء غير رسمي.",
        cash: "يُقدَّر أن نحو 40% من الناتج المحلي المصري غير رسمي. والبقاء غير رسمي يتجنب التكلفة الإدارية، لكنه يغلق الباب أمام الائتمان المصرفي والعقود الأكبر والحماية القانونية.",
        digital:
          "يربط قانون المشروعات رقم 152 لسنة 2020 حوافز ضريبية وغير ضريبية بالتسجيل الرسمي، ويجعل سجل المدفوعات إثبات هذا التحول أيسر. ويظل القرار موازنة حقيقية لا خيارًا بديهيًا.",
      },
    ],
  },
  segments: {
    eyebrow: "ليست فئة واحدة",
    title: "أربعة أنواع من المشروعات الصغيرة، وأربع مشكلات مختلفة",
    description:
      "السياسات التي تعامل المشروعات الصغيرة كفئة واحدة تميل لخدمة أكبرها. والاحتياجات التمويلية أدناه تختلف حجمًا وتوقيتًا وقابلية للتقييم.",
    items: [
      {
        icon: "store",
        title: "المشروعات متناهية الصغر والصغيرة",
        body: "المتاجر والورش والتجار الذين يشكلون الجزء الأكبر من القطاع الخاص في مصر. واحتياجهم التمويلي عادةً رأس مال عامل صغير وقصير الأجل — وهو تحديدًا حجم القرض الذي يتعامل معه الإقراض القائم على الضمانات أسوأ تعامل.",
      },
      {
        icon: "sprout",
        title: "رواد الأعمال والشركات الناشئة",
        body: "الشركات الأحدث ليس لديها سجل تجاري على الإطلاق، مما يجعلها الأصعب تقييمًا والأكثر اعتمادًا على حقوق الملكية أو رأس مال الأسرة أو مقرضين متخصصين. ولدى مصر قطاع تكنولوجيا مالية راسخ يحتاج هذا التمويل ويوفره بشكل متزايد.",
      },
      {
        icon: "tractor",
        title: "المزارعون وتجار المحاصيل",
        body: "الدخل يأتي بعد الحصاد لا شهريًا، ويتلقى 3.5% من البالغين في مصر مدفوعات مقابل منتجات زراعية — وجميعهم تقريبًا يتقاضونها نقدًا. والمنتجات المصممة حول الرواتب المنتظمة تتلاءم بصعوبة مع هذا الواقع.",
      },
      {
        icon: "shoppingBag",
        title: "المشروعات غير الرسمية",
        body: "العمل خارج التسجيل الرسمي يتجنب التكلفة الإدارية لكنه يغلق الباب أمام الائتمان المصرفي والعقود الأكبر والحماية القانونية. ومع تقدير أن نحو 40% من الناتج المحلي غير رسمي، فهذه أكبر فئة منفردة.",
      },
    ],
  },
  policy: {
    eyebrow: "ما هو قائم",
    title: "الاستجابة على مستوى السياسات",
    intro:
      "تعاملت مصر مع تمويل المشروعات الصغيرة من الاتجاهين معًا: إلزام البنوك بزيادة إقراضها لهذه المشروعات، وجعل تحوّل هذه المشروعات إلى الشكل الذي يمكن للبنك إقراضه أكثر جاذبية.",
    items: [
      {
        title: "نسبة إقراض إلزامية",
        body: "يُلزم البنك المركزي المصري البنوك بتوجيه 25% من إجمالي محافظ الإقراض للمشروعات الصغيرة، بحد أدنى 10% للمشروعات الصغيرة. وقد توسع إقراض البنوك المصرية لهذه المشروعات توسعًا كبيرًا في ظل هذا الإطار.",
        source: "cbeMsme",
      },
      {
        title: "تعريف قانوني موحد",
        body: "أرسى قانون المشروعات رقم 152 لسنة 2020 تعريفًا واحدًا للمشروعات متناهية الصغر والصغيرة والمتوسطة، وربط حوافز ضريبية وغير ضريبية بالتسجيل الرسمي، مما خفض تكلفة الخروج من الاقتصاد غير الرسمي.",
        source: "oecdSme",
      },
      {
        title: "نمو المشروعات ضمن الاستراتيجية الوطنية",
        body: "دعم نمو المشروعات الصغيرة والمتوسطة مذكور ضمن أولويات الاستراتيجية الثانية للشمول المالي لدى البنك المركزي، الممتدة من 2026 إلى 2030، إلى جانب الخدمات المالية الرقمية والثقافة المالية.",
        source: "cbeInclusion2025",
      },
      {
        title: "جهاز تنموي بولاية محددة",
        body: "جهاز تنمية المشروعات هو الجهة الحكومية المسؤولة عن تنمية القطاع، وهو مصدر الأرقام المتداولة على نطاق واسع بشأن حصة هذه المشروعات من المنشآت الخاصة والتشغيل والناتج المحلي.",
        source: "msmeda",
      },
    ],
  },
  cta: {
    title: "كيف تبدو المقارنة مع بلد تحرك أسرع؟",
    description:
      "سلكت كينيا طريقًا مختلفًا إلى موضع مختلف، بدفع من شبكة محفظة هاتف محمول لا من فروع بنكية. عشرة مؤشرات جنبًا إلى جنب.",
    primary: "مصر وكينيا",
    secondary: "العقد المقبل",
  },
};

export const smallBusiness: Record<Locale, SmallBusinessDict> = { en, ar };
