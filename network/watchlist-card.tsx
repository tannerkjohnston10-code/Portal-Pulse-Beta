import type { SharedWatchlist } from "@/platform/network/network-types";
import { ConfidenceIndicator } from "@/components/network/confidence-indicator";

export function WatchlistCard({ watchlist }: { watchlist: SharedWatchlist }) {
  return (
    <article className="rounded-lg border border-white/10 bg-slate-950/70 p-4">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.16em] text-slate-500">{watchlist.watchlistType} watchlist · {watchlist.sharing}</p>
          <h3 className="mt-2 text-lg font-black text-white">{watchlist.title}</h3>
        </div>
        <ConfidenceIndicator confidence={watchlist.confidence} score={66} />
      </div>
      <p className="mt-3 text-sm leading-6 text-slate-300">{watchlist.items.join(" · ")}</p>
      <p className="mt-3 text-xs font-bold text-slate-500">{watchlist.sorting} · {watchlist.collaborationPlaceholder} · {watchlist.exportPlaceholder}</p>
    </article>
  );
}
