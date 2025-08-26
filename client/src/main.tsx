import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";
import "@mantine/carousel/styles.css";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

import { MantineProvider } from "@mantine/core";
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MantineProvider>
      <Toaster position="top-right" reverseOrder={false} />
      <App />
    </MantineProvider>
  </StrictMode>
);
