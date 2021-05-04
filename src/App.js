import { EmployeeList } from './Emplyoee/containers';
import { EmployeeProvider } from './Emplyoee/store';
import { themes } from './constants';
import { ThemeContext } from './Contexts';
import { UserProvider } from './User/store';
import { UserList } from './User/containers';
import { Layout } from './Layout';

function App() {
  return (
    <div className="App">
      {/* <ThemeContext.Provider value={themes.dark}>
        <EmployeeProvider>
          <EmployeeList />
        </EmployeeProvider>
      </ThemeContext.Provider>
      <ThemeContext.Provider value={themes.light}>
        <UserProvider>
          <UserList />
        </UserProvider>
      </ThemeContext.Provider> */}
      <Layout />
    </div>
  );
}

export default App;
