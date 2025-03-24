import { getStatusLabel, getStatusColor } from "../task-status.helper";
import { TaskStatus } from "../../task.types";
import { describe, expect, it } from "vitest";

describe("Task Status Helpers", () => {
  it("should return label correctly", () => {
    expect(getStatusLabel(TaskStatus.TODO)).toBe("To Do");
    expect(getStatusLabel(TaskStatus.IN_PROGRESS)).toBe("In Progress");
    expect(getStatusLabel(TaskStatus.DONE)).toBe("Done");
  });

  it("should return color correctly", () => {
    expect(getStatusColor(TaskStatus.TODO)).toBe("default");
    expect(getStatusColor(TaskStatus.IN_PROGRESS)).toBe("info");
    expect(getStatusColor(TaskStatus.DONE)).toBe("success");
  });
});
