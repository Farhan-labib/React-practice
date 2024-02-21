
import React from "react";

export const Show = ({ task, onDelete }) => {
    const handleDelete = () => {
        onDelete(task.id);
    }

    return (
        <div>
            <p>{task.task}</p>
            <button onClick={handleDelete}>Delete</button>
        </div>
    );
}
