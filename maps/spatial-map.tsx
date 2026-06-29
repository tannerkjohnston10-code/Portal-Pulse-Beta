import type { HeatZone, SpatialFlow, SpatialEntity } from "@/platform/maps/core/map-types";
import { GeographicLegend } from "@/components/maps/geographic-legend";
import { TransferFlowLayer } from "@/components/maps/transfer-flow-layer";

export function SpatialMap({ title, flows, heatZones, entities }: { title: string; flows: SpatialFlow[]; heatZones: HeatZone[]; entities: SpatialEntity[] }) {
  return (
    <section className="rounded-lg border border-white/10 bg-slate-950/70 p-5">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-200">Spatial map</p>
          <h2 className="mt-2 text-2xl font-black text-white">{title}</h2>
        </div>
        <GeographicLegend />
      </div>
      <div className="relative mt-5 min-h-[34rem] overflow-hidden rounded-lg border border-white/10 bg-[#091827]">
        <div className="absolute inset-0 opacity-70 [background-image:linear-gradient(rgba(255,255,255,.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.06)_1px,transparent_1px)] [background-size:32px_32px]" />
        {heatZones.map((zone, index) => (
          <div key={zone.id} className="absolute rounded-full bg-amber-300/20 blur-xl" style={{ left: `${24 + index * 30}%`, top: `${22 + index * 20}%`, width: `${zone.intensity * 2}px`, height: `${zone.intensity * 2}px` }} />
        ))}
        <TransferFlowLayer flows={flows} />
        <div className="absolute inset-0">
          {entities.slice(0, 7).map((entity, index) => (
            <div key={entity.id} className="absolute rounded-md border border-white/10 bg-slate-950/85 px-2 py-1 text-xs font-black text-white" style={{ left: `${12 + index * 11}%`, top: `${18 + (index % 4) * 17}%` }}>
              {entity.displayName}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

