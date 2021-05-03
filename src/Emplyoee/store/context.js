import { createContext } from 'react';
import initialState from './initialstate';

const EmployeeContext = createContext(initialState);

export default EmployeeContext;