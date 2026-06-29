import { Users } from "lucide-react";
import type { TeamRosterIntelligence } from "@/types/team-intelligence";
import { TeamPanel } from "@/components/teams/intelligence/team-panel";

export function RosterWidget({ roster }: { roster: TeamRosterIntelligence }) {
  return (
    <TeamPanel title="Roster Intelligence" subtitle="Returning production, transfer movement, scholarships, and position balance." icon={Users}>
      <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-6">
        <Metric label="Returning" value={roster.returningStarters.toString()} />
        <Metric label="Transfers In" value={roster.incomingTransfers.toString()} />
        <Metric label="Transfers Out" value={roster.outgoingTransfers.toString()} />
        <Metric label="Freshmen" value={roster.freshmen.toString()} />
        <Metric label="Scholarships" value={roster.scholarshipCount.toString()} />
        <Metric label="Open" value={roster.openScholarships.toString()} />
      </div>
      <div className="mt-5 grid gap-4 xl:grid-cols-[1.25fr_0.75fr]">
        <div className="grid gap-2">
          {roster.positionBreakdown.map((position) => (
            <div key={position.position} className="grid gap-2 rounded-md bg-white/[0.04] p-3 sm:grid-cols-[5rem_1fr_auto] sm:items-center">
              <p className="font-black text-white">{position.position}</p>
              <div className="h-2 rounded-full bg-white/10">
                <div className="h-full rounded-full bg-emerald-300" style={{ width: `${position.experienceScore}%` }} />
              </div>
              <p className="text-xs font-bold text-slate-400">
                {position.total} total · +{position.transfersIn}/-{position.transfersOut}
              </p>
            </div>
          ))}
        </div>
        <div className="rounded-md border border-white/10 bg-white/[0.04] p-4">
          <p className="text-xs font-black uppercase tracking-wide text-slate-500">Experience Distribution</p>
          <div className="mt-4 grid gap-2">
            {roster.experienceDistribution.map((item) => (
              <div key={item.label} className="flex items-center justify-between text-sm font-bold">
                <span className="text-slate-400">{item.label}</span>
                <span className="text-white">{item.count}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </TeamPanel>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-md bg-white/5 p-3 text-center">
      <p className="text-2xl font-black text-white">{value}</p>
      <p className="mt-1 text-[0.65rem] font-black uppercase tracking-wide text-slate-500">{label}</p>
    </div>
  );
}
