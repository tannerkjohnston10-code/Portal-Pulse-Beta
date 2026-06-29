# Portal Pulse Data Trust

Trust is the product.

Portal Pulse must organize public reporting into a source-backed intelligence system. The platform should never present speculation, mock data, model output, or rumor as confirmed fact.

## Source-Backed Claim Philosophy

A claim is a structured assertion about a player, team, visit, NIL report, roster status, ranking, or prediction. A claim is not automatically a fact.

Every future claim should include:

- Source URL
- Source type
- Confidence level
- Confidence score
- First seen timestamp
- Last seen timestamp
- Review status
- Conflict state when applicable

## Confidence Levels

- `high`: strong source quality and corroboration
- `medium`: credible but not fully confirmed
- `low`: weak, early, or limited support
- `conflicting`: credible disagreement exists
- `unknown`: insufficient information

## NIL Reporting Rules

NIL values must be labeled as confirmed, reported, estimated, rumored, or unknown.

Do not present NIL numbers as fact unless the source supports that exact claim. Estimated or rumored values should use cautious labels and confidence scores. Private financial details should not be published without a strong public source and clear user value.

## Prediction Rules

Predictions are projections, not facts.

Every prediction should include:

- Prediction type
- Probability
- Confidence
- Explanation
- Source-backed inputs
- Last updated timestamp
- Change history when materially updated

## Rumor Handling

Rumors should be avoided unless the product has a clear reason to show them. When shown, they must be labeled as rumored, low-confidence or conflicting where appropriate, and connected to source metadata.

## Conflict Handling

Conflicting reports should be flagged rather than hidden. The product should show that disagreement exists and route the claim to admin review when confidence is low or source quality is mixed.

## Admin Review Principles

Admin workflows should prioritize:

- Low-confidence claims
- Conflicting reports
- NIL claims
- Duplicate player records
- Failed source checks
- Stale sources

Admin review should create audit logs once authentication exists.
