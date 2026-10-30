import * as Accordion from "@radix-ui/react-accordion";
import { CaretDown } from "@phosphor-icons/react";
import { companyIntel, competitorById, type CompetitorId } from "../data/research";
import { CompetitorIcon } from "./icons";
import { EvidenceLabel, ExternalLink, Section, textColor, wash } from "./primitives";

interface Props {
  open: CompetitorId[];
  onOpenChange: (ids: CompetitorId[]) => void;
}

export function CompanyCards({ open, onOpenChange }: Props) {
  const allOpen = open.length === companyIntel.length;

  return (
    <Section
      id="companies"
      index="04"
      title="Company intelligence"
      summary="What each company is really selling, and what it means for Quickflows."
      className="print:break-before-page"
      actions={
        <button
          type="button"
          onClick={() => onOpenChange(allOpen ? [] : companyIntel.map((c) => c.id))}
          className="text-[13px] font-medium text-accent hover:text-accent-ink"
        >
          {allOpen ? "Collapse all" : "Expand all"}
        </button>
      }
    >
      <Accordion.Root
        type="multiple"
        value={open}
        onValueChange={(v) => onOpenChange(v as CompetitorId[])}
        // Subgrid keeps summary, toggle and detail rows aligned across the three cards.
        className="flex flex-col gap-4 lg:grid lg:grid-cols-3 lg:gap-x-4 lg:gap-y-0 print:grid print:grid-cols-3 print:gap-x-3 print:gap-y-0"
      >
        {companyIntel.map((intel) => {
          const company = competitorById(intel.id);
          return (
            <Accordion.Item
              key={intel.id}
              value={intel.id}
              id={`profile-${intel.id}`}
              className={`scroll-mt-20 break-inside-avoid rounded-xl border border-line lg:row-span-3 lg:grid lg:grid-rows-subgrid print:row-span-3 print:grid print:grid-rows-subgrid ${wash[intel.id]}`}
            >
              <div className="px-5 pt-5 print:px-4 print:pt-3">
                <div className="flex items-center gap-2.5">
                  <CompetitorIcon id={intel.id} className={`size-5 ${textColor[intel.id]}`} />
                  <h3 className="text-[17px] font-semibold text-ink">{company.name}</h3>
                </div>
                <p className="mt-2 text-[15px] font-medium leading-snug text-ink print:mt-1 print:text-[12.5px]">{intel.takeaway}</p>

                <dl className="mt-4 space-y-3 border-t border-line/80 pt-4 print:mt-3 print:space-y-2 print:pt-3">
                  <Insight label="Main strength" value={intel.strength} />
                  <Insight label="Typical sales motion" value={intel.salesMotion} />
                  <Insight label="Quickflows consideration" value={intel.consideration} accent />
                </dl>
              </div>

              <Accordion.Header asChild>
                <div>
                  <Accordion.Trigger className="group mt-4 flex w-full self-end items-center justify-between border-t border-line/80 px-5 py-3 text-[13px] font-medium text-muted outline-none transition-colors hover:text-ink focus-visible:bg-white/70 print:hidden">
                    <span className="group-data-[state=open]:hidden">Research detail</span>
                    <span className="hidden group-data-[state=open]:inline">Hide detail</span>
                    <CaretDown
                      className="size-4 transition-transform group-data-[state=open]:rotate-180 motion-reduce:transition-none"
                      aria-hidden
                    />
                  </Accordion.Trigger>
                </div>
              </Accordion.Header>

              <Accordion.Content className="border-t border-line/80 bg-white/60 px-5 py-4 print:px-4 print:py-2.5 print:text-[11px]">
                <dl className="grid gap-2 text-[13.5px] print:gap-1 print:text-[11px]">
                  <div>
                    <dt className="text-[12px] text-muted">Public customer examples</dt>
                    <dd className="text-body">{intel.examples}</dd>
                  </div>
                  <div>
                    <dt className="text-[12px] text-muted">Distribution</dt>
                    <dd className="text-body">{intel.distribution}</dd>
                  </div>
                </dl>
                <ul className="mt-4 space-y-3.5 print:mt-2 print:space-y-1.5">
                  {intel.research.map((point) => (
                    <li key={point.text} className="text-[13.5px] leading-relaxed print:text-[11px] print:leading-snug">
                      <EvidenceLabel type={point.evidence} />
                      <p className="mt-0.5 text-body">{point.text}</p>
                      {point.source && (
                        <p className="mt-0.5 text-[12.5px] text-muted">
                          {point.source.url ? (
                            <ExternalLink href={point.source.url}>{point.source.label}</ExternalLink>
                          ) : (
                            point.source.label
                          )}
                        </p>
                      )}
                    </li>
                  ))}
                </ul>
              </Accordion.Content>
            </Accordion.Item>
          );
        })}
      </Accordion.Root>
    </Section>
  );
}

function Insight({ label, value, accent = false }: { label: string; value: string; accent?: boolean }) {
  return (
    <div>
      <dt className={`text-[12px] font-medium ${accent ? "text-accent" : "text-muted"}`}>{label}</dt>
      <dd className={`mt-0.5 text-[14px] leading-snug print:text-[11.5px] ${accent ? "font-medium text-accent-ink" : "text-body"}`}>
        {value}
      </dd>
    </div>
  );
}
