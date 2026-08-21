import type { Locale } from "../config";

const en = {
  meta: {
    title: "Women & Financial Inclusion",
    description:
      "Egypt's gender gap in account ownership, what has changed since 2016, and where women's financial inclusion still lags — using World Bank and Central Bank of Egypt data.",
  },
  hero: {
    eyebrow: "People",
    title: "Women and financial inclusion",
    description:
      "Egypt has recorded one of the larger increases in women's financial inclusion of any comparable economy. It also still records a gap between women and men on the international measure. Both facts are in the published data.",
  },
  headline: {
    eyebrow: "Where things stand",
    title: "Substantial progress, an unclosed gap",
    description:
      "As with the national figures, the Central Bank and the World Bank measure different things. Read together they describe rapid expansion of access alongside a persistent difference in who holds and uses an account.",
  },
  trend: {
    chartTitle: "Account ownership among Egyptian women",
    chartNote:
      "World Bank survey waves. The 2011 wave has no published female figure for Egypt, so the series begins in 2014.",
    caption: "Adults aged 15+, women only.",
    seriesLabel: "Egyptian women with an account",
    eyebrow: "The trajectory",
    title: "From 9.3% to 40.2% in a decade",
    description:
      "On the World Bank measure, account ownership among Egyptian women rose more than fourfold between 2014 and 2024.",
    body1:
      "The 2021 reading sits below 2017, mirroring the dip in the national series. As with the headline figure, this is reproduced as published: survey measures carry sampling variation, and the 2021 round was conducted under pandemic conditions worldwide.",
    body2:
      "The Central Bank of Egypt, using its broader measure of active accounts, reports women's financial inclusion rising from 19.1% in 2016 to 72.5% by June 2026 — a 327% increase in the number of women included. The gap between that and the World Bank's 40.2% is the same difference in method that appears in the national numbers, not a contradiction.",
  },
  gap: {
    eyebrow: "Women and men compared",
    title: "Where the difference actually sits",
    description:
      "Egypt's gender gap in account ownership is 5.7 percentage points — narrower than the Middle East and North Africa average, which the World Bank puts at the widest of any region at 15 points.",
    rows: {
      egypt2024: "Account ownership, Egypt (2024)",
      egypt2024Note: "A gap of 5.7 percentage points.",
      egypt2021: "Account ownership, Egypt (2021)",
      egypt2021Note: "A gap of 6.4 percentage points — narrowing, but slowly.",
      india: "Account ownership, India (2024)",
      indiaNote:
        "India has effectively closed its gender gap; women's ownership slightly exceeds men's.",
    },
    body1:
      "Two things are worth noticing. First, the Egyptian gap narrowed only slightly between 2021 and 2024 — from 6.4 points to 5.7 — even as both women's and men's ownership rose sharply. Rapid overall growth has lifted both groups without substantially changing the distance between them.",
    body2:
      "Second, India shows the gap is not fixed. Indian women now hold accounts at a marginally higher rate than Indian men, having started from a considerably wider gap. That followed a deliberate national programme in which accounts were opened at scale with women named as beneficiaries, and government transfers routed through them.",
    body3:
      "Globally the World Bank reports 77% of women holding an account, with the gender gap narrowed to four percentage points. Egypt is behind that benchmark, but the direction of travel across the last three survey waves is upward.",
  },
  dimensions: {
    eyebrow: "Beyond the account",
    title: "What financial inclusion changes for women",
    description:
      "Account ownership is the measurable proxy. What it stands for is a set of capabilities that are harder to count.",
    items: [
      {
        icon: "fileText",
        title: "An account in her own name",
        body: "Household-level inclusion is not individual inclusion. Where one account serves a family, the person who does not hold it has no independent record and no separately controlled balance. Among unbanked Egyptian adults, 16.9% say the reason is that someone in the family already has an account.",
      },
      {
        icon: "piggyBank",
        title: "Savings that are hers",
        body: "13.8% of Egyptian adults save at a financial institution or mobile money account. Formal savings are private and separately controlled in a way that cash kept at home generally is not — which matters most where money is otherwise pooled by default.",
      },
      {
        icon: "smartphone",
        title: "Digital payments",
        body: "Paying and being paid digitally removes the need to travel and to handle cash. In a context where mobility can be constrained, a service that works from a phone is not a convenience but a change in what is possible.",
      },
      {
        icon: "store",
        title: "Credit and enterprise",
        body: "3.6% of Egyptian adults borrowed to start or run a business. Formal credit assessed on transaction history rather than collateral is particularly relevant for borrowers less likely to hold property in their own name.",
      },
    ],
    note: {
      label: "On interpretation.",
      body: "The figures above describe measured differences in access and use. They do not describe capability, preference or ambition, and this site does not treat the gap as evidence about the people it measures. The barriers documented in the source material are structural — documentation requirements, asset ownership patterns, mobility, and product design that assumes a particular kind of working life.",
    },
  },
  policy: {
    eyebrow: "What is being done",
    title: "Named as a national priority",
    items: [
      {
        title: "Women's economic empowerment in Egypt Vision 2030",
        body: "Gender equality and women's economic empowerment are named priorities within Egypt Vision 2030, alongside poverty reduction and inclusive growth, and financial inclusion is treated as one of the instruments for delivering them.",
        source: "egyptVision2030",
      },
      {
        title: "Financial literacy protocols",
        body: "The Central Bank of Egypt has worked with the National Council for Women on raising women's financial literacy and their capability with digital tools — an intervention aimed at the usage gap rather than the access gap.",
        source: "cbeStrategy",
      },
      {
        title: "Measured and reported separately",
        body: "The Central Bank reports women's financial inclusion as a distinct indicator rather than folding it into the national figure. Disaggregated reporting is a precondition for noticing whether a gap is closing.",
        source: "cbeInclusion2025",
      },
    ],
  },
  cta: {
    title: "The same constraints apply to small businesses",
    description:
      "MSMEs are around 90% of Egypt's private sector and roughly 43% of its GDP, yet formal credit reaches a small fraction of them.",
    primary: "Small Businesses",
    secondary: "Egypt vs India",
  },
};

