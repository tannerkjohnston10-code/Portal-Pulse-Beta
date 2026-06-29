export const featureFlags = {
  enableMockData: true,
  enableAdminShell: true,
  enablePredictions: true,
  enableNIL: true,
  enableVisits: true,
  enableSearch: false,
  enableAuth: false,
  enableIngestion: false,
  enableAIExtraction: false,
  enableAIInsights: true,
  enableNotifications: false,
  enableCommandCenter: true,
  enableAIBriefing: true,
  enableAthenaNetwork: true,
  enableTransferMap: true,
  enableMarketMovers: true,
  enablePersonalizedDashboard: false,
  enableAIAssistant: false,
  enableWatchlistBriefing: false,
  enableRealtimePipeline: true,
  enableBetaExperience: true,
  enableDemoMode: true,
  enableBetaFeedback: true,
  enableWalkthrough: true
} as const;

export type FeatureFlag = keyof typeof featureFlags;
