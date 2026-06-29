import { Activity, Database, Flame, Users } from "lucide-react";
import { PageFrame } from "@/components/layout/page-frame";
import { AlertBanner } from "@/components/ui/alert-banner";
import { ClaimStatusBadge } from "@/components/ui/claim-status-badge";
import { ConfidenceBadge } from "@/components/ui/confidence-badge";
import { DataTable } from "@/components/ui/data-table";
import { EmptyState } from "@/components/ui/empty-state";
import { ErrorState } from "@/components/ui/error-state";
import { FilterBar } from "@/components/ui/filter-bar";
import { IntelligenceCard } from "@/components/ui/intelligence-card";
import { LoadingSkeleton } from "@/components/ui/loading-skeleton";
import { MetricPill } from "@/components/ui/metric-pill";
import { MovementBadge } from "@/components/ui/movement-badge";
import { NILStatusBadge } from "@/components/ui/nil-status-badge";
import { PredictionBar } from "@/components/ui/prediction-bar";
import { SearchInput } from "@/components/ui/search-input";
import { SectionHeader } from "@/components/ui/section-header";
import { SourceCitation } from "@/components/ui/source-citation";
import { StatCard } from "@/components/ui/stat-card";
import { StatusBadge } from "@/components/ui/status-badge";
import { Tabs } from "@/components/ui/tabs";
import { Timeline } from "@/components/ui/timeline";
import { TimelineEvent } from "@/components/ui/timeline-event";
import { TrustNotice } from "@/components/ui/trust-notice";
import { colors, cardStyles, typography } from "@/lib/design-tokens";
import { mockPlayers } from "@/data/mock/portal-data";

const swatches = [
  ["Background", colors.dark.backgroundPrimary],
  ["Card", "#0f172a"],
  ["Accent", colors.dark.accentPrimary],
  ["Gold", colors.dark.accentSecondary],
  ["Success", colors.dark.success],
  ["Warning", colors.dark.warning],
  ["Danger", colors.dark.danger],
  ["Info", colors.dark.info]
];

