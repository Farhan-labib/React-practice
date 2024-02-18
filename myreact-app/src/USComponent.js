import React,{useState, useEffect} from 'react';

export const USComponent=()=>{


    const [info,stinfo]=useState("");
    console.log(info);

    return (
<div>
<form>
<input type='text' value={info} onChange={(e)=>stinfo(e.target.value)}/>
 
</form>
</div>
) };