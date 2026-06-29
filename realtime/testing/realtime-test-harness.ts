export const RealtimeTestHarness = {
  getRequiredTestCases() {
    return [
      "blocks_private_or_paywalled_sources",
      "creates_claim_candidates_as_reviewable_not_factual",
      "routes_nil_mentions_to_admin_review",
      "does_not_publish_before_intelligence_core_approval",
      "emits_standard_realtime_events",
      "keeps_all_mock_items_labeled"
    ] as const;
  }
};
