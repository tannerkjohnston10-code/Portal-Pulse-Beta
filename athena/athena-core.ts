import { IntelligenceCore } from "@/platform/intelligence/core/intelligence-core";
import { athenaBriefingService } from "@/platform/athena/briefings/briefing-service";
import { athenaOrchestrator } from "@/platform/athena/orchestration/athena-orchestrator";
import { athenaSafetyRules } from "@/platform/athena/safety/athena-safety-rules";

export const AthenaCore = {
  getStatus() {
    return {
      status: "mock_cio_online",
      role: "Chief Intelligence Officer",
      coreApprovalRequired: true,
      canPublishDirectly: false,
      safetyRules: athenaSafetyRules.rules,
      lastChecked: "2026-06-28T14:30:00.000Z",
      isMock: true
    };
  },

  coordinateIntelligenceCycle() {
    return athenaOrchestrator.coordinateDailyCycle();
  },

  generateDailyBriefing() {
    return athenaBriefingService.getDailyBriefing();
  },

  getLatestVerifiedMockIntelligence() {
    const briefing = athenaBriefingService.getDailyBriefing();
    return briefing.items.map((item) => ({
      id: `mock-verified-intelligence-${item.id}`,
      title: item.title,
      summary: item.summary,
      confidence: item.confidence,
      evidenceCount: item.evidenceCount,
      sourceCount: item.sourceCount,
      coreDecisionId: item.coreDecisionId,
      verifiedByCore: true,
      isMock: true
    }));
  },

  answerPlaceholder(question: string) {
    const coreOutput = IntelligenceCore.generateInsight(`mock-athena-question-${question.toLowerCase().replaceAll(" ", "-").slice(0, 32)}`);
    return {
      question,
      answer: "Athena conversational answers are not active yet. Future answers will use approved Intelligence Core outputs, evidence citations, confidence labels, and conflict flags.",
      confidence: coreOutput.reasoning.confidence,
      evidenceCount: coreOutput.evidence.length,
      sourceCount: coreOutput.evidence.reduce((sum, item) => sum + item.supportingSourceIds.length, 0),
      coreApprovalRequired: true,
      isMock: true
    };
  }
};

