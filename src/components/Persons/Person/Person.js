import React from "react";
import clazzes from "./Person.css"

const person = props => {

  return (
      <div>
          <div className={clazzes.Person}>
          <p onClick={props.click}>  I'm a {props.name} <b>{props.age}</b> years old </p>
          <p>  {props.children}</p>
          <input type="text" onChange={props.changed} value={props.name}></input>
          </div>
      </div>
  );
};

export default person;
