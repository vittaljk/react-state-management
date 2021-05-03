import { EmployeeList } from './Emplyoee/containers';
import { EmployeeProvider } from './Emplyoee/store';
import { themes } from './constants';
import { ThemeContext } from './Contexts';

function App() {
  return (
    <div className="App">
      <ThemeContext.Provider value={themes.dark}>
        <EmployeeProvider>
          <EmployeeList />
        </EmployeeProvider>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
