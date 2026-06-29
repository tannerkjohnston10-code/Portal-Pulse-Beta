import type { ProgramIntelligenceWorkspace } from "@/platform/program-intelligence/core/program-intelligence-types";
import { AIInsightPanel } from "@/components/program-intelligence/ai-insight-panel";
import { ConfidencePanel } from "@/components/program-intelligence/confidence-panel";
import { ConferenceOverviewCard } from "@/components/program-intelligence/conference-overview-card";
import { DepthChartCard } from "@/components/program-intelligence/depth-chart-card";
import { EvidencePanel } from "@/components/program-intelligence/evidence-panel";
import { HistoricalReplayPreview } from "@/components/program-intelligence/historical-replay-preview";
import { KnowledgeGraphPreview } from "@/components/program-intelligence/knowledge-graph-preview";
import { MarketSummaryCard } from "@/components/program-intelligence/market-summary-card";
import { ProgramHeader } from "@/components/program-intelligence/program-header";
import { ProgramIntelligenceSummary } from "@/components/program-intelligence/program-intelligence-summary";
import { ProgramModuleShell } from "@/components/program-intelligence/program-module-shell";
import { ProgramSnapshotCard } from "@/components/program-intelligence/program-snapshot-card";
import { RecruitingOverviewCard } from "@/components/program-intelligence/recruiting-overview-card";
import { RosterOverviewCard } from "@/components/program-intelligence/roster-overview-card";
import { ScholarshipSummaryCard } from "@/components/program-intelligence/scholarship-summary-card";
import { TimelinePreview } from "@/components/program-intelligence/timeline-preview";
import { TransferActivityCard } from "@/components/program-intelligence/transfer-activity-card";

export function ProgramWorkspace({ workspace }: { workspace: ProgramIntelligenceWorkspace }) {
  const { modules } = workspace;

  return (
    <div className="mx-auto max-w-[1600px] px-4 py-8 sm:px-6 lg:px-8">
      <div className="grid gap-6">
        <ProgramHeader snapshot={workspace.snapshot} />
        <ProgramIntelligenceSummary summary={workspace.intelligenceSummary} />
        <ConfidencePanel snapshot={workspace.snapshot} />

        <section className="rounded-lg border border-amber-300/20 bg-amber-300/10 p-4 text-sm font-bold leading-6 text-amber-50">
          Digital Twin Engine: {workspace.digitalTwin.unifiedProgramState} Simulations and forecasts are placeholders only.
        </section>

        <section className="grid gap-6 xl:grid-cols-[1fr_0.8fr]">
          <ProgramSnapshotCard module={modules.programOverview} />
          <EvidencePanel module={modules.evidenceSummary} />
        </section>

        <section className="grid gap-6 xl:grid-cols-[0.9fr_1fr]">
          <RosterOverviewCard module={modules.rosterIntelligence} />
          <TransferActivityCard module={modules.transferActivity} />
        </section>

        <section className="grid gap-6 xl:grid-cols-[1fr_0.8fr]">
          <RecruitingOverviewCard module={modules.recruitingOverview} />
          <ProgramModuleShell {...modules.portalPipeline}>
            <ul className="list-disc space-y-2 pl-5 text-sm text-slate-300">
              {modules.portalPipeline.data.items.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </ProgramModuleShell>
        </section>

        <section className="grid gap-6 xl:grid-cols-[0.8fr_1fr]">
          <ProgramModuleShell {...modules.coachIntelligence}>
            <p className="text-sm text-slate-300">{modules.coachIntelligence.data.headCoach} · {modules.coachIntelligence.data.tenure}</p>
            <p className="mt-2 text-sm text-slate-400">{modules.coachIntelligence.data.recruitingProfile}</p>
          </ProgramModuleShell>
          <ScholarshipSummaryCard module={modules.scholarshipPlanning} />
        </section>

        <DepthChartCard module={modules.depthChart} />

        <section className="grid gap-6 xl:grid-cols-[1fr_0.9fr]">
          <KnowledgeGraphPreview module={modules.knowledgeGraph} />
          <HistoricalReplayPreview module={modules.historicalReplay} />
        </section>

        <section className="grid gap-6 xl:grid-cols-3">
          <MarketSummaryCard module={modules.marketIntelligence} />
          <ConferenceOverviewCard module={modules.conferencePosition} />
          <ProgramModuleShell {...modules.rankings}>
            <p className="text-sm text-slate-300">Transfer #{modules.rankings.data.transferRank} · Roster #{modules.rankings.data.rosterStrengthRank} · Momentum #{modules.rankings.data.momentumRank}</p>
          </ProgramModuleShell>
        </section>

        <section className="grid gap-6 xl:grid-cols-[1fr_0.9fr]">
          <TimelinePreview module={modules.timeline} />
          <AIInsightPanel module={modules.aiInsights} />
        </section>
      </div>
    </div>
  );
}
