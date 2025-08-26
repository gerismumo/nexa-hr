import {
  Card,
  Text,
  Badge,
  Group,
  Stack,
  Avatar,
  ActionIcon,
  Flex,
  Button,
} from "@mantine/core";
import { Play, FileAudio } from "lucide-react";
import type { ICandidateFeedback } from "../../../types/analysis";

const ListCard = ({ summary, sentiment, keywords }: ICandidateFeedback) => {
  const getStatusColor = (status: ICandidateFeedback["sentiment"]) => {
    switch (status) {
      case "positive":
        return "green";
      case "negative":
        return "red";
      case "neutral":
        return "yellow";
      default:
        return "gray";
    }
  };

  return (
    <Card withBorder p="md" radius="md" shadow="sm">
      <Group justify="space-between" align="flex-start" wrap="wrap">
        <Group align="flex-start" wrap="nowrap">
          <Avatar color="blue" radius="xl" size="lg">
            <FileAudio size={18} />
          </Avatar>
          <Stack gap={10} maw={{ base: "100%", sm: "auto" }}>
            <Text fw={400} size="sm" className="line-clamp-1">
              {summary}
            </Text>
            <Group gap="xs" wrap="wrap">
              {keywords.map((k, idx) => (
                <Badge key={idx} variant="outline" size="sm">
                  {k}
                </Badge>
              ))}
            </Group>
            <Button variant="light" size="xs" mt={4}>
              View more
            </Button>
          </Stack>
        </Group>
        <Flex
          direction="column"
          gap={{ base: 0, xs: "xs" }}
          mt={{ base: "sm", sm: 0 }}
          align="flex-end"
        >
          <Group gap="xs">
            <Badge color={getStatusColor(sentiment)} variant="outline">
              {sentiment}
            </Badge>
            <ActionIcon variant="subtle" size="md">
              <Play size={16} />
            </ActionIcon>
          </Group>
        </Flex>
      </Group>
    </Card>
  );
};

export default ListCard;
