import type { ComplianceDecision, SourceRegistryEntry } from "@/server/ingestion/types";

const disallowedTypes = new Set(["unknown"]);

export const complianceChecker = {
  checkSource(source: SourceRegistryEntry): ComplianceDecision {
    const reasons: string[] = [];

    if (!source.enabled) reasons.push("Source is disabled.");
    if (source.privateSource) reasons.push("Source is marked private.");
    if (source.loginRequired) reasons.push("Source requires login.");
    if (source.paywallStatus === "paywalled_without_license") reasons.push("Source is paywalled without a license.");
    if (source.paywallStatus === "unknown") reasons.push("Paywall status is unknown and requires review.");
    if (source.robotsTxtStatus === "disallowed") reasons.push("robots.txt status is disallowed.");
    if (source.robotsTxtStatus === "unknown") reasons.push("robots.txt status is unknown and requires review.");
    if (disallowedTypes.has(source.sourceType)) reasons.push("Source type is unknown.");
    if (!source.termsNotes) reasons.push("Terms and compliance notes are missing.");

    const hardReject = reasons.some((reason) =>
      ["private", "login", "paywalled without", "disallowed"].some((flag) => reason.toLowerCase().includes(flag))
    );

    return {
      sourceId: source.id,
      status: hardReject ? "rejected" : reasons.length > 0 ? "requires_review" : "allowed",
      reasons,
      checkedAt: new Date().toISOString(),
      isMock: true
    };
  }
};
