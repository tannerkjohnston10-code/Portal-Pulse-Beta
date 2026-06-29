import type { ProgramIntelligenceModule, ProgramTransferActivity } from "@/platform/program-intelligence/core/program-intelligence-types";
import { ProgramModuleShell } from "@/components/program-intelligence/program-module-shell";

export function TransferActivityCard({ module }: { module: ProgramIntelligenceModule<ProgramTransferActivity> }) {
  return (
    <ProgramModuleShell {...module}>
      <div className="grid gap-3 sm:grid-cols-4">
        {[["Entries", module.data.entries], ["Commits", module.data.commits], ["Departures", module.data.departures], ["Net", module.data.netMovement]].map(([label, value]) => (
          <div key={label} className="rounded-md border border-white/10 bg-slate-900/70 p-3">
            <p className="text-xs font-black uppercase tracking-wide text-slate-500">{label}</p>
            <p className="mt-2 text-xl font-black text-white">{value}</p>
          </div>
        ))}
      </div>
      <p className="mt-3 text-sm text-slate-400">Top mock positions: {module.data.topPositions.join(", ")}</p>
    </ProgramModuleShell>
  );
}
