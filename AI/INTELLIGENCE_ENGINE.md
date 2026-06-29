# Portal Pulse Intelligence Engine

Portal Pulse is an AI-powered sports intelligence platform. It does not ask only, "What happened?" It asks, "What is probably true, why do we believe it, and what evidence might contradict it?"

AI must never directly update production facts. AI creates structured, explainable, review-gated intelligence outputs.

## Architecture

The Intelligence Engine is organized into modular layers:

- `server/ai/extraction` converts compliant source text into structured entities, relationships, and claim candidates.
- `server/ai/entity-resolution` matches extracted names to canonical players, schools, coaches, conferences, brands, and organizations.
- `server/ai/verification` turns claim candidates into verification packets.
- `server/ai/confidence` calculates explainable confidence.
- `server/ai/conflict` detects contradictions.
- `server/ai/summarization` creates original source-linked summaries.
- `server/ai/timeline` assembles claim-supported timelines.
- `platform/knowledge-graph` exposes graph-style relationship queries, scoring, evidence, inference, and visualization-ready graph contracts.
- `server/ai/prompts` stores reusable prompt templates.
- `server/ai/models` defines future model inputs such as prediction signals.
- `server/ai/jobs` orchestrates intelligence workflows.

## Claim Lifecycle

The lifecycle is:

1. Article or public source metadata enters ingestion.
2. Parser produces normalized content.
3. AI extraction produces structured claim candidates.
4. Entity resolution identifies likely canonical subjects.
5. Verification evaluates support and uncertainty.
6. Confidence engine scores the candidate.
7. Conflict detector checks contradictions.
8. Admin review receives risky items.
9. Only approved claims can become database records.

AI output is not a fact until it passes verification and review.

## Knowledge Graph

Portal Pulse keeps PostgreSQL as the primary database while exposing a graph abstraction for relationship intelligence.

Supported relationship categories include:

- Player to school
- Player to coach
- Player to teammate
- Player to high school
- Player to recruiting class
- Player to visit
- Player to NIL collective
- Player to source article
- Coach to school
- Coach to player
- Coach to recruiting class
- Team to conference
- Team to position need
- Team to roster
- School to conference

Future graph queries should answer:

- Which coaches recruit the same players?
- Which schools compete most often?
- Which players followed coaches?
- Who has the strongest recruiting relationships?
- Which conferences lose the most portal talent?

## Conflict Detection

Conflicts should be detected automatically and routed to review.

Examples:

- Two schools reported for the same official visit date.
- One source says committed while another says undecided.
- Different NIL values or value ranges.
- Different destination schools.
- Identity ambiguity between similarly named players.

Conflicts include type, severity, sources involved, claims involved, recommended action, confidence reduction, and review flag.

## Confidence Scoring

Confidence is explainable and factor-based.

Factors include:

- Source reliability
- Independent source count
- Official confirmation
- Historical source accuracy
- Recency
- Consistency
- Duplicate reports
- Player statement
- Coach statement
- Official release
- Future machine learning score

A single rumor must never become high confidence. Confidence should remain capped without official confirmation or independent corroboration.

## Entity Resolution

Entity resolution determines whether references such as "John Smith," "J. Smith," "QB John Smith," and "John A. Smith" refer to the same player.

Future matching signals include:

- normalized name
- school
- sport
- position
- class year
- hometown
- source context
- aliases
- high school
- coach relationships

Low-confidence identity matches must route to admin review.

## Timeline Intelligence

Timeline intelligence assembles player and team stories from source-backed claims:

1. Entered portal
2. School interest
3. Official visit
4. Offer
5. Prediction changed
6. Commitment
7. Enrollment
8. Roster projection update

Every event should cite supporting claims and confidence.

## AI Summaries

Summaries must be original and concise. They should include:

- key update
- affected player
- affected teams
- timeline
- confidence
- sources
- explanation
- contradictions

Summaries must not reproduce copyrighted articles.

## Explainability

Every AI output should eventually answer:

- What do we believe?
- Why?
- How confident are we?
- Which sources support it?
- What evidence contradicts it?
- What changed?

If AI cannot explain why it believes something, it should not elevate confidence.

## Admin Review

AI should escalate:

- conflicts
- low confidence
- major NIL reports
- major commitments
- duplicate identities
- unexpected relationships
- unverified claims

Admin review is the gate between AI output and trusted database records.

## Future ML Roadmap

Near term:

- structured extraction evaluation
- entity resolution scoring
- source trust calibration
- conflict detection precision checks

Mid term:

- prediction signal calibration
- confidence model benchmarking
- historical source accuracy tracking
- relationship strength scoring

Long term:

- graph embeddings
- trend forecasting
- personalized alert ranking
- premium dashboard recommendations
- explainable prediction models
