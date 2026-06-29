export type LabSimulationCategoryId =
  | "transfer-simulator"
  | "roster-builder"
  | "depth-chart-simulator"
  | "conference-realignment"
  | "recruiting-pipeline"
  | "historical-replay-lab"
  | "transfer-class-builder"
  | "market-impact"
  | "scholarship-planner"
  | "coach-strategy"
  | "nil-scenario"
  | "future-modules";

export type LabOutputLabel = "Simulation" | "Scenario Analysis" | "Projection" | "Mock Data" | "User Configuration";

export interface LabSimulationCategory {
  id: LabSimulationCategoryId;
  title: string;
  description: string;
  status: "mock_available" | "placeholder" | "future";
  labels: LabOutputLabel[];
  relatedSystems: string[];
  isMock: true;
}

export interface LabVariable {
  id: string;
  label: string;
  value: string;
  description: string;
  isMock: true;
}

export interface LabSimulationFramework {
  purpose: string;
  assumptions: string[];
  inputs: string[];
  variables: LabVariable[];
  outputs: string[];
  confidence: number;
  limitations: string[];
  disclaimer: string;
  exportPlaceholder: string;
  isMock: true;
}

export interface LabScenario {
  id: string;
  name: string;
  categoryId: LabSimulationCategoryId;
  label: LabOutputLabel;
  summary: string;
  confidence: number;
  lastUpdated: string;
  assumptions: string[];
  outputs: string[];
  tradeoffs: string[];
  isSavedPlaceholder: boolean;
  isMock: true;
}

export interface LabExperiment {
  id: string;
  title: string;
  summary: string;
  categoryId: LabSimulationCategoryId;
  learningGoal: string;
  limitation: string;
  isMock: true;
}

export interface LabAssistantGuidance {
  title: string;
  responsibilities: string[];
  guardrails: string[];
  suggestedPrompts: string[];
  isMock: true;
}

export interface LabCommandCenterWidget {
  recentSimulations: LabScenario[];
  suggestedScenarios: LabExperiment[];
  learningResources: string[];
  disclaimer: string;
  isMock: true;
}

export interface LabsWorkspaceData {
  welcome: {
    title: string;
    summary: string;
    disclaimer: string;
  };
  categories: LabSimulationCategory[];
  recentSimulations: LabScenario[];
  savedScenarios: LabScenario[];
  featuredExperiments: LabExperiment[];
  assistant: LabAssistantGuidance;
  framework: LabSimulationFramework;
  learningResources: string[];
  commandCenterWidget: LabCommandCenterWidget;
  isMock: true;
}
