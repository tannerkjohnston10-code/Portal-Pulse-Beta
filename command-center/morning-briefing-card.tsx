import { Headphones, Sparkles } from "lucide-react";
import type { AIBriefingItem, CommandCenterSnapshot, WatchlistUpdate } from "@/types/command-center";
import { DashboardWidget } from "@/components/command-center/dashboard-widget";
import { TrustFooter } from "@/components/command-center/trust-footer";
import { WidgetToolbar } from "@/components/command-center/widget-toolbar";

export function MorningBriefingCard({ briefing, watchlist, snapshot }: { briefing: AIBriefingItem[]; watchlist: WatchlistUpdate[]; snapshot: CommandCenterSnapshot }) {
  const primary = briefing[0];

  return (
    <DashboardWidget title="AI Morning Briefing" subtitle="Overnight intelligence, watchlist changes, and prediction context." icon={Sparkles} span={4} toolbar={<WidgetToolbar />}>
      <div className="rounded-lg border border-cyan-300/20 bg-cyan-300/10 p-4">
        <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-200">Good Morning</p>
        <h3 className="mt-2 text-2xl font-black text-white">Your portal board is moving.</h3>
        <p className="mt-2 text-sm leading-6 text-slate-300">{primary?.summary ?? "Mock AI briefing pending."}</p>
        <button className="mt-4 inline-flex min-h-10 items-center gap-2 rounded-md border border-white/10 bg-white/10 px-3 text-sm font-black text-white transition hover:bg-white/15" type="button">
          <Headphones size={16} aria-hidden />
          Listen to AI Briefing
        </button>
      </div>
      <div className="mt-4 grid gap-2">
        {["Important overnight updates", "Your favorite teams", "Watched players", "Prediction changes", "Trending conferences"].map((label, index) => (
          <div key={label} className="flex items-center justify-between rounded-md bg-white/5 px-3 py-2">
            <span className="text-sm font-bold text-slate-300">{label}</span>
            <span className="text-xs font-black text-cyan-200">{index === 0 ? snapshot.breakingUpdates : watchlist.length} mock</span>
          </div>
        ))}
      </div>
      <TrustFooter confidence="medium" confidenceScore={snapshot.confidenceAverage} sourceCount={primary?.supportingSourceCount ?? 0} lastUpdated={snapshot.generatedAt} />
    </DashboardWidget>
  );
}
