import { useParams } from "react-router-dom";

import { Text, Title, Group, Stack, Grid, Flex } from "@mantine/core";
import type { ICombinedCandidateFeedback } from "../../../types/combined";
import data from "../../../mockdata/combined_data.json";
import AudioPlayer from "./AudioPlayer";
import AnalysisView from "./AnalysisView";
import { TranscriptView } from "./TranscriptView";

const mockData: ICombinedCandidateFeedback[] = data;
const InterviewDetail = () => {
  const { id } = useParams<{ id: string }>();

  const numericId = id ? Number(id) : NaN;

  const feedback = mockData.find((f) => f.id === numericId);

  if (!feedback) {
    return <div>Interview not found.</div>;
  }

  return (
    <Stack gap="lg">
      <div>
        <Title order={2}>Interview Candidate</Title>
        <Text size="sm" color="dimmed">
          {feedback.transcript.language} ·{" "}
          {Math.round(feedback.transcript.duration_sec)}s
        </Text>
      </div>
      <Flex direction={{ base: "column", md: "row" }} gap="lg" wrap="wrap">
        <Stack
          gap="lg"
          style={{ minWidth: 280 }} 
          w={{ base: "100%", md: "30%" }}
        >
          <AudioPlayer
            url={feedback.transcript.audio_url}
            duration={feedback.transcript.duration_sec}
          />
          <AnalysisView
            summary={feedback.summary}
            sentiment={feedback.sentiment}
            keywords={feedback.keywords}
          />
        </Stack>
        <div style={{ flex: 1, width: "100%" }}>
          <TranscriptView transcript={feedback.transcript.transcript} />
        </div>
      </Flex>
    </Stack>
  );
};

export default InterviewDetail;
