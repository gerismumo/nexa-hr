import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL!;

console.log("Apiurl", API_URL);

export const http = axios.create({
  baseURL: `${API_URL}/api`,
  headers: {
    "Content-Type": "application/json",
  },
});
