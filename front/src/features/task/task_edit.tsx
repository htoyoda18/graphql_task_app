'use client'

import { useEffect } from "react";
import { useGetTaskLazyQuery, useUpdateTaskMutation, TaskStatusEnum, Task, useDeleteTaskMutation } from "../../generated/graphql";
import { useForm, SubmitHandler } from "react-hook-form";
import { StatusSelect } from "../../component/select";
import { SelectChangeEvent } from '@mui/material';
import { useRouter } from 'next/navigation';
import DeleteIcon from '@mui/icons-material/Delete';
import AddCircleIcon from '@mui/icons-material/AddCircle';

type Props = {
    taskID: string
}

export const TaskUpdate = ({ taskID } : Props) => {
    const [getTask, { data, loading, error }] = useGetTaskLazyQuery();
    const [updateTask] = useUpdateTaskMutation();
    const [deleteTask] = useDeleteTaskMutation();
    const { register, handleSubmit, reset, setValue, watch } = useForm<Task>();
    const router = useRouter();

    useEffect(() => {
        getTask({ variables: { id: taskID } });
    }, [getTask, taskID])

    useEffect(() => {
        // データがロードされたら、resetを使用してフォームの初期値を設定
        if (data && data.getTask) {
            reset({
                name: data.getTask.name,
                status: data.getTask.status,
            });
        }
    }, [data, reset]);

    const statusValue = watch('status');

    const onSubmit: SubmitHandler<Task> = (formData) => {
        updateTask({ variables: { input: { id: taskID, params: { name: formData.name, status: formData.status } } } })
        .then(response => {
            console.log('Task updated:', response.data);
            router.push('/');
        })
        .catch(error => {
            console.error('Error update task:', error);
        });
    };

    const handleStatusChange = (event: SelectChangeEvent) => {
        setValue('status', event.target.value as TaskStatusEnum);
    };

    const handleDelete = () => {
        deleteTask({ variables:  { input: { id: taskID } }})
        .then(response => {
            console.log('Task updated:', response.data);
            router.push('/');
        })
        .catch(error => {
            console.error('Error update task:', error);
        });
    };

    if (loading) return <p>Loading...</p>;

    if (error) return <p>Error :(</p>;

    if (!data || !data.getTask) return <p>Task not found</p>;


    return (
        <div className="flex justify-center items-start h-screen pt-20">
            <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-xs">
                <div className="mb-4">
                    <label htmlFor="taskName" className="block text-gray-700 text-sm font-bold mb-2">タスク名:</label>
                    <input {...register("name", { required: true })} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                </div>
                <div className="mb-6">
                    <StatusSelect 
                        initialStatus={statusValue || 'incomplete'}
                        onChange={(event) => {
                            handleStatusChange(event);
                        }} 
                    />
                </div>
                <div className="mb-4">
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex items-center justify-center">
                        <AddCircleIcon style={{ fontSize: 20, marginRight: 8 }} />
                        更新
                    </button>
                </div>
                <div className="mb-4">
                    <button
                        onClick={handleDelete}
                        type="button"
                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex items-center justify-center">
                        <DeleteIcon style={{ fontSize: 20, marginRight: 8 }} />
                        削除
                    </button>
                </div>
            </ form>
        </div>
    )
}