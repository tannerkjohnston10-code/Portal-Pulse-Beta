import {
  mockBreakingPortalUpdates,
  mockCommandCenterSnapshot,
  mockCommandCenterSearchResults,
  mockDashboardWidgets,
  mockNILMovement,
  mockTransferMapEvents,
  mockWatchlistUpdates
} from "@/data/mock/command-center/command-center-data";
import { briefingService } from "@/server/ai/briefings/briefing-service";
import { conferenceActivityService } from "@/server/analytics/conference-activity-service";
import { marketMoversService } from "@/server/analytics/market-movers-service";
import { portalMomentumService } from "@/server/analytics/portal-momentum-service";
import type {
  AIBriefingItem,
  BreakingPortalUpdate,
  CommandCenterSnapshot,
  CommandCenterSearchResult,
  ConferenceActivityItem,
  DashboardWidgetDefinition,
  MarketMover,
  NILMovementItem,
  PredictionMover,
  TeamMomentumItem,
  TransferMapEvent,
  WatchlistUpdate
} from "@/types/command-center";

export const commandCenterService = {
  async getCommandCenterSnapshot(): Promise<CommandCenterSnapshot> {
    // TODO: Compose from analytics, verified claims, watchlists, and personalization preferences.
    return mockCommandCenterSnapshot;
  },

  async getBreakingPortalUpdates(): Promise<BreakingPortalUpdate[]> {
    // TODO: Pull recent verified and reviewable claim changes from the claim service.
    return mockBreakingPortalUpdates;
  },

  async getMarketMovers(): Promise<MarketMover[]> {
    return marketMoversService.getMarketMovers();
  },

  async getPredictionMovers(): Promise<PredictionMover[]> {
    return marketMoversService.getPredictionMovers();
  },

  async getTeamMomentum(): Promise<TeamMomentumItem[]> {
    return portalMomentumService.getTeamMomentum();
  },

  async getConferenceActivity(): Promise<ConferenceActivityItem[]> {
    return conferenceActivityService.getConferenceActivity();
  },

  async getNILMovement(): Promise<NILMovementItem[]> {
    // TODO: Source from NIL service with explicit status labels and confidence rules.
    return mockNILMovement;
  },

  async getWatchlistUpdates(): Promise<WatchlistUpdate[]> {
    // TODO: Personalize from authenticated user watchlists once accounts exist.
    return mockWatchlistUpdates;
  },

  async getAIBriefing(): Promise<AIBriefingItem[]> {
    return briefingService.getAIBriefing();
  },

  async getTransferMapEvents(): Promise<TransferMapEvent[]> {
    // TODO: Build from player movement and visit geography after map visualization lands.
    return mockTransferMapEvents;
  },

  async searchCommandCenter(query: string): Promise<CommandCenterSearchResult[]> {
    // TODO: Replace local filtering with unified player, team, source, claim, NIL, and prediction search.
    const normalized = query.trim().toLowerCase();
    if (!normalized) {
      return mockCommandCenterSearchResults;
    }

    return mockCommandCenterSearchResults.filter((result) => {
      return `${result.label} ${result.category} ${result.description}`.toLowerCase().includes(normalized);
    });
  },

  async getDashboardWidgets(): Promise<DashboardWidgetDefinition[]> {
    // TODO: Merge default widgets with saved user dashboard preferences.
    return mockDashboardWidgets;
  }
};
