import { GMDashboard } from "@/components/gm-workspace/gm-dashboard";
import { PageFrame } from "@/components/layout/page-frame";
import { SportSwitcher } from "@/components/sports/sport-switcher";
import { MockDataNotice } from "@/components/ui/mock-data-notice";
import { PortalPulsePlatform } from "@/platform";

export default function GMWorkspacePage() {
  const dashboard = PortalPulsePlatform.gmWorkspace.getDashboard();

  return (
    <PageFrame
      eyebrow="GM Workspace"
      title="Executive roster construction, scholarship planning, and organizational intelligence."
      description="GM Workspace is the Portal Pulse Pro front-office layer for long-term roster strategy, transfer portfolio planning, recruiting allocation, executive reporting, and explainable decision support."
    >
      <div className="grid gap-6">
        <MockDataNotice />
        <div className="rounded-lg border border-amber-300/20 bg-amber-300/10 p-4 text-sm font-bold leading-6 text-amber-50">
          GM Workspace uses mock, simulated, projected, and assumption-based data only. It is not a recruiting CRM and does not contain real commitments, NIL values, scholarship counts, or private roster information.
        </div>
        <SportSwitcher currentSport={dashboard.scholarshipIQ.sportId} favoriteSports={["football", "mens-basketball", "baseball"]} recentSports={["football", "softball", "womens-basketball"]} />
        <GMDashboard dashboard={dashboard} />
      </div>
    </PageFrame>
  );
}
