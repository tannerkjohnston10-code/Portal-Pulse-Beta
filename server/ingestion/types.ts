import type { ClaimType, SourceType } from "@/types/portal";

export type RegisteredSourceType =
  | SourceType
  | "rss_feed"
  | "podcast";

export type CrawlFrequency = "hourly" | "daily" | "weekly" | "manual";

export type ComplianceStatus = "allowed" | "rejected" | "requires_review";

export type ExtractionMethod = "mock" | "parser" | "ai_future";

export type SourceRegistryEntry = {
  id: string;
  name: string;
  baseUrl: string;
  sourceType: RegisteredSourceType;
  sportCoverage: string[];
  schoolCoverage: string[];
  conferenceCoverage: string[];
  crawlFrequency: CrawlFrequency;
  reliabilityScore: number;
  termsNotes: string;
  robotsTxtStatus: "allowed" | "disallowed" | "unknown";
  paywallStatus: "not_paywalled" | "paywalled_with_license" | "paywalled_without_license" | "unknown";
  loginRequired: boolean;
  privateSource: boolean;
  rateLimitPerHour: number;
  contentUsageRules: string;
  lastChecked: string;
  enabled: boolean;
  isMock: true;
};

export type MockSourceItem = {
  id: string;
  registrySourceId: string;
  url: string;
  title: string;
  author?: string;
  publisher: string;
  publishedAt: string;
  retrievedAt: string;
  body: string;
  isMock: true;
};

export type ComplianceDecision = {
  sourceId: string;
  status: ComplianceStatus;
  reasons: string[];
  checkedAt: string;
  isMock: true;
};

export type NormalizedContent = {
  sourceItemId: string;
  title: string;
  author?: string;
  publisher: string;
  publishedAt?: string;
  retrievedAt: string;
  canonicalUrl: string;
  summary: string;
  rawTextPlaceholder: string;
  detectedPlayerNames: string[];
  detectedTeams: string[];
  detectedClaimCandidates: ClaimCandidate[];
  fingerprint: string;
  contentHash: string;
  isMock: true;
};

export type ClaimCandidate = {
  id: string;
  claimType: ClaimType | "prediction_signal" | "coaching_connection";
  subjectGuess: string;
  extractedValue: string;
  sourceId: string;
  sourceUrl: string;
  confidenceScore: number;
  status: "pending_review";
  extractionMethod: ExtractionMethod;
  createdAt: string;
  isMock: true;
};

export type DuplicateDetectionResult = {
  contentId: string;
  isDuplicate: boolean;
  reasons: string[];
  matchedContentId?: string;
  confidenceScore: number;
  isMock: true;
};

export type IngestionLogEntry = {
  id: string;
  level: "info" | "warn" | "error";
  message: string;
  createdAt: string;
  metadata?: Record<string, string | number | boolean>;
  isMock: true;
};

export type IngestionRunResult = {
  jobId: string;
  startedAt: string;
  finishedAt: string;
  sourcesChecked: number;
  sourcesRejected: number;
  contentParsed: number;
  duplicatesDetected: number;
  claimCandidatesCreated: number;
  routedToReview: number;
  sourceRecordsCreated: number;
  complianceDecisions: ComplianceDecision[];
  claimCandidates: ClaimCandidate[];
  duplicateDetections: DuplicateDetectionResult[];
  logs: IngestionLogEntry[];
  isMock: true;
};
