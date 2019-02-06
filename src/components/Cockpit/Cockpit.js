import React from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {
    const assignedClasses = [];
    let btnClass = '';

    if (props.showPerson) 
        btnClass = classes.Red;
    
    if (props.persons.length <= 2) {
        assignedClasses.push(classes.red);
    }

    if (props.persons.length <= 1) {
        assignedClasses.push(classes.bold);
    }

    return (
        <div className={classes.Cockpit}>
            <h1>{props.applicationTitle}</h1>
            <p className={assignedClasses.join(' ')}> This is working!</p> 
            <button className={btnClass} onClick={props.togglePersonsHandler}>Toggle Persons</button>
            <br></br>
            <br></br>
        </div>
    );
}

export default cockpit;