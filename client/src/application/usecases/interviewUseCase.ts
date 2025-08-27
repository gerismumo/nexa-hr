import { apiHandler } from "../../infrastructure/apiHandler";
import { interviewApi } from "../../infrastructure/interviewApi";
import type { Interview } from "../../types/interview";

export const interviewService = {
  getAll: () => apiHandler<Interview[]>(interviewApi.getAll()),
  getById: (id: string) => apiHandler<Interview>(interviewApi.getById(id)),
  upload: (file: File) => apiHandler<Interview>(interviewApi.upload(file)),
  transcribe: (id: string) =>
    apiHandler<{ ok: boolean; status: string }>(interviewApi.transcribe(id)),
  status: (id: string) =>
    apiHandler<{ status: string }>(interviewApi.status(id)),
} as const;
