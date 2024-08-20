/* eslint-disable @typescript-eslint/no-unused-vars */
import { useContext } from "react";
import { User, UserContext } from './UserContextProvider';

const NewPerson = (props: User): JSX.Element => {

    //const {users, updateUser, deleteUser, addUser} = useContext(UserContext);

    // should map the users
    return (
        <div>
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Has Family: {props.hasFamily ? "ДА" : "НЕ" }</p>
            <p>Country of origin: {props.country}</p>
        </div>
    )
}

export default NewPerson;