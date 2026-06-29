export type RecoveryPlan = {
  scenario: "database_restore" | "configuration_restore" | "search_rebuild" | "regional_outage_placeholder";
  targetRecoveryTimeMinutes: number;
  targetRecoveryPointMinutes: number;
  owner: "platform" | "infrastructure" | "security";
  runbookStatus: "planned" | "draft" | "approved";
  isMock: true;
};

export const RecoveryService = {
  getRecoveryPlans(): RecoveryPlan[] {
    return [
      {
        scenario: "database_restore",
        targetRecoveryTimeMinutes: 120,
        targetRecoveryPointMinutes: 60,
        owner: "infrastructure",
        runbookStatus: "planned",
        isMock: true
      },
      {
        scenario: "search_rebuild",
        targetRecoveryTimeMinutes: 240,
        targetRecoveryPointMinutes: 1440,
        owner: "platform",
        runbookStatus: "draft",
        isMock: true
      }
    ];
  }
};
