import type { MockSourceItem } from "@/server/ingestion/types";

const now = "2026-06-28T12:00:00.000Z";

export const mockSourceItems: MockSourceItem[] = [
  {
    id: "mock-item-official-1",
    registrySourceId: "mock-official-school",
    url: "https://example.edu/athletics/news/mock-transfer-note",
    title: "Mock State announces fictional roster update",
    author: "Mock Athletics Communications",
    publisher: "Mock State Athletics",
    publishedAt: now,
    retrievedAt: now,
    body: "Mock public release text. Fictional player Marcus Vale is mentioned as part of a source-backed workflow demonstration only.",
    isMock: true
  },
  {
    id: "mock-item-rss-1",
    registrySourceId: "mock-rss-feed",
    url: "https://example.com/mock-rss/mock-portal-note",
    title: "Mock RSS headline about fictional portal movement",
    author: "Mock Reporter",
    publisher: "Mock Public RSS Feed",
    publishedAt: now,
    retrievedAt: now,
    body: "Mock RSS summary text about fictional portal movement and Metro University interest.",
    isMock: true
  },
  {
    id: "mock-item-rss-duplicate",
    registrySourceId: "mock-rss-feed",
    url: "https://example.com/mock-rss/mock-portal-note",
    title: "Mock RSS headline about fictional portal movement",
    author: "Mock Reporter",
    publisher: "Mock Public RSS Feed",
    publishedAt: now,
    retrievedAt: now,
    body: "Duplicate mock RSS summary text about fictional portal movement and Metro University interest.",
    isMock: true
  },
  {
    id: "mock-item-rejected-1",
    registrySourceId: "mock-message-board",
    url: "https://example.com/private-board/mock-thread",
    title: "Rejected private mock thread",
    publisher: "Mock Message Board",
    publishedAt: now,
    retrievedAt: now,
    body: "This mock item should be rejected by compliance.",
    isMock: true
  }
];
