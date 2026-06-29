import { IntelligenceCore } from "@/platform/intelligence/core/intelligence-core";
import { transferMarketService } from "@/platform/market/exchange/transfer-market-service";

export const mercuryMarketAgent = {
  getFinding() {
    const widget = transferMarketService.getCommandCenterWidget();
    const coreOutput = IntelligenceCore.generateInsight("mock-mercury-transfer-market-exchange");
    return {
      id: "mock-mercury-finding",
      title: "Mock transfer market heat is rising",
      summary: widget.commentary.summary,
      todayMarket: widget.todayMarket.title,
      heatIndex: widget.heatIndex,
      topMovers: widget.topMovers.map((mover) => mover.label),
      trendingConferences: widget.trendingConferences.map((conference) => conference.conference),
      whatChanged: widget.commentary.whatChanged,
      whatToWatch: widget.commentary.whatToWatch,
      submittedToCore: true,
      confidence: coreOutput.reasoning.confidence,
      sourceCount: widget.todayMarket.sourceCount,
      isMock: true
    };
  },

  getDashboard() {
    return transferMarketService.getDashboard();
  },

  getCommandCenterWidget() {
    return transferMarketService.getCommandCenterWidget();
  }
};

