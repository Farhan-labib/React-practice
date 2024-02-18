import React,{useRef} from 'react';

export const USComponent=()=>{
    const hook=useRef();
    const chnagecolor=()=>{
        hook.current.style.color="red";
    }
    return (
        <div>
            <h1 ref={hook}>"Hello world"</h1>
            <button onClick={chnagecolor}>Change color</button>
        </div>

    );
};