import { IntelligenceCard } from "@/components/ui/intelligence-card";
import { PredictionBar } from "@/components/ui/prediction-bar";
import type { PlayerIntelligence } from "@/lib/player-intelligence/player-intelligence";

export function RosterFitPanel({ intelligence }: { intelligence: PlayerIntelligence }) {
  const bestOverall = intelligence.schoolFits[0]?.school ?? "Unknown";

  return (
    <IntelligenceCard title="Roster Fit Engine" subtitle="Mock fit model categories">
      <div className="grid gap-4 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="grid gap-3">
          <FitAward label="Best overall fit" value={bestOverall} />
          <FitAward label="Best chance to start" value={bestOverall} />
          <FitAward label="Best long-term fit" value={intelligence.schoolFits[1]?.school ?? bestOverall} />
          <FitAward label="Best NIL opportunity" value="NIL placeholder" />
          <FitAward label="Best NFL pathway" value="Future model placeholder" />
        </div>
        <div className="grid gap-3">
          {intelligence.rosterFitCategories.map((category) => (
            <PredictionBar key={category.label} label={category.label} value={category.score} />
          ))}
        </div>
      </div>
    </IntelligenceCard>
  );
}

function FitAward({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border border-white/10 bg-white/5 p-4">
      <p className="text-xs font-black uppercase tracking-wide text-cyan-300">{label}</p>
      <p className="mt-1 text-lg font-black text-white">{value}</p>
    </div>
  );
}
