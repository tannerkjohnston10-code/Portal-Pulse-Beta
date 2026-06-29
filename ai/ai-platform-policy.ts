export const aiPlatformPolicy = {
  canBypassClaimVerification: false,
  canInventFacts: false,
  canInventSources: false,
  canInventNILValues: false,
  requiresConfidenceScore: true,
  requiresSourceEvidence: true,
  requiresTimestamp: true,
  routesLowConfidenceToReview: true,
  summary:
    "Portal Pulse AI outputs must be grounded in structured claims, source evidence, confidence scores, contradictions, and timestamps before powering product surfaces."
} as const;
