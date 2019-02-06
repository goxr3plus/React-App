import React from "react";
import clazzes from "./Person.css"
import Card from 'react-bootstrap/Card';

const person = props => {
 const random = Math.random();

 if(random > 0.7)
  throw new Error("Something went wrong");

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
