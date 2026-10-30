import { ArrowRight, Target } from "@phosphor-icons/react";
import { competitors, executiveTakeaways, report, type CompetitorId } from "../data/research";
import { CompetitorIcon } from "./icons";
import { textColor, wash } from "./primitives";

export function Overview({ onOpenProfile }: { onOpenProfile: (id: CompetitorId) => void }) {
  return (
    <section id="overview" className="pt-10 pb-6 print:pt-0 print:pb-0">
      <p className="text-[13px] font-medium text-muted">
        {report.context} · Quickflows.AI · <time dateTime="2026-10-30">{report.date}</time>
      </p>
      <h1 className="mt-3 max-w-5xl text-[36px] font-semibold leading-[1.15] tracking-tight text-ink sm:text-[40px] print:text-[28px]">
        {report.title}
      </h1>
      <p className="mt-2 text-lg text-body">{report.subtitle}</p>
      <p className="mt-4 inline-flex items-center gap-2 rounded-full border border-accent-line bg-accent-soft px-3 py-1 text-[13px] text-accent-ink">
        <Target className="size-4 shrink-0" aria-hidden />
        {report.objective}
      </p>

      {/* Executive takeaways: one integrated strip */}
      <div className="mt-8 rounded-xl border border-line bg-white">
        <p className="border-b border-line px-5 py-2.5 text-[11px] font-semibold uppercase tracking-wider text-muted">
          Executive takeaways
        </p>
        <ol className="grid divide-y divide-line md:grid-cols-3 md:divide-x md:divide-y-0 print:grid-cols-3 print:divide-x print:divide-y-0">
          {executiveTakeaways.map((t, i) => (
            <li key={t.title} className="px-5 py-4">
              <p className="flex items-baseline gap-2.5">
                <span className="text-xs font-semibold text-accent tabular-nums">{String(i + 1).padStart(2, "0")}</span>
                <span className="text-[15px] font-semibold text-ink">{t.title}</span>
              </p>
              <p className="mt-1.5 pl-7 text-[14.5px] leading-relaxed text-body">{t.body}</p>
            </li>
          ))}
        </ol>
      </div>

      {/* Competitor summary cards */}
      <div className="mt-4 grid gap-4 md:grid-cols-3 print:grid-cols-3">
        {competitors.map((c) => (
          <article key={c.id} className={`flex flex-col rounded-xl border border-line p-5 ${wash[c.id]}`}>
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="text-[17px] font-semibold text-ink">{c.name}</h3>
                <p className="text-xs text-muted">{c.website}</p>
              </div>
              <CompetitorIcon id={c.id} className={`size-6 ${textColor[c.id]}`} />
            </div>
            <p className="mt-3 text-[15px] font-medium leading-snug text-ink">{c.positioning}</p>
            <p className="mt-3 flex-1 text-[13.5px] text-body">
              <span className="text-muted">Strength · </span>
              {c.strength}
            </p>
            <button
              type="button"
              onClick={() => onOpenProfile(c.id)}
              className="mt-4 inline-flex items-center gap-1.5 self-start text-[13px] font-medium text-accent hover:text-accent-ink print:hidden"
            >
              View profile
              <ArrowRight className="size-3.5" aria-hidden />
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}
