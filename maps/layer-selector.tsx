import type { MapLayer } from "@/platform/maps/core/map-types";

export function LayerSelector({ layers }: { layers: MapLayer[] }) {
  return (
    <div className="grid gap-2">
      {layers.map((layer) => (
        <label key={layer.id} className="flex items-center justify-between gap-3 rounded-md border border-white/10 bg-white/[0.03] px-3 py-2 text-sm font-bold text-slate-300">
          <span>{layer.displayName}</span>
          <input type="checkbox" defaultChecked={layer.enabledByDefault} disabled className="h-4 w-4 accent-cyan-300" aria-label={`${layer.displayName} layer placeholder`} />
        </label>
      ))}
    </div>
  );
}

