import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js'

class App extends Component {
  
  render (){
     return (
      <div className="App">
        <h1> Super Reactor boy</h1>
        <Person />
      </div>
     );

    //  return React.createElement('div',{className:'App'},React.createElement('h1',null,"Hello I'am John"));
  }

}

export default App;
