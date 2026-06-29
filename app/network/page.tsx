import { NetworkDashboard } from "@/components/network/network-dashboard";
import { PageFrame } from "@/components/layout/page-frame";
import { MockDataNotice } from "@/components/ui/mock-data-notice";
import { PortalPulsePlatform } from "@/platform";

export default function NetworkPage() {
  const dashboard = PortalPulsePlatform.network.dashboard();

  return (
    <PageFrame
      eyebrow="Portal Pulse Network"
      title="Professional collaboration for source-backed college athletics intelligence."
      description="Portal Pulse Network organizes reports, evidence, watchlists, communities, profiles, and expert analysis without becoming social media, a forum, or a message board."
    >
      <div className="grid gap-6">
        <MockDataNotice />
        <div className="rounded-lg border border-amber-300/20 bg-amber-300/10 p-4 text-sm font-bold leading-6 text-amber-50">
          Network data is mock-only. No authentication, private messaging, real moderation, or real report publishing is implemented. Intelligence remains evidence-first and Core-gated.
        </div>
        <NetworkDashboard dashboard={dashboard} />
      </div>
    </PageFrame>
  );
}
