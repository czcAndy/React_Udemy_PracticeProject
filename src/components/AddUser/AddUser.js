import { useState } from 'react';
import ModalWindow from '../ModalWindow/ModalWindow.js'
import styles from './AddUser.module.css';

const AddUser = props => {
    
    var [name, setName] = useState('');
    var [age, setAge] = useState(0);
    var [errorMessage, setErrorMessage] = useState('');

    var[isInputValid, setInputIsvalid] = useState(true);

    const submitFormHandler = event => {
        event.preventDefault();

        if (name.length === 0 && age <= 0){
            setInputIsvalid(false);
            setErrorMessage("Make sure both the name and the age fields are filled in")
            return;
        } else if (name.length === 0){
            setInputIsvalid(false);
            setErrorMessage("Please enter your name")
            return;
        } else if (age <= 0) {
            setErrorMessage("Please enter a valid age")
            setInputIsvalid(false);
            return;
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
         <form className={styles['form']} onSubmit={submitFormHandler}>
            <label className={styles['label-form']} htmlFor="name">Name</label>
            <input className={styles['input-form']} id="name" type="text" name="name" onChange={inputNameChangeHandler}></input>

            <label className={styles['label-form']} htmlFor="age">Age</label>
            <input className={styles['input-form']} id="age" type="number" name="age" min="1" onChange={inputAgeChangeHandler}></input>

            <input className={styles['primary-button']} type="submit" value="Submit"></input>
        </form>
        <ModalWindow open={!isInputValid} onClose={() => setInputIsvalid(true)} message={errorMessage}></ModalWindow>
        </>
    )
};

export default AddUser;

