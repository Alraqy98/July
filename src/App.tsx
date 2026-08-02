import { useState, useEffect, useCallback } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  ArrowDownRight,
  TrendingUp,
  Sparkles,
  Moon,
  Clock,
  CalendarDays,
  Trophy,
  Receipt,
  Coffee,
  CupSoda,
  Rocket,
  AlertTriangle,
  CheckCircle2,
  Target,
  Store,
  ShoppingBasket,
  BadgePercent,
  Scale,
} from 'lucide-react';
import { CONTENT } from './constants';

const SLIDES = [
  'hero',
  'kpis',
  'time',
  'days',
  'offer',
  'singles',
  'winners',
  'newItems',
  'decliners',
  'actions',
  'conclusion',
  'thanks',
] as const;

const fmt = (n: number) => n.toLocaleString('en-US');

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const isPdfMode =
    typeof window !== 'undefined' && new URLSearchParams(window.location.search).has('pdf');

  const paginate = useCallback(
    (newDirection: number) => {
      const next = currentSlide + newDirection;
      if (next >= 0 && next < SLIDES.length) {
        setCurrentSlide(next);
      }
    },
    [currentSlide],
  );

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') paginate(-1);
      if (e.key === 'ArrowLeft') paginate(1);
      if (e.key === ' ') paginate(1);
      if (e.key === 'Backspace') paginate(-1);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [paginate]);

  if (isPdfMode) {
    return (
      <div className="pdf-deck bg-brand-light text-brand-dark font-sans rtl">
        {SLIDES.map((slideId, index) => (
          <section key={`${slideId}-${index}`} className="pdf-page" data-pdf-slide={slideId}>
            <div className="pdf-slide-shell">
              <div className="pdf-scale">{renderSlide(index)}</div>
            </div>
          </section>
        ))}
      </div>
    );
  }

  return (
    <div className="h-screen w-screen bg-brand-light text-brand-dark overflow-hidden selection:bg-brand-orange selection:text-white font-sans flex flex-col rtl">
      <div className="fixed inset-0 grid-background opacity-30 pointer-events-none" />
      <div className="fixed -top-24 -right-24 w-[600px] h-[600px] bg-brand-blue/5 rounded-full blur-[100px] pointer-events-none" />

      <main
        className="relative flex-grow overflow-hidden cursor-pointer"
        onClick={(e) => {
          if (
            (e.target as HTMLElement).closest('button') ||
            (e.target as HTMLElement).closest('a')
          )
            return;
          paginate(1);
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center p-4 md:p-8">
          <div className="w-full h-full max-w-7xl flex items-center justify-center">
            {renderSlide(currentSlide)}
          </div>
        </div>
      </main>

      <footer className="fixed bottom-0 left-0 right-0 z-50 p-12 flex justify-between items-end pointer-events-none">
        <div className="flex gap-4 pointer-events-auto">
          <button
            onClick={() => paginate(-1)}
            disabled={currentSlide === 0}
            className="w-14 h-14 rounded-2xl bg-white shadow-xl flex items-center justify-center opacity-30 hover:opacity-100 hover:bg-slate-50 disabled:opacity-30 border border-slate-100"
          >
            <ArrowRight size={24} className="text-brand-blue" />
          </button>
          <button
            onClick={() => paginate(1)}
            disabled={currentSlide === SLIDES.length - 1}
            className="w-14 h-14 rounded-2xl bg-brand-blue shadow-xl shadow-brand-blue/20 flex items-center justify-center opacity-30 hover:opacity-100 disabled:opacity-30 border border-brand-blue"
          >
            <ArrowLeft size={24} className="text-white" />
          </button>
        </div>
        <div className="flex flex-col items-end gap-2 pointer-events-auto">
          <span className="text-[10px] font-black tracking-widest text-slate-300 uppercase">
            Slide {currentSlide + 1} / {SLIDES.length}
          </span>
        </div>
      </footer>
    </div>
  );
}

function renderSlide(index: number) {
  switch (SLIDES[index]) {
    case 'hero':
      return <SlideHero />;
    case 'kpis':
      return <SlideKpis />;
    case 'time':
      return <SlideTime />;
    case 'days':
      return <SlideDays />;
    case 'offer':
      return <SlideOffer />;
    case 'singles':
      return <SlideSingles />;
    case 'winners':
      return <SlideWinners />;
    case 'newItems':
      return <SlideNewItems />;
    case 'decliners':
      return <SlideDecliners />;
    case 'actions':
      return <SlideActions />;
    case 'conclusion':
      return <SlideConclusion />;
    case 'thanks':
      return <SlideThanks />;
    default:
      return null;
  }
}

function SlideHeader({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="shrink-0 text-right border-b-2 border-slate-100 pb-2 lg:pb-4 mb-3 lg:mb-6">
      <h2 className="text-xl md:text-2xl lg:text-[2.5rem] font-black text-brand-blue leading-tight">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-1 text-sm md:text-base lg:text-xl font-bold text-slate-500">{subtitle}</p>
      ) : null}
      <div className="mt-1.5 lg:mt-2 h-1 w-16 lg:w-24 bg-amber-400 rounded-full mr-0 ml-auto" />
    </div>
  );
}

