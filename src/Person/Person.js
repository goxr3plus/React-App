import React from "react";
import "./Person.css"
import Card from 'react-bootstrap/Card';

const person = props => {
  return (
    <Card>
      <Card.Body>
          <div className="Person">
          <p onClick={props.click}>  I'm a {props.name} <b>{props.age}</b> years old </p>
          <p>  {props.children}</p>
          <input type="text" onChange={props.changed} value={props.name}></input>
          </div>
      </Card.Body>
    </Card>
  );
};

export default person;
