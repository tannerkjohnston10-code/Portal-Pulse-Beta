import { transferMarketService } from "@/platform/market/exchange/transfer-market-service";
import { marketSignalService } from "@/platform/market/signals/market-signal-service";
import { marketMomentumEngine } from "@/platform/market/momentum/momentum-engine";
import { marketLiquidityService } from "@/platform/market/liquidity/liquidity-service";
import { marketTrendService } from "@/platform/market/trends/trend-service";
import { marketWatchlistService } from "@/platform/market/watchlists/market-watchlist-service";
import { marketHistoryService } from "@/platform/market/history/market-history-service";

export const MarketSDK = {
  version: "v1",
  dashboard: () => transferMarketService.getDashboard(),
  summary: () => transferMarketService.getMarketSummary(),
  movers: () => transferMarketService.getMarketMovers(),
  commandCenterWidget: () => transferMarketService.getCommandCenterWidget(),
  signals: marketSignalService,
  momentum: marketMomentumEngine,
  liquidity: marketLiquidityService,
  trends: marketTrendService,
  watchlists: marketWatchlistService,
  history: marketHistoryService
};

