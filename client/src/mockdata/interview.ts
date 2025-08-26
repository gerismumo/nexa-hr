import type { Interview } from "../types/interview";

export const mockInterviews: Interview[] = [
  {
    id: "1",
    candidateName: "Sarah Johnson",
    position: "Senior Frontend Developer",
    date: "2024-01-15",
    duration: "45:30",
    status: "completed",
    transcriptProgress: 100,
    analysisScore: 85,
  },
  {
    id: "2",
    candidateName: "Michael Chen",
    position: "Product Manager",
    date: "2024-01-14",
    duration: "52:15",
    status: "processing",
    transcriptProgress: 75,
  },
  {
    id: "3",
    candidateName: "Emily Rodriguez",
    position: "UX Designer",
    date: "2024-01-13",
    duration: "38:45",
    status: "completed",
    transcriptProgress: 100,
    analysisScore: 92,
  },
  {
    id: "4",
    candidateName: "David Kim",
    position: "Backend Engineer",
    date: "2024-01-12",
    duration: "41:20",
    status: "pending",
    transcriptProgress: 0,
  },
];