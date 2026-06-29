import type { OraclePredictionRisk, OraclePredictionSignal } from "@/platform/athena/agents/oracle/oracle-types";

export const predictionRiskService = {
  getRisks(signals: OraclePredictionSignal[]): OraclePredictionRisk[] {
    const conflictingSignals = signals.filter((signal) => signal.signalType === "conflicting_report");
    return [
      {
        id: "mock-oracle-risk-conflict",
        label: "Conflicting report risk",
        severity: conflictingSignals.length > 0 ? "high" : "medium",
        explanation: "Mock conflicting signal exists, so Oracle recommends Core review before confidence can rise.",
        evidenceCount: conflictingSignals.reduce((sum, signal) => sum + signal.evidenceCount, 0),
        isMock: true
      },
      {
        id: "mock-oracle-risk-nil",
        label: "NIL uncertainty",
        severity: "medium",
        explanation: "NIL-adjacent activity is not confirmation of a value or outcome and must remain labeled cautiously.",
        evidenceCount: 1,
        isMock: true
      },
      {
        id: "mock-oracle-risk-timing",
        label: "Timeline volatility",
        severity: "medium",
        explanation: "Prediction movement is recent, so a new official statement or visit report could materially change the projection.",
        evidenceCount: 2,
        isMock: true
      }
    ];
  }
};

