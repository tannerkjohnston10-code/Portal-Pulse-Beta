import { AIAssistantDock } from "@/components/command-center/ai-assistant-dock";
import { AIInsightsWidget } from "@/components/command-center/ai-insights-widget";
import { AthenaNetworkWidget } from "@/components/command-center/athena-network-widget";
import { BreakingFeedWidget } from "@/components/command-center/breaking-feed-widget";
import { CommandCenterLayout } from "@/components/command-center/command-center-layout";
import { CommandCenterTopbar } from "@/components/command-center/command-center-topbar";
import { ConferenceActivityWidget } from "@/components/command-center/conference-activity-widget";
import { DashboardCustomizer } from "@/components/command-center/dashboard-customizer";
import { DashboardGrid } from "@/components/command-center/dashboard-grid";
import { MarketMoversWidget } from "@/components/command-center/market-movers-widget";
import { MorningBriefingCard } from "@/components/command-center/morning-briefing-card";
import { NILMarketWidget } from "@/components/command-center/nil-market-widget";
import { PredictionMoversWidget } from "@/components/command-center/prediction-movers-widget";
import { OraclePredictionWidget } from "@/components/command-center/oracle-prediction-widget";
import { RankingMoversWidget } from "@/components/command-center/ranking-movers-widget";
import { SentinelIntakeWidget } from "@/components/command-center/sentinel/sentinel-intake-widget";
import { CartographerSpatialWidget } from "@/components/command-center/cartographer-spatial-widget";
import { ApolloReplayWidget } from "@/components/command-center/apollo-replay-widget";
import { AtlasRosterWidget } from "@/components/command-center/atlas-roster-widget";
import { MercuryMarketWidget } from "@/components/command-center/mercury-market-widget";
import { LabsWidget } from "@/components/command-center/labs-widget";
import { ProgramIntelligenceWidget } from "@/components/command-center/program-intelligence-widget";
import { GMWorkspaceWidget } from "@/components/command-center/gm-workspace-widget";
import { TeamMomentumWidget } from "@/components/command-center/team-momentum-widget";
import { TransferMapWidget } from "@/components/command-center/transfer-map-widget";
import { WatchlistWidget } from "@/components/command-center/watchlist-widget";
import { commandCenterService } from "@/server/services/command-center-service";
import { insightService } from "@/server/services/insight-service";
import { rankingService } from "@/server/services/ranking-service";
import { PortalPulsePlatform } from "@/platform";

export default async function CommandCenterPage() {
  const [
    snapshot,
    briefing,
    breakingUpdates,
    marketMovers,
    predictionMovers,
    teamMomentum,
    conferenceActivity,
    nilMovement,
    watchlistUpdates,
    transferMapEvents,
    searchResults,
    dashboardWidgets,
    insights,
    rankingMovers,
    athenaStatus,
    athenaFindings,
    athenaBriefing,
    oracleMover,
    sentinelSnapshot,
    cartographerFinding,
    apolloFinding,
    atlasFinding,
    mercuryMarket,
    labsWidget,
    programWidget,
    gmWidget
  ] = await Promise.all([
    commandCenterService.getCommandCenterSnapshot(),
    commandCenterService.getAIBriefing(),
    commandCenterService.getBreakingPortalUpdates(),
    commandCenterService.getMarketMovers(),
    commandCenterService.getPredictionMovers(),
    commandCenterService.getTeamMomentum(),
    commandCenterService.getConferenceActivity(),
    commandCenterService.getNILMovement(),
    commandCenterService.getWatchlistUpdates(),
    commandCenterService.getTransferMapEvents(),
    commandCenterService.searchCommandCenter(""),
    commandCenterService.getDashboardWidgets(),
    insightService.getTopInsights(5),
    rankingService.getCommandCenterRankingMovers(),
    Promise.resolve(PortalPulsePlatform.athena.networkStatus()),
    Promise.resolve(PortalPulsePlatform.athena.latestFindings()),
    Promise.resolve(PortalPulsePlatform.athena.briefing()),
    Promise.resolve(PortalPulsePlatform.athena.oracle.getTopPredictionMover()),
    Promise.resolve(PortalPulsePlatform.athena.sentinel.getDashboardSnapshot()),
    Promise.resolve(PortalPulsePlatform.athena.cartographer.getFinding()),
    Promise.resolve(PortalPulsePlatform.athena.apollo.getFinding()),
    Promise.resolve(PortalPulsePlatform.athena.atlas.getFinding()),
    Promise.resolve(PortalPulsePlatform.market.commandCenterWidget()),
    Promise.resolve(PortalPulsePlatform.labs.commandCenterWidget()),
    Promise.resolve(PortalPulsePlatform.programIntelligence.commandCenterWidget()),
    Promise.resolve(PortalPulsePlatform.gmWorkspace.commandCenterWidget())
  ]);

  return (
    <>
      <CommandCenterTopbar searchResults={searchResults} />
      <CommandCenterLayout snapshot={snapshot}>
        <DashboardCustomizer widgets={dashboardWidgets} />
        <DashboardGrid>
          <MorningBriefingCard briefing={briefing} watchlist={watchlistUpdates} snapshot={snapshot} />
          <AIInsightsWidget insights={insights} />
          <BreakingFeedWidget updates={breakingUpdates} />
          <MarketMoversWidget movers={marketMovers} />
          <TransferMapWidget events={transferMapEvents} />
          <TeamMomentumWidget teams={teamMomentum} />
          <ConferenceActivityWidget conferences={conferenceActivity} />
          <PredictionMoversWidget movers={predictionMovers} />
          <OraclePredictionWidget finding={oracleMover} />
          <SentinelIntakeWidget snapshot={sentinelSnapshot} />
          <CartographerSpatialWidget finding={cartographerFinding} />
          <ApolloReplayWidget finding={apolloFinding} />
          <AtlasRosterWidget finding={atlasFinding} />
          <MercuryMarketWidget market={mercuryMarket.todayMarket} topMovers={mercuryMarket.topMovers} conferences={mercuryMarket.trendingConferences} commentary={mercuryMarket.commentary} />
          <LabsWidget widget={labsWidget} />
          <ProgramIntelligenceWidget widget={programWidget} />
          <GMWorkspaceWidget widget={gmWidget} />
          <RankingMoversWidget movers={rankingMovers} />
          <AthenaNetworkWidget finding={athenaFindings[0]} onlineAgents={athenaStatus.onlineAgents} briefing={athenaBriefing} />
          <NILMarketWidget movements={nilMovement} />
          <WatchlistWidget updates={watchlistUpdates} />
          <AIAssistantDock />
        </DashboardGrid>
      </CommandCenterLayout>
    </>
  );
}
