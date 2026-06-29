import { Star } from "lucide-react";
import type { WatchlistUpdate } from "@/types/command-center";
import { DashboardEmptyState } from "@/components/command-center/dashboard-empty-state";
import { DashboardWidget } from "@/components/command-center/dashboard-widget";
import { TrustFooter } from "@/components/command-center/trust-footer";
import { WidgetToolbar } from "@/components/command-center/widget-toolbar";

export function WatchlistWidget({ updates }: { updates: WatchlistUpdate[] }) {
  return (
    <DashboardWidget title="Watchlist" subtitle="Personalized updates for followed players, teams, and conferences." icon={Star} span={4} toolbar={<WidgetToolbar />}>
      {updates.length === 0 ? (
        <DashboardEmptyState title="No watchlist yet" description="Future accounts will let users follow players, teams, conferences, visits, NIL changes, and predictions." />
      ) : (
        <div className="grid gap-3">
          {updates.map((update) => (
            <article key={update.id} className="rounded-lg border border-white/10 bg-white/[0.04] p-3">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-sm font-black text-white">{update.subjectName}</h3>
                  <p className="text-xs font-semibold capitalize text-slate-500">{update.subjectType}</p>
                </div>
                <span className={`rounded-full px-2 py-1 text-xs font-black uppercase ${update.urgency === "high" ? "bg-rose-300/12 text-rose-200" : update.urgency === "medium" ? "bg-yellow-300/12 text-yellow-100" : "bg-slate-400/12 text-slate-300"}`}>
                  {update.urgency}
                </span>
              </div>
              <p className="mt-2 text-sm font-semibold leading-6 text-slate-300">{update.update}</p>
              <p className="mt-2 text-xs font-bold text-slate-500">{update.timestamp}</p>
            </article>
          ))}
        </div>
      )}
      <TrustFooter confidence="medium" sourceCount={updates.length} lastUpdated={updates[0]?.timestamp ?? "2026-06-28T12:00:00.000Z"} />
    </DashboardWidget>
  );
}
