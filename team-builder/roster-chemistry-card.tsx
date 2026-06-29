import type { RosterChemistry } from "@/platform/roster/core/roster-types";
import { ConfidenceBadge } from "@/components/ui/confidence-badge";

export function RosterChemistryCard({ chemistry }: { chemistry: RosterChemistry }) {
  return (
    <section className="rounded-lg border border-white/10 bg-slate-950/70 p-5">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-200">Roster Chemistry</p>
          <h2 className="mt-2 text-3xl font-black text-white">{chemistry.overallScore}</h2>
        </div>
        <ConfidenceBadge level={chemistry.confidence} />
      </div>
      <p className="mt-3 text-sm leading-6 text-slate-400">Structural cohesion only, not personality. {chemistry.trendPlaceholder}</p>
      <div className="mt-4 grid gap-3 md:grid-cols-2">
        <div className="rounded-md border border-rose-300/15 bg-rose-300/10 p-3 text-sm font-bold text-rose-100">Risks: {chemistry.riskAreas.join(", ")}</div>
        <div className="rounded-md border border-emerald-300/15 bg-emerald-300/10 p-3 text-sm font-bold text-emerald-100">Stable: {chemistry.stabilityAreas.join(", ")}</div>
      </div>
    </section>
  );
}

