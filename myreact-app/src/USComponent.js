import React,{useRef} from 'react';
import { Route,Routes } from 'react-router-dom';
import {Child1} from './Child1';
import {Child2} from './Child2';
import {Child3} from './Child3';
export const USComponent=()=>{
   
    return (
        <Routes>
            <Route path='/' element={<Child1/>} />
            <Route path='/2' element={<Child2/>} />
            <Route path='/3' element={<Child3/>} />
        </Routes>

    );
};