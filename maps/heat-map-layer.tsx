import type { HeatZone } from "@/platform/maps/core/map-types";

export function HeatMapLayer({ zones }: { zones: HeatZone[] }) {
  return (
    <div className="grid gap-3">
      {zones.map((zone) => (
        <article key={zone.id} className="rounded-lg border border-amber-300/15 bg-amber-300/10 p-3">
          <p className="text-sm font-black text-amber-50">{zone.displayName}</p>
          <div className="mt-2 h-2 rounded-full bg-slate-800">
            <div className="h-2 rounded-full bg-amber-300" style={{ width: `${zone.intensity}%` }} />
          </div>
          <p className="mt-2 text-xs font-bold text-amber-100/80">{zone.metricLabel} · {zone.intensity}</p>
        </article>
      ))}
    </div>
  );
}

