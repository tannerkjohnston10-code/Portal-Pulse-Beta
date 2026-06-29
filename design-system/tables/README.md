# Table Standards

Tables in Portal Pulse should be dense, readable, responsive, and explainability-aware.

## Principles

- Use tables for comparison, scanning, sorting, and structured data.
- Preserve confidence, source count, and last updated metadata where relevant.
- Keep row height stable.
- Use tabular numbers for ranks, scores, percentages, and deltas.
- Do not rely on color alone for movement or status.

## Required States

- Loading skeleton
- Empty state
- Error state
- Filtered/no results state
- Selected row state where applicable

## Responsive Behavior

On mobile, dense tables should collapse into cards or priority columns. Filters should move into a drawer or compact filter bar.

## Accessibility

Use semantic table markup when displaying tabular data. Provide captions or visible headings, keyboard access for row actions, and screen-reader-friendly labels for icon-only controls.
