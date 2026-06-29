import { BrainCircuit } from "lucide-react";
import type { TeamAIStoryline } from "@/types/team-intelligence";
import { ConfidenceBadge } from "@/components/ui/confidence-badge";
import { TeamPanel } from "@/components/teams/intelligence/team-panel";

export function AIStorylinesWidget({ storylines }: { storylines: TeamAIStoryline[] }) {
  return (
    <TeamPanel title="What the AI Is Watching" subtitle="Mock explainable storylines with evidence, confidence, players, positions, and source counts." icon={BrainCircuit}>
      <div className="grid gap-3">
        {storylines.map((storyline) => (
          <article key={storyline.id} className="rounded-lg border border-white/10 bg-white/[0.04] p-4">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <h3 className="text-base font-black text-white">{storyline.title}</h3>
                <p className="mt-2 text-sm font-semibold leading-6 text-slate-300">{storyline.summary}</p>
              </div>
              <ConfidenceBadge level={storyline.confidence} score={storyline.confidenceScore} />
            </div>
            <div className="mt-4 flex flex-wrap gap-2 text-xs font-bold text-slate-400">
              <span className="rounded-full bg-white/5 px-2.5 py-1">{storyline.evidenceCount} evidence</span>
              <span className="rounded-full bg-white/5 px-2.5 py-1">{storyline.sourceCount} sources</span>
              <span className="rounded-full bg-white/5 px-2.5 py-1">{storyline.relatedPositions.join(", ")}</span>
              <span className="rounded-full bg-white/5 px-2.5 py-1">{storyline.relatedPlayers.join(", ")}</span>
            </div>
          </article>
        ))}
      </div>
    </TeamPanel>
  );
}
