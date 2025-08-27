import type { InterviewQuestion } from "./analysis";


export type TranscriptSegment = {
  start: number;  
  end: number;    
  text: string;
};

export type InterviewTranscript = {
  audio_url: string;
  language: string;
  duration_sec: number;
  transcript: TranscriptSegment[];
};

export interface ICombinedCandidateFeedback {
  id: number | string;
  summary: string;
  sentiment: string;
  keywords: string[];
  questions: InterviewQuestion[];
  transcript: InterviewTranscript;
}
