import React from 'react';
import { Route,Routes,Link, useNavigate } from 'react-router-dom';
import {Child1} from './Child1';
import {Child2} from './Child2';
import {Child3} from './Child3';
import {Navbar} from './Navbar';

export const USComponent=()=>{
    const usenav= useNavigate();
    return (
        <>

        <Navbar/>
        <Routes>
            <Route path='/' element={<Child1/>} />
            <Route path='/2' element={<Child2/>} />
            <Route path='/3' element={<Child3/>} />
        </Routes>
        <button onClick={()=>usenav("/2")}>Child2</button>

        </>


    );
};