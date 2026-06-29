import { Filter } from "lucide-react";
import { PageFrame } from "@/components/layout/page-frame";
import { NILCard } from "@/components/nil/nil-card";
import { MockDataNotice } from "@/components/ui/mock-data-notice";
import { cardStyles, panelStyles } from "@/lib/design-tokens";
import { nilService } from "@/server/services/nil-service";

const filters = ["Sport", "School", "Position", "Status"];

export default async function NILPage() {
  const nilReports = await nilService.getNILReports();

  return (
    <PageFrame
      eyebrow="NIL tracker"
      title="NIL Intelligence Shell"
      description="NIL values may be confirmed, reported, estimated, rumored, or unknown. This foundation presents labels and confidence without treating values as verified facts."
    >
      <div className="grid gap-6">
        <MockDataNotice />
        <section className={`${cardStyles} p-5`}>
          <p className="text-sm leading-7 text-slate-300">
            NIL reporting requires extra caution. Future reports must include source URLs, confidence levels, timestamps, and clear labels for confirmed, reported, estimated, rumored, or unknown values.
          </p>
        </section>
        <section className={`${panelStyles} flex flex-wrap gap-2 p-4`}>
          {filters.map((filter) => (
            <button key={filter} className="inline-flex min-h-10 items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 text-sm font-black text-slate-300 hover:bg-white/10">
              <Filter size={14} aria-hidden />
              {filter}
            </button>
          ))}
        </section>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {nilReports.map((report) => (
            <NILCard key={report.id} report={report} />
          ))}
        </div>
      </div>
    </PageFrame>
  );
}
