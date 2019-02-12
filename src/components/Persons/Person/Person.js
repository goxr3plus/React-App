import React, { Component } from 'react';
import clazzes from "./Person.css"
import wrappedComponent from '../../../hoc/WrappedComponent';
import PropTypes from 'prop-types';
// import Aux from "../../../hoc/Aux";
import { AuthContext } from './../../../containers/App';


class Person extends Component{
    constructor(props){
        super(props);
        console.log("[Person.js] Inside constructor",props)
        this.inputElement = React.createRef();
      }
    
      componentWillMount(){
        console.log("[Person.js] Inside componentWillMount",this.props)
      }
      
      componentDidMount(){
        console.log("[Person.js] Inside componentDidMount",this.props)
        // if(this.props.position === 0)
          // this.inputElement.current.focus();
      }

      focuz(){
          this.inputElement.current.focus();
      }
    
    render(){
        console.log("[Person.js] Inside render",this.props)
        return (
        <>
              <AuthContext.Consumer>
               {auth => auth ? <p>I'm Authenticated!</p> : null}
              </AuthContext.Consumer>
              <p onClick={this.props.click}>  I'm a {this.props.name} <b>{this.props.age}</b> years old </p>
              <input ref={this.inputElement} type="text" onChange={this.props.changed} value={this.props.name}></input>
        </>
        );
    }
}

Person.propTypes = {
   click: PropTypes.func,
   name:  PropTypes.string,
   age:   PropTypes.number,
   changed:  PropTypes.func
}

export default wrappedComponent(Person,clazzes.Person);
