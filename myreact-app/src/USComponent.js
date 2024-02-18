import React,{createContext, useEffect} from 'react';
import { Child1 } from './Child1';
export const context=createContext();
export const USComponent=()=>{
    
    return (
<div>
<context.Provider  value={"LABIB"}>
<Child1/>
</context.Provider>   
</div>
) };