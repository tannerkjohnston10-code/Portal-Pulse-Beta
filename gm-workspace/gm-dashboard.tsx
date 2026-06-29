import type { GMDashboardData } from "@/platform/gm-workspace/dashboard/gm-workspace-types";
import { ConfidencePanel } from "@/components/gm-workspace/confidence-panel";
import { EvidencePanel } from "@/components/gm-workspace/evidence-panel";
import { ExecutiveBriefCard } from "@/components/gm-workspace/executive-brief-card";
import { ExecutiveRecommendationCard } from "@/components/gm-workspace/executive-recommendation-card";
import { GMCard } from "@/components/gm-workspace/gm-card";
import { InvestmentBoard } from "@/components/gm-workspace/investment-board";
import { OpportunityCard } from "@/components/gm-workspace/opportunity-card";
import { OrganizationSnapshot } from "@/components/gm-workspace/organization-snapshot";
import { PipelineCard } from "@/components/gm-workspace/pipeline-card";
import { RiskCard } from "@/components/gm-workspace/risk-card";
import { RosterHealthCard } from "@/components/gm-workspace/roster-health-card";
import { ScenarioPlanningCard } from "@/components/gm-workspace/scenario-planning-card";
import { ScholarshipIQCard } from "@/components/gm-workspace/scholarship-iq-card";
import { TransferPortfolio } from "@/components/gm-workspace/transfer-portfolio";

export function GMDashboard({ dashboard }: { dashboard: GMDashboardData }) {
  return (
    <div className="grid gap-6">
      <OrganizationSnapshot dashboard={dashboard} />
      <div className="grid gap-4 lg:grid-cols-3">
        <ConfidencePanel dashboard={dashboard} />
        <EvidencePanel dashboard={dashboard} />
        <div className="rounded-md border border-amber-300/20 bg-amber-300/10 p-4 text-sm font-bold leading-6 text-amber-50">
          {dashboard.simulationReminder}
        </div>
      </div>
      <ExecutiveBriefCard brief={dashboard.executiveBrief} />
      <section className="grid gap-6 xl:grid-cols-[1fr_0.9fr]">
        <RosterHealthCard health={dashboard.rosterHealth} />
        <ScholarshipIQCard scholarship={dashboard.scholarshipIQ} />
      </section>
      <section className="grid gap-6 xl:grid-cols-2">
        <GMCard eyebrow="Roster Identity" title={`Roster DNA: ${dashboard.rosterDNA.score}`}>
          <p className="text-sm leading-6 text-slate-300">{dashboard.rosterDNA.summary}</p>
          <p className="mt-3 text-xs font-black uppercase tracking-[0.14em] text-cyan-200">{dashboard.rosterDNA.confidence} confidence</p>
        </GMCard>
        <GMCard eyebrow="Team Genome" title="Program Identity Placeholder">
          <p className="text-sm leading-6 text-slate-300">{dashboard.teamGenome.summary}</p>
          <p className="mt-3 text-xs font-black uppercase tracking-[0.14em] text-cyan-200">{dashboard.teamGenome.confidence} confidence</p>
        </GMCard>
      </section>
      <section className="grid gap-4 lg:grid-cols-2">
        {dashboard.transferRisk.map((risk) => <RiskCard key={risk.id} item={risk} />)}
        {dashboard.transferOpportunities.map((opportunity) => <OpportunityCard key={opportunity.id} item={opportunity} />)}
      </section>
      <TransferPortfolio portfolio={dashboard.transferPortfolio} />
      <PipelineCard pipeline={dashboard.recruitingPipeline} />
      <section>
        <p className="mb-4 text-xs font-black uppercase tracking-[0.18em] text-cyan-200">Organizational Planning</p>
        <div className="grid gap-4 lg:grid-cols-3">
          {dashboard.organizationalPlans.map((plan) => <ScenarioPlanningCard key={plan.id} plan={plan} />)}
        </div>
      </section>
      <section>
        <p className="mb-4 text-xs font-black uppercase tracking-[0.18em] text-cyan-200">AI Executive Council™</p>
        <div className="grid gap-4 lg:grid-cols-3">
          {dashboard.executiveCouncil.map((recommendation) => <ExecutiveRecommendationCard key={recommendation.id} recommendation={recommendation} />)}
        </div>
      </section>
      <InvestmentBoard items={dashboard.investmentBoard} />
      <GMCard eyebrow="Reports" title="Executive Reporting Placeholders">
        <div className="grid gap-3 md:grid-cols-3">
          {dashboard.reports.map((report) => (
            <div key={report.id} className="rounded-md border border-white/10 bg-slate-950/70 p-4">
              <p className="text-sm font-black text-white">{report.title}</p>
              <p className="mt-2 text-xs font-bold uppercase tracking-[0.14em] text-slate-500">{report.cadence} · {report.exportStatus}</p>
              <p className="mt-3 text-xs leading-5 text-slate-400">{report.sections.join(" · ")}</p>
            </div>
          ))}
        </div>
      </GMCard>
    </div>
  );
}
