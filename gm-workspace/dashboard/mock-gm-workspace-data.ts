import { mockAtlasWorkspace } from "@/platform/roster/core/mock-roster-data";
import type { GMDashboardData } from "@/platform/gm-workspace/dashboard/gm-workspace-types";

const lastUpdated = "2026-06-28T21:30:00.000Z";

export const mockGMDashboardData: GMDashboardData = {
  id: "mock-gm-dashboard",
  programName: "Mock State Football",
  sport: "Football",
  executiveBrief: {
    id: "mock-executive-brief",
    headline: "Mock executive brief: roster stability is solid, but offensive line succession needs leadership attention.",
    topPriorities: [
      {
        id: "mock-priority-ol",
        title: "Address offensive line succession",
        summary: "Mock Atlas signals show the highest projected urgency at offensive tackle.",
        priorityLevel: "critical",
        confidence: "medium",
        evidencePlaceholder: "Mock depth chart risk + Scholarship IQ opening + Transfer Fit signal",
        lastUpdated,
        classification: "projection",
        isMock: true
      },
      {
        id: "mock-priority-retention",
        title: "Protect returning leadership",
        summary: "Mock Roster Chemistry improves when veteran continuity remains intact.",
        priorityLevel: "high",
        confidence: "medium",
        evidencePlaceholder: "Mock Roster Chemistry + Roster DNA continuity signal",
        lastUpdated,
        classification: "analysis",
        isMock: true
      }
    ],
    criticalRisks: [
      {
        id: "mock-risk-db",
        title: "Defensive back class-year bottleneck",
        summary: "Mock Scholarship IQ projects future pressure in the defensive back room.",
        priorityLevel: "high",
        confidence: "medium",
        evidencePlaceholder: "Mock Scholarship IQ + multi-year forecast",
        lastUpdated,
        classification: "projection",
        isMock: true
      }
    ],
    emergingOpportunities: [
      {
        id: "mock-opportunity-veteran-tackle",
        title: "Veteran tackle creates immediate roster value",
        summary: "A fictional transfer archetype improves roster stability in the mock simulation.",
        priorityLevel: "high",
        confidence: "medium",
        evidencePlaceholder: "Mock Transfer Fit + roster simulation",
        lastUpdated,
        classification: "simulation",
        isMock: true
      }
    ],
    transferMarketSummary: "Mock Mercury context: position scarcity is elevated at offensive tackle and stable at skill positions.",
    recruitingStatus: "Mock recruiting pipeline is balanced regionally, with future class balance requiring monitoring.",
    rosterForecast: "Mock three-year outlook improves if younger defensive back depth and veteran offensive line help are added.",
    historicalContext: "Mock Apollo context: similar prior roster states improved when leadership continuity remained stable.",
    aiExecutiveSummary: "Mock Athena summary: leadership should review OL investment, DB scholarship pressure, and retention strategy before expanding the transfer board.",
    confidence: "medium",
    evidenceCount: 14,
    sourceCount: 0,
    lastUpdated,
    isMock: true
  },
  rosterHealth: {
    id: "mock-roster-health",
    overallScore: 76,
    trendPlaceholder: "+3 this week in mock executive model",
    categories: [
      { id: "mock-health-depth", label: "Depth", score: 72, trend: "up", explanation: "Mock depth improves with one simulated veteran addition.", classification: "simulation", isMock: true },
      { id: "mock-health-experience", label: "Experience", score: 78, trend: "flat", explanation: "Returning leadership is stable in Atlas mock data.", classification: "analysis", isMock: true },
      { id: "mock-health-balance", label: "Class Balance", score: 69, trend: "down", explanation: "Future DB pressure reduces the mock long-term balance score.", classification: "projection", isMock: true },
      { id: "mock-health-scholarships", label: "Scholarship Balance", score: 74, trend: "flat", explanation: "Four projected openings create flexibility but require prioritization.", classification: "projection", isMock: true },
      { id: "mock-health-chemistry", label: "Roster Chemistry", score: mockAtlasWorkspace.rosterChemistry.overallScore, trend: "up", explanation: "Mock continuity indicators remain favorable.", classification: "analysis", isMock: true }
    ],
    riskIndicators: ["Mock OL succession risk", "Mock DB class bottleneck", "Mock transfer dependency at DL"],
    explainThis: "Roster Health is a mock executive metric combining depth, experience, class balance, scholarship pressure, transfer dependency, and roster chemistry. It is not verified reporting.",
    confidence: "medium",
    isMock: true
  },
  scholarshipIQ: {
    sportId: mockAtlasWorkspace.scholarshipIQ.sportId,
    scholarshipModel: mockAtlasWorkspace.scholarshipIQ.scholarshipModel,
    scholarshipLimitLabel: mockAtlasWorkspace.scholarshipIQ.scholarshipLimitLabel,
    usedScholarships: mockAtlasWorkspace.scholarshipIQ.usedScholarships,
    scholarshipLimitPlaceholder: mockAtlasWorkspace.scholarshipIQ.totalScholarshipsPlaceholder,
    projectedOpenings: mockAtlasWorkspace.scholarshipIQ.projectedOpenings,
    overloadedPositions: mockAtlasWorkspace.scholarshipIQ.overfilledPositions,
    futureShortages: mockAtlasWorkspace.scholarshipIQ.underfilledPositions,
    recommendedActions: ["Reserve one opening for veteran OL", "Balance DB class-year distribution", "Protect flexibility for late portal window"],
    confidence: "medium",
    isMock: true
  },
  rosterDNA: {
    score: mockAtlasWorkspace.rosterDNA.score,
    summary: "Mock Roster DNA shows a veteran core with strong leadership continuity and targeted portal dependency.",
    confidence: mockAtlasWorkspace.rosterDNA.confidence,
    isMock: true
  },
  teamGenome: {
    summary: mockAtlasWorkspace.teamGenome.rosterIdentity,
    confidence: mockAtlasWorkspace.teamGenome.confidence,
    isMock: true
  },
  transferRisk: [
    {
      id: "mock-transfer-risk-depth",
      title: "Depth volatility if OL target pool dries up",
      summary: "Mock scenario analysis shows roster stability is sensitive to tackle availability.",
      priorityLevel: "high",
      confidence: "medium",
      evidencePlaceholder: "Mock Transfer Fit + Position Scarcity",
      lastUpdated,
      classification: "projection",
      isMock: true
    }
  ],
  transferOpportunities: [
    {
      id: "mock-transfer-opportunity-ol",
      title: "Immediate contributor at offensive tackle",
      summary: "Mock transfer portfolio ranks veteran tackle archetype as the highest value opportunity.",
      priorityLevel: "critical",
      confidence: "medium",
      evidencePlaceholder: "Mock Transfer Fit 86 + top roster need",
      lastUpdated,
      classification: "simulation",
      isMock: true
    }
  ],
  transferPortfolio: [
    {
      id: "mock-portfolio-ot",
      playerName: "Mock Transfer Tackle",
      position: "OT",
      portfolioStatus: "high_priority",
      transferFitScore: 86,
      confidence: "medium",
      programNeed: "Immediate OL stabilization",
      rosterImpact: "+17 mock OL stability in simulation",
      timelinePlaceholder: "Monitor during next mock portal window",
      evidencePlaceholder: "Mock roster need + transfer fit",
      isMock: true
    },
    {
      id: "mock-portfolio-cb",
      playerName: "Mock Transfer Corner",
      position: "CB",
      portfolioStatus: "future_fit",
      transferFitScore: 79,
      confidence: "medium",
      programNeed: "Balance future DB class pressure",
      rosterImpact: "Improves 2027 depth projection",
      timelinePlaceholder: "Developmental fit placeholder",
      evidencePlaceholder: "Mock Scholarship IQ + position need",
      isMock: true
    },
    {
      id: "mock-portfolio-qb",
      playerName: "Mock Veteran QB",
      position: "QB",
      portfolioStatus: "monitoring",
      transferFitScore: 70,
      confidence: "low",
      programNeed: "Experienced backup insurance",
      rosterImpact: "Moderate leadership and depth benefit",
      timelinePlaceholder: "Low-confidence monitoring only",
      evidencePlaceholder: "Mock depth chart backup scenario",
      isMock: true
    }
  ],
  recruitingPipeline: {
    id: "mock-recruiting-pipeline",
    pipelineStrength: 73,
    regionalFocus: ["Mock Midwest", "Mock Plains", "Mock Southeast"],
    positionPriorities: ["OT", "CB", "DL"],
    futureClassBalance: "Mock future class needs younger DB depth and developmental tackles.",
    relationshipPlaceholders: ["Mock high school pipeline", "Mock coach-region relationship", "Mock junior college contact"],
    historicalTrend: "Mock trend indicates stable regional footprint with emerging national reach.",
    cartographerSignal: "Mock Cartographer signal: strongest pipeline cluster remains within a 450-mile radius.",
    confidence: "medium",
    isMock: true
  },
  organizationalPlans: [
    { id: "mock-plan-three-year", title: "Three-year roster outlook", planningHorizon: "three_year", summary: "Stability improves if OL and DB succession are addressed now.", recommendation: "Allocate at least two acquisition paths to trench depth.", confidence: "medium", classification: "projection", isMock: true },
    { id: "mock-plan-five-year", title: "Five-year scholarship outlook", planningHorizon: "five_year", summary: "Mock class distribution suggests leadership should preserve future flexibility.", recommendation: "Avoid overloading one position group during the next cycle.", confidence: "low", classification: "projection", isMock: true },
    { id: "mock-plan-scenario", title: "Scenario planning", planningHorizon: "scenario", summary: "Labs simulations should compare veteran transfer vs younger developmental target.", recommendation: "Run two roster before/after scenarios before expanding the board.", confidence: "medium", classification: "simulation", isMock: true }
  ],
  executiveCouncil: [
    { id: "mock-council-athena", agentName: "Athena", focusArea: "Executive synthesis", recommendation: "Discuss OL succession, DB pressure, and retention as a combined executive agenda.", whyItMatters: "These mock signals affect roster health, scholarship flexibility, and transfer strategy together.", confidence: "medium", evidencePlaceholder: "Mock Intelligence Core-ready executive brief", submittedToIntelligenceCore: true, isMock: true },
    { id: "mock-council-atlas", agentName: "Atlas", focusArea: "Roster construction", recommendation: "Prioritize a veteran tackle archetype before adding lower-fit depth.", whyItMatters: "Mock Transfer Fit and Roster Health improve most in that scenario.", confidence: "medium", evidencePlaceholder: "Mock Atlas Transfer Fit + simulation", submittedToIntelligenceCore: true, isMock: true },
    { id: "mock-council-mercury", agentName: "Mercury", focusArea: "Transfer market", recommendation: "Move early if tackle scarcity remains elevated.", whyItMatters: "Mock market pressure suggests waiting reduces optionality.", confidence: "low", evidencePlaceholder: "Mock TMX position scarcity signal", submittedToIntelligenceCore: true, isMock: true },
    { id: "mock-council-oracle", agentName: "Oracle", focusArea: "Projection risk", recommendation: "Treat fit scores as directional until source-backed interest exists.", whyItMatters: "Predictions are projections, never facts.", confidence: "medium", evidencePlaceholder: "Mock Oracle risk model", submittedToIntelligenceCore: true, isMock: true },
    { id: "mock-council-apollo", agentName: "Apollo", focusArea: "Historical context", recommendation: "Compare the current mock roster state against last-cycle stability snapshots.", whyItMatters: "Historical replay helps distinguish durable trends from temporary movement.", confidence: "medium", evidencePlaceholder: "Mock Apollo snapshot comparison", submittedToIntelligenceCore: true, isMock: true },
    { id: "mock-council-librarian", agentName: "Librarian", focusArea: "Relationship graph", recommendation: "Map coach-region and player-position relationships before final board ranking.", whyItMatters: "Relationship strength can explain why a transfer target fits the program context.", confidence: "medium", evidencePlaceholder: "Mock Knowledge Graph relationships", submittedToIntelligenceCore: true, isMock: true },
    { id: "mock-council-cartographer", agentName: "Cartographer", focusArea: "Geographic strategy", recommendation: "Maintain regional pipeline while testing one national transfer lane.", whyItMatters: "Mock spatial intelligence suggests regional retention remains a strategic advantage.", confidence: "medium", evidencePlaceholder: "Mock Cartographer pipeline signal", submittedToIntelligenceCore: true, isMock: true }
  ],
  investmentBoard: [
    { id: "mock-invest-ol", assetType: "position_investment", title: "Offensive tackle investment", allocationPlaceholder: "High priority roster allocation", expectedValue: "Immediate roster stability", risk: "critical", confidence: "medium", isMock: true },
    { id: "mock-invest-retention", assetType: "retention_priority", title: "Leadership continuity", allocationPlaceholder: "Protect veteran core", expectedValue: "Improved Roster Chemistry", risk: "moderate", confidence: "medium", isMock: true },
    { id: "mock-invest-development", assetType: "development_pipeline", title: "Young DB development", allocationPlaceholder: "Future class balance", expectedValue: "Reduced scholarship bottleneck", risk: "high", confidence: "medium", isMock: true }
  ],
  reports: [
    { id: "mock-report-daily", title: "Executive Daily Report", cadence: "daily", sections: ["Executive Brief", "Roster Health", "Transfer Opportunities"], exportStatus: "placeholder", isMock: true },
    { id: "mock-report-weekly", title: "Weekly Personnel Report", cadence: "weekly", sections: ["Scholarship IQ", "Transfer Portfolio", "Recruiting Pipeline"], exportStatus: "placeholder", isMock: true },
    { id: "mock-report-board", title: "Board Presentation Placeholder", cadence: "board", sections: ["Program Health Summary", "Risk Management", "Long-term Outlook"], exportStatus: "placeholder", isMock: true }
  ],
  confidenceSummary: "Mock GM Workspace confidence is medium overall because signals are structured but not source-backed production data.",
  evidenceSummary: "Evidence placeholders reference Atlas, Mercury, Apollo, Cartographer, Librarian, Oracle, and Athena mock outputs. No real claims are included.",
  simulationReminder: "Simulations, projections, and mock strategy recommendations are not verified reporting and cannot be surfaced as facts.",
  lastUpdated,
  isMock: true
};
