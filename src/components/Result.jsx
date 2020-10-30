import React from "react";
import '../App.css'
import {connect} from 'react-redux'

export default class Result extends React.Component {

    // constructor(props) {
    //     super(props);
    //     this.boxRef = React.createRef();
    // }

    // componentWillMount = ()=>{
    //   // this.appendInfo()
    //   // this.appendLyrics();
    //   // // if (this.props.resultDisplayed) { 
    //   //   this.boxRef.current.scrollIntoView( { behavior: 'smooth' } );
    //   //   // }
    //   debugger
    //   }
      
      // componentDidUpdate = ()=>{
      //   if (this.props.resultDisplayed) {
      //     this.boxRef.current.scrollIntoView({ behavior: "smooth" });
      //   }
      //   // this.appendLyrics(this.props.lyrics, this.props.matchingPhrase);
      //   let songImageDiv = document.getElementById("song-image-container");
      //   let songTitle = document.getElementById("title");
      //   songImageDiv.innerHTML = "";
      //   songTitle.innerHTML = "";
      //   // this.appendInfo(this.props.song, this.props.matchingPhrase)
      // }
      
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

    // appendInfo = (song) => {
    //     let songImageDiv = document.getElementById("song-image-container");
    //     let title = document.createElement("a");
    //     title.innerText = song.full_title;
    //     title.href = song.url;
    //    let titleHeader = document.getElementById('title')
    //    titleHeader.append(title)
    //     let songImage = document.createElement('img')
    //     songImage.src = song.image;
    //     songImage.height = 40
    //     songImage.width = 40
    //     songImageDiv.append(songImage);
    // };

    componentDidMount = ()=>{
      this.appendLyrics()
    }
    render(){
      // debugger
        return (
          <div ref={this.boxRef} className="results">
            
              <p onClick={this.props.toggleSave}
                id="star-saver"
                className="query-summary">
                {this.props.saved ? "★" : "☆"}
              </p>
             <div id="song-image-container" className= "query-summary">
               <img width = '40' height = '40' src = {this.props.globalState.search.song.image} alt = {this.props.globalState.search.song.full_title}/>
            </div>
              <a href={this.props.globalState.search.song.url} >
                {this.props.globalState.search.song.full_title}</a>
            <div id="input-phrase-match" className="query-summary">
              Your Input:
              {"  " + this.props.globalState.search.query}
              <br />
              Matching Phrase:
              {" " + this.props.globalState.search.matchingPhrase}
            </div>
            <button
              id="next-page-button"
              className="query-summary"
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
            <div id="song"></div> 
          </div>
        );
    }
}
