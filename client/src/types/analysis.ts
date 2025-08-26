type InterviewQuestion = {
  q: string;
  a: string;
};

export interface ICandidateFeedback {
  summary: string;
  sentiment: string;
  keywords: string[];
  questions: InterviewQuestion[];
};


