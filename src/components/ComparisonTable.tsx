import { Fragment } from "react";
import * as Tooltip from "@radix-ui/react-tooltip";
import { comparison, competitors, type ComparisonRow } from "../data/research";
import { CompetitorDot, Section, wash } from "./primitives";

function InterpretationMark() {
  return (
    <Tooltip.Root>
      <Tooltip.Trigger asChild>
        <button
          type="button"
          aria-label="Research interpretation"
          className="ml-1 cursor-help rounded align-super text-[11px] font-semibold text-muted outline-none hover:text-accent focus-visible:ring-2 focus-visible:ring-accent-line"
        >
          *
        </button>
      </Tooltip.Trigger>
      <Tooltip.Portal>
        <Tooltip.Content
          side="top"
          sideOffset={6}
          className="z-50 max-w-60 rounded-md bg-ink px-2.5 py-1.5 text-xs leading-snug text-white shadow-md"
        >
          Research interpretation: our reading of public information, not a statement made by the company.
          <Tooltip.Arrow className="fill-ink" />
        </Tooltip.Content>
      </Tooltip.Portal>
    </Tooltip.Root>
  );
}

function rowCells(row: ComparisonRow, isQuickflows: boolean) {
  const base = "border-t border-l border-line px-5 py-3.5 align-top text-[14.5px] leading-relaxed print:px-3 print:py-1.5 print:text-[11px] print:leading-snug";
  if ("all" in row.values) {
    return (
      <td colSpan={competitors.length} className={`${base} italic text-body`}>
        {row.values.all}
      </td>
    );
  }
  const values = row.values;
  return competitors.map((c, i) => (
    <td
      key={c.id}
      className={`${base} ${isQuickflows ? "bg-accent-soft font-medium text-accent-ink" : "text-body"} ${
        isQuickflows && i === competitors.length - 1 ? "rounded-br-xl" : ""
      }`}
    >
      {values[c.id]}
    </td>
  ));
}

export function ComparisonTable() {
  let lastGroup = "";

  return (
    <Section
      id="comparison"
      index="02"
      title="Detailed comparison"
      summary="Thirteen dimensions, grouped from positioning to commercial model. Scroll sideways on smaller screens."
      className="print:break-before-page"
    >
      {/* Scrolls horizontally below lg; at lg+ the header sticks to the page instead. */}
      <div className="overflow-x-auto rounded-xl border border-line bg-white lg:overflow-visible print:overflow-visible">
        <table className="w-full min-w-[900px] table-fixed border-separate border-spacing-0 text-left print:min-w-0">
          <colgroup>
            <col className="w-[190px] print:w-[150px]" />
            {competitors.map((c) => (
              <col key={c.id} />
            ))}
          </colgroup>
          <thead>
            <tr>
              <th
                scope="col"
                className="sticky left-0 z-20 rounded-tl-xl bg-white px-5 py-3.5 text-[11px] font-semibold uppercase tracking-wider text-muted lg:top-14 print:static print:py-2"
              >
                Dimension
              </th>
              {competitors.map((c, i) => (
                <th
                  key={c.id}
                  scope="col"
                  className={`z-10 border-l border-line px-5 py-3.5 lg:sticky lg:top-14 print:static print:py-2 ${wash[c.id]} ${
                    i === competitors.length - 1 ? "rounded-tr-xl" : ""
                  }`}
                >
                  <span className="flex items-center gap-2 text-[15px] font-semibold text-ink">
                    <CompetitorDot id={c.id} />
                    {c.name}
                  </span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {comparison.map((row) => {
              const showGroup = row.group !== lastGroup;
              lastGroup = row.group;
              const isQuickflows = row.evidence === "recommendation";

              return (
                <Fragment key={row.category}>
                  {showGroup && !isQuickflows && (
                    <tr className="break-after-avoid">
                      <th
                        colSpan={competitors.length + 1}
                        scope="colgroup"
                        className="border-t border-line bg-subtle px-5 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-muted print:px-3 print:py-0.5 print:text-[9.5px]"
                      >
                        <span className="sticky left-5">{row.group}</span>
                      </th>
                    </tr>
                  )}
                  <tr className="break-inside-avoid">
                    <th
                      scope="row"
                      className={`sticky left-0 z-10 border-t border-line px-5 py-3.5 align-top text-[14px] font-semibold print:static print:px-3 print:py-1.5 print:text-[11.5px] ${
                        isQuickflows ? "rounded-bl-xl bg-accent-soft text-accent-ink" : "bg-white text-ink"
                      }`}
                    >
                      {row.evidence === "interpretation" ? (
                        <>
                          {row.category.split(" ").slice(0, -1).join(" ")}{" "}
                          <span className="whitespace-nowrap">
                            {row.category.split(" ").at(-1)}
                            <InterpretationMark />
                          </span>
                        </>
                      ) : (
                        row.category
                      )}
                      {isQuickflows && (
                        <span className="mt-1 block text-[11px] font-semibold uppercase tracking-wider text-accent">
                          Recommendation
                        </span>
                      )}
                    </th>
                    {rowCells(row, isQuickflows)}
                  </tr>
                </Fragment>
              );
            })}
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-[12.5px] leading-relaxed text-muted">
        <span className="font-semibold text-body">*</span> Research interpretation of public information. Unmarked rows
        summarise the companies' own public materials. Customer examples do not establish current contract status. Links
        in Sources.
      </p>
    </Section>
  );
}
