import React,{useState} from 'react';

export const USComponent=()=>{
    const a= useState("FARHAN");
    return (
<div>
<h1>{a[0]}</h1>
<button onClick={()=>a[1]("LABIB")}>CLICK </button>
</div>
) };