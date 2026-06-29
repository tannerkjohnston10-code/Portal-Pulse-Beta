import type { ProgramIntelligenceModule, ProgramMarketSummary } from "@/platform/program-intelligence/core/program-intelligence-types";
import { ProgramModuleShell } from "@/components/program-intelligence/program-module-shell";

export function MarketSummaryCard({ module }: { module: ProgramIntelligenceModule<ProgramMarketSummary> }) {
  return (
    <ProgramModuleShell {...module}>
      <p className="text-3xl font-black text-white">{module.data.heatIndex}</p>
      <p className="mt-2 text-sm font-bold text-cyan-100">{module.data.momentumLabel}</p>
      <p className="mt-3 text-sm text-slate-400">Scarcity: {module.data.positionScarcity.join(", ")}</p>
      <p className="mt-3 text-xs font-semibold leading-5 text-amber-100">{module.data.marketDisclaimer}</p>
    </ProgramModuleShell>
  );
}
