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
    const lyricsDiv = document.getElementById('lyrics')
    lyricsDiv.innerText = ''
    e.preventDefault()
    const loading = document.createElement('img')
    loading.src = 'https://media.giphy.com/media/DY2ujmJHaO9Vu/giphy.gif'
    lyricsDiv.append(loading)
    fetchMnemonic(this.state.query)
    .then(r => {
      console.log(r.response)
      this.appendLyrics(r.response, lyricsDiv)

      // this.setState({
      //   lyrics: r.response.lyrics
      // })
      // lyricsDiv.innerText = this.state.lyrics
      }
    )

  }

  appendLyrics = ({lyrics, matching_range}, lyricsDiv) => {
    const parseRange = document.createRange();
    const parse = Range.prototype.createContextualFragment.bind(parseRange);

    let lyricsArray = lyrics.split(' ')
    lyricsArray.splice(matching_range[1], 0, "</span>")
    lyricsArray.splice(matching_range[0], 0, "<span class='matching-lyrics'>")
    let lyricsWithSpan = lyricsArray.join(' ')
  
    console.log(lyricsArray)
    lyricsDiv.innerHTML = parse(lyricsWithSpan)

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

