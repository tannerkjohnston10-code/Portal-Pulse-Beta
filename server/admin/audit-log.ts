export type AuditLogEvent = {
  actorId: string;
  action: string;
  entityId: string;
  timestamp: string;
  metadata?: Record<string, string | number | boolean>;
};

export const auditLog = {
  async record(_event: AuditLogEvent): Promise<void> {
    // TODO: Persist admin audit events once authentication and database writes exist.
  }
};
