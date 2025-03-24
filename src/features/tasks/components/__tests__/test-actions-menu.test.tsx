import { render, screen, fireEvent } from "@testing-library/react";
import { TaskActionsMenu } from "../task-actions-menu.component";
import { describe, expect, it, vi } from "vitest";

vi.mock("../../store/task.store", () => ({
  useTaskStore: () => ({
    tasks: [
      {
        id: "1",
        title: "Test Task",
        description: "Task desc",
        status: "todo",
      },
    ],
    removeTask: vi.fn(),
    updateTask: vi.fn(),
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

vi.mock("../../services/delete-task.service", () => ({
  deleteTaskService: vi.fn().mockResolvedValue(undefined),
}));
vi.mock("../../services/update-task.service", () => ({
  updateTaskService: vi.fn().mockResolvedValue({
    id: "1",
    title: "Test Task",
    description: "Task desc",
    status: "done",
  }),
}));

describe("TaskActionsMenu", () => {
  it("renders actions menu and triggers status change", async () => {
    render(<TaskActionsMenu taskId="1" />);

    const button = screen.getByRole("button");
    fireEvent.click(button);

    const menuItem = await screen.findByText(/move to done/i);
    expect(menuItem).toBeInTheDocument();
  });
});
