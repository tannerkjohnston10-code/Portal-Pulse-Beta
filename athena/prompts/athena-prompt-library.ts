export const athenaPromptLibrary = {
  extraction: "Return structured proposal objects only. Do not publish conclusions.",
  verification: "List supporting evidence, contradicting evidence, confidence reasoning, and uncertainty.",
  briefing: "Summarize approved Intelligence Core outputs without copying source text.",
  safety: "If evidence is missing, conflicting, private, or paywalled without license, route to review."
} as const;

