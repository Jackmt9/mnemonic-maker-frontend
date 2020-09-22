import React, { createElement } from "react";
import { fetchMnemonic } from './services/utils'
export default class Home extends React.Component {
  state = {
      query: '',
      lyrics: ''
  }
  
  handleChange = (e)=>{
    console.log(e.target.value)
    this.setState({query: e.target.value})
  }

  handleSubmit = (e) => {
    const results = document.getElementById('lyrics')
    results.innerText = ''
    e.preventDefault()
    const loading = document.createElement('img')
    loading.src = 'https://media.giphy.com/media/DY2ujmJHaO9Vu/giphy.gif'
    results.append(loading)
    fetchMnemonic(this.state.query)
    .then(r => {
      console.log(r.response)

      this.setState({
        lyrics: r.response.lyrics
      })
      results.innerText = ''
      results.innerText = this.state.lyrics
      // console.log(this.state.lyrics)
      }
    )

  }

  render() {
    return (
      <>
      <form onSubmit={this.handleSubmit}>
        <label>
          Enter Input:
          <input type="text" value={this.state.query} onChange={this.handleChange} />
        </label>
        <input type='submit' value="Submit" />
      </form>
      <div id='lyrics'></div>
      </>
    );
  }
}

