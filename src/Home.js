import React from "react";
import logo from './assets/home-logo.jpg'
import { fetchMnemonic } from './services/utils'
import SearchBar from './components/SearchBar/SearchBar'
import SummaryCard from "./components/SummaryCard";
import Result from "./components/Result";
export default class Home extends React.Component {

  state = {
    query: "",
    currentArtist: 'any',
    currentSong: null,
    matchingPhrase: "",
    currentSongIndex: 0,
    orderMatters: true,
    error: null,
    saved: false,
    resultDisplayed: false
  };

  // toggleScroll = ()=>{
  //   this.setState({resultDisplayed: !this.state.resultDisplayed});
  // }


  handleSubmit = (e, query, bookmark=0, artist, order) => {
    this.setState({ query: query, currentArtist: artist});
    fetchMnemonic(query, bookmark, artist, order).then((r) => {
      // console.log(r)
      if (r.error) {
        this.setState({ error: r.error });
        let errorDiv = document.getElementById("error-div");
        errorDiv.innerText = r.error;
      } else {
        this.setState({
          currentSong: r.song,
          youtubeId: r.youtube_id,
          matchingPhrase: r.matching_phrase,
          error: null,
          currentSongIndex: r.current_song_index,
          resultDisplayed: true
        })
        document.getElementById("logo-container").innerHTML = "";
        const toggleScroll = setInterval(() => {
          this.setState({ resultDisplayed: false });
          console.log(this.state.resultDisplayed);
          clearInterval(toggleScroll)
        }, 1000);
      }
    });
    e.preventDefault();
  }

  toggleSave = ()=>{
    this.setState({saved: !this.state.saved})
  }

  render() {
    return (
      <>
        <SearchBar handleSubmit={this.handleSubmit} />
        {this.state.error ? <div id="error-div"></div> : null}
        <div id="logo-container"></div>
        {this.state.currentSong && !this.state.error ? (
          <div id="full-body-div">
            {/* <>
              <button
                onClick={(e) =>
                  this.handleSubmit(
                    e,
                    this.state.query,
                    this.state.currentSongIndex
                  )
                }
              >
                Find another matching phrase
              </button>
            </> */}


            <Result 
            saved = {this.state.saved}
            toggleSave = {this.toggleSave}
            song={this.state.currentSong}
            matchingPhrase={this.state.matchingPhrase}
            query={this.state.query}
            handleSearch={this.state.handleSearch}
            lyrics={this.state.currentSong.lyrics}
            youtubeId={this.state.youtubeId}
            resultDisplayed={this.state.resultDisplayed}
            // handleSubmit={this.handleSubmit(e, this.state.query,
            //   this.state.currentSongIndex)}
            />

            <button
              onClick={(e) => this.handleSubmit(e, this.state.query,
                  this.state.currentSongIndex)
              }
            >
              Find another matching phrase
            </button>

          </div>

        ) : null}
      </>
    );
  }
}

