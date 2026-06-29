# Ingestion Architecture

Future flow:

1. Source collector finds public content.
2. Parser extracts clean text and metadata.
3. AI extraction converts text into structured claims.
4. Claim service checks duplicates and conflicts.
5. Admin review handles low-confidence items.
6. Approved claims update player and team pages.
7. Historical snapshots preserve changes.

No scraping or automated ingestion is implemented in this phase.

Current implementation:

- mock source registry
- compliance checks
- parser interfaces
- text normalization
- duplicate detection placeholders
- reliability scoring
- mock ingestion job
- claim candidate queue
- admin review routing placeholder

See `docs/INGESTION.md`.
