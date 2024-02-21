import React,{useState} from 'react';

export const Add=({addtodo})=>{
    const [value,setvalue]=useState("")
    const changevalue=(e)=>{
        e.preventDefault();
        addtodo(value);
        setvalue("");
    }
    return(
        <div>
        <form onSubmit={changevalue}>
        <input type="text" value={value} placeholder="Enter Your Task" onChange={(e)=>setvalue(e.target.value)}/>
        <button type='submit'>Add</button>


        </form>
        </div>
        
    )
}