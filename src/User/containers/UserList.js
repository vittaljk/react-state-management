import React, { useContext } from 'react'
import { UserContext } from '../store';
import { ThemeContext } from '../../Contexts';


function UserList() {
    const theme = useContext(ThemeContext);
    const { users } = useContext(UserContext);
    console.log('users', users);

    return (
        <div style={{ background: theme.background, color: theme.foreground}}>
            UserList
        </div>
    )
}

export default UserList
