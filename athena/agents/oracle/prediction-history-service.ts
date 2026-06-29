import type { OraclePredictionHistoryPoint } from "@/platform/athena/agents/oracle/oracle-types";

export const predictionHistoryService = {
  getMockHistory(): OraclePredictionHistoryPoint[] {
    return [
      {
        id: "mock-oracle-history-1",
        timestamp: "2026-06-26T15:00:00.000Z",
        probability: 44,
        confidence: "medium",
        changeReason: "Mock baseline projection from roster need and source volume.",
        isMock: true
      },
      {
        id: "mock-oracle-history-2",
        timestamp: "2026-06-27T15:00:00.000Z",
        probability: 51,
        confidence: "medium",
        changeReason: "Mock visit signal increased projection strength.",
        isMock: true
      },
      {
        id: "mock-oracle-history-3",
        timestamp: "2026-06-28T15:00:00.000Z",
        probability: 58,
        confidence: "medium",
        changeReason: "Mock playing-time and roster-fit signals improved, but conflict risk remains.",
        isMock: true
      }
    ];
  }
};

