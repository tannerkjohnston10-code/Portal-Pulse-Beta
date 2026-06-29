import type { SportEngine } from "@/platform/sports/sport-types";

export const mensBasketballSportEngine: SportEngine = {
  id: "mens-basketball",
  displayName: "Men's Basketball",
  shortName: "MBB",
  rosterRules: {
    rosterLimitLabel: "Basketball roster limit placeholder",
    activeRosterLabel: "Rotation and bench roles",
    starters: 5,
    rotationOrDepthLabel: "Rotation"
  },
  scholarshipRules: {
    model: "head_count",
    limitLabel: "15 scholarship limit placeholder",
    limit: 15,
    equivalency: false,
    notes: "Use sport engine configuration for basketball scholarship logic."
  },
  eligibilityRules: {
    eligibilityClockLabel: "Season eligibility placeholder",
    redshirtOrParticipationLabel: "Participation/redshirt placeholder",
    notes: "Eligibility must be source-backed in production."
  },
  transferWindows: [{ label: "Basketball portal window", timing: "Placeholder", isPlaceholder: true }],
  recruitingCalendar: [{ label: "Basketball signing calendar", timing: "Placeholder", isPlaceholder: true }],
  positions: [
    { id: "guard", label: "Guard", abbreviation: "G", group: "Backcourt", isFlexible: true },
    { id: "wing", label: "Wing", abbreviation: "W", group: "Wing", isFlexible: true },
    { id: "forward", label: "Forward", abbreviation: "F", group: "Frontcourt", isFlexible: true },
    { id: "big", label: "Big", abbreviation: "B", group: "Frontcourt", isFlexible: true }
  ],
  lineupStructure: {
    label: "Starting five and rotation",
    starters: 5,
    groups: [{ id: "rotation", label: "Rotation", positions: ["guard", "wing", "forward", "big"] }]
  },
  historicalMetrics: ["minutes", "usage", "efficiency", "rebounding", "assist rate"],
  terminology: {
    athleteLabel: "Player",
    programLabel: "Program",
    rosterSlotLabel: "Rotation slot",
    depthOrLineupLabel: "Rotation",
    scholarshipLabel: "Scholarship",
    transferLabel: "Transfer portal"
  },
  isMock: true
};
