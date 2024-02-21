import React,{useState} from 'react';

export const Add = ({ addTodo }) => {
    const [value, setValue] = useState("");

    const handleChange = (e) => {
        setValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo(value);
        setValue("");
    }

    return (
        <div >
            <form onSubmit={handleSubmit}>
                <input type="text" value={value} placeholder='Add your task' onChange={handleChange} />
                <button type="submit">Add</button>
            </form>
        </div>
    );
}
