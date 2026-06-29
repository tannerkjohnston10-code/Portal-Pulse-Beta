# AI Insights Engine

## Insight Philosophy

Portal Pulse should not only display data. It should explain what changed, why it matters, who is affected, what trend may be emerging, what users should watch next, and how confident the system is.

The AI Insights Engine is designed around one rule: AI never bypasses claim verification. Insights are derived from verified or reviewable signals, not raw speculation.

## Insight Lifecycle

1. Gather candidate signals from source-backed claims, prediction movement, roster needs, NIL labels, market movement, conference activity, and watchlists.
2. Group related signals by subject, team, conference, claim type, and time window.
3. Detect meaningful patterns.
4. Generate insight candidates.
5. Score importance.
6. Score confidence.
7. Attach evidence and source counts.
8. Create explanations.
9. Route weak or conflicting insights to admin review.
10. Return approved mock insights to UI surfaces.

## Scoring System

The current placeholder ranker considers:

- Recency
- Confidence
- Source count
- Affected player quality
- Affected team quality
- Prediction movement size
- NIL movement size
- Conference impact
- User watchlist relevance
- Conflict severity
- Historical significance

The score is intentionally explainable and bounded from 0 to 100.

## Confidence Rules

Insights must include:

- Confidence level
- Confidence score
- Evidence count
- Source count
- Supporting claim IDs
- Contradicting claim IDs
- Generated timestamp
- Expiration placeholder

Low confidence should not be hidden. It should be routed appropriately and labeled clearly.

## Evidence Requirements

Every future non-mock insight should connect to source claims and evidence. Evidence should identify:

- Claim ID
- Source label
- Confidence score
- Summary of what the evidence supports

Mock records remain fictional and include `isMock: true`.

## Admin Review Rules

Insights route to review when:

- Confidence is low
- Evidence is weak
- Source count is too low
- Sources conflict
- NIL value is involved
- Real-world impact is high
- Duplicate insight risk exists

Review-gated insights should not be presented as approved intelligence.

## Command Center Integration

The Command Center includes an AI Insights widget that shows:

- Top insight
- Ranked insight list
- Insight type badge
- Confidence badge
- Importance score
- Evidence count
- Why this matters
- What to watch next

The full `/insights` page provides the broader insight feed, filter placeholders, category chips, confidence and subject filters, search placeholder, and review-gated mock candidates.

## Future Real AI Integration

Future phases can connect the engine to:

- Claim service
- Source service
- Prediction history
- NIL review queue
- Roster fit engine
- Team analytics
- Conference trend analytics
- Watchlist personalization
- Admin review decisions
- Historical outcome tracking

Any LLM-generated explanation must remain original, source-aware, and grounded in structured claim records. It must not fabricate facts, stats, NIL values, commitments, visits, or citations.
