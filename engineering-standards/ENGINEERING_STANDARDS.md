# Portal Pulse Engineering Standards Manual

## Engineering Playbook

The Portal Pulse Engineering Standards Manual is the mandatory engineering rulebook for how software is designed, written, reviewed, tested, documented, and maintained.

Every future engineer, AI coding assistant, and contributor should follow this manual before changing production code, shared architecture, platform services, AI systems, APIs, UI components, or data models.

This manual is subordinate to the Portal Pulse Constitution and aligned with the Founder Book, Product Bible, Technical Architecture Bible, and Portal Pulse Design Operating System.

---

# Section 1 — Engineering Philosophy

## Build Once, Reuse Everywhere

Portal Pulse is a platform. If logic is useful to more than one surface, it belongs in shared services, the Platform SDK, or the Intelligence Core. Product pages, widgets, API routes, mobile surfaces, and AI agents should not duplicate business logic.

Example:

- Good: `PortalPulsePlatform.rankings.getPlayerRankings()`
- Avoid: a rankings table recalculating scores inside a React component

## Simplicity Beats Cleverness

Simple code is easier to review, test, debug, onboard, and extend. Prefer boring, explicit patterns over clever abstractions. Add abstraction only when it reduces real duplication or protects a meaningful boundary.

## Every Module Owns One Responsibility

A module should have one clear reason to change. Components render. Services coordinate domain logic. Repositories access persistence. Validators validate. Serializers shape API output. Intelligence Core reasons.

## Explainability Over Magic

Scores, recommendations, predictions, AI outputs, and rankings must be explainable. Code should preserve evidence, confidence, source count, timestamps, and assumptions.

## Documentation Is Part Of The Feature

A feature is not complete if future developers cannot understand why it exists, how it works, how it should be extended, and what trust boundaries apply.

## Every Decision Should Scale

Do not optimize prematurely, but do design boundaries that can survive growth: millions of records, many sports, mobile clients, APIs, enterprise customers, and AI workflows.

## Consistency Builds Trust

Users trust a product that behaves consistently. Engineers trust a codebase that is organized consistently. Naming, file placement, component structure, response shapes, confidence labels, and errors should follow shared conventions.

## Every Line Should Improve The Platform

Code should make Portal Pulse more trustworthy, maintainable, usable, secure, observable, or extensible. Avoid churn that only moves code without increasing clarity.

---

# Section 2 — Repository Standards

## Folder Organization

Use the existing platform structure:

- `app/` — Next.js routes and route handlers.
- `components/` — reusable UI and product components.
- `data/mock/` — fictional mock data only.
- `docs/` — topic-specific documentation.
- `founder-book/` — company vision and strategy.
- `product-bible/` — product specifications.
- `technical-bible/` — system architecture.
- `engineering-standards/` — engineering rules.
- `design-system/` — PP-DOS documentation and tokens.
- `lib/` — config, constants, utilities, validators, errors.
- `platform/` — SDK, events, intelligence, AI, maps, market, history, roster, API contracts, and shared platform concerns.
- `server/` — server-side services, repositories, ingestion, search, analytics, notifications, admin.
- `types/` — shared domain types.
- `prisma/` — database schema, migrations, seed data.

## Feature Organization

Feature code should be grouped by domain:

- Product UI belongs under `components/<domain>/`.
- Route composition belongs under `app/<route>/`.
- Domain services belong under `server/services/` or a domain-specific server folder.
- Shared platform interfaces belong under `platform/`.
- Mock data belongs under `data/mock/<domain>/`.

## Shared Libraries

Use `lib/` for generic helpers and shared constants:

- `lib/config/`
- `lib/constants/`
- `lib/formatters/`
- `lib/validators/`
- `lib/errors/`

Do not place product-specific business logic in generic utility folders.

## Platform SDK Usage

Default integration order:

1. Platform SDK
2. Shared domain service
3. Repository
4. External system or database

UI should not import repositories or Prisma directly.

