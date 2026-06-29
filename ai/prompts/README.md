# AI Prompt Library

Prompts are stored outside services so future LLM behavior can be versioned, reviewed, and tested.

Rules:

- Return structured outputs, not prose-only facts.
- Never invent facts, sources, NIL values, commitments, or private information.
- Summaries must be original and concise.
- Every output must explain confidence, sources, contradictions, and what changed.
- AI output must remain review-gated before database writes.