function DeltaBadge({ delta, good }: { delta: string; good: boolean }) {
  const up = delta.startsWith('+') || delta === 'جديد';
  if (!up && !delta.startsWith('-')) {
    return (
      <span
        className={`inline-flex items-center gap-1 px-2 lg:px-2.5 py-0.5 lg:py-1 rounded-full text-[10px] lg:text-sm font-black shrink-0 ${
          good ? 'bg-emerald-100 text-emerald-700' : 'bg-rose-100 text-rose-700'
        }`}
      >
        {delta}
      </span>
    );
  }
  return (
    <span
      className={`inline-flex items-center gap-1 px-2 lg:px-2.5 py-0.5 lg:py-1 rounded-full text-[10px] lg:text-sm font-black shrink-0 ${
        good ? 'bg-emerald-100 text-emerald-700' : 'bg-rose-100 text-rose-700'
      }`}
    >
      {delta === 'جديد' ? (
        <Sparkles size={12} strokeWidth={2.5} />
      ) : up ? (
        <ArrowUpRight size={12} strokeWidth={3} />
      ) : (
        <ArrowDownRight size={12} strokeWidth={3} />
      )}
      {delta}
    </span>
  );
}

function Takeaway({
  text,
  tone = 'emerald',
}: {
  text: string;
  tone?: 'emerald' | 'amber' | 'rose' | 'blue';
}) {
  const styles = {
    emerald: {
      box: 'bg-emerald-50 border-emerald-200',
      text: 'text-emerald-800',
      icon: <CheckCircle2 size={20} className="text-emerald-500 shrink-0 mt-0.5" strokeWidth={2.25} />,
    },
    amber: {
      box: 'bg-amber-50 border-amber-200',
      text: 'text-amber-800',
      icon: <AlertTriangle size={20} className="text-amber-500 shrink-0 mt-0.5" strokeWidth={2.25} />,
    },
    rose: {
      box: 'bg-rose-50 border-rose-200',
      text: 'text-rose-800',
      icon: <AlertTriangle size={20} className="text-rose-500 shrink-0 mt-0.5" strokeWidth={2.25} />,
    },
    blue: {
      box: 'bg-brand-blue/5 border-brand-blue/10',
      text: 'text-brand-blue',
      icon: <Sparkles size={20} className="text-brand-blue shrink-0 mt-0.5" strokeWidth={2.25} />,
    },
  }[tone];

  return (
    <div
      className={`mt-3 lg:mt-5 flex items-start gap-3 lg:gap-4 p-3 lg:p-5 rounded-xl border-2 text-right ${styles.box}`}
    >
      {styles.icon}
      <p className={`text-[11px] lg:text-base font-bold leading-relaxed ${styles.text}`}>{text}</p>
    </div>
  );
}

/* ---------------------------------- Hero ---------------------------------- */

