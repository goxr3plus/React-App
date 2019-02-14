import React, { Component } from 'react';
import clazzes from "./Person.css"
import Auxiliary from './../../../hoc/Auxiliary';
import withClass from '../../../hoc/withClass';
import PropTypes from 'prop-types';
import AuthContext from './../../../context/auth-context';


class Person extends Component{
    constructor(props){
        super(props);
        console.log("[Person.js] Inside constructor",props)
        this.inputElement = React.createRef();  
      }
    
    //   componentWillMount(){
    //     console.log("[Person.js] Inside componentWillMount",this.props)
    //   }
     
       componentDidMount(){
         console.log("[Person.js] Inside componentDidMount",this.props)
         this.inputElement.current.focus();
       }

    
    render(){   
        console.log("[Person.js] Inside render",this.props)
        return (
            <Auxiliary>
              <AuthContext.Consumer>
                {(context) => context.authenticated ? <p> Is Athenticated !! </p> : <p> Please log in</p> }
              </AuthContext.Consumer> 
              <p onClick={this.props.click}>  I'm a {this.props.name} <b>{this.props.age}</b> years old </p>
              <p>  {this.props.children}</p>
              <input type="text" ref={this.inputElement} onChange={this.props.changed} value={this.props.name}></input>
            </Auxiliary>
        );
    }
}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
}

export default withClass(Person,clazzes.Person);
