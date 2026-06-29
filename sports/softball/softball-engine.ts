import type { SportEngine } from "@/platform/sports/sport-types";

export const softballSportEngine: SportEngine = {
  id: "softball",
  displayName: "Softball",
  shortName: "SB",
  rosterRules: {
    rosterLimitLabel: "Softball roster limit placeholder",
    activeRosterLabel: "Lineup, pitcher depth, and bench",
    starters: 9,
    rotationOrDepthLabel: "Lineup and pitcher depth"
  },
  scholarshipRules: {
    model: "equivalency",
    limitLabel: "Scholarship equivalency placeholder",
    limit: null,
    equivalency: true,
    notes: "Softball scholarship planning must support equivalency logic and cannot assume head-count scholarships."
  },
  eligibilityRules: {
    eligibilityClockLabel: "Season eligibility placeholder",
    redshirtOrParticipationLabel: "Participation/redshirt placeholder",
    notes: "Eligibility must be source-backed in production."
  },
  transferWindows: [{ label: "Softball transfer window", timing: "Placeholder", isPlaceholder: true }],
  recruitingCalendar: [{ label: "Softball recruiting calendar", timing: "Placeholder", isPlaceholder: true }],
  positions: [
    { id: "p", label: "Pitcher", abbreviation: "P", group: "Pitching", isFlexible: true },
    { id: "c", label: "Catcher", abbreviation: "C", group: "Defense", isFlexible: false },
    { id: "if", label: "Infield", abbreviation: "IF", group: "Defense", isFlexible: true },
    { id: "of", label: "Outfield", abbreviation: "OF", group: "Defense", isFlexible: true },
    { id: "util", label: "Utility", abbreviation: "UTIL", group: "Flex", isFlexible: true }
  ],
  lineupStructure: {
    label: "Lineup, pitcher depth, and bench",
    starters: 9,
    groups: [
      { id: "lineup", label: "Lineup", positions: ["c", "if", "of", "util"] },
      { id: "pitching", label: "Pitcher Depth", positions: ["p"] }
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
