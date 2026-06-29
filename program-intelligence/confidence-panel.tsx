import type { ProgramSnapshot } from "@/platform/program-intelligence/core/program-intelligence-types";
import { InformationTypeBadge } from "@/components/program-intelligence/information-type-badge";

export function ConfidencePanel({ snapshot }: { snapshot: ProgramSnapshot }) {
  return (
    <section className="rounded-lg border border-white/10 bg-slate-950/70 p-5">
      <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-200">Confidence Panel</p>
      <div className="mt-4 grid gap-3 md:grid-cols-2">
        {snapshot.confidenceIndicators.map((indicator) => (
          <div key={indicator.label} className="rounded-md border border-white/10 bg-slate-900/70 p-3">
            <div className="flex items-center justify-between gap-3">
              <p className="font-black text-white">{indicator.label}</p>
              <InformationTypeBadge type={indicator.type} />
            </div>
            <div className="mt-3 h-2 rounded-full bg-slate-800">
              <div className="h-full rounded-full bg-cyan-300" style={{ width: `${indicator.confidenceScore}%` }} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
