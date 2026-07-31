import { useState, useEffect, useCallback } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  ArrowDownRight,
  TrendingUp,
  Sparkles,
  CalendarDays,
  Trophy,
  Receipt,
  CupSoda,
  AlertTriangle,
  CheckCircle2,
  Target,
  Store,
  ShoppingBasket,
  BadgePercent,
  Scale,
  Users,
  Building2,
  Croissant,
  Layers,
  Repeat,
  Sun,
} from 'lucide-react';
import { CONTENT } from './constants';

const SLIDES = [
  'hero',
  'kpis',
  'trend',
  'staff',
  'offer',
  'campaign',
  'b2b',
  'top',
  'mechanics',
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
    case 'trend':
      return <SlideTrend />;
    case 'staff':
      return <SlideStaff />;
    case 'offer':
      return <SlideOffer />;
    case 'campaign':
      return <SlideCampaign />;
    case 'b2b':
      return <SlideB2B />;
    case 'top':
      return <SlideTop />;
    case 'mechanics':
      return <SlideMechanics />;
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
  const up = delta.startsWith('+');
  const down = delta.startsWith('-');
  const neutral = !up && !down && delta !== 'جديد';

  if (neutral) {
    return (
      <span className="inline-flex items-center gap-1 px-2 lg:px-2.5 py-0.5 lg:py-1 rounded-full text-[10px] lg:text-sm font-black shrink-0 bg-slate-100 text-slate-500">
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
            Bakery Box — Kayaşehir
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

const KPI_ICONS = [Store, Receipt, CalendarDays, ShoppingBasket, Scale, BadgePercent];

const SlideKpis = () => {
  const { title, subtitle, cards, caution } = CONTENT.kpis;

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
                يونيو: {card.prev} {card.prev !== '—' ? card.unit : ''}
              </p>
            </div>
          );
        })}
      </div>
      <Takeaway text={caution} tone="amber" />
    </div>
  );
};

/* -------------------------- Trend (pace + weekdays) ------------------------ */

