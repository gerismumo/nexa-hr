import type { ICandidateFeedback } from "../types/analysis";

export function formatTime(seconds: number) {
  if (isNaN(seconds)) return "0:00";
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
}

export const getStatusColor = (status: ICandidateFeedback["sentiment"]) => {
  switch (status) {
    case "positive":
      return "green";
    case "negative":
      return "red";
    case "neutral":
      return "yellow";
    default:
      return "gray";
  }
};
