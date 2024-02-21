import React from "react";

export const Show = ({ task }) => {
    return (
        <div>
            <p>{task.task}</p>
            <button>Edit</button>
        
            <button>Delete</button>
            <hr/>

        </div>
    );
}
