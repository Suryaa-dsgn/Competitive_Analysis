import { capabilities, capabilityStatusLabel, type CapabilityStatus } from "../data/research";

const statusTone: Record<CapabilityStatus, string> = {
  documented: "border-providertrust/30 bg-providertrust/5 text-providertrust",
  benchmark: "border-amber-300/70 bg-amber-50 text-amber-800",
  confirm: "border-line-strong bg-subtle text-body",
  opportunity: "border-accent-line bg-accent-soft text-accent-ink",
};

export function CapabilitiesToValidate() {
  const usedStatuses = [...new Set(capabilities.map((c) => c.status))];

  return (
    <div className="break-inside-avoid">
      <div className="mb-3 flex flex-wrap items-end justify-between gap-3">
        <div>
          <h3 className="text-[17px] font-semibold text-ink">Product capabilities to validate</h3>
          <p className="mt-0.5 max-w-3xl text-[13.5px] text-muted">
            What competitors demonstrate versus what Quickflows still needs to prove before claiming an advantage.
          </p>
        </div>
      </div>

      <div className="overflow-x-auto rounded-xl border border-line bg-white print:overflow-visible">
        <table className="w-full min-w-[820px] table-fixed border-collapse text-left print:min-w-0">
          <colgroup>
            <col className="w-[22%]" />
            <col className="w-[28%]" />
            <col className="w-[32%]" />
            <col className="w-[18%]" />
          </colgroup>
          <thead className="bg-subtle text-[11px] font-semibold uppercase tracking-wider text-muted">
            <tr>
              <th scope="col" className="px-4 py-2.5">Area</th>
              <th scope="col" className="border-l border-line px-4 py-2.5">What competitors demonstrate</th>
              <th scope="col" className="border-l border-line px-4 py-2.5">What Quickflows needs to prove</th>
              <th scope="col" className="border-l border-line px-4 py-2.5">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-line">
            {capabilities.map((c) => (
              <tr key={c.area} className="break-inside-avoid align-top">
                <th scope="row" className="px-4 py-3 font-normal">
                  <span className="block text-[14px] font-semibold text-ink">{c.area}</span>
                  <span className="mt-0.5 block text-[12.5px] leading-snug text-muted">{c.scope}</span>
                </th>
                <td className="border-l border-line px-4 py-3 text-[13.5px] leading-snug text-muted">{c.competitors}</td>
                <td className="border-l border-line px-4 py-3 text-[14px] leading-snug text-ink">{c.quickflows}</td>
                <td className="border-l border-line px-4 py-3">
                  <span
                    className={`inline-block rounded-full border px-2 py-0.5 text-[11.5px] font-medium leading-snug ${statusTone[c.status]}`}
                  >
                    {capabilityStatusLabel[c.status]}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-2 text-[12.5px] leading-relaxed text-muted">
        Quickflows baselines come from internal company context and founder statements summarised in the research
        reports (ProviderTrust §9, Medallion §10), not an independent product audit. Statuses used:{" "}
        {usedStatuses.map((s) => capabilityStatusLabel[s]).join(", ")}.
      </p>
    </div>
  );
}
