import type { OraclePredictionRisk, OraclePredictionSignal } from "@/platform/athena/agents/oracle/oracle-types";

export const predictionExplainer = {
  explain(signals: OraclePredictionSignal[], risks: OraclePredictionRisk[]) {
    const topSignals = signals.filter((signal) => signal.signalType !== "conflicting_report").slice(0, 3);
    const highRisk = risks.find((risk) => risk.severity === "high");
    return {
      topSupportingReasons: topSignals.map((signal) => `${signal.signalType.replaceAll("_", " ")} signal at ${signal.strength}/100 strength`),
      contradictingEvidence: signals
        .filter((signal) => signal.signalType === "conflicting_report")
        .map((signal) => `${signal.sourceCount} mock sources create a conflicting-report caution.`),
      explanation: `Oracle projects movement from ${topSignals.length} supporting mock signals, but ${highRisk ? highRisk.label.toLowerCase() : "uncertainty"} prevents this from being treated as a fact.`,
      whatCouldChangePrediction: [
        "An official school, player, or coach statement.",
        "A new visit report with stronger source reliability.",
        "A resolved conflicting report.",
        "A meaningful roster or depth chart change."
      ]
    };
  }
};

