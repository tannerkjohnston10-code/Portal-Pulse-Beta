export type SportId = "football" | "mens-basketball" | "womens-basketball" | "baseball" | "softball";

export type SportDisplayName = "Football" | "Men's Basketball" | "Women's Basketball" | "Baseball" | "Softball";

export type ScholarshipModel = "head_count" | "equivalency" | "mixed_or_unknown";

export type PositionDefinition = {
  id: string;
  label: string;
  abbreviation: string;
  group: string;
  isFlexible: boolean;
};

export type LineupStructure = {
  label: string;
  starters: number;
  groups: Array<{
    id: string;
    label: string;
    positions: string[];
  }>;
};

export type SportEngine = {
  id: SportId;
  displayName: SportDisplayName;
  shortName: string;
  rosterRules: {
    rosterLimitLabel: string;
    activeRosterLabel: string;
    starters: number;
    rotationOrDepthLabel: string;
  };
  scholarshipRules: {
    model: ScholarshipModel;
    limitLabel: string;
    limit: number | null;
    equivalency: boolean;
    notes: string;
  };
  eligibilityRules: {
    eligibilityClockLabel: string;
    redshirtOrParticipationLabel: string;
    notes: string;
  };
  transferWindows: Array<{
    label: string;
    timing: string;
    isPlaceholder: true;
  }>;
  recruitingCalendar: Array<{
    label: string;
    timing: string;
    isPlaceholder: true;
  }>;
  positions: PositionDefinition[];
  lineupStructure: LineupStructure;
  historicalMetrics: string[];
  terminology: {
    athleteLabel: string;
    programLabel: string;
    rosterSlotLabel: string;
    depthOrLineupLabel: string;
    scholarshipLabel: string;
    transferLabel: string;
  };
  isMock: true;
};

export type Athlete = {
  id: string;
  displayName: string;
  sportId: SportId;
  programId?: string;
  seasonId: string;
  positionIds: string[];
  eligibilityId?: string;
  isMock: true;
};

export type Program = {
  id: string;
  displayName: string;
  sportId: SportId;
  schoolId: string;
  conferenceId: string;
  division: string;
  seasonId: string;
  isMock: true;
};

export type Season = {
  id: string;
  label: string;
  startYear: number;
  endYear: number;
  sportId: SportId;
  isMock: true;
};

export type UniversalConference = {
  id: string;
  displayName: string;
  division: string;
  sportIds: SportId[];
  isMock: true;
};

export type TransferEvent = {
  id: string;
  athleteId: string;
  sportId: SportId;
  seasonId: string;
  fromProgramId?: string;
  toProgramId?: string;
  status: "entered" | "available" | "committed" | "signed" | "enrolled" | "withdrawn" | "unknown";
  isMock: true;
};

export type Recruitment = {
  id: string;
  athleteId: string;
  sportId: SportId;
  programIds: string[];
  seasonId: string;
  isMock: true;
};

export type NILOpportunity = {
  id: string;
  athleteId: string;
  sportId: SportId;
  programId?: string;
  status: "confirmed" | "reported" | "estimated" | "rumored" | "unknown";
  isMock: true;
};

export type RosterSlot = {
  id: string;
  programId: string;
  sportId: SportId;
  seasonId: string;
  positionId: string;
  athleteId?: string;
  order: number;
  status: "projected" | "confirmed" | "unknown";
  isMock: true;
};

export type Scholarship = {
  id: string;
  athleteId?: string;
  programId: string;
  sportId: SportId;
  seasonId: string;
  model: ScholarshipModel;
  amountLabel: string;
  status: "projected" | "confirmed" | "unknown";
  isMock: true;
};

export type Eligibility = {
  id: string;
  athleteId: string;
  sportId: SportId;
  seasonId: string;
  remainingLabel: string;
  status: "projected" | "confirmed" | "unknown";
  isMock: true;
};

export type SportContext = {
  sportId: SportId;
  seasonId: string;
  conferenceId?: string;
  division?: string;
};
