import { mockSnapshots } from "@/platform/history/snapshots/mock-history-data";

export const historyVersionService = {
  getVersions(entityId: string) {
    return mockSnapshots.filter((snapshot) => snapshot.entityId === entityId).map((snapshot, index) => ({
      versionId: `mock-version-${index + 1}`,
      snapshotId: snapshot.id,
      snapshotDate: snapshot.snapshotDate,
      confidenceAtTime: snapshot.confidenceAtTime,
      isMock: true
    }));
  }
};

