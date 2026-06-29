import type { GraphNetwork } from "@/platform/knowledge-graph/core/graph-types";

export function NetworkSummaryCard({ network }: { network: GraphNetwork }) {
  return (
    <article className="rounded-lg border border-white/10 bg-slate-950/70 p-5">
      <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-200">{network.title}</p>
      <h2 className="mt-2 text-xl font-black text-white">{network.entities.length} entities · {network.relationships.length} relationships</h2>
      <p className="mt-3 text-sm leading-6 text-slate-400">{network.summary}</p>
      <div className="mt-4 flex flex-wrap gap-2 text-xs font-bold text-slate-500">
        <span>{network.confidenceScore}% avg confidence</span>
        <span>{network.evidenceCount} evidence</span>
        <span>{network.sourceCount} sources</span>
        <span>Mock</span>
      </div>
    </article>
  );
}

