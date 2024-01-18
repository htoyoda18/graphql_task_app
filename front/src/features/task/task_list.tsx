import React from "react";
import { ColoredAvatar } from "../../component/badge";

// ダミーのタスクデータ
const tasks = [
  { name: "タスク1", status: "完了" },
  { name: "タスク2タスク2", status: "未完了" },
];

export const TaskList = () => {
  return (
    <div className="mt-10 flex flex-col items-center">
      <h2 className="mb-3">タスク情報</h2>
      <ul>
        {tasks.map((task, index) => (
          <li key={index} className="flex items-center space-x-2 mb-3">
            <span className="mr-4 w-32">{task.name}</span>
            <ColoredAvatar
              color={task.status === "完了" ? "green" : "orange"}
              text={task.status}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
