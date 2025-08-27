import { useState } from "react";
import {
  Card,
  Text,
  Button,
  ScrollArea,
  TextInput,
  Popover,
  Stack,
  Flex,
} from "@mantine/core";
import type { TranscriptSegment } from "../../../types/combined";
import { IconTag, IconSearch } from "@tabler/icons-react";
import { HighlightText } from "../../components/HighlightText";
import { formatTime } from "../../../util/util";
export const TranscriptView = ({
  transcript,
}: {
  transcript: TranscriptSegment[];
}) => {
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState("");

  const handleSelect = () => {
    const sel = window.getSelection();
    if (sel && sel.toString()) setSelected(sel.toString());
  };

  return (
    <Card shadow="sm" p="md" h={500} withBorder>
      <Flex justify="space-between" align="center" gap="sm">
        <TextInput
          leftSection={<IconSearch size={16} />}
          placeholder="Search transcript..."
          value={search}
          onChange={(e) => setSearch(e.currentTarget.value)}
          w="100%"
        />
        <Popover opened={!!selected} onClose={() => setSelected("")}>
          <Popover.Target>
            <Button w={100} leftSection={<IconTag size={16} />} disabled={!selected}>
              Tag
            </Button>
          </Popover.Target>
          <Popover.Dropdown>
            <Text size="sm" mb="xs">
              Tag selected text:
            </Text>
            <Text size="sm" mb="xs">
              "{selected}"
            </Text>
            <Button size="xs" fullWidth onClick={() => setSelected("")}>
              Confirm Tag
            </Button>
          </Popover.Dropdown>
        </Popover>
      </Flex>
      <ScrollArea style={{ height: 400 }} mt="md" onMouseUp={handleSelect}>
        <Stack gap="sm">
          {transcript
            .filter((seg) =>
              seg.text.toLowerCase().includes(search.toLowerCase())
            )
            .map((seg, i) => (
              <Card key={i} p="xs" withBorder>
                <Text size="sm">{HighlightText(seg.text, search)}</Text>
                <Text size="xs" c="dimmed">
                  {formatTime(seg.start)} - {formatTime(seg.end)}
                </Text>
              </Card>
            ))}
        </Stack>
      </ScrollArea>
    </Card>
  );
};
