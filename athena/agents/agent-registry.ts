import type { AthenaAgent } from "@/platform/athena/types/athena-types";

export const athenaAgents: AthenaAgent[] = [
  {
    id: "athena-chief",
    name: "Athena",
    codename: "Chief Intelligence Officer",
    role: "chief_intelligence_officer",
    mission: "Coordinate source-backed intelligence proposals and route them through the Intelligence Core.",
    specialty: ["briefings", "priority", "cross-sport intelligence"],
    sportIds: ["football", "mens-basketball", "womens-basketball", "baseball", "softball"],
    status: "online",
    requiresCoreApproval: true,
    isMock: true
  },
  {
    id: "oracle-prediction",
    name: "Oracle",
    codename: "Prediction Specialist",
    role: "prediction_specialist",
    mission: "Identify prediction signals without presenting projections as facts.",
    specialty: ["prediction movement", "probability explanations", "confidence deltas"],
    sportIds: ["football", "mens-basketball", "womens-basketball", "baseball", "softball"],
    status: "standby",
    requiresCoreApproval: true,
    isMock: true
  },
  {
    id: "sentinel-breaking",
    name: "Sentinel",
    codename: "Breaking News Monitor",
    role: "breaking_news_monitor",
    mission: "Observe breaking public-signal candidates and escalate only evidence-linked findings.",
    specialty: ["breaking feed", "source freshness", "conflict flags"],
    sportIds: ["football", "mens-basketball", "womens-basketball", "baseball", "softball"],
    status: "online",
    requiresCoreApproval: true,
    isMock: true
  },
  {
    id: "atlas-roster",
    name: "Atlas",
    codename: "Roster Intelligence Analyst",
    role: "sport_analyst",
    mission: "Analyze multi-sport roster, portal, lineup, rotation, scholarship, and team-need signals.",
    specialty: ["multi-sport roster needs", "sport-specific depth context", "team momentum"],
    sportIds: ["football", "mens-basketball", "womens-basketball", "baseball", "softball"],
    status: "standby",
    requiresCoreApproval: true,
    isMock: true
  },
  {
    id: "vega-basketball",
    name: "Vega",
    codename: "Basketball Analyst",
    role: "sport_analyst",
    mission: "Analyze basketball roster construction, transfer fit, and conference signals.",
    specialty: ["basketball fit", "rotation context", "class balance"],
    sportIds: ["mens-basketball", "womens-basketball"],
    status: "standby",
    requiresCoreApproval: true,
    isMock: true
  },
  {
    id: "mercury-market",
    name: "Mercury",
    codename: "Transfer Market Analyst",
    role: "transfer_market_analyst",
    mission: "Monitor market movement, demand, NIL-adjacent activity, and transfer momentum.",
    specialty: ["market movers", "NIL caution labels", "demand signals"],
    sportIds: ["football", "mens-basketball", "womens-basketball", "baseball", "softball"],
    status: "online",
    requiresCoreApproval: true,
    isMock: true
  },
  {
    id: "apollo-history",
    name: "Apollo",
    codename: "Historical Analyst",
    role: "historical_analyst",
    mission: "Compare current signals with historical portal and recruiting patterns.",
    specialty: ["historical rarity", "trend comparisons", "program context"],
    sportIds: ["football", "mens-basketball", "womens-basketball", "baseball", "softball"],
    status: "standby",
    requiresCoreApproval: true,
    isMock: true
  },
  {
    id: "hermes-notifications",
    name: "Hermes",
    codename: "Notification Intelligence",
    role: "notification_intelligence",
    mission: "Prepare alert candidates that respect confidence, source, and user preference rules.",
    specialty: ["watchlists", "alert routing", "notification priority"],
    sportIds: ["football", "mens-basketball", "womens-basketball", "baseball", "softball"],
    status: "standby",
    requiresCoreApproval: true,
    isMock: true
  },
  {
    id: "archivist-replay",
    name: "Archivist",
    codename: "Historical Replay Analyst",
    role: "historical_replay_analyst",
    mission: "Prepare point-in-time replay context for players, teams, rankings, and predictions.",
    specialty: ["snapshots", "timeline replay", "ranking history"],
    sportIds: ["football", "mens-basketball", "womens-basketball", "baseball", "softball"],
    status: "review_only",
    requiresCoreApproval: true,
    isMock: true
  },
  {
    id: "cartographer-map",
    name: "Cartographer",
    codename: "Map Intelligence",
    role: "map_intelligence",
    mission: "Prepare geography and movement-line intelligence for transfer and recruiting maps.",
    specialty: ["movement maps", "regional pipelines", "conference geography"],
    sportIds: ["football", "mens-basketball", "womens-basketball", "baseball", "softball"],
    status: "standby",
    requiresCoreApproval: true,
    isMock: true
  },
  {
    id: "librarian-graph",
    name: "Librarian",
    codename: "Knowledge Graph Analyst",
    role: "knowledge_graph_analyst",
    mission: "Identify relationship candidates for players, coaches, schools, sources, and conferences.",
    specialty: ["knowledge graph", "entity relationships", "source linkage"],
    sportIds: ["football", "mens-basketball", "womens-basketball", "baseball", "softball"],
    status: "online",
    requiresCoreApproval: true,
    isMock: true
  }
];

export function getAthenaAgent(agentId: string) {
  return athenaAgents.find((agent) => agent.id === agentId);
}
