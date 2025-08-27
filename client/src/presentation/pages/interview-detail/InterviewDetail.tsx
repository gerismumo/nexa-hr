import { useParams } from "react-router-dom";

import { Text, Title, Group, Stack } from "@mantine/core";
import type { ICombinedCandidateFeedback } from "../../../types/combined";
import data from "../../../mockdata/combined_data.json";
import AudioPlayer from "./AudioPlayer";
import AnalysisView from "./AnalysisView";
import { TranscriptView } from "./TranscriptView";

const mockData: ICombinedCandidateFeedback[] = data;
const InterviewDetail = () => {
  const { id } = useParams();

  const feedback = mockData[0];
  return (
    <Stack gap="lg">
      <div>
        <Title order={2}>Interview Candidate #{feedback.id}</Title>
        <Text size="sm" color="dimmed">
          {feedback.transcript.language} ·{" "}
          {Math.round(feedback.transcript.duration_sec)}s
        </Text>
      </div>
      <Group align="flex-start" grow>
        <Stack gap="lg" style={{ flex: 1 }}>
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
        <TranscriptView transcript={feedback.transcript.transcript} />
      </Group>
    </Stack>
  );
};

export default InterviewDetail;
