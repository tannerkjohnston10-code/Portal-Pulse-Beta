import type { GraphRelationship, GraphRelationshipStrengthLabel } from "@/platform/knowledge-graph/core/graph-types";

export const graphScoringService = {
  scoreRelationship(relationship: GraphRelationship) {
    const contradictionPenalty = relationship.status === "disputed" ? 25 : relationship.status === "needs_review" ? 10 : 0;
    const inferencePenalty = relationship.isInferred ? 8 : 0;
    const score = Math.max(0, Math.round((relationship.strengthScore + relationship.confidenceScore) / 2 - contradictionPenalty - inferencePenalty));
    return {
      relationshipId: relationship.id,
      score,
      label: this.labelStrength(score, relationship),
      factors: ["supporting sources", "recency", "directness", "repeated mentions", "official confirmation placeholder", "contradiction count", "relationship type"],
      isMock: true
    };
  },

  labelStrength(score: number, relationship: GraphRelationship): GraphRelationshipStrengthLabel {
    if (relationship.status === "disputed") return "Conflicting";
    if (relationship.isInferred && score < 55) return "Inferred";
    if (score >= 75) return "Strong";
    if (score >= 55) return "Moderate";
    if (score > 0) return "Weak";
    return "Unknown";
  }
};

