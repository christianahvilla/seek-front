import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { Task, TaskStatus } from "../task.types";
import { getStatusLabel } from "../helpers/task-status.helper";

interface TaskStatusChartProps {
  tasks: Task[];
}

const COLORS: Record<TaskStatus, string> = {
  [TaskStatus.TODO]: "#90caf9",
  [TaskStatus.IN_PROGRESS]: "#ffb74d",
  [TaskStatus.DONE]: "#81c784",
};

export const TaskStatusChart = ({ tasks }: TaskStatusChartProps) => {
  const statusCount = tasks.reduce<Record<TaskStatus, number>>(
    (acc, task) => {
      acc[task.status] = acc[task.status] + 1 || 1;
      return acc;
    },
    {
      [TaskStatus.TODO]: 0,
      [TaskStatus.IN_PROGRESS]: 0,
      [TaskStatus.DONE]: 0,
    }
  );

  const data = Object.entries(statusCount).map(([status, value]) => ({
    name: getStatusLabel(status as TaskStatus),
    value,
    status,
  }));

  return (
    <ResponsiveContainer width="100%" height={400}>
      <PieChart>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={120}
          fill="#8884d8"
          label
        >
          {data.map((entry) => (
            <Cell
              key={entry.status}
              fill={COLORS[entry.status as TaskStatus]}
            />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  );
};
