import React, { useContext } from 'react'
import { UserContext } from '../store';
import { ThemeContext } from '../../Contexts';
import { useEmployee } from '../../Emplyoee/store';

function UserList() {
    const theme = useContext(ThemeContext);
    const { users } = useContext(UserContext);
    console.log('users', users);
    // try {
    //     var { addEmployee, employees } = useEmployee();
    //     console.log('===============  employees ==============', employees);
    // } catch (error) {
    //     console.log(error);
    // }

    return (
        <div style={{ background: theme.background, color: theme.foreground}}>
            UserList
        </div>
    )
}

export default UserList
