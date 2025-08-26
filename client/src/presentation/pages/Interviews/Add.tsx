import { useState } from "react";
import {
  Button,
  Card,
  Text,
  Title,
  Stack,
  TextInput,
  Group,
} from "@mantine/core";
import { DateInput } from "@mantine/dates";
import { Upload } from "lucide-react";
import { useFormik } from "formik";
import * as Yup from "yup";

const AddInterviewSchema = Yup.object().shape({
  name: Yup.string().required("Interviewee name is required"),
  date: Yup.date().required("Date of interview is required"),
  file: Yup.mixed<File>()
    .required("File is required")
    .test("fileType", "Only MP3, MP4, WAV are allowed", (value) => {
      if (!value) return false;
      const file = value as File;
      const validTypes = ["audio/mpeg", "audio/wav", "video/mp4"];
      return validTypes.includes(file.type);
    })
    .test("fileSize", "File size too large (max 500MB)", (value) => {
      if (!value) return false;
      const file = value as File;
      return file.size <= 500 * 1024 * 1024;
    }),
});

const Add = () => {
  const [dragActive, setDragActive] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: "",
      date: null as Date | null,
      file: null as File | null,
    },
    validationSchema: AddInterviewSchema,
    onSubmit: (values) => {
      console.log("Form submitted:", values);
    },
  });

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
    const file = e.dataTransfer.files[0];
    if (file) {
      formik.setFieldValue("file", file);
    }
  };

  return (
    <Card withBorder radius="md" shadow="sm" p="lg">
      <Title order={4} mb="xs">
        Upload Interview
      </Title>
      <Text size="sm" c="dimmed" mb="md">
        Upload audio or video files for transcription and analysis
      </Text>

      <form onSubmit={formik.handleSubmit}>
        <Stack gap="md">
          <TextInput
            label="Interviewee Name"
            placeholder="Enter interviewee name"
            {...formik.getFieldProps("name")}
            error={formik.touched.name && formik.errors.name}
          />
          <DateInput
            label="Date of Interview"
            placeholder="Pick a date"
            value={formik.values.date}
            onChange={(val) => formik.setFieldValue("date", val)}
            error={formik.touched.date && formik.errors.date}
          />
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
            <Button
              fullWidth
              component="label"
              leftSection={<Upload size={16} />}
            >
              Choose File
              <input
                type="file"
                hidden
                accept="audio/mpeg, audio/wav, video/mp4"
                onChange={(e) => {
                  if (e.currentTarget.files && e.currentTarget.files[0]) {
                    formik.setFieldValue("file", e.currentTarget.files[0]);
                  }
                }}
              />
            </Button>
            {formik.values.file && (
              <Text size="sm" mt="xs">
                Selected: {formik.values.file.name}
              </Text>
            )}
            {formik.touched.file && formik.errors.file && (
              <Text size="xs" c="red">
                {formik.errors.file as string}
              </Text>
            )}
          </Stack>
          <Button type="submit">Submit</Button>
        </Stack>
      </form>
    </Card>
  );
};

export default Add;
