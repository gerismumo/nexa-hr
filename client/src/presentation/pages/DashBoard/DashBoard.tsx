import { Title, Group, Grid, Box, Flex } from "@mantine/core";
import { stats } from "../../../mockdata/dashboardData";
import StatsCard from "./StatsCard";
import RecentList from "../Interviews/RecentList";
import { mockInterviews } from "../../../mockdata/interview";
import Add from "../Interviews/Add";
import ActionLayout from "../../components/ActionLayout";

export function Dashboard() {
  return (
    <Box py="md">
      <Group justify="space-between" mb="lg">
        <Title order={3}>HR Interview Analysis</Title>
        <Group></Group>
      </Group>
      <Grid mb="lg">
        {stats.map((stat, idx) => (
          <Grid.Col span={{ base: 6, md: 3 }}>
            <StatsCard {...stat} key={idx} />
          </Grid.Col>
        ))}
      </Grid>
      <Grid>
        <Grid.Col span={{ base: 12, md: 4 }}>
          <Box visibleFrom="sm">
            <Add />
          </Box>
          <Flex hiddenFrom="sm" justify="flex-end">
            <ActionLayout title="" btnText="Add Interview" size="lg">
              <Add />
            </ActionLayout>
          </Flex>
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 8 }}>
          <RecentList data={mockInterviews} />
        </Grid.Col>
      </Grid>
    </Box>
  );
}
