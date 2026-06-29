import type { LabsWorkspaceData } from "@/platform/labs/core/labs-types";

export const mockLabsWorkspace: LabsWorkspaceData = {
  welcome: {
    title: "Portal Pulse Labs",
    summary:
      "A safe simulation workspace for exploring mock transfer, roster, market, NIL, strategy, and historical scenarios without mixing them with verified reporting.",
    disclaimer:
      "Labs outputs are simulations, scenario analysis, projections, mock data, or user configurations. They are not reports, commitments, NIL facts, roster facts, or verified intelligence."
  },
  categories: [
    {
      id: "transfer-simulator",
      title: "Transfer Simulator",
      description: "Explore mock outcomes such as a fictional player committing, staying, withdrawing, entering the portal, or choosing another team.",
      status: "mock_available",
      labels: ["Simulation", "Scenario Analysis", "Mock Data"],
      relatedSystems: ["Atlas", "Oracle", "Intelligence Core"],
      isMock: true
    },
    {
      id: "roster-builder",
      title: "Roster Builder",
      description: "Add, remove, and compare fictional roster pieces to understand before/after roster balance.",
      status: "mock_available",
      labels: ["Simulation", "User Configuration", "Mock Data"],
      relatedSystems: ["Atlas", "Team Builder", "Roster DNA"],
      isMock: true
    },
    {
      id: "depth-chart-simulator",
      title: "Depth Chart Simulator",
      description: "Test mock position battles, starter changes, depth pressure, and transfer need scenarios.",
      status: "placeholder",
      labels: ["Simulation", "Projection", "Mock Data"],
      relatedSystems: ["Atlas", "Depth Chart Intelligence"],
      isMock: true
    },
    {
      id: "conference-realignment",
      title: "Conference Realignment Simulator",
      description: "Model fictional conference changes and downstream effects on travel, recruiting, market movement, and scheduling context.",
      status: "placeholder",
      labels: ["Scenario Analysis", "Projection", "Mock Data"],
      relatedSystems: ["Knowledge Graph", "Cartographer"],
      isMock: true
    },
    {
      id: "recruiting-pipeline",
      title: "Recruiting Pipeline Simulator",
      description: "Explore mock high school, region, coach, and school pipeline effects.",
      status: "placeholder",
      labels: ["Scenario Analysis", "Mock Data"],
      relatedSystems: ["Librarian", "Cartographer"],
      isMock: true
    },
    {
      id: "historical-replay-lab",
      title: "Historical Replay Lab",
      description: "Use Apollo-style mock snapshots to replay what Portal Pulse believed at different points in time.",
      status: "mock_available",
      labels: ["Scenario Analysis", "Mock Data"],
      relatedSystems: ["Apollo", "Historical Replay"],
      isMock: true
    },
    {
      id: "transfer-class-builder",
      title: "Transfer Class Builder",
      description: "Build a fictional transfer class and evaluate mock roster, position, and class balance effects.",
      status: "placeholder",
      labels: ["Simulation", "User Configuration", "Mock Data"],
      relatedSystems: ["Rankings", "Atlas"],
      isMock: true
    },
    {
      id: "market-impact",
      title: "Market Impact Simulator",
      description: "Use Mercury-style mock signals to explore interest changes, position scarcity, and conference market movement.",
      status: "mock_available",
      labels: ["Scenario Analysis", "Projection", "Mock Data"],
      relatedSystems: ["Mercury", "TMX"],
      isMock: true
    },
    {
      id: "scholarship-planner",
      title: "Scholarship Planner",
      description: "Explore fictional scholarship pressure, class balance, and future openings.",
      status: "placeholder",
      labels: ["Simulation", "User Configuration", "Mock Data"],
      relatedSystems: ["Atlas", "Scholarship IQ"],
      isMock: true
    },
    {
      id: "coach-strategy",
      title: "Coach Strategy Simulator",
      description: "Compare mock strategies such as building through the portal, retaining the roster, or targeting veteran leadership.",
      status: "mock_available",
      labels: ["Scenario Analysis", "Projection", "Mock Data"],
      relatedSystems: ["Atlas", "Athena"],
      isMock: true
    },
    {
      id: "nil-scenario",
      title: "NIL Scenario Explorer",
      description: "Explore fictional NIL market context with strict disclaimers and no real NIL values.",
      status: "placeholder",
      labels: ["Scenario Analysis", "Mock Data"],
      relatedSystems: ["NIL Intelligence", "Intelligence Core"],
      isMock: true
    },
    {
      id: "future-modules",
      title: "Future Modules",
      description: "Reserved space for Digital Twin, mobile simulations, enterprise labs, and research experiments.",
      status: "future",
      labels: ["Scenario Analysis"],
      relatedSystems: ["Digital Twin", "Portal Pulse Data"],
      isMock: true
    }
  ],
  recentSimulations: [
    {
      id: "sim-transfer-qb",
      name: "Mock QB chooses Team X",
      categoryId: "transfer-simulator",
      label: "Simulation",
      summary: "A fictional quarterback joins a fictional roster, improving mock depth stability while increasing scholarship pressure.",
      confidence: 61,
      lastUpdated: "2026-06-28T10:30:00Z",
      assumptions: ["Player is fictional", "Team X is fictional", "No real transfer claim is implied"],
      outputs: ["Projected roster impact: +8", "Position impact: quarterback depth improves", "Scholarship IQ pressure increases"],
      tradeoffs: ["Improves immediate depth", "May reduce developmental snaps", "Requires scholarship planning"],
      isSavedPlaceholder: false,
      isMock: true
    },
    {
      id: "sim-market-ol",
      name: "Mock offensive line market heats up",
      categoryId: "market-impact",
      label: "Scenario Analysis",
      summary: "A fictional increase in offensive line interest raises mock position scarcity and conference activity.",
      confidence: 54,
      lastUpdated: "2026-06-28T09:45:00Z",
      assumptions: ["Market signals are fictional", "No real player demand is implied"],
      outputs: ["Position scarcity rises", "Conference activity increases", "Suggested watchlist: offensive tackle archetypes"],
      tradeoffs: ["Higher urgency", "Lower confidence due to mock source volume", "Requires Mercury review in future"],
      isSavedPlaceholder: true,
      isMock: true
    }
  ],
  savedScenarios: [
    {
      id: "saved-retention",
      name: "Mock retain veteran core strategy",
      categoryId: "coach-strategy",
      label: "User Configuration",
      summary: "A saved placeholder scenario for prioritizing fictional roster retention over portal volume.",
      confidence: 58,
      lastUpdated: "2026-06-27T16:15:00Z",
      assumptions: ["All roster records are mock", "No real staff strategy is implied"],
      outputs: ["Roster Chemistry improves", "Transfer dependency decreases", "Immediate upside remains stable"],
      tradeoffs: ["Lower market activity", "Less transfer upside", "Greater reliance on development"],
      isSavedPlaceholder: true,
      isMock: true
    }
  ],
  featuredExperiments: [
    {
      id: "exp-apollo",
      title: "Replay a mock prediction shift",
      summary: "Compare what a fictional prediction looked like before and after new mock evidence appeared.",
      categoryId: "historical-replay-lab",
      learningGoal: "Understand how confidence and assumptions change over time.",
      limitation: "Uses fictional snapshots only.",
      isMock: true
    },
    {
      id: "exp-roster",
      title: "Balance a fictional 2027 scholarship class",
      summary: "Adjust mock class balance and observe Scholarship IQ pressure.",
      categoryId: "scholarship-planner",
      learningGoal: "Learn how overfilled and underfilled positions affect future roster flexibility.",
      limitation: "Does not use real scholarship counts.",
      isMock: true
    }
  ],
  assistant: {
    title: "Labs AI Simulation Assistant",
    responsibilities: [
      "Explain assumptions",
      "Summarize simulation outputs",
      "Identify trade-offs",
      "Suggest additional scenarios",
      "Explain limitations"
    ],
    guardrails: [
      "Never present simulations as facts",
      "Never fabricate real player claims",
      "Never fabricate NIL values",
      "Always label mock and user-configured outputs",
      "Route publication decisions through the Intelligence Core"
    ],
    suggestedPrompts: [
      "Explain the assumptions in this scenario.",
      "What trade-offs does this roster simulation create?",
      "Compare this mock strategy with a retention-first strategy.",
      "What limitations should I understand before sharing this?"
    ],
    isMock: true
  },
  framework: {
    purpose: "Create a safe, labeled environment for exploring possible outcomes without presenting simulated outputs as verified intelligence.",
    assumptions: ["All data is fictional", "No simulated result is a report", "Confidence is visual only in this phase"],
    inputs: ["Scenario name", "Variables", "User notes", "Mock roster/market/replay context"],
    variables: [
      { id: "confidence", label: "Confidence Slider", value: "Visual only: 60", description: "Displays user-perceived confidence without changing real intelligence.", isMock: true },
      { id: "speed", label: "Simulation Speed", value: "Placeholder", description: "Future control for replay or iterative simulation speed.", isMock: true },
      { id: "notes", label: "Notes", value: "Placeholder", description: "Future user configuration and collaboration notes.", isMock: true }
    ],
    outputs: ["Simulation summary", "Projected impact", "Trade-offs", "Limitations", "Export placeholder"],
    confidence: 60,
    limitations: ["No real data", "No publication authority", "No autonomous AI decisions", "No production save/export"],
    disclaimer: "Labs is separate from verified reporting. Outputs are simulation artifacts only.",
    exportPlaceholder: "Export will later create a labeled simulation report.",
    isMock: true
  },
  learningResources: [
    "How simulations differ from predictions",
    "How assumptions change outcomes",
    "Why Labs never publishes verified intelligence",
    "How the Intelligence Core separates simulations from reports"
  ],
  commandCenterWidget: {
    recentSimulations: [],
    suggestedScenarios: [],
    learningResources: ["Simulation safety basics", "Scenario assumptions guide"],
    disclaimer: "Labs outputs are simulation-only and separate from verified intelligence.",
    isMock: true
  },
  isMock: true
};

mockLabsWorkspace.commandCenterWidget.recentSimulations = mockLabsWorkspace.recentSimulations.slice(0, 2);
mockLabsWorkspace.commandCenterWidget.suggestedScenarios = mockLabsWorkspace.featuredExperiments.slice(0, 2);
