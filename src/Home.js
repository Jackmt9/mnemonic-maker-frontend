import React, { createElement } from "react";
import Button from 'react'
import { fetchMnemonic } from './services/utils'
import SongLyrics from './components/SongLyrics'
import SongHeader from './components/SongHeader'
import SearchBar from './components/SearchBar'
import SummaryCard from "./components/SummaryCard";
export default class Home extends React.Component {
  state = {
    query: "",
    handleSearch: false,
    currentSong: null,
    matchingPhrase: "",
    currentSongIndex: 0,
    error: null,
  };

  refreshPage = () => {
    this.setState({ handleSearch: false });
  };
  handleSubmit = (e, query, bookmark) => {
  console.log("bookmark:", this.state.currentSongIndex)
    this.setState({ query: query });
    fetchMnemonic(query, bookmark).then((r) => {
      if (r.error) {
        this.setState({ error: r.error });
        let errorDiv = document.getElementById("error-div");
        errorDiv.innerText = r.error;
      } else {
        this.setState({
          currentSong: r.song,
          matchingPhrase: r.matching_phrase,
          error: null,
          currentSongIndex: r.current_song_index
        });
        console.log("current bookmark", r.current_song_index);
        //  console.log("state", this.state.currentSong.lyrics)
      }
    });
    e.preventDefault();
    console.log(this.state);
  };
  render() {
    console.log("query:", this.state.query);
    return (
      <>
          <SearchBar handleSubmit={this.handleSubmit} />
          {this.state.error ?
        <div id='error-div'>
           </div>
          : null }
          {this.state.currentSong && !this.state.error? (
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

