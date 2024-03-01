import Alert from "./components/Alert"
import Navbar from "./components/Navbar"
import Search from "./components/Search"
import UserList from "./components/UserList"
import AlertContextProvider from "./context/alertContext"

import UsersContextProvider from "./context/usersContext"


const App = () => {

  return (
    <UsersContextProvider>
      <AlertContextProvider>
        <Navbar className="mb-2" icon="bi bi-github" title="ÖMERCAN" />
        <Search />
        <Alert />
        <div className="container mt-3">
          <UserList />
        </div>
      </AlertContextProvider>
    </UsersContextProvider>
  )
}

export default App



