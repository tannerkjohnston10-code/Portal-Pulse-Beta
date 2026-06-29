import { IntelligenceCard } from "@/components/ui/intelligence-card";
import { PredictionBar } from "@/components/ui/prediction-bar";
import { MovementBadge } from "@/components/ui/movement-badge";
import type { PlayerIntelligence } from "@/lib/player-intelligence/player-intelligence";

export function PortalPulseScorePanel({ intelligence }: { intelligence: PlayerIntelligence }) {
  return (
    <IntelligenceCard title="Portal Pulse Score™" subtitle="Mock proprietary intelligence score">
      <div className="grid gap-5 lg:grid-cols-[220px_1fr]">
        <div className="rounded-lg border border-cyan-300/20 bg-cyan-300/10 p-5">
          <p className="text-6xl font-black text-white">{intelligence.portalPulseScore}</p>
          <p className="mt-1 text-sm font-bold text-cyan-100">Overall intelligence score</p>
          <div className="mt-4 flex flex-wrap gap-2">
            <MovementBadge movement="up" value={`Today +${intelligence.scoreMovementToday}`} />
            <MovementBadge movement="up" value={`Week +${intelligence.scoreMovementWeek}`} />
          </div>
        </div>
        <div className="grid gap-3">
          {intelligence.scoreFactors.map((factor) => (
            <div key={factor.label}>
              <PredictionBar label={factor.label} value={factor.value} />
              <p className="mt-1 text-xs text-slate-500">{factor.detail}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-5 h-28 rounded-lg border border-white/10 bg-[linear-gradient(135deg,rgba(34,211,238,0.14),rgba(250,204,21,0.08))] p-4">
        <p className="text-xs font-black uppercase tracking-wide text-slate-400">Historical chart placeholder</p>
        <div className="mt-6 flex h-12 items-end gap-2">
          {[42, 50, 48, 57, 61, intelligence.portalPulseScore].map((value, index) => (
            <div key={index} className="flex-1 rounded-t bg-cyan-300/70" style={{ height: `${value}%` }} />
          ))}
        </div>
      </div>
    </IntelligenceCard>
  );
}
