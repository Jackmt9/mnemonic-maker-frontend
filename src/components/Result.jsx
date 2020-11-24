import React from "react";

import '../App.css'
import { saveBookmark } from '../services/utils'
import Modal from 'react-modal';
import CreatePlaylistForm from './AddToPlaylist'
import AddToPlaylist from './AddToPlaylist'
export default class Result extends React.Component {

  state = {
    saved: false,
    showModal: false,
    scrolled: false,
    showModal: false
  }

  componentDidMount = ()=>{
    this.appendLyrics()
    let result = document.getElementsByClassName("results")[0]
    result.scrollIntoView({behavior: 'smooth'})
    

  }

  componentDidUpdate = () => {
    this.appendLyrics()
    let result = document.getElementsByClassName("results")[0]
    result.scrollIntoView({behavior: 'smooth'})
    
  }

  toggleSave = ()=>{
    this.setState({saved: !this.state.saved})
    if(!this.state.saved){
      saveBookmark(this.props.globalState.user.playlists[0].id, this.props.globalState.search.song.id, this.props.globalState.search.input_phrase, this.props.globalState.search.matching_phrase, this.props.globalState.search.song.youtube_id)
    }
  }

  backToSearch = ()=>{
    // this.props.scrollSearchIntoView()
    this.setState({scrolled: !this.state.scrolled})
 
     window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  }
  
  appendLyrics = () => {
    let songDiv = document.getElementById("song");
    songDiv.innerText = "";
  
    let lyrics = document.createElement("p");
  
    this.props.globalState.search.song.lyrics.split("\n").forEach((line) => {
      lyrics.innerHTML += line.replace(
        this.props.globalState.search.matching_phrase,
        (match) => `<mark>${match}</mark>`
      );
      lyrics.innerHTML += "<br/>";
    });
    songDiv.append(lyrics);
  };

  toggleModal = ()=>{
    this.setState({showModal: !this.state.showModal})
    console.log(this.state.showModal)
  }

  render(){
    const customStyles = {
      content : {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)',
      'overflow-y'           :'auto',
      'max-height'           :'100vh'   
      }
    };
      return (
        <div className="results">
        <Modal
        isOpen={this.state.showModal}
        style = {customStyles}
        onRequestClose={this.toggleModal}
        scrollable = {true}
        >
          
          <AddToPlaylist 
          mountUser = {this.props.mountUser}
            globalState = {this.props.globalState}
            toggleModal={this.toggleModal}
          />
            <button onClick = {this.toggleModal}>
              Close
            </button>
        </Modal>
        {localStorage.token ? 
            <p onClick={this.toggleModal}
              id = "add-song"
              className="query-summary">
              {this.state.saved ? "✓" : "+"}
            </p>
            :
            <p>Register to add this bookmark to a playlist!</p>
            }
            <div id="song-image-container" className= "query-summary">
              <img width = '40' height = '40' src = {this.props.globalState.search.song.image} alt = {this.props.globalState.search.song.full_title}/>
          </div>
            <a href={this.props.globalState.search.song.url} >
              {this.props.globalState.search.song.full_title}</a>
          <div id="input-phrase-match" className="query-summary">
            Your Input:
            {"  " + this.props.globalState.search.input_phrase}
            <br />
            Matching Phrase:
            {" " + this.props.globalState.search.matching_phrase}
          </div>
          <button
            id="next-page-button"
            className="query-summary"
            onClick = {(e)=>this.props.handleSubmit(e, this.props.globalState.search.input_phrase, this.props.globalState.search.current_song_index, this.props.globalState.search.song.artist_id, this.props.globalState.search.order_matters)}
            >
            Next Result ⮕{" "}
          </button>
          <h2 id="title"></h2>

          <iframe
            title="youtube-vid"
            width="426"
            height="240"
            className="youtube-frame"
            src={`https://www.youtube.com/embed/${this.props.globalState.search.song.youtube_id}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            /> 
            <button onClick = {this.backToSearch} id = 'back-to-search'>
              
              <text>Back to search ⬆</text>
              
            </button>
          <div id="song"></div> 
        </div>
      );
  }
}
