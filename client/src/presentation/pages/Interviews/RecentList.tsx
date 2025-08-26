import {
  Button,
  Card,
  Text,
  Title,
  Group,
  Stack,
  TextInput,
} from "@mantine/core";
import { Search, Filter } from "lucide-react";

import ListCard from "./ListCard";
import type { ICandidateFeedback } from "../../../types/analysis";
import { useInterviewStore } from "../../../stores/useInterviewStore";
const RecentList = ({ data }: { data: ICandidateFeedback[] }) => {
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

  const filteredInterviews = data.filter(
    (interview: ICandidateFeedback) =>
      interview.summary
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) 
  );

  return (
    <Card withBorder radius="md" shadow="sm" p="lg">
      <Group justify="space-between" mb="md">
        <div>
          <Title order={4}>Recent Interviews</Title>
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

      <Stack>
        {filteredInterviews.map((interview: ICandidateFeedback, index: number) => (
          <ListCard {...interview} key={index} />
        ))}
      </Stack>
    </Card>
  );
};

export default RecentList;
