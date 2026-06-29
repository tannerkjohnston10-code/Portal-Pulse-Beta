export type PlatformAuthContext = {
  userId?: string;
  role: "public" | "member" | "premium" | "admin" | "enterprise";
  permissions: string[];
  isMock?: true;
};

export const publicAuthContext: PlatformAuthContext = {
  role: "public",
  permissions: ["read:public"],
  isMock: true
};
