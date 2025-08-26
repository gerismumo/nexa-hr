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
    <Card withBorder radius="md" shadow="sm" p="lg">
      <Flex justify="space-between" align="flex-start" gap="md">
        <Avatar
          size="lg"
          radius="xl"
          color="blue"
          variant="gradient"
          gradient={{ from: "indigo", to: "cyan" }}
        >
          <FileAudio size={20} />
        </Avatar>
        <Flex justify="space-between" align="flex-start" w="100%" gap="md">
          <Stack gap={6} flex={1} maw={{ base: "100%", sm: "70%" }}>
            <Text fw={500} size="sm" className="line-clamp-2">
              {summary}
            </Text>
            <Group gap={6} wrap="wrap">
              {keywords.slice(0, 5).map((k, idx) => (
                <Badge
                  key={idx}
                  size="sm"
                  radius="sm"
                  variant="light"
                  color="blue"
                >
                  {k}
                </Badge>
              ))}
              {keywords.length > 5 && (
                <Badge size="sm" radius="sm" variant="outline" color="gray">
                  +{keywords.length - 5} more
                </Badge>
              )}
            </Group>
            <Button
              variant="light"
              size="xs"
              mt={4}
              radius="sm"
              w="fit-content"
            >
              View more
            </Button>
          </Stack>
          <Stack align="end" gap="sm">
            <Badge color={getStatusColor(sentiment)} variant="outline">
              {sentiment.charAt(0).toUpperCase() + sentiment.slice(1)}
            </Badge>
            <ActionIcon
              variant="filled"
              color="blue"
              radius="xl"
              size="lg"
              aria-label="Play audio"
            >
              <Play size={16} />
            </ActionIcon>
          </Stack>
        </Flex>
      </Flex>
    </Card>
  );
};

export default ListCard;