## Reusable Services

Services should return domain-shaped data, not raw persistence objects. If a UI needs a new shape, add a view model or serializer instead of exposing database internals.

## Naming Consistency

Names should communicate domain intent. Use Portal Pulse product language consistently: Intelligence Core, Platform SDK, Knowledge Graph, Athena, Command Center, TMX, Atlas, Historical Replay, Explain This, Confidence, Evidence.

## Dependency Boundaries

Mandatory boundaries:

- UI may depend on components, types, config, and SDK/service outputs.
- Services may depend on repositories, validators, domain types, and platform logic.
- Repositories may depend on mock data or Prisma.
- Platform modules may depend on shared services but should avoid UI dependencies.
- AI agents may propose findings but must not publish directly.

---

# Section 3 — Coding Standards

## TypeScript Style

- Use explicit domain types for exported function inputs and outputs.
- Prefer discriminated unions for statuses and variants.
- Avoid `any`. Use `unknown` at unsafe boundaries, then validate.
- Keep nullable fields intentional and documented.
- Export shared types from `types/` or `platform/types/` when reused.

Example:

```ts
export type ConfidenceLevel = "high" | "medium" | "low" | "conflicting" | "unknown";

export interface SourceAwareResult<T> {
  data: T;
  confidenceScore: number;
  sourceCount: number;
  lastUpdated: string;
  isMock: boolean;
}
```

## React Component Patterns

- Prefer server components unless interactivity requires client components.
- Keep components focused on rendering and interaction.
- Do not calculate business scores inside UI components.
- Use reusable UI primitives for badges, cards, empty states, loading states, and trust notices.
- Pass typed view models into components.

## Next.js Conventions

- Use App Router conventions.
- Keep route handlers thin.
- Route handlers should call SDK/services and serializers.
- Use metadata and semantic structure where appropriate.
- Avoid large client bundles for static or server-renderable content.

## Hook Usage

- Use hooks only for client-side state, browser APIs, effects, or interaction.
- Do not use hooks to bypass service boundaries.
- Custom hooks should be named `useThing`, live near their domain, and return stable typed values.

## Service Layer Architecture

Services should:

- coordinate domain logic
- call repositories or platform modules
- validate inputs
- compose domain view models
- preserve confidence and source context
- avoid UI imports

Example:

```ts
export async function getTeamIntelligence(teamId: string): Promise<TeamIntelligenceProfile> {
  // service composes repository data, analytics, confidence, and view model output
}
```

## Utility Functions

Utilities should be pure where possible. If a helper needs domain knowledge, place it in the domain service rather than `lib/utils`.

## Interfaces

Use `interface` for public object contracts that may be extended. Use `type` for unions, mapped types, function aliases, and narrower local shapes.

## Enums

Prefer string union types for frontend-friendly domain statuses unless Prisma or generated clients require enums.

## Constants

Constants should live in `lib/constants/` or domain-specific config. Avoid magic strings for statuses, feature flags, route paths, confidence levels, or event names.

## Comments

Use comments sparingly to explain why, not what. Complex trust, scoring, compliance, or security decisions should include a short rationale.

## Error Handling

Use typed errors from `lib/errors/` where possible. Do not leak internal error messages, stack traces, credentials, source content, or admin notes to public responses.

## Asynchronous Patterns

- Prefer `async`/`await`.
- Handle failures explicitly.
- Make background jobs idempotent.
- Do not fire-and-forget critical trust or persistence operations.
- Preserve request IDs in future API and observability flows.

---

# Section 4 — Naming Conventions

## Components

Use PascalCase and domain nouns.

Examples:

- `CommandCenterLayout`
- `PlayerHero`
- `TeamScoreCard`
- `ConfidenceBadge`
- `ExplainThisButton`

## Hooks

Use camelCase with `use` prefix.

Examples:

- `useDashboardLayout`
- `useGlobalSearch`
- `useReducedMotionPreference`

## Services

