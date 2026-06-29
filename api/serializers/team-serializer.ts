import type { Team } from "@/types/portal";
import type { TeamIntelligenceProfile } from "@/types/team-intelligence";

export function serializeTeam(team: Team) {
  return {
    id: team.id,
    name: team.name,
    sport: team.sport,
    conference: team.conference,
    confidenceScore: 0,
    sourceCount: 0,
    isMock: team.isMock
  };
}

export function serializeTeamIntelligence(profile: TeamIntelligenceProfile) {
  return {
    id: profile.id,
    schoolName: profile.schoolName,
    sport: profile.sport,
    conference: profile.conference,
    headCoach: profile.headCoach,
    portalPulseTeamScore: profile.teamScore.overall,
    nationalTransferRanking: profile.nationalTransferRanking,
    conferenceRanking: profile.conferenceRanking,
    portalGrade: profile.portalGrade,
    confidenceScore: 70,
    sourceCount: profile.timeline.reduce((sum, event) => sum + event.sourceCount, 0),
    lastUpdated: profile.lastUpdated,
    isMock: profile.isMock
  };
}
