import type { ConfidenceLevel, Source } from "@/types/portal";
import { sourceRepository } from "@/server/repositories/source-repository";
import type { NormalizedContent, SourceRegistryEntry } from "@/server/ingestion/types";
import { reliabilityScorer } from "@/server/ingestion/sources/reliability-scorer";
import { sourceRegistry } from "@/server/ingestion/sources/source-registry";

export const sourceService = {
  async getSources(): Promise<Source[]> {
    return sourceRepository.findMany();
  },

  async getRegisteredSources(): Promise<SourceRegistryEntry[]> {
    return sourceRegistry;
  },

  async getRegisteredSourceById(id: string): Promise<SourceRegistryEntry | undefined> {
    return sourceRegistry.find((source) => source.id === id);
  },

  async getSourcesForClaim(claimId: string): Promise<Source[]> {
    return sourceRepository.findByClaimId(claimId);
  },

  async scoreSourceReliability(_source: Source): Promise<ConfidenceLevel> {
    // TODO: Score by source type, historical accuracy, recency, corroboration, and conflict state.
    return "unknown";
  },

  async scoreRegisteredSourceReliability(source: SourceRegistryEntry): Promise<number> {
    return reliabilityScorer.scoreSource(source);
  },

  async createSourceRecordsFromIngestion(content: NormalizedContent[]): Promise<{ created: number; isMock: true }> {
    // TODO: Persist Source and SourceArticle records via repository/Prisma in a future phase.
    return { created: content.length, isMock: true };
  },

  async detectStaleSources(_maxAgeHours: number): Promise<Source[]> {
    // TODO: Query source records older than freshness thresholds.
    return [];
  }
};
