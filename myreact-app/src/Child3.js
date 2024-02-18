import {USComponent, context} from './USComponent';
import { Context } from './USComponent';
import { useContext } from 'react';

export const Child3=(props)=>{
    const c=useContext(context)

    return (

    <h1>{c}</h1>
    ) };