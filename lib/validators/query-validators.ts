import { CLAIM_STATUSES, CONFIDENCE_LEVELS, NIL_STATUSES, PORTAL_STATUSES, SPORTS, VISIT_TYPES } from "@/lib/constants/domain";
import type { ClaimStatus, ConfidenceLevel, NILStatus, PortalStatus, Sport, VisitType } from "@/types/portal";
import { ValidationError } from "@/lib/errors/app-error";

type SearchParamsLike = URLSearchParams | Record<string, string | string[] | undefined>;

const getValue = (params: SearchParamsLike, key: string) =>
  params instanceof URLSearchParams ? params.get(key) ?? undefined : Array.isArray(params[key]) ? params[key]?.[0] : params[key];

const optionalEnum = <T extends string>(value: string | undefined, allowed: readonly T[], key: string): T | undefined => {
  if (!value) return undefined;
  if (allowed.includes(value as T)) return value as T;
  throw new ValidationError(`Invalid ${key}`, { key, value, allowed });
};

export type PlayerFilters = {
  sport?: Sport;
  status?: PortalStatus;
  confidence?: ConfidenceLevel;
  query?: string;
};

export const parsePlayerFilters = (params: SearchParamsLike): PlayerFilters => ({
  sport: optionalEnum(getValue(params, "sport"), SPORTS, "sport"),
  status: optionalEnum(getValue(params, "status"), PORTAL_STATUSES, "status"),
  confidence: optionalEnum(getValue(params, "confidence"), CONFIDENCE_LEVELS, "confidence"),
  query: getValue(params, "q")
});

export type TeamFilters = {
  sport?: Sport;
  conference?: string;
};

export const parseTeamFilters = (params: SearchParamsLike): TeamFilters => ({
  sport: optionalEnum(getValue(params, "sport"), SPORTS, "sport"),
  conference: getValue(params, "conference")
});

export type NILFilters = {
  sport?: Sport;
  status?: NILStatus;
};

export const parseNILFilters = (params: SearchParamsLike): NILFilters => ({
  sport: optionalEnum(getValue(params, "sport"), SPORTS, "sport"),
  status: optionalEnum(getValue(params, "status"), NIL_STATUSES, "status")
});

export type VisitFilters = {
  sport?: Sport;
  type?: VisitType;
};

export const parseVisitFilters = (params: SearchParamsLike): VisitFilters => ({
  sport: optionalEnum(getValue(params, "sport"), SPORTS, "sport"),
  type: optionalEnum(getValue(params, "type"), VISIT_TYPES, "type")
});

export type PredictionFilters = {
  sport?: Sport;
  confidence?: ConfidenceLevel;
};

export const parsePredictionFilters = (params: SearchParamsLike): PredictionFilters => ({
  sport: optionalEnum(getValue(params, "sport"), SPORTS, "sport"),
  confidence: optionalEnum(getValue(params, "confidence"), CONFIDENCE_LEVELS, "confidence")
});

export type AdminClaimReviewAction = {
  claimId: string;
  status: ClaimStatus;
  reviewerId?: string;
  notes?: string;
};

export const validateAdminClaimReviewAction = (action: AdminClaimReviewAction) => {
  if (!action.claimId) throw new ValidationError("claimId is required");
  if (!CLAIM_STATUSES.includes(action.status)) throw new ValidationError("Invalid claim status", action.status);
  return action;
};
