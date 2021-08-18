import { useState, useRef } from 'react';
import ModalWindow from '../ModalWindow/ModalWindow.js'
import styles from './AddUser.module.css';

const AddUser = props => {
    const nameInputRef = useRef();
    const ageInputRef = useRef();

    var [errorMessage, setErrorMessage] = useState('');
    var[isInputValid, setInputIsvalid] = useState(true);

    const submitFormHandler = event => {
        event.preventDefault();
        const enteredName = nameInputRef.current.value;
        const enteredAge = ageInputRef.current.value;

        if (enteredName.length === 0 && enteredAge <= 0){
            setInputIsvalid(false);
            setErrorMessage("Make sure both the name and the age fields are filled in")
            return;
        } else if (enteredName.length === 0){
            setInputIsvalid(false);
            setErrorMessage("Please enter your name")
            return;
        } else if (enteredAge <= 0) {
            setErrorMessage("Please enter a valid age")
            setInputIsvalid(false);
            return;
        }

        var user = {
            name: enteredName,
            age: enteredAge
        };

        props.onSubmit(user);
        nameInputRef.current.value = ''
        ageInputRef.current.value = ''
    }

    return (
        <>
         <form className={styles['form']} onSubmit={submitFormHandler}>
            <label className={styles['label-form']} htmlFor="name">Name</label>
            <input className={styles['input-form']} id="name" type="text" name="name" ref={nameInputRef}></input>

            <label className={styles['label-form']} htmlFor="age">Age</label>
            <input className={styles['input-form']} id="age" type="number" name="age" min="1" ref={ageInputRef}></input>

            <input className={styles['primary-button']} type="submit" value="Submit"></input>
        </form>
        <ModalWindow open={!isInputValid} onClose={() => setInputIsvalid(true)} message={errorMessage}></ModalWindow>
        </>
    )
};

export default AddUser;

