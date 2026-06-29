import type { Player } from "@/types/portal";

export function serializePlayer(player: Player) {
  return {
    id: player.id,
    name: player.name,
    sport: player.sport,
    position: player.position,
    classYear: player.classYear,
    previousSchool: player.previousSchool,
    currentStatus: player.currentStatus,
    conference: player.conference,
    portalPulseScore: player.confidenceScore,
    confidence: player.confidence,
    confidenceScore: player.confidenceScore,
    sourceCount: 1,
    lastUpdated: player.lastUpdated,
    isMock: player.isMock
  };
}
