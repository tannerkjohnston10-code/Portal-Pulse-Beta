# Portal Pulse Constitution

## 1. Product Mission

Portal Pulse exists to turn public college athletics information into trustworthy, explainable, source-backed intelligence. The platform begins with the transfer portal and expands into recruiting, NIL, rosters, coaching, conferences, predictions, alerts, mobile products, APIs, and enterprise dashboards.

## 2. North Star Vision

Portal Pulse is the Bloomberg Terminal of College Athletics: fast, dense, premium, confidence-aware, and useful all day. It should help users understand what changed, why it matters, who is affected, how confident Portal Pulse is, and what to watch next.

## 3. Platform Principles

- Build shared platform services before isolated page logic.
- Expose reusable SDK interfaces for web, mobile, API, AI, analytics, and enterprise consumers.
- Keep data, reasoning, UI, API, and admin review boundaries explicit.
- Preserve history instead of overwriting meaningful changes.
- Treat Command Center, Player Intelligence, Team Intelligence, Rankings, API, Athena, and notifications as consumers of the same intelligence platform.

## 4. Engineering Principles

- TypeScript types define platform contracts.
- UI components do not access raw database logic.
- Services do not depend on UI components.
- Repositories isolate persistence.
- Intelligence logic belongs in the Intelligence Core.
- Prefer composable modules over duplicated business logic.
- Keep mock data clearly labeled with `isMock: true`.

## 5. AI Principles

- AI may assist extraction, summarization, reasoning, and prioritization.
- AI must remain explainable.
- AI must not invent players, commitments, NIL values, sources, or statistics.
- AI must not cite nonexistent sources.
- AI must never bypass claim verification.

Core rule:

**No AI agent may publish a conclusion directly. Agents may propose findings. The Intelligence Core verifies evidence, applies confidence scoring, checks conflicts, and determines what can be surfaced.**

## 6. Data Trust Rules

- A claim is not a fact.
- Every surfaced claim should include sources, confidence, timestamp, and status.
- Conflicting reports are flagged, not hidden.
- Low-confidence or high-impact items route to admin review.
- Unsupported claims remain private or hidden.

## 7. Source Verification Standards

Sources should capture URL, publisher, author, source type, publish date, retrieved date, reliability score, paywall/compliance status, and citation summary. Official statements, player statements, coach statements, verified reporters, established news outlets, public RSS feeds, and compliant summaries are preferred.

## 8. Claim vs Fact vs Prediction Rules

- **Fact:** verified, source-backed, and reviewed when required.
- **Claim:** reported assertion that may be true, false, stale, partial, or conflicting.
- **Prediction:** projection based on signals, not a report.
- **Recommendation:** suggested next action produced from verified or reviewable intelligence.

Predictions and recommendations must never be displayed as facts.

## 9. NIL Reporting Rules

NIL values must be labeled as confirmed, reported, estimated, rumored, or unknown. Private NIL information must not be exposed. Estimates require disclaimers and confidence labels. Rumors and social-only signals should route to review.

## 10. Prediction Rules

Predictions must show probability, confidence, explanation, supporting evidence, contradicting evidence, timestamp, and model/version placeholder. Prediction history must be preserved. A single rumor cannot create a high-confidence prediction.

## 11. UX Principles

- Dark-mode first, fast, premium, dense, and scannable.
- Every screen should answer: what changed, who is involved, how confident are we, what source supports it, and what should the user explore next.
- Trust indicators should be visible but not overwhelming.
- Mobile should feel deliberate, not merely compressed.

## 12. Accessibility Rules

Use semantic HTML, keyboard-accessible controls, visible focus states, adequate contrast, non-color-only status indicators, readable text sizes, and ARIA labels where useful.

## 13. Security Rules

Do not expose admin notes, secrets, credentials, private NIL information, raw copied article text, paywalled content, unreviewed sensitive claims as facts, or unsafe internal fields through public APIs.

## 14. Performance Rules

Prefer server components where useful, shared snapshots, caching boundaries, lean payloads, pagination, stable API contracts, and event-driven invalidation in future phases.

## 15. Documentation Rules

Every major platform capability should have docs covering mission, data flow, trust rules, extension points, future roadmap, and current mock limitations.

The Founder Book is the high-level company blueprint. Product, engineering, design, AI, business model, and roadmap documents should remain consistent with the Founder Book and the Constitution.

## 16. Testing Rules

Prepare unit, service, repository, API, contract, UI, and end-to-end testing layers. Critical trust logic should be testable without UI.

## 17. API Rules

API responses must be versioned, typed, source-aware, confidence-aware, timestamped, paginated where needed, safe for external consumption, and explicit about mock/demo data.

## 18. Mobile-Readiness Rules

Every shared service should be usable by mobile apps. UI patterns should assume smaller screens, offline-adjacent future needs, watchlists, alerts, push notifications, and personalized briefings.

## 19. Enterprise-Readiness Rules

Support future partner APIs, premium dashboards, role-based access, audit logs, usage tracking, webhooks, data exports, saved views, and contract stability.

## 20. Non-Negotiables

- No invented facts.
- No unsupported source citations.
- No AI direct publish.
- No duplicated intelligence logic.
- No raw database access from UI.
- No facts overwritten without history.
- No real NIL claim without source and label.
- No prediction presented as a report.
- No private or non-compliant data collection.
- No trust feature hidden behind decorative UI.
