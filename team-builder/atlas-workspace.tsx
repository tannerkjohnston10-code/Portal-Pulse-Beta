import type { AtlasWorkspaceData } from "@/platform/roster/core/roster-types";
import { AtlasInsightCard } from "@/components/team-builder/atlas-insight-card";
import { CoachWorkspacePreview } from "@/components/team-builder/coach-workspace-preview";
import { DepthChartBoard } from "@/components/team-builder/depth-chart-board";
import { OpportunityCard } from "@/components/team-builder/opportunity-card";
import { PositionNeedCard } from "@/components/team-builder/position-need-card";
import { RosterChemistryCard } from "@/components/team-builder/roster-chemistry-card";
import { RosterDNACard } from "@/components/team-builder/roster-dna-card";
import { RosterForecastChart } from "@/components/team-builder/roster-forecast-chart";
import { RosterSnapshot } from "@/components/team-builder/roster-snapshot";
import { ScholarshipTracker } from "@/components/team-builder/scholarship-tracker";
import { SimulationPanel } from "@/components/team-builder/simulation-panel";
import { SportSelector } from "@/components/team-builder/sport-selector";
import { StrategyRecommendationCard } from "@/components/team-builder/strategy-recommendation-card";
import { TeamGenomeCard } from "@/components/team-builder/team-genome-card";
import { TeamSelector } from "@/components/team-builder/team-selector";
import { TransferFitCard } from "@/components/team-builder/transfer-fit-card";
import { TrustNotice } from "@/components/ui/trust-notice";

export function AtlasWorkspace({ workspace }: { workspace: AtlasWorkspaceData }) {
  return (
    <div className="grid gap-6">
      <section className="grid gap-4 md:grid-cols-2">
        <TeamSelector teamName={workspace.snapshot.teamName} />
        <SportSelector sport={workspace.snapshot.sport} sportId={workspace.snapshot.sportId} />
      </section>

      <RosterSnapshot snapshot={workspace.snapshot} />
      <TrustNotice />

      <section className="grid gap-6 xl:grid-cols-[1fr_0.85fr]">
        <RosterDNACard dna={workspace.rosterDNA} />
        <RosterChemistryCard chemistry={workspace.rosterChemistry} />
      </section>

      <section className="grid gap-6 xl:grid-cols-[0.9fr_1fr]">
        <TeamGenomeCard genome={workspace.teamGenome} />
        <ScholarshipTracker scholarship={workspace.scholarshipIQ} />
      </section>

      <DepthChartBoard positions={workspace.depthChart} />

      <section className="grid gap-4 lg:grid-cols-3">
        {workspace.needs.map((need) => <PositionNeedCard key={need.id} need={need} />)}
      </section>

      <section>
        <p className="mb-4 text-xs font-black uppercase tracking-[0.18em] text-cyan-200">Transfer Fit</p>
        <div className="grid gap-4 lg:grid-cols-3">
          {workspace.transferFits.map((fit) => <TransferFitCard key={fit.id} fit={fit} />)}
        </div>
      </section>

      <section className="grid gap-4 lg:grid-cols-3">
        {workspace.opportunities.map((opportunity) => <OpportunityCard key={opportunity.id} opportunity={opportunity} />)}
      </section>

      <section className="grid gap-4 lg:grid-cols-3">
        {workspace.strategies.map((strategy) => <StrategyRecommendationCard key={strategy.id} strategy={strategy} />)}
      </section>

      <SimulationPanel simulations={workspace.simulations} />
      <RosterForecastChart forecast={workspace.forecast} />

      <section>
        <p className="mb-4 text-xs font-black uppercase tracking-[0.18em] text-cyan-200">Atlas Intelligence Cards</p>
        <div className="grid gap-4 md:grid-cols-2">
          {workspace.insights.map((insight) => <AtlasInsightCard key={insight.id} insight={insight} />)}
        </div>
      </section>

      <CoachWorkspacePreview />
    </div>
  );
}
