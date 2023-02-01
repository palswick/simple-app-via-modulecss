import Button from "../UI/Button";
import Card from "../UI/Card";
import styles from './AddUser.module.css'
import {useState} from "react";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";

const AddUser = (props) => {

    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredUserAge, setEnteredUserAge] = useState('');
    const [error, setError] = useState('');

    const addUserHandler = (event) => {
        event.preventDefault();

        if (enteredUsername.trim().length === 0 || enteredUserAge.trim().length === 0) {
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid name and age (non-empty values).'
            })
        }
        if (+enteredUserAge < 1) {
            setError({
                title: 'Invalid age',
                message: 'Please enter a valid age (> 0).'
            })
        }

        props.onAddUser(enteredUsername, enteredUserAge)

        setEnteredUsername('')
        setEnteredUserAge('')
    }

    const usernameChangeHandler = (event) => {
        setEnteredUsername(event.target.value)
    }

    const userAgeChangeHandler = (event) => {
        setEnteredUserAge(event.target.value)
    }

    const errorHandler = () => {
        setError(null)
    }

    return (
        <Wrapper>
            {error && <ErrorModal title={error.title}
                                  message={error.message}
                                  onConfirm={errorHandler}/>}
            <Card className={styles.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor='username'>Username</label>
                    <input id='username' type='text' value={enteredUsername} onChange={usernameChangeHandler}/>
                    <label htmlFor='age'>Age</label>
                    <input id='age' type='number' value={enteredUserAge} onChange={userAgeChangeHandler}/>
                    <Button type='submit'>Add User</Button>
                </form>
            </Card>
        </Wrapper>

    );
};

export default AddUser;