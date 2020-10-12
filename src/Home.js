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
    
    fetchMnemonic(this.state.query)
    .then(r => {
      console.log(r)
      if (r.error) {
        let songDiv = document.getElementById('song')
        songDiv.innerText = r.error
      } else {
        this.appendLyrics(r.song, r.matching_phrase)
      }
      }
    ) 
  }
    
  appendLyrics = (song, matchingPhrase) => {
    let songDiv = document.getElementById('song')
    songDiv.innerText = ''

    let lyrics = document.createElement('p')

    song.lyrics.split('\n').forEach(line => {
      lyrics.innerHTML += line.replace(matchingPhrase, (match) => `<mark>${match}</mark>`)
      lyrics.innerHTML += '<br/>'
    })

    let title = document.createElement('a')
    title.innerText = song.full_title
    title.href = song.url

    let songImage = document.createElement('img')
    songImage.src = song.image
    songImage.alt = 'Album Cover'


    songDiv.append(title, songImage, lyrics)
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

