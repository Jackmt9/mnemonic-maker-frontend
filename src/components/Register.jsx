import React from "react";
import {registerUser} from '../services/utils'
export default class Register extends React.Component {
  
  state = {
    first_name: '',
    last_name: '',
    email: '',
    password: ''
  }

  handleChange = ({target}) => { 
      this.setState({
          [target.name]: target.value
      })
      console.log(this.state)
  }

  handleSubmit = (evt) => {
      evt.preventDefault()
      const user = this.state
      
      registerUser(user)
      .then((r) => {
        if(r.message){
          alert(r.message)
        } else{
          localStorage.token = r.token
          this.props.redirect()
        }
      })
  }

  render() {
      return(
        <form onSubmit={this.handleSubmit}>
            <h1>Create Account</h1>
            <label htmlFor="first_name">First Name:</label>
            <input type="text" autoComplete="off" name="first_name" value={this.state.first_name} onChange={this.handleChange}/>
            <br/>
            <label htmlFor="last_name">Last Name:</label>
            <input type="text" autoComplete="off" name="last_name" value={this.state.last_name} onChange={this.handleChange}/>
            <br/>
            <label htmlFor="email">Email:</label>
            <input type="text" autoComplete="off" name="email" value={this.state.email} onChange={this.handleChange}/>
            <br/>
            <label htmlFor="password">Password:</label>
            <input type="text" autoComplete="off" name="password" value={this.state.password} onChange={this.handleChange}/>
            <br/>
            <input type="submit" value="Create Account"/>
        </form>
      )
  }
}
