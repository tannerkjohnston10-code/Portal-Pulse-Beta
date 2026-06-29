import type { PlatformRole } from "@/platform/permissions/permission-types";

export type PlatformUserStatus = "invited" | "active" | "suspended" | "deactivated" | "unknown";

export type PlatformUser = {
  id: string;
  displayName: string;
  email?: string;
  roles: PlatformRole[];
  organizationIds: string[];
  status: PlatformUserStatus;
  preferredSports: string[];
  createdAt: string;
  updatedAt: string;
  isMock: true;
};
