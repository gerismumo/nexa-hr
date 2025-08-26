// const stats = [
//   { label: "Total Interviews", value: "150" },
//   { label: "Completed Interviews", value: "120" },
//   { label: "Pending Reviews", value: "30" },
//   { label: "Average Score", value: "85%" },
//   { label: "Positive Feedback", value: "90%" },
//   { label: "Negative Feedback", value: "10%" },
//   { label: "Average Duration", value: "25 mins" },
//   { label: "This week", value: "15" },
// ];

// import { Grid } from "@mantine/core";
// import StatsCard from "./StatsCard";

// const DashBoard = () => {
//   return (
//     <Grid>
//       {stats.map((stat, idx) => (
//         <Grid.Col key={idx} span={{ base: 6, sm: 4, md: 3 }}>
//           <StatsCard label={stat.label} value={stat.value} />
//         </Grid.Col>
//       ))}
//     </Grid>
//   );
// };

// export default DashBoard;

"use client";

import { useState } from "react";
import {
  Button,
  Card,
  Text,
  Title,
  Badge,
  Progress,
  Group,
  Stack,
  Grid,
  Container,
  TextInput,
  Avatar,
  Divider,
  ActionIcon,
  Box,
} from "@mantine/core";
import {
  Upload,
  Search,
  Play,
  Clock,
  FileAudio,
  BarChart3,
  Users,
  Calendar,
  Filter,
  MoreVertical,
  Download,
} from "lucide-react";
import { stats } from "../../../mockdata/dashboardData";
import StatsCard from "./StatsCard";

interface Interview {
  id: string;
  candidateName: string;
  position: string;
  date: string;
  duration: string;
  status: "completed" | "processing" | "pending";
  transcriptProgress: number;
  analysisScore?: number;
}

const mockInterviews: Interview[] = [
  {
    id: "1",
    candidateName: "Sarah Johnson",
    position: "Senior Frontend Developer",
    date: "2024-01-15",
    duration: "45:30",
    status: "completed",
    transcriptProgress: 100,
    analysisScore: 85,
  },
  {
    id: "2",
    candidateName: "Michael Chen",
    position: "Product Manager",
    date: "2024-01-14",
    duration: "52:15",
    status: "processing",
    transcriptProgress: 75,
  },
  {
    id: "3",
    candidateName: "Emily Rodriguez",
    position: "UX Designer",
    date: "2024-01-13",
    duration: "38:45",
    status: "completed",
    transcriptProgress: 100,
    analysisScore: 92,
  },
  {
    id: "4",
    candidateName: "David Kim",
    position: "Backend Engineer",
    date: "2024-01-12",
    duration: "41:20",
    status: "pending",
    transcriptProgress: 0,
  },
];

export function Dashboard() {
  const [searchTerm, setSearchTerm] = useState("");
  const [dragActive, setDragActive] = useState(false);

  const filteredInterviews = mockInterviews.filter(
    (interview) =>
      interview.candidateName
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      interview.position.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    console.log("Files dropped:", e.dataTransfer.files);
  };

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
          <Card withBorder radius="md" shadow="sm" p="lg">
            <Title order={4} mb="xs">
              Upload Interview
            </Title>
            <Text size="sm" c="dimmed" mb="md">
              Upload audio or video files for transcription and analysis
            </Text>

            <Stack
              align="center"
              justify="center"
              p="xl"
              style={{
                border: "2px dashed var(--mantine-color-gray-5)",
                borderRadius: "8px",
                background: dragActive
                  ? "var(--mantine-color-blue-light)"
                  : "transparent",
                cursor: "pointer",
              }}
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
            >
              <Upload size={36} />
              <Text size="sm">Drag & drop files or click to browse</Text>
              <Text size="xs" c="dimmed">
                Supports MP3, MP4, WAV up to 500MB
              </Text>
              <Button fullWidth leftSection={<Upload size={16} />}>
                Choose Files
              </Button>
            </Stack>
          </Card>
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 8 }}>
          <Card withBorder radius="md" shadow="sm" p="lg">
            <Group justify="space-between" mb="md">
              <div>
                <Title order={4}>Recent Interviews</Title>
                <Text size="sm" c="dimmed">
                  Manage and review your interview recordings
                </Text>
              </div>
              <Button variant="light" leftSection={<Filter size={16} />}>
                Filter
              </Button>
            </Group>

            <TextInput
              placeholder="Search interviews..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.currentTarget.value)}
              leftSection={<Search size={16} />}
              mb="md"
            />

            <Stack>
              {filteredInterviews.map((interview) => (
                <Card withBorder key={interview.id} p="md">
                  <Group justify="space-between" align="flex-start">
                    <Group>
                      <Avatar color="blue" radius="xl">
                        <FileAudio size={16} />
                      </Avatar>
                      <Stack gap={2}>
                        <Group gap="xs">
                          <Text fw={500}>{interview.candidateName}</Text>
                          <Badge
                            color={getStatusColor(interview.status)}
                            variant="light"
                          >
                            {interview.status}
                          </Badge>
                        </Group>
                        <Text size="sm" c="dimmed">
                          {interview.position}
                        </Text>
                        <Group gap="lg" c="dimmed" fz="xs">
                          <Text>{interview.date}</Text>
                          <Text>{interview.duration}</Text>
                          {interview.analysisScore && (
                            <Text c="blue" fw={500}>
                              Score: {interview.analysisScore}%
                            </Text>
                          )}
                        </Group>
                      </Stack>
                    </Group>

                    <Group>
                      {interview.status === "processing" && (
                        <Stack gap={2} w={100}>
                          <Progress
                            value={interview.transcriptProgress}
                            size="sm"
                          />
                          <Text size="xs" c="dimmed" ta="center">
                            {interview.transcriptProgress}%
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
              ))}
            </Stack>
          </Card>
        </Grid.Col>
      </Grid>
    </Box>
  );
}
