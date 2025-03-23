import { AxiosError } from "axios";
import { TaskStatus, Task } from "../task.types";

const mockTasks: Task[] = [
  {
    id: "1",
    title: "Finish login form",
    description: "Complete the authentication flow",
    status: TaskStatus.IN_PROGRESS,
  },
  {
    id: "2",
    title: "Connect task dashboard",
    description: "Load tasks from API",
    status: TaskStatus.TODO,
  },
  {
    id: "3",
    title: "Build chart page",
    description: "Visualize task statuses",
    status: TaskStatus.DONE,
  },
  {
    id: "4",
    title: "Refactor codebase",
    description: "Improve code readability and maintainability",
    status: TaskStatus.TODO,
  },
  {
    id: "5",
    title: "Write unit tests",
    description: "Ensure code reliability with unit tests",
    status: TaskStatus.IN_PROGRESS,
  },
  {
    id: "6",
    title: "Deploy to production",
    description: "Push the latest changes to the live server",
    status: TaskStatus.TODO,
  },
  {
    id: "7",
    title: "Optimize database queries",
    description: "Improve performance by optimizing queries",
    status: TaskStatus.IN_PROGRESS,
  },
  {
    id: "8",
    title: "Design user profile page",
    description: "Create a UI for user profiles",
    status: TaskStatus.TODO,
  },
  {
    id: "9",
    title: "Fix bug in search functionality",
    description: "Resolve issues with the search feature",
    status: TaskStatus.IN_PROGRESS,
  },
  {
    id: "10",
    title: "Add dark mode support",
    description: "Implement dark mode for better user experience",
    status: TaskStatus.TODO,
  },
  {
    id: "11",
    title: "Update documentation",
    description: "Keep the project documentation up to date",
    status: TaskStatus.DONE,
  },
  {
    id: "12",
    title: "Integrate payment gateway",
    description: "Add support for online payments",
    status: TaskStatus.TODO,
  },
  {
    id: "13",
    title: "Conduct user testing",
    description: "Gather feedback from real users",
    status: TaskStatus.IN_PROGRESS,
  },
  {
    id: "14",
    title: "Implement push notifications",
    description: "Notify users about important updates",
    status: TaskStatus.TODO,
  },
  {
    id: "15",
    title: "Set up CI/CD pipeline",
    description: "Automate the deployment process",
    status: TaskStatus.DONE,
  },
];

export const mockGetTasksService = async (): Promise<Task[]> => {
  await new Promise((res) => setTimeout(res, 500)); // Simulated delay

  const shouldFail = false;

  if (shouldFail) {
    const error = {
      isAxiosError: true,
      response: {
        status: 500,
        data: {
          message: "Failed to load tasks",
        },
      },
    } as AxiosError;
    throw error;
  }

  return mockTasks;
};
