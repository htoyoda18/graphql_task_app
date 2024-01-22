'use client'

import React from "react";

type Props = {
    taskID: string
}

export const TaskUpdate = ({ taskID } : Props) => {
    return (
        <div>
            <h1>Task Update {taskID}</h1>
        </div>
    )
}