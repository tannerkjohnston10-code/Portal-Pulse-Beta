# Portal Pulse Command Center

## Vision

The Portal Pulse Command Center is the flagship experience for the Bloomberg Terminal of College Athletics. It is designed to be kept open all day: a fast, dense, source-backed dashboard that turns player movement, team momentum, NIL signals, prediction shifts, source activity, and watchlist updates into one premium intelligence surface.

The Command Center should answer five questions within five seconds:

1. What happened?
2. What changed?
3. Why does it matter?
4. How confident are we?
5. What should I explore next?

## Layout Philosophy

The dashboard uses a modular widget system:

- Desktop: 12-column grid.
- Tablet: 8-column grid.
- Mobile: vertically stacked cards.
- Widgets declare their preferred span and can later be dragged, resized, hidden, or saved into named views.

The top of the page is a sticky command surface with global search, sport selector, notifications, watchlist, saved views, theme placeholder, avatar placeholder, and AI Assistant access.

## Widget System

Current widgets:

- **AI Morning Briefing:** summarizes fictional mock updates, watchlist context, prediction changes, and conference movement.
- **AI Insights Engine:** ranked, explainable, source-aware insights with evidence counts, importance scores, and review gating.
- **Breaking Portal Feed:** live-style stream with timestamps, movement types, confidence badges, affected teams, and source counts.
- **Market Movers:** stock-market-inspired rising/falling player signals, Portal Activity Score, movement arrows, and sparkline placeholders.
- **Interactive Transfer Map:** pan/zoom/control placeholder with mock movement lines, selectable events, legend, and future animation hooks.
- **Team Momentum:** portal grades, additions, losses, net talent score, conference rank, and trend indicators.
- **Conference Activity:** transfers in/out, net movement, active position, top team, conference score, and mini trend charts.
- **Prediction Movers:** previous/current percentages, delta, reason summaries, confidence labels, and projection disclaimers.
- **NIL Market Watch:** reported/estimated/rumored labels, fictional value ranges, collective activity placeholders, confidence, and trust notices.
- **Watchlist:** personalized update shell for players, teams, conferences, predictions, visits, NIL, and commitments.
- **AI Assistant Dock:** reserved source-backed assistant panel with suggested prompts and disabled input until AI is implemented.

## Personalization Architecture

`DashboardCustomizer` and `useDashboardCustomization` prepare the interface for:

- Hide/show modules
- Drag-and-drop widgets
- Resize widgets
- Save views
- Favorite layouts
- Reset layout
- Multiple dashboard views
- User-specific module ordering

Future user preferences should modify layout, ordering, filtering, and notification behavior, never the underlying truth model.

## Data Flow

Command Center data should continue flowing through service boundaries:

1. Public or licensed sources are registered and checked for compliance.
2. Ingestion normalizes source records.
3. AI extraction proposes claim candidates.
4. Claim service verifies, scores, and detects conflicts.
5. Admin review handles low-confidence, NIL-sensitive, conflicting, or identity-sensitive claims.
6. Analytics services compute market movers, prediction movers, team momentum, and conference activity.
7. `commandCenterService` composes dashboard modules.
8. UI widgets render domain-shaped data, not raw Prisma models.

## Future Real-Time Architecture

The UI is prepared for eventual near-real-time updates through:

- WebSockets for high-frequency update streams.
- Server-Sent Events for lighter live feeds.
- Polling fallback for constrained environments.
- Incremental widget refreshes.
- Optimistic rendering for user layout changes.
- Skeleton and error states for module-level recovery.

Real-time data must still respect verification gates. Speed should never bypass source trust.

## Performance Strategy

- Keep most widgets server-rendered until interactivity is required.
- Use client components only for search, customization, map interaction, and future assistant UX.
- Keep module data small and composable.
- Avoid coupling UI directly to database models.
- Use service-level aggregation before rendering dense dashboard widgets.
- Add module-level loading and failure boundaries as data becomes live.

## AI Integration Roadmap

The AI Assistant and Morning Briefing must remain review-gated and explainable. Future AI output should include:

- What Portal Pulse believes
- Why it believes it
- Confidence level and score
- Supporting sources
- Contradicting sources
- Last updated timestamp
- What changed since the previous briefing

AI must not invent facts, sources, commitments, NIL values, visits, or rankings.

## User Journey

1. User opens Command Center.
2. The mission-control header shows system status and major metrics.
3. Morning Briefing identifies what matters most.
4. Breaking Feed shows what changed recently.
5. Market Movers and Prediction Movers explain momentum.
6. Transfer Map gives geographic context.
7. Team, conference, NIL, and watchlist modules point to deeper workflows.
8. AI Dock prepares a future conversational layer over verified intelligence.

## Trust Rules

- A claim is not the same as a fact.
- Every future Command Center claim must include source URLs, confidence, timestamps, and review status.
- NIL values must be labeled as confirmed, reported, estimated, rumored, or unknown.
- Predictions are projections, not facts.
- Conflicts should be surfaced and routed to review.
- Mock data must be fictional and include `isMock: true`.
- AI summaries must be original and must not reproduce copyrighted articles.

## Future Premium Features

- Personalized morning briefing
- Saved dashboard views
- Watchlist alerts
- Real-time portal feed
- Relationship graph overlays
- Team roster impact simulators
- Transfer map playback
- Historical replay
- Premium analytics filters
- Private notes and board-building tools
- Public API access
