import { BarChart3 } from "lucide-react";
import type { ConferenceActivityItem } from "@/types/command-center";
import { DashboardWidget } from "@/components/command-center/dashboard-widget";
import { Sparkline } from "@/components/command-center/sparkline";
import { TrustFooter } from "@/components/command-center/trust-footer";
import { WidgetToolbar } from "@/components/command-center/widget-toolbar";

export function ConferenceActivityWidget({ conferences }: { conferences: ConferenceActivityItem[] }) {
  return (
    <DashboardWidget title="Conference Activity" subtitle="Conference-level movement and positional heat." icon={BarChart3} span={4} toolbar={<WidgetToolbar />}>
      <div className="grid gap-3">
        {conferences.map((conference) => (
          <article key={conference.id} className="rounded-lg border border-white/10 bg-white/[0.04] p-3">
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="text-sm font-black text-white">{conference.conference}</h3>
                <p className="text-xs font-semibold text-slate-500">Most active: {conference.mostActivePosition}</p>
              </div>
              <span className="text-xl font-black text-white">{conference.conferenceScore}</span>
            </div>
            <div className="mt-3 grid grid-cols-3 gap-2 text-center">
              <Mini label="In" value={conference.commitments.toString()} />
              <Mini label="Out" value={conference.transfersOut.toString()} />
              <Mini label="Net" value={conference.netTalentMovement.toString()} />
            </div>
            <div className="mt-3 flex items-end justify-between gap-3">
              <p className="text-xs font-bold text-slate-400">Top team: {conference.topTeam}</p>
              <Sparkline values={conference.trend} tone={conference.netTalentMovement >= 0 ? "green" : "red"} />
            </div>
          </article>
        ))}
      </div>
      <TrustFooter confidence="medium" sourceCount={conferences.length} lastUpdated="2026-06-28T12:00:00.000Z" />
    </DashboardWidget>
  );
}

function Mini({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-md bg-white/5 p-2">
      <p className="text-[0.65rem] font-black uppercase tracking-wide text-slate-500">{label}</p>
      <p className="mt-1 text-sm font-black text-white">{value}</p>
    </div>
  );
}
