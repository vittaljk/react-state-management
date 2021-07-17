/* eslint-disable no-unused-vars */
import React, { useContext, useEffect } from 'react'
import { useEmployee } from '../store';
import { ThemeContext } from '../../Contexts';
import axios from 'axios';

function EmployeeList() {
    const theme = useContext(ThemeContext);
    // const { addEmployee, employees } = useEmployee();
    const { employees, getEmployees, getEmployeesSuccess, getEmployeesError } = useEmployee();

    // function addEmployeeHandler() {
    //     const newEmployee = {
    //         id: employees.length + 1,
    //         name: 'vittal',
    //         location: 'Bangalore',
    //         designation: 'Developer'
    //     }
    //     addEmployee(newEmployee);
    // }
    async function fetchEmployees() {
        getEmployees();
        try {
            const employees = await axios.get(`https://jsonplaceholder.typicode.com/users`)
            console.log('employees', employees);
            if (employees?.status === 200 && employees?.data) {
                getEmployeesSuccess(employees.data)
            }
        } catch (error) {
            console.log('error', error);
            getEmployeesError(error);
        }
    }

    useEffect(() => {
        fetchEmployees();
    }, []);

    return (
        <div style={{ background: theme.background, color: theme.foreground}}>
            {/* <div onClick={addEmployeeHandler}>Add</div> */}
            {employees.map(employee => (
                <div key={employee.id}>
                    {employee.name} - {employee.designation}
                </div>
            ))}
        </div>
    )
}

export default EmployeeList
