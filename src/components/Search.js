import React from "react";
import { fetchMnemonic } from '../services/utils'
import SearchBar from './SearchBar/SearchBar'
import Result from "./Result";
import {connect} from 'react-redux'

class Search extends React.Component {
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

  goToNextResult = (e, query, current_song_index = 0, artist, order_matters) => {
    console.log("next result");
    this.handleSubmit(e, query, current_song_index, artist, order_matters);
  };
  handleSubmit = (e, query, current_song_index = 0, artist, order_matters) => {
    this.setState({ query: query, currentArtist: artist });
    // console.log('nowhere man log', query, this.props.globalState.search)
    console.log('fetching like a dog', query, current_song_index, artist, order_matters )
    fetchMnemonic(query, current_song_index, artist, order_matters).then((r) => {
      console.log(r)
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
        const toggleScroll = setInterval(() => {
          this.setState({ resultDisplayed: false });
          console.log(this.state.resultDisplayed);
          clearInterval(toggleScroll);
        }, 1000);
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
        <SearchBar handleSubmit={this.handleSubmit} />
        {this.state.error ? <div id="error-div"></div> : null}
        <div id="logo-container"></div>
        <div id="full-body-div">
          {this.props.globalState.search.song.full_title ? (
            <Result
              handleSubmit={this.handleSubmit}
              globalState={this.props.globalState}
            />
          ) : null}
        </div>
      </div>
    );
  }
}


// Redux implemented below to gain access to the "global state"

let mapStateToProps = (globalState) => {
  return {
    globalState: globalState
  }
}

// let functionThatAddsProps = connect(mapStateToProps)

export default connect(mapStateToProps)(Search)


