export type LegalBlock = {
  heading?: string;
  paragraphs?: string[];
  list?: string[];
  listIntro?: string;
};

export type LegalSection = {
  id: string;
  title: string;
  blocks: LegalBlock[];
};

export type LegalDocumentContent = {
  title: string;
  intro: string[];
  sections: LegalSection[];
};
