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
import type { Interview } from "../../../types/interview";
import { useState } from "react";
import ListCard from "./ListCard";
const List = ({ data }: { data: Interview[] }) => {
  const [searchTerm, setSearchTerm] = useState("");

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
    (interview: Interview) =>
      interview.candidateName
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      interview.position.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Card withBorder radius="md" shadow="sm" p="lg">
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

      <Stack>
        {filteredInterviews.map((interview: Interview, index: number) => (
          <ListCard {...interview} key={index} />
        ))}
      </Stack>
    </Card>
  );
};

export default List;