const SlideTrend = () => {
  const { title, subtitle, pace, paceMax, extremes, daysLabel, days, daysMax, takeaway } =
    CONTENT.trend;

  return (
    <div className="presentation-slide flex flex-col">
      <SlideHeader title={title} subtitle={subtitle} />
      <div className="flex-1 flex flex-col justify-center min-h-0 gap-3 lg:gap-4">
        <div className="bg-white rounded-2xl border-2 border-slate-100 shadow-sm px-4 lg:px-6 py-3 lg:py-4">
          {pace.map((p, i) => (
            <div
              key={p.name}
              className={`flex items-center gap-3 lg:gap-5 py-2.5 lg:py-3.5 text-right ${
                i < pace.length - 1 ? 'border-b border-slate-100' : ''
              }`}
            >
              <div className="w-28 lg:w-40 shrink-0">
                <span className="text-xs lg:text-base font-black text-brand-blue block">
                  {p.name}
                </span>
                <p className="text-[9px] lg:text-[11px] font-bold text-slate-400">{p.range}</p>
              </div>
              <div className="flex-1 h-3 lg:h-4 rounded-full bg-slate-100 overflow-hidden">
                <div
                  className={`h-full rounded-full ${
                    p.delta ? 'bg-gradient-to-l from-emerald-400 to-emerald-600' : 'bg-slate-300'
                  }`}
                  style={{ width: `${(p.value / paceMax) * 100}%` }}
                />
              </div>
              <span className="w-28 lg:w-36 shrink-0 text-[11px] lg:text-base font-black text-brand-blue">
                {p.label}
              </span>
              <div className="w-16 lg:w-24 shrink-0 flex justify-start">
                {p.delta ? <DeltaBadge delta={p.delta} good={true} /> : null}
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-3 gap-3 lg:gap-4">
          {extremes.map((e) => (
            <div
              key={e.label}
              className="p-3 lg:p-5 bg-white rounded-2xl border-2 border-slate-100 shadow-sm text-right"
            >
              <p className="text-[10px] lg:text-xs font-bold text-slate-400 mb-1">{e.label}</p>
              <p className="text-base lg:text-2xl font-black text-brand-blue leading-none mb-1">
                {e.value}
              </p>
              <p className="text-[9px] lg:text-xs font-bold text-slate-400">{e.note}</p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl border-2 border-slate-100 shadow-sm px-4 lg:px-6 py-2.5 lg:py-3.5">
          <p className="text-[10px] lg:text-xs font-black text-slate-400 uppercase tracking-wide text-right mb-2">
            {daysLabel}
          </p>
          {days.map((d) => (
            <div key={d.name} className="flex items-center gap-3 lg:gap-4 py-1.5 lg:py-2 text-right">
              <span className="w-28 lg:w-36 shrink-0 text-[11px] lg:text-sm font-black text-brand-blue flex items-center gap-1.5">
                {!d.good ? <Sun size={13} className="text-rose-400" strokeWidth={2.5} /> : null}
                {d.name}
              </span>
              <div className="flex-1 h-2 lg:h-3 rounded-full bg-slate-100 overflow-hidden">
                <div
                  className={`h-full rounded-full ${d.good ? 'bg-brand-blue' : 'bg-rose-400'}`}
                  style={{ width: `${(d.value / daysMax) * 100}%` }}
                />
              </div>
              <span
                className={`w-20 lg:w-28 shrink-0 text-[10px] lg:text-sm font-black ${
                  d.good ? 'text-slate-500' : 'text-rose-500'
                }`}
              >
                {d.label}
              </span>
            </div>
          ))}
        </div>
      </div>
      <Takeaway text={takeaway} tone="blue" />
    </div>
  );
};

/* ---------------------------------- Staff --------------------------------- */

const SlideStaff = () => {
  const { title, subtitle, members, takeaway } = CONTENT.staff;

  return (
    <div className="presentation-slide flex flex-col">
      <SlideHeader title={title} subtitle={subtitle} />
      <div className="flex-1 flex flex-col gap-4 lg:gap-6 justify-center min-h-0">
        {members.map((m, i) => (
          <div
            key={m.name}
            className={`p-5 lg:p-8 rounded-2xl border-2 shadow-sm text-right ${
              i === 0 ? 'bg-brand-blue border-brand-blue text-white' : 'bg-white border-slate-100'
            }`}
          >
            <div className="flex items-center justify-between mb-3 lg:mb-4">
              <div className="flex items-center gap-3">
                <div
                  className={`w-11 h-11 lg:w-14 lg:h-14 rounded-xl flex items-center justify-center shrink-0 ${
                    i === 0 ? 'bg-amber-400/20 text-amber-300' : 'bg-brand-blue/10 text-brand-blue'
                  }`}
                >
                  <Users size={24} strokeWidth={2.25} />
                </div>
                <p
                  className={`text-lg lg:text-2xl font-black ${
                    i === 0 ? 'text-white' : 'text-brand-blue'
                  }`}
                >
                  {m.name}
                </p>
              </div>
              <span
                className={`px-3 lg:px-4 py-1 lg:py-1.5 rounded-full text-sm lg:text-lg font-black ${
                  i === 0 ? 'bg-amber-400 text-brand-blue' : 'bg-slate-100 text-slate-500'
                }`}
              >
                {m.share}%
              </span>
            </div>
            <p
              className={`text-2xl lg:text-4xl font-black leading-none mb-3 lg:mb-4 ${
                i === 0 ? 'text-white' : 'text-brand-blue'
              }`}
            >
              {m.value}
              <span
                className={`text-sm lg:text-base font-bold mr-2 ${
                  i === 0 ? 'text-white/70' : 'text-slate-400'
                }`}
              >
                TL
              </span>
            </p>
            <div
              className={`h-2.5 lg:h-3.5 rounded-full overflow-hidden ${
                i === 0 ? 'bg-white/15' : 'bg-slate-100'
              }`}
            >
              <div
                className={`h-full rounded-full ${
                  i === 0 ? 'bg-gradient-to-l from-amber-300 to-amber-500' : 'bg-brand-blue/60'
                }`}
                style={{ width: `${m.share}%` }}
              />
            </div>
          </div>
        ))}
      </div>
      <Takeaway text={takeaway} tone="amber" />
    </div>
  );
};

/* ------------------------ Offer 299 (WC completion) ------------------------ */

const SlideOffer = () => {
  const { title, subtitle, metrics, detail, takeaway } = CONTENT.offer;

  return (
    <div className="presentation-slide flex flex-col">
      <SlideHeader title={title} subtitle={subtitle} />
      <div className="flex-1 flex flex-col gap-4 lg:gap-5 justify-center min-h-0">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 lg:gap-5">
          {metrics.map((m, i) => (
            <div
              key={m.label}
              className={`flex flex-col p-4 lg:p-6 rounded-2xl border-2 shadow-sm text-right ${
                i === 2 ? 'bg-brand-blue border-brand-blue' : 'bg-white border-slate-100'
              }`}
            >
              <div className="flex items-center gap-2 mb-2 lg:mb-3">
                <Croissant
                  size={18}
                  className={i === 2 ? 'text-amber-300' : 'text-amber-500'}
                  strokeWidth={2.25}
                />
                <p
                  className={`text-[11px] lg:text-sm font-bold ${
                    i === 2 ? 'text-white/80' : 'text-slate-500'
                  }`}
                >
                  {m.label}
                </p>
              </div>
              <p
                className={`text-lg lg:text-3xl font-black leading-none ${
                  i === 2 ? 'text-white' : 'text-brand-blue'
                }`}
              >
                {m.value}
              </p>
            </div>
          ))}
        </div>
        <p className="text-[11px] lg:text-sm font-bold text-slate-400 text-right">{detail}</p>
      </div>
      <Takeaway text={takeaway} tone="amber" />
    </div>
  );
};

/* ------------------------- 50% next-day campaign --------------------------- */

const SlideCampaign = () => {
  const { title, subtitle, metrics, logic, takeaway } = CONTENT.campaign;

  return (
    <div className="presentation-slide flex flex-col">
      <SlideHeader title={title} subtitle={subtitle} />
      <div className="flex-1 flex flex-col gap-4 lg:gap-5 justify-center min-h-0">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 lg:gap-5">
          {metrics.map((m, i) => (
            <div
              key={m.label}
              className={`flex flex-col p-4 lg:p-6 rounded-2xl border-2 shadow-sm text-right ${
                i === 2 ? 'bg-rose-50/70 border-rose-200' : 'bg-white border-slate-100'
              }`}
            >
              <div className="flex items-center gap-2 mb-2 lg:mb-3">
                <Repeat
                  size={18}
                  className={i === 2 ? 'text-rose-500' : 'text-brand-blue'}
                  strokeWidth={2.25}
                />
                <p className="text-[11px] lg:text-sm font-bold text-slate-500">{m.label}</p>
              </div>
              <p
                className={`text-lg lg:text-3xl font-black leading-none ${
                  i === 2 ? 'text-rose-600' : 'text-brand-blue'
                }`}
              >
                {m.value}
              </p>
            </div>
          ))}
        </div>

        <div className="flex items-start gap-3 lg:gap-4 p-4 lg:p-5 rounded-2xl bg-brand-blue/5 border-2 border-brand-blue/10 text-right">
          <Scale size={20} className="text-brand-blue shrink-0 mt-0.5" strokeWidth={2.25} />
          <p className="text-[11px] lg:text-base font-bold text-brand-blue leading-relaxed">
            {logic}
          </p>
        </div>
      </div>
      <Takeaway text={takeaway} tone="amber" />
    </div>
  );
};

/* ------------------------------ Ortaköy B2B -------------------------------- */

const SlideB2B = () => {
  const { title, subtitle, facts, recommendation } = CONTENT.b2b;

  return (
    <div className="presentation-slide flex flex-col">
      <SlideHeader title={title} subtitle={subtitle} />
      <div className="flex-1 flex flex-col gap-3 lg:gap-4 justify-center min-h-0">
        {facts.map((f, i) => (
          <div
            key={i}
            className="flex items-start gap-4 lg:gap-5 p-4 lg:p-6 bg-white rounded-2xl border-2 border-slate-100 shadow-sm text-right"
          >
            <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-xl bg-slate-100 text-slate-500 flex items-center justify-center shrink-0">
              <Building2 size={22} strokeWidth={2.25} />
            </div>
            <p className="text-xs lg:text-lg font-bold text-slate-600 leading-relaxed">{f}</p>
          </div>
        ))}

        <div className="flex items-start gap-4 p-4 lg:p-6 bg-brand-blue text-white rounded-2xl shadow-xl shadow-brand-blue/25 text-right">
          <div className="w-11 h-11 lg:w-12 lg:h-12 rounded-xl bg-white/15 flex items-center justify-center shrink-0 mt-0.5">
            <Target size={24} strokeWidth={2.25} />
          </div>
          <div>
            <p className="text-xs lg:text-sm font-black text-amber-300 mb-1">التوصية</p>
            <p className="text-sm lg:text-lg font-black leading-relaxed">{recommendation}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ------------------------------ Top products ------------------------------- */

const SlideTop = () => {
  const { title, subtitle, max, items, takeaway } = CONTENT.top;

  return (
    <div className="presentation-slide flex flex-col">
      <SlideHeader title={title} subtitle={subtitle} />
      <div className="flex-1 flex flex-col gap-1.5 lg:gap-2 justify-center min-h-0">
        {items.map((item) => (
          <div
            key={item.name}
            className={`flex items-center gap-3 lg:gap-4 px-3 py-1.5 lg:px-4 lg:py-2 rounded-xl border shadow-sm text-right ${
              item.rank <= 3
                ? 'bg-amber-50/70 border-amber-200'
                : 'bg-white border-slate-100'
            }`}
          >
            <span
              className={`w-7 h-7 lg:w-9 lg:h-9 rounded-lg flex items-center justify-center shrink-0 font-black text-xs lg:text-base ${
                item.rank <= 3 ? 'bg-amber-400 text-brand-blue' : 'bg-slate-100 text-slate-500'
              }`}
            >
              {item.rank}
            </span>
            <span className="w-44 lg:w-72 text-[11px] lg:text-sm font-black text-brand-blue leading-tight shrink-0">
              {item.name}
            </span>
            <div className="flex-1 h-2 lg:h-3 rounded-full bg-slate-100 overflow-hidden">
              <div
                className="h-full rounded-full bg-gradient-to-l from-brand-orange to-brand-blue"
                style={{ width: `${(item.revenue / max) * 100}%` }}
              />
            </div>
            <span className="w-14 lg:w-20 shrink-0 text-[10px] lg:text-xs font-bold text-slate-400">
              {item.qty} قطعة
            </span>
            <span className="w-20 lg:w-28 shrink-0 text-[11px] lg:text-base font-black text-brand-blue">
              {fmt(item.revenue)} TL
            </span>
          </div>
        ))}
      </div>
      <Takeaway text={takeaway} tone="emerald" />
    </div>
  );
};

/* --------------------------- Discount mechanics ---------------------------- */

const MECHANIC_ICONS = [Croissant, Repeat, Layers];

const SlideMechanics = () => {
  const { title, subtitle, layers, takeaway } = CONTENT.mechanics;

  return (
    <div className="presentation-slide flex flex-col">
      <SlideHeader title={title} subtitle={subtitle} />
      <div className="flex-1 flex flex-col gap-3 lg:gap-4 justify-center min-h-0">
        {layers.map((layer, i) => {
          const Icon = MECHANIC_ICONS[i] ?? BadgePercent;
          return (
            <div
              key={layer.name}
              className="flex items-center gap-4 lg:gap-5 p-4 lg:p-6 bg-white rounded-2xl border-2 border-slate-100 shadow-sm text-right"
            >
              <div className="w-11 h-11 lg:w-14 lg:h-14 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center shrink-0">
                <Icon size={24} strokeWidth={2.25} />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-sm lg:text-lg font-black text-brand-blue mb-0.5">{layer.name}</p>
                <p className="text-[11px] lg:text-sm font-semibold text-slate-500 leading-relaxed">
                  {layer.detail}
                </p>
              </div>
              <p className="text-base lg:text-2xl font-black text-brand-blue shrink-0">
                {layer.value}
              </p>
            </div>
          );
        })}
      </div>
      <Takeaway text={takeaway} tone="blue" />
    </div>
  );
};

/* --------------------------------- Actions -------------------------------- */

const ACTION_ICONS = [Building2, Croissant, BadgePercent, CalendarDays, CupSoda];

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
