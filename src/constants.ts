/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type Trend = 'up' | 'down';

export const CONTENT = {
  hero: {
    brand: "تقرير مبيعات يوليو 2026",
    subtitle: "أداء يوليو مقارنة بيونيو: نموّ قوي يقوده منتصف النهار ونهاية الأسبوع",
    badges: ["يونيو 2026", "يوليو 2026"],
    consultant: "محمد ابوعيسى",
    highlights: [
      { value: "+24%", label: "الإيراد" },
      { value: "+15%", label: "الفواتير" },
      { value: "+20%", label: "الإيراد اليومي" },
    ],
  },

  kpis: {
    title: "الأداء العام",
    subtitle: "",
    cards: [
      { label: "إجمالي الإيراد", prev: "1,470,224", current: "1,824,871", unit: "TL", delta: "+24%", trend: "up" as Trend, good: true },
      { label: "عدد الفواتير", prev: "3,545", current: "4,068", unit: "فاتورة", delta: "+15%", trend: "up" as Trend, good: true },
      { label: "متوسط الإيراد اليومي", prev: "49,007", current: "58,867", unit: "TL", delta: "+20%", trend: "up" as Trend, good: true },
      { label: "خصومات العروض الفعلية", prev: "44,848", current: "139,533", unit: "TL", delta: "×3", trend: "up" as Trend, good: false },
      { label: "هدر نهاية اليوم (شطب)", prev: "112,180", current: "130,835", unit: "TL", delta: "+17%", trend: "up" as Trend, good: false },
      { label: "متوسط الفاتورة", prev: "414.7", current: "448.6", unit: "TL", delta: "+8%", trend: "up" as Trend, good: true },
    ],
  },

  time: {
    title: "متى نبيع؟ الفترات والساعات",
    subtitle: "منتصف النهار هو محرك النمو الأوضح في يوليو",
    max: 483169,
    slots: [
      { name: "الصباح", range: "حتى 12:00", prev: 383684, current: 404358, delta: "+5%", highlight: false },
      { name: "الظهيرة", range: "12:00–15:00", prev: 336452, current: 483169, delta: "+44%", highlight: true },
      { name: "بعد الظهر", range: "15:00–18:00", prev: 258332, current: 353219, delta: "+37%", highlight: false },
      { name: "المساء", range: "18:00–20:00", prev: 180521, current: 215798, delta: "+20%", highlight: false },
      { name: "الليل", range: "20:00–24:00", prev: 327038, current: 380318, delta: "+16%", highlight: false },
    ],
    hoursLabel: "أقوى ساعات يوليو",
    hours: [
      { hour: "12:00", value: "194.4k", night: false },
      { hour: "11:00", value: "159.4k", night: false },
      { hour: "13:00", value: "144.8k", night: false },
      { hour: "14:00", value: "144.0k", night: false },
      { hour: "21:00", value: "131.2k", night: true },
    ],
    takeaway:
      "في يونيو كان الليل هو البطل — في يوليو انتقل الزخم إلى منتصف النهار: الظهيرة قفزت +44% وبعد الظهر +37%، وأربع من أقوى خمس ساعات أصبحت بين 11:00 و14:00.",
  },

  days: {
    title: "نمط أيام الأسبوع",
    subtitle: "نهاية الأسبوع استُعيدت — ومنتصف الأسبوع يقود",
    max: 311739,
    items: [
      { name: "الاثنين", prev: 251130, current: 231358, delta: "-8%", good: false },
      { name: "الثلاثاء", prev: 251556, current: 245873, delta: "-2%", good: false },
      { name: "الأربعاء", prev: 195945, current: 284812, delta: "+45%", good: true },
      { name: "الخميس", prev: 201561, current: 311739, delta: "+55%", good: true },
      { name: "الجمعة", prev: 207254, current: 287839, delta: "+39%", good: true },
      { name: "السبت", prev: 190760, current: 243374, delta: "+28%", good: true },
      { name: "الأحد", prev: 187820, current: 231866, delta: "+23%", good: true },
    ],
    takeaway:
      "أهم إنجاز الشهر: نهاية الأسبوع عادت للنمو بعد أن كانت أكبر نقطة ضعف في يونيو. وتراجع الاثنين والثلاثاء ظاهري فقط بسبب التقويم — يونيو تضمّن خمسة من كلٍّ منهما مقابل أربعة في يوليو، ومتوسط اليوم الواحد أعلى فعليًا في يوليو: +15% للاثنين و+22% للثلاثاء.",
  },

  offer: {
    title: "عرض استرجاع الفاتورة — خصم 50%",
    subtitle: "انطلق في 15 يوليو: اشترِ اليوم بالسعر الكامل وعُد غدًا بفاتورتك لتحصل على 50% على نفس الأصناف",
    compare: [
      { period: "قبل الإطلاق — 1 إلى 14 يوليو", revenue: "53,325 TL/يوم", details: ["الإيراد اليومي المتوسط"], delta: null },
      { period: "بعد الإطلاق — 15 إلى 31 يوليو", revenue: "64,136 TL/يوم", details: ["150 استردادًا", "~9 يوميًا"], delta: "+20%" },
    ],
    tickets: {
      offer: { label: "متوسط سلة الاسترداد (قبل الخصم)", value: "~553 TL" },
      normal: { label: "متوسط الفاتورة العادية", value: "~449 TL" },
    },
    takeaway:
      "العرض أثبت قدرته على إعادة العملاء: 150 عميلًا عادوا بفواتيرهم خلال 17 يومًا فقط — بمعدل ~9 زيارات متكررة يوميًا. والأهم أن متوسط السلة ارتفع بنحو 23% عن الفاتورة العادية، لأن العرض شجّع العملاء على شراء أصناف أكثر للاستفادة منه في اليوم التالي.",
  },

  singles: {
    title: "فواتير الصنف الواحد",
    subtitle: "ما تزال أكبر فرصة تحسين في التقرير",
    stats: [
      { label: "عدد الفواتير", prev: "1,635", current: "1,894", delta: "+16%" },
      { label: "الإيراد", prev: "321,896 TL", current: "380,004 TL", delta: "+18%" },
      { label: "متوسط الفاتورة", prev: "196.9 TL", current: "200.6 TL", delta: "+2%" },
    ],
    topLabel: "الأكثر شراءً كصنف وحيد",
    topItems: [
      { name: "Ice Spanish Latte", count: 166 },
      { name: "Water premium", count: 162 },
      { name: "Offer 299 Croissant", count: 125 },
      { name: "Habiscus Juice", count: 107 },
      { name: "Ice Latte", count: 93 },
    ],
    takeaway:
      "نحو 45% من فواتير يوليو ما تزال بصنف واحد فقط — أوضح مسار لنموّ غني بالهامش: Upselling منهجي يبدأ بمشتري المشروبات الباردة والماء والشاي.",
  },

  winners: {
    title: "محركات النمو — أبرز الرابحين",
    subtitle: "معجنات التوت والتشيزكيك والمشروبات الباردة تقود الشهر",
    max: 84588,
    items: [
      { name: "Danish tut Berries", current: 84588, prev: "68,594", delta: "+23%" },
      { name: "Danish çilek", current: 78921, prev: "58,548", delta: "+35%" },
      { name: "San Sebastian + Cheesecake", current: 48125, prev: "28,204", delta: "+71%" },
      { name: "Ice Americano", current: 29319, prev: "15,080", delta: "+94%" },
      { name: "London Cake", current: 27980, prev: "7,200", delta: "+289%" },
      { name: "Pepeion Croissant", current: 24718, prev: "9,828", delta: "+152%" },
    ],
    takeaway:
      "التحول واضح نحو الحلويات الباردة والمعجنات الموسمية: San Sebastian +71%، وLondon Cake تضاعفت أربع مرات تقريبًا، وأمريكانو المثلج يقارب الضعف.",
  },

  newItems: {
    title: "أصناف أُطلقت في يوليو",
    subtitle: "إطلاقات محدودة الأثر — النمو جاء من تعميق الحالي",
    impact: { value: "~11,900 TL", share: "≈ 0.6% من إيراد يوليو", label: "مساهمة الأصناف الجديدة مجتمعة" },
    items: [
      { name: "CroShake", value: "9,450" },
      { name: "Milkshake Lotus", value: "2,450" },
    ],
    more: "",
    takeaway:
      "على عكس يونيو الذي أضافت إطلاقاته ~8% من الإيراد، نموّ يوليو جاء من الأصناف الحالية — أغسطس يحتاج دفعة إطلاقات جديدة للحفاظ على الزخم.",
  },

  decliners: {
    title: "الأصناف المتراجعة",
    subtitle: "",
    items: [
      { name: "Lotus Roll Croissant", prev: "32,368", current: "20,854", delta: "-36%" },
      { name: "Spanish Latte (ساخن)", prev: "18,685", current: "15,522", delta: "-17%" },
      { name: "V60 (Colombian)", prev: "42,100", current: "34,750", delta: "-17%" },
      { name: "Çay bardak", prev: "30,355", current: "25,685", delta: "-15%" },
      { name: "Chocolate Roll", prev: "41,882", current: "37,066", delta: "-11%" },
      { name: "Halloum Croissant", prev: "31,410", current: "28,728", delta: "-9%" },
    ],
    readings: [
      {
        title: "قراءتنا",
        desc: "معظم التراجع إحلال موسمي صحي: المشروبات الساخنة تفسح المجال للمثلجات في عز الصيف.",
        positive: true,
      },
      {
        title: "خطوتنا",
        desc: "مراجعة Lotus Roll وChocolate Roll تحديدًا — تراجعهما لا يبدو موسميًا ويستحق قرارًا: تطوير أو استبدال.",
        positive: false,
      },
    ],
  },

  actions: {
    title: "أولويات المرحلة القادمة",
    subtitle: "تثبيت الزخم وضبط الهامش",
    items: [
      {
        title: "خفض الهدر الليلي",
        desc: "~4,200 TL/ليلة من مخبوزات غير مباعة تُشطب عند الإغلاق — ضبط إنتاج المساء هو أسرع مكسب هامش متاح.",
      },
      {
        title: "تحويل فواتير الصنف الواحد",
        desc: "نحو 42% من الفواتير بصنف واحد — Upselling منهجي هو أوضح مسار لرفع متوسط الفاتورة.",
      },
      {
        title: "البناء على نجاح عرض الاسترجاع",
        desc: "العرض أعاد ~150 عميلًا ورفع السلال +23% في 17 يومًا وبكلفة ~2% من الإيراد — تثبيته والترويج له عند الكاشير بشكل أقوى.",
      },
      {
        title: "قرار للأصناف المتراجعة",
        desc: "مراجعة Lotus Roll وChocolate Roll تحديدًا — تطوير أو استبدال أو إيقاف بقرار واضح.",
      },
      {
        title: "دفعة إطلاقات لأغسطس",
        desc: "إطلاقات يوليو كانت محدودة الأثر — تكرار نجاح دفعة يونيو للحفاظ على الزخم.",
      },
    ],
  },

  conclusion: {
    title: "الخلاصة للإدارة",
    subtitle: "يوليو واصل الصعود — وغيّر شكل يومه وأسبوعه للأفضل",
    stats: [
      { value: "+24%", label: "الإيراد" },
      { value: "+20%", label: "الإنتاجية اليومية" },
      { value: "+15%", label: "الفواتير" },
      { value: "+8%", label: "متوسط الفاتورة" },
    ],
    achieved:
      "الإيراد نما بقوة، نهاية الأسبوع استُعيدت بعد أن كانت أكبر نقطة ضعف، منتصف النهار أصبح المحرك الرئيسي، ومتوسط الفاتورة والسلة ارتفعا مع عرض استرجاع الفاتورة.",
    next:
      "المرحلة القادمة: البناء على نجاح عرض استرجاع الفاتورة بعد شهره الأول القوي، خفض الهدر الليلي، تحويل فواتير الصنف الواحد عبر Upselling منهجي، ودفعة إطلاقات جديدة في أغسطس لتثبيت الزخم.",
  },

  thanks: {
    title: "شكراً لكم",
    subtitle: "نتطلع معًا إلى المزيد والمزيد من النجاح",
    contact: "محمد ابوعيسى",
  },
};
