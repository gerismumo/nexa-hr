export interface Interview {
  id: string;
  candidateName: string;
  position: string;
  date: string;
  duration: string;
  status: "completed" | "processing" | "pending";
  transcriptProgress: number;
  analysisScore?: number;
}