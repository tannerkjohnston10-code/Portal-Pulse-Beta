import { ConfidenceBadge } from "@/components/ui/confidence-badge";
import { IntelligenceCard } from "@/components/ui/intelligence-card";
import { SourceLine } from "@/components/ui/source-line";
import type { PlayerIntelligence } from "@/lib/player-intelligence/player-intelligence";
import type { Source } from "@/types/portal";

export function SourceNewsPanel({ intelligence, source }: { intelligence: PlayerIntelligence; source: Source }) {
  return (
    <div className="grid gap-4 xl:grid-cols-[0.9fr_1.1fr]">
      <IntelligenceCard title="Source Intelligence" subtitle="Source timeline and review status">
        <div className="grid gap-3">
          <SourceRow label="Recent articles" value="1 mock source placeholder" />
          <SourceRow label="Official statements" value="None attached" />
          <SourceRow label="Coach statements" value="None attached" />
          <SourceRow label="Social activity" value="Placeholder only" />
          <SourceRow label="Conflicting reports" value="No mock conflict attached" />
          <SourceRow label="Admin review" value="Needs review for production data" />
          <SourceLine source={source} />
        </div>
      </IntelligenceCard>
      <IntelligenceCard title="News Intelligence Feed" subtitle="Original AI-style summaries, not copied articles">
        <div className="grid gap-3">
          {intelligence.news.map((item) => (
            <article key={item.headline} className="rounded-lg border border-white/10 bg-white/5 p-4">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <h3 className="font-black text-white">{item.headline}</h3>
                <ConfidenceBadge level={item.confidenceScore >= 70 ? "high" : item.confidenceScore >= 45 ? "medium" : "low"} score={item.confidenceScore} />
              </div>
              <p className="mt-2 text-sm leading-6 text-slate-400">{item.summary}</p>
              <div className="mt-3 grid gap-2 text-xs text-slate-500 sm:grid-cols-2">
                <p>Sources: {item.sourceCount}</p>
                <p>Timeline: {item.timelineImpact}</p>
                <p>Prediction: {item.predictionImpact}</p>
                <p>Schools: {item.relatedSchools.join(", ") || "None"}</p>
              </div>
            </article>
          ))}
        </div>
      </IntelligenceCard>
    </div>
  );
}

function SourceRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-3 rounded-md bg-white/5 px-3 py-2 text-sm">
      <span className="font-bold text-slate-500">{label}</span>
      <span className="text-right font-black text-slate-200">{value}</span>
    </div>
  );
}
