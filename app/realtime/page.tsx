import { PageFrame } from "@/components/layout/page-frame";
import { RealtimeDashboard } from "@/components/realtime/realtime-dashboard";
import { MockDataNotice } from "@/components/ui/mock-data-notice";
import { PortalPulsePlatform } from "@/platform";

export default function RealtimePage() {
  const snapshot = PortalPulsePlatform.realtime.getDashboardSnapshot();

  return (
    <PageFrame
      eyebrow="Real-Time Intelligence Pipeline"
      title="Living intelligence intake, verification, and distribution."
      description="A production-ready architecture for compliant source intake, claim candidate streaming, Intelligence Core review, Knowledge Graph proposals, AI agent notifications, dashboard refreshes, and alert queues."
    >
      <div className="grid gap-6">
        <MockDataNotice />
        <div className="rounded-lg border border-amber-300/20 bg-amber-300/10 p-4 text-sm font-bold leading-6 text-amber-50">
          This route is a mock operations dashboard. It does not scrape, bypass paywalls, send alerts, or publish claims. Every item remains reviewable and Intelligence Core-gated.
        </div>
        <RealtimeDashboard snapshot={snapshot} />
      </div>
    </PageFrame>
  );
}
