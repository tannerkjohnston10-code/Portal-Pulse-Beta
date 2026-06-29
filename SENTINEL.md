# Sentinel Intelligence Intake Coordinator

## Mission

Sentinel is the Intelligence Intake Coordinator for Portal Pulse. Sentinel is not a news scraper and does not publish intelligence. It monitors approved mock public-source items, organizes intake, detects duplicates and conflicts, scores priority, creates claim candidates, and routes proposed intelligence toward the Intelligence Core or admin review.

## Architecture

Sentinel lives under `platform/athena/agents/sentinel/`:

- `intake/source-monitor.ts` detects mock approved public-source items.
- `compliance/compliance-validator.ts` checks mock compliance and review requirements.
- `deduplication/duplicate-engine.ts` detects duplicate-prone items.
- `conflicts/conflict-engine.ts` identifies contradictory mock signals.
- `priority/priority-engine.ts` calculates Priority Score.
- `intake/claim-router.ts` creates claim candidates and routes them.
- `intake/intake-pipeline.ts` composes the full intake lifecycle.
- `workflows/workflow-manager.ts` exposes a reusable workflow.
- `sentinel-service.ts` provides the platform-facing facade.
- `types/sentinel-types.ts` defines all contracts.

## Intake Lifecycle

1. Source detected.
2. Compliance validation.
3. Normalization.
4. Duplicate detection.
5. Conflict scan.
6. Priority scoring.
7. Claim candidate creation.
8. Evidence attachment.
9. Intelligence Core submission.
10. Admin review if required.

Each stage is independently testable and returns structured mock outputs with `isMock: true`.

## Priority Scoring

Sentinel's placeholder Priority Score considers source reliability, affected players, affected teams, affected conferences, conflict status, and NIL sensitivity.

Priority labels:

- Critical
- High
- Medium
- Low
- Background

## Conflict Handling

Sentinel prepares conflict outputs for different schools, different visit dates, different NIL estimates, conflicting commitment reports, and contradictory coach statements. Conflicts include severity, evidence IDs, and recommended review action.

## Duplicate Handling

Sentinel prepares duplicate outputs for duplicate articles, social posts, claims, player identities, visits, commitment reports, NIL mentions, and prediction events. Duplicate-prone items should merge or hold rather than create duplicate intelligence.

## Compliance Philosophy

Sentinel only handles approved mock public-source metadata in this phase. Future monitoring must respect paywalls, robots.txt, source terms, private data boundaries, copyright, and platform policies. Public social signals are review-sensitive and cannot confirm facts alone.

## Relationship To Intelligence Core

Sentinel creates proposed claim candidates and routes them. It never confirms facts and never publishes directly. The Intelligence Core verifies evidence, applies confidence scoring, checks conflicts, and decides what can surface.

## Future Monitoring Roadmap

Future Sentinel phases can add licensed RSS monitoring, official athletics release watchers, source registry integration, queue persistence, audit logs, admin work queues, webhook triggers, rate limits, and real-time intake status. Real monitoring should remain compliant and source-backed.

