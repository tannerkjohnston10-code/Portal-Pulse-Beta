import { notFound } from "next/navigation";
import { CompareWatchlistPanel } from "@/components/players/intelligence/compare-watchlist-panel";
import { HistoricalReplayPanel } from "@/components/players/intelligence/historical-replay-panel";
import { InterestedSchoolsPanel } from "@/components/players/intelligence/interested-schools-panel";
import { NILIntelligencePanel } from "@/components/players/intelligence/nil-intelligence-panel";
import { PlayerHero } from "@/components/players/intelligence/player-hero";
import { PortalPulseScorePanel } from "@/components/players/intelligence/portal-pulse-score";
import { PredictionCenterPanel } from "@/components/players/intelligence/prediction-center-panel";
import { RelationshipGraphPanel } from "@/components/players/intelligence/relationship-graph-panel";
import { RosterFitPanel } from "@/components/players/intelligence/roster-fit-panel";
import { SourceNewsPanel } from "@/components/players/intelligence/source-news-panel";
import { StatisticsPanel } from "@/components/players/intelligence/statistics-panel";
import { TransferTimelinePanel } from "@/components/players/intelligence/transfer-timeline-panel";
import { PageFrame } from "@/components/layout/page-frame";
import { MockDataNotice } from "@/components/ui/mock-data-notice";
import { Tabs } from "@/components/ui/tabs";
import { TrustNotice } from "@/components/ui/trust-notice";
import { buildPlayerIntelligence } from "@/lib/player-intelligence/player-intelligence";
import { nilService } from "@/server/services/nil-service";
import { playerService } from "@/server/services/player-service";
import { predictionService } from "@/server/services/prediction-service";
import { sourceService } from "@/server/services/source-service";
import { visitService } from "@/server/services/visit-service";

const tabs = [
  "Command Center",
  "Timeline",
  "Predictions",
  "Schools",
  "Roster Fit",
  "NIL",
  "Sources",
  "Graph",
  "Stats",
  "Replay",
  "Compare"
];

export default async function PlayerIntelligenceCenterPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const player = await playerService.getPlayerDetails(id).catch(() => undefined);

  if (!player) {
    notFound();
  }

  const [timeline, predictions, nilReports, visits, sources] = await Promise.all([
    playerService.buildPlayerTimeline(player.id),
    predictionService.getPredictionsForPlayer(player.id),
    nilService.getNILReportsForPlayer(player.id),
    visitService.getVisitsForPlayer(player.id),
    sourceService.getSources()
  ]);

  const prediction = predictions[0];
  const nilReport = nilReports[0];
  const playerSource = sources.find((source) => source.id === player.source.id) ?? player.source;
  const intelligence = buildPlayerIntelligence(player, prediction, nilReport, visits, timeline);

  return (
    <PageFrame
      eyebrow="Player Intelligence Center"
      title={player.name}
      description="A source-backed player command center for transfer movement, school interest, predictions, NIL context, roster fit, timelines, relationship intelligence, and future premium workflows."
    >
      <div className="grid gap-8">
        <MockDataNotice />
        <TrustNotice />
        <PlayerHero player={player} intelligence={intelligence} />
        <Tabs tabs={tabs} />

        <section className="grid gap-6 xl:grid-cols-[1fr_0.95fr]">
          <PortalPulseScorePanel intelligence={intelligence} />
          <PredictionCenterPanel prediction={prediction} />
        </section>

        <TransferTimelinePanel timeline={timeline} fallbackUpdatedAt={player.lastUpdated} />

        <section className="grid gap-6">
          <InterestedSchoolsPanel intelligence={intelligence} />
          <RosterFitPanel intelligence={intelligence} />
        </section>

        <section className="grid gap-6 xl:grid-cols-[0.85fr_1.15fr]">
          <NILIntelligencePanel report={nilReport} />
          <RelationshipGraphPanel intelligence={intelligence} />
        </section>

        <SourceNewsPanel intelligence={intelligence} source={playerSource} />

        <section className="grid gap-6">
          <StatisticsPanel />
          <HistoricalReplayPanel />
          <CompareWatchlistPanel />
        </section>
      </div>
    </PageFrame>
  );
}
