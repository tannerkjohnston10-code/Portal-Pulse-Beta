import { notFound } from "next/navigation";
import { AIStorylinesWidget } from "@/components/teams/intelligence/ai-storylines-widget";
import { CoachingWidget } from "@/components/teams/intelligence/coaching-widget";
import { ConferenceComparisonWidget } from "@/components/teams/intelligence/conference-comparison-widget";
import { DepthChartWidget } from "@/components/teams/intelligence/depth-chart-widget";
import { MomentumWidget } from "@/components/teams/intelligence/momentum-widget";
import { PortalClassWidget } from "@/components/teams/intelligence/portal-class-widget";
import { RecruitingPipelineWidget } from "@/components/teams/intelligence/recruiting-pipeline-widget";
import { RosterWidget } from "@/components/teams/intelligence/roster-widget";
import { TeamComparisonWidget } from "@/components/teams/intelligence/team-comparison-widget";
import { TeamHero } from "@/components/teams/intelligence/team-hero";
import { TeamNeedsWidget } from "@/components/teams/intelligence/team-needs-widget";
import { TeamScoreCard } from "@/components/teams/intelligence/team-score-card";
import { TeamTimelineWidget } from "@/components/teams/intelligence/team-timeline-widget";
import { MockDataNotice } from "@/components/ui/mock-data-notice";
import { TrustNotice } from "@/components/ui/trust-notice";
import { teamIntelligenceService } from "@/server/services/team-intelligence-service";

const navItems = ["Score", "Roster", "Depth Chart", "Needs", "Portal Class", "Momentum", "Coaching", "AI", "Pipeline", "Compare"];

export default async function TeamIntelligenceCenterPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const profile = await teamIntelligenceService.getTeamIntelligenceProfile(id);

  if (!profile) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-[1600px] px-4 py-8 sm:px-6 lg:px-8">
      <div className="grid gap-6">
        <MockDataNotice />
        <TrustNotice />
        <TeamHero profile={profile} />
        <nav className="sticky top-[74px] z-20 flex gap-2 overflow-x-auto rounded-lg border border-white/10 bg-slate-950/90 p-2 backdrop-blur" aria-label="Team intelligence sections">
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase().replaceAll(" ", "-")}`} className="min-h-9 shrink-0 rounded-md px-3 py-2 text-xs font-black uppercase tracking-wide text-slate-300 transition hover:bg-white/10 hover:text-white">
              {item}
            </a>
          ))}
        </nav>

        <section id="score" className="grid gap-6 xl:grid-cols-[1fr_0.85fr]">
          <TeamScoreCard score={profile.teamScore} />
          <div id="ai">
            <AIStorylinesWidget storylines={profile.aiStorylines} />
          </div>
        </section>

        <section id="roster" className="grid gap-6">
          <RosterWidget roster={profile.roster} />
        </section>

        <section id="depth-chart" className="grid gap-6">
          <DepthChartWidget depthChart={profile.depthChart} />
        </section>

        <section id="needs" className="grid gap-6 xl:grid-cols-[1fr_0.9fr]">
          <TeamNeedsWidget needs={profile.needs} />
          <div id="portal-class">
            <PortalClassWidget portalClass={profile.portalClass} />
          </div>
        </section>

        <section id="momentum" className="grid gap-6 xl:grid-cols-[0.85fr_1fr]">
          <MomentumWidget momentum={profile.momentum} />
          <TeamTimelineWidget events={profile.timeline} />
        </section>

        <section id="coaching" className="grid gap-6 xl:grid-cols-[1fr_0.85fr]">
          <CoachingWidget coaching={profile.coaching} />
          <div id="pipeline">
            <RecruitingPipelineWidget pipeline={profile.recruitingPipeline} />
          </div>
        </section>

        <section id="compare" className="grid gap-6">
          <ConferenceComparisonWidget comparisons={profile.conferenceComparison} />
          <TeamComparisonWidget comparisons={profile.teamComparison} />
        </section>
      </div>
    </div>
  );
}
