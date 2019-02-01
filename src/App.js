import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person.js";
import 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/Button';

class App extends Component {
  state = {
    persons: [
      { id :1 , name : "Maxe" , age: 28},
      { id :2 , name : "Manu" , age: 29},
      { id :3 ,name : "Stephanie" , age: 26}
    ],
    otherState: " Other",
    showPersons: false
  }

  /*---------------------- START Methods ----------------------------*/

  switchNameHandler = (newName) => {
      this.setState( {
      persons: [
        { id :1 ,name : newName, age: 23},
        { id :2 ,name : "Manu" , age: 29},
        { id :3 ,name : "Stephanie" , age: 26}
      ]
      })
  }
  
  nameChangedHandler = (event) => {
    console.log("ye")
       this.setState( {
       persons: [
         { id :1 ,name : "Max", age: 23},
         { id :2 ,name : event.target.value , age: 29},
         { id :3 ,name : "Stephanie" , age: 26}
       ]
       })
   }

   deletePersonHandler = (personIndex) => {
     const persons = [...this.state.persons];
     persons.splice(personIndex,1);
     this.setState({persons: persons})
   }

   togglePersonsHandler = ()=>{
    this.setState({
      showPersons: !this.state.showPersons
    })

   }

   /*---------------------- END Methods ----------------------------*/

  render() {
    const style ={
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'

    }

    /* ------------- Persons ------------- */
    let persons = null
    if(this.state.showPersons){
      persons = (
       <div>
        {this.state.persons.map((person , index) => {
             return <Person 
               name={person.name} 
               age={person.age}
               click ={() => this.deletePersonHandler(index)}
               changed = {this.nameChangedHandler}
               key = {person.id}> Child element2 </Person>
           }
          )
        }
       </div>
      );
     }
    
    return (
      <div className="App">
        <h1> Super Reactor boy</h1>
        <button style={style} onClick={this.switchNameHandler.bind(this,"Maxy Buxy")}>Switch Name Bootstrap</button>
        <br></br>
        <br></br>
        <Button onClick={this.togglePersonsHandler}>Toggle Persons</Button>
        <br></br>
        <br></br>
        {persons}
      </div>
    );
  }
}

export default App;
