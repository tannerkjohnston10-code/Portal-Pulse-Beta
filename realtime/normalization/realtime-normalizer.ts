import type { RealtimeSource } from "@/platform/realtime/core/realtime-types";

export type NormalizedRealtimeItem = {
  id: string;
  sourceId: string;
  title: string;
  summary: string;
  canonicalUrl: string;
  detectedEntityLabels: string[];
  normalizedAt: string;
  isMock: true;
};

export const RealtimeNormalizer = {
  normalizeMockSourceItem(source: RealtimeSource): NormalizedRealtimeItem {
    return {
      id: `mock-normalized-${source.id}`,
      sourceId: source.id,
      title: `Mock normalized item from ${source.name}`,
      summary: "Mock normalized summary only. Full article text is not copied or stored.",
      canonicalUrl: source.url,
      detectedEntityLabels: ["Mock Athlete", "Mock Program"],
      normalizedAt: new Date().toISOString(),
      isMock: true
    };
  }
};
