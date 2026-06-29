import type { ConferenceTransferRanking, MomentumRanking, NILMarketRanking, PlayerTransferRanking, PositionGroupRanking, TeamTransferRanking } from "@/types/rankings";

const lastUpdated = "2026-06-28T12:45:00.000Z";

const factors = [
  { label: "Source confidence", value: 72, isMock: true },
  { label: "Movement velocity", value: 81, isMock: true },
  { label: "Roster impact", value: 76, isMock: true }
];

export const mockPlayerTransferRankings: PlayerTransferRanking[] = [
  { id: "rank-player-1", rankingType: "players", rank: 1, previousRank: 3, rankChange: 2, movement: "up", score: 92, confidenceScore: 72, sourceCount: 3, lastUpdated, explanation: "Mock ranking driven by fictional demand, visit timing, and roster-fit movement.", factors, history: [5, 4, 3, 1], isMock: true, playerName: "Marcus Vale", position: "QB", sport: "Football", previousSchool: "Lakefront State", currentStatus: "entered", portalPulseScore: 91, demandScore: 88, predictionMomentum: 74, nilActivityLabel: "Estimated mock activity", confidence: "medium" },
  { id: "rank-player-2", rankingType: "players", rank: 2, previousRank: 1, rankChange: -1, movement: "down", score: 89, confidenceScore: 68, sourceCount: 2, lastUpdated, explanation: "Mock ranking softened after fictional prediction momentum cooled.", factors, history: [1, 1, 1, 2], isMock: true, playerName: "Jalen North", position: "OT", sport: "Football", previousSchool: "Prairie A&M", currentStatus: "available", portalPulseScore: 88, demandScore: 91, predictionMomentum: 62, nilActivityLabel: "Unknown", confidence: "medium" },
  { id: "rank-player-3", rankingType: "players", rank: 3, previousRank: 5, rankChange: 2, movement: "up", score: 84, confidenceScore: 61, sourceCount: 2, lastUpdated, explanation: "Mock ranking rose because fictional position scarcity increased.", factors, history: [8, 6, 5, 3], isMock: true, playerName: "Eliya Brooks", position: "G", sport: "Women's Basketball", previousSchool: "Riverbend College", currentStatus: "available", portalPulseScore: 84, demandScore: 79, predictionMomentum: 71, nilActivityLabel: "Low mock activity", confidence: "medium" }
];

export const mockTeamTransferRankings: TeamTransferRanking[] = [
  { id: "rank-team-1", rankingType: "teams", rank: 1, previousRank: 2, rankChange: 1, movement: "up", score: 94, confidenceScore: 76, sourceCount: 4, lastUpdated, explanation: "Mock team ranking led by transfer class impact, roster fit, and positive momentum.", factors, history: [4, 3, 2, 1], isMock: true, teamName: "Metro University", conference: "Mock Central", portalPulseTeamScore: 86, commits: 8, losses: 3, netTalentScore: 18, rosterFitScore: 82, portalClassImpact: 88, confidence: "medium" },
  { id: "rank-team-2", rankingType: "teams", rank: 2, previousRank: 1, rankChange: -1, movement: "down", score: 88, confidenceScore: 70, sourceCount: 3, lastUpdated, explanation: "Mock team ranking remains strong but lost top movement slot.", factors, history: [1, 1, 1, 2], isMock: true, teamName: "Coastal Atlantic", conference: "Mock Atlantic", portalPulseTeamScore: 78, commits: 6, losses: 2, netTalentScore: 15, rosterFitScore: 76, portalClassImpact: 79, confidence: "medium" },
  { id: "rank-team-3", rankingType: "teams", rank: 3, previousRank: 4, rankChange: 1, movement: "up", score: 81, confidenceScore: 64, sourceCount: 2, lastUpdated, explanation: "Mock ranking improved after fictional needs were partially filled.", factors, history: [6, 5, 4, 3], isMock: true, teamName: "Prairie A&M", conference: "Mock Plains", portalPulseTeamScore: 69, commits: 4, losses: 5, netTalentScore: 3, rosterFitScore: 68, portalClassImpact: 71, confidence: "medium" }
];

