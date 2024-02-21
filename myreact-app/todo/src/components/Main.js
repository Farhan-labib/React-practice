import React, { useState } from 'react';
import { v4 } from "uuid";
import { Add } from "./Add";
import { Show } from "./Show";

export const Main = () => {
    const [li, setLi] = useState([]);

    const addtodo = (todo) => {
        setLi([...li, { id: v4(), task: todo, completed: false, isEditing: false }]);
    }

    return (
        <>
            <h2>ToDo List</h2>
            <Add addtodo={addtodo} />
            {li.map((todo, index) => (
                <Show task={todo} key={todo.id} />
            ))}
        </>
    );
}
