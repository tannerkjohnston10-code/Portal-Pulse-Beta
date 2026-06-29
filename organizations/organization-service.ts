import type { OrganizationMembership, PlatformOrganization } from "@/platform/organizations/organization-types";

const mockOrganizations: PlatformOrganization[] = [
  {
    id: "mock-org-media",
    name: "Mock College Sports Media Group",
    type: "media_company",
    plan: "pro",
    memberCount: 4,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    isMock: true
  },
  {
    id: "mock-org-athletic-department",
    name: "Mock Athletic Department",
    type: "athletic_department",
    plan: "enterprise",
    memberCount: 12,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    isMock: true
  }
];

const mockMemberships: OrganizationMembership[] = [
  {
    userId: "mock-user-analyst",
    organizationId: "mock-org-media",
    role: "member",
    joinedAt: new Date().toISOString(),
    isMock: true
  }
];

export const OrganizationService = {
  listOrganizations() {
    return mockOrganizations;
  },

  getOrganizationById(organizationId: string) {
    return mockOrganizations.find((organization) => organization.id === organizationId) ?? null;
  },

  listMemberships(userId?: string) {
    return userId ? mockMemberships.filter((membership) => membership.userId === userId) : mockMemberships;
  },

  getInvitationPolicy() {
    return {
      supportsInvitations: true,
      requiresVerifiedDomain: false,
      enterpriseApprovalRequired: true,
      isMock: true
    };
  }
};
