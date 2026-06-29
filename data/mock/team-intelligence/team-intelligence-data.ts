import type { TeamIntelligenceProfile } from "@/types/team-intelligence";

const lastUpdated = "2026-06-28T12:30:00.000Z";

export const mockTeamIntelligenceProfiles: TeamIntelligenceProfile[] = [
  {
    id: "metro-university",
    schoolName: "Metro University",
    logoInitials: "MU",
    sport: "Football",
    conference: "Mock Central",
    headCoach: "Avery Cole",
    nationalTransferRanking: 4,
    conferenceRanking: 1,
    portalGrade: "A-",
    lastUpdated,
    teamScore: {
      overall: 86,
      weeklyTrend: 4,
      monthlyTrend: 11,
      factors: [
        { label: "Portal additions", score: 88, isMock: true },
        { label: "Roster balance", score: 81, isMock: true },
        { label: "Needs filled", score: 76, isMock: true },
        { label: "Prediction confidence", score: 72, isMock: true },
        { label: "NIL market strength", score: 69, isMock: true }
      ],
      history: [68, 70, 74, 77, 82, 86],
      isMock: true
    },
    roster: {
      returningStarters: 14,
      incomingTransfers: 8,
      outgoingTransfers: 3,
      freshmen: 18,
      seniorsGraduating: 9,
      scholarshipCount: 82,
      openScholarships: 3,
      positionBreakdown: [
        { position: "QB", total: 4, transfersIn: 1, transfersOut: 0, experienceScore: 76, isMock: true },
        { position: "RB", total: 6, transfersIn: 1, transfersOut: 1, experienceScore: 72, isMock: true },
        { position: "WR", total: 11, transfersIn: 2, transfersOut: 0, experienceScore: 78, isMock: true },
        { position: "OL", total: 14, transfersIn: 2, transfersOut: 2, experienceScore: 61, isMock: true },
        { position: "DL", total: 13, transfersIn: 1, transfersOut: 0, experienceScore: 80, isMock: true },
        { position: "DB", total: 12, transfersIn: 1, transfersOut: 0, experienceScore: 74, isMock: true }
      ],
      experienceDistribution: [
        { label: "Freshmen", count: 18, isMock: true },
        { label: "Sophomores", count: 21, isMock: true },
        { label: "Juniors", count: 24, isMock: true },
        { label: "Seniors", count: 19, isMock: true }
      ],
      isMock: true
    },
    depthChart: [
      {
        phase: "offense",
        positions: [
          { position: "QB", projectedStarter: "Marcus Vale", competitionLevel: "moderate", experience: "RS Sophomore", transferAdditions: 1, rosterConfidence: 72, aiConfidence: "medium", isMock: true },
          { position: "RB", projectedStarter: "Damon Pike", competitionLevel: "stable", experience: "Junior", transferAdditions: 1, rosterConfidence: 78, aiConfidence: "medium", isMock: true },
          { position: "WR-X", projectedStarter: "Camden Frost", competitionLevel: "high", experience: "Freshman", transferAdditions: 2, rosterConfidence: 64, aiConfidence: "low", isMock: true },
          { position: "LT", projectedStarter: "Jalen North", competitionLevel: "critical", experience: "Junior", transferAdditions: 2, rosterConfidence: 58, aiConfidence: "medium", isMock: true }
        ],
        isMock: true
      },
      {
        phase: "defense",
        positions: [
          { position: "EDGE", projectedStarter: "Tariq Stone", competitionLevel: "stable", experience: "Senior", transferAdditions: 1, rosterConfidence: 82, aiConfidence: "high", isMock: true },
          { position: "LB", projectedStarter: "Micah Vale", competitionLevel: "moderate", experience: "Sophomore", transferAdditions: 0, rosterConfidence: 69, aiConfidence: "medium", isMock: true },
          { position: "CB", projectedStarter: "Noah Redd", competitionLevel: "high", experience: "Junior", transferAdditions: 1, rosterConfidence: 66, aiConfidence: "medium", isMock: true }
        ],
        isMock: true
      },
      {
        phase: "special_teams",
        positions: [
          { position: "K", projectedStarter: "Leo Marsh", competitionLevel: "stable", experience: "Senior", transferAdditions: 0, rosterConfidence: 80, aiConfidence: "medium", isMock: true },
          { position: "P", projectedStarter: "Owen Hartwell", competitionLevel: "moderate", experience: "Freshman", transferAdditions: 0, rosterConfidence: 63, aiConfidence: "low", isMock: true }
        ],
        isMock: true
      }
    ],
    timeline: [
      { id: "team-event-1", date: "2026-06-28", eventType: "commitment", summary: "Mock commitment signal added for an offensive line target.", confidence: "medium", sourceCount: 2, relatedPlayers: ["Jalen North"], isMock: true },
      { id: "team-event-2", date: "2026-06-27", eventType: "portal_entry", summary: "Mock depth concern increased after a fictional defensive back entered the portal.", confidence: "medium", sourceCount: 1, relatedPlayers: ["Noah Redd"], isMock: true },
      { id: "team-event-3", date: "2026-06-25", eventType: "ranking_change", summary: "Mock national transfer ranking rose after two fictional additions.", confidence: "high", sourceCount: 3, relatedPlayers: ["Marcus Vale", "Camden Frost"], isMock: true },
      { id: "team-event-4", date: "2026-06-23", eventType: "prediction_change", summary: "Mock prediction momentum shifted toward a line-of-scrimmage need.", confidence: "medium", sourceCount: 2, relatedPlayers: ["Jalen North"], isMock: true }
    ],
    needs: [
      { id: "need-ol", position: "Offensive Line", urgency: "critical", urgencyScore: 91, currentDepth: 6, transferTargets: ["Jalen North", "Kellan Saye"], projectedImpact: 86, scholarshipAvailability: 2, confidence: "medium", isMock: true },
      { id: "need-cb", position: "Cornerback", urgency: "high", urgencyScore: 78, currentDepth: 5, transferTargets: ["Noah Redd"], projectedImpact: 74, scholarshipAvailability: 1, confidence: "medium", isMock: true },
      { id: "need-wr", position: "Wide Receiver", urgency: "moderate", urgencyScore: 63, currentDepth: 9, transferTargets: ["Camden Frost"], projectedImpact: 69, scholarshipAvailability: 1, confidence: "low", isMock: true },
      { id: "need-dl", position: "Defensive Line", urgency: "stable", urgencyScore: 36, currentDepth: 10, transferTargets: [], projectedImpact: 52, scholarshipAvailability: 0, confidence: "high", isMock: true }
    ],
    portalClass: {
      totalCommits: 8,
      averageTransferRating: 88,
      averagePortalPulseScore: 81,
      offenseCommits: 5,
      defenseCommits: 3,
      positionsFilled: ["QB", "WR", "OL", "EDGE", "CB"],
      geographicMapLabel: "Mock Midwest and Southwest footprint",
      conferenceComparisonRank: 1,
      nationalComparisonRank: 4,
      isMock: true
    },
    momentum: {
      weeklyMomentum: 74,
      monthlyMomentum: 86,
      commitmentMomentum: 78,
      visitMomentum: 71,
      predictionMomentum: 69,
      portalActivityScore: 84,
      sourceActivityScore: 76,
      sparkline: [56, 60, 63, 71, 79, 86],
      movement: "up",
      isMock: true
    },
    coaching: {
      headCoach: "Avery Cole",
      coordinators: ["Marlon Reed", "Sofia Grant"],
      tenure: "Year 3",
      transferSuccessScore: 79,
      recruitingProfile: "Mock staff profile leans toward line-of-scrimmage transfers and multi-year development targets.",
      portalTendencies: ["Early visit pushes", "Offensive line priority", "Regional relationship clustering"],
      coachingTree: ["Mock City College", "Lakefront State", "Metro University"],
      isMock: true
    },
    aiStorylines: [
      { id: "storyline-1", title: "Offensive line depth remains the priority.", summary: "Mock urgency, scholarship availability, and source activity all point to line depth.", confidence: "medium", confidenceScore: 71, evidenceCount: 3, relatedPlayers: ["Jalen North"], relatedPositions: ["OL"], sourceCount: 2, isMock: true },
      { id: "storyline-2", title: "Portal activity has increased this week.", summary: "Mock source volume and ranking movement rose together.", confidence: "medium", confidenceScore: 68, evidenceCount: 2, relatedPlayers: ["Marcus Vale", "Camden Frost"], relatedPositions: ["QB", "WR"], sourceCount: 3, isMock: true },
      { id: "storyline-3", title: "Confidence is rising around multiple targets.", summary: "Mock visit timing and team fit signals improved across several fictional targets.", confidence: "medium", confidenceScore: 66, evidenceCount: 2, relatedPlayers: ["Jalen North", "Noah Redd"], relatedPositions: ["OL", "CB"], sourceCount: 2, isMock: true }
    ],
    recruitingPipeline: {
      recruitingClassRank: "Mock top 25",
      transferClassRank: "Mock top 5",
      highSchoolPipeline: ["Metro Prep", "Riverbend Academy"],
      statePipeline: ["Mock State", "North Plains"],
      juniorCollegePipeline: ["Central Valley JC"],
      coachingRelationships: ["Regional offensive line network", "Mock Southwest skill pipeline"],
      isMock: true
    },
    conferenceComparison: [
      { team: "Metro University", portalAdditions: 8, portalLosses: 3, rosterScore: 84, teamScore: 86, positionalStrength: 78, momentum: 86, recruitingBalance: 76, isMock: true },
      { team: "Coastal Atlantic", portalAdditions: 6, portalLosses: 2, rosterScore: 79, teamScore: 78, positionalStrength: 74, momentum: 72, recruitingBalance: 71, isMock: true },
      { team: "Prairie A&M", portalAdditions: 4, portalLosses: 5, rosterScore: 68, teamScore: 69, positionalStrength: 62, momentum: 58, recruitingBalance: 64, isMock: true }
    ],
    teamComparison: [
      { metric: "Portal Pulse Team Score", teamValue: "86", peerValue: "78", leader: "team", isMock: true },
      { metric: "Transfer class rank", teamValue: "#4", peerValue: "#9", leader: "team", isMock: true },
      { metric: "Open scholarships", teamValue: "3", peerValue: "2", leader: "team", isMock: true },
      { metric: "Returning starters", teamValue: "14", peerValue: "15", leader: "peer", isMock: true },
      { metric: "Momentum", teamValue: "86", peerValue: "72", leader: "team", isMock: true }
    ],
    isMock: true
  }
];
