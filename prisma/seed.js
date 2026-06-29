const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const now = new Date("2026-06-28T12:00:00.000Z");

async function reset() {
  await prisma.notification.deleteMany();
  await prisma.alert.deleteMany();
  await prisma.watchlist.deleteMany();
  await prisma.auditLog.deleteMany();
  await prisma.adminReviewItem.deleteMany();
  await prisma.claimConflict.deleteMany();
  await prisma.claimSource.deleteMany();
  await prisma.timelineEvent.deleteMany();
  await prisma.sourceMention.deleteMany();
  await prisma.sourceArticle.deleteMany();
  await prisma.historicalSnapshot.deleteMany();
  await prisma.playerMovement.deleteMany();
  await prisma.visit.deleteMany();
  await prisma.teamInterest.deleteMany();
  await prisma.transferPortalEntry.deleteMany();
  await prisma.nILValuation.deleteMany();
  await prisma.nILDeal.deleteMany();
  await prisma.predictionHistory.deleteMany();
  await prisma.claim.deleteMany();
  await prisma.prediction.deleteMany();
  await prisma.playerRanking.deleteMany();
  await prisma.teamRanking.deleteMany();
  await prisma.recruitingClassPlayer.deleteMany();
  await prisma.recruitingClass.deleteMany();
  await prisma.coachTenure.deleteMany();
  await prisma.recruitingRelationship.deleteMany();
  await prisma.teamNeed.deleteMany();
  await prisma.scholarshipCount.deleteMany();
  await prisma.depthChartPosition.deleteMany();
  await prisma.depthChart.deleteMany();
  await prisma.rosterSpot.deleteMany();
  await prisma.roster.deleteMany();
  await prisma.playerTeammate.deleteMany();
  await prisma.playerSchoolHistory.deleteMany();
  await prisma.nILCollective.deleteMany();
  await prisma.player.deleteMany();
  await prisma.coach.deleteMany();
  await prisma.team.deleteMany();
  await prisma.position.deleteMany();
  await prisma.highSchool.deleteMany();
  await prisma.school.deleteMany();
  await prisma.conference.deleteMany();
  await prisma.sport.deleteMany();
  await prisma.source.deleteMany();
  await prisma.user.deleteMany();
}

