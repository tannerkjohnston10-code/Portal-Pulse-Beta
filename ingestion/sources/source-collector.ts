import type { SourceRegistryEntry } from "@/server/ingestion/types";
import { sourceRegistry } from "./source-registry";

export const sourceCollector = {
  async collectPublicSources(): Promise<SourceRegistryEntry[]> {
    // TODO: Collect approved public sources from registry, official feeds, and user-submitted source queues.
    return sourceRegistry.filter((source) => source.enabled);
  }
};
