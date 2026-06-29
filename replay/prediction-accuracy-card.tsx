import type { PredictionAccuracyResult } from "@/platform/history/snapshots/history-types";
import { ConfidenceBadge } from "@/components/ui/confidence-badge";

export function PredictionAccuracyCard({ result }: { result: PredictionAccuracyResult }) {
  return (
    <article className="rounded-lg border border-white/10 bg-white/[0.03] p-4">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-xs font-black uppercase tracking-wide text-amber-200">Projection accuracy</p>
          <h3 className="mt-2 text-base font-black text-white">{result.predictionMade}</h3>
        </div>
        <ConfidenceBadge level={result.confidenceAtTime} />
      </div>
      <p className="mt-3 text-sm leading-6 text-slate-300">{result.explanation}</p>
      <div className="mt-3 flex flex-wrap gap-2 text-xs font-bold text-slate-500">
        <span>{result.accuracyResult}</span>
        <span>{result.modelVersion}</span>
        <span>{result.sourceCount} sources</span>
        <span>Projection only</span>
      </div>
      <p className="mt-3 text-xs font-semibold leading-5 text-slate-400">Lesson: {result.lessonsLearned}</p>
    </article>
  );
}

