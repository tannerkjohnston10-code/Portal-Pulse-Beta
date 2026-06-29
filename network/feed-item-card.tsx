import type { FeedItem } from "@/platform/network/network-types";
import { ConfidenceIndicator } from "@/components/network/confidence-indicator";
import { EvidenceIndicator } from "@/components/network/evidence-indicator";

export function FeedItemCard({ item }: { item: FeedItem }) {
  return (
    <article className="rounded-lg border border-white/10 bg-slate-950/70 p-4 transition hover:border-cyan-300/25 hover:bg-slate-900/80">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.16em] text-slate-500">{new Date(item.timestamp).toLocaleString()} · {item.itemType.replaceAll("_", " ")}</p>
          <h3 className="mt-2 text-lg font-black text-white">{item.title}</h3>
          <p className="mt-2 text-sm leading-6 text-slate-300">{item.summary}</p>
        </div>
        <ConfidenceIndicator confidence={item.confidence} score={item.confidenceScore} />
      </div>
      <div className="mt-4 flex flex-wrap items-center gap-2">
        <EvidenceIndicator evidence={item.evidence} />
        <span className="rounded-full bg-white/5 px-2 py-1 text-xs font-bold text-slate-400">{item.relatedProgram}</span>
        <span className="rounded-full bg-white/5 px-2 py-1 text-xs font-bold text-slate-400">{item.relatedAthlete}</span>
      </div>
      <details className="mt-4 rounded-md border border-white/10 bg-white/[0.03] p-3">
        <summary className="cursor-pointer text-xs font-black uppercase tracking-[0.14em] text-cyan-200">Explain This™</summary>
        <p className="mt-2 text-xs leading-5 text-slate-400">{item.explainThis}</p>
      </details>
    </article>
  );
}
