import type { SpatialFlow } from "@/platform/maps/core/map-types";

export function RecruitingPipelineLayer({ pipelines }: { pipelines: SpatialFlow[] }) {
  return (
    <div className="grid gap-3">
      {pipelines.map((pipeline) => (
        <article key={pipeline.id} className="rounded-lg border border-emerald-400/15 bg-emerald-400/10 p-3">
          <p className="text-sm font-black text-emerald-50">{pipeline.displayName}</p>
          <p className="mt-1 text-xs font-bold text-emerald-100/80">{pipeline.strength} strength · {pipeline.sourceCount} mock sources · {pipeline.confidence}</p>
        </article>
      ))}
    </div>
  );
}

