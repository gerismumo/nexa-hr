import {
  Card,
  Text,
  Badge,
  Progress,
  Group,
  Stack,
  Avatar,
  ActionIcon,
  Box,
  Flex,
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
      <Group
        justify="space-between"
        align="flex-start"
        wrap="wrap"
      >
        <Group align="flex-start" wrap="nowrap">
          <Avatar color="blue" radius="xl" size="lg">
            <FileAudio size={18} />
          </Avatar>
          <Stack gap={4} maw={{ base: "100%", sm: "auto" }}>
            <Group gap="xs" wrap="wrap">
              <Text fw={500}>{candidateName}</Text>
              <Badge color={getStatusColor(status)} variant="light">
                {status}
              </Badge>
            </Group>
            <Text size="sm" c="dimmed">
              {position}
            </Text>
            <Group gap="lg" c="dimmed" fz="xs" wrap="wrap">
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
        <Flex direction="column" gap={{base:0, xs:"xs"}} mt={{ base: "sm", sm: 0 }} align="flex-end">
          {status === "processing" && (
            <Box w={{ base: "100%", xs: 120 }}>
              <Progress value={transcriptProgress} size="sm" />
              <Text size="xs" c="dimmed" ta="center" mt={2}>
                {transcriptProgress}%
              </Text>
            </Box>
          )}
          <Group gap="xs">
            <ActionIcon variant="subtle" size="md">
              <Play size={16} />
            </ActionIcon>
            <ActionIcon variant="subtle" size="md">
              <MoreVertical size={16} />
            </ActionIcon>
          </Group>
        </Flex>
      </Group>
    </Card>
  );
};

export default ListCard;
