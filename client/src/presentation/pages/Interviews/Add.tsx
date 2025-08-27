import { useRef, useState } from "react";
import { Button, Card, Text, Title, Stack } from "@mantine/core";
import { Upload } from "lucide-react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { interviewService } from "../../../application/usecases/interviewUseCase";
import toast from "react-hot-toast";

const AddInterviewSchema = Yup.object().shape({
  file: Yup.mixed<File>()
    .required("File is required")
    .test("fileType", "Only MP3, MP4, WAV are allowed", (value) => {
      if (!value) return false;
      const file = value as File;
      const validTypes = ["audio/mpeg", "audio/wav", "video/mp4"];
      return validTypes.includes(file.type);
    }),
});

const Add = () => {
  const [dragActive, setDragActive] = useState(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const formik = useFormik({
    initialValues: {
      file: null as File | null,
    },
    validationSchema: AddInterviewSchema,
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      try {
        const res: any = await interviewService.upload(values.file!);
        setSubmitting(true);
        if (res.success) {
          toast.success("uploaded successful");
          resetForm();
          if (fileInputRef.current) {
            fileInputRef.current.value = "";
          }
        } else {
          toast.error(res.message);
        }
      } catch {
        setSubmitting(false);
      } finally {
        setSubmitting(false);
      }
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
                ref={fileInputRef}
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
          <Button
            loading={formik.isSubmitting}
            disabled={formik.isSubmitting}
            type="submit"
          >
            Submit
          </Button>
        </Stack>
      </form>
    </Card>
  );
};

export default Add;