Use kebab-case filenames and named service exports.

Examples:

- `player-service.ts`
- `team-intelligence-service.ts`
- `command-center-service.ts`
- `source-service.ts`

## Events

Use PascalCase for event type names and dot-case for external webhook names.

Examples:

- Internal: `PlayerUpdated`, `ClaimVerified`, `PredictionChanged`
- External: `player.updated`, `claim.verified`, `prediction.changed`

## APIs

Use resource-based plural routes.

Examples:

- `/api/v1/players`
- `/api/v1/teams/[id]`
- `/api/v1/rankings`
- `/api/v1/command-center`

## Database Models

Use singular PascalCase for Prisma models.

Examples:

- `Player`
- `Team`
- `Claim`
- `SourceArticle`
- `HistoricalSnapshot`

## SDK Methods

Use verb-first camelCase.

Examples:

- `getPlayerProfile()`
- `getTeamIntelligence()`
- `getCommandCenterSnapshot()`
- `calculateImportance()`
- `explainPrediction()`

## Files

Use kebab-case for TypeScript service/module files, PascalCase only for component files if the surrounding codebase uses that pattern.

Examples:

- `ranking-engine.ts`
- `prediction-explainer.ts`
- `ConfidenceBadge.tsx`

## Folders

Use kebab-case for multi-word folders.

Examples:

- `command-center`
- `knowledge-graph`
- `design-system`
- `engineering-standards`

## Interfaces

Use descriptive PascalCase. Avoid Hungarian notation or `I` prefixes.

Examples:

- `PlayerProfile`
- `ApiResponseMeta`
- `CommandCenterSnapshot`

## Types

Use PascalCase for shared type aliases.

Examples:

- `PortalStatus`
- `ConfidenceLevel`
- `PredictionType`

## Environment Variables

Use uppercase snake case. Public browser variables must use the required framework prefix.

Examples:

