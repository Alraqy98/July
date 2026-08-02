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
      { value: "+22%", label: "الإيراد" },
      { value: "+14%", label: "الفواتير" },
      { value: "+18%", label: "الإيراد اليومي" },
    ],
  },

  kpis: {
    title: "الأداء العام",
    subtitle: "",
    cards: [
      { label: "إجمالي الإيراد", prev: "1,486,027", current: "1,817,684", unit: "TL", delta: "+22%", trend: "up" as Trend, good: true },
      { label: "عدد الفواتير", prev: "3,644", current: "4,168", unit: "فاتورة", delta: "+14%", trend: "up" as Trend, good: true },
      { label: "متوسط الإيراد اليومي", prev: "49,534", current: "58,635", unit: "TL", delta: "+18%", trend: "up" as Trend, good: true },
      { label: "إجمالي الخصومات", prev: "157,028", current: "268,901", unit: "TL", delta: "+71%", trend: "up" as Trend, good: false },
      { label: "نسبة الخصم", prev: "~10%", current: "13%", unit: "", delta: "+3 نقاط", trend: "up" as Trend, good: false },
      { label: "متوسط الفاتورة", prev: "408", current: "436", unit: "TL", delta: "+7%", trend: "up" as Trend, good: true },
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
      { name: "المساء", range: "18:00–20:00", prev: 180521, current: 214168, delta: "+19%", highlight: false },
      { name: "الليل", range: "20:00–24:00", prev: 327038, current: 362770, delta: "+11%", highlight: false },
    ],
    hoursLabel: "أقوى ساعات يوليو",
    hours: [
      { hour: "12:00", value: "194.4k", night: false },
      { hour: "11:00", value: "159.4k", night: false },
      { hour: "13:00", value: "144.8k", night: false },
      { hour: "14:00", value: "144.0k", night: false },
      { hour: "16:00", value: "130.0k", night: false },
    ],
    takeaway:
      "في يونيو كان الليل هو البطل — في يوليو انتقل الزخم إلى منتصف النهار: الظهيرة قفزت +44% وبعد الظهر +37%، وكل الساعات الأقوى أصبحت بين 11:00 و16:00.",
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
      { name: "الجمعة", prev: 207254, current: 268662, delta: "+30%", good: true },
      { name: "السبت", prev: 190760, current: 243374, delta: "+28%", good: true },
      { name: "الأحد", prev: 187820, current: 231866, delta: "+23%", good: true },
    ],
    takeaway:
      "أهم إنجاز الشهر: نهاية الأسبوع عادت للنمو (+28% سبت، +23% أحد) بعد أن كانت أكبر نقطة ضعف في يونيو. تراجع الاثنين والثلاثاء الطفيف يعود جزئيًا للتقويم — يونيو تضمّن خمسة من كلٍّ منهما مقابل أربعة في يوليو.",
  },

  offer: {
    title: "عرض استرجاع الفاتورة — خصم 50%",
    subtitle: "انطلق في 15 يوليو: اشترِ اليوم بالسعر الكامل وعُد غدًا بفاتورتك لتحصل على 50% على نفس الأصناف",
    compare: [
      { period: "قبل الإطلاق — 1 إلى 14 يوليو", revenue: "53,325 TL/يوم", details: ["الإيراد اليومي المتوسط"], delta: null },
      { period: "بعد الإطلاق — 15 إلى 31 يوليو", revenue: "64,851 TL/يوم", details: ["147 استردادًا", "~9 يوميًا"], delta: "+22%" },
    ],
    tickets: {
      offer: { label: "متوسط سلة الاسترداد (قبل الخصم)", value: "~555 TL" },
      normal: { label: "متوسط الفاتورة العادية", value: "~436 TL" },
    },
    takeaway:
      "منذ إطلاقه: 147 استردادًا (~9 يوميًا) بكلفة ~41 ألف ليرة، وسلال الاسترداد أكبر بنحو 27% من العادية — ويتزامن الإطلاق مع قفزة الإيراد اليومي +22%. سؤال أغسطس: كم من هذه الزيارات كانت ستحدث بدون العرض؟",
  },

  singles: {
    title: "فواتير الصنف الواحد",
    subtitle: "ما تزال أكبر فرصة تحسين في التقرير",
    stats: [
      { label: "عدد الفواتير", prev: "1,560", current: "1,754", delta: "+12%" },
      { label: "الإيراد", prev: "292,796 TL", current: "331,611 TL", delta: "+13%" },
      { label: "متوسط الفاتورة", prev: "187.7 TL", current: "189.1 TL", delta: "+1%" },
    ],
    topLabel: "الأكثر شراءً كصنف وحيد",
    topItems: [
      { name: "Ice Spanish Latte", count: 163 },
      { name: "Water premium", count: 160 },
      { name: "Habiscus Juice", count: 106 },
      { name: "Ice Latte", count: 93 },
      { name: "Çay bardak", count: 91 },
    ],
    takeaway:
      "نحو 42% من فواتير يوليو ما تزال بصنف واحد فقط — أوضح مسار لنموّ غني بالهامش: Upselling منهجي يبدأ بمشتري المشروبات الباردة والماء والشاي.",
  },

  winners: {
    title: "محركات النمو — أبرز الرابحين",
    subtitle: "معجنات التوت والتشيزكيك تقود — وقناة تجزئة جديدة تولد",
    max: 84028,
    items: [
      { name: "Danish tut Berries", current: 84028, prev: "68,594", delta: "+22%" },
      { name: "Danish çilek", current: 78361, prev: "58,548", delta: "+34%" },
      { name: "قهوة التجزئة 250g (فلتر + إسبريسو)", current: 48030, prev: "~1,000", delta: "جديد" },
      { name: "San Sebastian + Cheesecake", current: 47575, prev: "28,204", delta: "+69%" },
      { name: "Ice Americano", current: 29174, prev: "15,080", delta: "+93%" },
      { name: "London Cake", current: 27730, prev: "7,200", delta: "+285%" },
    ],
    takeaway:
      "أبرز مفاجآت الشهر: بيع البن للمنازل انطلق من لا شيء تقريبًا إلى ~48 ألف ليرة — قناة دخل جديدة تستحق رفًا أوضح ودفعة تسويقية.",
  },

  newItems: {
    title: "أصناف أُطلقت في يوليو",
    subtitle: "إطلاقات محدودة الأثر — النمو جاء من تعميق الحالي",
    impact: { value: "~22,500 TL", share: "≈ 1.2% من إيراد يوليو", label: "مساهمة الأصناف الجديدة مجتمعة" },
    items: [
      { name: "CroShake", value: "9,450" },
      { name: "Syrup Monin", value: "6,960" },
      { name: "Milkshake Lotus", value: "2,450" },
      { name: "Arabic Coffee 250 gr", value: "1,400" },
      { name: "Çay 250 gr", value: "1,280" },
      { name: "Belgium Chocolate 250 gr", value: "400" },
    ],
    more: "+ صنفان آخران (Soda 6 adet، Spanish sos 1L)",
    takeaway:
      "على عكس يونيو الذي أضافت إطلاقاته ~8% من الإيراد، نموّ يوليو جاء من الأصناف الحالية — أغسطس يحتاج دفعة إطلاقات جديدة للحفاظ على الزخم.",
  },

  decliners: {
    title: "الأصناف المتراجعة",
    subtitle: "",
    items: [
      { name: "Lotus Roll Croissant", prev: "32,368", current: "20,854", delta: "-36%" },
      { name: "Spanish Latte (ساخن)", prev: "18,685", current: "14,782", delta: "-21%" },
      { name: "V60 (Colombian)", prev: "42,100", current: "34,750", delta: "-17%" },
      { name: "Çay bardak", prev: "30,355", current: "25,585", delta: "-16%" },
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
        title: "انضباط الخصومات",
        desc: "نمت أسرع من الإيراد بوضوح — تفكيك مصادرها ووضع قواعد وسقف واضح لكل عرض.",
      },
      {
        title: "تحويل فواتير الصنف الواحد",
        desc: "نحو 42% من الفواتير بصنف واحد — Upselling منهجي هو أوضح مسار لرفع متوسط الفاتورة.",
      },
      {
        title: "قياس جدوى عرض الـ 50%",
        desc: "سؤال بسيط للمستردّين («هل كنت ستعود بدون العرض؟») لتقدير الزيارات الإضافية قبل قرار التوسّع.",
      },
      {
        title: "تنمية قناة التجزئة المنزلية",
        desc: "البن انطلق بقوة — توسيع التشكيلة وإبرازها على الرف وعند الكاشير.",
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
      { value: "+22%", label: "الإيراد" },
      { value: "+18%", label: "الإنتاجية اليومية" },
      { value: "+14%", label: "الفواتير" },
      { value: "+7%", label: "متوسط الفاتورة" },
    ],
    achieved:
      "الإيراد نما بقوة، نهاية الأسبوع استُعيدت بعد أن كانت أكبر نقطة ضعف، منتصف النهار أصبح المحرك الرئيسي، متوسط الفاتورة والسلة ارتفعا، وفُتحت قناة دخل جديدة في التجزئة المنزلية.",
    next:
      "المرحلة القادمة: ضبط الخصومات التي تنمو أسرع من الإيراد، تحويل فواتير الصنف الواحد عبر Upselling منهجي، ودفعة إطلاقات جديدة في أغسطس لتثبيت الزخم.",
  },

  thanks: {
    title: "شكراً لكم",
    subtitle: "نتطلع معًا إلى المزيد والمزيد من النجاح",
    contact: "محمد ابوعيسى",
  },
};
