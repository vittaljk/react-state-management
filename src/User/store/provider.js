import React, { useReducer } from 'react';
import UserContext from './context';
import initialState from './initialstate';
import userReducer from './reducer';

const UserProvider = ({ children }) => {
    const [state, dispatch] = useReducer(userReducer, initialState);

    function addUser(user) {
        dispatch({
            type: "ADD_USER",
            payload: user
        });
    }

    function editUser(user) {
        dispatch({
            type: "EDIT_USER",
            payload: user
        });
    }

    function removeUser(id) {
        dispatch({
            type: "REMOVE_USER",
            payload: id
        });
    }

    return (
        <UserContext.Provider
            value={{
                users: state.users,
                addUser,
                editUser,
                removeUser
            }}
        >
            {children}
        </UserContext.Provider>
    );
};

export default UserProvider;