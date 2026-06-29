import type { PlatformAPIContract, PlatformAPIResource } from "@/platform/api/api-contracts";
import { platformApiContracts } from "@/platform/api/api-contracts";

export type VersionedApiContract = PlatformAPIContract & {
  path: `/api/v1/${string}`;
  requiresAuth: boolean;
  scopes: string[];
};

export const apiV1Contracts: VersionedApiContract[] = platformApiContracts.map((contract) => ({
  ...contract,
  path: `/api/v1/${contract.resource.replaceAll("_", "-")}` as `/api/v1/${string}`,
  requiresAuth: false,
  scopes: ["read:public"]
}));

export function getApiContract(resource: PlatformAPIResource) {
  return apiV1Contracts.find((contract) => contract.resource === resource);
}
