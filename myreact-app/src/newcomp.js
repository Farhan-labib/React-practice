import React from "react";
import PropTypes from "prop-types";

const Nc = (props) => {
  return (
  <div>
  <h1>Whats your name?</h1>
  <h2>Hello Im {props.names}</h2>
  <h2>Age: {props.age}</h2>
  <App2/>
  </div>
  
  );
};

const App2=()=><h1>react app</h1>;

Nc.propTypes={
  names: PropTypes.string,
  age:PropTypes.number,
  
};

Nc.defaultProps={
  names: "jahin",
  age: 27
};


export {Nc,App2};