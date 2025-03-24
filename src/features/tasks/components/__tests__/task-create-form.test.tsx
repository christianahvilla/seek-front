import { render, screen, fireEvent } from "@testing-library/react";
import { TaskCreateForm } from "../task-create-form.component";
import { describe, vi, expect, it } from "vitest";

vi.mock("../../store/task.store", () => ({
  useTaskStore: () => ({
    addTask: vi.fn(),
  }),
}));

const mockUsedNavigate = vi.fn();
vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual<typeof import("react-router-dom")>(
    "react-router-dom"
  );
  return {
    ...actual,
    useNavigate: () => mockUsedNavigate,
  };
});

describe("TaskCreateForm", () => {
  it("renders form fields", () => {
    render(<TaskCreateForm />);

    expect(screen.getByLabelText(/Title/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Description/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Status/i)).toBeInTheDocument();
  });

  it("should show error if submitting empty form", async () => {
    render(<TaskCreateForm />);

    fireEvent.click(screen.getByRole("button", { name: /create/i }));

    expect(await screen.findByText(/title is a required field/i)).toBeDefined();
  });
});
