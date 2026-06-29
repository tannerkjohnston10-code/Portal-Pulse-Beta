import { ConfidenceBadge } from "@/components/ui/confidence-badge";
import { IntelligenceCard } from "@/components/ui/intelligence-card";
import { PredictionBar } from "@/components/ui/prediction-bar";
import type { PlayerIntelligence } from "@/lib/player-intelligence/player-intelligence";

export function InterestedSchoolsPanel({ intelligence }: { intelligence: PlayerIntelligence }) {
  return (
    <IntelligenceCard title="Interested Schools" subtitle="Mock school-by-school intelligence cards">
      <div className="grid gap-4 xl:grid-cols-2">
        {intelligence.schoolFits.map((school) => (
          <article key={school.school} className="rounded-lg border border-white/10 bg-slate-950/70 p-4">
            <div className="flex items-start gap-4">
              <div className="grid h-14 w-14 place-items-center rounded-lg border border-cyan-300/25 bg-cyan-300/10 text-lg font-black text-cyan-100">
                {school.logo}
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <h3 className="font-black text-white">{school.school}</h3>
                    <p className="text-sm font-semibold text-slate-400">{school.conference} · {school.headCoach}</p>
                  </div>
                  <ConfidenceBadge level={school.confidenceScore >= 70 ? "high" : school.confidenceScore >= 45 ? "medium" : "low"} score={school.confidenceScore} />
                </div>
                <div className="mt-4 grid gap-3">
                  <PredictionBar label="Roster fit" value={school.rosterFit} />
                  <PredictionBar label="Depth opportunity" value={school.depthOpportunity} />
                  <PredictionBar label="Relationship score" value={school.relationshipScore} />
                </div>
                <div className="mt-4 grid gap-2 text-sm sm:grid-cols-2">
                  <Mini label="Distance" value={school.distanceFromHome} />
                  <Mini label="NIL market" value={school.nilMarket} />
                  <Mini label="Scholarship" value={school.scholarshipOutlook} />
                  <Mini label="Last activity" value="Mock updated" />
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </IntelligenceCard>
  );
}

function Mini({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-md bg-white/5 px-3 py-2">
      <p className="text-xs font-black uppercase tracking-wide text-slate-500">{label}</p>
      <p className="mt-1 font-bold text-slate-200">{value}</p>
    </div>
  );
}
