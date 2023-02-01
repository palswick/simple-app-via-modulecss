import Button from "../UI/Button";
import Card from "../UI/Card";
import styles from './AddUser.module.css'
import {Fragment, useRef, useState} from "react";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {

    const nameInputRef = useRef();
    const ageInputRef = useRef();

    const [error, setError] = useState('');

    const addUserHandler = (event) => {
        event.preventDefault();
        const enteredName = nameInputRef.current.value
        const enteredAge = ageInputRef.current.value

        if (enteredName.trim().length === 0) {
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid name (non-empty value).'
            })
            nameInputRef.current.value = ''
            return;
        }

        if (enteredAge.trim().length === 0 || +enteredAge < 1) {
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid age (non-empty value but greater than zero).'
            })
            ageInputRef.current.value = ''
            return;
        }

        props.onAddUser(enteredName, enteredAge)

        nameInputRef.current.value = ''
        ageInputRef.current.value = ''
    }

    const removeUsersHandler = (event) => {
        event.preventDefault()
        nameInputRef.current.value = ''
        ageInputRef.current.value = ''
        props.onRemoveUsers()
    }

    const errorHandler = () => {
        setError(null)
    }

    return (
        <Fragment>
            {error && <ErrorModal title={error.title}
                                  message={error.message}
                                  onConfirm={errorHandler}/>}
            <Card className={styles.input}>
                <form onSubmit={addUserHandler} onReset={removeUsersHandler}>
                    <label htmlFor='username'>Username</label>
                    <input id='username'
                           type='text'
                           ref={nameInputRef}/>
                    <label htmlFor='age'>Age</label>
                    <input id='age'
                           type='number'
                           ref={ageInputRef}/>
                    <Button type='submit'>Add User</Button>
                    <Button type='reset'>Clear</Button>
                </form>
            </Card>
        </Fragment>

    );
};

export default AddUser;