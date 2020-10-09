import React, { createElement } from "react";
import { fetchMnemonic } from './services/utils'
export default class Home extends React.Component {
  state = {
      query: '',
  }
  
  handleChange = (e)=>{
    this.setState({[e.target.name]: e.target.value})
  }
  
  handleSubmit = (e) => {
    e.preventDefault()
    // const lyricsDiv = document.getElementById('lyrics')
    // lyricsDiv.innerText = ''
    // const loading = document.createElement('img')
    // loading.src = 'https://media.giphy.com/media/DY2ujmJHaO9Vu/giphy.gif'
    // lyricsDiv.append(loading)
    fetchMnemonic(this.state.query)
    .then(r => {
      console.log(r)

      this.appendLyrics(r.song, r.matching_phrase)
      }
    ) 
  }
    
  appendLyrics = (song, matchingPhrase) => {
    let songDiv = document.getElementById('song')
    songDiv.innerText = ''
    
    let lyrics = document.createElement('p')
    lyrics.innerText = song.lyrics

    let title = document.createElement('h1')
    title.innerText = song.full_title

    songDiv.append(title, lyrics)
  }

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
        <div id="song"></div>
      </>
    );
  }
}

