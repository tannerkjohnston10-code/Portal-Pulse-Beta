export const networkCommentService = {
  getCommentsForSubject(subjectId: string) {
    return {
      subjectId,
      comments: [
        {
          id: "mock-comment-evidence",
          author: "Mock Analyst",
          body: "Mock comment: please attach stronger evidence before increasing confidence.",
          evidenceFirst: true,
          isMock: true as const
        }
      ],
      disclaimer: "Comments are placeholders. Portal Pulse Network is not a message board or forum.",
      isMock: true as const
    };
  }
};
