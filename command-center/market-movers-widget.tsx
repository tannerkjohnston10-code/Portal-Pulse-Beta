import { ArrowDownRight, ArrowUpRight, Activity } from "lucide-react";
import type { MarketMover } from "@/types/command-center";
import { ConfidenceBadge } from "@/components/ui/confidence-badge";
import { DashboardWidget } from "@/components/command-center/dashboard-widget";
import { Sparkline } from "@/components/command-center/sparkline";
import { TrustFooter } from "@/components/command-center/trust-footer";
import { WidgetToolbar } from "@/components/command-center/widget-toolbar";

export function MarketMoversWidget({ movers }: { movers: MarketMover[] }) {
  const rising = movers.filter((mover) => mover.portalPulseScoreChange >= 0);
  const falling = movers.filter((mover) => mover.portalPulseScoreChange < 0);

  return (
    <DashboardWidget title="Market Movers" subtitle="Stock-market-style signal movement across fictional players." icon={Activity} span={4} toolbar={<WidgetToolbar />}>
      <MoverGroup title="Biggest Rising Players" movers={rising} />
      <MoverGroup title="Biggest Falling Players" movers={falling} />
      <div className="mt-4 rounded-lg border border-white/10 bg-white/[0.04] p-3">
        <div className="flex items-center justify-between">
          <span className="text-xs font-black uppercase tracking-wide text-slate-500">Portal Activity Score</span>
          <span className="text-2xl font-black text-white">78</span>
        </div>
        <Sparkline values={[52, 58, 61, 66, 72, 78]} tone="cyan" />
      </div>
      <TrustFooter confidence="medium" sourceCount={movers.reduce((sum, mover) => sum + mover.sourceCount, 0)} lastUpdated="2026-06-28T12:00:00.000Z" />
    </DashboardWidget>
  );
}

function MoverGroup({ title, movers }: { title: string; movers: MarketMover[] }) {
  return (
    <div className="mb-4 grid gap-2">
      <p className="text-xs font-black uppercase tracking-wide text-slate-500">{title}</p>
      {movers.map((mover) => {
        const positive = mover.portalPulseScoreChange >= 0;
        return (
          <div key={mover.id} className="grid gap-3 rounded-lg border border-white/10 bg-white/[0.04] p-3 sm:grid-cols-[1fr_auto]">
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="text-sm font-black text-white">{mover.playerName}</h3>
                <span className="rounded-full bg-white/5 px-2 py-1 text-xs font-black text-slate-300">{mover.position}</span>
                <ConfidenceBadge level={mover.confidence} />
              </div>
              <p className="mt-2 text-xs font-semibold leading-5 text-slate-400">{mover.movementReason}</p>
            </div>
            <div className="flex items-center justify-between gap-4 sm:block sm:text-right">
              <span className={`inline-flex items-center gap-1 text-lg font-black ${positive ? "text-emerald-300" : "text-rose-300"}`}>
                {positive ? <ArrowUpRight size={17} aria-hidden /> : <ArrowDownRight size={17} aria-hidden />}
                {positive ? "+" : ""}
                {mover.portalPulseScoreChange}
              </span>
              <Sparkline values={mover.sparkline} tone={positive ? "green" : "red"} />
            </div>
          </div>
        );
      })}
    </div>
  );
}
