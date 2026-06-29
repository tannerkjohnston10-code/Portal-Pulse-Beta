# Portal Pulse Intelligence API & Developer Platform

## API Vision

Portal Pulse is preparing to expose college athletics intelligence through safe, source-aware, confidence-aware, versioned APIs. The API platform should eventually support public developers, private partners, premium customers, mobile apps, AI assistants, media integrations, coaching dashboards, enterprise products, data exports, and webhooks.

This phase builds internal architecture only. It is not a production public API.

## Versioning Rules

All new API routes live under `/api/v1`. Contracts, serializers, errors, and response wrappers are versioned so future `/api/v2` routes can evolve without breaking existing consumers.

## Response Format

All API responses use:

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

List responses may include pagination, applied filters, sort, and total placeholders.

## Error Format

Errors use:

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

Every error includes code, message, optional details, request ID, and timestamp.

## Authentication Roadmap

The platform has placeholders for:

- API keys
- User tokens
- Partner tokens
- Premium access
- Enterprise scopes
- Admin scopes

Current middleware identifies a mock public consumer only.

## Rate Limit Roadmap

Future tiers:

- Free
- Pro
- Media partner
- Enterprise
- Internal

Current rate limiting is a placeholder prepared for Redis or another shared counter service.

## Endpoint List

Current mock-safe v1 routes:

- `GET /api/v1/health`
- `GET /api/v1/players`
- `GET /api/v1/players/[id]`
- `GET /api/v1/teams`
- `GET /api/v1/teams/[id]`
- `GET /api/v1/rankings`
- `GET /api/v1/insights`
- `GET /api/v1/command-center`
- `GET /api/v1/search`
- `GET /api/v1/sources`

All routes consume the Platform SDK or shared services. They do not read mock data directly.

## Webhook Roadmap

Prepared webhook events:

- `player.updated`
- `player.committed`
- `player.entered_portal`
- `team.ranking_changed`
- `prediction.changed`
- `nil.updated`
- `insight.generated`
- `source.conflict_detected`

Webhook delivery is not implemented yet.

## Safety And Trust Rules

APIs must not expose:

- Admin notes
- Unreviewed sensitive claims as confirmed
- Private NIL information
- Unsafe internal IDs
- Raw scraped article text
- Credentials
- Environment variables
- Paywalled or private source content

APIs should expose structured summaries, source references, confidence scores, timestamps, and clearly labeled mock/demo data.

## Mock Data Rules

Current API responses are mock/demo only and include `isMock: true`. Mock records are fictional and must not be treated as real NCAA claims.

## Future Partner Platform Vision

Future Portal Pulse APIs can power:

- Media partner dashboards
- Coach and scouting dashboards
- Enterprise analytics
- Mobile apps
- Premium user dashboards
- Data exports
- AI assistant retrieval
- Webhook integrations
