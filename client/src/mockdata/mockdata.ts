export interface TranscriptLine {
  id: string;
  start: number; 
  end: number; 
  speaker: string;
  text: string;
}

export const sampleTranscript: TranscriptLine[] = [
  {
    id: "1",
    start: 0,
    end: 5,
    speaker: "Interviewer",
    text: "Welcome, thanks for joining the interview today.",
  },
  {
    id: "2",
    start: 5,
    end: 10,
    speaker: "Candidate",
    text: "Thank you for having me. I am excited to be here.",
  },
  {
    id: "3",
    start: 10,
    end: 18,
    speaker: "Interviewer",
    text: "Can you briefly introduce yourself and tell us about your background?",
  },
  {
    id: "4",
    start: 18,
    end: 28,
    speaker: "Candidate",
    text: "Sure. I recently graduated with a degree in Computer Science and have been working on full-stack web development projects.",
  },
  {
    id: "5",
    start: 28,
    end: 36,
    speaker: "Interviewer",
    text: "What would you say are your strongest technical skills?",
  },
  {
    id: "6",
    start: 36,
    end: 44,
    speaker: "Candidate",
    text: "I am strongest in React, TypeScript, and Node.js, with some experience in cloud deployments.",
  },
];

export interface SentimentBadge {
  lineId: string;
  sentiment: "positive" | "neutral" | "negative";
}

export interface AnalysisResult {
  summary: string;
  keywords: string[];
  sentiment: SentimentBadge[];
  qna: { question: string; answer: string }[];
}

export const sampleAnalysis: AnalysisResult = {
  summary:
    "The candidate introduced themselves confidently, highlighting their background in computer science and experience with full-stack development. They emphasized their strengths in React, TypeScript, and Node.js.",
  keywords: ["React", "TypeScript", "Node.js", "Computer Science", "Full-stack"],
  sentiment: [
    { lineId: "2", sentiment: "positive" },
    { lineId: "4", sentiment: "neutral" },
    { lineId: "6", sentiment: "positive" },
  ],
  qna: [
    {
      question: "Can you briefly introduce yourself?",
      answer:
        "The candidate graduated in Computer Science and worked on full-stack projects.",
    },
    {
      question: "What are your strongest technical skills?",
      answer: "React, TypeScript, Node.js, and some cloud experience.",
    },
  ],
};

export interface InterviewMeta {
  id: string;
  filename: string;
  uploadedAt: string;
  duration: number; 
  status: "processing" | "completed" | "error";
}

export const mockInterviews: InterviewMeta[] = [
  {
    id: "int1",
    filename: "interview_candidate1.mp3",
    uploadedAt: "2025-08-25T10:30:00Z",
    duration: 300,
    status: "completed",
  },
  {
    id: "int2",
    filename: "interview_candidate2.mp4",
    uploadedAt: "2025-08-25T11:00:00Z",
    duration: 420,
    status: "processing",
  },
];
