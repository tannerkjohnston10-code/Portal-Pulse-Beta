# Portal Pulse Beta Checklist

This checklist defines the minimum internal beta review before Portal Pulse moves toward a private beta audience.

## Navigation Review

- Every major workspace is reachable from global navigation.
- Mobile navigation supports horizontal scanning without hidden dead ends.
- Active states are visible.
- `/coach`, `/gm`, `/network`, `/labs`, `/realtime`, `/command-center`, `/knowledge-graph`, `/players`, `/teams`, `/rankings`, and `/platform/admin/beta` are discoverable.
- Global search access is visible.
- Sport context is visible.
- Demo Mode personas are available without authentication.

## Visual Review

- Cards use consistent border, radius, padding, and hover behavior.
- Page titles follow the same hierarchy.
- Mock data notices are visible where needed.
- Confidence, evidence, source, projection, and simulation labels remain visible.
- Dark mode remains the primary visual language.
- Light mode remains future-ready but is not required for internal beta.

## Performance Review

- Initial dashboard load target: under 2.5 seconds in production-like environments.
- Large widgets should be split into reusable components.
- Future heavy graph/map/chart modules should be lazy-loaded.
- Image usage should remain optimized.
- Mock AI response placeholders should not block route rendering.
- Real-time pipeline updates should eventually use event-driven invalidation.

## Accessibility Review

- Keyboard navigation works for global navigation, demo mode, feedback, and walkthrough controls.
- Focus states are visible.
- Forms have labels.
- Buttons have accessible names.
- Color is not the only status indicator.
- Touch targets are at least 40px where practical.
- Reduced-motion support should be tested before external beta.

## Testing Review

- Run TypeScript build.
- Run linting.
- Add route smoke tests.
- Add permission service tests.
- Add real-time pipeline stage tests.
- Add feedback widget interaction tests.
- Add accessibility checks.
- Add regression checks for Command Center, Player Intelligence, Team Intelligence, GM Workspace, Network, Labs, and Realtime.

## AI Review

- AI agents cannot publish directly.
- Athena, Oracle, Sentinel, Mercury, Atlas, Apollo, Librarian, and Cartographer outputs remain proposal-only.
- Predictions are projections.
- NIL mentions require careful labeling.
- Simulations are separated from verified intelligence.
- Explainability is visible.

## Knowledge Graph Review

- Relationships are source-aware or clearly marked mock/inferred.
- Relationship proposals require Intelligence Core approval.
- Weak/conflicting relationships route to review.
- No unsupported relationship is surfaced as fact.

## Search Review

- Search entry points are visible.
- Recent search and favorite search placeholders are clear.
- Sport, program, athlete, report, and AI grouping are documented.
- Future semantic search is clearly separated from current mock/local search.

## Enterprise Review

- Roles and permissions use centralized services.
- Organization architecture is documented.
- Auth remains placeholder-only until production providers are selected.
- Admin and beta operations dashboards are mock-labeled.
- No credentials or production secrets exist in the repository.

## Launch Checklist

- All major routes smoke-tested.
- Known broken links fixed.
- README and roadmap updated.
- Data trust language present.
- Feedback mechanism visible.
- Demo Mode visible.
- Walkthrough visible.
- Beta ops dashboard available.
- Accessibility pass completed.
- Performance pass completed.
- Support process drafted.
- Private beta cohort defined.
