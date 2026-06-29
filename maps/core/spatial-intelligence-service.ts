import { IntelligenceCore } from "@/platform/intelligence/core/intelligence-core";
import { knowledgeGraphService } from "@/platform/knowledge-graph/core/knowledge-graph-service";
import { spatialAnalyticsService } from "@/platform/maps/analytics/spatial-analytics-service";
import { flowEngine } from "@/platform/maps/flows/flow-engine";
import { heatmapService } from "@/platform/maps/heatmaps/heatmap-service";
import { mapHistoryService } from "@/platform/maps/history/map-history-service";
import { mapLayerService } from "@/platform/maps/layers/map-layer-service";
import { pipelineService } from "@/platform/maps/pipelines/pipeline-service";
import { regionService } from "@/platform/maps/regions/region-service";
import type { CartographerFinding } from "@/platform/maps/core/map-types";

export const spatialIntelligenceService = {
  getMapDashboard() {
    return {
      layers: mapLayerService.getLayers(),
      defaultLayers: mapLayerService.getDefaultLayers(),
      flows: flowEngine.getFlows(),
      pipelines: pipelineService.getRecruitingPipelines(),
      heatZones: heatmapService.getHeatZones(),
      analytics: spatialAnalyticsService.getAnswers(),
      regions: regionService.getRegions(),
      replay: mapHistoryService.getReplayHooks(),
      graphOverview: knowledgeGraphService.getOverview(),
      isMock: true
    };
  },

  getCartographerFinding(): CartographerFinding {
    const hottest = heatmapService.getHottestZone();
    const pipeline = pipelineService.getStrongestRecruitingPipeline();
    const coreOutput = IntelligenceCore.generateInsight("mock-cartographer-spatial-finding");
    return {
      id: "mock-cartographer-finding",
      title: "Mock Midwest transfer heat is rising",
      summary: "Cartographer sees a fictional spatial pattern where transfer activity, recruiting pipeline strength, and graph relationship density cluster around Mock Midwest.",
      hottestTransferRegion: hottest.displayName,
      mostActiveConference: "Mock Conference",
      strongestRecruitingPipeline: pipeline.displayName,
      geographicTrendSummary: "Mock State appears to be expanding a fictional recruiting and transfer footprint across a central-to-northern corridor.",
      submittedToCore: true,
      confidence: coreOutput.reasoning.confidence,
      sourceCount: coreOutput.evidence.length,
      isMock: true
    };
  }
};

