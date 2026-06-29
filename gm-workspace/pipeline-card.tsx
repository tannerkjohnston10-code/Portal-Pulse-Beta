import type { RecruitingPipeline } from "@/platform/gm-workspace/dashboard/gm-workspace-types";
import { GMCard } from "@/components/gm-workspace/gm-card";

export function PipelineCard({ pipeline }: { pipeline: RecruitingPipeline }) {
  return (
    <GMCard eyebrow="Recruiting Pipeline" title={`Pipeline Strength: ${pipeline.pipelineStrength}`}>
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.16em] text-slate-500">Regional focus</p>
          <p className="mt-2 text-sm font-semibold leading-6 text-slate-300">{pipeline.regionalFocus.join(" · ")}</p>
        </div>
        <div>
          <p className="text-xs font-black uppercase tracking-[0.16em] text-slate-500">Position priorities</p>
          <p className="mt-2 text-sm font-semibold leading-6 text-slate-300">{pipeline.positionPriorities.join(" · ")}</p>
        </div>
      </div>
      <p className="mt-4 text-sm leading-6 text-slate-400">{pipeline.futureClassBalance}</p>
      <p className="mt-3 rounded-md border border-cyan-300/20 bg-cyan-300/10 p-3 text-xs font-bold leading-5 text-cyan-50">{pipeline.cartographerSignal}</p>
    </GMCard>
  );
}
