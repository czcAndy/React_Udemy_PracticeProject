import './AddUser.css';

function AddUser() {
    return (
        <form className="contact-form">
            <label className="contact-label-form" for="name">Name</label>
            <input className="contact-input-form" id="name" type="text" name="name"></input>

            <label className="contact-label-form" for="age">Age</label>
            <input className="contact-input-form" id="age" type="text" name="age"></input>

            <input className="primary-button" type="submit"></input>
        </form>
    )
};

export default AddUser;

