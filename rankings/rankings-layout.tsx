import type { ReactNode } from "react";
import type { RankingSummary } from "@/types/rankings";
import { PageFrame } from "@/components/layout/page-frame";
import { MockDataNotice } from "@/components/ui/mock-data-notice";
import { TrustNotice } from "@/components/ui/trust-notice";
import { RankingFilters } from "@/components/rankings/ranking-filters";
import { RankingMethodologyCard } from "@/components/rankings/ranking-methodology-card";
import { RankingTabs } from "@/components/rankings/ranking-tabs";

export function RankingsLayout({ summary, children, nil = false }: { summary: RankingSummary; children: ReactNode; nil?: boolean }) {
  return (
    <PageFrame eyebrow="Rankings Intelligence" title={summary.title} description={summary.description}>
      <div className="grid gap-6">
        <MockDataNotice />
        <TrustNotice />
        <RankingTabs />
        <RankingFilters />
        {children}
        <RankingMethodologyCard nil={nil} />
      </div>
    </PageFrame>
  );
}
