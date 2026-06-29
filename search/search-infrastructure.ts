export type SearchMode =
  | "keyword"
  | "semantic_placeholder"
  | "autocomplete"
  | "saved_search"
  | "recent_search"
  | "cross_sport"
  | "knowledge_graph"
  | "vector_future";

export type SearchInfrastructureCapability = {
  mode: SearchMode;
  enabled: boolean;
  indexName: string;
  notes: string;
  isMock: true;
};

export const SearchInfrastructure = {
  getCapabilities(): SearchInfrastructureCapability[] {
    return [
      {
        mode: "keyword",
        enabled: true,
        indexName: "mock-keyword-index",
        notes: "Current mock search can be replaced by a production index without changing UI contracts.",
        isMock: true
      },
      {
        mode: "semantic_placeholder",
        enabled: false,
        indexName: "future-semantic-index",
        notes: "Prepared for embeddings-backed search once production AI infrastructure is approved.",
        isMock: true
      },
      {
        mode: "cross_sport",
        enabled: true,
        indexName: "mock-cross-sport-index",
        notes: "Search queries should accept sport filters from the Sport Capability Registry.",
        isMock: true
      }
    ];
  }
};
