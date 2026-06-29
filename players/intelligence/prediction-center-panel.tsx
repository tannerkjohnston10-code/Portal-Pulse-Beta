import { ConfidenceBadge } from "@/components/ui/confidence-badge";
import { IntelligenceCard } from "@/components/ui/intelligence-card";
import { MovementBadge } from "@/components/ui/movement-badge";
import { PredictionBar } from "@/components/ui/prediction-bar";
import type { Prediction } from "@/types/portal";

export function PredictionCenterPanel({ prediction }: { prediction?: Prediction }) {
  const breakdown = prediction?.teamBreakdown ?? [{ team: "Unknown", probability: 100, isMock: true as const }];

  return (
    <IntelligenceCard title="Prediction Center" subtitle="Projection view, not a fact" meta={prediction && <ConfidenceBadge level={prediction.confidence} score={prediction.confidenceScore} />}>
      <div className="grid gap-4">
        {breakdown.map((team) => (
          <PredictionBar key={team.team} label={team.team} value={team.probability} />
        ))}
      </div>
      <div className="mt-5 grid gap-4 md:grid-cols-2">
        <ReasonBlock title="Why this projection exists" lines={["Mock roster need signal", "Mock visit timing signal", "Mock interest probability"]} />
        <ReasonBlock title="Reasons against" lines={["Source count still limited", "Unknown scholarship context", "No official confirmation"]} />
      </div>
      <div className="mt-5 flex flex-wrap gap-2">
        {prediction && <MovementBadge movement={prediction.movement} />}
        <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs font-bold text-slate-300">Accuracy placeholder</span>
        <span className="rounded-full border border-yellow-300/20 bg-yellow-300/10 px-2.5 py-1 text-xs font-bold text-yellow-100">Unknown probability preserved</span>
      </div>
    </IntelligenceCard>
  );
}

function ReasonBlock({ title, lines }: { title: string; lines: string[] }) {
  return (
    <div className="rounded-lg border border-white/10 bg-white/5 p-4">
      <p className="font-black text-white">{title}</p>
      <ul className="mt-3 grid gap-2 text-sm text-slate-400">
        {lines.map((line) => <li key={line}>{line}</li>)}
      </ul>
    </div>
  );
}
