import { teamIntelligenceService } from "@/server/services/team-intelligence-service";
import { knowledgeGraphService } from "@/platform/knowledge-graph/core/knowledge-graph-service";
import { transferMarketService } from "@/platform/market/exchange/transfer-market-service";
import { historicalReplayService } from "@/platform/history/replay/historical-replay-service";
import {
  mockEvidenceSummary,
  mockHistoricalReplayPreview,
  mockKnowledgeGraphPreview,
  mockMarketSummary,
  mockPortalPipeline,
  mockProgramCommandCenterWidget,
  mockProgramIdentity,
  mockScholarshipPlanning,
  mockTransferActivity
} from "@/platform/program-intelligence/core/mock-program-intelligence-data";
import type {
  ProgramCommandCenterWidget,
  ProgramAIInsight,
  ProgramDigitalTwinState,
  ProgramInformationType,
  ProgramIntelligenceModule,
  ProgramIntelligenceSummary,
  ProgramIntelligenceWorkspace,
  ProgramSnapshot
} from "@/platform/program-intelligence/core/program-intelligence-types";

function createModule<T>({
  id,
  title,
  contentType,
  summary,
  confidenceScore,
  sourceCount,
  data
}: {
  id: string;
  title: string;
  contentType: ProgramInformationType;
  summary: string;
  confidenceScore: number;
  sourceCount: number;
  data: T;
}): ProgramIntelligenceModule<T> {
  return {
    id,
    title,
    contentType,
    summary,
    confidence: confidenceScore >= 80 ? "high" : confidenceScore >= 60 ? "medium" : "low",
    confidenceScore,
    sourceCount,
    lastUpdated: "2026-06-28T12:00:00Z",
    evidenceIds: [`mock-evidence-${id}`],
    data,
    isMock: true
  };
}

