import type { SportEngine } from "@/platform/sports/sport-types";

export const baseballSportEngine: SportEngine = {
  id: "baseball",
  displayName: "Baseball",
  shortName: "BASE",
  rosterRules: {
    rosterLimitLabel: "Baseball roster limit placeholder",
    activeRosterLabel: "Lineup, rotation, bullpen, and bench",
    starters: 9,
    rotationOrDepthLabel: "Lineup and pitching staff"
  },
  scholarshipRules: {
    model: "equivalency",
    limitLabel: "Scholarship equivalency placeholder",
    limit: null,
    equivalency: true,
    notes: "Baseball scholarship planning must support equivalency logic and cannot assume head-count scholarships."
  },
  eligibilityRules: {
    eligibilityClockLabel: "Season eligibility placeholder",
    redshirtOrParticipationLabel: "Participation/redshirt placeholder",
    notes: "Eligibility must be source-backed in production."
  },
  transferWindows: [{ label: "Baseball transfer window", timing: "Placeholder", isPlaceholder: true }],
  recruitingCalendar: [{ label: "Baseball recruiting calendar", timing: "Placeholder", isPlaceholder: true }],
  positions: [
    { id: "p", label: "Pitcher", abbreviation: "P", group: "Pitching", isFlexible: true },
    { id: "c", label: "Catcher", abbreviation: "C", group: "Defense", isFlexible: false },
    { id: "if", label: "Infield", abbreviation: "IF", group: "Defense", isFlexible: true },
    { id: "of", label: "Outfield", abbreviation: "OF", group: "Defense", isFlexible: true },
    { id: "util", label: "Utility", abbreviation: "UTIL", group: "Flex", isFlexible: true }
  ],
  lineupStructure: {
    label: "Lineup, rotation, bullpen, and bench",
    starters: 9,
    groups: [
      { id: "lineup", label: "Lineup", positions: ["c", "if", "of", "util"] },
      { id: "pitching", label: "Pitching Staff", positions: ["p"] }
    ]
  },
  historicalMetrics: ["innings", "plate appearances", "OPS", "ERA", "strikeout rate"],
  terminology: {
    athleteLabel: "Player",
    programLabel: "Program",
    rosterSlotLabel: "Roster role",
    depthOrLineupLabel: "Lineup",
    scholarshipLabel: "Equivalency scholarship",
    transferLabel: "Transfer portal"
  },
  isMock: true
};
