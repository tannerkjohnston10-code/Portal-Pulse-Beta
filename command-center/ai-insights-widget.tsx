import { Lightbulb } from "lucide-react";
import type { AIInsight } from "@/types/insights";
import { DashboardWidget } from "@/components/command-center/dashboard-widget";
import { TrustFooter } from "@/components/command-center/trust-footer";
import { WidgetToolbar } from "@/components/command-center/widget-toolbar";
import { InsightCard } from "@/components/insights/insight-card";

export function AIInsightsWidget({ insights }: { insights: AIInsight[] }) {
  const [topInsight, ...ranked] = insights;

  return (
    <DashboardWidget title="AI Insights Engine" subtitle="Explainable, source-aware insights generated from mock signals." icon={Lightbulb} span={8} toolbar={<WidgetToolbar />}>
      {topInsight && <InsightCard insight={topInsight} />}
      {ranked.length > 0 && (
        <div className="mt-4 grid gap-3 lg:grid-cols-2">
          {ranked.slice(0, 4).map((insight) => (
            <InsightCard key={insight.id} insight={insight} compact />
          ))}
        </div>
      )}
      <TrustFooter confidence="medium" sourceCount={insights.reduce((sum, insight) => sum + insight.sourceCount, 0)} lastUpdated={topInsight?.generatedAt ?? "2026-06-28T12:20:00.000Z"} note="Insights are mock and review-gated" />
    </DashboardWidget>
  );
}
