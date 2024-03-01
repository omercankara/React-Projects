import React, { useReducer } from "react"
import usersReducer from "../reducers/usersReducer"

export const UsersContext = React.createContext();

const UsersContextProvider = (props) => {

  const initialState = { //başlangıç elemanları boş veriler
    users: [],
    loading: false
  }

  const [state, dispatch] = useReducer(usersReducer, initialState)


  const searchUsers = (keyword) => {
    setLoading(true)

    setTimeout(() => {
      fetch("https://api.github.com/search/users?q=" + keyword)
        .then(res => res.json())
        .then(data => {
          dispatch({
            type: "SEARCH_USERS", //usersReducers içindeki aksiyonu çalıştır
            users: data.items //action altındaki usersı ifade eder
          })
        })
    }, 1000)
  }

  const setLoading = () => {
    dispatch({
      type: "SET_LOADING",
    })
  }

  const clearUsers = () => {
    dispatch({
      type: "CLEAR_USERS"
    })
  }


  return (
    <UsersContext.Provider value={{
      users:state.users,
      loading:state.loading,
      searchUsers,
      clearUsers
    }}>
      {props.children}
    </UsersContext.Provider>
  )

}


export default UsersContextProvider