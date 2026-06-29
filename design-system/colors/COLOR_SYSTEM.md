# Semantic Color System

PP-DOS uses semantic tokens. Designers and engineers should choose colors by meaning, not by raw hex value.

## Color Families

- **Intelligence:** core Portal Pulse identity, signal emphasis, focus states.
- **Success:** verified, positive movement, stable improvement.
- **Warning:** medium confidence, review needed, uncertainty.
- **Critical:** low confidence, negative movement, risk, conflicts.
- **Neutral:** backgrounds, panels, cards, text, borders.
- **Confidence:** high, medium, low, conflicting, unknown.
- **Prediction:** projections, movement, uncertainty.
- **Simulation:** mock, projected, assumption-based, scenario.
- **Historical:** snapshot, replay, delta.
- **Verified:** source-backed and official states.
- **Pending Review:** items awaiting Intelligence Core or admin review.

## Theme Support

- Dark
- Light
- High Contrast
- Coach Mode
- Presentation Mode

## Rules

- Do not encode meaning with color alone.
- Badges must include text labels.
- Use `design-system/tokens/pp-dos-tokens.ts` as the semantic reference.
- Raw colors should not be introduced without mapping to a semantic token.

