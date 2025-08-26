import { Card, Group, Text, Title } from "@mantine/core";
import type { IStat } from "../../../types/stat";

const StatsCard = ({ label, value, icon:Icon, info }: IStat) => {
  return (
    <Card withBorder radius="md" shadow="xs" p="md">
      <Group justify="space-between" mb="xs">
        <Text size="sm">{label}</Text>
        <Icon size={16} />
      </Group>
      <Title order={3}>{value}</Title>
      {info && (
        <Text size="xs" c="dimmed">
          {info}
        </Text>
      )}
    </Card>
  );
};

export default StatsCard;
