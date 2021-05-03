import { createContext } from 'react';
import initialState from './initialstate';

const UserContext = createContext(initialState);

export default UserContext;