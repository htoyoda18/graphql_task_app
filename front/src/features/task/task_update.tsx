'use client'

import { useEffect } from "react";
import { useGetTaskLazyQuery, useUpdateTaskMutation, TaskStatusEnum } from "../../generated/graphql";
import { useForm, SubmitHandler } from "react-hook-form";
import { StatusSelect } from "../../component/select";
import { SelectChangeEvent } from '@mui/material';
import { useRouter } from 'next/navigation';


type Props = {
    taskID: string
}

// TODO FormDataを共通化したい
type FormData = {
    taskName: string;
    status: TaskStatusEnum;
};

export const TaskUpdate = ({ taskID } : Props) => {
    const [getTask, { data, loading, error }] = useGetTaskLazyQuery();
    const [updateTask] = useUpdateTaskMutation();
    const { register, handleSubmit, reset, setValue, watch } = useForm<FormData>();
    const router = useRouter();

    useEffect(() => {
        getTask({ variables: { id: taskID } });
    }, [getTask, taskID])

    useEffect(() => {
        // データがロードされたら、resetを使用してフォームの初期値を設定
        if (data && data.getTask) {
            reset({
                taskName: data.getTask.name,
                status: data.getTask.status,
            });
        }
    }, [data, reset]);

    const statusValue = watch('status');

    const onSubmit: SubmitHandler<FormData> = (formData) => {
        updateTask({ variables: { input: { id: taskID, params: { name: formData.taskName, status: formData.status } } } })
        .then(response => {
            console.log('Task updated:', response.data);
            reset(); // フォームをリセット
            router.push('/'); // ルーターが準備完了していればリダイレクト
        })
          .catch(error => {
            console.error('Error update task:', error);
        });
    };

    const handleStatusChange = (event: SelectChangeEvent) => {
        setValue('status', event.target.value as TaskStatusEnum);
    };

    if (loading) return <p>Loading...</p>;

    if (error) return <p>Error :(</p>;

    if (!data || !data.getTask) return <p>Task not found</p>;


    return (
        <div className="flex justify-center items-start h-screen pt-20">
            <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-xs">
                <div className="mb-4">
                    <label htmlFor="taskName" className="block text-gray-700 text-sm font-bold mb-2">タスク名:</label>
                    <input {...register("taskName", { required: true })} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                </div>
                <div className="mb-6">
                    <StatusSelect 
                        initialValue={statusValue || 'incomplete'}
                        onChange={(event) => {
                            handleStatusChange(event);
                        }} 
                    />
                </div>
                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                    更新
                </button>
            </ form>
        </div>
    )
}