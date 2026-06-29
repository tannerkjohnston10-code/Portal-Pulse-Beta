import type { TeamGenome } from "@/platform/roster/core/roster-types";
import { ConfidenceBadge } from "@/components/ui/confidence-badge";

export function TeamGenomeCard({ genome }: { genome: TeamGenome }) {
  return (
    <section className="rounded-lg border border-white/10 bg-slate-950/70 p-5">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-200">Team Genome</p>
          <h2 className="mt-2 text-xl font-black text-white">{genome.rosterIdentity}</h2>
        </div>
        <ConfidenceBadge level={genome.confidence} />
      </div>
      <div className="mt-4 grid gap-3">
        {[genome.recruitingIdentity, genome.transferIdentity, genome.developmentIdentity, genome.pipelineIdentity, genome.styleOfPlayPlaceholder, genome.longTermRosterTrend].map((item) => (
          <div key={item} className="rounded-md border border-white/10 bg-white/[0.03] p-3 text-sm font-semibold leading-6 text-slate-300">{item}</div>
        ))}
      </div>
    </section>
  );
}

