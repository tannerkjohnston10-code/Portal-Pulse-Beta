import Link from "next/link";
import { ConfidenceBadge } from "@/components/ui/confidence-badge";
import { MovementBadge } from "@/components/ui/movement-badge";
import { PredictionBar } from "@/components/ui/prediction-bar";
import { SourceLine } from "@/components/ui/source-line";
import { cardStyles } from "@/lib/design-tokens";
import type { Prediction } from "@/types/portal";

export function PredictionCard({ prediction }: { prediction: Prediction }) {
  return (
    <article className={`${cardStyles} p-5`}>
      <div className="flex items-start justify-between gap-4">
        <div>
          <Link href={`/players/${prediction.playerId}`} className="text-lg font-black text-white hover:text-cyan-200">{prediction.playerName}</Link>
          <p className="mt-1 text-sm font-semibold text-slate-400">Mock projection. Not a fact.</p>
        </div>
        <MovementBadge movement={prediction.movement} />
      </div>
      <div className="mt-5 grid gap-3">
        {prediction.teamBreakdown.map((team) => (
          <PredictionBar key={team.team} label={team.team} value={team.probability} />
        ))}
      </div>
      <p className="mt-5 text-sm leading-6 text-slate-400">{prediction.explanation}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        <ConfidenceBadge level={prediction.confidence} score={prediction.confidenceScore} />
        <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs font-bold text-slate-300">Mock prediction</span>
      </div>
      <div className="mt-4">
        <SourceLine source={prediction.source} />
      </div>
    </article>
  );
}
