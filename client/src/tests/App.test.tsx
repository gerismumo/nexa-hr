import { render, screen } from "@testing-library/react";
import { describe, test, expect, vi } from "vitest";
import App from "../App";
import LoginForm from "../presentation/pages/auth/Login";

vi.mock("../presentation/pages/auth/Login", () => ({
  default: () => <LoginForm />,
}));
vi.mock("../presentation/components/DashboardLayout", () => ({
  default: () => <div>Dashboard Layout</div>,
}));
vi.mock("../presentation/pages/DashBoard/DashBoard", () => ({
  default: () => <div>Dashboard Page</div>,
}));
vi.mock("../presentation/pages/Interviews/Interviews", () => ({
  default: () => <div>Interviews Page</div>,
}));
vi.mock("../presentation/pages/interview-detail/InterviewDetail", () => ({
  default: () => <div>Interview Detail Page</div>,
}));
vi.mock("../presentation/pages/NotFound", () => ({
  default: () => <div>404 Not Found</div>,
}));
vi.mock("../presentation/components/Loader", () => ({
  default: () => <div>Loading...</div>,
}));

describe("App routing", () => {
  test("renders Login page at /", async () => {
    window.history.pushState({}, "Test page", "/");
    render(<App />);
  expect(await screen.findByText("Login")).toBeInTheDocument();
  });

  test("renders Dashboard layout at /dashboard", async () => {
    window.history.pushState({}, "Test page", "/dashboard");
    render(<App />);
    expect(await screen.findByText("Dashboard Layout")).toBeInTheDocument();
  });

  test("renders NotFound page for unknown route", async () => {
    window.history.pushState({}, "Test page", "/random-nonexistent");
    render(<App />);
    expect(await screen.findByText("404 Not Found")).toBeInTheDocument();
  });
});