- `DATABASE_URL`
- `DIRECT_URL`
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`

---

# Section 5 — Architecture Rules

## Intelligence Core Integration

Any feature that determines confidence, priority, explanation, recommendation, prediction meaning, or insight significance must use the Intelligence Core or a Core-approved shared service.

## Knowledge Graph Usage

Relationship intelligence should use the Knowledge Graph. Do not model important relationships in isolated component state, ad hoc arrays, or one-off service responses when the relationship is shared.

## AI Agent Communication

Agents communicate by producing structured proposals with evidence, confidence reasoning, affected entities, and status. Agents do not write directly to user-facing records.

## Event-Driven Architecture

Important domain changes should eventually publish platform events. Until production events exist, code should be structured so event publishing can be added without rewriting business logic.

## Dependency Injection Philosophy

Prefer passing dependencies into services where it improves testability or future replacement. Avoid global mutable state for domain behavior.

## Separation Of Concerns

- Components render.
- Hooks handle client interaction.
- Services coordinate domain logic.
- Repositories access data.
- Serializers shape API output.
- Validators guard inputs.
- Intelligence Core reasons.
- Agents propose.

## Reusable Business Logic

If logic appears twice, ask whether it belongs in a shared service. If logic affects trust, confidence, scoring, or evidence, centralize it immediately.

## Modular Feature Ownership

Each product module should have clear UI, service, data, type, docs, and platform ownership. Avoid cross-domain imports that create circular dependency risk.

---

# Section 6 — UI Engineering Standards

## Design Operating System Integration

Use PP-DOS as the UI authority. Design tokens, colors, typography, iconography, confidence states, motion, spacing, data visualization, responsive behavior, and accessibility rules should come from the design system, not per-page reinvention.

## Design Tokens

Use semantic tokens for colors, typography, spacing, borders, radius, motion, and status states. Avoid hardcoded colors where tokens exist.

## Accessibility

Minimum expectations:

- semantic HTML
- keyboard navigation
- visible focus states
- adequate color contrast
- non-color-only status indicators
- readable text sizes
- ARIA labels where useful
- reduced motion support

## Responsive Layouts

Design mobile as first-class. Dense dashboards should collapse into intelligent stacked cards, not unreadable tables.

## Reusable Components

Use shared components for cards, badges, tables, timelines, trust notices, empty states, loading skeletons, filters, and source citations.

## Motion Usage

Motion should explain change. Use it for rank movement, confidence change, timeline progression, loading, panel transitions, and map/graph expansion. Avoid decorative animation that distracts from trust.

## Loading States

Every async surface should have a loading state. Skeletons should preserve layout dimensions to avoid jarring shifts.

## Empty States

Empty states should explain what is missing and what the user can do next. They should not imply data exists when it does not.

## Error States

Error states should be human-readable, recoverable where possible, and safe. Do not expose internal implementation details.

## Internationalization Readiness

Avoid string concatenation that blocks localization. Keep date, number, currency, and percentage formatting in formatter utilities.

---

# Section 7 — AI Engineering Standards

Every AI feature must:

- route proposed findings through the Intelligence Core
- include evidence references
- expose confidence
- distinguish facts, claims, predictions, simulations, and assumptions
- support Explain This
- never fabricate public claims
- never fabricate sources
- never fabricate NIL values
- never present predictions as facts
- preserve audit history
- route conflicts, low confidence, and high-impact items to review

Labs, Atlas, Digital Twin, and other scenario tools must label simulation outputs as simulation, scenario analysis, projection, mock data, or user configuration. Simulated outcomes cannot be displayed as factual reporting.

Program Intelligence modules must label their information type. Verified information, analysis, historical context, predictions, and simulations cannot be visually or structurally merged without an explicit label.

AI outputs should be structured objects, not unsupported prose.

Required AI output fields where applicable:

- `summary`
- `confidenceScore`
- `confidenceLevel`
- `supportingEvidenceIds`
- `contradictingEvidenceIds`
- `sourceCount`
- `generatedAt`
- `isMock`
- `reviewStatus`
- `explanation`

---

# Section 8 — API Standards

## REST Conventions

Use resource-oriented routes and standard HTTP methods.

Examples:

- `GET /api/v1/players`
- `GET /api/v1/players/[id]`
- `GET /api/v1/rankings`

## Future GraphQL Compatibility

Do not design REST contracts in a way that prevents future GraphQL or typed SDK generation. Keep domain objects clear and composable.

## Versioning

All future external APIs must be versioned. Use `/api/v1` for current internal foundation.

## Authentication Roadmap

Prepare for API keys, user tokens, partner tokens, premium scopes, enterprise scopes, and admin scopes.

## Pagination

List endpoints should support pagination before production-scale data.

Example fields:

- `page`
- `pageSize`
- `total`
- `hasNextPage`

## Filtering

Filters should be explicit, typed, validated, and echoed in response metadata.

## Sorting

Sort options should be constrained to known fields. Never accept raw SQL or unsafe query fragments.

## Response Envelopes

Use the standard API envelope:

```json
{
  "data": {},
  "meta": {
    "version": "v1",
    "generatedAt": "",
    "isMock": true,
    "sourceCount": 0,
    "confidenceScore": 0,
    "requestId": ""
  },
  "errors": []
}
```

## Error Responses

Use typed errors:

- `VALIDATION_ERROR`
- `NOT_FOUND`
- `UNAUTHORIZED`
- `FORBIDDEN`
- `RATE_LIMITED`
- `INTERNAL_ERROR`
- `DATA_UNVERIFIED`
- `CONFLICTING_SOURCES`
- `FEATURE_DISABLED`
- `MOCK_DATA_ONLY`

## Idempotency

Mutation endpoints, future webhooks, ingestion jobs, and notification dispatch should support idempotency keys or deterministic de-duplication.

## Rate Limiting Philosophy

Rate limits protect reliability and data rights. Future tiers should include free, pro, media partner, enterprise, and internal limits.

---

# Section 9 — Testing Standards

## Unit Tests

Use unit tests for pure logic: formatters, validators, scoring, serializers, reducers, and utility functions.

## Integration Tests

Use integration tests for service-to-repository flows, SDK module behavior, API route responses, and data composition.

## Contract Tests

Use contract tests for Platform SDK outputs, API responses, event payloads, and serializer schemas.

## Accessibility Tests

Check keyboard navigation, focus management, contrast, ARIA usage, reduced motion, semantic structure, and mobile touch targets.

## Performance Tests

Measure bundle size, rendering cost, API latency, query performance, caching behavior, and dashboard load time.

## Visual Regression Tests

Use visual regression for dashboard layouts, badges, charts, maps, timelines, and dense data tables once the visual system stabilizes.

## Mock Services

Mock data must be fictional, include `isMock: true`, and avoid real transfer portal claims. Mock services should be replaceable by repositories without changing UI contracts.

## Test Coverage Goals

Coverage should be risk-based:

- Critical trust logic: high coverage required.
- API contracts and serializers: high coverage required.
- Shared SDK/services: high coverage expected.
- UI display components: focused coverage plus visual/accessibility checks.
- Experimental mock-only surfaces: lighter coverage allowed with documentation.

---

# Section 10 — Security Standards

## Authentication Philosophy

Public routes may be anonymous. Admin, coach, enterprise, premium, and API surfaces require authentication before production launch.

## Authorization

Authorization must be role- and scope-aware. Never rely on client-side hiding for protected data.

## Secrets Management

Secrets belong in environment-managed secret storage. Never commit credentials, API keys, tokens, private URLs, or production secrets.

## Audit Logging

Audit high-impact actions:

- claim review
- confidence changes
- source reliability overrides
- NIL review
- prediction publication
- admin actions
- permission changes
- API key lifecycle events

## Encryption Strategy

Use TLS in transit. Use managed database and storage encryption at rest in production. Sensitive fields should receive additional review before storage.

## Privacy-First Design

Do not expose private NIL data, private team notes, internal evaluations, user preferences, or enterprise data through public routes or APIs.

## Handling Public Information

Public information must still be handled respectfully. Do not copy full articles, bypass paywalls, scrape prohibited sources, or republish content beyond compliant summaries and citations.

## Secure Defaults

Default to least privilege, explicit allowlists, safe serialization, and hidden-by-default sensitive fields.

## Dependency Management

Dependencies should be justified, maintained, and security-reviewed. Avoid adding packages for small utilities that can be implemented safely in local code.

---

# Section 11 — Performance Standards

## Page Load Performance

Pages should load quickly on mobile and desktop. Prefer server components, streaming where useful, and lean payloads.

## Bundle Size

Avoid large client-side dependencies. Use dynamic imports for heavy interactive modules such as maps, charts, and graph visualizations.

## Lazy Loading

Lazy-load modules below the fold or behind tabs when they are not needed for first meaningful view.

## Code Splitting

Keep feature bundles separate where possible. Do not make every page pay for map, chart, admin, or AI assistant code.

## Image Optimization

Use optimized image delivery, stable dimensions, and meaningful alt text. Avoid layout shift from unknown image sizes.

## Caching

Use cache boundaries for snapshots, rankings, player profiles, team dashboards, search results, and API responses when production infrastructure exists.

## Background Jobs

Long-running ingestion, AI extraction, source checks, snapshots, webhooks, reports, and notifications should run in background jobs, not request-response paths.

## Database Query Efficiency

Use indexes, pagination, selective fields, and query review for high-volume data. Avoid N+1 query patterns.

## Observability

Production systems should expose logs, metrics, traces, request IDs, queue health, cache rates, and error reporting.

## Monitoring

Monitor uptime, latency, error rates, ingestion failures, stale data, API usage, failed webhooks, and slow queries.

---

# Section 12 — Documentation Standards

Every feature specification should include:

- purpose
- business value
- user story
- workflows
- dependencies
- API considerations
- AI interactions
- edge cases
- future enhancements
- metrics
- rollout plan

Every engineering change that affects architecture should update at least one of:

- Product Bible
- Technical Architecture Bible
- Engineering Standards Manual
- Design Operating System
- API docs
- Data trust docs

Docs should distinguish:

- built
- mock/demo
- prepared
- planned
- future
- simulated
- projected

---

# Section 13 — Pull Request Standards

Every pull request should answer:

- What changed?
- Why did it change?
- How was it tested?
- What risks remain?
- What docs were updated?

## Mandatory Pull Request Checklist

- [ ] Follows Portal Pulse Constitution.
- [ ] Follows Technical Architecture Bible.
- [ ] Follows Engineering Standards Manual.
- [ ] Uses Platform SDK/shared services where appropriate.
- [ ] Does not duplicate business logic.
- [ ] Keeps UI away from raw database logic.
- [ ] Preserves Intelligence Core ownership of confidence, priority, and reasoning.
- [ ] AI outputs are evidence-backed, confidence-aware, and review-gated.
- [ ] Naming conventions followed.
- [ ] TypeScript types added or updated.
- [ ] Tests added or updated according to risk.
- [ ] Accessibility reviewed.
- [ ] Performance considered.
- [ ] Security and privacy reviewed.
- [ ] Mock data clearly labeled with `isMock: true`.
- [ ] Product Bible updated if product behavior changed.
- [ ] Technical docs updated if architecture changed.
- [ ] Release notes or changelog prepared when user-facing.

---

# Section 14 — Definition Of Done

A feature is complete only when:

- Code passes review.
- Tests pass or documented test gaps are accepted.
- Documentation is updated.
- Accessibility is validated.
- Performance is acceptable.
- AI explainability is maintained.
- Security and privacy are reviewed.
- Product Bible is updated when product behavior changes.
- Technical Architecture Bible is updated when architecture changes.
- Mock, simulated, projected, and future states are labeled correctly.
- Error, loading, and empty states exist where needed.
- Release notes are prepared for user-facing changes.

Done means the platform is better, not merely that code exists.

---

# Section 15 — Engineering Culture

## Ownership

Engineers own outcomes, not just files. If a change affects trust, usability, performance, or operations, follow it through.

## Collaboration

Good engineering is cross-functional. Product, design, AI, data, security, and operations concerns should be surfaced early.

## Curiosity

Understand the system before changing it. Read the relevant docs and code paths. Ask why the current boundary exists.

## Continuous Improvement

Improve tests, docs, naming, and architecture as part of normal work. Small quality improvements compound.

## Respectful Code Reviews

Reviews should be direct, specific, and generous. Critique the code and the tradeoff, not the person.

## Mentoring

Leave notes, examples, and patterns that help the next engineer move faster with fewer mistakes.

## Transparency

Call out uncertainty, risk, and tradeoffs. Hidden risk is more dangerous than known imperfection.

## Technical Excellence

Excellence means reliability, clarity, security, maintainability, and trust. It is not cleverness for its own sake.

## Customer-First Thinking

Engineering exists to serve users. The final measure is whether the product helps people understand college athletics with more trust, speed, and confidence.

---

# Cross-Documentation Map

- Constitution: `docs/PORTAL_PULSE_CONSTITUTION.md`
- Founder Book: `founder-book/PORTAL_PULSE_FOUNDER_BOOK.md`
- Product Bible: `product-bible/PORTAL_PULSE_PRODUCT_BIBLE.md`
- Technical Architecture Bible: `technical-bible/PORTAL_PULSE_TECHNICAL_ARCHITECTURE.md`
- Design Operating System: `design-system/PORTAL_PULSE_DESIGN_OS.md`
- API Platform: `docs/API_PLATFORM.md`
- Data Trust: `docs/DATA_TRUST.md`
- Platform SDK: `docs/PLATFORM_SDK.md`
