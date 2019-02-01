import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person.js";
import 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/Button';

class App extends Component {
  state = {
    persons: [
      {name : "Max" , age: 28},
      {name : "Manu" , age: 29},
      {name : "Stephanie" , age: 26}
    ],
    otherState: " Other",
    showPersons: false
  }

  switchNameHandler = (newName) => {
      this.setState( {
      persons: [
        {name : newName, age: 23},
        {name : "Manu" , age: 29},
        {name : "Stephanie" , age: 26}
      ]
      })
  }
  
  nameChangedHandler = (event) => {
       this.setState( {
       persons: [
         {name : "Max", age: 23},
         {name : event.target.value , age: 29},
         {name : "Stephanie" , age: 26}
       ]
       })
   }

   togglePersonsHandler = ()=>{
    this.setState({
      showPersons: !this.state.showPersons
    })

   }

  render() {
    const style ={
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'

    }

    let persons = null
    if(this.state.showPersons){
      persons = (
      <div>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}/>
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          clicker={this.switchNameHandler.bind(this,"Maxy Buxy")}
          changed={this.nameChangedHandler}> My Hobbies: Racing </Person>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age}/>
      </div>
      );
     }
    
    return (
      <div className="App">
        <h1> Super Reactor boy</h1>
        {/* () => this.switchNameHandler("Maximilian" ) This can be inefficient*/}
        <button style={style} onClick={ () => this.switchNameHandler("Maximilian" )}>Switch Name </button>
        <br></br>
        <br></br>
        <Button onClick={this.switchNameHandler.bind(this,"Maxy Buxy")}>Switch Name Bootstrap</Button>
        <br></br>
        <br></br>
        <Button onClick={this.togglePersonsHandler}>Toggle Persons</Button>
        <br></br>
        <br></br>
        {persons}
      </div>
    );

    //  return React.createElement('div',{className:'App'},React.createElement('h1',null,"Hello I'am John"));
  }
}

export default App;
