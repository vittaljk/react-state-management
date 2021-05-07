import React, { useReducer } from 'react';
import EmployeeContext from './context';
import initialState from './initialstate';
import employeeReducer from './reducer';
import * as ActionTypes from './types';

const EmployeeProvider = ({ children }) => {
    const [state, dispatch] = useReducer(employeeReducer, initialState);
    const { data: employees, loading, loaded } = state;

    function getEmployees() {
        dispatch({
            type: ActionTypes.GET_EMPLOYEES
        })
    }

    function getEmployeesSuccess(payload) {
        dispatch({
            type: ActionTypes.GET_EMPLOYEES_SUCCESS,
            payload
        })
    }

    function getEmployeesError(payload) {
        dispatch({
            type: ActionTypes.GET_EMPLOYEES_ERROR,
            payload
        })
    }

    // function addEmployee(employee) {
    //     dispatch({
    //         type: "ADD_EMPLOYEE",
    //         payload: employee
    //     });
    // }

    // function editEmployee(employee) {
    //     dispatch({
    //         type: "EDIT_EMPLOYEE",
    //         payload: employee
    //     });
    // }

    // function removeEmployee(id) {
    //     dispatch({
    //         type: "REMOVE_EMPLOYEE",
    //         payload: id
    //     });
    // }

    return (
        <EmployeeContext.Provider
            value={{
                employees,
                loading,
                loaded,
                getEmployees,
                getEmployeesSuccess,
                getEmployeesError
            }}
        >
            {children}
        </EmployeeContext.Provider>
    );
};

export default EmployeeProvider;