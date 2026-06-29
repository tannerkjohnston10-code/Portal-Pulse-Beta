import { AtlasWorkspace } from "@/components/team-builder/atlas-workspace";
import { PageFrame } from "@/components/layout/page-frame";
import { MockDataNotice } from "@/components/ui/mock-data-notice";
import { PortalPulsePlatform } from "@/platform";

export default function TeamBuilderPage() {
  const workspace = PortalPulsePlatform.roster.teamBuilder.getWorkspace();

  return (
    <PageFrame
      eyebrow="Atlas Team Builder"
      title="Roster Intelligence, Team Builder, and Front Office Simulator."
      description="Atlas surfaces mock roster opportunities, depth risks, Scholarship IQ, Transfer Fit, simulations, and strategy recommendations. Nothing here is a real roster claim."
    >
      <div className="grid gap-6">
        <MockDataNotice />
        <div className="rounded-lg border border-amber-300/20 bg-amber-300/10 p-4 text-sm font-bold leading-6 text-amber-50">
          All Atlas outputs are mock, simulated, projected, assumption-based, and confidence-scored. The Intelligence Core remains responsible for verification, evidence review, confidence scoring, and conflict checks.
        </div>
        <AtlasWorkspace workspace={workspace} />
      </div>
    </PageFrame>
  );
}

