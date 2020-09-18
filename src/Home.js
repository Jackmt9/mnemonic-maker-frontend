import React from "react";
export default class Home extends React.Component {
    state = {
        query: ''
    }
    
    handleChange = (e)=>{
        e.preventDefault()
        console.log(e.target.value)
        this.setState({query: e.target.value})
        console.log(this.state)
    }         
  render() {
    return (
      <nav type='text' onChange={(e)=>this.handleChange(e)} value = {this.state.query}>
          <input placeholder='stuff I wanna remember...'/>
      </nav>
    );
  }
}

