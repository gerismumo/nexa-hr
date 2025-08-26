
import { create } from "zustand";

interface InterviewStore {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

export const useInterviewStore = create<InterviewStore>((set) => ({
  searchTerm: "",
  setSearchTerm: (term) => set({ searchTerm: term }),
}));
