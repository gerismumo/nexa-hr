import { Card, Text, Title, Group, Badge, Skeleton, Flex } from "@mantine/core";

const AnalysisView = ({
  summary,
  sentiment,
  keywords,
}: {
  summary: string;
  sentiment: string;
  keywords: string[];
}) => {
  return (
    <Card shadow="xs" p="md" withBorder>
      <Title order={3}>AI Analysis</Title>
      <Text size="sm" mt="xs">
        {summary || <Skeleton height={60} />}
      </Text>
      <Flex direction="column" mt="md" gap="xs">
        <Badge
          color={
            sentiment === "positive"
              ? "green"
              : sentiment === "negative"
              ? "red"
              : "gray"
          }
        >
          {sentiment}
        </Badge>
        <Flex direction="column" gap="xs">
          <Text size="md" fw={500}>
            Keywords
          </Text>
          <Group>
            {keywords.map((k) => (
              <Badge key={k} variant="outline">
                {k}
              </Badge>
            ))}
          </Group>
        </Flex>
      </Flex>
    </Card>
  );
};

export default AnalysisView;
