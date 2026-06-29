import { transferMarketService } from "@/platform/market/exchange/transfer-market-service";

export const marketTestUtils = {
  getMockDashboardFixture() {
    return transferMarketService.getDashboard();
  },

  assertAllMock() {
    const dashboard = transferMarketService.getDashboard();
    return {
      allMock:
        dashboard.isMock &&
        dashboard.movers.every((item) => item.isMock) &&
        dashboard.metrics.every((item) => item.isMock) &&
        dashboard.timeline.every((item) => item.isMock),
      isMock: true
    };
  }
};

