
import React, { useState } from 'react';
import { v4 } from "uuid";
import { Add } from "./Add";
import { Show } from "./Show";
v4();
export const Main = () => {
    const [li, setLi] = useState([]);

    const addTodo = (todo) => {
        setLi([...li, { id: v4(), task: todo, completed: false, isEditing: false }]);
    }

    const deleteTodo = (id) => {
        setLi(li.filter(todo => todo.id !== id));
    }

    return (
        <>
            <h2 className='header'>ToDo List</h2>
            <Add addTodo={addTodo} />
            {li.map((todo) => (
                <Show task={todo} key={todo.id} onDelete={deleteTodo} />
            ))}
        </>
    );
}
