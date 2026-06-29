import { ArrowDownRight, ArrowUpRight, Minus, Trophy } from "lucide-react";
import type { TeamMomentumItem } from "@/types/command-center";
import { DashboardWidget } from "@/components/command-center/dashboard-widget";
import { TrustFooter } from "@/components/command-center/trust-footer";
import { WidgetToolbar } from "@/components/command-center/widget-toolbar";

export function TeamMomentumWidget({ teams }: { teams: TeamMomentumItem[] }) {
  return (
    <DashboardWidget title="Team Momentum" subtitle="Portal grade, additions, losses, and net talent signal." icon={Trophy} span={4} toolbar={<WidgetToolbar />}>
      <div className="grid gap-3">
        {teams.map((team) => (
          <article key={team.id} className="rounded-lg border border-white/10 bg-white/[0.04] p-3">
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-md bg-cyan-300/10 text-sm font-black text-cyan-100">{team.teamName.slice(0, 2).toUpperCase()}</div>
                <div>
                  <h3 className="text-sm font-black text-white">{team.teamName}</h3>
                  <p className="text-xs font-semibold text-slate-500">{team.conference} · #{team.conferenceRank}</p>
                </div>
              </div>
              <Trend trend={team.trend} />
            </div>
            <div className="mt-4 grid grid-cols-4 gap-2 text-center">
              <Mini label="Grade" value={team.portalGrade} />
              <Mini label="Added" value={team.commits.toString()} />
              <Mini label="Lost" value={team.departures.toString()} />
              <Mini label="Net" value={`+${team.netImpact}`} />
            </div>
          </article>
        ))}
      </div>
      <TrustFooter confidence="medium" sourceCount={teams.length} lastUpdated="2026-06-28T12:00:00.000Z" />
    </DashboardWidget>
  );
}

function Trend({ trend }: { trend: TeamMomentumItem["trend"] }) {
  const Icon = trend === "up" ? ArrowUpRight : trend === "down" ? ArrowDownRight : Minus;
  const tone = trend === "up" ? "text-emerald-300" : trend === "down" ? "text-rose-300" : "text-slate-300";
  return <Icon className={tone} size={20} aria-label={`${trend} momentum`} />;
}

function Mini({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-md bg-white/5 p-2">
      <p className="text-[0.65rem] font-black uppercase tracking-wide text-slate-500">{label}</p>
      <p className="mt-1 text-sm font-black text-white">{value}</p>
    </div>
  );
}
