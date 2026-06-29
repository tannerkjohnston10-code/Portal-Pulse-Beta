import { Compass, MapPinned } from "lucide-react";
import { HeatMapLayer } from "@/components/maps/heat-map-layer";
import { MapFilterPanel } from "@/components/maps/map-filter-panel";
import { RecruitingPipelineLayer } from "@/components/maps/recruiting-pipeline-layer";
import { RegionSummaryCard } from "@/components/maps/region-summary-card";
import { SpatialMap } from "@/components/maps/spatial-map";
import { StateSummaryCard } from "@/components/maps/state-summary-card";
import { PageFrame } from "@/components/layout/page-frame";
import { MockDataNotice } from "@/components/ui/mock-data-notice";
import { PortalPulsePlatform } from "@/platform";

export default function MapsPage() {
  const dashboard = PortalPulsePlatform.maps.dashboard();
  const finding = PortalPulsePlatform.maps.cartographerFinding();
  const stateEntities = PortalPulsePlatform.maps.dashboard().flows.map((flow) => flow.origin).filter((entity) => entity.entityType === "State");

  return (
    <PageFrame
      eyebrow="Cartographer"
      title="Spatial intelligence for player movement, recruiting pipelines, and regional momentum."
      description="Cartographer visualizes verified and explainable relationships from the Knowledge Graph and Intelligence Core. Mock map data is source-aware, confidence-aware, and future-ready."
    >
      <div className="grid gap-6">
        <MockDataNotice />

        <section className="grid gap-4 md:grid-cols-4">
          {[
            ["Layers", dashboard.layers.length],
            ["Flows", dashboard.flows.length],
            ["Heat zones", dashboard.heatZones.length],
            ["Graph relationships", dashboard.graphOverview.relationshipCount]
          ].map(([label, value]) => (
            <div key={label} className="rounded-lg border border-white/10 bg-slate-950/70 p-5">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-slate-500">{label}</p>
              <p className="mt-2 text-3xl font-black text-white">{value}</p>
            </div>
          ))}
        </section>

        <div className="grid gap-6 xl:grid-cols-[1fr_22rem]">
          <SpatialMap title="Live Transfer Map (Mock)" flows={dashboard.flows} heatZones={dashboard.heatZones} entities={[...dashboard.regions, ...dashboard.flows.map((flow) => flow.destination)]} />
          <MapFilterPanel layers={dashboard.layers} />
        </div>

        <section className="grid gap-4 lg:grid-cols-3">
          <div className="rounded-lg border border-white/10 bg-slate-950/70 p-5">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-200">Recruiting Pipeline Map</p>
            <h2 className="mt-2 text-xl font-black text-white">Mock high school to college pathways</h2>
            <div className="mt-4">
              <RecruitingPipelineLayer pipelines={dashboard.pipelines} />
            </div>
          </div>
          <div className="rounded-lg border border-white/10 bg-slate-950/70 p-5">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-amber-200">Heat Maps</p>
            <h2 className="mt-2 text-xl font-black text-white">Mock regional intensity</h2>
            <div className="mt-4">
              <HeatMapLayer zones={dashboard.heatZones} />
            </div>
          </div>
          <div className="rounded-lg border border-cyan-300/20 bg-cyan-300/10 p-5">
            <Compass className="text-cyan-100" size={22} aria-hidden />
            <p className="mt-4 text-xs font-black uppercase tracking-[0.18em] text-cyan-200">Cartographer finding</p>
            <h2 className="mt-2 text-xl font-black text-white">{finding.title}</h2>
            <p className="mt-3 text-sm leading-6 text-slate-300">{finding.geographicTrendSummary}</p>
            <p className="mt-3 text-xs font-bold text-slate-400">{finding.hottestTransferRegion} · {finding.mostActiveConference} · submitted to Core</p>
          </div>
        </section>

        <section className="grid gap-4 lg:grid-cols-2">
          <div className="rounded-lg border border-white/10 bg-slate-950/70 p-5">
            <div className="flex items-center gap-3">
              <MapPinned className="text-cyan-200" size={20} aria-hidden />
              <h2 className="text-xl font-black text-white">Geographic trends</h2>
            </div>
            <div className="mt-4 grid gap-3">
              {dashboard.analytics.map((answer) => (
                <article key={answer.id} className="rounded-md border border-white/10 bg-white/[0.03] p-3">
                  <p className="text-sm font-black text-white">{answer.question}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-400">{answer.answer}</p>
                  <p className="mt-2 text-xs font-bold text-slate-500">{answer.confidence} confidence · {answer.sourceCount} sources · Mock</p>
                </article>
              ))}
            </div>
          </div>
          <div className="grid gap-4">
            {dashboard.regions.map((region) => <RegionSummaryCard key={region.id} region={region} />)}
            {stateEntities.slice(0, 2).map((state) => <StateSummaryCard key={state.id} state={state} />)}
          </div>
        </section>
      </div>
    </PageFrame>
  );
}
