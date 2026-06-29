import type { ProgramIntelligenceModule } from "@/platform/program-intelligence/core/program-intelligence-types";
import type { TeamRosterIntelligence } from "@/types/team-intelligence";
import { ProgramModuleShell } from "@/components/program-intelligence/program-module-shell";

export function RosterOverviewCard({ module }: { module: ProgramIntelligenceModule<TeamRosterIntelligence> }) {
  return (
    <ProgramModuleShell {...module}>
      <div className="grid gap-3 sm:grid-cols-3">
        {[["Returning", module.data.returningStarters], ["Transfers In", module.data.incomingTransfers], ["Transfers Out", module.data.outgoingTransfers]].map(([label, value]) => (
          <div key={label} className="rounded-md border border-white/10 bg-slate-900/70 p-3">
            <p className="text-xs font-black uppercase tracking-wide text-slate-500">{label}</p>
            <p className="mt-2 text-2xl font-black text-white">{value}</p>
          </div>
        ))}
      </div>
    </ProgramModuleShell>
  );
}
