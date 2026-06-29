import { footballSportEngine } from "@/platform/sports/football/football-engine";
import type {
  ProgramCommandCenterWidget,
  ProgramEvidenceSummary,
  ProgramHistoricalReplayPreview,
  ProgramIdentity,
  ProgramMarketSummary,
  ProgramPipeline,
  ProgramScholarshipPlanning,
  ProgramTransferActivity
} from "@/platform/program-intelligence/core/program-intelligence-types";

const sport = footballSportEngine;

export const mockProgramIdentity: ProgramIdentity = {
  programId: "mock-state",
  schoolName: "Mock State",
  logoInitials: "MSU",
  sport: sport.displayName,
  sportId: sport.id,
  seasonId: "2026",
  conference: "Mock Ten",
  conferenceId: "mock-ten",
  division: "NCAA Division I placeholder",
  headCoach: "Coach Placeholder",
  location: "Example City, ST",
  isMock: true
};

export const mockTransferActivity: ProgramTransferActivity = {
  entries: 7,
  commits: 5,
  departures: 4,
  netMovement: 1,
  topPositions: ["OT", "CB", "WR"],
  isMock: true
};

export const mockPortalPipeline: ProgramPipeline = {
  title: "Mock Portal Pipeline",
  items: ["Fictional tackle target", "Fictional nickel defender", "Fictional veteran receiver"],
  confidenceScore: 58,
  isMock: true
};

export const mockScholarshipPlanning: ProgramScholarshipPlanning = {
  used: 79,
  open: 6,
  projectedOpenings: 9,
  riskLabel: "Moderate mock pressure",
  notes: ["Class balance pressure is simulated", "No real scholarship count is implied", "Future openings are placeholders"],
  isMock: true
};

export const mockKnowledgeGraphPreview = {
  entityCount: 42,
  relationshipCount: 67,
  strongestRelationships: ["Mock State to Coach Placeholder", "Mock State to fictional pipeline region"],
  conflictingRelationships: ["One mock relationship requires review"],
  isMock: true
};

export const mockHistoricalReplayPreview: ProgramHistoricalReplayPreview = {
  snapshotLabel: "Mock week-over-week replay",
  trend: "Program momentum improved in the fictional snapshot set.",
  whatChanged: ["Mock roster confidence increased", "Mock portal need shifted from critical to high", "Mock source activity rose"],
  isMock: true
};

export const mockMarketSummary: ProgramMarketSummary = {
  heatIndex: 72,
  momentumLabel: "Rising in mock market activity",
  positionScarcity: ["Offensive tackle", "Boundary corner"],
  marketDisclaimer: "Market indicators are analytical scenario tools, not guarantees.",
  isMock: true
};

export const mockEvidenceSummary: ProgramEvidenceSummary = {
  verifiedItems: 3,
  analyticalItems: 8,
  historicalItems: 4,
  predictionItems: 2,
  simulationItems: 3,
  sourceCount: 12,
  disclaimer: "Mock evidence only. Verified, analytical, historical, prediction, and simulation labels are shown to validate workspace structure.",
  isMock: true
};

export const mockProgramCommandCenterWidget: ProgramCommandCenterWidget = {
  recentlyViewedPrograms: [mockProgramIdentity],
  notableChanges: ["Mock State roster risk label changed in a fictional snapshot", "Mock State market heat increased in a simulation-only view"],
  pinnedPrograms: [mockProgramIdentity],
  linkHref: "/programs/mock-state",
  disclaimer: "Program Intelligence combines labeled mock verified, analytical, historical, prediction, and simulation sections.",
  isMock: true
};
