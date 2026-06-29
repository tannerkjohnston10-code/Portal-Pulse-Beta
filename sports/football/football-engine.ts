import type { SportEngine } from "@/platform/sports/sport-types";

export const footballSportEngine: SportEngine = {
  id: "football",
  displayName: "Football",
  shortName: "FB",
  rosterRules: {
    rosterLimitLabel: "NCAA football roster limit placeholder",
    activeRosterLabel: "Travel/active roster varies by competition rules",
    starters: 22,
    rotationOrDepthLabel: "Depth chart"
  },
  scholarshipRules: {
    model: "head_count",
    limitLabel: "85 scholarship limit placeholder",
    limit: 85,
    equivalency: false,
    notes: "Use sport engine configuration for football scholarship logic. Do not hardcode this value in services."
  },
  eligibilityRules: {
    eligibilityClockLabel: "Five-year clock placeholder",
    redshirtOrParticipationLabel: "Redshirt participation placeholder",
    notes: "Eligibility must be source-backed in production."
  },
  transferWindows: [
    { label: "Winter football window", timing: "Placeholder", isPlaceholder: true },
    { label: "Spring football window", timing: "Placeholder", isPlaceholder: true }
  ],
  recruitingCalendar: [
    { label: "Early signing period", timing: "Placeholder", isPlaceholder: true },
    { label: "National signing period", timing: "Placeholder", isPlaceholder: true }
  ],
  positions: [
    { id: "qb", label: "Quarterback", abbreviation: "QB", group: "Offense", isFlexible: false },
    { id: "rb", label: "Running Back", abbreviation: "RB", group: "Offense", isFlexible: true },
    { id: "wr", label: "Wide Receiver", abbreviation: "WR", group: "Offense", isFlexible: true },
    { id: "te", label: "Tight End", abbreviation: "TE", group: "Offense", isFlexible: true },
    { id: "ol", label: "Offensive Line", abbreviation: "OL", group: "Offense", isFlexible: true },
    { id: "dl", label: "Defensive Line", abbreviation: "DL", group: "Defense", isFlexible: true },
    { id: "edge", label: "Edge", abbreviation: "EDGE", group: "Defense", isFlexible: true },
    { id: "lb", label: "Linebacker", abbreviation: "LB", group: "Defense", isFlexible: true },
    { id: "db", label: "Defensive Back", abbreviation: "DB", group: "Defense", isFlexible: true },
    { id: "kp", label: "Kicker/Punter", abbreviation: "K/P", group: "Special Teams", isFlexible: true }
  ],
  lineupStructure: {
    label: "Offense, defense, and special teams depth",
    starters: 22,
    groups: [
      { id: "offense", label: "Offense", positions: ["qb", "rb", "wr", "te", "ol"] },
      { id: "defense", label: "Defense", positions: ["dl", "edge", "lb", "db"] },
      { id: "special-teams", label: "Special Teams", positions: ["kp"] }
    ]
  },
  historicalMetrics: ["returning production", "snap counts", "starts", "explosiveness", "pressure rate"],
  terminology: {
    athleteLabel: "Player",
    programLabel: "Program",
    rosterSlotLabel: "Roster spot",
    depthOrLineupLabel: "Depth chart",
    scholarshipLabel: "Scholarship",
    transferLabel: "Transfer portal"
  },
  isMock: true
};
