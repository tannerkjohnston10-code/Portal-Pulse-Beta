import { athenaService } from "@/platform/athena/agents/athena-service";
import { oracleService } from "@/platform/athena/agents/oracle/oracle-service";
import { sentinelService } from "@/platform/athena/agents/sentinel/sentinel-service";
import { librarianGraphAgent } from "@/platform/athena/agents/librarian/librarian-agent";
import { cartographerSpatialAgent } from "@/platform/athena/agents/cartographer/cartographer-agent";
import { apolloHistoricalAgent } from "@/platform/athena/agents/apollo/apollo-agent";
import { mercuryMarketAgent } from "@/platform/athena/agents/mercury/mercury-agent";
import { atlasRosterAgent } from "@/platform/athena/agents/atlas/atlas-agent";
import { AthenaCore } from "@/platform/athena/athena-core";
import { athenaBriefingService } from "@/platform/athena/briefings/briefing-service";
import { athenaOrchestrator } from "@/platform/athena/orchestration/athena-orchestrator";
import { athenaEvaluator } from "@/platform/athena/evaluation/athena-evaluator";
import { agentOrchestrator } from "@/platform/athena/orchestration/agent-orchestrator";
import { agentEvaluator } from "@/platform/athena/evaluation/agent-evaluator";
import { agentSafetyService } from "@/platform/athena/safety/agent-safety-service";

export const AthenaSDK = {
  core: AthenaCore,
  agents: athenaService.getAgents,
  networkStatus: athenaService.getNetworkStatus,
  cioStatus: athenaService.getCIOStatus,
  latestFindings: athenaService.getLatestFindings,
  dailyBriefing: athenaService.createDailyBriefing,
  briefing: athenaBriefingService.getDailyBriefing,
  latestVerifiedMockIntelligence: athenaService.getLatestVerifiedMockIntelligence,
  oracle: oracleService,
  sentinel: sentinelService,
  librarian: librarianGraphAgent,
  cartographer: cartographerSpatialAgent,
  apollo: apolloHistoricalAgent,
  mercury: mercuryMarketAgent,
  atlas: atlasRosterAgent,
  answerPlaceholder: athenaService.answerPlaceholder,
  coordinateDailyCycle: athenaOrchestrator.coordinateDailyCycle,
  runMockWorkflow: agentOrchestrator.runMockWorkflow,
  evaluateFinding: agentEvaluator.evaluateFinding,
  evaluateAthenaFinding: athenaEvaluator.evaluateFinding,
  evaluateBriefing: athenaEvaluator.evaluateBriefing,
  safety: agentSafetyService
};
