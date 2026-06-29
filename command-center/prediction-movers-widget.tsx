import { BrainCircuit } from "lucide-react";
import type { PredictionMover } from "@/types/command-center";
import { ConfidenceBadge } from "@/components/ui/confidence-badge";
import { PredictionBar } from "@/components/ui/prediction-bar";
import { DashboardWidget } from "@/components/command-center/dashboard-widget";
import { TrustFooter } from "@/components/command-center/trust-footer";
import { WidgetToolbar } from "@/components/command-center/widget-toolbar";

export function PredictionMoversWidget({ movers }: { movers: PredictionMover[] }) {
  return (
    <DashboardWidget title="Prediction Movers" subtitle="Forecast shifts with reasons and projection disclaimers." icon={BrainCircuit} span={4} toolbar={<WidgetToolbar />}>
      <div className="grid gap-3">
        {movers.map((mover) => {
          const delta = mover.currentProbability - mover.previousProbability;
          return (
            <article key={mover.id} className="rounded-lg border border-white/10 bg-white/[0.04] p-3">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-sm font-black text-white">{mover.playerName}</h3>
                  <p className="text-xs font-semibold text-slate-500">{mover.school}</p>
                </div>
                <span className={`text-lg font-black ${delta >= 0 ? "text-emerald-300" : "text-rose-300"}`}>
                  {delta >= 0 ? "+" : ""}
                  {delta}%
                </span>
              </div>
              <div className="mt-3 grid gap-2">
                <PredictionBar label="Previous" value={mover.previousProbability} />
                <PredictionBar label="Current" value={mover.currentProbability} />
              </div>
              <p className="mt-3 text-xs font-semibold leading-5 text-slate-400">{mover.movementReason}</p>
              <div className="mt-3"><ConfidenceBadge level={mover.confidence} score={mover.confidenceScore} /></div>
            </article>
          );
        })}
      </div>
      <p className="mt-3 rounded-md border border-yellow-300/20 bg-yellow-300/10 p-3 text-xs font-bold leading-5 text-yellow-100">Predictions are projections, not facts. Mock percentages are fictional placeholders.</p>
      <TrustFooter confidence="medium" sourceCount={movers.length} lastUpdated="2026-06-28T12:00:00.000Z" />
    </DashboardWidget>
  );
}
