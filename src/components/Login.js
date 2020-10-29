import React from "react";
import {connect} from 'react-redux'
import {loginUser} from '../services/utils'

class Login extends React.Component {

  state = {
      email: "",
      password: ""
  }

  handleChange = ({target}) => {
      this.setState({
          [target.name]: target.value
      })
  }

  handleSubmit = (evt) => {
      evt.preventDefault()
      loginUser(this.state)
      .then((loggedInUser) => {
        this.handleResponse(loggedInUser)
      })
  }

  handleResponse = (resp) => {
      if (resp.message) {
          alert(resp.message)
      } else {
          localStorage.token = resp.token
          this.props.propsAddUser(resp.user)
          console.log(resp)
      }
  }

  render() {
      return(
          <form onSubmit={this.handleSubmit}>
              <h1>Login</h1>
              <label htmlFor="email">email:</label>
              <input type="text" autoComplete="off" name="email" value={this.state.email} onChange={this.handleChange}/>
              <br/>
              <label htmlFor="password">Password:</label>
              <input type="password" autoComplete="off" name="password" value={this.state.value} onChange={this.handleChange}/>
              <br/>
              <input type="submit" value="Login"/>
          </form>
      )
  }
}

// Redux interactions below this line

let addUser = (user) => {
  return {
    type: "LOGIN",
    payload: user
  }
}

let mapDispatchToProps = {
    propsAddUser: addUser
}

export default connect(null, mapDispatchToProps)(Login);