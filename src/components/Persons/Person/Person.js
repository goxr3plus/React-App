import React, { Component } from 'react';
import clazzes from "./Person.css"
import wrappedComponent from '../../../hoc/WrappedComponent';
import PropTypes from 'prop-types';


class Person extends Component{
    constructor(props){
        super(props);
        console.log("[Person.js] Inside constructor",props)
      }
    
      componentWillMount(){
        console.log("[Person.js] Inside componentWillMount",this.props)
      }
    
      componentDidMount(){
        console.log("[Person.js] Inside componentDidMount",this.props)
      }

    
    render(){
        console.log("[Person.js] Inside render",this.props)
        return (
        <>
            <div className={clazzes.Person}>
              <p onClick={this.props.click}>  I'm a {this.props.name} <b>{this.props.age}</b> years old </p>
              <p>  {this.props.children}</p>
              <input type="text" onChange={this.props.changed} value={this.props.name}></input>
            </div>
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
