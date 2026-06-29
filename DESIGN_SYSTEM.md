# Portal Pulse Design System

PP-DOS now serves as the canonical design operating system for Portal Pulse. See `design-system/PORTAL_PULSE_DESIGN_OS.md` for the full visual language, semantic token architecture, motion system, accessibility standards, workspace patterns, Intelligence Stream, and Explain This interaction.

Portal Pulse should feel fast, sharp, dark, intelligent, source-backed, and addictive to use. It should borrow the density and seriousness of Bloomberg Terminal, ESPN, The Athletic, On3, 247Sports, Pro Football Focus, modern SaaS dashboards, and elite scouting databases without becoming a copy of any of them.

## Design Philosophy

Portal Pulse is an intelligence product, not a content blog. Interfaces should answer:

1. What changed?
2. Who is involved?
3. How confident are we?
4. What source supports it?
5. What should the user look at next?

Design principles:

- Dark mode first.
- Dense but scannable.
- Source confidence visible but not noisy.
- Cards for repeated intelligence objects, tables for comparison, timelines for sequence.
- Fast interaction with modest motion.
- Premium sports-media polish without decorative clutter.

## Color Tokens

Primary dark theme:

- `background-primary`: deep navy app background
- `background-secondary`: secondary panels and dashboard bands
- `background-card`: elevated cards
- `text-primary`: main text
- `text-secondary`: secondary text
- `text-muted`: metadata
- `accent-primary`: electric cyan
- `accent-secondary`: gold
- `success`: positive movement and verified confidence
- `warning`: medium confidence and review warnings
- `danger`: negative movement and risk
- `info`: informational states

Confidence colors:

- high: green
- medium: yellow
- low: red
- conflicting: magenta
- unknown: gray

NIL colors:

- confirmed: green
- reported: cyan
- estimated: yellow
- rumored: red
- unknown: gray

## Typography Rules

- Page title: bold, compact, and authoritative.
- Section title: clear and scannable.
- Card title: strong but not oversized.
- Table header: uppercase, small, high contrast.
- Body text: readable at dense dashboard sizes.
- Metadata: small, muted, never essential by color alone.
- Badge text: uppercase and compact.
- Stat numbers: tabular, bold, easy to compare.
- Ticker text: compact uppercase.

Avoid viewport-based font scaling. Use stable responsive steps.

## Component Rules

Core components:

- `AppShell`: application frame.
- `Navbar`: primary navigation with active state.
- `Sidebar`: future dense-dashboard navigation.
- `Footer`: lightweight trust and route footer.
- `PageHeader` / `PageFrame`: page title, description, actions.
- `SectionHeader`: section title and optional description.
- `StatCard`: numeric dashboard metric.
- `IntelligenceCard`: source-backed insight card.
- `PlayerCard`, `TeamCard`, `PredictionCard`, `NILCard`, `VisitCard`: feature cards.
- `DataTable` / ranking tables: dense comparison.
- `SearchInput`, `FilterBar`, `Tabs`: navigation and filtering.
- `Timeline`, `TimelineEvent`: sequence of events.
- `PredictionBar`: probability visualization.
- `EmptyState`, `LoadingSkeleton`, `ErrorState`: page states.
- `TrustNotice`, `AlertBanner`: trust and status copy.

Cards should not be nested inside other cards unless the inner item is a repeated record or state panel.

## Badge Rules

Badges should communicate status quickly:

- `ConfidenceBadge`: high, medium, low, conflicting, unknown.
- `StatusBadge`: portal status.
- `ClaimStatusBadge`: confirmed, reported, rumored, estimated, disputed, needs review.
- `NILStatusBadge`: confirmed, reported, estimated, rumored, unknown.
- `MovementBadge`: up, down, flat.
- `PortalGradeBadge`: compact team/ranking grade.

Never rely on color alone. Badge text must name the state.

## Dashboard Layout Rules

Homepage dashboards:

- Hero or command center first.
- Snapshot metrics next.
- Breaking feed and priority boards above lower-detail tables.
- Trust notice visible early.

Player profiles:

- Header must show identity, status, confidence, and last update.
- Tabs should remain horizontally scrollable on mobile.
- Timeline and evidence should be near the top.

Team profiles:

- Ranking, movement, roster needs, commits/losses, and depth chart should be scannable.

Ranking pages:

- Tables for desktop.
- Cards for mobile.
- Movement indicators should appear near rank.

Admin pages:

- Queue counts first.
- Review cards next.
- Risk states must use text and badges.

Dense tables:

- Minimum width with horizontal scroll.
- Sticky headers can be added later for large datasets.
- Row hover should be subtle.

Spacing:

- Page padding: `px-4 sm:px-6 lg:px-8`
- Page max width: `max-w-7xl`
- Section gap: `gap-8`
- Card gap: `gap-4`
- Card padding: `p-5` or `p-6`

## Mobile Rules

- Navigation uses horizontal scroll on small screens.
- Tables must scroll horizontally or collapse into cards.
- Cards should be single-column by default.
- Touch targets should be at least 40px high.
- Filters should wrap and remain tappable.
- Tabs should not shrink text below readable sizes.
- Admin dashboards should preserve queue counts and labels.

## Motion And Interaction

Use motion sparingly:

- Hover lift on cards.
- Active nav state.
- Table row hover.
- Smooth tab hover transitions.
- Loading skeleton pulse.
- Focus rings on all controls.

Respect reduced-motion preferences.

## Trust UI Rules

Trust components:

- confidence badge
- source citation line
- verified source icon
- rumor badge
- conflicting report badge
- last updated label
- why-we-believe-this block
- admin review flag
- projection disclaimer

Trust should be present wherever claims, NIL, predictions, or reports appear.

## Accessibility Expectations

- Use semantic HTML.
- Maintain strong color contrast.
- Provide visible focus states.
- Use `aria-label` where icons act as controls.
- Avoid color-only states.
- Keep text readable on mobile.
- Preserve keyboard navigation.
- Respect reduced motion.

## Future Design Roadmap

Near term:

- Add component tests for design primitives.
- Add light theme toggle.
- Add chart primitives.
- Add source drawers and confidence detail panels.

Mid term:

- Add premium dashboard layouts.
- Add saved view controls.
- Add watchlist and alert UI.
- Add roster/depth chart visualizations.

Long term:

- Add graph visualization system.
- Add transfer map.
- Add relationship explorer.
- Add scouting report print/export layouts.
