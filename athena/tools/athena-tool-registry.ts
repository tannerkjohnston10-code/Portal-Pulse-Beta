export const athenaToolRegistry = {
  allowedTools: ["signal_reader", "evidence_linker", "core_submitter", "briefing_builder"],
  disallowedTools: ["direct_publisher", "paywall_bypass", "private_database_reader"],
  isMock: true
} as const;

