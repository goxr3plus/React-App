import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1> Super Reactor boy</h1>
        <Person name="Max" age="28"/>
        <Person name="Manu" age="29"> My Hobbies: Racing </Person>
        <Person name="Stephanie" age="26"/>
      </div>
    );

    //  return React.createElement('div',{className:'App'},React.createElement('h1',null,"Hello I'am John"));
  }
}

export default App;
