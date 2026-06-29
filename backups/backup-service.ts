export type BackupTarget = "database" | "configuration" | "knowledge_graph" | "search_index";

export type BackupPolicy = {
  target: BackupTarget;
  frequency: "hourly" | "daily" | "weekly";
  retentionDays: number;
  encrypted: boolean;
  tested: boolean;
  isMock: true;
};

export const BackupService = {
  getBackupPolicies(): BackupPolicy[] {
    return [
      { target: "database", frequency: "daily", retentionDays: 30, encrypted: true, tested: false, isMock: true },
      { target: "configuration", frequency: "daily", retentionDays: 30, encrypted: true, tested: false, isMock: true },
      { target: "knowledge_graph", frequency: "daily", retentionDays: 30, encrypted: true, tested: false, isMock: true },
      { target: "search_index", frequency: "weekly", retentionDays: 14, encrypted: true, tested: false, isMock: true }
    ];
  }
};