async function main() {
  await reset();

  const football = await prisma.sport.create({
    data: { name: "Football", slug: "football", isMock: true }
  });

  const quarterback = await prisma.position.create({
    data: { sportId: football.id, name: "Quarterback", code: "QB", group: "Offense", isMock: true }
  });

  const edge = await prisma.position.create({
    data: { sportId: football.id, name: "Edge", code: "EDGE", group: "Defense", isMock: true }
  });

  const conference = await prisma.conference.create({
    data: { name: "Mock Central Conference", slug: "mock-central", division: "FBS", isMock: true }
  });

  const lakefront = await prisma.school.create({
    data: {
      name: "Lakefront State",
      slug: "lakefront-state",
      city: "Harbor City",
      state: "MI",
      conferenceId: conference.id,
      isMock: true
    }
  });

  const metro = await prisma.school.create({
    data: {
      name: "Metro University",
      slug: "metro-university",
      city: "Metro City",
      state: "IL",
      conferenceId: conference.id,
      isMock: true
    }
  });

  const lakefrontTeam = await prisma.team.create({
    data: {
      schoolId: lakefront.id,
      sportId: football.id,
      conferenceId: conference.id,
      name: "Lakefront State Football",
      slug: "lakefront-state-football",
      division: "FBS",
      portalLosses: 1,
      isMock: true
    }
  });

  const metroTeam = await prisma.team.create({
    data: {
      schoolId: metro.id,
      sportId: football.id,
      conferenceId: conference.id,
      name: "Metro University Football",
      slug: "metro-university-football",
      division: "FBS",
      portalGains: 1,
      nilStrengthEstimate: 72,
      isMock: true
    }
  });

  const highSchool = await prisma.highSchool.create({
    data: { name: "Mock Valley High", city: "Cedar Falls", state: "IA", isMock: true }
  });

  const player = await prisma.player.create({
    data: {
      sportId: football.id,
      positionId: quarterback.id,
      highSchoolId: highSchool.id,
      currentSchoolId: lakefront.id,
      firstName: "Marcus",
      lastName: "Vale",
      displayName: "Marcus Vale",
      slug: "marcus-vale",
      heightInches: 75,
      weightPounds: 214,
      classYear: "RS Sophomore",
      eligibility: "Mock eligibility placeholder",
      hometownCity: "Cedar Falls",
      hometownState: "IA",
      transferStatus: "ENTERED",
      recruitingRating: "88.50",
      portalRating: "91.20",
      nilValuationStatus: "ESTIMATED",
      biographySummary: "Fictional seed player for Portal Pulse database validation.",
      isMock: true,
      lastUpdated: now
    }
  });

  await prisma.playerSchoolHistory.create({
    data: {
      playerId: player.id,
      schoolId: lakefront.id,
      season: "2025",
      role: "Mock starter",
      isMock: true
    }
  });

  const roster = await prisma.roster.create({
    data: { teamId: lakefrontTeam.id, season: "2026", name: "2026 Mock Roster", isMock: true }
  });

  await prisma.rosterSpot.create({
    data: {
      rosterId: roster.id,
      playerId: player.id,
      positionId: quarterback.id,
      jerseyNumber: "12",
      scholarship: true,
      status: "ACTIVE",
      isMock: true
    }
  });

  const depthChart = await prisma.depthChart.create({
    data: { teamId: lakefrontTeam.id, season: "2026", label: "Spring Mock Depth Chart", isCurrent: true, isMock: true }
  });

  await prisma.depthChartPosition.create({
    data: {
      depthChartId: depthChart.id,
      positionId: quarterback.id,
      playerId: player.id,
      positionLabel: "QB",
      depthOrder: 1,
      status: "projected",
      isMock: true
    }
  });

  const source = await prisma.source.create({
    data: {
      name: "Mock Portal Pulse Source",
      url: "https://example.com/mock-source",
      type: "UNKNOWN",
      author: "Mock Analyst",
      publisher: "Portal Pulse Mock Desk",
      publishedAt: now,
      retrievedAt: now,
      reliabilityScore: 50,
      paywalled: false,
      contentSummary: "Fictional source used only for local seed data.",
      citationText: "Mock citation text.",
      extractionStatus: "EXTRACTED",
      duplicateStatus: "UNIQUE",
      isMock: true
    }
  });

  const article = await prisma.sourceArticle.create({
    data: {
      sourceId: source.id,
      title: "Mock portal entry article",
      canonicalUrl: "https://example.com/mock-source/mock-portal-entry",
      rawText: "Fictional source text for seed data only.",
      contentHash: "mock-hash-portal-entry",
      publishedAt: now,
      retrievedAt: now,
      extractionStatus: "EXTRACTED",
      duplicateStatus: "UNIQUE",
      isMock: true
    }
  });

  await prisma.sourceMention.create({
    data: {
      sourceId: source.id,
      sourceArticleId: article.id,
      playerId: player.id,
      teamId: metroTeam.id,
      mentionText: "Mock mention connecting Marcus Vale to Metro University.",
      mentionType: "PLAYER",
      confidenceScore: 50,
      isMock: true
    }
  });

  const claim = await prisma.claim.create({
    data: {
      claimType: "PORTAL_ENTRY",
      subjectType: "PLAYER",
      subjectId: player.id,
      value: "Marcus Vale has a mock portal entry record.",
      status: "NEEDS_REVIEW",
      confidenceLevel: "MEDIUM",
      confidenceScore: 64,
      firstSeenAt: now,
      lastSeenAt: now,
      reviewedStatus: "OPEN",
      reviewNotes: "Fictional seed claim. Not a real NCAA report.",
      isMock: true
    }
  });

  await prisma.claimSource.create({
    data: {
      claimId: claim.id,
      sourceId: source.id,
      sourceArticleId: article.id,
      citationText: "Mock citation linking source to claim.",
      supporting: true,
      confidenceWeight: "0.50",
      isMock: true
    }
  });

  const portalEntry = await prisma.transferPortalEntry.create({
    data: {
      playerId: player.id,
      fromSchoolId: lakefront.id,
      status: "ENTERED",
      enteredAt: now,
      eligibilityNote: "Mock eligibility note.",
      confidenceScore: 64,
      isMock: true
    }
  });

  await prisma.playerMovement.create({
    data: {
      playerId: player.id,
      fromSchoolId: lakefront.id,
      movementType: "PORTAL_ENTRY",
      occurredAt: now,
      claimId: claim.id,
      notes: "Mock historical movement record.",
      isMock: true
    }
  });

  await prisma.teamInterest.create({
    data: {
      playerId: player.id,
      teamId: metroTeam.id,
      portalEntryId: portalEntry.id,
      interestLevel: "MEDIUM",
      probability: 42,
      status: "ESTIMATED",
      isMock: true
    }
  });

  await prisma.visit.create({
    data: {
      playerId: player.id,
      teamId: metroTeam.id,
      visitType: "OFFICIAL",
      status: "SCHEDULED",
      visitDate: new Date("2026-07-02T18:00:00.000Z"),
      confidenceLevel: "MEDIUM",
      confidenceScore: 61,
      claimId: claim.id,
      isMock: true
    }
  });

  const collective = await prisma.nILCollective.create({
    data: { name: "Mock Metro Collective", schoolId: metro.id, isMock: true }
  });

  const nilDeal = await prisma.nILDeal.create({
    data: {
      playerId: player.id,
      teamId: metroTeam.id,
      collectiveId: collective.id,
      status: "ESTIMATED",
      amountMin: "10000.00",
      amountMax: "25000.00",
      rangeLabel: "Mock estimated range",
      collectiveName: "Mock Metro Collective",
      dealType: "COLLECTIVE",
      sourceId: source.id,
      confidenceScore: 45,
      privacyDisclaimerFlag: true,
      isMock: true
    }
  });

  await prisma.nILValuation.create({
    data: {
      playerId: player.id,
      nilDealId: nilDeal.id,
      status: "ESTIMATED",
      amountMin: "10000.00",
      amountMax: "25000.00",
      valuationLabel: "Mock NIL valuation",
      methodology: "Fictional placeholder methodology.",
      confidenceScore: 45,
      privacyDisclaimerFlag: true,
      sourceId: source.id,
      isMock: true
    }
  });

  const prediction = await prisma.prediction.create({
    data: {
      playerId: player.id,
      teamId: metroTeam.id,
      predictedTeamId: metroTeam.id,
      predictionType: "COMMITMENT",
      probability: 42,
      confidenceScore: 59,
      explanation: "Mock prediction explanation. This is not a real forecast.",
      modelVersion: "mock-v0",
      sourceInfluence: { mockSourceWeight: 0.5 },
      isMock: true
    }
  });

  await prisma.predictionHistory.create({
    data: {
      predictionId: prediction.id,
      probability: 42,
      confidenceScore: 59,
      explanation: "Initial mock prediction history record.",
      modelVersion: "mock-v0",
      sourceInfluence: { mockSourceWeight: 0.5 },
      isMock: true
    }
  });

  await prisma.teamRanking.create({
    data: {
      teamId: metroTeam.id,
      sportId: football.id,
      sourceId: source.id,
      rankingType: "portal",
      season: "2026",
      rank: 1,
      previousRank: 3,
      rankingScore: "91.250",
      portalGrade: "A",
      commits: 1,
      losses: 0,
      projectedImpactScore: 91,
      isMock: true
    }
  });

  await prisma.playerRanking.create({
    data: {
      playerId: player.id,
      sportId: football.id,
      sourceId: source.id,
      rankingType: "portal",
      season: "2026",
      rank: 12,
      rankingScore: "91.200",
      stars: 4,
      isMock: true
    }
  });

  const coach = await prisma.coach.create({
    data: {
      firstName: "Avery",
      lastName: "Stone",
      displayName: "Avery Stone",
      slug: "avery-stone",
      role: "Mock position coach",
      isMock: true
    }
  });

  await prisma.coachTenure.create({
    data: {
      coachId: coach.id,
      schoolId: metro.id,
      teamId: metroTeam.id,
      title: "Mock QB Coach",
      startDate: new Date("2025-01-01T00:00:00.000Z"),
      isCurrent: true,
      isMock: true
    }
  });

  await prisma.recruitingRelationship.create({
    data: {
      playerId: player.id,
      coachId: coach.id,
      schoolId: metro.id,
      relationshipType: "mock_recruiter",
      strengthScore: 50,
      sourceId: source.id,
      isMock: true
    }
  });

  const recruitingClass = await prisma.recruitingClass.create({
    data: {
      teamId: metroTeam.id,
      year: 2026,
      label: "Mock 2026 Class",
      ranking: 25,
      score: "82.400",
      isMock: true
    }
  });

  await prisma.recruitingClassPlayer.create({
    data: {
      recruitingClassId: recruitingClass.id,
      playerId: player.id,
      status: "ESTIMATED",
      rating: "88.50",
      isMock: true
    }
  });

  await prisma.scholarshipCount.create({
    data: {
      schoolId: metro.id,
      teamId: metroTeam.id,
      season: "2026",
      totalAllowed: 85,
      totalUsed: 81,
      projectedOpen: 4,
      isMock: true
    }
  });

  await prisma.teamNeed.create({
    data: {
      teamId: metroTeam.id,
      positionId: edge.id,
      season: "2026",
      priority: "HIGH",
      needScore: 82,
      notes: "Mock roster need placeholder.",
      isMock: true
    }
  });

  await prisma.timelineEvent.create({
    data: {
      eventType: "PORTAL_ENTRY",
      subjectType: "PLAYER",
      subjectId: player.id,
      playerId: player.id,
      teamId: lakefrontTeam.id,
      claimId: claim.id,
      title: "Mock portal entry",
      detail: "Fictional timeline event for seed validation.",
      occurredAt: now,
      confidenceLevel: "MEDIUM",
      isMock: true
    }
  });

  const admin = await prisma.user.create({
    data: {
      email: "mock-admin@portalpulse.example",
      name: "Mock Admin",
      role: "ADMIN",
      isMock: true
    }
  });

  await prisma.adminReviewItem.create({
    data: {
      claimId: claim.id,
      assignedToId: admin.id,
      category: "source_verification",
      priority: "medium",
      status: "OPEN",
      notes: "Mock review item for seed validation.",
      isMock: true
    }
  });

  await prisma.auditLog.create({
    data: {
      userId: admin.id,
      action: "MOCK_SEED_CREATED",
      entityType: "Claim",
      entityId: claim.id,
      metadata: { isMock: true },
      isMock: true
    }
  });

  const watchlist = await prisma.watchlist.create({
    data: {
      userId: admin.id,
      name: "Mock Portal Watchlist",
      isDefault: true,
      isMock: true
    }
  });

  const alert = await prisma.alert.create({
    data: {
      userId: admin.id,
      watchlistId: watchlist.id,
      alertType: "PLAYER",
      subjectType: "PLAYER",
      subjectId: player.id,
      threshold: { confidenceScoreAtLeast: 60 },
      enabled: true,
      isMock: true
    }
  });

  await prisma.notification.create({
    data: {
      userId: admin.id,
      alertId: alert.id,
      channel: "IN_APP",
      status: "QUEUED",
      title: "Mock player alert",
      body: "Fictional alert generated by seed data.",
      isMock: true
    }
  });

  await prisma.historicalSnapshot.create({
    data: {
      snapshotType: "PLAYER",
      subjectType: "PLAYER",
      subjectId: player.id,
      snapshotDate: now,
      data: {
        displayName: player.displayName,
        transferStatus: "ENTERED",
        isMock: true
      },
      sourceId: source.id,
      isMock: true
    }
  });

  console.log("Seeded fictional Portal Pulse enterprise data.");
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
