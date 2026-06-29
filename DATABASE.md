# Portal Pulse Database

Portal Pulse's database is designed for a source-backed college athletics intelligence platform. The first product focus is the NCAA Transfer Portal, but the model is intended to expand across recruiting, NIL, rosters, depth charts, coaching, rankings, predictions, alerts, historical snapshots, and premium dashboards.

## Database Philosophy

The database should preserve intelligence history instead of overwriting it.

Core principles:

- A claim is not the same as a fact.
- Every claim should be source-backed.
- Player movement must be stored historically.
- Predictions must preserve history.
- NIL information must be clearly labeled.
- Confidence and reliability scores should be queryable.
- Admin review should be auditable.
- Future graph-style features should be possible without a rewrite.

## Core Models

Identity and access:

- `User`
- `Watchlist`
- `Alert`
- `Notification`
- `AuditLog`

Sports structure:

- `Sport`
- `Conference`
- `School`
- `Team`
- `Position`

Players and rosters:

- `Player`
- `PlayerSchoolHistory`
- `PlayerTeammate`
- `Roster`
- `RosterSpot`
- `DepthChart`
- `DepthChartPosition`
- `ScholarshipCount`
- `TeamNeed`

Transfer portal:

- `TransferPortalEntry`
- `PlayerMovement`
- `TeamInterest`
- `Visit`

NIL:

- `NILCollective`
- `NILDeal`
- `NILValuation`

Predictions and rankings:

- `Prediction`
- `PredictionHistory`
- `TeamRanking`
- `PlayerRanking`

Sources and claims:

- `Source`
- `SourceArticle`
- `SourceMention`
- `Claim`
- `ClaimSource`
- `ClaimConflict`
- `AdminReviewItem`

Recruiting and coaching:

- `HighSchool`
- `RecruitingClass`
- `RecruitingClassPlayer`
- `RecruitingRelationship`
- `Coach`
- `CoachTenure`

History:

- `TimelineEvent`
- `HistoricalSnapshot`

## Claim System

`Claim` is the core trust primitive. A claim stores the assertion, not the final truth.

Claims include:

- `claimType`
- `subjectType`
- `subjectId`
- `value`
- `status`
- `confidenceLevel`
- `confidenceScore`
- `firstSeenAt`
- `lastSeenAt`
- `reviewedStatus`
- `reviewNotes`

`ClaimSource` links claims to `Source` and optionally `SourceArticle`. `ClaimConflict` records disagreement between claims rather than hiding it.

Supported claim types include portal entry, commitment, team interest, visit, NIL report, offer, roster change, prediction update, ranking update, coach connection, and recruiting relationship.

## Source System

`Source` stores source-level reliability and metadata:

- source name and URL
- source type
- author and publisher
- published and retrieved dates
- reliability score
- paywall status
- content summary
- citation text
- extraction status
- duplicate status

`SourceArticle` stores article/document-level extraction data. `SourceMention` connects sources to players, teams, and coaches for future knowledge graph and AI extraction workflows.

## Prediction History

Predictions are never overwritten as if history did not exist.

`Prediction` stores the current prediction record, including:

- prediction type
- player/team subject
- predicted team
- probability
- confidence score
- explanation
- model version
- source influence
- superseded date

`PredictionHistory` snapshots every meaningful probability or explanation change.

## NIL Rules

NIL data is sensitive and must be labeled carefully.

`NILDeal` and `NILValuation` support:

- confirmed, reported, estimated, rumored, or unknown status
- exact amount when appropriate
- amount ranges when exact figures are not supported
- collective and brand context
- deal type
- source connection
- confidence score
- privacy disclaimer flag

The seed data is fictional and should never be interpreted as real NIL reporting.

## Timeline Model

`TimelineEvent` provides a generic timeline for players and teams.

Supported event types include:

- portal entry
- visit
- offer
- team interest
- NIL report
- commitment
- enrollment
- withdrawal
- ranking movement
- prediction change
- source update

Timeline events can link back to claims so users can inspect the evidence behind an event.

## Knowledge Graph Foundation

The database supports graph-style features through relationship models:

- players to schools through `PlayerSchoolHistory`
- players to teammates through `PlayerTeammate`
- players to coaches through `RecruitingRelationship`
- coaches to schools and teams through `CoachTenure`
- players to high schools through `HighSchool`
- players to recruiting classes through `RecruitingClassPlayer`
- players to NIL collectives through `NILDeal`
- players to visits through `Visit`
- players and teams to source articles through `SourceMention`
- teams to conferences through `Team`
- teams to roster needs through `TeamNeed`

## Scaling Notes

The schema includes indexes for common filtering and intelligence workflows:

- player names
- team names
- sport
- position
- conference
- portal status
- claim type
- confidence score
- source type
- created and updated dates
- prediction probability
- ranking score

Future migrations should add full-text search or external search indexing for large source/article volumes.

## Future Migrations

Recommended near-term migrations:

1. Add production seed data for static sports, positions, conferences, and schools.
2. Add full-text search indexes for players, teams, and source articles.
3. Add source ingestion queue tables.
4. Add user account and premium entitlement tables.
5. Add snapshot partitioning or archival strategy for high-volume historical data.
6. Add API access tokens and rate-limit tracking.

## Commands

Generate Prisma client:

```bash
npm run prisma:generate
```

Create a migration:

```bash
npm run prisma:migrate
```

Seed fictional mock data:

```bash
npm run prisma:seed
```
