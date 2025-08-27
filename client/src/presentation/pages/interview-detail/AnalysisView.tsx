import { Card, Text, Title, Group, Badge, Skeleton } from "@mantine/core";

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
    <Card shadow="sm" p="md">
      <Title order={4}>AI Analysis</Title>
      <Text size="sm" mt="xs">
        {summary || <Skeleton height={60} />}
      </Text>
      <Group mt="md" gap="xs">
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
        {keywords.map((k) => (
          <Badge key={k} variant="outline">
            {k}
          </Badge>
        ))}
      </Group>
    </Card>
  );
};

export default AnalysisView;
