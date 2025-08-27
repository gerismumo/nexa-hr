import { Button, Card, Text, Group, TextInput, Grid } from "@mantine/core";
import { Search, Filter } from "lucide-react";
import ListCard from "./ListCard";
import type { ICandidateFeedback } from "../../../types/analysis";
import { useInterviewStore } from "../../../stores/useInterviewStore";
const List = ({ data }: { data: ICandidateFeedback[] }) => {
  const { searchTerm, setSearchTerm } = useInterviewStore();

  if (!data || data.length === 0) {
    return (
      <Card withBorder radius="md" shadow="sm" p="lg">
        <Text size="sm" c="dimmed">
          No interviews available.
        </Text>
      </Card>
    );
  }

  const filteredInterviews = data.filter((interview: ICandidateFeedback) =>
    interview.summary.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Card
      withBorder
      radius="md"
      shadow="sm"
      p={{ base: "xs", sm: "md", md: "lg" }}
    >
      <Group justify="space-between" mb="md">
        <div>
          <Text size="sm" c="dimmed">
            Manage and review your interview recordings
          </Text>
        </div>
        <Button variant="light" leftSection={<Filter size={16} />}>
          Filter
        </Button>
      </Group>

      <TextInput
        placeholder="Search interviews..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.currentTarget.value)}
        leftSection={<Search size={16} />}
        mb="md"
      />

      <Grid gutter="sm">
        {filteredInterviews.map((interview, index: number) => (
          <Grid.Col span={{ base: 12, md: 6 }} key={index}>
            <ListCard {...interview} key={index} />
          </Grid.Col>
        ))}
      </Grid>
    </Card>
  );
};

export default List;
