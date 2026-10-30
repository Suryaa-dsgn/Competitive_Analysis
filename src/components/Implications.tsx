import { Target } from "@phosphor-icons/react";
import { positioning, strategicTakeaways, strategy } from "../data/research";
import { CapabilitiesToValidate } from "./CapabilitiesToValidate";
import { takeawayIcons } from "./icons";
import { OpportunityMatrix, Roadmap } from "./OpportunityMatrix";
import { Section, card } from "./primitives";

export function Implications() {
  return (
    <Section
      id="implications"
      index="06"
      title="What this means for Quickflows"
      summary="Recommendations and hypotheses to test. None of these are established Quickflows advantages yet."
      className="print:break-before-page"
    >
      {/* Strategic takeaways */}
      <ol className="grid gap-4 lg:grid-cols-3 print:grid-cols-3">
        {strategicTakeaways.map((t, i) => {
          const Icon = takeawayIcons[t.icon];
          return (
            <li key={t.title} className={`${card} flex gap-3.5 p-5 print:p-3`}>
              <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-accent-soft text-accent">
                <Icon className="size-5" aria-hidden />
              </span>
              <div>
                <p className="text-[12px] font-semibold text-accent tabular-nums">{String(i + 1).padStart(2, "0")}</p>
                <p className="text-[15.5px] font-semibold text-ink">{t.title}</p>
                <p className="mt-1 text-[14px] leading-snug text-body">{t.body}</p>
              </div>
            </li>
          );
        })}
      </ol>

      {/* Positioning statement */}
      <figure className="wash-quickflows mt-4 break-inside-avoid rounded-xl border border-accent-line px-6 py-6 lg:px-8 print:py-4">
        <figcaption className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[12px] font-semibold uppercase tracking-wider text-accent-ink">
          <Target className="size-4" aria-hidden />
          Proposed positioning
          <span className="font-medium normal-case tracking-normal text-muted">
            · A direction to test, not a proven product advantage
          </span>
        </figcaption>
        <blockquote className="mt-3 max-w-4xl text-[20px] font-medium leading-snug text-ink lg:text-[22px] print:text-[17px]">
          “{positioning}”
        </blockquote>
      </figure>

      {/* Priorities and sequence */}
      <div className="mt-8 grid gap-4 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)] break-inside-avoid print:mt-3 print:grid-cols-[1.6fr_1fr]">
        <OpportunityMatrix />
        <Roadmap />
      </div>

      <div className="mt-8 print:mt-5">
        <CapabilitiesToValidate />
      </div>

      {/* Strategic action table */}
      <div className="mt-8 print:mt-0 print:break-before-page">
        <h3 className="text-[17px] font-semibold text-ink">Strategic actions</h3>
        <p className="mt-0.5 mb-3 text-[13.5px] text-muted">From what we observed to what we propose doing about it.</p>
        <div className="overflow-x-auto rounded-xl border border-line bg-white print:overflow-visible">
          <table className="w-full min-w-[760px] table-fixed border-collapse text-left print:min-w-0">
            <colgroup>
              <col className="w-[27%]" />
              <col className="w-[25%]" />
              <col />
            </colgroup>
            <thead className="bg-subtle text-[11px] font-semibold uppercase tracking-wider text-muted">
              <tr>
                <th scope="col" className="px-5 py-2.5">Finding</th>
                <th scope="col" className="border-l border-line px-5 py-2.5">Implication</th>
                <th scope="col" className="border-l border-line px-5 py-2.5 text-accent">Recommended action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line">
              {strategy.map((row, i) => (
                <tr key={row.finding} className="break-inside-avoid align-top">
                  <td className="px-5 py-3 text-[13.5px] leading-snug text-muted">
                    <span className="mr-2.5 text-xs font-semibold text-muted/80 tabular-nums">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {row.finding}
                  </td>
                  <td className="border-l border-line px-5 py-3 text-[14px] font-medium leading-snug text-body">
                    {row.implication}
                  </td>
                  <td className="border-l border-line px-5 py-3 text-[14.5px] font-medium leading-snug text-ink">
                    {row.action}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Section>
  );
}
