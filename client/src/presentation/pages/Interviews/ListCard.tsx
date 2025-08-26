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
    <Card withBorder radius="sm" shadow="xs" p="lg">
      <Flex justify="space-between" align="flex-start">
        <Flex direction="column">
          <Flex gap="md" justify="center"  wrap="nowrap">
            <Avatar
              size="lg"
              radius="xl"
              color="blue"
              variant="gradient"
              gradient={{ from: "indigo", to: "cyan" }}
            >
              <FileAudio size={20} />
            </Avatar>
            <Flex gap="md" wrap={{base: "wrap", sm: "nowrap"}} justify="space-between" w="100%" >
              <Stack gap={8} maw={{ base: "100%", sm: "auto" }}>
                <Text fw={400} size="sm" className="line-clamp-1">
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
                </Group>
              </Stack>
              <Flex
                direction="column"
                gap="xs"
                mt={{ base: "md", sm: 0 }}
                align="end"
                justify="center"
              >
                <Group>
<Badge color={getStatusColor(sentiment)} w="100%" variant="outline">
                    {sentiment}
                  </Badge>
                </Group>
                  
                  <ActionIcon
                    variant="filled"
                    color="blue"
                    radius="xl"
                    size="lg"
                    aria-label="Play audio"
                  >
                    <Play size={16} />
                  </ActionIcon>
            
              </Flex>
            </Flex>
          </Flex>
          <Button variant="subtle" size="xs" mt={6} radius="sm">
            View more
          </Button>
        </Flex>
      </Flex>
    </Card>
  );
};

export default ListCard;
