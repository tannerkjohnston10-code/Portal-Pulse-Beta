import type { OraclePredictionSignal } from "@/platform/athena/agents/oracle/oracle-types";

const lastUpdated = "2026-06-28T15:00:00.000Z";

export const predictionSignalService = {
  getMockSignals(): OraclePredictionSignal[] {
    return [
      {
        id: "mock-oracle-signal-official-visit",
        signalType: "official_visit",
        affectedPlayer: "Mock Player Alpha",
        affectedTeam: "Mock State",
        strength: 82,
        confidence: "medium",
        sourceCount: 3,
        evidenceCount: 4,
        lastUpdated,
        isMock: true
      },
      {
        id: "mock-oracle-signal-roster-need",
        signalType: "roster_need",
        affectedPlayer: "Mock Player Alpha",
        affectedTeam: "Mock State",
        strength: 76,
        confidence: "high",
        sourceCount: 2,
        evidenceCount: 5,
        lastUpdated,
        isMock: true
      },
      {
        id: "mock-oracle-signal-unofficial-visit",
        signalType: "unofficial_visit",
        affectedPlayer: "Mock Player Alpha",
        affectedTeam: "Mock State",
        strength: 58,
        confidence: "medium",
        sourceCount: 2,
        evidenceCount: 2,
        lastUpdated,
        isMock: true
      },
      {
        id: "mock-oracle-signal-reported-offer",
        signalType: "reported_offer",
        affectedPlayer: "Mock Player Alpha",
        affectedTeam: "Mock State",
        strength: 61,
        confidence: "medium",
        sourceCount: 2,
        evidenceCount: 3,
        lastUpdated,
        isMock: true
      },
      {
        id: "mock-oracle-signal-team-interest",
        signalType: "team_interest",
        affectedPlayer: "Mock Player Alpha",
        affectedTeam: "Mock State",
        strength: 69,
        confidence: "medium",
        sourceCount: 3,
        evidenceCount: 3,
        lastUpdated,
        isMock: true
      },
      {
        id: "mock-oracle-signal-depth-opening",
        signalType: "depth_chart_opening",
        affectedPlayer: "Mock Player Alpha",
        affectedTeam: "Mock State",
        strength: 73,
        confidence: "medium",
        sourceCount: 2,
        evidenceCount: 4,
        lastUpdated,
        isMock: true
      },
      {
        id: "mock-oracle-signal-coaching",
        signalType: "coaching_connection",
        affectedPlayer: "Mock Player Alpha",
        affectedTeam: "Mock State",
        strength: 55,
        confidence: "low",
        sourceCount: 1,
        evidenceCount: 2,
        lastUpdated,
        isMock: true
      },
      {
        id: "mock-oracle-signal-hometown",
        signalType: "hometown_connection",
        affectedPlayer: "Mock Player Alpha",
        affectedTeam: "Mock State",
        strength: 49,
        confidence: "medium",
        sourceCount: 1,
        evidenceCount: 2,
        lastUpdated,
        isMock: true
      },
      {
        id: "mock-oracle-signal-nil",
        signalType: "nil_activity",
        affectedPlayer: "Mock Player Alpha",
        affectedTeam: "Mock State",
        strength: 42,
        confidence: "low",
        sourceCount: 1,
        evidenceCount: 1,
        lastUpdated,
        isMock: true
      },
      {
        id: "mock-oracle-signal-playing-time",
        signalType: "playing_time_opportunity",
        affectedPlayer: "Mock Player Alpha",
        affectedTeam: "Mock State",
        strength: 71,
        confidence: "medium",
        sourceCount: 2,
        evidenceCount: 3,
        lastUpdated,
        isMock: true
      },
      {
        id: "mock-oracle-signal-prediction-movement",
        signalType: "prediction_movement",
        affectedPlayer: "Mock Player Alpha",
        affectedTeam: "Mock State",
        strength: 67,
        confidence: "medium",
        sourceCount: 2,
        evidenceCount: 3,
        lastUpdated,
        isMock: true
      },
      {
        id: "mock-oracle-signal-conference-fit",
        signalType: "conference_fit",
        affectedPlayer: "Mock Player Alpha",
        affectedTeam: "Mock State",
        strength: 63,
        confidence: "medium",
        sourceCount: 2,
        evidenceCount: 2,
        lastUpdated,
        isMock: true
      },
      {
        id: "mock-oracle-signal-historical-relationship",
        signalType: "historical_recruiting_relationship",
        affectedPlayer: "Mock Player Alpha",
        affectedTeam: "Mock State",
        strength: 52,
        confidence: "low",
        sourceCount: 1,
        evidenceCount: 2,
        lastUpdated,
        isMock: true
      },
      {
        id: "mock-oracle-signal-source-volume",
        signalType: "source_volume",
        affectedPlayer: "Mock Player Alpha",
        affectedTeam: "Mock State",
        strength: 64,
        confidence: "medium",
        sourceCount: 4,
        evidenceCount: 4,
        lastUpdated,
        isMock: true
      },
      {
        id: "mock-oracle-signal-conflict",
        signalType: "conflicting_report",
        affectedPlayer: "Mock Player Alpha",
        affectedTeam: "Mock State",
        strength: 38,
        confidence: "conflicting",
        sourceCount: 2,
        evidenceCount: 2,
        lastUpdated,
        isMock: true
      }
    ];
  },

  getTopSupportingSignals() {
    return this.getMockSignals().filter((signal) => signal.signalType !== "conflicting_report").sort((a, b) => b.strength - a.strength);
  }
};
