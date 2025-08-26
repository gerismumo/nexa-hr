import { useState } from "react";
import { Button, Card, Text, Title, Stack } from "@mantine/core";
import { Upload } from "lucide-react";

const Add = () => {
  const [dragActive, setDragActive] = useState(false);

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
  return (
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
  );
};

export default Add;