const SlideHero = () => {
  const { brand, subtitle, badges, consultant, highlights } = CONTENT.hero;

  return (
    <div className="presentation-slide hero-cover flex items-center justify-center relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035] select-none flex items-center justify-center"
        aria-hidden
      >
        <TrendingUp
          className="text-brand-blue"
          style={{ width: '26rem', height: '26rem' }}
          strokeWidth={1}
        />
      </div>

      <div className="relative w-full max-w-4xl mx-auto">
        <div className="absolute -inset-px rounded-[2rem] lg:rounded-[2.75rem] bg-gradient-to-br from-amber-200/60 via-white to-brand-blue/20" />
        <div className="relative bg-white/90 backdrop-blur-sm rounded-[2rem] lg:rounded-[2.75rem] shadow-[0_24px_80px_-20px_rgba(52,74,146,0.18)] border border-white px-10 py-12 lg:px-16 lg:py-16 text-center">
          <div className="flex items-center justify-center gap-3 mb-8">
            <span className="px-4 py-1.5 rounded-full bg-slate-100 text-slate-500 text-xs lg:text-sm font-black">
              {badges[0]}
            </span>
            <ArrowLeft size={18} className="text-amber-500" strokeWidth={3} />
            <span className="px-4 py-1.5 rounded-full bg-brand-blue text-white text-xs lg:text-sm font-black shadow-lg shadow-brand-blue/25">
              {badges[1]}
            </span>
          </div>

          <p className="text-sm lg:text-base font-black tracking-widest text-amber-500 uppercase mb-3">
            Bakery Box
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-brand-blue tracking-tight leading-tight mb-5">
            {brand}
          </h1>

          <p className="text-lg md:text-xl lg:text-2xl font-bold text-brand-blue/70 leading-relaxed max-w-2xl mx-auto">
            {subtitle}
          </p>

          <div className="mt-8 lg:mt-10 grid grid-cols-3 gap-3 lg:gap-4 max-w-xl mx-auto">
            {highlights.map((h) => (
              <div
                key={h.label}
                className="p-3 lg:p-4 rounded-2xl bg-emerald-50 border border-emerald-200"
              >
                <p className="text-xl lg:text-3xl font-black text-emerald-600 leading-none mb-1.5">
                  {h.value}
                </p>
                <p className="text-[11px] lg:text-sm font-bold text-emerald-800">{h.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 lg:mt-10 pt-6 lg:pt-8 border-t border-slate-100/90">
            <p className="text-base lg:text-lg font-semibold text-slate-600 tracking-wide">
              {consultant}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ---------------------------------- KPIs ---------------------------------- */

const KPI_ICONS = [Store, Receipt, CalendarDays, BadgePercent, Scale, ShoppingBasket];

const SlideKpis = () => {
  const { title, subtitle, cards } = CONTENT.kpis;

  return (
    <div className="presentation-slide flex flex-col">
      <SlideHeader title={title} subtitle={subtitle} />
      <div className="flex-1 grid grid-cols-2 md:grid-cols-3 gap-3 lg:gap-5 content-center min-h-0">
        {cards.map((card, i) => {
          const Icon = KPI_ICONS[i] ?? TrendingUp;
          return (
            <div
              key={card.label}
              className={`flex flex-col p-4 lg:p-6 rounded-2xl border-2 shadow-sm text-right ${
                card.good ? 'bg-white border-slate-100' : 'bg-rose-50/60 border-rose-200'
              }`}
            >
              <div className="flex items-center justify-between mb-3 lg:mb-4">
                <div
                  className={`w-10 h-10 lg:w-12 lg:h-12 rounded-xl flex items-center justify-center ${
                    card.good ? 'bg-brand-blue/10 text-brand-blue' : 'bg-rose-100 text-rose-600'
                  }`}
                >
                  <Icon size={20} strokeWidth={2.25} />
                </div>
                <DeltaBadge delta={card.delta} good={card.good} />
              </div>
              <p className="text-xs lg:text-sm font-bold text-slate-500 mb-1.5">{card.label}</p>
              <p className="text-xl lg:text-3xl font-black text-brand-blue leading-none">
                {card.current}
                {card.unit ? (
                  <span className="text-xs lg:text-sm font-bold text-slate-400 mr-1.5">
                    {card.unit}
                  </span>
                ) : null}
              </p>
              <p className="mt-1.5 text-[11px] lg:text-xs font-bold text-slate-400">
                يونيو: {card.prev} {card.unit}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

/* ----------------------------- Time (slots + hours) ----------------------- */

const SlideTime = () => {
  const { title, subtitle, max, slots, hoursLabel, hours, takeaway } = CONTENT.time;

  return (
    <div className="presentation-slide flex flex-col">
      <SlideHeader title={title} subtitle={subtitle} />
      <div className="flex-1 flex flex-col justify-center min-h-0 gap-3 lg:gap-4">
        <div className="bg-white rounded-2xl border-2 border-slate-100 shadow-sm px-3 lg:px-6 py-1.5 lg:py-2.5">
          <div className="flex items-center justify-between py-1.5 lg:py-2 border-b border-slate-100">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1.5 text-[10px] lg:text-xs font-bold text-slate-400">
                <span className="w-4 h-1.5 lg:h-2 rounded-full bg-slate-300" /> يونيو
              </span>
              <span className="flex items-center gap-1.5 text-[10px] lg:text-xs font-bold text-slate-500">
                <span className="w-4 h-1.5 lg:h-2 rounded-full bg-brand-blue" /> يوليو
              </span>
            </div>
            <span className="text-[10px] lg:text-xs font-black text-slate-400">
              الإيراد بالليرة (TL)
            </span>
          </div>
          {slots.map((slot, i) => (
            <div
              key={slot.name}
              className={`flex items-center gap-3 lg:gap-5 py-2 lg:py-3.5 text-right ${
                i < slots.length - 1 ? 'border-b border-slate-100' : ''
              } ${slot.highlight ? 'bg-amber-50/80 -mx-3 lg:-mx-6 px-3 lg:px-6 rounded-b-2xl' : ''}`}
            >
              <div className="w-20 lg:w-28 shrink-0">
                <div className="flex items-center gap-1.5">
                  {slot.highlight ? (
                    <Moon size={14} className="text-amber-500" strokeWidth={2.5} />
                  ) : null}
                  <span className="text-xs lg:text-base font-black text-brand-blue">
                    {slot.name}
                  </span>
                </div>
                <p className="text-[9px] lg:text-[11px] font-bold text-slate-400">{slot.range}</p>
              </div>
              <div className="flex-1 flex flex-col gap-1 lg:gap-1.5 min-w-0">
                <div className="h-1.5 lg:h-2.5 rounded-full bg-slate-100 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-slate-300"
                    style={{ width: `${(slot.prev / max) * 100}%` }}
                  />
                </div>
                <div className="h-2 lg:h-3 rounded-full bg-slate-100 overflow-hidden">
                  <div
                    className={`h-full rounded-full ${
                      slot.highlight
                        ? 'bg-gradient-to-l from-amber-400 to-amber-500'
                        : 'bg-brand-blue'
                    }`}
                    style={{ width: `${(slot.current / max) * 100}%` }}
                  />
                </div>
              </div>
              <div className="w-16 lg:w-24 shrink-0 flex flex-col items-start leading-tight">
                <span className="text-[9px] lg:text-xs font-bold text-slate-400">
                  {fmt(slot.prev)}
                </span>
                <span className="text-[11px] lg:text-base font-black text-brand-blue">
                  {fmt(slot.current)}
                </span>
              </div>
              <div className="w-16 lg:w-24 shrink-0 flex justify-start">
                <span
                  className={`px-2 lg:px-2.5 py-0.5 lg:py-1 rounded-full text-[10px] lg:text-sm font-black ${
                    slot.highlight
                      ? 'bg-amber-400 text-brand-blue shadow-sm'
                      : 'bg-emerald-100 text-emerald-700'
                  }`}
                >
                  {slot.delta}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-2 lg:gap-3 flex-wrap">
          <span className="text-[10px] lg:text-sm font-black text-slate-400 ml-1">
            {hoursLabel}:
          </span>
          {hours.map((h) => (
            <span
              key={h.hour}
              className={`flex items-center gap-1.5 px-2.5 lg:px-3.5 py-1 lg:py-1.5 rounded-full text-[10px] lg:text-sm font-black ${
                h.night
                  ? 'bg-amber-100 text-amber-700 border border-amber-300'
                  : 'bg-white text-brand-blue border border-slate-200'
              }`}
            >
              {h.night ? (
                <Moon size={12} strokeWidth={2.5} />
              ) : (
                <Clock size={12} strokeWidth={2.5} />
              )}
              {h.hour}
              <span className={h.night ? 'text-amber-500' : 'text-slate-400'}>{h.value}</span>
            </span>
          ))}
        </div>
      </div>
      <Takeaway text={takeaway} tone="blue" />
    </div>
  );
};

/* ---------------------------------- Days ---------------------------------- */

const SlideDays = () => {
  const { title, subtitle, max, items, takeaway } = CONTENT.days;

  return (
    <div className="presentation-slide flex flex-col">
      <SlideHeader title={title} subtitle={subtitle} />
      <div className="flex-1 flex flex-col justify-center min-h-0 gap-2 lg:gap-3">
        <div className="flex items-center gap-4 justify-end">
          <span className="flex items-center gap-1.5 text-[9px] lg:text-xs font-bold text-slate-400">
            <span className="w-4 h-1.5 rounded-full bg-slate-300" /> يونيو
          </span>
          <span className="flex items-center gap-1.5 text-[9px] lg:text-xs font-bold text-slate-500">
            <span className="w-4 h-1.5 rounded-full bg-emerald-500" /> يوليو (نموّ)
          </span>
          <span className="flex items-center gap-1.5 text-[9px] lg:text-xs font-bold text-slate-500">
            <span className="w-4 h-1.5 rounded-full bg-rose-400" /> يوليو (تراجع)
          </span>
        </div>
        <div className="bg-white rounded-2xl border-2 border-slate-100 shadow-sm px-3 lg:px-5 py-1 lg:py-1.5">
          {items.map((day, i) => (
            <div
              key={day.name}
              className={`flex items-center gap-3 lg:gap-4 py-1.5 lg:py-2 text-right ${
                i < items.length - 1 ? 'border-b border-slate-100' : ''
              }`}
            >
              <span className="w-14 lg:w-20 text-[11px] lg:text-sm font-black text-brand-blue shrink-0">
                {day.name}
              </span>
              <div className="flex-1 flex flex-col gap-0.5 lg:gap-1 min-w-0">
                <div className="h-1 lg:h-1.5 rounded-full bg-slate-100 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-slate-300"
                    style={{ width: `${(day.prev / max) * 100}%` }}
                  />
                </div>
                <div className="h-1.5 lg:h-2 rounded-full bg-slate-100 overflow-hidden">
                  <div
                    className={`h-full rounded-full ${day.good ? 'bg-emerald-500' : 'bg-rose-400'}`}
                    style={{ width: `${(day.current / max) * 100}%` }}
                  />
                </div>
              </div>
              <div className="w-20 lg:w-28 flex items-baseline gap-1.5 lg:gap-2 shrink-0 justify-start">
                <span className="text-[11px] lg:text-sm font-black text-brand-blue">
                  {fmt(day.current)}
                </span>
                <span className="text-[8px] lg:text-[10px] font-bold text-slate-400">
                  {fmt(day.prev)}
                </span>
              </div>
              <div className="w-14 lg:w-20 flex justify-start shrink-0">
                <DeltaBadge delta={day.delta} good={day.good} />
              </div>
            </div>
          ))}
        </div>
      </div>
      <Takeaway text={takeaway} tone="emerald" />
    </div>
  );
};

/* ---------------------------------- Offer --------------------------------- */

const SlideOffer = () => {
  const { title, subtitle, compare, tickets, takeaway } = CONTENT.offer;

  return (
    <div className="presentation-slide flex flex-col">
      <SlideHeader title={title} subtitle={subtitle} />
      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 content-center min-h-0">
        <div className="flex flex-col gap-3 lg:gap-4 justify-center">
          <p className="text-[10px] lg:text-xs font-black text-slate-400 uppercase tracking-wide text-right">
            الإيراد اليومي — قبل الإطلاق وبعده
          </p>
          {compare.map((c, i) => (
            <div
              key={c.period}
              className={`p-4 lg:p-6 rounded-2xl border-2 shadow-sm text-right ${
                i === 1 ? 'bg-brand-blue border-brand-blue text-white' : 'bg-white border-slate-100'
              }`}
            >
              <div className="flex items-center gap-2.5 mb-2">
                <Trophy
                  size={18}
                  className={i === 1 ? 'text-amber-300' : 'text-slate-300'}
                  strokeWidth={2.5}
                />
                <p
                  className={`text-sm lg:text-base font-black ${
                    i === 1 ? 'text-amber-300' : 'text-slate-500'
                  }`}
                >
                  {c.period}
                </p>
              </div>
              <div className="flex items-center justify-between gap-3">
                <p
                  className={`text-2xl lg:text-4xl font-black leading-none ${
                    i === 1 ? 'text-white' : 'text-brand-blue'
                  }`}
                >
                  {c.revenue}
                </p>
                {c.delta ? (
                  <span className="px-2.5 lg:px-3 py-1 lg:py-1.5 rounded-full bg-amber-400 text-brand-blue text-xs lg:text-base font-black shadow-sm shrink-0">
                    {c.delta}
                  </span>
                ) : null}
              </div>
              {c.details.length > 0 ? (
                <div className="flex gap-4 mt-2">
                  {c.details.map((d) => (
                    <span
                      key={d}
                      className={`text-xs lg:text-sm font-bold ${
                        i === 1 ? 'text-white/80' : 'text-slate-500'
                      }`}
                    >
                      {d}
                    </span>
                  ))}
                </div>
              ) : null}
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-3 lg:gap-4 justify-center">
          <p className="text-[10px] lg:text-xs font-black text-slate-400 uppercase tracking-wide text-right">
            أثر العرض على السلة
          </p>
          <div className="p-4 lg:p-6 rounded-2xl bg-emerald-50 border-2 border-emerald-300 text-right">
            <p className="text-xs lg:text-sm font-bold text-emerald-700 mb-1.5">
              {tickets.offer.label}
            </p>
            <p className="text-3xl lg:text-5xl font-black text-emerald-600 leading-none">
              {tickets.offer.value}
            </p>
          </div>
          <div className="p-4 lg:p-6 rounded-2xl bg-white border-2 border-slate-100 text-right">
            <p className="text-xs lg:text-sm font-bold text-slate-500 mb-1.5">
              {tickets.normal.label}
            </p>
            <p className="text-3xl lg:text-5xl font-black text-slate-400 leading-none">
              {tickets.normal.value}
            </p>
          </div>
        </div>
      </div>
      <Takeaway text={takeaway} tone="emerald" />
    </div>
  );
};

/* --------------------------------- Singles -------------------------------- */

const SlideSingles = () => {
  const { title, subtitle, stats, topLabel, topItems, takeaway } = CONTENT.singles;
  const maxCount = topItems[0].count;

  return (
    <div className="presentation-slide flex flex-col">
      <SlideHeader title={title} subtitle={subtitle} />
      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 content-center min-h-0">
        <div className="flex flex-col gap-3 lg:gap-4 justify-center">
          {stats.map((s) => (
            <div
              key={s.label}
              className="flex items-center justify-between p-4 lg:p-6 bg-white rounded-2xl border-2 border-slate-100 shadow-sm text-right"
            >
              <div>
                <p className="text-xs lg:text-sm font-bold text-slate-500 mb-1.5">{s.label}</p>
                <p className="text-lg lg:text-2xl font-black text-brand-blue leading-none">
                  {s.current}
                  <span className="text-xs lg:text-sm font-bold text-slate-400 mr-2">
                    (يونيو: {s.prev})
                  </span>
                </p>
              </div>
              <DeltaBadge delta={s.delta} good={true} />
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-2.5 lg:gap-3 justify-center">
          <p className="text-[10px] lg:text-xs font-black text-slate-400 uppercase tracking-wide text-right">
            {topLabel}
          </p>
          {topItems.map((item) => (
            <div
              key={item.name}
              className="flex items-center gap-3 p-3 lg:p-4 bg-white rounded-xl border border-slate-100 shadow-sm text-right"
            >
              <span className="flex-1 text-xs lg:text-sm font-black text-brand-blue">
                {item.name}
              </span>
              <div className="w-28 lg:w-36 h-2.5 rounded-full bg-slate-100 overflow-hidden shrink-0">
                <div
                  className="h-full rounded-full bg-gradient-to-l from-brand-orange to-brand-blue"
                  style={{ width: `${(item.count / maxCount) * 100}%` }}
                />
              </div>
              <span className="w-9 text-sm lg:text-base font-black text-slate-500 text-left shrink-0">
                {item.count}
              </span>
            </div>
          ))}
        </div>
      </div>
      <Takeaway text={takeaway} tone="amber" />
    </div>
  );
};

/* --------------------------------- Winners -------------------------------- */

const SlideWinners = () => {
  const { title, subtitle, max, items, takeaway } = CONTENT.winners;

  return (
    <div className="presentation-slide flex flex-col">
      <SlideHeader title={title} subtitle={subtitle} />
      <div className="flex-1 flex flex-col gap-2 lg:gap-3 justify-center min-h-0">
        {items.map((item) => (
          <div
            key={item.name}
            className="flex items-center gap-3 lg:gap-4 px-3 py-2 lg:p-4 bg-white rounded-xl border border-slate-100 shadow-sm text-right"
          >
            <span className="w-48 lg:w-80 text-[11px] lg:text-base font-black text-brand-blue leading-tight shrink-0">
              {item.name}
            </span>
            <div className="flex-1 h-2.5 lg:h-4 rounded-full bg-slate-100 overflow-hidden">
              <div
                className="h-full rounded-full bg-gradient-to-l from-emerald-400 to-emerald-600"
                style={{ width: `${(item.current / max) * 100}%` }}
              />
            </div>
            <div className="w-24 lg:w-32 flex flex-col items-start shrink-0 leading-tight">
              <span className="text-[9px] lg:text-xs font-bold text-slate-400">
                يونيو: {item.prev}
              </span>
              <span className="text-[11px] lg:text-base font-black text-brand-blue">
                {fmt(item.current)} TL
              </span>
            </div>
            <div className="w-20 lg:w-28 flex justify-start shrink-0">
              <DeltaBadge delta={item.delta} good={true} />
            </div>
          </div>
        ))}
      </div>
      <Takeaway text={takeaway} tone="blue" />
    </div>
  );
};

/* -------------------------------- New items ------------------------------- */

const SlideNewItems = () => {
  const { title, subtitle, impact, items, more, takeaway } = CONTENT.newItems;

  return (
    <div className="presentation-slide flex flex-col">
      <SlideHeader title={title} subtitle={subtitle} />
      <div className="flex-1 flex flex-col gap-4 lg:gap-5 justify-center min-h-0">
        <div className="flex items-center gap-4 lg:gap-5 p-4 lg:p-6 bg-brand-blue text-white rounded-2xl shadow-lg shadow-brand-blue/20 text-right">
          <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-xl bg-amber-400/20 text-amber-300 flex items-center justify-center shrink-0">
            <Rocket size={26} strokeWidth={2.25} />
          </div>
          <div className="min-w-0">
            <p className="text-xs lg:text-sm font-bold text-white/80 mb-0.5">{impact.label}</p>
            <p className="text-xl lg:text-3xl font-black leading-tight">
              {impact.value}
              <span className="text-sm lg:text-lg font-black text-amber-300 mr-3">
                {impact.share}
              </span>
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 lg:gap-4">
          {items.map((item) => (
            <div
              key={item.name}
              className="flex flex-col p-3.5 lg:p-5 bg-white rounded-2xl border-2 border-slate-100 shadow-sm text-right"
            >
              <span className="self-start px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700 text-[9px] lg:text-[11px] font-black mb-2">
                جديد
              </span>
              <p className="flex-1 text-xs lg:text-base font-black text-brand-blue leading-snug mb-1.5">
                {item.name}
              </p>
              <p className="text-base lg:text-xl font-black text-emerald-600">
                {item.value}
                <span className="text-[10px] lg:text-xs font-bold text-slate-400 mr-1">TL</span>
              </p>
            </div>
          ))}
        </div>

        {more ? (
          <p className="text-[10px] lg:text-sm font-bold text-slate-400 text-right">{more}</p>
        ) : null}
      </div>
      <Takeaway text={takeaway} tone="amber" />
    </div>
  );
};

/* -------------------------------- Decliners ------------------------------- */

const SlideDecliners = () => {
  const { title, subtitle, items, readings } = CONTENT.decliners;

  return (
    <div className="presentation-slide flex flex-col">
      <SlideHeader title={title} subtitle={subtitle} />
      <div className="flex-1 grid grid-cols-1 md:grid-cols-5 gap-4 lg:gap-6 content-center min-h-0">
        <div className="md:col-span-3 flex flex-col gap-2 lg:gap-3 justify-center">
          {items.map((item) => (
            <div
              key={item.name}
              className="flex items-center gap-3 px-3 py-2 lg:p-4 bg-white rounded-xl border border-slate-100 shadow-sm text-right"
            >
              <span className="flex-1 text-[11px] lg:text-base font-black text-brand-blue leading-tight">
                {item.name}
              </span>
              <span className="w-16 lg:w-24 text-[10px] lg:text-sm font-bold text-slate-400 text-left shrink-0">
                {item.prev}
              </span>
              <ArrowLeft size={12} className="text-slate-300 shrink-0" strokeWidth={3} />
              <span className="w-16 lg:w-24 text-[11px] lg:text-base font-black text-slate-600 text-left shrink-0">
                {item.current}
              </span>
              <div className="w-18 lg:w-24 flex justify-start shrink-0">
                <DeltaBadge delta={item.delta} good={false} />
              </div>
            </div>
          ))}
        </div>

        <div className="md:col-span-2 flex flex-col gap-3 lg:gap-4 justify-center">
          <p className="text-[10px] lg:text-xs font-black text-slate-400 uppercase tracking-wide text-right">
            القراءة والخطوة
          </p>
          {readings.map((r) => (
            <div
              key={r.title}
              className={`p-4 lg:p-6 rounded-2xl border-2 text-right ${
                r.positive
                  ? 'bg-emerald-50 border-emerald-200'
                  : 'bg-brand-blue/5 border-brand-blue/15'
              }`}
            >
              <div className="flex items-center gap-2 lg:gap-2.5 mb-1.5 lg:mb-2">
                {r.positive ? (
                  <CheckCircle2 size={17} className="text-emerald-500" strokeWidth={2.5} />
                ) : (
                  <Target size={17} className="text-brand-blue" strokeWidth={2.5} />
                )}
                <p
                  className={`text-xs lg:text-lg font-black ${
                    r.positive ? 'text-emerald-800' : 'text-brand-blue'
                  }`}
                >
                  {r.title}
                </p>
              </div>
              <p
                className={`text-[11px] lg:text-sm font-bold leading-relaxed ${
                  r.positive ? 'text-emerald-700' : 'text-brand-blue/80'
                }`}
              >
                {r.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

/* --------------------------------- Actions -------------------------------- */

const ACTION_ICONS = [CalendarDays, Receipt, Coffee, Store, BadgePercent];

const SlideActions = () => {
  const { title, subtitle, items } = CONTENT.actions;

  return (
    <div className="presentation-slide flex flex-col">
      <SlideHeader title={title} subtitle={subtitle} />
      <div className="flex-1 flex flex-col gap-3 lg:gap-4 justify-center min-h-0">
        {items.map((item, i) => {
          const Icon = ACTION_ICONS[i] ?? Target;
          return (
            <div
              key={item.title}
              className="flex items-center gap-4 lg:gap-5 p-3.5 lg:p-5 bg-white rounded-2xl border-2 border-slate-100 shadow-sm text-right"
            >
              <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-xl bg-brand-blue text-white flex items-center justify-center shrink-0 font-black text-base lg:text-lg">
                {i + 1}
              </div>
              <div className="w-11 h-11 lg:w-12 lg:h-12 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center shrink-0">
                <Icon size={22} strokeWidth={2.25} />
              </div>
              <div className="min-w-0">
                <p className="text-sm lg:text-lg font-black text-brand-blue mb-0.5">{item.title}</p>
                <p className="text-[11px] lg:text-sm font-semibold text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

/* ------------------------------- Conclusion ------------------------------- */

const SlideConclusion = () => {
  const { title, subtitle, stats, achieved, next } = CONTENT.conclusion;

  return (
    <div className="presentation-slide flex flex-col">
      <SlideHeader title={title} subtitle={subtitle} />
      <div className="flex-1 flex flex-col gap-4 lg:gap-6 justify-center min-h-0">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 lg:gap-5">
          {stats.map((s) => (
            <div
              key={s.label}
              className="flex flex-col items-center p-4 lg:p-7 bg-white rounded-2xl border-2 border-slate-100 shadow-sm text-center"
            >
              <p className="text-2xl lg:text-4xl font-black text-emerald-600 leading-none mb-2">
                {s.value}
              </p>
              <p className="text-xs lg:text-sm font-bold text-slate-500">{s.label}</p>
            </div>
          ))}
        </div>

        <div className="flex items-start gap-4 p-4 lg:p-6 rounded-2xl bg-emerald-50 border-2 border-emerald-200 text-right">
          <CheckCircle2 size={24} className="text-emerald-500 shrink-0 mt-0.5" strokeWidth={2.25} />
          <div>
            <p className="text-xs lg:text-sm font-black text-emerald-600 mb-1">ما تحقق</p>
            <p className="text-sm lg:text-lg font-bold text-emerald-800 leading-relaxed">
              {achieved}
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4 p-4 lg:p-6 bg-brand-blue text-white rounded-2xl shadow-xl shadow-brand-blue/25 text-right">
          <div className="w-11 h-11 lg:w-12 lg:h-12 rounded-xl bg-white/15 flex items-center justify-center shrink-0 mt-0.5">
            <Target size={24} strokeWidth={2.25} />
          </div>
          <div>
            <p className="text-xs lg:text-sm font-black text-amber-300 mb-1">الطبقة التالية</p>
            <p className="text-sm lg:text-xl font-black leading-relaxed">{next}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

/* --------------------------------- Thanks --------------------------------- */

const SlideThanks = () => {
  const content = CONTENT.thanks;

  return (
    <div className="presentation-slide flex flex-col items-center justify-center text-center space-y-10 lg:space-y-16 py-8 lg:py-12">
      <div className="space-y-4 lg:space-y-8">
        <h2 className="text-6xl md:text-8xl lg:text-9xl font-black text-brand-blue tracking-tighter leading-none italic">
          {content.title}
        </h2>
        <p className="text-lg md:text-2xl lg:text-3xl font-bold text-brand-orange italic max-w-4xl mx-auto leading-relaxed px-4">
          {content.subtitle}
        </p>
      </div>

      <div className="flex flex-col items-center gap-4 pt-4 lg:pt-8">
        <div className="h-px w-16 bg-brand-orange/30" />
        <span className="thanks-contact-name text-xl md:text-2xl lg:text-3xl font-semibold text-brand-blue/80 italic">
          {content.contact}
        </span>
        <div className="h-px w-16 bg-brand-orange/30" />
      </div>
    </div>
  );
};
