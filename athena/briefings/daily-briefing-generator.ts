import { athenaOrchestrator } from "@/platform/athena/orchestration/athena-orchestrator";
import type { AthenaBriefingItem, AthenaBriefingSection, AthenaDailyBriefing } from "@/platform/athena/briefings/briefing-types";

const briefingSections: Array<{
  section: AthenaBriefingSection;
  title: string;
  summary: string;
  confidence: AthenaBriefingItem["confidence"];
  evidenceCount: number;
  sourceCount: number;
}> = [
  {
    section: "overnight_updates",
    title: "Mock overnight portal signal cluster",
    summary: "Fictional public-signal volume increased across multiple mock portal storylines.",
    confidence: "medium",
    evidenceCount: 4,
    sourceCount: 3
  },
  {
    section: "watched_teams",
    title: "Mock watched team momentum",
    summary: "A watched fictional program shows Core-approved placeholder momentum from team and roster signals.",
    confidence: "medium",
    evidenceCount: 3,
    sourceCount: 2
  },
  {
    section: "watched_players",
    title: "Mock watched player activity",
    summary: "A fictional watched player has new placeholder timeline activity requiring continued monitoring.",
    confidence: "high",
    evidenceCount: 5,
    sourceCount: 4
  },
  {
    section: "prediction_changes",
    title: "Mock prediction mover",
    summary: "A fictional prediction shifted in the mock dataset; this is a projection signal, not a reported fact.",
    confidence: "medium",
    evidenceCount: 3,
    sourceCount: 3
  },
  {
    section: "nil_movement",
    title: "Mock NIL movement watch",
    summary: "NIL-related placeholder activity is labeled as review-sensitive and cannot be treated as confirmed value.",
    confidence: "low",
    evidenceCount: 2,
    sourceCount: 1
  },
  {
    section: "team_momentum",
    title: "Mock team momentum change",
    summary: "A fictional team momentum score improved due to mock roster-need and source-volume signals.",
    confidence: "medium",
    evidenceCount: 4,
    sourceCount: 3
  },
  {
    section: "conference_trends",
    title: "Mock conference activity trend",
    summary: "A fictional conference shows elevated placeholder transfer activity in the Command Center model.",
    confidence: "medium",
    evidenceCount: 3,
    sourceCount: 2
  },
  {
    section: "watch_next",
    title: "Watch confidence gaps",
    summary: "Athena recommends reviewing low-confidence and NIL-sensitive items before surfacing stronger conclusions.",
    confidence: "high",
    evidenceCount: 4,
    sourceCount: 4
  }
];

function confidenceScore(confidence: AthenaBriefingItem["confidence"]) {
  const scores = {
    high: 90,
    medium: 68,
    low: 42,
    conflicting: 30,
    unknown: 20
  };
  return scores[confidence];
}

export const dailyBriefingGenerator = {
  generate(): AthenaDailyBriefing {
    const cycle = athenaOrchestrator.coordinateDailyCycle();
    const decisions = cycle.workflow.decisions;
    const items = briefingSections.map((item, index): AthenaBriefingItem => ({
      id: `mock-athena-briefing-item-${index + 1}`,
      ...item,
      coreDecisionId: decisions[index % decisions.length]?.id ?? "mock-core-decision-unavailable",
      isMock: true
    }));
    const sourceCount = items.reduce((sum, item) => sum + item.sourceCount, 0);
    const evidenceCount = items.reduce((sum, item) => sum + item.evidenceCount, 0);
    const confidenceAverage = Math.round(items.reduce((sum, item) => sum + confidenceScore(item.confidence), 0) / items.length);

    return {
      id: "mock-athena-daily-briefing",
      title: "Mock Athena Daily Intelligence Briefing",
      headlineSummary: "Athena sees several fictional overnight movement signals, with the strongest mock items tied to watched players, team momentum, and confidence gaps that need review.",
      generatedAt: "2026-06-28T14:30:00.000Z",
      lastUpdated: "2026-06-28T14:30:00.000Z",
      confidenceAverage,
      confidenceSummary: `${confidenceAverage}% average mock confidence across Core-gated briefing items.`,
      sourceCount,
      evidenceCount,
      items,
      topOvernightUpdates: items.filter((item) => item.section === "overnight_updates"),
      watchedTeams: items.filter((item) => item.section === "watched_teams"),
      watchedPlayers: items.filter((item) => item.section === "watched_players"),
      predictionChanges: items.filter((item) => item.section === "prediction_changes"),
      nilMovement: items.filter((item) => item.section === "nil_movement"),
      teamMomentum: items.filter((item) => item.section === "team_momentum"),
      conferenceTrends: items.filter((item) => item.section === "conference_trends"),
      whatToWatchNext: items.filter((item) => item.section === "watch_next"),
      findings: cycle.workflow.findings,
      coreDecisions: decisions,
      audioAvailable: false,
      audioButtonLabel: "Listen to mock briefing",
      isMock: true
    };
  }
};

