import React, { createElement } from "react";
import { fetchMnemonic } from './services/utils'
import Song from './components/Song'
export default class Home extends React.Component {
  state = {
      query: 'e',
      handleSearch: false
  }
  handleChange = (e)=>{
    this.setState({[e.target.name]: e.target.value})
  }
  refreshPage = ()=>{
    this.setState({ handleSearch: false});
  }
  renderSong = ()=>{
  }
  handleSubmit = (e) => {
    e.preventDefault()
    setTimeout( ()=> {
        this.setState({ handleSearch: true });
    }, 10);
    this.refreshPage()
    };
     ;

  render() {
    return (
           <>
        <form onSubmit={this.handleSubmit}>
          <label>
            Enter Input:
            <input
              type="text"
              name="query"
              value={this.state.query}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <input type="submit" value="Submit" />
        </form>
        {this.state.handleSearch?
        <Song query ={this.state.query}
            handleSearch ={this.state.handleSearch}/>
            :
            null
            }
      </>
    );
  }
}

