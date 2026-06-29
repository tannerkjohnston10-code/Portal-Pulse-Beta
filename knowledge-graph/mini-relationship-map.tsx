import type { GraphNetwork } from "@/platform/knowledge-graph/core/graph-types";

export function MiniRelationshipMap({ network }: { network: GraphNetwork }) {
  return (
    <div className="relative min-h-80 overflow-hidden rounded-lg border border-white/10 bg-slate-950/70 p-5">
      <div className="absolute left-1/2 top-1/2 grid h-24 w-28 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-lg border border-cyan-300/40 bg-cyan-300/15 p-2 text-center text-sm font-black text-white">
        {network.entities[0]?.displayName ?? "Mock graph"}
      </div>
      {network.entities.slice(1, 8).map((entity, index) => {
        const positions = ["left-[8%] top-[12%]", "right-[8%] top-[12%]", "left-[10%] bottom-[14%]", "right-[10%] bottom-[14%]", "left-[42%] top-[6%]", "left-[42%] bottom-[6%]", "right-[38%] top-[32%]"];
        return (
          <div key={entity.id} className={`absolute ${positions[index] ?? "left-[5%] top-[45%]"} w-28 rounded-md border border-white/10 bg-white/5 p-2 text-center`}>
            <p className="text-xs font-black text-white">{entity.displayName}</p>
            <p className="mt-1 text-[10px] font-bold uppercase tracking-wide text-slate-500">{entity.entityType}</p>
          </div>
        );
      })}
      <div className="absolute inset-x-5 bottom-5 rounded-md bg-white/5 px-3 py-2 text-xs text-slate-400">
        {network.relationships.length} mock edges · {network.sourceCount} sources · inferred edges require Core review.
      </div>
    </div>
  );
}

