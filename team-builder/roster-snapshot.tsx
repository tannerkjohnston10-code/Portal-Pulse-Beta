import type { RosterSnapshot as RosterSnapshotType } from "@/platform/roster/core/roster-types";
import { ConfidenceBadge } from "@/components/ui/confidence-badge";

export function RosterSnapshot({ snapshot }: { snapshot: RosterSnapshotType }) {
  const stats = [
    ["Returning starters", snapshot.returningStarters],
    ["Incoming transfers", snapshot.incomingTransfers],
    ["Outgoing transfers", snapshot.outgoingTransfers],
    ["Projected openings", snapshot.projectedOpenings]
  ];

  return (
    <section className="rounded-lg border border-cyan-300/20 bg-cyan-300/10 p-5">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-200">Atlas overview</p>
          <h1 className="mt-2 text-3xl font-black text-white">{snapshot.teamName} Team Builder</h1>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-300">Mock front-office workspace for roster opportunities, simulations, scholarship planning, and strategy support.</p>
        </div>
        <ConfidenceBadge level={snapshot.confidence} />
      </div>
      <div className="mt-5 grid gap-3 sm:grid-cols-4">
        {stats.map(([label, value]) => (
          <div key={label} className="rounded-md border border-white/10 bg-white/[0.04] p-3">
            <p className="text-xs font-black uppercase tracking-wide text-slate-500">{label}</p>
            <p className="mt-1 text-2xl font-black text-white">{value}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

