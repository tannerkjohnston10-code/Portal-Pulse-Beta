import type { PlatformUser } from "@/platform/users/user-types";

const mockUsers: PlatformUser[] = [
  {
    id: "mock-user-analyst",
    displayName: "Mock Verified Analyst",
    email: "analyst@example.invalid",
    roles: ["verified_analyst"],
    organizationIds: ["mock-org-media"],
    status: "active",
    preferredSports: ["football", "mens-basketball"],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    isMock: true
  }
];

export const UserService = {
  listUsers() {
    return mockUsers;
  },

  getUserById(userId: string) {
    return mockUsers.find((user) => user.id === userId) ?? null;
  },

  getUserOrganizations(userId: string) {
    return this.getUserById(userId)?.organizationIds ?? [];
  }
};
