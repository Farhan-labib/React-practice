import React from "react";


function Nc(props) {
  return (
  <div>
  <h1>Whats your name?</h1>
  <h2>Hello Im {props.names}</h2>
  <h2>Age: {props.age}</h2>
  {props.children}
  </div>
  );
}

export default Nc;