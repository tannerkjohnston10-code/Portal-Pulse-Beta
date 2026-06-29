import type { SpatialAnalyticsAnswer } from "@/platform/maps/core/map-types";

export const spatialAnalyticsService = {
  getAnswers(): SpatialAnalyticsAnswer[] {
    return [
      { id: "mock-spatial-answer-entries", question: "Which states produced the most portal entries?", answer: "Mock State Territory leads the fictional portal-entry view.", confidence: "medium", sourceCount: 3, evidenceCount: 5, isMock: true },
      { id: "mock-spatial-answer-conferences", question: "Which conferences gained the most talent?", answer: "Mock Conference shows the strongest fictional talent inflow.", confidence: "medium", sourceCount: 2, evidenceCount: 4, isMock: true },
      { id: "mock-spatial-answer-national", question: "Which schools recruit nationally?", answer: "Mock State displays a fictional multi-region footprint.", confidence: "medium", sourceCount: 2, evidenceCount: 3, isMock: true },
      { id: "mock-spatial-answer-lost", question: "Which regions lost the most talent?", answer: "Mock Midwest has the highest fictional outflow pressure.", confidence: "low", sourceCount: 1, evidenceCount: 2, isMock: true },
      { id: "mock-spatial-answer-expanded", question: "Which schools expanded their recruiting footprint?", answer: "Mock State expanded into a fictional northern territory.", confidence: "medium", sourceCount: 2, evidenceCount: 3, isMock: true },
      { id: "mock-spatial-answer-retention", question: "Which states have the strongest talent retention?", answer: "Mock State Territory has a fictional retention edge in the current placeholder data.", confidence: "medium", sourceCount: 2, evidenceCount: 3, isMock: true }
    ];
  }
};

