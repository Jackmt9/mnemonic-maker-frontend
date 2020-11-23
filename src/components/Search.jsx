import React from "react";
import { fetchMnemonic } from '../services/utils'
import SearchBar from './SearchBar/SearchBar'
import Result from "./Result";
import NoResults from './NoResults'

export default class Search extends React.Component {
  state = {
    query: "",
    currentArtist: "any",
    currentSong: null,
    matchingPhrase: "",
    currentSongIndex: 0,
    order_matters: true,
    error: null,
    saved: false,
    resultDisplayed: false,
  };

  goToNextResult = (e, query, current_song_index = 0, artist, order_matters) => {
    console.log("next result");
    this.handleSubmit(e, query, current_song_index, artist, order_matters);
  };
  
  handleSubmit = (e, query, current_song_index = 0, artist, order_matters) => {
    this.setState({ query: query, currentArtist: artist });
    fetchMnemonic(query, current_song_index, artist, order_matters).then((r) => {
      console.log(r)
      if (r.error) {
        this.setState({ error: r.error });
        document.getElementById('error-div').scrollIntoView()
        this.props.handleSearch(r)
      } else {
        this.setState({
          error: null,
          currentSongIndex: r.current_song_index,
          resultDisplayed: true,
        });
        this.props.handleSearch(r)
        document.getElementById("logo-container").innerHTML = "";
      }
    });
    e.preventDefault();
  };

  toggleSave = () => {
    this.setState({ saved: !this.state.saved });
  };

  render() {
    return (
      <div className="home">
        <div id= 'search-bar' className = "search-error-inline">
        <SearchBar handleSubmit={this.handleSubmit} />
        </div>
        <div id = "error-div">
        {this.state.error ? < NoResults/> : null}
        </div>
        <div id="logo-container"></div>
        <div id="full-body-div">
          {
            this.props.globalState.search.song && this.props.globalState.search.song.title ?  
            <Result handleSubmit={this.handleSubmit} globalState={this.props.globalState}/>
            :
            null
          }
        </div>
      </div>
    );
  }
}


