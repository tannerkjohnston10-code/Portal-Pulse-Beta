export const cacheNamespaces = [
  "player_profiles",
  "program_profiles",
  "knowledge_graph",
  "ai_responses_placeholder",
  "reports",
  "search_results",
  "trending_lists",
  "dashboard_data"
] as const;

export type CacheNamespace = (typeof cacheNamespaces)[number];

export type CachePolicy = {
  namespace: CacheNamespace;
  ttlSeconds: number;
  invalidatedByEvents: string[];
  productionBackend: "memory_mock" | "redis_future" | "edge_cache_future";
  isMock: true;
};

export const CachePolicyService = {
  getPolicies(): CachePolicy[] {
    return cacheNamespaces.map((namespace) => ({
      namespace,
      ttlSeconds: namespace === "ai_responses_placeholder" ? 60 : 300,
      invalidatedByEvents: ["PlayerUpdated", "TeamUpdated", "InsightGenerated", "RankingChanged"],
      productionBackend: "redis_future",
      isMock: true
    }));
  }
};
