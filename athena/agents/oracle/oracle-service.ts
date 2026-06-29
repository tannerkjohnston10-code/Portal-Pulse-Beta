import { IntelligenceCore } from "@/platform/intelligence/core/intelligence-core";
import { predictionExplainer } from "@/platform/athena/agents/oracle/prediction-explainer";
import { predictionHistoryService } from "@/platform/athena/agents/oracle/prediction-history-service";
import { predictionRiskService } from "@/platform/athena/agents/oracle/prediction-risk-service";
import { predictionSignalService } from "@/platform/athena/agents/oracle/prediction-signal-service";
import type { OraclePredictionFinding } from "@/platform/athena/agents/oracle/oracle-types";

export const oracleService = {
  getPredictionSignals() {
    return predictionSignalService.getMockSignals();
  },

  getPredictionHistory() {
    return predictionHistoryService.getMockHistory();
  },

  getPredictionRisks() {
    return predictionRiskService.getRisks(predictionSignalService.getMockSignals());
  },

  getTopPredictionMover(): OraclePredictionFinding {
    const signals = predictionSignalService.getMockSignals();
    const risks = predictionRiskService.getRisks(signals);
    const history = predictionHistoryService.getMockHistory();
    const explanation = predictionExplainer.explain(signals, risks);
    const coreOutput = IntelligenceCore.explainPrediction("mock-oracle-prediction-alpha");
    const sourceCount = signals.reduce((sum, signal) => sum + signal.sourceCount, 0);
    const evidenceCount = signals.reduce((sum, signal) => sum + signal.evidenceCount, 0);
    const hasHighRisk = risks.some((risk) => risk.severity === "high");

    return {
      id: "mock-oracle-finding-alpha",
      predictedOutcome: "Mock Player Alpha projection toward Mock State",
      probability: 58,
      confidence: hasHighRisk ? "medium" : "high",
      topSupportingReasons: explanation.topSupportingReasons,
      topRiskFactors: risks,
      contradictingEvidence: explanation.contradictingEvidence,
      uncertaintyLevel: hasHighRisk ? "high" : "medium",
      whatCouldChangePrediction: explanation.whatCouldChangePrediction,
      sourceCount,
      evidenceCount,
      supportingSignals: signals,
      history,
      explanation: explanation.explanation,
      recommendationToIntelligenceCore: hasHighRisk ? "lower_confidence" : "approve_projection",
      coreDecision: {
        id: "mock-oracle-core-decision-alpha",
        proposalId: "mock-oracle-proposal-alpha",
        decision: hasHighRisk ? "lowered_confidence" : "approved",
        reason: "Mock Core decision: Oracle projection has supporting signals but remains a projection and includes conflict risk.",
        finalConfidence: coreOutput.reasoning.confidence,
        finalImportance: coreOutput.importanceScore,
        coreOutput,
        decidedAt: coreOutput.generatedAt,
        isMock: true
      },
      generatedAt: "2026-06-28T15:00:00.000Z",
      isProjection: true,
      isMock: true
    };
  },

  getPredictionMovers() {
    const topMover = this.getTopPredictionMover();
    return [
      topMover,
      {
        ...topMover,
        id: "mock-oracle-finding-beta",
        predictedOutcome: "Mock Player Beta projection remains open",
        probability: 46,
        confidence: "low",
        uncertaintyLevel: "high",
        recommendationToIntelligenceCore: "route_to_admin_review",
        generatedAt: "2026-06-28T15:05:00.000Z"
      } satisfies OraclePredictionFinding
    ];
  }
};