export type WomenDict = typeof en;

const ar: WomenDict = {
  meta: {
    title: "المرأة والشمول المالي",
    description:
      "الفجوة بين الجنسين في امتلاك الحسابات في مصر، وما تغيّر منذ 2016، وأين ما زال الشمول المالي للمرأة متأخرًا — استنادًا إلى بيانات البنك الدولي والبنك المركزي المصري.",
  },
  hero: {
    eyebrow: "الأفراد والمشروعات",
    title: "المرأة والشمول المالي",
    description:
      "سجلت مصر واحدة من أكبر الزيادات في الشمول المالي للمرأة بين الاقتصادات المماثلة. وفي الوقت نفسه ما زالت تسجل فجوة بين النساء والرجال وفق المقياس الدولي. وكلا الأمرين وارد في البيانات المنشورة.",
  },
  headline: {
    eyebrow: "أين نقف",
    title: "تقدم كبير، وفجوة لم تُغلق",
    description:
      "كما هو الحال مع الأرقام الوطنية، يقيس البنك المركزي والبنك الدولي أشياء مختلفة. وقراءتهما معًا تصف توسعًا سريعًا في الوصول إلى جانب فارق مستمر في من يملك الحساب ويستخدمه.",
  },
  trend: {
    chartTitle: "امتلاك الحسابات بين النساء المصريات",
    chartNote:
      "موجات مسح البنك الدولي. لا يوجد رقم منشور للإناث في مصر لموجة 2011، ولذلك تبدأ السلسلة من 2014.",
    caption: "البالغات من عمر 15 عامًا فأكثر.",
    seriesLabel: "نساء مصريات يملكن حسابًا",
    eyebrow: "المسار",
    title: "من 9.3% إلى 40.2% في عقد",
    description:
      "وفق مقياس البنك الدولي، ارتفع امتلاك الحسابات بين النساء المصريات بأكثر من أربعة أضعاف بين 2014 و2024.",
    body1:
      "قراءة 2021 أقل من 2017، بما يعكس الانخفاض في السلسلة الوطنية. وكما هو الحال مع الرقم الرئيسي، فهي منقولة كما نُشرت: فمقاييس المسح تحمل تباينًا في العينة، وأُجريت جولة 2021 في ظروف الجائحة عالميًا.",
    body2:
      "أما البنك المركزي المصري، باستخدام مقياسه الأوسع للحسابات النشطة، فيفيد بارتفاع الشمول المالي للمرأة من 19.1% في 2016 إلى 72.5% بحلول يونيو 2026 — بزيادة 327% في عدد النساء المشمولات. والفارق بين هذا الرقم و40.2% لدى البنك الدولي هو الاختلاف نفسه في المنهجية الذي يظهر في الأرقام القومية، وليس تناقضًا.",
  },
  gap: {
    eyebrow: "مقارنة بين النساء والرجال",
    title: "أين يقع الفارق فعليًا",
    description:
      "الفجوة بين الجنسين في امتلاك الحسابات في مصر 5.7 نقطة مئوية — أضيق من متوسط الشرق الأوسط وشمال أفريقيا، الذي يضعه البنك الدولي عند 15 نقطة، وهو الأوسع بين المناطق.",
    rows: {
      egypt2024: "امتلاك الحسابات، مصر (2024)",
      egypt2024Note: "فجوة قدرها 5.7 نقطة مئوية.",
      egypt2021: "امتلاك الحسابات، مصر (2021)",
      egypt2021Note: "فجوة قدرها 6.4 نقطة مئوية — تضيق، لكن ببطء.",
      india: "امتلاك الحسابات، الهند (2024)",
      indiaNote:
        "أغلقت الهند فجوتها بين الجنسين فعليًا؛ فامتلاك النساء يفوق امتلاك الرجال بفارق طفيف.",
    },
    body1:
      "أمران يستحقان الملاحظة. أولًا، ضاقت الفجوة المصرية قليلًا فقط بين 2021 و2024 — من 6.4 نقطة إلى 5.7 — رغم الارتفاع الحاد في امتلاك النساء والرجال معًا. فالنمو السريع رفع المجموعتين دون أن يغيّر المسافة بينهما جوهريًا.",
    body2:
      "ثانيًا، تُظهر الهند أن الفجوة ليست ثابتة. فالنساء الهنديات يملكن اليوم حسابات بمعدل يفوق الرجال بفارق طفيف، بعد أن بدأن من فجوة أوسع بكثير. وقد جاء ذلك بعد برنامج وطني مقصود فُتحت فيه الحسابات على نطاق واسع بأسماء النساء كمستفيدات، ووُجهت التحويلات الحكومية عبرها.",
    body3:
      "وعالميًا، يفيد البنك الدولي بأن 77% من النساء يملكن حسابًا، مع تقلص الفجوة بين الجنسين إلى أربع نقاط مئوية. ومصر متأخرة عن هذا المعيار، لكن اتجاه الحركة عبر موجات المسح الثلاث الأخيرة صاعد.",
  },
  dimensions: {
    eyebrow: "ما وراء الحساب",
    title: "ما الذي يغيّره الشمول المالي بالنسبة للمرأة",
    description:
      "امتلاك الحساب هو المؤشر القابل للقياس. أما ما يمثله فهو مجموعة قدرات يصعب عدّها.",
    items: [
      {
        icon: "fileText",
        title: "حساب باسمها هي",
        body: "الشمول على مستوى الأسرة ليس شمولًا على مستوى الفرد. فحين يخدم حساب واحد أسرة بأكملها، يبقى من لا يملكه بلا سجل مستقل ولا رصيد يتحكم فيه بمفرده. ومن بين البالغين في مصر ممن لا يملكون حسابًا، يذكر 16.9% أن السبب هو وجود حساب لأحد أفراد الأسرة.",
      },
      {
        icon: "piggyBank",
        title: "مدخرات تخصها",
        body: "يدّخر 13.8% من البالغين في مصر لدى مؤسسة مالية أو محفظة إلكترونية. والمدخرات الرسمية خاصة ومستقلة التحكم بصورة لا تتوافر عادةً للنقد المحفوظ في المنزل — وهو ما يهم أكثر حيث تُجمَّع الأموال تلقائيًا.",
      },
      {
        icon: "smartphone",
        title: "المدفوعات الرقمية",
        body: "الدفع والتحصيل رقميًا يلغيان الحاجة للتنقل والتعامل مع النقد. وفي سياق قد تكون فيه الحركة مقيدة، فإن خدمة تعمل من الهاتف ليست وسيلة راحة بل تغيير في ما هو ممكن أصلًا.",
      },
      {
        icon: "store",
        title: "الائتمان والمشروعات",
        body: "اقترض 3.6% من البالغين في مصر لبدء مشروع أو تشغيله. والائتمان الرسمي المقيَّم بسجل المعاملات بدل الضمانات وثيق الصلة تحديدًا بمقترضين أقل احتمالًا لامتلاك عقارات بأسمائهم.",
      },
    ],
    note: {
      label: "بشأن التفسير.",
      body: "الأرقام أعلاه تصف فوارق مقيسة في الوصول والاستخدام. وهي لا تصف القدرة أو التفضيل أو الطموح، ولا يتعامل هذا الموقع مع الفجوة كدليل على من تقيسهم. فالعقبات الموثقة في المصادر بنيوية — متطلبات المستندات، وأنماط ملكية الأصول، وحرية الحركة، وتصميم منتجات يفترض نمطًا بعينه من الحياة العملية.",
    },
  },
  policy: {
    eyebrow: "ما الذي يجري عمله",
    title: "مذكورة كأولوية وطنية",
    items: [
      {
        title: "التمكين الاقتصادي للمرأة في رؤية مصر 2030",
        body: "المساواة بين الجنسين والتمكين الاقتصادي للمرأة أولويتان مذكورتان في رؤية مصر 2030، إلى جانب الحد من الفقر والنمو الشامل، ويُعامَل الشمول المالي كإحدى أدوات تحقيقهما.",
        source: "egyptVision2030",
      },
      {
        title: "بروتوكولات الثقافة المالية",
        body: "عمل البنك المركزي المصري مع المجلس القومي للمرأة على رفع الثقافة المالية للنساء وقدرتهن على استخدام الأدوات الرقمية — وهو تدخّل موجّه إلى فجوة الاستخدام لا فجوة الوصول.",
        source: "cbeStrategy",
      },
      {
        title: "تُقاس ويُبلَّغ عنها على حدة",
        body: "يعرض البنك المركزي الشمول المالي للمرأة كمؤشر مستقل بدل دمجه في الرقم الوطني. والإبلاغ المفصّل شرط مسبق لملاحظة ما إذا كانت الفجوة تضيق.",
        source: "cbeInclusion2025",
      },
    ],
  },
  cta: {
    title: "القيود نفسها تنطبق على المشروعات الصغيرة",
    description:
      "تمثل المشروعات الصغيرة نحو 90% من القطاع الخاص في مصر ونحو 43% من ناتجها المحلي، ومع ذلك لا يصل إليها الائتمان الرسمي إلا بنسبة ضئيلة.",
    primary: "المشروعات الصغيرة",
    secondary: "مصر والهند",
  },
};

export const women: Record<Locale, WomenDict> = { en, ar };
