import { mockSnapshots } from "@/platform/history/snapshots/mock-history-data";

export const snapshotService = {
  getEntitySnapshot(entityId: string, date: string) {
    const target = new Date(date).getTime();
    return mockSnapshots
      .filter((snapshot) => snapshot.entityId === entityId)
      .sort((a, b) => Math.abs(new Date(a.snapshotDate).getTime() - target) - Math.abs(new Date(b.snapshotDate).getTime() - target))[0];
  },

  getSnapshotsForEntity(entityId: string) {
    return mockSnapshots.filter((snapshot) => snapshot.entityId === entityId).sort((a, b) => a.snapshotDate.localeCompare(b.snapshotDate));
  },

  createSnapshot(entityId: string) {
    return {
      id: `mock-created-snapshot-${entityId}`,
      entityId,
      createdAt: "2026-06-28T18:00:00.000Z",
      note: "Mock snapshot creation placeholder. Future versions persist immutable snapshots.",
      isMock: true
    };
  }
};

