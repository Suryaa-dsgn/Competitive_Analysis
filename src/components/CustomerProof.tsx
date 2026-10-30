import { Info } from "@phosphor-icons/react";
import { competitorById, evidenceLabel, proofPoints } from "../data/research";
import { CompetitorDot, ExternalLink, Section, wash } from "./primitives";

export function CustomerProof() {
  return (
    <Section
      id="proof"
      index="05"
      title="Customer proof"
      summary="The headline outcome each competitor uses in its own marketing."
      className="print:pt-5"
    >
      <p className="mb-4 flex items-center gap-2 text-[13px] font-medium text-body print:mb-3">
        <Info className="size-4 shrink-0 text-muted" aria-hidden />
        Company-reported and case-study figures; different measurement scopes. Not comparable benchmarks.
      </p>

      <div className="grid gap-4 md:grid-cols-3 print:grid-cols-3">
        {proofPoints.map((p) => (
          <article
            key={p.id}
            className={`flex break-inside-avoid flex-col rounded-xl border border-line p-5 print:p-4 ${wash[p.id]}`}
          >
            <div className="flex flex-wrap items-center justify-between gap-x-3 gap-y-1.5">
              <span className="flex items-center gap-2 text-[14px] font-semibold text-ink">
                <CompetitorDot id={p.id} />
                {competitorById(p.id).name}
              </span>
              <span className="whitespace-nowrap rounded-full border border-line bg-white/80 px-2 py-0.5 text-[11px] font-medium text-muted">
                {evidenceLabel[p.evidence]}
              </span>
            </div>
            <p className="mt-4 text-[32px] font-semibold leading-none tracking-tight text-ink tabular-nums print:mt-3 print:text-[26px]">
              {p.figure}
            </p>
            <p className="mt-2.5 flex-1 text-[14.5px] leading-relaxed text-body">{p.statement}</p>
            <p className="mt-3 text-[13px] print:mt-2">
              <ExternalLink href={p.sourceUrl}>View source</ExternalLink>
            </p>
          </article>
        ))}
      </div>
    </Section>
  );
}
