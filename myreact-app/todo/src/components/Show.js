
import React from "react";

export const Show = ({ task, onDelete }) => {
    const handleDelete = () => {
        onDelete(task.id);
    }

    return (
        <div className="info">
            <p>{task.task}</p>
            <button onClick={handleDelete}>Delete</button>
            <hr/>
        </div>
    );
}
