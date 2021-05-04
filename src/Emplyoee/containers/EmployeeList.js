import React, { useContext } from 'react'
import { EmployeeContext } from '../store';
import { ThemeContext } from '../../Contexts';

function EmployeeList() {
    const theme = useContext(ThemeContext);
    const { addEmployee, employees } = useContext(EmployeeContext);

    function addEmployeeHandler() {
        const newEmployee = {
            id: employees.length + 1,
            name: 'vittal',
            location: 'Bangalore',
            designation: 'Developer'
        }
        addEmployee(newEmployee);
    }
    
    return (
        <div style={{ background: theme.background, color: theme.foreground}}>
            <div onClick={addEmployeeHandler}>Add</div>
            {employees.map(employee => (
                <div key={employee.id}>
                    {employee.name} - {employee.designation}
                </div>
            ))}
        </div>
    )
}

export default EmployeeList
