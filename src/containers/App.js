import 'bootstrap/dist/css/bootstrap.css';
import React, { PureComponent } from "react";
import Cockpit from "../components/Cockpit/Cockpit";
import Persons from "../components/Persons/Persons";
import clazzes from "./App.css";



class App extends PureComponent {

  constructor(props){
    super(props);
    console.log("[App.js] Inside constructor",props)
  }

  componentWillMount(){
    console.log("[App.js] Inside componentWillMount",this.props)
  }

  componentDidMount(){
    console.log("[App.js] Inside componentDidMount",this.props)
  }

  // shouldComponentUpdate(nextProps,nextState){
  //   console.log("[UPDATE App.js] Inside shouldComponentUpdate",nextProps,nextState);
  //   return nextState.persons !== this.state.persons || nextState.showPersons !== this.state.persons;
  // }

 
  componentWillUpdate(nextProps,nextState){
    console.log("[UPDATE App.js] Inside componentWillUpdate",nextProps,nextState);
  }

  componentDidUpdate(){
    console.log("[UPDATE App.js] Inside componentDidUpdate");
  }
  
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

    console.log("SKLIRO :",person);

   
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
    console.log("[App.js] Inside render",this.props)

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
        <button onClick={() =>{this.setState({showPersons: true})}}>push me bro</button>
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
