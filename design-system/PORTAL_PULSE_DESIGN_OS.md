# Portal Pulse Design Operating System

## Unified Design Language

The Portal Pulse Design Operating System, or PP-DOS, is the complete visual, interaction, accessibility, and component language for Portal Pulse.

Portal Pulse is an intelligence platform, not a traditional sports website. PP-DOS exists so every workspace, dashboard, AI panel, chart, table, map, form, and mobile experience feels like one product family: fast, sharp, trustworthy, explainable, and built for decision-making.

This system creates reusable foundations. It does not introduce product-specific behavior.

Current status: PP-DOS is a documentation and token foundation. Existing screens should progressively conform to it, and future screens should start from it.

---

# Section 1 — Design Philosophy

## Intelligence Before Decoration

Visual design must clarify meaning before it creates style. Portal Pulse should look premium because the information hierarchy is precise, not because the interface is ornamental.

## Every Screen Answers A Question

Each screen should have a primary user question:

- Command Center: What matters right now?
- Player Intelligence Center: What is happening with this player?
- Team Intelligence Center: What is happening with this program?
- TMX: How is the market moving?
- Atlas: What does this roster need?
- Replay: What did we know then, and what changed?

If a screen cannot state its question, the design is not ready.

## Motion Communicates Change

Motion should explain ranking movement, confidence changes, timeline progression, panel state, map focus, graph expansion, and loading. Motion should not be decorative noise.

## Simplicity Builds Trust

Portal Pulse can be dense without being chaotic. Simplicity means clear hierarchy, consistent patterns, predictable controls, and visible confidence.

## Consistency Reduces Learning

The same status should look and behave the same everywhere. Confidence, source count, prediction, simulation, historical, verified, and pending review states must be consistent across products.

## Accessibility Is Required

Accessibility is not polish. It is product quality. PP-DOS targets WCAG 2.2 AA.

## Explainability Is Visible

Every score, prediction, recommendation, AI insight, ranking, and simulation should have an Explain This path that reveals evidence, confidence, assumptions, contradictions, and last updated time.

## Design Supports Decision Making

The user should leave a screen with sharper judgment. Design should make the next best action visible without pushing users into unsupported certainty.

---

# Section 2 — Design Tokens

PP-DOS uses semantic design tokens. Product teams should reference roles such as `confidence.high`, `surface.card`, or `historical.snapshot` instead of hardcoded values.

Token source of truth: `design-system/tokens/pp-dos-tokens.ts`.

## Spacing

Spacing uses a compact intelligence scale:

- `1` — tight control spacing
- `2` — inline gaps
- `3` — compact component gaps
- `4` — standard component spacing
- `6` — card interior rhythm
- `8` — section rhythm
- `12+` — page-level spacing

## Border Radius

Use restrained radius:

- `xs` and `sm` for controls.
- `md` for cards and panels.
- `full` only for pills, badges, avatars, and circular controls.

Avoid large bubbly radius unless a future workspace explicitly requires it.

## Elevation

Elevation separates layers, not decoration:

- `card` for repeated surfaces.
- `panel` for dashboards and side panels.
- `overlay` for modals and command palettes.
- `glow` only for subtle focus or signal emphasis.

## Opacity

Opacity should communicate state:

- disabled
- muted
- overlay
- focus

Do not rely on opacity alone for critical status.

## Transitions And Timing

Use:

- `fast` for hover and focus.
- `base` for standard state changes.
- `deliberate` for panel changes.
- `slow` only for narrative or replay moments.

Reduced motion must disable nonessential transitions.

## Shadows

Shadows should be subtle and functional. Avoid heavy decorative glow. Data surfaces should stay readable before they look dramatic.

## Breakpoints

PP-DOS supports:

- Mobile: `320px+`
- Tablet: `768px+`
- Laptop: `1024px+`
- Desktop: `1280px+`
- Ultra-wide: `1536px+`

## Grid

Use:

- mobile: 4-column stacked system
- tablet: 8 columns
- desktop: 12 columns
- ultra-wide: 12 columns with larger gutters and max-width constraints

## Sizing

Core sizing standards:

- touch target: at least `44px`
- nav height: `64px`
- Intelligence Stream: `36px`
- sidebar: `18rem`
- content max: `1600px`

Never hardcode values where semantic tokens should be used.

---

