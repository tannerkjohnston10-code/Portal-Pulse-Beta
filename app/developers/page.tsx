import { Code2, KeyRound, Radio, ShieldCheck, Webhook } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { PageFrame } from "@/components/layout/page-frame";
import { MockDataNotice } from "@/components/ui/mock-data-notice";
import { TrustNotice } from "@/components/ui/trust-notice";

const endpoints = ["/api/v1/health", "/api/v1/players", "/api/v1/teams", "/api/v1/rankings", "/api/v1/insights", "/api/v1/command-center", "/api/v1/search", "/api/v1/sources"];

export default function DevelopersPage() {
  return (
    <PageFrame
      eyebrow="Developer Platform"
      title="Portal Pulse Intelligence API"
      description="Coming soon: source-aware, confidence-aware, versioned college athletics intelligence APIs for products, partners, enterprise dashboards, and internal tools."
    >
      <div className="grid gap-6">
        <MockDataNotice />
        <TrustNotice />
        <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          <Feature icon={Code2} title="Versioned API" body="All future endpoints use /api/v1 contracts and standardized response wrappers." />
          <Feature icon={ShieldCheck} title="Trust First" body="Responses carry confidence, source counts, timestamps, and mock labels." />
          <Feature icon={KeyRound} title="API Keys" body="Future API keys, partner tokens, premium scopes, and enterprise access." />
          <Feature icon={Webhook} title="Webhooks" body="Future player, team, prediction, NIL, insight, and source-conflict webhooks." />
        </section>

        <section className="rounded-lg border border-white/10 bg-slate-950/72 p-5">
          <h2 className="text-lg font-black text-white">Example Endpoints</h2>
          <div className="mt-4 grid gap-2 md:grid-cols-2">
            {endpoints.map((endpoint) => (
              <code key={endpoint} className="rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm font-bold text-cyan-100">
                GET {endpoint}
              </code>
            ))}
          </div>
        </section>

        <section className="rounded-lg border border-white/10 bg-slate-950/72 p-5">
          <h2 className="text-lg font-black text-white">Response Format</h2>
          <pre className="mt-4 overflow-x-auto rounded-lg border border-white/10 bg-black/30 p-4 text-xs leading-6 text-slate-300">
{`{
  "data": {},
  "meta": {
    "version": "v1",
    "generatedAt": "2026-06-28T12:00:00.000Z",
    "isMock": true,
    "sourceCount": 0,
    "confidenceScore": 0,
    "requestId": "req_mock"
  },
  "errors": []
}`}
          </pre>
        </section>

        <section className="grid gap-4 lg:grid-cols-2">
          <Panel icon={Radio} title="API Trust Principles" items={["No unsourced facts", "No raw copied article text", "No private NIL data", "No admin-only notes", "Confidence and timestamps on external data"]} />
          <Panel icon={Webhook} title="Webhook Preview" items={["player.updated", "player.entered_portal", "team.ranking_changed", "prediction.changed", "nil.updated", "insight.generated"]} />
        </section>
      </div>
    </PageFrame>
  );
}

function Feature({ icon: Icon, title, body }: { icon: LucideIcon; title: string; body: string }) {
  return (
    <article className="rounded-lg border border-white/10 bg-slate-950/72 p-5">
      <Icon size={20} className="text-cyan-300" aria-hidden />
      <h2 className="mt-4 text-lg font-black text-white">{title}</h2>
      <p className="mt-2 text-sm font-semibold leading-6 text-slate-400">{body}</p>
    </article>
  );
}

function Panel({ icon: Icon, title, items }: { icon: LucideIcon; title: string; items: string[] }) {
  return (
    <section className="rounded-lg border border-white/10 bg-slate-950/72 p-5">
      <div className="flex items-center gap-2">
        <Icon size={18} className="text-cyan-300" aria-hidden />
        <h2 className="text-lg font-black text-white">{title}</h2>
      </div>
      <div className="mt-4 grid gap-2">
        {items.map((item) => (
          <span key={item} className="rounded-md bg-white/5 px-3 py-2 text-sm font-bold text-slate-300">
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}
