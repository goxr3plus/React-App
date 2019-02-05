import React, { Component } from "react";
import clazzes from "./App.css";
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
  
  nameChangedHandler = (event , id) => {

    const personIndex = this.state.persons.findIndex( p =>{
     return p.id  === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

   
    person.name = event.target.value;
    console.log(person.name);
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons});
    
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
               click ={() => this.deletePersonHandler(index)}            
               name={person.name} 
               age={person.age}         
               key = {person.id}
               changed = {(event) => this.nameChangedHandler(event,person.id)}> Child element2 </Person>
           }
          )
        }
       </div>
      );
     }
    
    return (
      <div className={clazzes.App}>
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
