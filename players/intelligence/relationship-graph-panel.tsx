import { IntelligenceCard } from "@/components/ui/intelligence-card";
import type { PlayerIntelligence } from "@/lib/player-intelligence/player-intelligence";

export function RelationshipGraphPanel({ intelligence }: { intelligence: PlayerIntelligence }) {
  return (
    <IntelligenceCard title="Relationship Graph" subtitle="Interactive graph placeholder">
      <div className="relative min-h-80 overflow-hidden rounded-lg border border-white/10 bg-slate-950/70 p-5">
        <div className="absolute left-1/2 top-1/2 grid h-24 w-24 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-cyan-300/40 bg-cyan-300/15 text-center text-sm font-black text-white">
          Player
        </div>
        {intelligence.graphNodes.slice(1).map((node, index) => {
          const positions = [
            "left-[8%] top-[12%]",
            "right-[8%] top-[16%]",
            "left-[12%] bottom-[14%]",
            "right-[12%] bottom-[12%]",
            "left-[43%] top-[6%]"
          ];
          return (
            <div key={node.label} className={`absolute ${positions[index] ?? "right-[40%] bottom-[8%]"} grid h-20 w-24 place-items-center rounded-lg border border-white/10 bg-white/5 p-2 text-center`}>
              <p className="text-xs font-black text-white">{node.label}</p>
              <p className="text-[10px] font-bold uppercase tracking-wide text-slate-500">{node.type}</p>
            </div>
          );
        })}
        <div className="absolute inset-x-5 bottom-5 rounded-md bg-white/5 px-3 py-2 text-xs text-slate-400">
          Future graph will connect schools, coaches, teammates, high school, visits, NIL collectives, competitors, and source articles.
        </div>
      </div>
    </IntelligenceCard>
  );
}
