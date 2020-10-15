import React from "react";
import '../App.css'
export default class Song extends React.Component {
componentDidMount = ()=>{
        this.appendInfo(this.props.song, this.props.matchingPhrase)
}
componentDidUpdate = ()=>{
        let songHeaderDiv = document.getElementById("song-header");
        songHeaderDiv.innerHTML = ''
        this.appendInfo(this.props.song, this.props.matchingPhrase)
}
  appendInfo = (song, matchingPhrase) => {
    let songHeaderDiv = document.getElementById("song-header");
    let title = document.createElement("a");
    title.innerText = song.full_title;
    title.href = song.url;
   let songImage = document.createElement('img')
   songImage.src = song.image;
   songImage.height = 200
   songImage.width = 200
    songHeaderDiv.append(title, songImage);
  };
  styles ={
    background: 'black', 
    height: 200,
  }
  render() {
    return (
      <>
        <div style = {this.styles}>
          <div id="song-header"></div>
        </div>
      </>

);
  }
}