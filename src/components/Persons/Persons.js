import React, { Component } from 'react'
import Person from './Person/Person'

class Persons extends Component{

    static getDerivedStateFromProps(nextProps, prevState) {
      console.log("[Persons.js] getDerivedStateFromProps \nProps:",nextProps," \nState :",prevState)
      return prevState;
    }
  
    shouldComponentUpdate(nextProps,nextState){
      console.log("[Persons.js] shouldComponentUpdate \nProps:",nextProps," \nState :",nextState)
      return true;
    }

    getSnapshotBeforeUpdate(prevProps,prevState){
      console.log("[Persons.js] getSnapshotBeforeUpdate \nProps:",prevProps," \nState :",prevState)
      return {message: 'Snapshot'};
    }

    componentDidUpdate(prevProps,prevState,snapshot){
      console.log("[Persons.js] componentDidUpdate")
      console.log(snapshot);
    }
    
    render(){
        console.log("[Persons.js] rendering...")
        return this.props.persons.map((person , index) => {
            return <Person 
            click ={() => this.props.clicked(index)}            
            name={person.name} 
            age={person.age}      
            key = {person.id}               
            changed = {(event) => this.props.changed(event,person.id)}> Child element2 </Person>
        });

    }
}

export default Persons;




