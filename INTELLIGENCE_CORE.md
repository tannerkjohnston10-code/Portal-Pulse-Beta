# Portal Pulse Intelligence Core

## Intelligence Philosophy

Portal Pulse separates facts, claims, evidence, intelligence, predictions, and recommendations. The Intelligence Core does not create facts. It organizes verified or reviewable claims and signals into explainable intelligence that can power every product surface.

The operating model:

1. Fact
2. Claim
3. Evidence
4. Intelligence
5. Prediction
6. Recommendation

No page, widget, API route, notification, AI assistant, or dashboard should independently decide significance, confidence, or priority. Those responsibilities belong to the Intelligence Core.

Athena Intelligence Network agents are proposal generators only. No AI agent may publish a conclusion directly. Agents may propose findings; the Intelligence Core verifies evidence, applies confidence scoring, checks conflicts, and determines what can be surfaced.

## Signal Pipeline

The pipeline is modular:

1. Signal collection
2. Signal normalization
3. Evidence grouping
4. Confidence calculation
5. Conflict detection
6. Importance scoring
7. Reasoning
8. Explanation generation
9. Recommendation generation
10. Delivery

Current signal types include portal entry, visits, offers, commitments, prediction changes, roster changes, coach changes, NIL mentions, source volume, relationship activity, timeline activity, watchlist activity, conference trends, and ranking movement.

## Evidence Engine

No intelligence should exist without evidence. Evidence models support:

- Supporting claims
- Supporting sources
- Historical consistency
- Contradicting claims
- Contradicting sources
- Evidence strength
- Recency

Future implementations should connect evidence directly to the claim/source architecture.

## Reasoning Engine

The reasoning engine returns structured objects, not unsupported prose. It answers:

- Why is this important?
- Why now?
- Who is affected?
- What evidence supports it?
- What evidence weakens it?
- How confident are we?
- What could happen next?

## Importance Scoring

Importance scoring considers placeholder factors such as affected entities, source count, signal importance, player impact, team impact, conference impact, roster impact, prediction movement, source reliability, historical rarity, watchlist relevance, media attention, and timeline significance.

The score powers Command Center priority, future notifications, daily briefings, and API prioritization.

## Explainability

Every intelligence output includes:

- What changed
- Why it matters
- Supporting evidence
- Confidence
- Contradicting evidence
- Timeline context
- Related entities
- Recommended next actions

Future consumers should never have to generate their own explanations.

## Recommendation Architecture

The recommendation engine prepares for:

- Suggested players to watch
- Suggested teams to monitor
- Suggested comparisons
- Suggested articles or summaries
- Suggested searches
- Suggested roster battles
- Suggested predictions

Current recommendations are mock placeholders and are not personalized AI.

## Watchlist And Personalization

Watchlist intelligence is designed to summarize meaningful activity across watched entities, not merely send raw alerts. Personalization placeholders include favorite teams, sports, conferences, players, reading behavior, layout, notification preferences, and search history.

No user profiling is implemented in this phase.

## Future Machine Learning Opportunities

Future ML can improve:

- Signal detection
- Entity resolution
- Evidence weighting
- Confidence calibration
- Conflict severity
- Importance scoring
- Personal recommendations
- Historical rarity
- Prediction explanation
- Notification timing

ML output must remain explainable and source-aware.

## Platform SDK Integration

The Intelligence Core lives under `platform/intelligence` and is exposed through `PortalPulsePlatform.intelligence`. Command Center also exposes `PortalPulsePlatform.commandCenter.intelligenceSnapshot()` so future dashboard modules can consume shared reasoning instead of creating local significance logic.

Future platform consumers should call the Intelligence Core before presenting insights, recommendations, priority scores, or notification-worthy changes.

Athena integrations should call the Core before any agent-generated finding appears in UI, API responses, mobile notifications, or enterprise dashboards.

The Athena Chief Intelligence Officer foundation uses the Core as the approval gate for mock daily briefings, verified mock intelligence, and future conversational answers.
