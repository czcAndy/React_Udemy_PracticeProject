import { useState } from 'react';
import './AddUser.css';

const AddUser = props => {
    
    var [name, setName] = useState('');
    var [age, setAge] = useState(0);

    const submitFormHandler = event => {
        event.preventDefault();

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
        <form className="contact-form" onSubmit={submitFormHandler}>
            <label className="contact-label-form" htmlFor="name">Name</label>
            <input className="contact-input-form" id="name" type="text" name="name" onChange={inputNameChangeHandler}></input>

            <label className="contact-label-form" htmlFor="age">Age</label>
            <input className="contact-input-form" id="age" type="text" name="age" onChange={inputAgeChangeHandler}></input>

            <input className="primary-button" type="submit"></input>
        </form>
    )
};

export default AddUser;