# Section 3 — Color System

Colors are semantic roles, not page-specific choices.

## Core Roles

- Primary: main intelligence signal and interactive emphasis.
- Secondary: premium highlight, selected context, and important accents.
- Background: app canvas and global depth.
- Surface: cards, panels, overlays, and subtle bands.
- Text: primary, secondary, muted, disabled, inverse.
- Border: subtle, default, strong, focus.

## Status Roles

- Success: positive movement, verified progress, healthy state.
- Warning: needs attention, pending, medium confidence.
- Critical: error, high risk, negative movement, urgent review.
- Info: neutral intelligence or system notices.

## Trust Roles

- Verified: official, source-backed, reviewed.
- Pending Review: not yet approved or requires human review.
- Simulation: mock, projected, assumption-based, or scenario output.
- Prediction: projection, movement, uncertainty.
- Historical: snapshots, replay, deltas.
- Confidence: high, medium, low, conflicting, unknown.
- Neutral: non-status data and structural UI.

## Theme Support

PP-DOS supports:

- Dark: primary production theme.
- Light: secondary theme for docs, exports, and presentation contexts.
- High Contrast: accessibility-first mode.
- Presentation Mode: large-room, demo, broadcast, or executive review mode.

Future theme work may include Coach Mode, but the required baseline themes are dark, light, high contrast, and presentation.

---

# Section 4 — Typography

Typography should feel premium, dense, and readable.

## Display

Use display type for brand-level or workspace-level moments only. Do not use hero-scale type inside dense dashboards.

## Heading Levels

- H1: page/workspace title.
- H2: major section title.
- H3: card or panel title.
- H4 and below: compact group labels.

## Body

Body text should be readable and efficient. Avoid long explanatory paragraphs inside dashboards.

## Caption

Captions handle metadata, timestamps, source notes, and helper text.

## Data Tables

Table text should use tabular numbers where possible. Headers should be compact and scannable.

## Charts

Chart labels should be small, high-contrast, and legible. Do not shrink chart text below accessibility thresholds.

## Labels

Use uppercase label style sparingly for metadata, filters, and dense stats. Letter spacing should remain controlled and consistent.

## AI Summaries

AI summaries should be calm, readable, and evidence-first. Avoid sensational language.

## Buttons

Button text should be short, action-oriented, and clear. Use icons when the action is familiar.

## Mobile Typography

Mobile should use fewer heading levels, shorter labels, and tighter metadata hierarchy. Do not scale font sizes with viewport width.

---

# Section 5 — Iconography

Icons should help recognition, not decorate empty space.

## Usage Principles

- Use consistent sizing.
- Pair unfamiliar icons with labels or tooltips.
- Use icons for familiar actions such as search, filter, share, watch, save, compare, expand, collapse, and settings.
- Avoid custom symbols when a standard icon is clearer.
- Icons must not be the only status indicator for critical meaning.

## Sizing

- `16px` for dense metadata and table actions.
- `18px` for buttons and tabs.
- `20px` for primary toolbar controls.
- `24px` for workspace headers and empty states.

## Accessibility

Decorative icons should be hidden from assistive tech. Meaningful icons need labels through text, `aria-label`, or tooltip copy.

## Spacing

Icon and text spacing should use tokenized gaps, typically `2` for compact controls and `3` for larger buttons.

## Placeholder Icon Catalog

- Search
- Filter
- Bell
- Star
- Share
- Compare
- Eye / Watch
- Info
- Alert
- Check
- X
- Arrow Up
- Arrow Down
- Timeline
- Map
- Graph
- Source
- Shield
- Spark / AI

Detailed icon guidance: `icons/ICON_SYSTEM.md`.

---

# Section 6 — Layout System

Layouts should keep workflows consistent while adapting density by screen size and user type.

## Dashboard

Use a modular grid, clear widget hierarchy, sticky nav where useful, compact metadata, and visible trust indicators.

## Workspace

Workspaces should combine navigation, primary task surface, secondary context, and persistent actions. Workspace shells should support Fan, Coach, GM, Media, Admin, and Developer workflows.

## Analytics

Analytics layouts should prioritize comparison, trend, and explanation. Charts should appear near methodology and confidence context.

## Detail View

Detail views should start with identity and current state, then move into timeline, evidence, relationships, predictions, and next actions.

