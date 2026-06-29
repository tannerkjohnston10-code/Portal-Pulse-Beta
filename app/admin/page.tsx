import { AlertCircle, BadgeDollarSign, CopyWarning, FileQuestion, ShieldAlert, TriangleAlert } from "lucide-react";
import { AdminQueueCard } from "@/components/admin/admin-queue-card";
import { PageFrame } from "@/components/layout/page-frame";
import { MockDataNotice } from "@/components/ui/mock-data-notice";
import { SectionHeader } from "@/components/ui/section-header";
import { cardStyles } from "@/lib/design-tokens";
import { adminReviewService } from "@/server/services/admin-review-service";
import { ingestionService } from "@/server/services/ingestion-service";
import type { AdminClaim } from "@/types/portal";

const queues: Array<{ label: string; category: AdminClaim["category"]; icon: typeof AlertCircle }> = [
  { label: "New claims needing review", category: "new_claim", icon: FileQuestion },
  { label: "Low-confidence claims", category: "low_confidence", icon: TriangleAlert },
  { label: "Conflicting reports", category: "conflicting_report", icon: ShieldAlert },
  { label: "NIL reports needing review", category: "nil_review", icon: BadgeDollarSign },
  { label: "Duplicate player warnings", category: "duplicate_player", icon: CopyWarning },
  { label: "Failed source checks", category: "failed_source_check", icon: AlertCircle }
];

export default async function AdminPage() {
  const [adminClaims, ingestionRun] = await Promise.all([
    adminReviewService.getReviewQueue(),
    ingestionService.runMockIngestion()
  ]);

  const ingestionStats = [
    { label: "Recent ingestion jobs", value: "1" },
    { label: "Sources checked", value: ingestionRun.sourcesChecked.toString() },
    { label: "Claim candidates created", value: ingestionRun.claimCandidatesCreated.toString() },
    { label: "Low-confidence items", value: ingestionRun.claimCandidates.filter((candidate) => candidate.confidenceScore < 60).length.toString() },
    { label: "Rejected sources", value: ingestionRun.sourcesRejected.toString() },
    { label: "Duplicate detections", value: ingestionRun.duplicatesDetected.toString() }
  ];

  return (
    <PageFrame
      eyebrow="Admin dashboard"
      title="Verification Workflow Shell"
      description="A future protected admin surface for source review, low-confidence claims, conflicts, NIL reviews, duplicate warnings, and failed source checks."
    >
      <div className="grid gap-6">
        <MockDataNotice />
        <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {queues.map((queue) => {
            const Icon = queue.icon;
            const count = adminClaims.filter((claim) => claim.category === queue.category).length;
            return (
              <article key={queue.category} className={`${cardStyles} p-5`}>
                <Icon className="text-cyan-200" size={22} aria-hidden />
                <p className="mt-4 text-sm font-bold text-slate-400">{queue.label}</p>
                <p className="mt-1 text-3xl font-black text-white">{count}</p>
                <p className="mt-2 text-xs font-bold text-yellow-100">Mock queue count</p>
              </article>
            );
          })}
        </section>
        <section>
          <SectionHeader title="Review Queue" description="Mock admin claims demonstrate the verification workflow without authentication or real moderation logic." />
          <div className="grid gap-4 md:grid-cols-2">
            {adminClaims.map((claim) => (
              <AdminQueueCard key={claim.id} claim={claim} />
            ))}
          </div>
        </section>
        <section>
          <SectionHeader title="Mock Ingestion Monitor" description="Demo-only ingestion telemetry. No real scraping, private data, paywall bypassing, or real claims are involved." />
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {ingestionStats.map((stat) => (
              <article key={stat.label} className={`${cardStyles} p-5`}>
                <p className="text-sm font-bold text-slate-400">{stat.label}</p>
                <p className="mt-2 text-3xl font-black text-white">{stat.value}</p>
                <p className="mt-2 text-xs font-bold text-yellow-100">Mock/demo data</p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </PageFrame>
  );
}
