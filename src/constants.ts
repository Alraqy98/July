/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type Trend = 'up' | 'down';

export const CONTENT = {
  hero: {
    brand: "تقرير مبيعات يونيو 2026",
    subtitle: "أداء يونيو مقارنة بمايو: نموّ أقوى وجودة إيراد أعلى",
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
    subtitle: "",
    cards: [
      { label: "إجمالي الإيراد", may: "1,401,086", june: "1,610,716", unit: "TL", delta: "+14.9%", trend: "up" as Trend, good: true },
      { label: "عدد الفواتير", may: "3,168", june: "3,846", unit: "فاتورة", delta: "+21.4%", trend: "up" as Trend, good: true },
      { label: "متوسط الإيراد اليومي", may: "45,196", june: "53,691", unit: "TL", delta: "+18.8%", trend: "up" as Trend, good: true },
      { label: "إجمالي الخصومات", may: "52,290", june: "44,996", unit: "TL", delta: "-13.9%", trend: "down" as Trend, good: true },
      { label: "نسبة الخصم", may: "3.73%", june: "2.79%", unit: "", delta: "-0.94 نقطة", trend: "down" as Trend, good: true },
      { label: "متوسط الفاتورة", may: "442.3", june: "418.8", unit: "TL", delta: "-5.3%", trend: "down" as Trend, good: false },
    ],
    caution:
      "نقطة الانتباه الوحيدة: متوسط الفاتورة انخفض (442 → 419 TL) وأصناف الفاتورة (2.65 → 2.43) — النمو جاء من عمليات أكثر، لا من سلال أكبر.",
  },

  time: {
    title: "متى نبيع؟ الفترات والساعات",
    subtitle: "الليل هو محرك النمو الأوضح في يونيو",
    max: 414899,
    slots: [
      { name: "الصباح", range: "حتى 12:00", may: 140433, june: 143169, delta: "+1.9%", highlight: false },
      { name: "الظهيرة", range: "12:00–15:00", may: 354011, june: 394306, delta: "+11.4%", highlight: false },
      { name: "بعد الظهر", range: "15:00–18:00", may: 378946, june: 414899, delta: "+9.5%", highlight: false },
      { name: "المساء", range: "18:00–20:00", may: 265759, june: 289895, delta: "+9.1%", highlight: false },
      { name: "الليل", range: "20:00–24:00", may: 261937, june: 368447, delta: "+40.7%", highlight: true },
    ],
    hoursLabel: "أقوى ساعات يونيو",
    hours: [
      { hour: "12:00", value: "147.7k", night: false },
      { hour: "11:00", value: "134.7k", night: false },
      { hour: "13:00", value: "122.6k", night: false },
      { hour: "21:00", value: "117.7k", night: true },
      { hour: "22:00", value: "99.1k", night: true },
    ],
    takeaway:
      "الليل قفز +40.7% ودخلت 21:00 و22:00 قائمة أقوى الساعات — المتجر يتحوّل إلى وجهة مسائية وليلية، لا مجرد محطة نهارية.",
  },

  days: {
    title: "نمط أيام الأسبوع",
    subtitle: "نموّ يقوده منتصف الأسبوع — وضعف في نهايته",
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
      "الاثنين والثلاثاء قفزا نحو +69% — بينما أصبح السبت (-17.1%) أكبر ملف تجاري مفتوح.",
  },

  offer: {
    title: "عرض كأس العالم 299",
    subtitle: "ترويج يبني السلة ولا يأكل الهامش",
    compare: [
      { period: "مايو — Offer 299", revenue: "27,600 TL", details: ["56 فاتورة", "92 قطعة"], delta: null },
      { period: "يونيو — Offer 299 Croissant", revenue: "42,900 TL", details: [], delta: "+55.4%" },
    ],
    tickets: {
      offer: { label: "متوسط فاتورة تتضمن العرض", value: "~519 TL" },
      normal: { label: "متوسط الفاتورة العادية", value: "~414 TL" },
    },
    takeaway:
      "فواتير العرض أعلى بنحو 25% من العادية — العرض عمل كمحرك حركة وسلة خلال فترة كأس العالم، لا كخصم يدمّر الهامش.",
  },

  singles: {
    title: "فواتير الصنف الواحد",
    subtitle: "أكبر فرصة تحسين في التقرير (بدون فواتير عرض 299)",
    stats: [
      { label: "عدد الفواتير", may: "1,053", june: "1,339", delta: "+27.2%" },
      { label: "الإيراد", may: "172,711 TL", june: "228,409 TL", delta: "+32.3%" },
      { label: "متوسط الفاتورة", may: "164.0 TL", june: "170.6 TL", delta: "+4.0%" },
    ],
    topLabel: "الأكثر شراءً كصنف وحيد",
    topItems: [
      { name: "Water premium", count: 128 },
      { name: "Ice Spanish Latte", count: 120 },
      { name: "V60 Colombian", count: 95 },
      { name: "Habiscus Juice", count: 77 },
      { name: "Çay bardak", count: 73 },
    ],
    takeaway:
      "العميل مستعد للدفع لكنه يغادر بصنف واحد — الفرصة هي توسيع السلة: اقترانات، نصوص بيع، وإضافات عالية الهامش. الماء والشاي أوضح فرص upsell.",
  },

  winners: {
    title: "محركات النمو — أبرز الرابحين",
    subtitle: "القهوة المختصة والمشروبات الباردة قادت الشهر",
    max: 87384,
    items: [
      { name: "V60 (Honduras / Ethiopian / Costa Rica)", june: 87384, may: "27,776", delta: "+214.6%" },
      { name: "Habiscus Juice", june: 68940, may: "20,880", delta: "+230.2%" },
      { name: "V60 (Colombian)", june: 73150, may: "31,293", delta: "+133.8%" },
      { name: "Ice Spanish Latte", june: 78986, may: "63,178", delta: "+25.0%" },
      { name: "Ice Latte", june: 58834, may: "39,797", delta: "+47.8%" },
      { name: "Offer 299 Croissant", june: 42900, may: "—", delta: "جديد" },
    ],
    takeaway:
      "المزيج تحوّل من هيمنة المعجنات الكلاسيكية إلى قهوة مختصة ومشروبات باردة وعروض موجهة.",
  },

  newItems: {
    title: "أصناف أُطلقت في يونيو",
    subtitle: "الإطلاقات الجديدة صنعت طلبًا حقيقيًا",
    impact: { value: "~126,000 TL", share: "≈ 7.8% من إيراد يونيو", label: "مساهمة الأصناف الجديدة مجتمعة" },
    items: [
      { name: "Offer 299 Croissant", value: "42,900" },
      { name: "Caramel Mille-Feuille", value: "13,625" },
      { name: "Mini Cookies Cup", value: "12,920" },
      { name: "Arabic Coffee", value: "12,700" },
      { name: "Pepeion Croissant", value: "9,828" },
      { name: "Mojito Çilek", value: "8,280" },
    ],
    more: "+ 3 أصناف أخرى (London Cake، Ice Caramel Macchiato، Caramel Latte)",
    takeaway:
      "القائمة لم تُدافَع عنها فحسب — بل توسّعت بإطلاقات منتجة أضافت مبيعات ملموسة.",
  },

  decliners: {
    title: "الأصناف المتراجعة — بصراحة",
    subtitle: "",
    items: [
      { name: "Delivery 100", may: "31,300", june: "3,800", delta: "-87.9%" },
      { name: "Tart Fruits", may: "14,630", june: "6,010", delta: "-58.9%" },
      { name: "Danish çilek", may: "70,862", june: "58,548", delta: "-17.4%" },
      { name: "Chocolate Roll", may: "50,551", june: "41,882", delta: "-17.1%" },
      { name: "Croissant Badem", may: "37,621", june: "33,197", delta: "-11.8%" },
      { name: "Croissant krem Peynirli", may: "35,949", june: "32,606", delta: "-9.3%" },
    ],
    readings: [
      {
        title: "إحلال مقصود",
        desc: "منتجات أقوى حلّت مكان أصناف أضعف — تراجع صحي.",
        positive: true,
      },
      {
        title: "فقدان اهتمام",
        desc: "أصناف تتلاشى دون قرار — تحتاج مراجعة متعمدة.",
        positive: false,
      },
    ],
  },

  actions: {
    title: "أولويات المرحلة القادمة",
    subtitle: "من حركة أقوى إلى سلال أقوى",
    items: [
      {
        title: "استعادة نهاية الأسبوع",
        desc: "تفعيل تجاري مركّز للسبت والجمعة — منتصف الأسبوع قوي أصلًا.",
      },
      {
        title: "تحويل فواتير الصنف الواحد",
        desc: "أوضح مسار لنموّ غني بالهامش.",
      },
      {
        title: "Upselling منهجي",
        desc: "V60 مع حلى، مثلجات مع مخبوزات، شاي وماء مع إضافات بسيطة.",
      },
      {
        title: "تحرير القائمة بوعي",
        desc: "دعم هوية يونيو الرابحة ومراجعة الأصناف الضعيفة بقرار.",
      },
      {
        title: "انضباط العروض",
        desc: "عروض موجهة ومرتبطة بحدث وبانية للسلة — لا قائمة على الخصم.",
      },
    ],
  },

  conclusion: {
    title: "الخلاصة للإدارة",
    subtitle: "يونيو لم يكن أعلى إيرادًا فقط — بل أفضل جودة تجارية",
    stats: [
      { value: "+14.9%", label: "الإيراد" },
      { value: "+18.8%", label: "الإنتاجية اليومية" },
      { value: "+21.4%", label: "الفواتير" },
      { value: "-13.9%", label: "الخصومات" },
    ],
    achieved:
      "الإيراد ارتفع، الخصومات انخفضت، تجارة الليل قفزت، القهوة المختصة والمشروبات الباردة أصبحت محركات رئيسية، والأصناف الجديدة أضافت مبيعات ملموسة.",
    next:
      "تثبيت زخم يونيو في الأشهر القادمة والبناء عليه، مع وضع مستهدفات واضحة للباريستا لكل شفت لترسيخ ثقافة الـ Upselling والـ Cross-selling وتحويل الحركة الأقوى إلى سلال أقوى.",
  },

  thanks: {
    title: "شكراً لكم",
    subtitle: "نتطلع لمناقشة أولويات يوليو واتخاذ الخطوة التالية معًا",
    contact: "محمد ابوعيسى",
  },
};
