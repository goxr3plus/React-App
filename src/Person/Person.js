import React from "react";

const person = props => {
  return (
    <div>
    <p onClick={props.clicker}>  I'm a {props.name} <b>{props.age}</b> years old </p>
    <p>  {props.children}</p>
    <input type="text" onChange={props.changed} value={props.name}></input>
    </div>
  
  );
};

export default person;
