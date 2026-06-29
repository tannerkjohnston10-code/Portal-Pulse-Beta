# Real-Time Intelligence Pipeline

The Real-Time Intelligence Pipeline turns Portal Pulse into a living intelligence platform. It prepares the system to continuously receive compliant public updates, normalize them, create reviewable claim candidates, enrich evidence, trigger Intelligence Core review, propose Knowledge Graph updates, notify AI agents, refresh dashboards, and queue alerts.

This architecture does not implement unsafe scraping, paywall bypassing, login bypassing, CAPTCHA bypassing, robots.txt violations, or article copying. Current data is mock-only and labeled with `isMock: true`.

## Mission

Portal Pulse should eventually detect public updates and move them through a trusted pipeline:

1. Source detected
2. Compliance checked
3. Content normalized
4. Duplicate checked
5. Entity matched
6. Claim candidate created
7. Evidence attached
8. Confidence estimated
9. Conflict scan completed
10. Intelligence Core review triggered
11. Knowledge Graph update proposed
12. AI agents notified
13. Dashboards refreshed
14. Alerts queued

No pipeline stage may publish a claim as fact. The Intelligence Core remains the approval authority.

## Compliant Source Philosophy

The intake layer supports only compliant or reviewable source classes:

- Official school releases
- Official athletic department pages
- Public RSS feeds
- Verified reporter public posts placeholder
- Public player statements placeholder
- Public coach statements placeholder
- Podcast transcript placeholders
- Approved partner feeds placeholder
- Manual admin submissions

Each source tracks source name, type, URL, compliance status, reliability score, last checked timestamp, polling interval placeholder, and enabled flag.

Sources marked private, paywalled without license, login required, robots disallowed, or compliance-unknown should be blocked or routed to review.

## Claim Candidate Stream

Real-time claim candidates are not facts. They are reviewable intelligence objects.

Supported candidate types:

- Portal entry
- Commitment
- Withdrawal
- Visit
- Team interest
- NIL mention
- Coaching change
- Roster update
- Ranking movement
- Transfer market movement
- Report publication

Each candidate includes affected sport, athlete, program, conference, evidence IDs, source IDs, confidence, status, timestamp, and mock labeling.

## Event Bus Integration

The pipeline extends the existing Event System with:

- `SourceItemDetected`
- `SourceItemNormalized`
- `ClaimCandidateCreated`
- `ClaimCandidateVerified`
- `ConflictDetected`
- `KnowledgeGraphUpdateProposed`
- `IntelligenceApproved`
- `DashboardRefreshRequested`
- `AlertQueued`
- `RealtimePipelineFailed`

These events should eventually drive cache invalidation, search indexing, notifications, historical snapshots, and dashboard refreshes.

## Knowledge Graph Integration

Accepted candidates may propose updates for athlete nodes, program nodes, coach nodes, sport nodes, conference nodes, source nodes, claim nodes, and relationship edges. Proposals must remain blocked from auto-publication until the Intelligence Core approves them.

## AI Agent Integration

Relevant agents receive proposal-only notifications:

- Sentinel handles intake priority.
- Athena summarizes approved intelligence.
- Oracle reviews prediction impact.
- Mercury reviews market impact.
- Atlas reviews roster impact.
- Apollo records historical snapshots.
- Librarian updates relationship context.
- Cartographer updates spatial intelligence.

Agents may propose findings only. They cannot publish directly.

## Dashboard Distribution

The distribution layer prepares refresh hooks for Command Center, Player Intelligence Center, Program Intelligence Workspace, Coach Workspace, GM Workspace, Portal Pulse Network, Transfer Market Exchange, Rankings, Maps, and Historical Replay.

Only approved intelligence should refresh user-facing surfaces.

## Alerts

The alert layer prepares queued mock alerts for watched athlete updates, watched program updates, transfer movement, commitments, visit updates, prediction shifts, roster risk, market movement, conflict detection, and admin review requirements.

No email, push, SMS, or external delivery exists yet.

## Admin Review

The review queue should handle low-confidence items, conflicting reports, duplicate uncertainty, NIL mentions, identity uncertainty, source compliance warnings, and high-impact updates.

The default posture is review-first, especially for NIL, identity ambiguity, conflicts, and high-impact changes.

## Monitoring

Monitoring placeholders track pipeline health, source freshness, failed jobs, duplicate rate, conflict rate, average confidence, review queue size, processing latency, and event volume.

These metrics should feed production observability and service status dashboards in later phases.

## Future Production Roadmap

1. Connect provider-backed queues.
2. Add source freshness monitors.
3. Add safe public RSS ingestion where compliant.
4. Add database-backed claim candidate storage.
5. Add Intelligence Core review workflows.
6. Add event-driven cache invalidation.
7. Add real-time dashboard delivery through SSE or WebSockets.
8. Add production alert routing with user preferences.
9. Add observability dashboards and incident runbooks.
10. Add tests for every pipeline stage.
