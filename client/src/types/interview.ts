import type { ICombinedCandidateFeedback, TranscriptSegment } from "./combined";

export interface Interview {
  id: string;
  filename: string;
  original_name: string;
  file_size: number;
  file_path: string;
  upload_date: string;
  status: "uploaded" | "processing" | "completed" | "failed";
  transcript?: TranscriptSegment[];
  analysis?: ICombinedCandidateFeedback;
  created_at: string;
  updated_at: string;
}
