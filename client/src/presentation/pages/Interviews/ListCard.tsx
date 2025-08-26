import {
  Card,
  Text,
  Badge,
  Progress,
  Group,
  Stack,
  Avatar,
  ActionIcon,
} from "@mantine/core";

import { Play, FileAudio, MoreVertical } from "lucide-react";
import type { Interview } from "../../../types/interview";

const ListCard = ({
  id,
  candidateName,
  position,
  date,
  duration,
  status,
  transcriptProgress,
  analysisScore,
}: Interview) => {
  const getStatusColor = (status: Interview["status"]) => {
    switch (status) {
      case "completed":
        return "green";
      case "processing":
        return "yellow";
      case "pending":
        return "gray";
      default:
        return "gray";
    }
  };
  return (
    <Card withBorder key={id} p="md">
      <Group justify="space-between" align="flex-start">
        <Group>
          <Avatar color="blue" radius="xl">
            <FileAudio size={16} />
          </Avatar>
          <Stack gap={2}>
            <Group gap="xs">
              <Text fw={500}>{candidateName}</Text>
              <Badge color={getStatusColor(status)} variant="light">
                {status}
              </Badge>
            </Group>
            <Text size="sm" c="dimmed">
              {position}
            </Text>
            <Group gap="lg" c="dimmed" fz="xs">
              <Text>{date}</Text>
              <Text>{duration}</Text>
              {analysisScore && (
                <Text c="blue" fw={500}>
                  Score: {analysisScore}%
                </Text>
              )}
            </Group>
          </Stack>
        </Group>

        <Group>
          {status === "processing" && (
            <Stack gap={2} w={100}>
              <Progress value={transcriptProgress} size="sm" />
              <Text size="xs" c="dimmed" ta="center">
                {transcriptProgress}%
              </Text>
            </Stack>
          )}
          <ActionIcon variant="subtle">
            <Play size={16} />
          </ActionIcon>
          <ActionIcon variant="subtle">
            <MoreVertical size={16} />
          </ActionIcon>
        </Group>
      </Group>
    </Card>
  );
};

export default ListCard;
