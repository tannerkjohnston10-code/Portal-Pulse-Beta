# Athena Intelligence Network

## Vision

Athena is the future AI analyst network for Portal Pulse. It coordinates specialized agents that observe signals, propose findings, attach evidence, and submit proposals to the Intelligence Core. Athena does not replace verification. It accelerates reviewable intelligence.

## Agent List

- **Athena:** Chief Intelligence Officer for cross-platform briefings and orchestration.
- **Oracle:** Prediction Specialist for projection signals and probability movement.
- **Sentinel:** Breaking News Monitor for public-signal candidates and source freshness.
- **Atlas:** Multi-sport roster intelligence analyst for roster, lineup/rotation/depth, team need, scholarship, and transfer context.
- **Vega:** Basketball Analyst for roster construction, fit, and class balance.
- **Mercury:** Transfer Market Analyst for portal demand, market movement, and NIL-adjacent caution labels.
- **Apollo:** Historical Analyst for trend comparison and historical rarity.
- **Hermes:** Notification Intelligence for alert candidates and watchlist priority.
- **Archivist:** Historical Replay Analyst for snapshots and point-in-time context.
- **Cartographer:** Map Intelligence for geographic movement and pipeline signals.
- **Librarian:** Knowledge Graph Analyst for relationship candidates and entity linkage.

## Agent Responsibilities

Agents produce structured proposals, not final conclusions. Each proposal must include summary, proposed importance, proposed confidence, confidence reasoning, evidence IDs, affected entities, status, timestamp, and `isMock: true` while the project is in mock mode.

## Agent Lifecycle

1. Observe signals.
2. Generate proposed finding.
3. Attach evidence.
4. Attach confidence reasoning.
5. Send to Intelligence Core.
6. Intelligence Core verifies evidence.
7. Intelligence Core approves, rejects, lowers confidence, or routes to admin review.
8. Only approved intelligence can surface in UI or API.

## Intelligence Core Approval

No agent may publish directly. The Intelligence Core owns confidence scoring, conflict detection, importance scoring, reasoning, explanations, and recommendations. Athena routes proposals into the Core and receives decisions back.

## Safety Rules

- Agents cannot invent facts, NIL values, commitments, sources, or statistics.
- Agents cannot bypass source compliance.
- Agents cannot expose raw copyrighted content.
- Agents cannot elevate rumors into high confidence alone.
- Conflicting, low-confidence, NIL-sensitive, or high-impact findings route to review.

## Future Orchestration

The orchestrator will eventually assign tasks, coordinate handoffs, merge redundant proposals, schedule briefings, and route specialty work to the right analyst. Current orchestration uses mock proposals only.

## Future Daily Briefing

Athena will eventually assemble personalized morning briefings from approved Intelligence Core outputs: watched players, favorite teams, prediction movement, NIL movement, conference activity, and alerts.

The current Athena CIO foundation includes a mock daily briefing generator with overnight updates, watched teams, watched players, prediction changes, NIL movement, team momentum, conference trends, what to watch next, confidence summary, evidence counts, source counts, and an audio placeholder.

Oracle now has a mock prediction specialist foundation that supports projection signals, risk explanation, history placeholders, uncertainty labels, and Intelligence Core recommendations. Oracle predictions remain projections, never facts.

Sentinel now has a mock intake coordinator foundation that supports source detection, compliance validation, duplicate detection, conflict scanning, priority scoring, claim candidate routing, Core submission flags, admin review flags, and intake dashboard snapshots. Sentinel is not a scraper and never publishes directly.

Librarian now has a mock Knowledge Graph specialist foundation that proposes relationship findings, detects weak/conflicting relationships, identifies important networks, explains entity connections, and submits graph findings to the Intelligence Core. Librarian never publishes directly.

Cartographer now has a mock Spatial Intelligence foundation that visualizes graph-backed geographic relationships, transfer flows, recruiting pipelines, heat zones, layer controls, replay hooks, and Core-gated geographic findings. Cartographer never creates claims.

Apollo now has a mock Historical Replay foundation that preserves snapshots, timeline events, prediction state, confidence at time, source count at time, comparison deltas, prediction accuracy placeholders, and Core-gated replay findings. Apollo never rewrites history.

Mercury now has a mock Transfer Market Exchange foundation that explains market-style movement, attention, activity, demand, competition, confidence, source activity, position scarcity, conference activity, and watchlist movement. Mercury never creates claims, confirms commitments, or bypasses the Intelligence Core.

Atlas now has a mock Roster Intelligence and Team Builder foundation that prepares Roster DNA, Team Genome, Roster Chemistry, Scholarship IQ, Transfer Fit, opportunity, strategy, simulation, and forecast findings. Atlas never invents real roster facts and never bypasses the Intelligence Core.

## Future Conversational AI

The `/athena` route reserves a future "Ask Athena" interface. The assistant should answer from approved intelligence, cite evidence, explain confidence, and route uncertain requests to review rather than improvising.

## Future Mobile And Enterprise Use

Athena should power mobile notifications, executive briefings, enterprise dashboards, coach/scouting surfaces, partner API summaries, and saved dashboard views through shared SDK contracts.
