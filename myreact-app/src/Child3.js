import { Grandchild1 } from "./Grandchild1";
import { Grandchild2 } from "./Grandchild2";
import {NavLink, Outlet } from 'react-router-dom';
export const Child3=()=>{
    return(
        <>
        <h1>im child3</h1>
        <nav>
        <NavLink to=''>grandchild1 </NavLink>
        <NavLink to='g2'>grandchild2 </NavLink>
        </nav>
        <Outlet/>
                </>
    )
}