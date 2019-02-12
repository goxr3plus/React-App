import React from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {
    const assignedClasses = [];
    let btnClass = classes.Button;

    if (props.showPerson) 
        btnClass = [classes.Button,classes.Red].join(' ');
    
    if (props.persons.length <= 2) {
        assignedClasses.push(classes.red);
    }

    if (props.persons.length <= 1) {
        assignedClasses.push(classes.bold);
    }

    return (
        <>
            <h1>{props.applicationTitle}</h1>
            <p className={assignedClasses.join(' ')}> This is working!</p> 
            <button className={btnClass} onClick={props.togglePersonsHandler}>Toggle Persons</button>
            <br></br>
            <br></br>
            <button onClick={props.login}>Log in</button>
        </>
    );
}

export default React.memo(cockpit);