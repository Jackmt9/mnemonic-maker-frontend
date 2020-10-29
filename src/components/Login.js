import React from "react";
import {connect} from 'react-redux'
import {loginUser} from '../services/utils'

class Login extends React.Component {

  state = {
      email: "",
      password: "",
      // auth: false
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
      this.props.propsAddUser(this.state)
  }

  handleResponse = (resp) => {
      if (resp.message) {
          alert(resp.message)
      } else {
          localStorage.token = resp.token
          console.log(resp)
          this.setState({
              auth: true
          })
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
              <input type="submit" value="Submit"/>
              {/* {this.state.auth? <Redirect to='/search'/> : ''} */}
          </form>
      )
  }
}

let addUser = (user) => {
  return {
    type: "ADD_USER",
    payload: user
  }
}


let mapDispatchToProps = {
propsAddUser: addUser
}

// mapDispatchToProps is a POJO that will be merged as props

export default connect(null, mapDispatchToProps)(Login);
// export default connect(null, {addOnePet})(PetForm)