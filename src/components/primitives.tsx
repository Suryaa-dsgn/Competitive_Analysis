import type { ReactNode } from "react";
import { ArrowUpRight } from "@phosphor-icons/react";
import { evidenceLabel, type CompetitorId, type Evidence } from "../data/research";

export const wash: Record<CompetitorId, string> = {
  providertrust: "wash-providertrust",
  symplr: "wash-symplr",
  medallion: "wash-medallion",
};

export const textColor: Record<CompetitorId, string> = {
  providertrust: "text-providertrust",
  symplr: "text-symplr",
  medallion: "text-medallion",
};

const dotColor: Record<CompetitorId, string> = {
  providertrust: "bg-providertrust",
  symplr: "bg-symplr",
  medallion: "bg-medallion",
};

export function CompetitorDot({ id }: { id: CompetitorId }) {
  return <span aria-hidden className={`inline-block size-2 shrink-0 rounded-full ${dotColor[id]}`} />;
}

/** Quiet text label for evidence type. Recommendations get the accent colour. */
export function EvidenceLabel({ type }: { type: Evidence }) {
  const tone =
    type === "recommendation"
      ? "text-accent"
      : type === "unverified"
        ? "text-symplr"
        : "text-muted";
  return (
    <span className={`text-[11px] font-semibold uppercase tracking-wider ${tone}`}>{evidenceLabel[type]}</span>
  );
}

export function ExternalLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-1 font-medium text-accent hover:text-accent-ink hover:underline"
    >
      {children}
      <ArrowUpRight className="size-3.5 shrink-0" aria-hidden />
    </a>
  );
}

interface SectionProps {
  id: string;
  index: string;
  title: string;
  summary?: string;
  actions?: ReactNode;
  children: ReactNode;
  className?: string;
}

export function Section({ id, index, title, summary, actions, children, className = "" }: SectionProps) {
  return (
    <section id={id} className={`py-10 print:py-0 ${className}`}>
      <div className="mb-5 flex flex-wrap items-end justify-between gap-4 break-after-avoid print:mb-3">
        <div>
          <p className="mb-1 text-xs font-semibold tracking-wider text-accent tabular-nums">{index}</p>
          <h2 className="text-[22px] font-semibold tracking-tight text-ink print:text-lg">{title}</h2>
          {summary && <p className="mt-1.5 max-w-3xl text-[15px] text-muted print:hidden">{summary}</p>}
        </div>
        {actions && <div className="print:hidden">{actions}</div>}
      </div>
      {children}
    </section>
  );
}

/** Standard surface: white, thin neutral border, consistent radius. */
export const card = "rounded-xl border border-line bg-white";
