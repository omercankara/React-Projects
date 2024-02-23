import Alert from "./components/Alert"
import Navbar from "./components/Navbar"
import Search from "./components/Search"
import UserList from "./components/UserList"
import React, { Component } from 'react'

export class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      loading: false,
      users: [],
      error: null
    }
  }

  componentDidMount() {
    this.setState({
      loading: true
    })
    setTimeout(() => {
      fetch("https://api.github.com/users")
        .then(res => res.json())
        .then(data => this.setState({ users: data, loading: false, }))
    }, 2000)
  }
  searchUsers = (keyword) => {
    this.setState({
      loading: true
    })
    setTimeout(() => {
      fetch("https://api.github.com/search/users?q=" + keyword)
        .then(res => res.json())
        .then(data => this.setState({ users: data.items, loading: false, }))
    }, 100)
  }
  clearResult = () => {
    this.setState({
      users: []
    })
  }
  displayAlert = (msg, type) => {
    this.setState({
      error: {
        msg: msg,
        type: type
      }
    })
    setTimeout(() => {
      this.setState({
        error:null
      })
    }, 2500);
  }
  render() {
    return (
      <div>
        <Navbar className="mb-2" icon="bi bi-github" title="ÖMERCAN" />
        <Search
          displayAlert={this.displayAlert}
          clearResult={this.clearResult}
          searchUsers={this.searchUsers} className="mt-1" />
          <Alert error={this.state.error} />
        <div className="container mt-3">
          <UserList loading={this.state.loading} users={this.state.users} />
        </div>
      </div>
    )
  }
}

export default App



