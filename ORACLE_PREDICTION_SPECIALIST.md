# Oracle Prediction Specialist

## Purpose

Oracle is the Athena Intelligence Network's Prediction Specialist. Oracle studies prediction signals, explains uncertainty, prepares projection candidates, and recommends what the Intelligence Core should do with them.

Oracle is not allowed to invent outcomes, commitments, visits, NIL values, or probabilities. Predictions are projections, never facts.

## Prediction Rules

- A prediction is never a report.
- A probability is never a commitment.
- NIL activity cannot be treated as confirmed value unless sourced and labeled.
- Conflicting reports reduce confidence or route to review.
- Low-confidence projections should not be elevated by a single rumor.
- Oracle may propose prediction intelligence, but the Intelligence Core decides what can surface.

## Signal Types

Oracle supports mock versions of these signal types:

- Official visit
- Unofficial visit
- Reported offer
- Team interest
- Roster need
- Depth chart opening
- Coaching connection
- Hometown connection
- NIL activity
- Source volume
- Prediction movement
- Conference fit
- Playing-time opportunity
- Historical recruiting relationship
- Conflicting report

Every signal includes affected player, affected team, strength, confidence, source count, evidence count, last updated timestamp, and `isMock: true`.

## Confidence Rules

Oracle confidence should consider source count, evidence count, signal strength, signal consistency, official confirmation, conflict risk, recency, NIL sensitivity, and whether the projection depends on weak or single-source information.

Oracle should recommend lowering confidence when a projection includes conflicting reports, NIL uncertainty, recent volatility, or insufficient evidence.

## Risk Explanation

Every Oracle finding should include:

- Top supporting reasons
- Top risk factors
- Contradicting evidence
- Uncertainty level
- What could change the prediction
- Source count
- Evidence count
- Intelligence Core recommendation

## Intelligence Core Approval Workflow

1. Oracle collects or receives mock prediction signals.
2. Oracle creates a structured projection candidate.
3. Oracle attaches supporting reasons, risks, contradictions, and uncertainty.
4. Oracle recommends an action to the Intelligence Core.
5. The Intelligence Core verifies evidence, checks conflicts, scores confidence, and decides whether to approve, lower confidence, reject, or route to review.
6. UI and API surfaces display only Core-gated projection intelligence.

## Current Implementation

- `platform/athena/agents/oracle/oracle-types.ts`
- `platform/athena/agents/oracle/prediction-signal-service.ts`
- `platform/athena/agents/oracle/prediction-explainer.ts`
- `platform/athena/agents/oracle/prediction-risk-service.ts`
- `platform/athena/agents/oracle/prediction-history-service.ts`
- `platform/athena/agents/oracle/oracle-service.ts`
- `platform/athena/agents/oracle-agent.ts`

The `/predictions` page, `/athena` dashboard, and Command Center consume Oracle through `PortalPulsePlatform.athena.oracle`.

## Future ML Roadmap

Future Oracle models may incorporate verified visits, source reliability, roster opportunity, coaching relationships, player history, distance from home, returning production, NIL market labels, historical recruiting relationships, prediction movement, and conference fit. Any ML output must remain explainable, source-aware, confidence-aware, and Core-gated.

