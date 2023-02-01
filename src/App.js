import React, {Fragment, useState} from 'react';
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";


function App() {

    const [usersList, setUsersList] = useState([])

    const addUserHandler = (userName, userAge) => {
        setUsersList((prevUsersList) => {
            return [
                ...prevUsersList,
                { name: userName, age: userAge, id: Math.random().toString() }]
        })
    }

    return (
        <Fragment>
            <AddUser onAddUser={addUserHandler}/>
            {usersList.length && <UsersList users={usersList}/>}
        </Fragment>
    );
}

export default App;
