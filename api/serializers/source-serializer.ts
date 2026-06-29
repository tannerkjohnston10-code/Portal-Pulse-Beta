import type { Source } from "@/types/portal";

export function serializeSource(source: Source) {
  return {
    id: source.id,
    label: source.label,
    url: source.url,
    type: source.type,
    confidence: source.confidence,
    lastUpdated: source.lastUpdated,
    isMock: source.isMock
  };
}
