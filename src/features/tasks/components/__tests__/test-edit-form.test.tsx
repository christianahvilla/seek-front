import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { TaskEditForm } from "../task-edit-form.component";
import { describe, expect, it, vi } from "vitest";

vi.mock("../../services/update-task.service", () => ({
  updateTaskService: vi.fn().mockResolvedValue({
    id: "1",
    title: "Edited Task",
    description: "Edited description",
    status: "in_progress",
  }),
}));
vi.mock("../../store/task.store", () => ({
  useTaskStore: () => ({
    tasks: [
      {
        id: "1",
        title: "Original Title",
        description: "Original Description",
        status: "todo",
      },
    ],
    updateTask: vi.fn(),
  }),
}));

const mockNavigate = vi.fn();
vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom");
  return {
    ...actual,
    useNavigate: () => mockNavigate,
  };
});

describe("TaskEditForm", () => {
  it("renders prefilled form and edits task", async () => {
    render(<TaskEditForm taskId="1" />);

    expect(screen.getByDisplayValue("Original Title")).toBeInTheDocument();
    expect(
      screen.getByDisplayValue("Original Description")
    ).toBeInTheDocument();

    fireEvent.change(screen.getByLabelText(/title/i), {
      target: { value: "Edited Task" },
    });

    fireEvent.click(screen.getByRole("button", { name: /save/i }));

    await waitFor(() => {
      expect(mockNavigate).toHaveBeenCalledWith("/dashboard");
    });
  });
});
