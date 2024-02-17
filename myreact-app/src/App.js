import React,{Component} from "react";
import PropTypes from "prop-types";

const App=({name,age})=>{
 return( 
   <div>
<h2>{name}{age}</h2>
   </div>
 );
};

export {App};