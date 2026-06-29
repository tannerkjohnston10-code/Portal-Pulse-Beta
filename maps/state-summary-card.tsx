import type { SpatialEntity } from "@/platform/maps/core/map-types";

export function StateSummaryCard({ state }: { state: SpatialEntity }) {
  return (
    <article className="rounded-lg border border-white/10 bg-white/[0.03] p-4">
      <p className="text-xs font-black uppercase tracking-wide text-slate-500">State</p>
      <h3 className="mt-2 text-lg font-black text-white">{state.displayName}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-400">{state.confidence} confidence · {state.sourceIds.length} mock sources · approximate coordinates</p>
    </article>
  );
}

