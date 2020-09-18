import React from "react";
import { fetchMnemonic } from './services/utils'
export default class Home extends React.Component {
  state = {
      query: ''
  }
  
  handleChange = (e)=>{
    console.log(e.target.value)
    this.setState({query: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    fetchMnemonic(this.state.query)
    .then(r => 
      console.log(r)
    )
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Enter Input:
          <input type="text" value={this.state.query} onChange={this.handleChange} />
        </label>
        <input type='submit' value="Submit" />
      </form>
    );
  }
}

