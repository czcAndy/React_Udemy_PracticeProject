import { useState } from 'react';
import ModalWindow from '../ModalWindow/ModalWindow.js'
import './AddUser.css';

const AddUser = props => {
    
    var [name, setName] = useState('');
    var [age, setAge] = useState(0);

    var[isValid, setIsvalid] = useState(true);

    const submitFormHandler = event => {
        event.preventDefault();


        if (name.length === 0 && age <= 0){
            //both invalid
        } else if (name.length === 0){
            // invalid name
        } else if (age <= 0) {
            // invalid age
        }

        var user = {
            name: name,
            age: age
        };

        props.onSubmit(user);
    }

    const inputNameChangeHandler = event => {
        var name = event.target.value;
        setName(name);
    }

    const inputAgeChangeHandler = event => {
        var age = event.target.value;
        setAge(age);
    }

    return (
        <>
         <form className="contact-form" onSubmit={submitFormHandler}>
            <label className="contact-label-form" htmlFor="name">Name</label>
            <input className="contact-input-form" id="name" type="text" name="name" onChange={inputNameChangeHandler}></input>

            <label className="contact-label-form" htmlFor="age">Age</label>
            <input className="contact-input-form" id="age" type="text" name="age" onChange={inputAgeChangeHandler}></input>

            <input className="primary-button" type="submit"></input>
        </form>
        <ModalWindow></ModalWindow>
        </>
    )
};

export default AddUser;