export const mockConferenceTransferRankings: ConferenceTransferRanking[] = [
  { id: "rank-conf-1", rankingType: "conferences", rank: 1, previousRank: 1, rankChange: 0, movement: "flat", score: 87, confidenceScore: 69, sourceCount: 4, lastUpdated, explanation: "Mock Central leads fictional net talent movement and team momentum.", factors, history: [1, 1, 1, 1], isMock: true, conference: "Mock Central", transfersIn: 42, transfersOut: 35, netTalentMovement: 7, topGainingTeam: "Metro University", mostActivePosition: "Offensive line", conferenceMomentumScore: 82, confidence: "medium" },
  { id: "rank-conf-2", rankingType: "conferences", rank: 2, previousRank: 3, rankChange: 1, movement: "up", score: 80, confidenceScore: 65, sourceCount: 3, lastUpdated, explanation: "Mock Atlantic rose on fictional receiver and defensive back movement.", factors, history: [4, 3, 3, 2], isMock: true, conference: "Mock Atlantic", transfersIn: 36, transfersOut: 32, netTalentMovement: 4, topGainingTeam: "Coastal Atlantic", mostActivePosition: "Wide receiver", conferenceMomentumScore: 76, confidence: "medium" }
];

export const mockPositionGroupRankings: PositionGroupRanking[] = [
  { id: "rank-pos-1", rankingType: "positions", rank: 1, previousRank: 2, rankChange: 1, movement: "up", score: 91, confidenceScore: 66, sourceCount: 3, lastUpdated, explanation: "Mock offensive line market is scarce and demand-heavy.", factors, history: [4, 3, 2, 1], isMock: true, position: "Offensive Line", playerVolume: 28, elitePlayerCount: 5, averagePortalPulseScore: 81, demandScore: 94, nilActivity: "Moderate", mostActiveTeams: ["Metro University", "Prairie A&M"], marketScarcityLabel: "Critical scarcity" },
  { id: "rank-pos-2", rankingType: "positions", rank: 2, previousRank: 1, rankChange: -1, movement: "down", score: 86, confidenceScore: 64, sourceCount: 2, lastUpdated, explanation: "Mock quarterback demand remains high but volume improved.", factors, history: [1, 1, 1, 2], isMock: true, position: "Quarterback", playerVolume: 16, elitePlayerCount: 3, averagePortalPulseScore: 84, demandScore: 88, nilActivity: "High", mostActiveTeams: ["Metro University", "Summit Tech"], marketScarcityLabel: "High scarcity" }
];

export const mockNILMarketRankings: NILMarketRanking[] = [
  { id: "rank-nil-1", rankingType: "nil", rank: 1, previousRank: 1, rankChange: 0, movement: "flat", score: 84, confidenceScore: 55, sourceCount: 2, lastUpdated, explanation: "Mock NIL market strength is based on fictional activity labels, not verified values.", factors, history: [1, 1, 1, 1], isMock: true, schoolOrTeam: "Metro University", collectiveActivity: "High mock activity", estimatedMarketStrengthLabel: "Strong estimate", playerActivity: 12, reportedDealCount: 4, nilStatus: "estimated", confidence: "medium", disclaimer: "NIL rankings are estimates unless confirmed by sourced records." },
  { id: "rank-nil-2", rankingType: "nil", rank: 2, previousRank: 4, rankChange: 2, movement: "up", score: 78, confidenceScore: 48, sourceCount: 1, lastUpdated, explanation: "Mock NIL activity rose but remains low-confidence.", factors, history: [5, 4, 4, 2], isMock: true, schoolOrTeam: "Coastal Atlantic", collectiveActivity: "Moderate mock activity", estimatedMarketStrengthLabel: "Reported estimate", playerActivity: 9, reportedDealCount: 2, nilStatus: "rumored", confidence: "low", disclaimer: "Do not treat mock NIL estimates as facts." }
];

export const mockMomentumRankings: MomentumRanking[] = [
  { id: "rank-mom-1", rankingType: "momentum", rank: 1, previousRank: 5, rankChange: 4, movement: "up", score: 96, confidenceScore: 70, sourceCount: 3, lastUpdated, explanation: "Fastest fictional rise across prediction, source, and roster-fit signals.", factors, history: [9, 7, 5, 1], isMock: true, entityName: "Metro University", entityType: "team", momentumCategory: "Fastest rising team", weeklyChange: 18, monthlyChange: 31, confidence: "medium" },
  { id: "rank-mom-2", rankingType: "momentum", rank: 2, previousRank: 6, rankChange: 4, movement: "up", score: 91, confidenceScore: 63, sourceCount: 2, lastUpdated, explanation: "Mock player momentum accelerated after fictional demand increased.", factors, history: [8, 7, 6, 2], isMock: true, entityName: "Marcus Vale", entityType: "player", momentumCategory: "Fastest rising player", weeklyChange: 14, monthlyChange: 24, confidence: "medium" }
];
