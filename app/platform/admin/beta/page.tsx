import { BetaMetricsDashboard } from "@/components/beta/beta-metrics-dashboard";
import { PageFrame } from "@/components/layout/page-frame";
import { MockDataNotice } from "@/components/ui/mock-data-notice";
import { BetaMetricsService } from "@/platform/admin/beta/beta-metrics-service";

export default function BetaAdminPage() {
  const snapshot = BetaMetricsService.getSnapshot();

  return (
    <PageFrame
      eyebrow="Internal Beta Operations"
      title="Portal Pulse beta readiness dashboard."
      description="Mock operational metrics for broken routes, console errors, loading performance, page counts, search, pipeline health, Knowledge Graph health, AI status, and launch readiness."
    >
      <div className="grid gap-6">
        <MockDataNotice />
        <BetaMetricsDashboard snapshot={snapshot} />
      </div>
    </PageFrame>
  );
}
