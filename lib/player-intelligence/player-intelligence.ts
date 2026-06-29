import type { NILReport, Player, Prediction, TimelineEvent, Visit } from "@/types/portal";

export type ScoreFactor = {
  label: string;
  value: number;
  detail: string;
};

export type SchoolFit = {
  school: string;
  logo: string;
  headCoach: string;
  conference: string;
  interestLevel: string;
  confidenceScore: number;
  rosterFit: number;
  depthOpportunity: number;
  distanceFromHome: string;
  nilMarket: string;
  scholarshipOutlook: string;
  relationshipScore: number;
  lastActivity: string;
};

export type RosterFitCategory = {
  label: string;
  score: number;
};

export type NewsIntelligenceItem = {
  headline: string;
  summary: string;
  confidenceScore: number;
  sourceCount: number;
  timelineImpact: string;
  predictionImpact: string;
  relatedPlayers: string[];
  relatedSchools: string[];
};

export type GraphNode = {
  label: string;
  type: string;
  strength: number;
};

export type PlayerIntelligence = {
  hometown: string;
  highSchool: string;
  currentSchool: string;
  previousSchools: string[];
  portalEntryDate: string;
  eligibilityRemaining: string;
  height: string;
  weight: string;
  transferRating: string;
  recruitingRating: string;
  portalPulseScore: number;
  scoreMovementToday: number;
  scoreMovementWeek: number;
  scoreMovementMonth: number;
  scoreFactors: ScoreFactor[];
  schoolFits: SchoolFit[];
  rosterFitCategories: RosterFitCategory[];
  news: NewsIntelligenceItem[];
  graphNodes: GraphNode[];
};

const clamp = (value: number) => Math.max(0, Math.min(100, Math.round(value)));

export function buildPlayerIntelligence(player: Player, prediction?: Prediction, nilReport?: NILReport, visits: Visit[] = [], timeline: TimelineEvent[] = []): PlayerIntelligence {
  const topProbability = prediction?.teamBreakdown[0]?.probability ?? player.commitmentProbability;
  const visitSignal = visits.length > 0 ? 16 : 6;
  const nilSignal = nilReport ? nilReport.confidenceScore : 28;
  const sourceSignal = player.confidenceScore;
  const demandSignal = clamp(player.interestedTeams.length * 18 + topProbability);
  const timelineSignal = clamp(timeline.length * 20 + 35);
  const portalPulseScore = clamp((demandSignal + visitSignal + nilSignal + sourceSignal + timelineSignal) / 5);

  const scoreFactors: ScoreFactor[] = [
    { label: "Demand", value: demandSignal, detail: "Mock blend of interested schools and top probability." },
    { label: "Source Activity", value: sourceSignal, detail: "Mock confidence and source freshness signal." },
    { label: "Official Visits", value: clamp(visitSignal * 4), detail: "Mock visit activity placeholder." },
    { label: "Prediction Movement", value: prediction?.movement === "up" ? 72 : prediction?.movement === "down" ? 38 : 55, detail: "Mock movement direction signal." },
    { label: "Roster Fit", value: clamp(topProbability + 34), detail: "Mock roster fit proxy." },
    { label: "NIL Activity", value: nilSignal, detail: "Mock NIL confidence signal, not a valuation." },
    { label: "Coach Relationships", value: 58, detail: "Placeholder for future graph-derived coach ties." },
    { label: "News Volume", value: timelineSignal, detail: "Mock timeline and source update activity." }
  ];

  const schoolFits = player.interestedTeams.map((team, index) => {
    const probability = prediction?.teamBreakdown.find((item) => item.team === team.team)?.probability ?? team.probability;
    return {
      school: team.team,
      logo: team.team.split(" ").map((part) => part[0]).join("").slice(0, 2),
      headCoach: index === 0 ? "Mock Head Coach" : "Placeholder Coach",
      conference: index === 0 ? "Mock Central" : "Regional Conference",
      interestLevel: team.interestLevel,
      confidenceScore: team.probability,
      rosterFit: clamp(probability + 28),
      depthOpportunity: clamp(92 - index * 14),
      distanceFromHome: index === 0 ? "280 mi" : "640 mi",
      nilMarket: nilReport ? nilReport.rangeLabel : "Unknown market",
      scholarshipOutlook: index === 0 ? "Open path placeholder" : "Needs review",
      relationshipScore: clamp(54 + probability / 2),
      lastActivity: player.lastUpdated
    };
  });

  const rosterFitCategories: RosterFitCategory[] = [
    { label: "Immediate starter opportunity", score: schoolFits[0]?.depthOpportunity ?? 50 },
    { label: "Competition", score: 62 },
    { label: "Scheme fit", score: 74 },
    { label: "Roster need", score: schoolFits[0]?.rosterFit ?? 58 },
    { label: "Returning starters", score: 48 },
    { label: "Coaching stability", score: 66 },
    { label: "Conference fit", score: 69 },
    { label: "Development opportunity", score: 73 },
    { label: "Professional pipeline", score: 57 },
    { label: "Portal success", score: 71 }
  ];

  return {
    hometown: "Cedar Falls, IA",
    highSchool: "Mock Valley High",
    currentSchool: player.previousSchool,
    previousSchools: [player.previousSchool],
    portalEntryDate: "2026-06-20",
    eligibilityRemaining: "2 seasons placeholder",
    height: "Sport-specific placeholder",
    weight: "Sport-specific placeholder",
    transferRating: `${Math.max(70, player.confidenceScore + 22)} placeholder`,
    recruitingRating: `${Math.max(70, player.confidenceScore + 14)} placeholder`,
    portalPulseScore,
    scoreMovementToday: prediction?.movement === "up" ? 3 : 0,
    scoreMovementWeek: 7,
    scoreMovementMonth: 12,
    scoreFactors,
    schoolFits,
    rosterFitCategories,
    news: [
      {
        headline: `${player.name} mock intelligence update`,
        summary: "AI-style summary placeholder built from mock data. This is not a real report and does not summarize a real article.",
        confidenceScore: player.confidenceScore,
        sourceCount: 1,
        timelineImpact: "Adds source review checkpoint",
        predictionImpact: prediction ? `${prediction.movement} movement placeholder` : "No active projection",
        relatedPlayers: [player.name],
        relatedSchools: schoolFits.map((school) => school.school)
      },
      {
        headline: "Roster fit model placeholder refreshed",
        summary: "Future updates will explain depth chart, scheme, scholarship, and coaching relationship effects with source-backed inputs.",
        confidenceScore: 52,
        sourceCount: 0,
        timelineImpact: "No confirmed event",
        predictionImpact: "Signal unchanged",
        relatedPlayers: [player.name],
        relatedSchools: schoolFits.slice(0, 1).map((school) => school.school)
      }
    ],
    graphNodes: [
      { label: player.name, type: "Player", strength: 100 },
      { label: player.previousSchool, type: "Previous School", strength: 72 },
      { label: schoolFits[0]?.school ?? "Unknown School", type: "Interested School", strength: schoolFits[0]?.confidenceScore ?? 40 },
      { label: "Mock Coach", type: "Coach", strength: 58 },
      { label: "Mock Valley High", type: "High School", strength: 65 },
      { label: nilReport?.rangeLabel ?? "NIL market placeholder", type: "NIL", strength: nilReport?.confidenceScore ?? 35 }
    ]
  };
}
