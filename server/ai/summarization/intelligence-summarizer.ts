import type { AISummary, ClaimVerificationPacket } from "@/server/ai/types";
import { confidenceEngine } from "@/server/ai/confidence/confidence-engine";

export const intelligenceSummarizer = {
  summarizeVerification(packet: ClaimVerificationPacket): AISummary {
    const confidence = confidenceEngine.calculate(packet);
    return {
      keyUpdate: "Mock AI summary of a pending claim candidate. Not a confirmed fact.",
      affectedPlayer: packet.candidate.subjectGuess,
      affectedTeams: [],
      timeline: [packet.candidate.createdAt],
      confidence,
      sources: [packet.candidate.sourceUrl],
      explanation: "Summary is original and concise; it does not reproduce article text.",
      contradictions: packet.conflictCount > 0 ? ["Potential conflicting evidence exists."] : [],
      isMock: true
    };
  }
};
