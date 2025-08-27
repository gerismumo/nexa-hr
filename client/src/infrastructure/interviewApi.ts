import type { Interview } from "../types/interview";
import { http } from "./http";

export const interviewApi = {
  getAll: () => http.get<Interview[]>("/interviews"),
  getById: (id: string) => http.get<Interview>(`/interviews/${id}`),
  upload: (file: File) => {
    const formData = new FormData();
    formData.append("file", file);
    return http.post<Interview>("/interviews/upload", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
  },
  transcribe: (id: string) =>
    http.post<{ ok: boolean; status: string }>(`/interviews/${id}/transcribe`),
  status: (id: string) =>
    http.get<{ status: string }>(`/interviews/${id}/status`),
};
