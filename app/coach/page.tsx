import Link from "next/link";
import { ArrowRight, ClipboardList, FlaskConical, ShieldCheck } from "lucide-react";
import { PageFrame } from "@/components/layout/page-frame";
import { MockDataNotice } from "@/components/ui/mock-data-notice";

const coachLinks = [
  {
    href: "/team-builder",
    title: "Atlas Team Builder",
    description: "Review roster DNA, transfer fit, scholarship planning, depth chart scenarios, and strategy recommendations.",
    icon: ClipboardList
  },
  {
    href: "/labs",
    title: "Portal Pulse Labs",
    description: "Run clearly labeled mock simulations and scenario analysis separate from verified intelligence.",
    icon: FlaskConical
  },
  {
    href: "/programs/mock-state",
    title: "Program Intelligence",
    description: "Open the unified program workspace with verified, analytical, historical, projection, and simulation sections separated.",
    icon: ShieldCheck
  }
] as const;

export default function CoachWorkspacePage() {
  return (
    <PageFrame
      eyebrow="Coach Workspace"
      title="A guided entry point for coach-facing intelligence."
      description="This beta route connects coaching workflows to Atlas, Labs, and Program Intelligence without adding private recruiting CRM functionality."
    >
      <div className="grid gap-6">
        <MockDataNotice />
        <section className="grid gap-4 md:grid-cols-3">
          {coachLinks.map((item) => {
            const Icon = item.icon;
            return (
              <Link key={item.href} href={item.href} className="group rounded-lg border border-white/10 bg-slate-950/70 p-5 transition hover:-translate-y-0.5 hover:border-cyan-300/30 hover:bg-white/[0.05]">
                <span className="grid h-11 w-11 place-items-center rounded-md border border-cyan-300/25 bg-cyan-300/10 text-cyan-100">
                  <Icon size={19} aria-hidden />
                </span>
                <h2 className="mt-4 text-lg font-black text-white">{item.title}</h2>
                <p className="mt-2 text-sm leading-6 text-slate-400">{item.description}</p>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-black text-cyan-200">
                  Open workspace <ArrowRight size={15} aria-hidden />
                </span>
              </Link>
            );
          })}
        </section>
      </div>
    </PageFrame>
  );
}