export default function DesignSystemPage() {
  const source = mockPlayers[0].source;

  return (
    <PageFrame
      eyebrow="Design system"
      title="Portal Pulse Interface System"
      description="A dark, dense, source-backed component language for premium college athletics intelligence."
    >
      <div className="grid gap-10">
        <TrustNotice />

        <section>
          <SectionHeader title="Colors" description="Dark mode is primary. Light mode tokens are prepared for future theme support." />
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {swatches.map(([label, value]) => (
              <div key={label} className={`${cardStyles} p-4`}>
                <div className="h-16 rounded-md border border-white/10" style={{ backgroundColor: value }} />
                <p className="mt-3 font-black text-white">{label}</p>
                <p className="text-xs font-semibold text-slate-500">{value}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <SectionHeader title="Typography" />
          <div className={`${cardStyles} grid gap-3 p-5`}>
            <p className={typography.pageTitle}>Page Title</p>
            <p className={typography.sectionTitle}>Section Title</p>
            <p className={typography.cardTitle}>Card Title</p>
            <p className={typography.body}>Body text for dense intelligence surfaces should remain readable and calm.</p>
            <p className={typography.metadata}>Metadata text · Updated Jun 28, 12:00 PM</p>
            <p className={typography.statNumber}>94.7</p>
          </div>
        </section>

        <section>
          <SectionHeader title="Badges" />
          <div className={`${cardStyles} flex flex-wrap gap-2 p-5`}>
            <ConfidenceBadge level="high" score={91} />
            <ConfidenceBadge level="medium" score={62} />
            <ConfidenceBadge level="low" score={34} />
            <ConfidenceBadge level="conflicting" score={40} />
            <StatusBadge status="entered" />
            <ClaimStatusBadge status="needs_review" />
            <NILStatusBadge status="estimated" />
            <MovementBadge movement="up" value="+3" />
            <MovementBadge movement="down" value="-1" />
          </div>
        </section>

        <section>
          <SectionHeader title="Cards And Metrics" />
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            <StatCard icon={Users} label="Players Tracked" value="1,284" note="Mock value" />
            <StatCard icon={Flame} label="Portal Velocity" value="+18%" note="Mock trend" />
            <StatCard icon={Database} label="Sources Indexed" value="842" note="Mock value" />
            <StatCard icon={Activity} label="Confidence Avg." value="71%" note="Mock value" />
          </div>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <IntelligenceCard title="Why We Believe This" subtitle="Trust UI block" meta={<ConfidenceBadge level="medium" score={64} />}>
              <p className="text-sm leading-6 text-slate-400">Confidence combines source quality, recency, corroboration, and conflict checks.</p>
              <div className="mt-3"><SourceCitation source={source} verified /></div>
            </IntelligenceCard>
            <IntelligenceCard title="Metric Pills" subtitle="Compact dashboard metadata">
              <div className="flex flex-wrap gap-2">
                <MetricPill label="Sport" value="Football" />
                <MetricPill label="Status" value="Entered" />
                <MetricPill label="Need" value="QB" />
              </div>
            </IntelligenceCard>
          </div>
        </section>

        <section>
          <SectionHeader title="Inputs And Navigation" />
          <div className="grid gap-4">
            <SearchInput placeholder="Search players, teams, sources..." />
            <FilterBar filters={["Sport", "Position", "Status", "Conference"]} />
            <Tabs tabs={["Overview", "Timeline", "Teams", "NIL", "Sources"]} />
          </div>
        </section>

        <section>
          <SectionHeader title="Tables" />
          <DataTable
            headers={["Player", "Status", "Confidence", "Source"]}
            rows={[
              ["Mock Player", <StatusBadge key="s" status="entered" />, <ConfidenceBadge key="c" level="medium" score={64} />, "Mock source"],
              ["Example Athlete", <StatusBadge key="s2" status="committed" />, <ConfidenceBadge key="c2" level="high" score={88} />, "Official placeholder"]
            ]}
          />
        </section>

        <section>
          <SectionHeader title="Timeline And Predictions" />
          <div className="grid gap-4 lg:grid-cols-2">
            <div className={`${cardStyles} p-5`}>
              <Timeline>
                <TimelineEvent title="Entered Portal" detail="Mock event for timeline component." timestamp="Jun 28, 12:00 PM" confidence="medium" />
                <TimelineEvent title="Visit Scheduled" detail="Mock event with source-backed future structure." timestamp="Jul 2, 6:00 PM" confidence="low" />
              </Timeline>
            </div>
            <div className={`${cardStyles} grid gap-4 p-5`}>
              <PredictionBar label="Metro University" value={42} />
              <PredictionBar label="Southern Tech" value={24} />
              <PredictionBar label="Field" value={34} />
            </div>
          </div>
        </section>

        <section>
          <SectionHeader title="States" />
          <div className="grid gap-4 md:grid-cols-3">
            <EmptyState title="No Records" description="Empty states should explain what is missing without blaming the user." />
            <ErrorState title="Unable To Load" description="Error states should be calm, direct, and actionable." />
            <div className={cardStyles + " p-5"}><LoadingSkeleton /></div>
          </div>
        </section>

        <section>
          <SectionHeader title="Trust Notices" />
          <div className="grid gap-3">
            <AlertBanner tone="info">Projection disclaimer: predictions are model views, not facts.</AlertBanner>
            <AlertBanner tone="warning">Rumor badge: this item requires source review before confidence can rise.</AlertBanner>
            <AlertBanner tone="danger">Conflicting report: sources disagree and admin review is required.</AlertBanner>
            <AlertBanner tone="success">Verified source: official or directly confirmed source attached.</AlertBanner>
          </div>
        </section>
      </div>
    </PageFrame>
  );
}
