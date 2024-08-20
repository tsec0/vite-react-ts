/* eslint-disable @typescript-eslint/no-unused-vars */
import { createContext, useEffect, useState } from "react";

export interface User {
    name: string,
    age: number,
    hasFamily: boolean,
    country: Countries,
}

export enum Countries {
    France = "France",
    Brazil = "Brazil",
    Bulgaria = "Bulgaria",
    US = "US",
    UK = "UK",
}

interface UserContextType {
    users: User[] | null;
    addUser: (user: User) => void;
    updateUser: (id: string) => void;
    deleteUser: (id: string) => void;
}

const contextinitialValues = {
    users: null,
    addUser: () => null,
    updateUser: () => null,
    deleteUser: () => null,
};

export const UserContext = createContext<UserContextType>(contextinitialValues);

interface Props {
    children: React.ReactNode;
}

export const UserProvider = (props: Props) => {
    
    const [users, setUsers] = useState<User[] | null>(null);

    // fetch data
    useEffect(() => {
        setUsers([{name: "tseco", age: 22, hasFamily: false, country: Countries.Bulgaria}]);
    }, []);

    const addUser = (user: User) => null;
    const updateUser = (id: string) => null;
    const deleteUser = (id: string) => null;

    return (
        <UserContext.Provider value={{users, addUser, updateUser, deleteUser}}>
            {props.children}
        </UserContext.Provider>
    )
}