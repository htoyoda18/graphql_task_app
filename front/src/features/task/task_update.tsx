'use client'

import { useEffect } from "react";
import { useGetTaskLazyQuery } from "../../generated/graphql";


type Props = {
    taskID: string
}

export const TaskUpdate = ({ taskID } : Props) => {
    const [getTask, { data, loading, error }] = useGetTaskLazyQuery();

    useEffect(() => {
        getTask({ variables: { id: taskID } });
    }, [getTask, taskID])

    console.log('data: ', data)

    return (
        <div>
            <h1>Task Update {taskID}</h1>
        </div>
    )
}