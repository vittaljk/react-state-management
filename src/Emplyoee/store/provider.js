import React, { useReducer } from 'react';
import EmployeeContext from './context';
import initialState from './initialstate';
import employeeReducer from './reducer';

const EmployeeProvider = ({ children }) => {
    const [state, dispatch] = useReducer(employeeReducer, initialState);

    function addEmployee(employee) {
        dispatch({
            type: "ADD_EMPLOYEE",
            payload: employee
        });
    }

    function editEmployee(employee) {
        dispatch({
            type: "EDIT_EMPLOYEE",
            payload: employee
        });
    }

    function removeEmployee(id) {
        dispatch({
            type: "REMOVE_EMPLOYEE",
            payload: id
        });
    }

    return (
        <EmployeeContext.Provider
            value={{
                employees: state.employees,
                addEmployee,
                editEmployee,
                removeEmployee
            }}
        >
            {children}
        </EmployeeContext.Provider>
    );
};

export default EmployeeProvider;