## Comparison View

Comparison views should align entities on the same dimensions. Avoid asymmetric layouts that make one side appear more important without reason.

## Settings

Settings should be quiet, predictable, and accessible. Use clear grouping and confirmations for destructive or permission-sensitive actions.

## Documentation

Documentation pages should optimize reading, scanning, anchors, and examples. Light theme support may be useful here.

## Responsive Mobile

Mobile layouts should stack intelligently and preserve core workflows. Tables collapse into cards, filters become drawers or compact bars, and charts simplify without losing meaning.

## Tablet

Tablet uses 8 columns and should support split panels for dashboards and detail views.

## Desktop

Desktop uses 12 columns and supports dense dashboard layouts, sidebars, sticky panels, and multi-column intelligence.

## Ultra-Wide

Ultra-wide should add useful context, not stretch content indefinitely. Use max widths, additional side panels, or expanded dashboards.

---

# Section 7 — Component Library

Components should be reusable, accessible, token-driven, and explainability-aware where relevant.

## Core Components

- Button
- Card
- Panel
- Modal
- Drawer
- Tooltip
- Popover
- Tabs
- Accordion
- Search
- Table
- Badge
- Status Indicator
- Confidence Badge
- Evidence Badge
- Progress Indicator
- Timeline
- Chart Container
- Filter Bar
- Workspace Header
- Sidebar
- Navigation Rail
- Breadcrumb
- Skeleton Loader
- Empty State
- Error State

## Portal Pulse Intelligence Components

- IntelligenceCard
- EvidenceCard
- ExplainThisButton
- SourceCitation
- TrustNotice
- IntelligenceStream
- PredictionBar
- RelationshipMap
- TimelineEvent
- MarketMoverCard
- SimulationCard

## Component Rules

- Components should consume tokens, not hardcoded visual values.
- Components should support loading, empty, error, and disabled states where relevant.
- Components should expose accessible labels and keyboard behavior.
- Components should be composable without nested-card clutter.
- Trust components should remain visually present but not overwhelming.

Detailed component catalog: `components/COMPONENT_CATALOG.md`.

---

# Section 8 — Data Visualization Standards

Data visualization should make change, confidence, and context easier to understand.

## Line Charts

Use for trends over time, prediction history, confidence movement, and ranking history. Label axes clearly and preserve legibility on mobile.

## Bar Charts

Use for comparison, volume, distribution, and categorical metrics.

## Heat Maps

Use for density, urgency, region activity, roster pressure, and market intensity. Include legends and non-color labels.

## Flow Diagrams

Use for transfer movement, pipelines, source-to-claim flow, and data lifecycle views.

## Relationship Graphs

Use for networks and entity relationships. Always show relationship strength, confidence, and evidence access.

## Maps

Use maps for spatial intelligence, not decoration. Map layers need toggles, legends, confidence, source count, and accessible alternatives.

## Timelines

Use timelines for sequence, history, replay, player movement, source updates, and prediction change.

## Ranking Changes

Use arrows, deltas, previous rank, current rank, and explanation. Do not rely on color alone.

## Trend Indicators

Trend indicators should show direction, magnitude, confidence, and time window.

## Comparison Charts

Comparison charts must align scales and dimensions. Avoid misleading axis truncation.

## Confidence Visualizations

Confidence should be visible through label, color, icon, and explanation. Never color-only.

Detailed chart guidance: `charts/CHART_SYSTEM.md`.

---

# Section 9 — Motion Standards

Motion should explain state changes rather than entertain.

## Page Transitions

Use minimal transitions. Do not delay access to data.

## Card Expansion

Expansion should reveal hierarchy and preserve context. Avoid layout jumps.

## Timeline Progression

Timeline motion should communicate time, sequence, and replay state.

## Ranking Movement

Ranking animation should highlight what changed, then settle quickly.

## Loading

Loading should use skeletons that preserve layout and reduce perceived waiting.

## Hover

Hover states should communicate interactivity and focus, not visual drama.

## Focus

Focus states must be visible, high contrast, and keyboard-friendly.

## Modal Transitions

Modal and drawer transitions should be quick and spatially clear.

## Chart Animation

Chart animation should help users perceive deltas and not obscure exact values.

## Reduced Motion

Respect reduced motion preferences. Disable nonessential movement and replace with static state changes.

