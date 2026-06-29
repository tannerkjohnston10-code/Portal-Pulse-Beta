import type { LabsWorkspaceData } from "@/platform/labs/core/labs-types";
import { AIExplanationCard } from "@/components/labs/ai-explanation-card";
import { AssumptionPanel } from "@/components/labs/assumption-panel";
import { ComparisonView } from "@/components/labs/comparison-view";
import { DisclaimerBanner } from "@/components/labs/disclaimer-banner";
import { LabsCategoryCard } from "@/components/labs/labs-category-card";
import { SaveScenarioDialog } from "@/components/labs/save-scenario-dialog";
import { ScenarioCard } from "@/components/labs/scenario-card";
import { SimulationResults } from "@/components/labs/simulation-results";
import { SimulationTimeline } from "@/components/labs/simulation-timeline";
import { TradeoffCard } from "@/components/labs/tradeoff-card";
import { VariableEditor } from "@/components/labs/variable-editor";

export function SimulationWorkspace({ workspace }: { workspace: LabsWorkspaceData }) {
  const primaryScenario = workspace.recentSimulations[0];

  return (
    <div className="grid gap-6">
      <DisclaimerBanner text={workspace.welcome.disclaimer} />

      <section className="rounded-lg border border-cyan-300/20 bg-cyan-300/10 p-6">
        <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-200">Welcome Panel</p>
        <h2 className="mt-3 text-2xl font-black text-white">{workspace.welcome.title}</h2>
        <p className="mt-3 max-w-4xl text-sm font-semibold leading-6 text-cyan-50">{workspace.welcome.summary}</p>
      </section>

      <section>
        <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-200">Simulation Categories</p>
            <h2 className="mt-2 text-2xl font-black text-white">Explore safe what-if modules.</h2>
          </div>
          <span className="rounded-full border border-amber-300/20 bg-amber-300/10 px-3 py-1 text-xs font-black uppercase tracking-wide text-amber-100">All mock</span>
        </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {workspace.categories.map((category) => <LabsCategoryCard key={category.id} category={category} />)}
        </div>
      </section>

      <section className="grid gap-6 xl:grid-cols-[1fr_0.8fr]">
        <div>
          <p className="mb-4 text-xs font-black uppercase tracking-[0.18em] text-cyan-200">Recent Simulations</p>
          <div className="grid gap-4">
            {workspace.recentSimulations.map((scenario) => <ScenarioCard key={scenario.id} scenario={scenario} />)}
          </div>
        </div>
        <div className="grid gap-4">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-200">Saved Scenarios</p>
          {workspace.savedScenarios.map((scenario) => <ScenarioCard key={scenario.id} scenario={scenario} />)}
          <SaveScenarioDialog />
        </div>
      </section>

      <section className="grid gap-6 xl:grid-cols-[0.95fr_1fr]">
        <VariableEditor variables={workspace.framework.variables} />
        <AssumptionPanel assumptions={workspace.framework.assumptions} limitations={workspace.framework.limitations} />
      </section>

      <section className="grid gap-6 xl:grid-cols-3">
        <SimulationResults outputs={workspace.framework.outputs} />
        <TradeoffCard title={primaryScenario.name} tradeoffs={primaryScenario.tradeoffs} />
        <ComparisonView />
      </section>

      <section className="grid gap-6 xl:grid-cols-[1fr_0.8fr]">
        <SimulationTimeline scenarios={[...workspace.recentSimulations, ...workspace.savedScenarios]} />
        <AIExplanationCard assistant={workspace.assistant} />
      </section>

      <section>
        <p className="mb-4 text-xs font-black uppercase tracking-[0.18em] text-cyan-200">Featured Experiments</p>
        <div className="grid gap-4 md:grid-cols-2">
          {workspace.featuredExperiments.map((experiment) => (
            <article key={experiment.id} className="rounded-lg border border-white/10 bg-slate-900/80 p-5">
              <p className="text-xs font-black uppercase tracking-wide text-slate-500">{experiment.categoryId}</p>
              <h3 className="mt-2 text-lg font-black text-white">{experiment.title}</h3>
              <p className="mt-3 text-sm font-semibold leading-6 text-slate-300">{experiment.summary}</p>
              <p className="mt-4 text-sm font-bold text-cyan-100">Learning goal: {experiment.learningGoal}</p>
              <p className="mt-2 text-xs font-semibold leading-5 text-slate-500">Limitation: {experiment.limitation}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="rounded-lg border border-white/10 bg-slate-950/70 p-5">
        <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-200">Learning Resources</p>
        <div className="mt-4 grid gap-3 md:grid-cols-2">
          {workspace.learningResources.map((resource) => (
            <div key={resource} className="rounded-md border border-white/10 bg-slate-900/80 p-3 text-sm font-bold text-slate-200">
              {resource}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
