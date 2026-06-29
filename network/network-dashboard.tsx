import type { NetworkDashboardData } from "@/platform/network/network-types";
import { AIInsightCard } from "@/components/network/ai-insight-card";
import { CommunityCard } from "@/components/network/community-card";
import { ContributionTimeline } from "@/components/network/contribution-timeline";
import { EvidenceIndicator } from "@/components/network/evidence-indicator";
import { ExpertCard } from "@/components/network/expert-card";
import { IntelligenceFeed } from "@/components/network/intelligence-feed";
import { NotificationPanel } from "@/components/network/notification-panel";
import { ReportCard } from "@/components/network/report-card";
import { TrendingPanel } from "@/components/network/trending-panel";
import { UserProfileCard } from "@/components/network/user-profile-card";
import { WatchlistCard } from "@/components/network/watchlist-card";

export function NetworkDashboard({ dashboard }: { dashboard: NetworkDashboardData }) {
  const primaryProfile = dashboard.profiles[0];

  return (
    <div className="grid gap-6">
      <section className="rounded-lg border border-white/10 bg-slate-950/70 p-5">
        <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-200">Portal Pulse Knowledge Exchange™</p>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {dashboard.knowledgeExchange.map((item) => (
            <article key={item.id} className="rounded-md border border-white/10 bg-white/[0.03] p-4">
              <p className="text-xs font-black uppercase tracking-[0.14em] text-slate-500">{item.itemType.replaceAll("_", " ")}</p>
              <h3 className="mt-2 text-base font-black text-white">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-400">{item.summary}</p>
            </article>
          ))}
        </div>
      </section>

      <AIInsightCard briefing={dashboard.aiSummary} />

      <section className="grid gap-6 xl:grid-cols-[1fr_0.8fr]">
        <IntelligenceFeed items={dashboard.todayIntelligence} />
        <div className="grid gap-6">
          <TrendingPanel title="Trending Players" items={dashboard.trendingPlayers} />
          <TrendingPanel title="Trending Programs" items={dashboard.trendingPrograms} />
          <TrendingPanel title="Trending Discussions" items={dashboard.trendingDiscussions} />
          <NotificationPanel notifications={dashboard.notifications} />
        </div>
      </section>

      <section>
        <p className="mb-4 text-xs font-black uppercase tracking-[0.18em] text-cyan-200">Latest Reports</p>
        <div className="grid gap-4 lg:grid-cols-2">
          {dashboard.latestReports.map((report) => <ReportCard key={report.id} report={report} />)}
        </div>
      </section>

      <section className="grid gap-6 xl:grid-cols-2">
        <div>
          <p className="mb-4 text-xs font-black uppercase tracking-[0.18em] text-cyan-200">Expert Analysis</p>
          <div className="grid gap-4">
            {dashboard.expertAnalysis.map((report) => <ReportCard key={`expert-${report.id}`} report={report} />)}
          </div>
        </div>
        <div>
          <p className="mb-4 text-xs font-black uppercase tracking-[0.18em] text-cyan-200">Recommended Reads</p>
          <div className="grid gap-4">
            {dashboard.recommendedReads.map((report) => <ReportCard key={`recommended-${report.id}`} report={report} />)}
          </div>
        </div>
      </section>

      <section className="grid gap-6 xl:grid-cols-[1fr_0.8fr]">
        <UserProfileCard profile={primaryProfile} />
        <ContributionTimeline profile={primaryProfile} />
      </section>

      <section>
        <p className="mb-4 text-xs font-black uppercase tracking-[0.18em] text-cyan-200">Communities</p>
        <div className="grid gap-4 lg:grid-cols-2">
          {dashboard.communities.map((community) => <CommunityCard key={community.id} community={community} />)}
        </div>
      </section>

      <section className="grid gap-6 xl:grid-cols-3">
        <div className="xl:col-span-2">
          <p className="mb-4 text-xs font-black uppercase tracking-[0.18em] text-cyan-200">Popular Watchlists</p>
          <div className="grid gap-4">
            {dashboard.popularWatchlists.map((watchlist) => <WatchlistCard key={watchlist.id} watchlist={watchlist} />)}
          </div>
        </div>
        <div>
          <p className="mb-4 text-xs font-black uppercase tracking-[0.18em] text-cyan-200">Featured Contributors</p>
          <div className="grid gap-4">
            {dashboard.profiles.map((profile) => <ExpertCard key={profile.id} expert={profile} />)}
          </div>
        </div>
      </section>

      <section className="rounded-lg border border-white/10 bg-slate-950/70 p-5">
        <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-200">Evidence Feed</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {dashboard.evidenceFeed.map((item, index) => <EvidenceIndicator key={`${item.label}-${index}`} evidence={item} />)}
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-lg border border-white/10 bg-slate-950/70 p-5">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-200">Confidence Feed</p>
          <div className="mt-4 grid gap-3">
            {dashboard.confidenceFeed.map((item) => (
              <div key={item.label} className="flex items-center justify-between rounded-md border border-white/10 bg-white/[0.03] p-3">
                <span className="text-sm font-bold text-white">{item.label}</span>
                <span className="text-xs font-black uppercase tracking-[0.14em] text-cyan-200">{item.confidence} · {item.score}%</span>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-lg border border-white/10 bg-slate-950/70 p-5">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-200">Recent Publications</p>
          <div className="mt-4 grid gap-3">
            {dashboard.recentPublications.map((report) => (
              <div key={`recent-${report.id}`} className="rounded-md border border-white/10 bg-white/[0.03] p-3">
                <p className="text-sm font-black text-white">{report.title}</p>
                <p className="mt-1 text-xs text-slate-500">{report.reportType.replaceAll("_", " ")} · {report.author.displayName}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
