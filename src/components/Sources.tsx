import * as Accordion from "@radix-ui/react-accordion";
import { CaretDown } from "@phosphor-icons/react";
import { competitors, report, researchReports, sources } from "../data/research";
import { CompetitorDot, ExternalLink } from "./primitives";

const sourceCount = Object.values(sources).reduce((n, list) => n + list.length, 0);

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function Sources({ open, onOpenChange }: Props) {
  return (
    <section id="sources" className="pt-2 pb-16 print:pt-6 print:pb-0">
      <Accordion.Root
        type="single"
        collapsible
        value={open ? "sources" : ""}
        onValueChange={(v) => onOpenChange(v === "sources")}
        className="rounded-xl border border-line bg-white"
      >
        <Accordion.Item value="sources">
          <Accordion.Header>
            <Accordion.Trigger className="group flex w-full items-center justify-between gap-4 px-5 py-4 text-left outline-none focus-visible:bg-subtle">
              <span className="flex items-baseline gap-3">
                <span className="text-xs font-semibold tracking-wider text-accent">08</span>
                <span className="text-[15px] font-semibold text-ink">Sources and evidence</span>
                <span className="text-[13px] text-muted">{sourceCount} public pages · 3 research reports</span>
              </span>
              <CaretDown
                className="size-4 text-muted transition-transform group-data-[state=open]:rotate-180 motion-reduce:transition-none print:hidden"
                aria-hidden
              />
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className="border-t border-line px-5 py-5">
            <div className="grid gap-6 md:grid-cols-4 print:grid-cols-4">
              {competitors.map((c) => (
                <div key={c.id}>
                  <h3 className="flex items-center gap-2 text-[13.5px] font-semibold text-ink">
                    <CompetitorDot id={c.id} />
                    {c.name}
                  </h3>
                  <ul className="mt-2 space-y-2">
                    {sources[c.id].map((s) => (
                      <li key={s.url} className="text-[13.5px]">
                        <ExternalLink href={s.url}>{s.label}</ExternalLink>
                        <span className="block break-all text-[12px] text-muted">
                          {s.url.replace(/^https?:\/\/(www\.)?/, "")}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
              <div>
                <h3 className="text-[13.5px] font-semibold text-ink">Internal research reports</h3>
                <ul className="mt-2 space-y-1.5 text-[13px] text-body">
                  {researchReports.map((r) => (
                    <li key={r}>{r}</li>
                  ))}
                </ul>
                <p className="mt-2 text-[12px] text-muted">In the project's /research folder.</p>
              </div>
            </div>
          </Accordion.Content>
        </Accordion.Item>
      </Accordion.Root>

      <p className="mt-5 text-[12.5px] leading-relaxed text-muted">
        Prepared for internal discussion, {report.date}. Based on public information only. Enterprise pricing, contract
        values and current customer status were not available and have not been estimated. Public customer references do
        not establish current contract status. Company-reported figures are not independently audited.
      </p>
    </section>
  );
}