export const digitalTwinEngine = {
  async buildProgramWorkspace(programId: string): Promise<ProgramIntelligenceWorkspace> {
    const teamProfile = (await teamIntelligenceService.getTeamIntelligenceProfile(programId)) ?? (await teamIntelligenceService.getDefaultTeamIntelligenceProfile());
    const graphOverview = knowledgeGraphService.getOverview();
    const marketSummary = transferMarketService.getMarketSummary();
    const replaySummary = historicalReplayService.generateReplaySummary();

    const identity = {
      ...mockProgramIdentity,
      programId,
      schoolName: teamProfile.schoolName,
      logoInitials: teamProfile.logoInitials,
      sport: teamProfile.sport,
      conference: teamProfile.conference,
      headCoach: teamProfile.headCoach
    };

    const snapshot: ProgramSnapshot = {
      identity,
      rosterSummary: `${teamProfile.roster.returningStarters} mock returning starters, ${teamProfile.roster.incomingTransfers} incoming transfers, ${teamProfile.roster.outgoingTransfers} outgoing transfers.`,
      portalActivitySummary: `${mockTransferActivity.commits} mock commits, ${mockTransferActivity.departures} mock departures, net ${mockTransferActivity.netMovement}.`,
      recruitingSnapshot: `${teamProfile.recruitingPipeline.recruitingClassRank} recruiting placeholder and ${teamProfile.recruitingPipeline.transferClassRank} transfer placeholder.`,
      historicalTrend: replaySummary.summary,
      confidenceIndicators: [
        { label: "Roster", type: "Analysis", confidenceScore: 74, isMock: true },
        { label: "Sources", type: "Verified Information", confidenceScore: 82, isMock: true },
        { label: "Predictions", type: "Predictions", confidenceScore: 58, isMock: true },
        { label: "Simulations", type: "Simulations", confidenceScore: 51, isMock: true }
      ],
      lastUpdated: teamProfile.lastUpdated,
      isMock: true
    };

    const digitalTwin: ProgramDigitalTwinState = {
      programId,
      stateVersion: "mock-v1",
      unifiedProgramState: "Mock unified program state assembled from team, roster, graph, market, history, and AI placeholder modules.",
      relationshipSummary: `${graphOverview.relationshipCount} mock graph relationships available for future relationship intelligence.`,
      simulationReadiness: "Ready for Labs and future Digital Twin simulations with clear labels.",
      forecastingReadiness: "Forecasting placeholders exist, but no real forecast is produced.",
      isMock: true
    };

    const intelligenceSummary: ProgramIntelligenceSummary = {
      strengths: ["Mock roster continuity", "Mock portal class balance", "Mock coach relationship graph"],
      risks: ["Mock offensive tackle depth", "Mock scholarship pressure", "Mock prediction uncertainty"],
      opportunities: ["Explore Transfer Fit", "Review portal pipeline", "Simulate scholarship scenarios in Labs"],
      recentChanges: ["Mock market heat increased", "Mock roster need shifted", "Mock timeline received a source update"],
      watchItems: ["Portal pipeline", "Offensive tackle market", "Conference peer movement"],
      confidenceExplanation: "Summary combines mock verified, analytical, historical, prediction, and simulation sections. It is not a real program claim.",
      evidenceIds: ["mock-evidence-summary"],
      contentType: "Analysis",
      isMock: true
    };

    const aiInsights: ProgramAIInsight[] = [
      { id: "athena-program-summary", agent: "Athena", contentType: "Analysis", title: "Athena summary", summary: "Mock program momentum is rising, but confidence remains mixed across simulations and predictions.", confidenceScore: 70, evidenceIds: ["mock-evidence-athena"], isMock: true },
      { id: "atlas-roster-risk", agent: "Atlas", contentType: "Analysis", title: "Atlas roster risk", summary: "Mock tackle depth remains a planning priority.", confidenceScore: 73, evidenceIds: ["mock-evidence-atlas"], isMock: true },
      { id: "oracle-projection", agent: "Oracle", contentType: "Predictions", title: "Oracle projection", summary: "Mock projection movement is positive but not a report.", confidenceScore: 57, evidenceIds: ["mock-evidence-oracle"], isMock: true },
      { id: "apollo-context", agent: "Apollo", contentType: "Historical Context", title: "Apollo context", summary: "Mock historical replay shows improved confidence week over week.", confidenceScore: 68, evidenceIds: ["mock-evidence-apollo"], isMock: true }
    ];

    return {
      snapshot,
      digitalTwin,
      intelligenceSummary,
      modules: {
        programOverview: createModule({ id: "program-overview", title: "Program Overview", contentType: "Verified Information", summary: "Mock program identity and current-state overview.", confidenceScore: 82, sourceCount: 5, data: snapshot }),
        rosterIntelligence: createModule({ id: "roster-intelligence", title: "Roster Intelligence", contentType: "Analysis", summary: "Atlas-style mock roster analysis.", confidenceScore: 74, sourceCount: 4, data: teamProfile.roster }),
        transferActivity: createModule({ id: "transfer-activity", title: "Transfer Activity", contentType: "Verified Information", summary: "Mock transfer movement summary.", confidenceScore: 80, sourceCount: 6, data: mockTransferActivity }),
        recruitingOverview: createModule({ id: "recruiting-overview", title: "Recruiting Overview", contentType: "Analysis", summary: "Mock recruiting and pipeline context.", confidenceScore: 63, sourceCount: 3, data: teamProfile.recruitingPipeline }),
        portalPipeline: createModule({ id: "portal-pipeline", title: "Portal Pipeline", contentType: "Analysis", summary: "Mock future portal targets and needs.", confidenceScore: 58, sourceCount: 2, data: mockPortalPipeline }),
        coachIntelligence: createModule({ id: "coach-intelligence", title: "Coach Intelligence", contentType: "Analysis", summary: "Mock coaching context and tendencies.", confidenceScore: 66, sourceCount: 3, data: teamProfile.coaching }),
        scholarshipPlanning: createModule({ id: "scholarship-planning", title: "Scholarship Planning", contentType: "Simulations", summary: "Mock scholarship planning scenario.", confidenceScore: 51, sourceCount: 0, data: mockScholarshipPlanning }),
        depthChart: createModule({ id: "depth-chart", title: "Depth Chart", contentType: "Analysis", summary: "Mock depth chart confidence and position pressure.", confidenceScore: 62, sourceCount: 2, data: teamProfile.depthChart }),
        knowledgeGraph: createModule({ id: "knowledge-graph", title: "Knowledge Graph", contentType: "Analysis", summary: "Relationship intelligence preview.", confidenceScore: 70, sourceCount: graphOverview.sourceCount, data: mockKnowledgeGraphPreview }),
        historicalReplay: createModule({ id: "historical-replay", title: "Historical Replay", contentType: "Historical Context", summary: "Apollo-style mock history preview.", confidenceScore: 68, sourceCount: 4, data: mockHistoricalReplayPreview }),
        marketIntelligence: createModule({ id: "market-intelligence", title: "Market Intelligence", contentType: "Analysis", summary: marketSummary.commentary.summary, confidenceScore: 64, sourceCount: 5, data: mockMarketSummary }),
        conferencePosition: createModule({ id: "conference-position", title: "Conference Position", contentType: "Analysis", summary: "Mock conference standing and peer context.", confidenceScore: 67, sourceCount: 4, data: { conferenceRank: teamProfile.conferenceRanking, nationalRank: teamProfile.nationalTransferRanking, peerComparison: "Mock State is above the fictional conference median.", isMock: true } }),
        rankings: createModule({ id: "rankings", title: "Rankings", contentType: "Analysis", summary: "Mock ranking context across transfer, roster, and momentum views.", confidenceScore: 71, sourceCount: 5, data: { transferRank: teamProfile.nationalTransferRanking, rosterStrengthRank: 18, momentumRank: 9, confidenceScore: 71, isMock: true } }),
        timeline: createModule({ id: "timeline", title: "Timeline", contentType: "Historical Context", summary: "Mock program timeline events.", confidenceScore: 77, sourceCount: 6, data: teamProfile.timeline }),
        aiInsights: createModule({ id: "ai-insights", title: "AI Insights", contentType: "Analysis", summary: "Agent-specific mock intelligence separated by source and type.", confidenceScore: 69, sourceCount: 6, data: aiInsights }),
        evidenceSummary: createModule({ id: "evidence-summary", title: "Evidence Summary", contentType: "Verified Information", summary: "Mock evidence counts by information type.", confidenceScore: 82, sourceCount: mockEvidenceSummary.sourceCount, data: mockEvidenceSummary }),
        teamNeeds: createModule({ id: "team-needs", title: "Team Needs", contentType: "Analysis", summary: "Mock position urgency and roster needs.", confidenceScore: 65, sourceCount: 3, data: teamProfile.needs }),
        portalClass: createModule({ id: "portal-class", title: "Portal Class", contentType: "Analysis", summary: "Mock transfer class summary.", confidenceScore: 66, sourceCount: 3, data: teamProfile.portalClass })
      },
      isMock: true
    };
  },

  getCommandCenterWidget(): ProgramCommandCenterWidget {
    return mockProgramCommandCenterWidget;
  }
};
