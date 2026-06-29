export type ParsedSourceDocument = {
  sourceId: string;
  title?: string;
  text: string;
  publishedAt?: string;
};

export const sourceParser = {
  async parseSourceText(_sourceUrl: string): Promise<ParsedSourceDocument | null> {
    // TODO: Parse only compliant, approved, publicly accessible source text after compliance checks pass.
    return null;
  }
};
