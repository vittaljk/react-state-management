import { useContext } from 'react';
import EmployeeContext from './context';

function useEmployee() {
    const context = useContext(EmployeeContext)
    if (context === undefined) {
      throw new Error('useEmployee must be used within a EmployeeProvider')
    }
    return context
}

export default useEmployee;