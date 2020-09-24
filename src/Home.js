import React, { createElement } from "react";
import { fetchMnemonic } from './services/utils'
export default class Home extends React.Component {
  state = {
      query: '',
      lyrics: '',
      artist: ''
  }
  
  handleChange = (e)=>{
    // console.log(e.target.value)
    this.setState({[e.target.name]: e.target.value})
    console.log(this.state)
  }
  
  handleSubmit = (e) => {
    const lyricsDiv = document.getElementById('lyrics')
    lyricsDiv.innerText = ''
    e.preventDefault()
    const loading = document.createElement('img')
    loading.src = 'https://media.giphy.com/media/DY2ujmJHaO9Vu/giphy.gif'
    lyricsDiv.append(loading)
    fetchMnemonic(this.state.query)
    .then(r => {
      // console.log(r.response)
      this.appendLyrics(r.response.lyrics, lyricsDiv)
      
      // this.setState({
        //   lyrics: r.response.lyrics
        // })
        // lyricsDiv.innerText = this.state.lyrics
      }
      )
      
    }
    
    appendLyrics = (lyrics) => {
      const parseRange = document.createRange();
      const parse = Range.prototype.createContextualFragment.bind(parseRange);
      // debugger
      //   let parsedLyrics = parse(lyrics);
      //  let pTag = document.createElement('p')
      //  pTag.innerHTML 
      let lyricsDiv = document.getElementById('lyrics')
  let parsedLyrics = parse(lyrics)
  let moneyLyrics = parsedLyrics.children[0]
  lyricsDiv.innerHTML = moneyLyrics.innerHTML
      // let div = document.createElement('div')
      // div.innerHTML = moneyLyrics
      // console.log(lyricsDiv)
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
          <label>
            Filter by Artist:
            <input
              type="text"
              name="artist"
              placeholder="Any"
              value={this.state.artistFilter}
              onChange={this.handleChange}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <div id="lyrics"></div>
      </>
    );
  }
}

