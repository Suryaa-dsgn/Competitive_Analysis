import { opportunities, phaseLabel, roadmap, type Opportunity, type Phase } from "../data/research";
import { card } from "./primitives";

const phaseTone: Record<Phase, { cell: string; label: string; chip: string }> = {
  validate: { cell: "wash-quickflows", label: "text-accent-ink", chip: "border-accent-line bg-white" },
  build: { cell: "bg-accent-soft/40", label: "text-accent", chip: "border-accent-line/70 bg-white" },
  partner: { cell: "bg-subtle/70", label: "text-body", chip: "border-line bg-white" },
  later: { cell: "bg-white", label: "text-muted", chip: "border-dashed border-line-strong bg-white" },
};

function Quadrant({ phase }: { phase: Phase }) {
  const items = opportunities.filter((o: Opportunity) => o.phase === phase);
  const tone = phaseTone[phase];
  return (
    <div className={`flex flex-col gap-2 p-3.5 print:gap-1.5 print:p-2.5 ${tone.cell}`}>
      <p className={`text-[11px] font-semibold uppercase tracking-wider ${tone.label}`}>{phaseLabel[phase]}</p>
      {items.map((o) => (
        <div key={o.name} className={`rounded-lg border px-3 py-2 print:py-1.5 ${tone.chip}`}>
          <p className="text-[14px] font-semibold leading-snug text-ink">{o.name}</p>
          <p className="mt-0.5 text-[12.5px] leading-snug text-muted">{o.rationale}</p>
        </div>
      ))}
    </div>
  );
}

export function OpportunityMatrix() {
  return (
    <figure className={`${card} p-5 print:p-3.5`}>
      <figcaption className="mb-4 print:mb-2">
        <p className="text-[15px] font-semibold text-ink">Where to focus first</p>
        <p className="mt-0.5 text-[12.5px] text-muted">
          Proposed hypotheses. Qualitative groupings, not scores.
        </p>
      </figcaption>

      <p className="mb-2 pl-7 text-[11px] font-semibold uppercase tracking-wider text-body">
        ↑ Commercial relevance
      </p>
      <div className="grid grid-cols-[1.25rem_minmax(0,1fr)] gap-x-2">
        {/* Row labels (vertical axis) */}
        <div className="grid grid-rows-2 gap-px text-[11px] text-muted">
          <span className="grid place-items-center">
            <span className="rotate-180 [writing-mode:vertical-rl]">Higher</span>
          </span>
          <span className="grid place-items-center">
            <span className="rotate-180 [writing-mode:vertical-rl]">Uncertain</span>
          </span>
        </div>

        <div className="grid grid-cols-2 grid-rows-2 gap-px overflow-hidden rounded-lg border border-line bg-line">
          <Quadrant phase="validate" />
          <Quadrant phase="build" />
          <Quadrant phase="partner" />
          <Quadrant phase="later" />
        </div>

        {/* Horizontal axis */}
        <div className="col-start-2 mt-2 flex items-center justify-between text-[11px] text-muted">
          <span>Lower</span>
          <span className="font-semibold uppercase tracking-wider text-body">Effort and dependency →</span>
          <span>Higher</span>
        </div>
      </div>
    </figure>
  );
}

export function Roadmap() {
  return (
    <div className={`${card} p-5 print:p-3.5`}>
      <p className="text-[15px] font-semibold text-ink">Recommended sequence</p>
      <p className="mt-0.5 text-[12.5px] text-muted">Order of work, not fixed deadlines or revenue targets.</p>

      <ol className="mt-4">
        {roadmap.map((phase, i) => (
          <li key={phase.name} className="relative flex gap-3.5 pb-4 last:pb-0">
            {i < roadmap.length - 1 && (
              <span aria-hidden className="absolute top-8 bottom-0 left-[13px] w-px bg-line-strong" />
            )}
            <span
              className={`grid size-7 shrink-0 place-items-center rounded-full text-xs font-semibold tabular-nums ${
                i === 0 ? "bg-accent text-white" : "border border-accent-line bg-accent-soft text-accent-ink"
              }`}
            >
              {i + 1}
            </span>
            <div className="pt-0.5">
              <p className="text-[14.5px] font-semibold text-ink">{phase.name}</p>
              <ul className="mt-1 space-y-0.5 text-[13.5px] leading-snug text-body">
                {phase.steps.map((s) => (
                  <li key={s} className="flex gap-2">
                    <span aria-hidden className="mt-[7px] size-1 shrink-0 rounded-full bg-line-strong" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