Detailed motion guidance: `motion/MOTION_SYSTEM.md`.

---

# Section 10 — Accessibility Standards

PP-DOS targets WCAG 2.2 AA.

## Keyboard Navigation

All interactive elements must be reachable and operable by keyboard.

## Focus Management

Focus should move predictably into modals, drawers, popovers, and command palettes, then return to the trigger.

## Screen Readers

Use semantic HTML first. Add ARIA only when it improves clarity. Dynamic updates should be announced when meaningful.

## Contrast

Text, controls, focus rings, and status indicators must meet contrast expectations. High contrast mode should be available for dense workflows.

## Reduced Motion

Honor system reduced motion settings.

## Responsive Behavior

Responsive design must preserve functionality and reading order.

## Touch Targets

Touch targets should be at least `44px` for primary interactive elements.

## Accessible Data Visualizations

Charts and maps should include text summaries, legends, non-color encodings, keyboard access where interactive, and data alternatives when needed.

Detailed accessibility standards: `accessibility/ACCESSIBILITY_STANDARDS.md`.

---

# Section 11 — Responsive Design

Responsive design should adapt density without changing the core workflow.

## Mobile

- Stack cards vertically.
- Collapse tables into cards.
- Use drawers for filters.
- Keep touch targets large.
- Prioritize current state, confidence, and next action.

## Tablet

- Use 8-column layouts.
- Support split views when useful.
- Keep navigation compact but visible.

## Laptop

- Use balanced dashboard density.
- Avoid excessive side panels.
- Keep search and filters within easy reach.

## Desktop

- Use 12-column dashboards.
- Support sticky context panels.
- Show richer comparisons and charts.

## Ultra-Wide

- Use max-width constraints.
- Add meaningful secondary context.
- Avoid stretching text and tables beyond readable widths.

---

# Section 12 — Design Review Checklist

Every meaningful UI change should pass this checklist:

- [ ] Uses semantic design tokens.
- [ ] Avoids unnecessary hardcoded colors, spacing, and shadows.
- [ ] Uses shared components where available.
- [ ] Has consistent spacing and visual hierarchy.
- [ ] Uses correct typography scale.
- [ ] Uses correct color semantics.
- [ ] Supports dark mode.
- [ ] Does not block future light, high contrast, or presentation mode.
- [ ] Is keyboard accessible.
- [ ] Has visible focus states.
- [ ] Meets contrast expectations.
- [ ] Does not rely on color alone for status.
- [ ] Supports reduced motion.
- [ ] Works on mobile, tablet, desktop, and ultra-wide.
- [ ] Provides loading, empty, and error states where needed.
- [ ] Makes confidence, source count, or uncertainty visible where relevant.
- [ ] Supports Explain This when showing scores, predictions, recommendations, or AI insights.
- [ ] Does not duplicate an existing UI pattern unnecessarily.
- [ ] Keeps product behavior separate from design foundations.

---

# Supporting Documentation

- `foundations/CORE_PRINCIPLES.md`
- `tokens/pp-dos-tokens.ts`
- `themes/THEME_ARCHITECTURE.md`
- `colors/COLOR_SYSTEM.md`
- `typography/TYPOGRAPHY_SYSTEM.md`
- `icons/ICON_SYSTEM.md`
- `layout/LAYOUT_ENGINE.md`
- `components/COMPONENT_CATALOG.md`
- `components/INTELLIGENCE_STREAM.md`
- `components/EXPLAIN_THIS.md`
- `charts/CHART_SYSTEM.md`
- `tables/README.md`
- `forms/README.md`
- `motion/MOTION_SYSTEM.md`
- `accessibility/ACCESSIBILITY_STANDARDS.md`
- `documentation/DOCUMENTATION_GUIDE.md`
- `examples/README.md`

# Canonical Cross-Links

- Constitution: `docs/PORTAL_PULSE_CONSTITUTION.md`
- Founder Book: `founder-book/PORTAL_PULSE_FOUNDER_BOOK.md`
- Product Bible: `product-bible/PORTAL_PULSE_PRODUCT_BIBLE.md`
- Technical Architecture Bible: `technical-bible/PORTAL_PULSE_TECHNICAL_ARCHITECTURE.md`
- Engineering Standards Manual: `engineering-standards/ENGINEERING_STANDARDS.md`
