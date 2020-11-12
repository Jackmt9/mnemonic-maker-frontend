import React from "react";
import { fetchMnemonic } from '../services/utils'
import SearchBar from './SearchBar/SearchBar'
import Result from "./Result";

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

  // toggleScroll = ()=>{
  //   this.setState({resultDisplayed: !this.state.resultDisplayed});
  // }
  scrollSearchIntoView = ()=>{
  //  let search_bar  = document.getElementById('search-bar')
  //     search_bar.scrollIntoView({behavior: 'smooth'})
  //     console.log('scrolling',search_bar)
   window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  goToNextResult = (e, query, current_song_index = 0, artist, order_matters) => {
    console.log("next result");
    this.handleSubmit(e, query, current_song_index, artist, order_matters);
  };
  handleSubmit = (e, query, current_song_index = 0, artist, order_matters) => {
    this.setState({ query: query, currentArtist: artist });
    fetchMnemonic(query, current_song_index, artist, order_matters).then((r) => {
      if (r.error) {
        this.setState({ error: r.error });
        let errorDiv = document.getElementById("error-div");
        errorDiv.innerText = r.error;
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
        <div id= 'search-bar'>
        <SearchBar handleSubmit={this.handleSubmit} />
        </div>
        {this.state.error ? <div id="error-div"></div> : null}
        <div id="logo-container"></div>
        <div id="full-body-div">
          {this.props.globalState.search.song.full_title ? (
            <Result
              handleSubmit={this.handleSubmit}
              globalState={this.props.globalState}
              scrollSearchIntoView = {this.scrollSearchIntoView}
            />
            
          ) : null}

        </div>
      </div>
    );
  }
}


