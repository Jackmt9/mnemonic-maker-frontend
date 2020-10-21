import React from "react";
import logo from './assets/home-logo.jpg'
import { fetchMnemonic } from './services/utils'
import SongLyrics from './components/SongLyrics'
import SongHeader from './components/SongHeader'
import SearchBar from './components/SearchBar/SearchBar'
import SummaryCard from "./components/SummaryCard";
export default class Home extends React.Component {

  state = {
    query: "",
    currentArtist: 'any',
    handleSearch: false,
    currentSong: null,
    matchingPhrase: "",
    currentSongIndex: 0,
    orderMatters: true,
    error: null,
  };

  componentDidMount = ()=>{
    let logoImage = document.createElement('img')
    logoImage.src = logo
    if(!this.state.currentSong){
      document.getElementById('logo-container').append(logoImage)
    }
    else{
    document.getElementById("logo-container").innerHTML = ''
    }
  }

  refreshPage = () => {
    this.setState({ handleSearch: false });
  };

  handleSubmit = (e, query, bookmark=0, artist, order) => {
    this.setState({ query: query, currentArtist: artist});
    fetchMnemonic(query, bookmark, artist, order).then((r) => {
      console.log(r)
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
          currentSongIndex: r.current_song_index
        });
        document.getElementById("logo-container").innerHTML = "";
      }
    });
    e.preventDefault();
  }

  render() {
    return (
      <>
        <SearchBar handleSubmit={this.handleSubmit} />
        {this.state.error ? <div id="error-div"></div> : null}
        <div id="logo-container"></div>
        {this.state.currentSong && !this.state.error ? (
          <div id="full-body-div">
            <>
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
            </>
            <SongHeader
              song={this.state.currentSong}
              matchingPhrase={this.state.matchingPhrase}
            />
            <SummaryCard
              query={this.state.query}
              youtubeId = {this.state.youtubeId}
              matchingPhrase={this.state.matchingPhrase}
            />
            <SongLyrics
              query={this.state.query}
              handleSearch={this.state.handleSearch}
              lyrics={this.state.currentSong.lyrics}
              matchingPhrase={this.state.matchingPhrase}
            />
          </div>
        ) : null}
      </>
    );
  }
}

