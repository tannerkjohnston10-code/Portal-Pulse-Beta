import { athenaSafetyRules } from "@/platform/athena/safety/athena-safety-rules";
import type { AthenaDailyBriefing } from "@/platform/athena/briefings/briefing-types";
import type { AgentFinding } from "@/platform/athena/types/athena-types";

export const athenaEvaluator = {
  evaluateFinding(finding: AgentFinding) {
    const safety = athenaSafetyRules.evaluateFinding(finding);
    return {
      findingId: finding.id,
      readinessScore: safety.allowedForCoreSubmission ? 78 : 20,
      reviewRequired: safety.mustRouteToReview,
      coreApprovalRequired: true,
      maySurfaceDirectly: false,
      safety,
      isMock: true
    };
  },

  evaluateBriefing(briefing: AthenaDailyBriefing) {
    return {
      briefingId: briefing.id,
      itemCount: briefing.items.length,
      confidenceAverage: briefing.confidenceAverage,
      sourceCount: briefing.sourceCount,
      evidenceCount: briefing.evidenceCount,
      allItemsMock: briefing.items.every((item) => item.isMock),
      coreDecisionCount: briefing.coreDecisions.length,
      maySurfaceDirectly: false,
      notes: "Mock briefing is displayable only as mock, Core-gated intelligence.",
      isMock: true
    };
  }
};

