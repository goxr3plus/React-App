import 'bootstrap/dist/css/bootstrap.css';
import React, { Component } from "react";
import Cockpit from "../components/Cockpit/Cockpit";
import Persons from "../components/Persons/Persons";
import clazzes from "./App.css";
import Auxiliary from '../hoc/Auxiliary';
import withClass from './../hoc/withClass';



class App extends Component {
  state = {
    persons: [
      { id :1 , name : "Maxe" , age: 28}, 
      { id :2 , name : "Manu" , age: 29},
      { id :3 ,name : "Stephanie" , age: 26}
    ],
    otherState: " Other",
    showPersons: false ,
    showCockpit: true ,
    changeCounter: 1
  }

  constructor(props){
    super(props);
    console.log("[App.js] Inside constructor")
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log("[App.js] Inside getDerivedStateFromProps")// \nProps:",nextProps," \nState :",prevState);
   return prevState;
  }
 
  componentDidMount(){
    console.log("[App.js] Inside componentDidMount ")
  }

  shouldComponentUpdate(nextProps,nextState){
    console.log("[App.js] shouldComponentUpdate")// \nProps:",nextProps," \nState :",nextState)
    return true;
  }

  componentDidUpdate(prevProps,prevState,snapshot){
    console.log("[App.js] componentDidUpdate")
    console.log(snapshot);
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

    this.setState((prevState,props)=>{
      return {persons: persons,changeCounter: prevState.changeCounter+1}
    });
    
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
    console.log("[App.js] Inside render")

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
      <Auxiliary>
        <p>Counter: {this.state.changeCounter}</p>
        <button onClick={() => this.setState({showCockpit:false})}> Remove damn cockpit.js </button>
        {this.state.showCockpit ? 
        <Cockpit
         applicationTitle = {this.props.title}
         personsLength = {this.state.persons.length}
         showPerson = {this.state.showPersons}
         togglePersonsHandler = {this.togglePersonsHandler}>
        </Cockpit>
        :null}
        {persons}
      </Auxiliary>
    );
  }
}

export default withClass(App,clazzes.App);
