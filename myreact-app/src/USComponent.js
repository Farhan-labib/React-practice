import React,{useState, useEffect} from 'react';

export const USComponent=()=>{

    const [info,setData]=useState({
        name:"",
        email:""
    });
    console.log(info)
  const  changedata=(e)=>{
        const name=e.target.name;
        const email=e.target.email;

        const value=e.target.value;

    
    setData((prev)=>{
        return{
            ...prev, [name]:value

        }

    })}
    
    return (
<div>
<form>
<input type='text' name='name' value={info.name} onChange={changedata}/>
<br></br>
<input type='text' name="email" value={info.email} onChange={changedata}/>

 
</form>
</div>
) };