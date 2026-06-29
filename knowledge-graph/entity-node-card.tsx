import type { GraphEntity } from "@/platform/knowledge-graph/core/graph-types";

export function EntityNodeCard({ entity }: { entity: GraphEntity }) {
  return (
    <article className="rounded-lg border border-white/10 bg-white/[0.03] p-4">
      <p className="text-xs font-black uppercase tracking-wide text-cyan-200">{entity.entityType}</p>
      <h3 className="mt-2 text-base font-black text-white">{entity.displayName}</h3>
      <p className="mt-2 text-xs font-bold text-slate-500">{entity.confidenceScore}% confidence · {entity.sourceIds.length} sources · Mock</p>
    </article>
  );
}

