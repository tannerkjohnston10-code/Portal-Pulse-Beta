import type { SpatialEntity } from "@/platform/maps/core/map-types";

export function RegionSummaryCard({ region }: { region: SpatialEntity }) {
  return (
    <article className="rounded-lg border border-white/10 bg-white/[0.03] p-4">
      <p className="text-xs font-black uppercase tracking-wide text-cyan-200">Region</p>
      <h3 className="mt-2 text-lg font-black text-white">{region.displayName}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-400">{region.relatedEntities.length} related graph entities · {region.confidence} confidence · Mock</p>
    </article>
  );
}

