export type PromptCategory =
  | "extraction"
  | "verification"
  | "conflict_resolution"
  | "summarization"
  | "relationship_detection"
  | "roster_analysis"
  | "prediction_explanation"
  | "source_comparison";

export type PromptTemplate = {
  id: string;
  category: PromptCategory;
  title: string;
  template: string;
  outputContract: string;
};

export const promptLibrary: PromptTemplate[] = [
  {
    id: "extract-structured-claims",
    category: "extraction",
    title: "Structured Claim Extraction",
    template: "Extract entities, relationships, dates, and claim candidates from compliant source text. Return JSON only. Do not infer unsupported facts.",
    outputContract: "ExtractionResult"
  },
  {
    id: "verify-claim-candidate",
    category: "verification",
    title: "Claim Candidate Verification",
    template: "Evaluate whether a claim candidate is supported by the provided source metadata and evidence. Explain uncertainty and required review flags.",
    outputContract: "ClaimVerificationPacket"
  },
  {
    id: "resolve-conflict",
    category: "conflict_resolution",
    title: "Conflict Resolution",
    template: "Compare claim candidates and identify contradictions. Return conflict type, severity, sources, and recommended action.",
    outputContract: "DetectedConflict[]"
  },
  {
    id: "summarize-intelligence",
    category: "summarization",
    title: "Original Intelligence Summary",
    template: "Create a concise original summary. Do not reproduce article text. Include confidence, sources, contradictions, and what changed.",
    outputContract: "AISummary"
  },
  {
    id: "detect-relationships",
    category: "relationship_detection",
    title: "Relationship Detection",
    template: "Detect sports relationships among players, schools, coaches, teams, collectives, and source articles. Return graph edges only.",
    outputContract: "ExtractedRelationship[]"
  },
  {
    id: "analyze-roster-fit",
    category: "roster_analysis",
    title: "Roster Fit Analysis",
    template: "Analyze roster fit using only provided roster, depth chart, scholarship, and source-backed claim inputs.",
    outputContract: "Structured roster-fit explanation"
  },
  {
    id: "explain-prediction",
    category: "prediction_explanation",
    title: "Prediction Explanation",
    template: "Explain prediction movement using weighted signals and source-backed inputs. Do not create a prediction algorithm.",
    outputContract: "WeightedPredictionSignal[] explanation"
  },
  {
    id: "compare-sources",
    category: "source_comparison",
    title: "Source Comparison",
    template: "Compare source reliability, independence, recency, and conflicts. Do not elevate rumors to high confidence.",
    outputContract: "ConfidenceExplanation"
  }
];

export const getPromptTemplate = (id: string) => promptLibrary.find((prompt) => prompt.id === id);
