export type BetaMetricStatus = "healthy" | "review" | "blocked" | "mock";

export type BetaMetricItem = {
  label: string;
  value: string;
  status: BetaMetricStatus;
  detail: string;
  isMock: true;
};

export type BetaMetricsSnapshot = {
  brokenRoutes: BetaMetricItem;
  consoleErrors: BetaMetricItem;
  loadingPerformance: BetaMetricItem;
  pageCounts: BetaMetricItem;
  componentCounts: BetaMetricItem;
  searchMetrics: BetaMetricItem;
  pipelineHealth: BetaMetricItem;
  knowledgeGraphHealth: BetaMetricItem;
  aiStatus: BetaMetricItem;
  mockAnalytics: BetaMetricItem[];
  isMock: true;
};

export const BetaMetricsService = {
  getSnapshot(): BetaMetricsSnapshot {
    return {
      brokenRoutes: {
        label: "Broken Routes",
        value: "0 known",
        status: "mock",
        detail: "Mock route audit placeholder. Automated crawl is future work.",
        isMock: true
      },
      consoleErrors: {
        label: "Console Errors",
        value: "0 tracked",
        status: "mock",
        detail: "Client-side error capture is not connected yet.",
        isMock: true
      },
      loadingPerformance: {
        label: "Loading Performance",
        value: "2.4s target",
        status: "review",
        detail: "Mock target for initial beta dashboard load.",
        isMock: true
      },
      pageCounts: {
        label: "Page Counts",
        value: "20+ routes",
        status: "healthy",
        detail: "Major workspaces have route coverage.",
        isMock: true
      },
      componentCounts: {
        label: "Component Counts",
        value: "100+ components",
        status: "healthy",
        detail: "Reusable design and intelligence components are in place.",
        isMock: true
      },
      searchMetrics: {
        label: "Search Metrics",
        value: "mock only",
        status: "mock",
        detail: "Recent searches, favorites, and result grouping are prepared as UX patterns.",
        isMock: true
      },
      pipelineHealth: {
        label: "Pipeline Health",
        value: "healthy",
        status: "mock",
        detail: "Real-time pipeline status is mock and Core-gated.",
        isMock: true
      },
      knowledgeGraphHealth: {
        label: "Knowledge Graph Health",
        value: "proposal-ready",
        status: "mock",
        detail: "Relationships remain source-aware and reviewable.",
        isMock: true
      },
      aiStatus: {
        label: "AI Status",
        value: "proposal-only",
        status: "healthy",
        detail: "Agents cannot publish directly and remain Intelligence Core-gated.",
        isMock: true
      },
      mockAnalytics: [
        {
          label: "Feedback Submissions",
          value: "session-only",
          status: "mock",
          detail: "Feedback widget stores no real data.",
          isMock: true
        },
        {
          label: "Demo Mode Personas",
          value: "6 roles",
          status: "healthy",
          detail: "Fan, Coach, GM, Analyst, Media, and Administrator modes are available.",
          isMock: true
        },
        {
          label: "Accessibility Review",
          value: "checklist-ready",
          status: "review",
          detail: "Manual and automated audits are required before external beta.",
          isMock: true
        }
      ],
      isMock: true
    };
  }
};
