import React,{useState} from 'react';

export const USComponent=()=>{
    
    const temp={
        name:"FARHAN",
        age:23,
        Gender:"Male" };
    const [info,changeinfo]= useState(temp);
    const change=()=>{
        changeinfo(
            {
                name:"LABIB"
            }
        )

    };
    return (
<div>
<h1>{info.name}</h1>
<button onClick={change}>CLICK </button>
</div>
) };