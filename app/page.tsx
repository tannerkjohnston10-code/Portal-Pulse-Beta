import Link from "next/link";
import { ArrowRight, BarChart3, Building2, Database, Flame, MapPinned, RadioTower, Search, Sparkles, Users } from "lucide-react";
import { DashboardCard } from "@/components/dashboard/dashboard-card";
import { NewsFeedItem } from "@/components/dashboard/news-feed-item";
import { PageFrame } from "@/components/layout/page-frame";
import { PlayerCard } from "@/components/players/player-card";
import { TeamRankingTable } from "@/components/rankings/team-ranking-table";
import { SportSwitcher } from "@/components/sports/sport-switcher";
import { MockDataNotice } from "@/components/ui/mock-data-notice";
import { SectionHeader } from "@/components/ui/section-header";
import { cardStyles } from "@/lib/design-tokens";
import { analyticsService } from "@/server/analytics/analytics-service";
import { dashboardService } from "@/server/services/dashboard-service";
import { playerService } from "@/server/services/player-service";
import { teamService } from "@/server/services/team-service";

export default async function HomePage() {
  const [snapshot, players, rankings, newsUpdates] = await Promise.all([
    analyticsService.getDashboardSnapshot(),
    playerService.getPlayers(),
    teamService.getTeamRankings(),
    dashboardService.getBreakingPortalFeed()
  ]);

  const quickSearchGroups = [
    { label: "Athletes", href: "/players", detail: "Search fictional athlete records and profiles." },
    { label: "Programs", href: "/programs/mock-state", detail: "Open the Program Intelligence Workspace." },
    { label: "Reports", href: "/network", detail: "Browse mock Network reports and evidence." },
    { label: "AI", href: "/athena", detail: "Review Athena and agent summaries." }
  ];

  const continueExploring = [
    { title: "Command Center", href: "/command-center", icon: BarChart3, detail: "Flagship dashboard" },
    { title: "Realtime Pipeline", href: "/realtime", icon: RadioTower, detail: "Pipeline operations" },
    { title: "Knowledge Graph", href: "/knowledge-graph", icon: MapPinned, detail: "Relationship intelligence" },
    { title: "Portal Pulse Labs", href: "/labs", icon: Sparkles, detail: "Simulation workspace" }
  ];

  return (
    <PageFrame
      eyebrow="Portal Pulse"
      title="The Transfer Portal, Decoded."
      description="Track every major transfer portal movement, team interest, NIL report, visit, prediction, and roster impact in one trusted intelligence dashboard."
    >
      <div className="grid gap-8">
        <section className={`${cardStyles} overflow-hidden p-6 sm:p-8`}>
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <div className="mb-4 inline-flex rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-xs font-black uppercase tracking-wide text-cyan-200">
                Public reporting · Source-backed intelligence
              </div>
              <h1 className="text-4xl font-black tracking-normal text-white sm:text-6xl">Portal Pulse</h1>
              <p className="mt-4 text-xl font-black text-cyan-200">The Transfer Portal, Decoded.</p>
              <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300">
                A premium college athletics intelligence platform built to make player movement, program momentum, and market uncertainty easier to scan, verify, and act on.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link href="/command-center" className="inline-flex min-h-11 items-center gap-2 rounded-md bg-cyan-300 px-4 text-sm font-black text-slate-950 hover:bg-white">
                  Open Command Center
                  <ArrowRight size={16} aria-hidden />
                </Link>
                <Link href="/players" className="inline-flex min-h-11 items-center gap-2 rounded-md border border-white/10 bg-white/5 px-4 text-sm font-black text-white hover:bg-white/10">
                  Search Athletes
                </Link>
              </div>
            </div>
            <div className="rounded-lg border border-white/10 bg-slate-950/80 p-4">
              <MockDataNotice />
              <div className="mt-4 grid gap-3">
                {newsUpdates.slice(0, 3).map((item) => (
                  <NewsFeedItem key={item.id} item={item} />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-4 xl:grid-cols-[1.2fr_0.8fr]">
          <div className={`${cardStyles} p-5`}>
            <SectionHeader title="Quick Search" description="A beta-ready entry point for athletes, programs, reports, and AI intelligence." />
            <div className="rounded-lg border border-white/10 bg-slate-950/80 p-4">
              <label className="relative block">
                <span className="sr-only">Search Portal Pulse</span>
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={18} aria-hidden />
                <input className="min-h-12 w-full rounded-md border border-white/10 bg-white/[0.03] pl-10 pr-4 text-sm font-bold text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300/60" placeholder="Search athletes, programs, reports, AI insights..." />
              </label>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {quickSearchGroups.map((item) => (
                  <Link key={item.label} href={item.href} className="rounded-md border border-white/10 bg-white/[0.03] p-3 transition hover:bg-white/10">
                    <p className="text-sm font-black text-white">{item.label}</p>
                    <p className="mt-1 text-xs leading-5 text-slate-500">{item.detail}</p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <SportSwitcher currentSport="football" favoriteSports={["football", "mens-basketball", "womens-basketball"]} recentSports={["baseball", "softball"]} />
        </section>

        <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          <DashboardCard icon={Users} label="Players Tracked" value={snapshot.trackedPlayers.toString()} note="Mock service value" />
          <DashboardCard icon={Flame} label="Active Portal Entries" value={snapshot.activePortalEntries.toString()} note="Mock service value" />
          <DashboardCard icon={Database} label="Recent Commitments" value={snapshot.recentCommitments.toString()} note="Mock service value" />
          <DashboardCard icon={Building2} label="Teams Monitored" value={snapshot.teamsMonitored.toString()} note="Mock service value" />
        </section>

        <section className={`${cardStyles} p-5`}>
          <SectionHeader title="Today's Intelligence" description="Mock updates demonstrate the future source-backed movement feed." />
          <div>
            {newsUpdates.map((item) => (
              <NewsFeedItem key={item.id} item={item} />
            ))}
          </div>
        </section>

        <section className="grid gap-6 xl:grid-cols-[1fr_0.85fr]">
          <div>
            <SectionHeader title="Trending Athletes" description="Fictional athlete cards for the initial database and profile architecture." />
            <div className="grid gap-4 md:grid-cols-2">
              {players.slice(0, 4).map((player) => (
                <PlayerCard key={player.id} player={player} />
              ))}
            </div>
          </div>
          <div className={`${cardStyles} p-5`}>
            <SectionHeader title="AI Summary" description="Mock, explainable, Core-gated briefing placeholder." />
            <div className="grid gap-3 text-sm leading-6 text-slate-300">
              <p>Mock summary: portal activity is concentrated around fictional roster needs, team momentum, and source-backed review queues.</p>
              <p className="rounded-md border border-cyan-300/20 bg-cyan-300/10 p-3 text-cyan-50">
                Confidence remains visible throughout the experience. Predictions, NIL mentions, and simulations are never presented as facts.
              </p>
            </div>
          </div>
        </section>

        <section>
          <SectionHeader title="Team Momentum Preview" description="Mock portal grades and impact scores for the future team rankings engine." />
          <TeamRankingTable rankings={rankings} />
        </section>

        <section>
          <SectionHeader title="Continue Exploring" description="Fast routes through the first internal beta experience." />
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {continueExploring.map((item) => {
              const Icon = item.icon;
              return (
                <Link key={item.href} href={item.href} className={`${cardStyles} group p-4 transition hover:-translate-y-0.5 hover:border-cyan-300/30`}>
                  <Icon className="text-cyan-200" size={20} aria-hidden />
                  <h3 className="mt-3 text-base font-black text-white">{item.title}</h3>
                  <p className="mt-1 text-sm text-slate-500">{item.detail}</p>
                </Link>
              );
            })}
          </div>
        </section>

        <section className={`${cardStyles} p-6`}>
          <SectionHeader title="Trust Layer" />
          <p className="max-w-4xl text-sm leading-7 text-slate-300">
            Portal Pulse is designed to organize public reporting into a clear intelligence dashboard. Every claim should be connected to a source, confidence level, and timestamp. Predictions are projections, NIL values may be reported or estimated, and conflicting information should be flagged rather than hidden.
          </p>
        </section>
      </div>
    </PageFrame>
  );
}
