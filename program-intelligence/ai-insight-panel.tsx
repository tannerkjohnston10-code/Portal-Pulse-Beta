import type { ProgramAIInsight, ProgramIntelligenceModule } from "@/platform/program-intelligence/core/program-intelligence-types";
import { InformationTypeBadge } from "@/components/program-intelligence/information-type-badge";
import { ProgramModuleShell } from "@/components/program-intelligence/program-module-shell";

export function AIInsightPanel({ module }: { module: ProgramIntelligenceModule<ProgramAIInsight[]> }) {
  return (
    <ProgramModuleShell {...module}>
      <div className="grid gap-3">
        {module.data.map((insight) => (
          <article key={insight.id} className="rounded-md border border-white/10 bg-slate-900/70 p-3">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <p className="text-xs font-black uppercase tracking-wide text-cyan-200">{insight.agent}</p>
                <h3 className="mt-1 font-black text-white">{insight.title}</h3>
              </div>
              <InformationTypeBadge type={insight.contentType} />
            </div>
            <p className="mt-2 text-sm leading-6 text-slate-300">{insight.summary}</p>
            <p className="mt-2 text-xs font-bold text-slate-500">Confidence {insight.confidenceScore}% · Evidence {insight.evidenceIds.length}</p>
          </article>
        ))}
      </div>
    </ProgramModuleShell>
  );
}
