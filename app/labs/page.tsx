import { PageFrame } from "@/components/layout/page-frame";
import { SimulationWorkspace } from "@/components/labs/simulation-workspace";
import { MockDataNotice } from "@/components/ui/mock-data-notice";
import { PortalPulsePlatform } from "@/platform";

export default function LabsPage() {
  const workspace = PortalPulsePlatform.labs.getWorkspace();

  return (
    <PageFrame
      eyebrow="Portal Pulse Labs"
      title="Simulation and scenario intelligence workspace."
      description="Explore mock what-if scenarios across transfers, rosters, markets, strategy, NIL, and historical replay. Labs is separate from verified reporting."
    >
      <div className="grid gap-6">
        <MockDataNotice />
        <SimulationWorkspace workspace={workspace} />
      </div>
    </PageFrame>
  );
}
