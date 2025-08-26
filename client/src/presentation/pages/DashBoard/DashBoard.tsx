import { Title, Group, Grid, Box } from "@mantine/core";
import { stats } from "../../../mockdata/dashboardData";
import StatsCard from "./StatsCard";
import RecentList from "../Interviews/RecentList";
import { mockInterviews } from "../../../mockdata/interview";
import Add from "../Interviews/Add";

export function Dashboard() {
  return (
    <Box py="md">
      <Group justify="space-between" mb="lg">
        <Title order={3}>HR Interview Analysis</Title>
        <Group></Group>
      </Group>
      <Grid mb="lg">
        {stats.map((stat, idx) => (
          <Grid.Col span={{ base: 12, sm: 6, md: 3 }}>
            <StatsCard {...stat} key={idx} />
          </Grid.Col>
        ))}
      </Grid>
      <Grid>
        <Grid.Col span={{ base: 12, md: 4 }}>
          <Add />
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 8 }}>
          <RecentList data={mockInterviews} />
        </Grid.Col>
      </Grid>
    </Box>
  );
}
