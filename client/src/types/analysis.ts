export type InterviewQuestion = {
  q: string;
  a: string;
};

export interface ICandidateFeedback {
  id: number | string;
  summary: string;
  sentiment: string;
  keywords: string[];
  questions: InterviewQuestion[];
}
