# Athena Chief Intelligence Officer

## Purpose

Athena is the Chief Intelligence Officer of Portal Pulse. Athena is not a chatbot and not an autonomous publisher. Her job is to coordinate specialized analyst agents, assemble evidence-aware briefings, explain why intelligence matters, and route uncertain items through the Intelligence Core and future admin review.

## Responsibilities

- Summarize what matters.
- Coordinate specialized agents.
- Generate daily briefings.
- Explain why intelligence matters.
- Prepare future question-answering from verified intelligence.
- Cite evidence placeholders in mock mode and real evidence in future phases.
- Distinguish fact, claim, prediction, and analysis.
- Route uncertain or sensitive findings to review.
- Prepare personalized briefings.
- Surface next-best actions.

## Safety Rules

Athena must:

- Never invent claims.
- Never present predictions as facts.
- Never confirm NIL unless sourced.
- Label mock data clearly.
- Cite evidence placeholders in mock mode.
- Defer surfacing decisions to the Intelligence Core.
- Flag conflicts.
- Route low-confidence items to review.

## Briefing Architecture

The briefing system lives in `platform/athena/briefings/`.

- `briefing-types.ts` defines briefing sections and item contracts.
- `daily-briefing-generator.ts` creates a mock daily briefing with confidence, evidence count, source count, Core decision references, and `isMock: true`.
- `briefing-service.ts` exposes the current daily briefing surface.

Briefing sections include overnight updates, watched teams, watched players, prediction changes, NIL movement, team momentum, conference trends, and what to watch next.

## Intelligence Core Approval Process

Athena coordinates but does not decide what is true. The lifecycle is:

1. Agents observe signals.
2. Agents propose findings.
3. Athena coordinates workflow and safety checks.
4. Findings are submitted to the Intelligence Core.
5. The Intelligence Core verifies evidence, scores confidence, checks conflicts, and creates decisions.
6. Athena can assemble briefings from Core-gated outputs.
7. Low-confidence, conflicting, NIL-sensitive, or high-impact items route to review.

## Current Service Architecture

- `platform/athena/athena-core.ts` coordinates CIO status, briefings, latest verified mock intelligence, and placeholder answers.
- `platform/athena/athena-service.ts` re-exports the service surface.
- `platform/athena/orchestration/athena-orchestrator.ts` coordinates the mock daily cycle.
- `platform/athena/evaluation/athena-evaluator.ts` evaluates findings and briefings.
- `platform/athena/safety/athena-safety-rules.ts` encodes non-negotiable Athena safety rules.
- `platform/sdk/athena-sdk.ts` exposes Athena through `PortalPulsePlatform.athena`.

## UI Surfaces

- `/athena` now shows Athena status, daily briefing, verified mock intelligence, agent network overview, suggested questions, Ask Athena placeholder, evidence-first reminders, and Intelligence Core approval status.
- Command Center includes an Athena widget with briefing headline, top briefing bullets, confidence average, source count, and a link to `/athena`.

## Future Conversational AI Roadmap

Future Athena chat should:

- Retrieve approved Intelligence Core outputs.
- Cite claims and sources.
- Show confidence and uncertainty.
- Separate facts, claims, predictions, and analysis.
- Refuse to answer unsupported factual claims.
- Route low-confidence or conflicting items to review.

## Future Personalization Roadmap

Future personalization should use favorite teams, watched players, conferences, sports, reading behavior, dashboard layout, notification preferences, and search history. Personalization must not bypass evidence, source, or confidence rules.

