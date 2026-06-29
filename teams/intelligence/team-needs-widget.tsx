import { AlertTriangle } from "lucide-react";
import type { TeamNeedItem, TeamNeedUrgency } from "@/types/team-intelligence";
import { ConfidenceBadge } from "@/components/ui/confidence-badge";
import { TeamPanel } from "@/components/teams/intelligence/team-panel";

const urgencyStyles: Record<TeamNeedUrgency, string> = {
  critical: "text-rose-200 bg-rose-400/12 border-rose-400/30",
  high: "text-orange-200 bg-orange-400/12 border-orange-400/30",
  moderate: "text-yellow-100 bg-yellow-300/12 border-yellow-300/30",
  stable: "text-emerald-200 bg-emerald-400/12 border-emerald-400/30",
  surplus: "text-cyan-200 bg-cyan-300/12 border-cyan-300/30"
};

export function TeamNeedsWidget({ needs }: { needs: TeamNeedItem[] }) {
  return (
    <TeamPanel title="Team Needs Engine" subtitle="Position urgency, depth, transfer targets, impact, scholarships, and confidence." icon={AlertTriangle}>
      <div className="grid gap-3">
        {needs.map((need) => (
          <article key={need.id} className="rounded-lg border border-white/10 bg-white/[0.04] p-4">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <h3 className="text-base font-black text-white">{need.position}</h3>
                <p className="mt-1 text-xs font-bold text-slate-500">Targets: {need.transferTargets.join(", ") || "No mock target listed"}</p>
              </div>
              <span className={`rounded-full border px-2.5 py-1 text-xs font-black uppercase tracking-wide ${urgencyStyles[need.urgency]}`}>{need.urgency}</span>
            </div>
            <div className="mt-4 grid gap-3 md:grid-cols-[1fr_12rem] md:items-center">
              <div>
                <div className="mb-1 flex justify-between text-xs font-bold text-slate-400">
                  <span>Urgency score</span>
                  <span>{need.urgencyScore}</span>
                </div>
                <div className="h-2 rounded-full bg-white/10">
                  <div className="h-full rounded-full bg-rose-300" style={{ width: `${need.urgencyScore}%` }} />
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-2 md:justify-end">
                <ConfidenceBadge level={need.confidence} />
                <span className="text-xs font-bold text-slate-400">{need.currentDepth} depth · {need.scholarshipAvailability} open</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </TeamPanel>
  );
}
