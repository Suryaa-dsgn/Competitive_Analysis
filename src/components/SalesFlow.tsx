import { competitorById, salesEmphasis, salesFlow, type CompetitorId } from "../data/research";
import { CompetitorDot, Section, card } from "./primitives";

export function SalesFlow() {
  return (
    <Section
      id="sales"
      index="03"
      title="How competitors sell"
      summary="How these businesses turn a customer problem into recurring revenue."
    >
      <figure className={`${card} p-5 sm:p-6`}>
        <figcaption className="mb-5 flex flex-wrap items-baseline justify-between gap-2">
          <span className="text-[11px] font-semibold uppercase tracking-wider text-muted">
            Synthesized enterprise buying pattern
          </span>
          <span className="text-[12.5px] text-muted">
            Reconstructed from public case studies and websites. Not any company's internal playbook.
          </span>
        </figcaption>

        <ol className="grid gap-3 lg:grid-cols-5 print:grid-cols-5">
          {salesFlow.map((stage, i) => (
            <li key={stage.title} className="relative flex lg:block print:block">
              {/* Connector: vertical on narrow screens, horizontal on wide */}
              <div className="mr-4 flex flex-col items-center lg:mr-0 lg:mb-3 lg:flex-row print:mr-0 print:mb-3 print:flex-row">
                <span className="grid size-7 shrink-0 place-items-center rounded-full border border-accent-line bg-accent-soft text-xs font-semibold text-accent-ink tabular-nums">
                  {i + 1}
                </span>
                {i < salesFlow.length - 1 && (
                  <span
                    aria-hidden
                    className="mt-1 w-px flex-1 bg-line-strong lg:mt-0 lg:ml-2 lg:h-px lg:w-auto print:mt-0 print:ml-2 print:h-px print:w-auto"
                  />
                )}
              </div>
              <div className="pb-4 lg:pb-0 lg:pr-3 print:pb-0 print:pr-3">
                <p className="text-[15px] font-semibold text-ink">{stage.title}</p>
                <p className="mt-1 text-[14px] leading-snug text-body">{stage.detail}</p>
                <p className="mt-2 border-l-2 border-line pl-2.5 text-[12.5px] leading-snug text-muted">
                  e.g. {stage.example}
                </p>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-6 border-t border-line pt-4">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-wider text-muted">
            Where each company leans in · interpretation
          </p>
          <ul className="grid gap-3 md:grid-cols-3 print:grid-cols-3">
            {(Object.keys(salesEmphasis) as CompetitorId[]).map((id) => (
              <li key={id} className="text-[14px] leading-snug text-body">
                <span className="mb-0.5 flex items-center gap-2 font-semibold text-ink">
                  <CompetitorDot id={id} />
                  {competitorById(id).name}
                </span>
                {salesEmphasis[id]}
              </li>
            ))}
          </ul>
        </div>
      </figure>
    </Section>
  );
}
