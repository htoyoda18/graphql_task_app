import React from "react";
import { ColoredAvatar } from "../../component/badge";

// ダミーのタスクデータ
const tasks = [
  { name: "タスク1", status: "完了" },
  { name: "タスク2タスク2", status: "未完了" },
];

export const TaskList = () => {
  return (
    <div className="mt-10 flex flex-col items-center w-full max-w-sm mx-auto">
      {" "}
      {/* max-w-sm に変更 */}
      <h2 className="mb-5 text-lg font-semibold">タスク情報</h2>
      <ul className="w-full">
        {tasks.map((task, index) => (
          <li
            key={index}
            className="flex items-center space-x-4 p-3 mb-2 bg-gray-100 border border-gray-200 rounded-lg"
          >
            <span className="text-sm font-medium flex-1">{task.name}</span>
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
