import { athenaAgents } from "@/platform/athena/agents/agent-registry";
import { createMockFinding } from "@/platform/athena/agents/agent-finding-factory";
import { sentinelService } from "@/platform/athena/agents/sentinel/sentinel-service";

const agent = athenaAgents.find((item) => item.id === "sentinel-breaking")!;

export const sentinelAgent = {
  agent,
  observe() {
    const snapshot = sentinelService.getDashboardSnapshot();
    return createMockFinding(agent, `Mock intake workflow monitored ${snapshot.itemsMonitored} items, found ${snapshot.conflictsDetected} conflicts, removed ${snapshot.duplicatesRemoved} duplicates, and routed ${snapshot.awaitingCoreReview} candidates toward Core review.`, "breaking_update");
  },

  getDashboardSnapshot() {
    return sentinelService.getDashboardSnapshot();
  },

  runIntakeWorkflow() {
    return sentinelService.runIntakeWorkflow();
  }
};
