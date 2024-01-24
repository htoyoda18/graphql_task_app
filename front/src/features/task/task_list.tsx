'use client'

import React, { useEffect } from "react";
import { ColoredAvatar } from "../../component/badge";
import { useGetTasksQuery, TaskStatusEnum } from "../../generated/graphql";
import { useRouter } from 'next/navigation';

export const TaskList = () => {
  const { data, loading, error, refetch } = useGetTasksQuery();
  const router = useRouter();

  useEffect(() => {
    refetch();
  });
  
  const handleClick = (id: string) => {
    router.push(`/${id}`);
  }

  // ローディング状態のハンドリング
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-lg font-semibold">Loading...</div>
      </div>
    );
  }

  // エラー状態のハンドリング
  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-lg font-semibold text-red-500">Error: {error.message}</div>
      </div>
    );
  }

  return (
    <div className="mt-10 flex flex-col items-center w-full max-w-lg mx-auto px-4 py-2 bg-white text-gray-700">
      <h2 className="mb-5 text-xl font-bold text-gray-800">タスク情報</h2>
      <ul className="w-full" style={{ maxHeight: '500px', overflowY: 'auto' }}>
        {data?.tasks.map((task, index) => (
          <li
            key={index}
            className="flex items-center p-4 mb-4 bg-gray-50 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 ease-in-out"
            onClick={() => handleClick(task.id)}
          >
            <span className="text-sm font-medium flex-1">{task.name}</span>
            <ColoredAvatar
              color={task.status === TaskStatusEnum.Complete ? "green" : "orange"}
              text={task.status === TaskStatusEnum.Complete ? "完了" : "未完了"}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

