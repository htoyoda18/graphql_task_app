import React from "react";
import { ColoredAvatar } from "../../component/badge";

// ダミーのタスクデータ
const tasks = [
  { name: "タスク1", status: "完了" },
  { name: "タスク2", status: "未完了" },
];

export const TaskList = () => {
  return (
    <div>
      <h2>タスク情報</h2>
      <ul>
        {tasks.map((task, index) => (
          <ul key={index} className="flex items-center space-x-2">
            {task.name}
            <ColoredAvatar
              color={task.status === "完了" ? "blue" : "red"}
              text={task.status}
            />
          </ul>
        ))}
      </ul>
    </div>
  );
};
