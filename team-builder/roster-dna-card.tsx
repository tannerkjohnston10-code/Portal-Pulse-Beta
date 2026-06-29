import type { RosterDNA } from "@/platform/roster/core/roster-types";
import { ConfidenceBadge } from "@/components/ui/confidence-badge";

export function RosterDNACard({ dna }: { dna: RosterDNA }) {
  return (
    <section className="rounded-lg border border-white/10 bg-slate-950/70 p-5">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-200">Roster DNA</p>
          <h2 className="mt-2 text-3xl font-black text-white">{dna.score}</h2>
        </div>
        <ConfidenceBadge level={dna.confidence} />
      </div>
      <div className="mt-4 grid gap-3">
        {dna.categories.map((category) => (
          <div key={category.label}>
            <div className="flex justify-between text-xs font-black uppercase tracking-wide text-slate-500">
              <span>{category.label}</span>
              <span>{category.score}</span>
            </div>
            <div className="mt-2 h-2 rounded-full bg-white/10"><div className="h-2 rounded-full bg-cyan-300" style={{ width: `${category.score}%` }} /></div>
            <p className="mt-2 text-xs font-semibold text-slate-400">{category.explanation}</p>
          </div>
        ))}
      </div>
      <p className="mt-4 text-xs font-bold text-slate-500">Strengths: {dna.strengths.join(", ")} · Weaknesses: {dna.weaknesses.join(", ")} · Mock</p>
    </section>
  );
}

