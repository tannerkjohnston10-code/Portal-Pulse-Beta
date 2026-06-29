import { Route } from "lucide-react";
import type { RecruitingPipeline } from "@/types/team-intelligence";
import { TeamPanel } from "@/components/teams/intelligence/team-panel";

export function RecruitingPipelineWidget({ pipeline }: { pipeline: RecruitingPipeline }) {
  return (
    <TeamPanel title="Recruiting & Pipeline" subtitle="Future recruiting integration for high school, state, junior college, and staff relationship pipelines." icon={Route}>
      <div className="grid gap-3 sm:grid-cols-2">
        <Metric label="Recruiting Class" value={pipeline.recruitingClassRank} />
        <Metric label="Transfer Class" value={pipeline.transferClassRank} />
      </div>
      <div className="mt-4 grid gap-3 md:grid-cols-2">
        <Info label="High school pipeline" items={pipeline.highSchoolPipeline} />
        <Info label="State pipeline" items={pipeline.statePipeline} />
        <Info label="Junior college pipeline" items={pipeline.juniorCollegePipeline} />
        <Info label="Coaching relationships" items={pipeline.coachingRelationships} />
      </div>
    </TeamPanel>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border border-white/10 bg-white/[0.04] p-4">
      <p className="text-xs font-black uppercase tracking-wide text-slate-500">{label}</p>
      <p className="mt-2 text-2xl font-black text-white">{value}</p>
    </div>
  );
}

function Info({ label, items }: { label: string; items: string[] }) {
  return (
    <div className="rounded-md border border-white/10 bg-white/[0.04] p-3">
      <p className="text-xs font-black uppercase tracking-wide text-slate-500">{label}</p>
      <div className="mt-2 flex flex-wrap gap-2">
        {items.map((item) => (
          <span key={item} className="rounded-full bg-white/5 px-2.5 py-1 text-xs font-bold text-slate-300">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
