import type { AtlasWorkspaceData } from "@/platform/roster/core/roster-types";
import { footballSportEngine } from "@/platform/sports/football/football-engine";
import { SportCapabilityRegistry } from "@/platform/sports/sport-capability-registry";

const sport = footballSportEngine;
const capabilities = SportCapabilityRegistry.getProfile(sport.id);
const footballPositions = Object.fromEntries(sport.positions.map((position) => [position.abbreviation, position.id]));

export const mockAtlasWorkspace: AtlasWorkspaceData = {
  snapshot: {
    id: "mock-roster-snapshot",
    teamId: "mock-team-state",
    teamName: "Mock State",
    sport: sport.displayName,
    sportId: sport.id,
    seasonId: "2026",
    returningStarters: 13,
    incomingTransfers: 7,
    outgoingTransfers: 5,
    freshmenPlaceholder: 18,
    seniorsGraduatingPlaceholder: 11,
    scholarshipUsed: 81,
    scholarshipLimitPlaceholder: capabilities.scholarshipLimit ?? 0,
    projectedOpenings: 4,
    confidence: "medium",
    lastUpdated: "2026-06-28T19:00:00.000Z",
    isMock: true
  },
  depthChart: [
    { id: "mock-depth-qb", sportId: sport.id, group: "QB", positionId: footballPositions.QB, projectedStarter: "Mock QB1", backups: ["Mock QB2", "Mock QB3"], competitionLevel: "high", transferNeed: "moderate", confidence: "medium", risk: "Experienced backup depth is assumption-based.", isMock: true },
    { id: "mock-depth-rb", sportId: sport.id, group: "RB", positionId: footballPositions.RB, projectedStarter: "Mock RB1", backups: ["Mock RB2"], competitionLevel: "stable", transferNeed: "stable", confidence: "medium", risk: "Depth is balanced in mock data.", isMock: true },
    { id: "mock-depth-wr", sportId: sport.id, group: "WR", positionId: footballPositions.WR, projectedStarter: "Mock WR1", backups: ["Mock WR2", "Mock WR3", "Mock WR4"], competitionLevel: "moderate", transferNeed: "moderate", confidence: "medium", risk: "Class balance creates future uncertainty.", isMock: true },
    { id: "mock-depth-te", sportId: sport.id, group: "TE", positionId: footballPositions.TE, projectedStarter: "Mock TE1", backups: ["Mock TE2"], competitionLevel: "stable", transferNeed: "moderate", confidence: "low", risk: "Scheme fit placeholder needs real data later.", isMock: true },
    { id: "mock-depth-ol", sportId: sport.id, group: "OL", positionId: footballPositions.OL, projectedStarter: "Mock LT1", backups: ["Mock OT2", "Mock IOL3"], competitionLevel: "high", transferNeed: "critical", confidence: "medium", risk: "Offensive tackle depth is the highest mock urgency.", isMock: true },
    { id: "mock-depth-dl", sportId: sport.id, group: "DL", positionId: footballPositions.DL, projectedStarter: "Mock DL1", backups: ["Mock DL2"], competitionLevel: "moderate", transferNeed: "high", confidence: "medium", risk: "Portal dependency is increasing in mock data.", isMock: true },
    { id: "mock-depth-lb", sportId: sport.id, group: "LB", positionId: footballPositions.LB, projectedStarter: "Mock LB1", backups: ["Mock LB2", "Mock LB3"], competitionLevel: "stable", transferNeed: "moderate", confidence: "medium", risk: "Leadership continuity is stable.", isMock: true },
    { id: "mock-depth-db", sportId: sport.id, group: "DB", positionId: footballPositions.DB, projectedStarter: "Mock DB1", backups: ["Mock DB2", "Mock DB3"], competitionLevel: "high", transferNeed: "high", confidence: "medium", risk: "Scholarship pressure is projected at defensive back.", isMock: true },
    { id: "mock-depth-kp", sportId: sport.id, group: "K/P", positionId: footballPositions["K/P"], projectedStarter: "Mock K1", backups: ["Mock P1"], competitionLevel: "stable", transferNeed: "stable", confidence: "low", risk: "Special teams data is placeholder-only.", isMock: true }
  ],
  needs: [
    { id: "mock-need-ol", position: "Offensive Line", urgency: "critical", currentDepth: 7, transferTargetsPlaceholder: 3, projectedImpact: 92, scholarshipAvailability: "One immediate opening projected", confidence: "medium", recommendedAction: "Add immediate starter at left tackle.", isMock: true },
    { id: "mock-need-db", position: "Defensive Back", urgency: "high", currentDepth: 8, transferTargetsPlaceholder: 2, projectedImpact: 81, scholarshipAvailability: "Projected bottleneck in 2027 class", confidence: "medium", recommendedAction: "Target younger depth at corner.", isMock: true },
    { id: "mock-need-qb", position: "Quarterback", urgency: "moderate", currentDepth: 3, transferTargetsPlaceholder: 1, projectedImpact: 68, scholarshipAvailability: "Backup spot only", confidence: "medium", recommendedAction: "Prioritize experienced backup quarterback.", isMock: true }
  ],
  rosterDNA: {
    id: "mock-roster-dna",
    score: 74,
    categories: [
      { label: "Experience", score: 78, explanation: "Returning starter count is solid in mock data.", isMock: true },
      { label: "Position Balance", score: 64, explanation: "Line and secondary depth create imbalance.", isMock: true },
      { label: "Class Balance", score: 70, explanation: "Projected 2027 bottleneck needs monitoring.", isMock: true },
      { label: "Development Pipeline", score: 73, explanation: "Mock pipeline is steady but transfer-dependent.", isMock: true }
    ],
    strengths: ["Leadership continuity", "Skill-position depth", "Development pipeline"],
    weaknesses: ["Offensive tackle depth", "Defensive back scholarship pressure", "Transfer dependency"],
    confidence: "medium",
    isMock: true
  },
  teamGenome: {
    id: "mock-team-genome",
    rosterIdentity: "Veteran core with targeted portal dependency.",
    recruitingIdentity: "Balanced regional recruiting placeholder.",
    transferIdentity: "Selective needs-based transfer use in mock data.",
    developmentIdentity: "Stable development pipeline but thin tackle succession.",
    pipelineIdentity: "Mock Midwest pipeline with emerging coastal links.",
    styleOfPlayPlaceholder: "Physical front emphasis placeholder.",
    longTermRosterTrend: "Roster stability improves if class balance normalizes.",
    confidence: "medium",
    isMock: true
  },
  rosterChemistry: {
    id: "mock-roster-chemistry",
    overallScore: 77,
    riskAreas: ["Transfer integration on defensive line", "Offensive tackle succession", "Projected DB class bottleneck"],
    stabilityAreas: ["Returning leadership", "Linebacker continuity", "Skill-position depth"],
    trendPlaceholder: "Chemistry improves when class balance stabilizes.",
    confidence: "medium",
    isMock: true
  },
  scholarshipIQ: {
    id: "mock-scholarship-iq",
    sportId: sport.id,
    scholarshipModel: capabilities.scholarshipModel,
    scholarshipLimitLabel: capabilities.scholarshipLimitLabel,
    totalScholarshipsPlaceholder: capabilities.scholarshipLimit ?? 0,
    usedScholarships: 81,
    projectedOpenings: 4,
    classYearDistribution: { Freshman: 18, Sophomore: 21, Junior: 22, Senior: 20 },
    positionalDistribution: { QB: 3, RB: 5, WR: 10, OL: 14, DL: 11, LB: 9, DB: 15, ST: 3 },
    futureBottlenecks: ["Defensive back 2027", "Offensive tackle succession"],
    overfilledPositions: ["Wide receiver"],
    underfilledPositions: ["Offensive tackle", "Cornerback"],
    riskAlerts: ["Mock: scholarship pressure is projected at defensive back.", "Mock: offensive line needs younger depth."],
    confidence: "medium",
    isMock: true
  },
  transferFits: [
    { id: "mock-fit-tackle", playerId: "mock-transfer-tackle", playerName: "Mock Transfer Tackle", position: "OT", rosterNeedFit: 96, playingTimeFit: 88, schemeFitPlaceholder: 80, eligibilityFit: 72, experienceFit: 91, geographicFit: 64, coachingRelationshipFit: 58, nilEnvironmentPlaceholder: "Unknown mock NIL environment", overallTransferFitScore: 86, confidence: "medium", isMock: true },
    { id: "mock-fit-corner", playerId: "mock-transfer-corner", playerName: "Mock Transfer Corner", position: "CB", rosterNeedFit: 87, playingTimeFit: 78, schemeFitPlaceholder: 75, eligibilityFit: 84, experienceFit: 73, geographicFit: 70, coachingRelationshipFit: 66, nilEnvironmentPlaceholder: "Estimated mock fit only", overallTransferFitScore: 79, confidence: "medium", isMock: true },
    { id: "mock-fit-qb", playerId: "mock-transfer-qb", playerName: "Mock Veteran QB", position: "QB", rosterNeedFit: 67, playingTimeFit: 52, schemeFitPlaceholder: 71, eligibilityFit: 89, experienceFit: 92, geographicFit: 61, coachingRelationshipFit: 55, nilEnvironmentPlaceholder: "Unknown mock NIL environment", overallTransferFitScore: 70, confidence: "low", isMock: true }
  ],
  opportunities: [
    { id: "mock-opportunity-ol", title: "Mock: Add immediate starter at left tackle", urgency: "critical", impact: 94, confidence: "medium", evidencePlaceholder: "Depth chart risk + scholarship opening + transfer fit signal", relatedPosition: "OL", recommendedAction: "Prioritize veteran tackle with multi-year eligibility if available.", isMock: true },
    { id: "mock-opportunity-db", title: "Mock: Balance 2027 defensive back class", urgency: "high", impact: 82, confidence: "medium", evidencePlaceholder: "Scholarship IQ bottleneck + depth chart risk", relatedPosition: "DB", recommendedAction: "Target younger corner depth and retention planning.", isMock: true },
    { id: "mock-opportunity-dl", title: "Mock: Reduce portal dependency at defensive line", urgency: "moderate", impact: 76, confidence: "medium", evidencePlaceholder: "Roster DNA weakness + forecast pressure", relatedPosition: "DL", recommendedAction: "Increase developmental pipeline and add veteran depth selectively.", isMock: true }
  ],
  strategies: [
    { id: "mock-strategy-portal-now", title: "Build through portal now", summary: "Use targeted veteran additions to stabilize immediate line risk.", confidence: "medium", supportingRosterSignals: ["mock-need-ol", "mock-fit-tackle"], simulationStatus: "simulated", isMock: true },
    { id: "mock-strategy-retention", title: "Prioritize retention", summary: "Protect leadership continuity while class balance normalizes.", confidence: "medium", supportingRosterSignals: ["mock-roster-chemistry", "mock-scholarship-iq"], simulationStatus: "assumption_based", isMock: true },
    { id: "mock-strategy-younger-upside", title: "Target younger upside transfers", summary: "Balance immediate needs with 2027 scholarship pressure.", confidence: "low", supportingRosterSignals: ["mock-need-db", "mock-forecast-2027"], simulationStatus: "projected", isMock: true }
  ],
  simulations: [
    { id: "mock-sim-add-transfer", simulationType: "add_transfer_player", title: "Add Mock Transfer Tackle", beforeState: "OL stability 61", afterState: "OL stability 78", projectedImpact: 17, confidence: "medium", assumptions: ["Player is eligible", "Scholarship opening exists", "Scheme fit placeholder is directionally useful"], risk: "Could create class-year imbalance if another OL is added.", disclaimer: "Mock simulation only. Not a real roster claim.", isMock: true },
    { id: "mock-sim-remove-player", simulationType: "remove_player", title: "Remove Mock DB Starter", beforeState: "DB depth 8", afterState: "DB depth 7 with higher volatility", projectedImpact: -12, confidence: "low", assumptions: ["Departure risk placeholder", "No verified departure"], risk: "Simulation is sensitive to unverified assumptions.", disclaimer: "Projected scenario only. No real player movement implied.", isMock: true },
    { id: "mock-sim-forecast", simulationType: "multi_year_forecast", title: "Three-year scholarship balance", beforeState: "2026 pressure moderate", afterState: "2028 pressure stable if younger depth added", projectedImpact: 11, confidence: "medium", assumptions: ["Mock class distribution", "No real attrition data", "Placeholder scholarship limit"], risk: "Future roster changes could invalidate projection.", disclaimer: "Mock multi-year forecast only.", isMock: true }
  ],
  forecast: [
    { id: "mock-forecast-2026", year: "Current year", projectedPositionDepth: { QB: 3, OL: 14, DL: 11, DB: 15 }, scholarshipPressure: "moderate", departureRiskPlaceholder: "moderate", recruitingNeed: "Target OL depth", portalNeed: "Veteran tackle", confidence: "medium", isMock: true },
    { id: "mock-forecast-2027", year: "Next year", projectedPositionDepth: { QB: 2, OL: 12, DL: 10, DB: 13 }, scholarshipPressure: "high", departureRiskPlaceholder: "high", recruitingNeed: "Balance DB class", portalNeed: "Corner depth", confidence: "medium", isMock: true },
    { id: "mock-forecast-2028", year: "Two years out", projectedPositionDepth: { QB: 3, OL: 13, DL: 10, DB: 14 }, scholarshipPressure: "stable", departureRiskPlaceholder: "moderate", recruitingNeed: "Developmental DL", portalNeed: "Selective veteran depth", confidence: "low", isMock: true },
    { id: "mock-forecast-2029", year: "Three years out", projectedPositionDepth: { QB: 3, OL: 14, DL: 11, DB: 14 }, scholarshipPressure: "stable", departureRiskPlaceholder: "moderate", recruitingNeed: "Pipeline maintenance", portalNeed: "Unknown", confidence: "low", isMock: true }
  ],
  insights: [
    { id: "mock-atlas-insight-ol", title: "Mock: Offensive line is the highest urgency group.", confidence: "medium", evidenceCount: 5, affectedPositions: ["OL"], simulationStatus: "simulated", sourcePlaceholder: "Mock roster signals", intelligenceCoreApproval: "pending_mock_review", isMock: true },
    { id: "mock-atlas-insight-tackle", title: "Mock: Adding a veteran tackle improves roster stability.", confidence: "medium", evidenceCount: 4, affectedPositions: ["OL"], simulationStatus: "simulated", sourcePlaceholder: "Mock simulation output", intelligenceCoreApproval: "pending_mock_review", isMock: true },
    { id: "mock-atlas-insight-db", title: "Mock: Scholarship pressure is projected at defensive back.", confidence: "medium", evidenceCount: 3, affectedPositions: ["DB"], simulationStatus: "projected", sourcePlaceholder: "Mock Scholarship IQ", intelligenceCoreApproval: "pending_mock_review", isMock: true },
    { id: "mock-atlas-insight-dependency", title: "Mock: Transfer dependency is increasing.", confidence: "low", evidenceCount: 3, affectedPositions: ["DL", "OL"], simulationStatus: "assumption_based", sourcePlaceholder: "Mock Roster DNA", intelligenceCoreApproval: "pending_mock_review", isMock: true }
  ],
  isMock: true
};
