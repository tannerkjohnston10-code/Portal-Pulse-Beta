import type { MapLayer } from "@/platform/maps/core/map-types";
import { LayerSelector } from "@/components/maps/layer-selector";
import { TimelineSliderPlaceholder } from "@/components/maps/timeline-slider-placeholder";

export function MapFilterPanel({ layers }: { layers: MapLayer[] }) {
  return (
    <aside className="rounded-lg border border-white/10 bg-slate-950/70 p-4">
      <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-200">Layer controls</p>
      <div className="mt-4">
        <LayerSelector layers={layers} />
      </div>
      <div className="mt-4">
        <TimelineSliderPlaceholder />
      </div>
    </aside>
  );
}

