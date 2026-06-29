export const organizationTypes = [
  "university",
  "athletic_department",
  "media_company",
  "conference",
  "consulting_firm",
  "recruiting_service",
  "enterprise_organization"
] as const;

export type OrganizationType = (typeof organizationTypes)[number];

export type OrganizationMembershipRole =
  | "owner"
  | "admin"
  | "member"
  | "viewer"
  | "billing_manager"
  | "workspace_manager";

export type PlatformOrganization = {
  id: string;
  name: string;
  type: OrganizationType;
  domain?: string;
  plan: "free" | "pro" | "enterprise" | "internal";
  memberCount: number;
  createdAt: string;
  updatedAt: string;
  isMock: true;
};

export type OrganizationMembership = {
  userId: string;
  organizationId: string;
  role: OrganizationMembershipRole;
  invitedBy?: string;
  joinedAt?: string;
  isMock: true;
};
