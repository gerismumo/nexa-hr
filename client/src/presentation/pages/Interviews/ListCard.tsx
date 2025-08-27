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
import { useInterviewStore } from "../../../stores/useInterviewStore";
import { HighlightText } from "../../components/HighlightText";
import { useNavigate } from "react-router-dom";
import { getStatusColor } from "../../../util/util";

const ListCard = ({ id, summary, sentiment, keywords }: ICandidateFeedback) => {
  const navigate = useNavigate();

  const { searchTerm } = useInterviewStore();

  return (
    <Card withBorder radius="md" shadow="sm" p={{base: "xs", sm: "md", md: "lg"}}>
      <Flex direction="column" gap="sm">
        <Flex justify="space-between" align="flex-start" gap={{base: "sm", sm: "md"}} >
          <Avatar
            size="lg"
            radius="xl"
            color="blue"
            variant="gradient"
            gradient={{ from: "indigo", to: "cyan" }}
          >
            <FileAudio size={20} />
          </Avatar>
          <Flex justify="space-between" align="flex-start" w="100%" gap={{base: "sm", sm: "md"}}>
            <Stack gap={6} flex={1} maw={{ base: "100%", sm: "70%" }}>
              <Text fw={500} size="sm" className="line-clamp-2">
                {HighlightText(summary, searchTerm)}
              </Text>
              <Group visibleFrom="sm" gap={6} wrap="wrap">
                {keywords.map((k, idx) => {
                  if (idx < 5) {
                    return (
                      <Badge
                        key={idx}
                        size="sm"
                        radius="sm"
                        variant="light"
                        color={
                          searchTerm &&
                          k.toLowerCase().includes(searchTerm.toLowerCase())
                            ? "yellow"
                            : "blue"
                        }
                      >
                        {HighlightText(k, searchTerm)}
                      </Badge>
                    );
                  }
                  return null;
                })}

                {keywords.length > 5 && (
                  <Badge
                    size="sm"
                    radius="sm"
                    variant="outline"
                    color="gray"
                    style={{ cursor: "pointer" }}
                    title={keywords
                      .slice(5)
                      .map((kw) => HighlightText(kw, searchTerm))
                      .join(", ")}
                  >
                    +{keywords.length - 5} more
                  </Badge>
                )}
              </Group>
              <Button
                visibleFrom="sm"
                variant="light"
                size="xs"
                mt={4}
                radius="sm"
                w="fit-content"
                onClick={() => navigate(`/dashboard/interviews/${id}`)}
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
        <Flex direction="column" gap="sm" hiddenFrom="sm">
          <Group gap={6} wrap="wrap">
            {keywords.map((k, idx) => {
              if (idx < 5) {
                return (
                  <Badge
                    key={idx}
                    size="sm"
                    radius="sm"
                    variant="light"
                    color={
                      searchTerm &&
                      k.toLowerCase().includes(searchTerm.toLowerCase())
                        ? "yellow"
                        : "blue"
                    }
                  >
                    {HighlightText(k, searchTerm)}
                  </Badge>
                );
              }
              return null;
            })}

            {keywords.length > 5 && (
              <Badge
                size="sm"
                radius="sm"
                variant="outline"
                color="gray"
                style={{ cursor: "pointer" }}
                title={keywords
                  .slice(5)
                  .map((kw) => HighlightText(kw, searchTerm))
                  .join(", ")}
              >
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
            onClick={() => navigate(`/dashboard/interviews/${id}`)}
          >
            View more
          </Button>
        </Flex>
      </Flex>
    </Card>
  );
};

export default ListCard;
