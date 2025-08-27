import {
  Card,
  Text,
  Title,
  Group,
  Badge,
  Skeleton,
  Flex,
  Divider,
  Accordion,
} from "@mantine/core";
import type { InterviewQuestion } from "../../../types/analysis";

const AnalysisView = ({
  summary,
  sentiment,
  keywords,
  questions,
}: {
  summary: string;
  sentiment: string;
  keywords: string[];
  questions: InterviewQuestion[];
}) => {
  return (
    <Card shadow="xs" p="md" withBorder>
      <Title order={3}>AI Analysis</Title>
      <Text size="sm" mt="xs">
        {summary || <Skeleton height={60} />}
      </Text>
      <Flex direction="column" mt="md" gap="md">
        <Badge
          size="lg"
          radius="sm"
          color={
            sentiment === "positive"
              ? "green"
              : sentiment === "negative"
              ? "red"
              : "gray"
          }
          variant="filled"
        >
          {sentiment}
        </Badge>
        <Flex direction="column" gap="xs">
          <Text size="md" fw={600}>
            Keywords
          </Text>
          <Group>
            {keywords.map((k) => (
              <Badge key={k} variant="outline" radius="sm">
                {k}
              </Badge>
            ))}
          </Group>
        </Flex>
      </Flex>
      <Divider my="lg" />
      <Flex direction="column" gap="sm">
        <Text size="lg" fw={700}>
          Interview Questions
        </Text>
        <Accordion multiple>
          {questions.map((q, idx) => (
            <Accordion.Item key={idx} value={`q-${idx}`}>
              <Accordion.Control>
                <Text size="sm" fw={600} c="blue.6">
                  {q.q}
                </Text>
              </Accordion.Control>
              <Accordion.Panel>
                <Text size="sm" mt="xs" c="dimmed">
                  {q.a}
                </Text>
              </Accordion.Panel>
            </Accordion.Item>
          ))}
        </Accordion>
      </Flex>
    </Card>
  );
};

export default AnalysisView;
