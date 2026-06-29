import type { CommandCenterSnapshot } from "@/types/command-center";

export function serializeCommandCenterSnapshot(snapshot: CommandCenterSnapshot) {
  return {
    id: snapshot.id,
    generatedAt: snapshot.generatedAt,
    activePortalEntries: snapshot.activePortalEntries,
    breakingUpdates: snapshot.breakingUpdates,
    marketMovers: snapshot.marketMovers,
    predictionMovers: snapshot.predictionMovers,
    teamsTracked: snapshot.teamsTracked,
    nilMovements: snapshot.nilMovements,
    confidenceAverage: snapshot.confidenceAverage,
    modules: snapshot.modules,
    isMock: snapshot.isMock
  };
}
