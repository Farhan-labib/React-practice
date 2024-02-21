import {NavLink } from 'react-router-dom';
export const Navbar=()=>{
    return (
        <nav>
        <NavLink to='/'>CHILD1</NavLink>
        <NavLink to='/2'>CHILD2</NavLink>
        <NavLink to='/3'>CHILD3</NavLink>
 
 
        </nav>
    )
}