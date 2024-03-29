'use client'

import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { CreateButton } from "../../component/button";
import { useCreateTaskMutation, Task } from '../../generated/graphql';
import { useRouter } from 'next/navigation';

export const TaskCreate = () => {
  // useFormに型を指定
  const { register, handleSubmit, reset } = useForm<Task>();

  // useCreateTaskMutationフックを使用
  const [createTask, { data, loading, error }] = useCreateTaskMutation();

  const router = useRouter();

  // onSubmitハンドラに型を付ける
  const onSubmit: SubmitHandler<Task> = (Task) => {
    createTask({ variables: { input: { params: {name: Task.name} } } })
      .then(response => {
        console.log('Task created:', response.data);
        reset(); // フォームをリセット
        router.push('/'); // ルーターが準備完了していればリダイレクト
      })
      .catch(error => {
        console.error('Error creating task:', error);
      });
  };

  return (
    <div className="flex justify-center items-start h-screen pt-20">
      <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-xs">
        <div className="mb-4">
          <label htmlFor="taskName" className="block text-gray-700 text-sm font-bold mb-2">タスク名:</label>
          <input {...register("name", { required: true })} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">ステータス: <span className="text-deepOrange">未完了</span></label>
          <input type="hidden" {...register("status")} value="未完了" />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          追加
        </button>
      </form>
    </div>
  );
};

export default TaskCreate;
