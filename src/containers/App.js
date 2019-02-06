import React, { Component } from "react";
import clazzes from "./App.css";
import Persons from "../components/Persons/Persons";
import 'bootstrap/dist/css/bootstrap.css';
import Cockpit from "../components/Cockpit/Cockpit";


//  TODO
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

    /* ------------- Persons ------------- */
    let persons = null;

    if(this.state.showPersons){
      persons = (
       <div>
         <Persons
           persons = {this.state.persons}
           clicked = {this.deletePersonHandler}
           changed = {this.nameChangedHandler}
         />
       </div>
      );

     }
    
    return (
      <div className={clazzes.App}>
        <Cockpit
         applicationTitle = {this.props.title}
         persons = {this.state.persons}
         showPerson = {this.state.showPersons}
         togglePersonsHandler = {this.togglePersonsHandler}>
        </Cockpit>
        {persons}
      </div>
    );
  }
}

export default App;
