import { Info } from "@phosphor-icons/react";
import { competitorById, positioningMap, quickflowsMapRegion as qf } from "../data/research";
import { CompetitorDot, Section, card } from "./primitives";

// Plot geometry in SVG user units.
const W = 640;
const H = 420;
const plot = { left: 56, right: W - 16, top: 16, bottom: H - 52 };
const px = (x: number) => plot.left + x * (plot.right - plot.left);
const py = (y: number) => plot.bottom - y * (plot.bottom - plot.top);

const colors = {
  providertrust: "var(--color-providertrust)",
  symplr: "var(--color-symplr)",
  medallion: "var(--color-medallion)",
};

function MapSvg() {
  const midX = px(0.5);
  const midY = py(0.5);

  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      className="h-auto w-full"
      role="img"
      aria-labelledby="map-title map-desc"
    >
      <title id="map-title">Competitive positioning map</title>
      <desc id="map-desc">
        Qualitative map. ProviderTrust sits toward focused verification data and monitoring. symplr sits toward broad
        provider-lifecycle workflows. Medallion sits toward workflow execution and operational services. A dashed region
        marks a Quickflows opportunity to validate, between focused verification and workflow execution.
      </desc>

      {/* Plot frame and quadrant guides */}
      <rect
        x={plot.left}
        y={plot.top}
        width={plot.right - plot.left}
        height={plot.bottom - plot.top}
        rx={10}
        fill="var(--color-canvas)"
        stroke="var(--color-line)"
      />
      <line x1={midX} x2={midX} y1={plot.top} y2={plot.bottom} stroke="var(--color-line-strong)" strokeDasharray="3 5" />
      <line x1={plot.left} x2={plot.right} y1={midY} y2={midY} stroke="var(--color-line-strong)" strokeDasharray="3 5" />

      {/* Quickflows opportunity region */}
      <ellipse
        cx={px(qf.cx)}
        cy={py(qf.cy)}
        rx={qf.rx * (plot.right - plot.left)}
        ry={qf.ry * (plot.bottom - plot.top)}
        fill="var(--color-accent)"
        fillOpacity={0.06}
        stroke="var(--color-accent)"
        strokeDasharray="5 5"
        strokeWidth={1.25}
      />
      <text x={px(qf.cx)} y={py(qf.cy) - 4} textAnchor="middle" fontSize={13} fontWeight={600} fill="var(--color-accent-ink)">
        {qf.label}
      </text>
      <text x={px(qf.cx)} y={py(qf.cy) + 13} textAnchor="middle" fontSize={11.5} fill="var(--color-accent)">
        {qf.sublabel}
      </text>

      {/* Competitor markers */}
      {positioningMap.map((p) => {
        const cx = px(p.x);
        const cy = py(p.y);
        const anchorEnd = p.x > 0.7;
        return (
          <g key={p.id}>
            <circle cx={cx} cy={cy} r={11} fill={colors[p.id]} fillOpacity={0.14} />
            <circle cx={cx} cy={cy} r={6} fill={colors[p.id]} stroke="#fff" strokeWidth={2} />
            <text
              x={anchorEnd ? cx - 16 : cx + 16}
              y={cy + 4.5}
              textAnchor={anchorEnd ? "end" : "start"}
              fontSize={14}
              fontWeight={600}
              fill="var(--color-ink)"
            >
              {competitorById(p.id).name}
            </text>
          </g>
        );
      })}

      {/* Horizontal axis */}
      <text x={plot.left} y={H - 28} fontSize={12} fill="var(--color-muted)">
        Focused verification / data services
      </text>
      <text x={plot.right} y={H - 28} fontSize={12} fill="var(--color-muted)" textAnchor="end">
        Broad provider-lifecycle workflows
      </text>
      <text x={midX} y={H - 8} fontSize={11} fontWeight={600} letterSpacing={0.8} fill="var(--color-body)" textAnchor="middle">
        SCOPE →
      </text>

      {/* Vertical axis */}
      <g transform={`translate(22 ${plot.bottom}) rotate(-90)`}>
        <text x={0} y={0} fontSize={12} fill="var(--color-muted)">
          Data and monitoring
        </text>
      </g>
      <g transform={`translate(22 ${plot.top}) rotate(-90)`}>
        <text x={0} y={0} fontSize={12} fill="var(--color-muted)" textAnchor="end">
          Workflow execution and services
        </text>
      </g>
      <g transform={`translate(40 ${midY}) rotate(-90)`}>
        <text x={0} y={0} fontSize={11} fontWeight={600} letterSpacing={0.8} fill="var(--color-body)" textAnchor="middle">
          OPERATING MODEL →
        </text>
      </g>
    </svg>
  );
}

export function PositioningMap() {
  return (
    <Section
      id="landscape"
      index="01"
      title="Competitive landscape"
      summary="Three companies addressing overlapping credentialing needs through different commercial models."
      className="print:break-before-page"
    >
      <div className="grid gap-4 lg:grid-cols-[minmax(0,1.45fr)_minmax(0,1fr)] print:grid-cols-[1.4fr_1fr]">
        <figure className={`${card} p-4 sm:p-5`}>
          <MapSvg />
          <figcaption className="mt-2 flex items-start gap-2 text-[12.5px] leading-relaxed text-muted">
            <Info className="mt-0.5 size-4 shrink-0" aria-hidden />
            Directional placement based on each company's documented product emphasis. Positions are qualitative
            interpretations, not measured scores.
          </figcaption>
        </figure>

        <div className={`${card} flex flex-col divide-y divide-line`}>
          <p className="px-5 py-3 text-[11px] font-semibold uppercase tracking-wider text-muted">How to read the map</p>
          {positioningMap.map((p) => (
            <div key={p.id} className="px-5 py-3.5">
              <p className="flex items-center gap-2 text-[14px] font-semibold text-ink">
                <CompetitorDot id={p.id} />
                {competitorById(p.id).name}
              </p>
              <p className="mt-1 text-[14px] leading-snug text-body">{p.reading}</p>
              <p className="mt-1 text-[12.5px] text-muted">{p.basis}</p>
            </div>
          ))}
          <div className="wash-quickflows flex-1 rounded-b-xl px-5 py-3.5">
            <p className="flex items-center gap-2 text-[14px] font-semibold text-accent-ink">
              <span aria-hidden className="inline-block size-2.5 rounded-full border border-dashed border-accent" />
              Quickflows · to validate
            </p>
            <p className="mt-1 text-[14px] leading-snug text-body">{qf.reading}</p>
            <p className="mt-1 text-[12.5px] text-muted">{qf.basis}</p>
          </div>
        </div>
      </div>
    </Section>
  );
}
