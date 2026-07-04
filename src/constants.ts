/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type Trend = 'up' | 'down';

export const CONTENT = {
  hero: {
    brand: "تقرير مبيعات يونيو 2026",
    subtitle: "قراءة شاملة لأداء يونيو مقارنة بمايو: نموّ أقوى، جودة إيراد أعلى، وفرص واضحة للمرحلة القادمة",
    badges: ["مايو 2026", "يونيو 2026"],
    consultant: "محمد ابوعيسى",
    highlights: [
      { value: "+14.9%", label: "الإيراد" },
      { value: "+21.4%", label: "الفواتير" },
      { value: "+18.8%", label: "الإيراد اليومي" },
    ],
  },

  kpis: {
    title: "الأداء العام",
    subtitle: "يونيو تفوّق على مايو في الإيراد والحركة والإنتاجية اليومية — مع تحسّن جودة الخصومات",
    cards: [
      { label: "إجمالي الإيراد", may: "1,401,086", june: "1,610,716", unit: "TL", delta: "+14.9%", trend: "up" as Trend, good: true },
      { label: "عدد الفواتير", may: "3,168", june: "3,846", unit: "فاتورة", delta: "+21.4%", trend: "up" as Trend, good: true },
      { label: "متوسط الإيراد اليومي", may: "45,196", june: "53,691", unit: "TL", delta: "+18.8%", trend: "up" as Trend, good: true },
      { label: "إجمالي الخصومات", may: "52,290", june: "44,996", unit: "TL", delta: "-13.9%", trend: "down" as Trend, good: true },
      { label: "نسبة الخصم", may: "3.73%", june: "2.79%", unit: "", delta: "-0.94 نقطة", trend: "down" as Trend, good: true },
      { label: "متوسط الفاتورة", may: "442.3", june: "418.8", unit: "TL", delta: "-5.3%", trend: "down" as Trend, good: false },
    ],
    caution:
      "نقطة الانتباه الوحيدة: متوسط الفاتورة انخفض من 442.3 إلى 418.8 TL، وعدد الأصناف بالفاتورة من 2.65 إلى 2.43 — أي أن النمو جاء من عمليات أكثر وفترات أقوى، لا من سلال أكبر.",
    takeaway:
      "يونيو لم يكن أكبر فحسب — كان شهرًا أنظف وأعلى جودة تجاريًا: إيراد أعلى مع خصومات أقل.",
  },

  timeslots: {
    title: "الفترات الزمنية وتحوّل الحركة",
    subtitle: "الليل هو محرك النمو الأوضح في يونيو",
    max: 414899,
    slots: [
      { name: "الصباح", range: "حتى 12:00", may: 140433, june: 143169, delta: "+1.9%", highlight: false },
      { name: "الظهيرة", range: "12:00–15:00", may: 354011, june: 394306, delta: "+11.4%", highlight: false },
      { name: "بعد الظهر", range: "15:00–18:00", may: 378946, june: 414899, delta: "+9.5%", highlight: false },
      { name: "المساء", range: "18:00–20:00", may: 265759, june: 289895, delta: "+9.1%", highlight: false },
      { name: "الليل", range: "20:00–24:00", may: 261937, june: 368447, delta: "+40.7%", highlight: true },
    ],
    nightNote:
      "إيراد الليل قفز من 261,937 إلى 368,447 TL (+40.7%) وفواتيره من 699 إلى 924 — الليل أصبح محرك النمو الأول.",
    takeaway:
      "المتجر يتحوّل إلى وجهة لفترات الظهيرة والمساء والليل — وليس مجرد محطة قهوة ومخبوزات نهارية.",
  },

  hours: {
    title: "أقوى ساعات اليوم في يونيو",
    subtitle: "ساعات الليل دخلت قائمة الصدارة لأول مرة",
    max: 147742,
    items: [
      { hour: "12:00", value: 147742, night: false },
      { hour: "11:00", value: 134746, night: false },
      { hour: "13:00", value: 122562, night: false },
      { hour: "21:00", value: 117700, night: true },
      { hour: "22:00", value: 99117, night: true },
    ],
    takeaway:
      "الساعتان 21:00 و22:00 أصبحتا من أعلى ساعات البيع — لم تعودا ساعات ثانوية. هذا تحوّل حقيقي في هوية المتجر التشغيلية.",
  },

  days: {
    title: "نمط أيام الأسبوع",
    subtitle: "نموّ يقوده منتصف الأسبوع — وضعف واضح في نهايته",
    max: 275683,
    items: [
      { name: "الاثنين", may: 161442, june: 273605, delta: "+69.5%", good: true },
      { name: "الثلاثاء", may: 163884, june: 275683, delta: "+68.2%", good: true },
      { name: "الأربعاء", may: 216859, june: 210488, delta: "-2.9%", good: false },
      { name: "الخميس", may: 185148, june: 223373, delta: "+20.7%", good: true },
      { name: "الجمعة", may: 240232, june: 225616, delta: "-6.1%", good: false },
      { name: "السبت", may: 242410, june: 200978, delta: "-17.1%", good: false },
      { name: "الأحد", may: 191111, june: 200973, delta: "+5.2%", good: true },
    ],
    takeaway:
      "نموّ يونيو قاده منتصف الأسبوع (الاثنين +69.5% والثلاثاء +68.2%)، بينما أصبح ضعف نهاية الأسبوع — والسبت تحديدًا (-17.1%) — أكبر ملف تجاري مفتوح.",
  },

  offer: {
    title: "عرض كأس العالم 299",
    subtitle: "ترويج يبني السلة ولا يأكل الهامش",
    compare: [
      { period: "مايو — Offer 299", revenue: "27,600 TL", receipts: "56 فاتورة", units: "92 قطعة" },
      { period: "يونيو — منظومة العرض", revenue: "58,368 TL", receipts: "181 فاتورة", units: "252 قطعة" },
    ],
    breakdown: [
      { name: "Offer 299 Croissant", value: "42,900 TL" },
      { name: "Free offer donuts", value: "15,168 TL" },
    ],
    tickets: {
      title: "متوسط فاتورة أعلى مع العرض",
      offer: { label: "فواتير تتضمن العرض", value: "~519 TL" },
      normal: { label: "الفواتير العادية", value: "~414 TL" },
      note: "فواتير العرض أعلى بنحو 25% من الفواتير العادية — العرض يبني السلة ولا يفترسها.",
    },
    takeaway:
      "رسالة الإدارة: هذا لم يكن عرضًا رخيصًا يدمّر الهامش — بل عمل كمحرك للحركة والسلة، خاصة خلال فترة كأس العالم.",
  },

  singles: {
    title: "فواتير الصنف الواحد (بدون عرض 299)",
    subtitle: "أكبر فرصة تحسين مخفية في التقرير",
    stats: [
      { label: "عدد الفواتير", may: "1,053", june: "1,339", delta: "+27.2%" },
      { label: "الإيراد", may: "172,711 TL", june: "228,409 TL", delta: "+32.3%" },
      { label: "متوسط الفاتورة", may: "164.0 TL", june: "170.6 TL", delta: "+4.0%" },
    ],
    topItems: [
      { name: "Water premium", count: 128 },
      { name: "Ice Spanish Latte", count: 120 },
      { name: "V60 Colombian", count: 95 },
      { name: "Habiscus Juice", count: 77 },
      { name: "Çay bardak", count: 73 },
    ],
    insight:
      "العميل ليس «بخيلًا» — متوسط فاتورة الصنف الواحد ارتفع إلى 170.6 TL. المشكلة أن شريحة كبيرة تغادر بصنف واحد فقط.",
    takeaway:
      "الفرصة ليست «حركة أكثر» فقط، بل توسيع السلة بشكل منهجي: اقترانات، نصوص بيع للفريق، عرض بصري، وإضافات عالية الهامش. الماء والشاي تحديدًا فرص upsell شديدة الوضوح.",
  },

  topItems: {
    title: "الأصناف الأعلى مبيعًا — يونيو مقابل مايو",
    subtitle: "القهوة المختصة والمشروبات الباردة قادت الشهر",
    max: 87384,
    items: [
      { name: "V60 (Honduras / Ethiopian / Costa Rica)", june: 87384, may: "27,776", delta: "+214.6%", good: true },
      { name: "Ice Spanish Latte", june: 78986, may: "63,178", delta: "+25.0%", good: true },
      { name: "V60 (Colombian)", june: 73150, may: "31,293", delta: "+133.8%", good: true },
      { name: "Habiscus Juice", june: 68940, may: "20,880", delta: "+230.2%", good: true },
      { name: "Danish tut Berries", june: 68844, may: "75,460", delta: "-8.8%", good: false },
      { name: "Ice Latte", june: 58834, may: "39,797", delta: "+47.8%", good: true },
      { name: "Danish çilek", june: 58548, may: "70,862", delta: "-17.4%", good: false },
      { name: "Offer 299 Croissant", june: 42900, may: "—", delta: "جديد", good: true },
      { name: "Chocolate Roll", june: 41882, may: "50,551", delta: "-17.1%", good: false },
      { name: "Medovik", june: 38515, may: "41,591", delta: "-7.4%", good: false },
    ],
    takeaway:
      "الرسالة التجارية واضحة: يونيو قادته القهوة المختصة والمشروبات المثلجة والعصائر وآليات العروض الموجهة — لا هيمنة المعجنات الكلاسيكية.",
  },

  newItems: {
    title: "أصناف أُطلقت في يونيو",
    subtitle: "الإطلاقات الجديدة صنعت طلبًا حقيقيًا",
    impact: { value: "~141,000 TL", share: "≈ 8.7% من إيراد يونيو", label: "مساهمة الأصناف الجديدة مجتمعة" },
    items: [
      { name: "Offer 299 Croissant", value: "42,900" },
      { name: "Free offer donuts", value: "15,168" },
      { name: "Caramel Mille-Feuille", value: "13,625" },
      { name: "Mini Cookies Cup", value: "12,920" },
      { name: "Arabic Coffee", value: "12,700" },
      { name: "Pepeion Croissant", value: "9,828" },
      { name: "Mojito Çilek", value: "8,280" },
      { name: "London Cake", value: "7,200" },
      { name: "Ice Caramel Macchiato", value: "5,540" },
      { name: "Caramel Latte", value: "4,405" },
    ],
    takeaway:
      "نموّ يونيو لم يكن تحسينًا للأصناف القائمة فقط — القائمة لم تُدافَع عنها فحسب، بل توسّعت بإطلاقات منتجة. هذه قيمة تطوير أعمال فعلية.",
  },

  decliners: {
    title: "الأصناف المتراجعة — بصراحة",
    subtitle: "ليست كلها أخبارًا سيئة، لكنها تستحق مراجعة واعية",
    items: [
      { name: "Delivery 100", may: "31,300", june: "3,800", delta: "-87.9%" },
      { name: "Tart Fruits", may: "14,630", june: "6,010", delta: "-58.9%" },
      { name: "Espresso Beans 250g", may: "5,500", june: "250", delta: "-95.5%" },
      { name: "Diet Croissant", may: "4,796", june: "1,900", delta: "-60.4%" },
      { name: "Mini Croissant plain", may: "1,400", june: "300", delta: "-78.6%" },
      { name: "Chocolate Roll", may: "50,551", june: "41,882", delta: "-17.1%" },
      { name: "Danish çilek", may: "70,862", june: "58,548", delta: "-17.4%" },
      { name: "Croissant Badem", may: "37,621", june: "33,197", delta: "-11.8%" },
      { name: "Croissant krem Peynirli", may: "35,949", june: "32,606", delta: "-9.3%" },
    ],
    readings: [
      {
        title: "إحلال مقصود",
        desc: "منتجات أحدث وأقوى حلّت مكان أصناف أقدم وأضعف — تراجع صحي ضمن تطوير القائمة.",
        positive: true,
      },
      {
        title: "فقدان اهتمام أو تزاحم قائمة",
        desc: "أصناف تتلاشى دون قرار استراتيجي — تحتاج مراجعة متعمدة لا انسحابًا صامتًا.",
        positive: false,
      },
    ],
    takeaway:
      "الأصناف المتراجعة ليست سيئة تلقائيًا إذا حلّت محلها فئات أقوى — لكن يجب مراجعتها بقرار واعٍ لا تركها تتلاشى.",
  },

  story: {
    title: "قصة الشهر — القراءة الاستراتيجية",
    subtitle: "ماذا تغيّر فعليًا بين مايو ويونيو؟",
    points: [
      { title: "إيراد ينمو بقوة", desc: "+14.9% على مستوى الشهر", good: true },
      { title: "حركة تنمو أسرع", desc: "الفواتير +21.4% — الطلب حقيقي", good: true },
      { title: "جودة إيراد أعلى", desc: "الخصومات انخفضت والمبيعات أنظف", good: true },
      { title: "مزيج جديد", desc: "V60 والمثلجات والعصائر والإطلاقات بدل الاعتماد على المعجنات", good: true },
      { title: "الليل قوة حقيقية", desc: "+40.7% في فترة 20:00–24:00", good: true },
      { title: "منتصف الأسبوع أقوى", desc: "الاثنين والثلاثاء قفزا نحو +69%", good: true },
      { title: "نهاية الأسبوع ضعيفة", desc: "السبت -17.1% — أوضح نقطة ضعف", good: false },
      { title: "فجوة السلة مستمرة", desc: "فواتير الصنف الواحد أكبر فجوة تحقيق دخل", good: false },
    ],
  },

  actions: {
    title: "غرف التحسين — أولويات المرحلة القادمة",
    subtitle: "من حركة أقوى إلى سلال أقوى",
    items: [
      {
        title: "استعادة نهاية الأسبوع",
        desc: "السبت والجمعة يحتاجان تفعيلًا تجاريًا مركّزًا — أداء منتصف الأسبوع قوي أصلًا.",
      },
      {
        title: "تحويل فواتير الصنف الواحد",
        desc: "شريحة كبيرة من الضيوف تشتري صنفًا واحدًا — هذا أوضح مسار لنموّ غني بالهامش.",
      },
      {
        title: "Upselling منهجي",
        desc: "V60 مع حلى، مثلجات مع مخبوزات، شاي وماء مع إضافات بسيطة — بيع اقترانات لا أصناف معزولة.",
      },
      {
        title: "تحرير القائمة بوعي",
        desc: "دعم هوية يونيو الرابحة (قهوة مختصة، مشروبات باردة، حلى، عروض تجربة) ومراجعة الأصناف الضعيفة بقرار.",
      },
      {
        title: "انضباط العروض",
        desc: "درس عرض 299: العروض تنجح حين تكون موجهة، مرتبطة بحدث، وبانية للسلة — لا قائمة على الخصم.",
      },
    ],
  },

  conclusion: {
    title: "الخلاصة للإدارة",
    subtitle: "يونيو لم يكن شهرًا أعلى إيرادًا فقط — بل شهرًا أفضل جودة تجارية",
    stats: [
      { value: "+14.9%", label: "الإيراد" },
      { value: "+18.8%", label: "الإنتاجية اليومية" },
      { value: "+21.4%", label: "الفواتير" },
      { value: "-13.9%", label: "الخصومات" },
    ],
    achieved:
      "الإيراد ارتفع، الخصومات انخفضت، تجارة الليل قفزت، القهوة المختصة والمشروبات الباردة أصبحت محركات إيراد رئيسية، والأصناف الجديدة أضافت مبيعات إضافية ملموسة.",
    next:
      "العمل غير المكتمل ليس خلق طلب فقط: استعادة نهاية الأسبوع، توسيع السلة، وتحقيق دخل أذكى من القائمة. العمل تحسّن جوهريًا — والطبقة التالية هي تحويل الحركة الأقوى إلى سلال أقوى، وجعل نهاية الأسبوع تؤدي كبقية أيامه.",
  },

  thanks: {
    title: "شكراً لكم",
    subtitle: "نتطلع لمناقشة أولويات يوليو واتخاذ الخطوة التالية معًا",
    contact: "محمد ابوعيسى",
  },
};
