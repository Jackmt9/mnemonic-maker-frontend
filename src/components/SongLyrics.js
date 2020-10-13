import React, { createElement } from "react";
import { fetchMnemonic } from "../services/utils";
import '../App.css'
export default class Song extends React.Component {
componentDidMount = ()=>{
    this.appendLyrics(this.props.lyrics, this.props.matchingPhrase);
}
componentDidUpdate = ()=>{
    this.appendLyrics(this.props.lyrics, this.props.matchingPhrase);
}
  appendLyrics = (songLyrics, matchingPhrase) => {
    let songDiv = document.getElementById("song");
    songDiv.innerText = "";

    let lyrics = document.createElement("p");

    songLyrics.split("\n").forEach((line) => {
      lyrics.innerHTML += line.replace(
        matchingPhrase,
        (match) => `<mark>${match}</mark>`
      );
      lyrics.innerHTML += "<br/>";
    });
    songDiv.append(lyrics);
  };

  render() {
    return (
      <>
        <div>
          <div id="song"></div>
        </div>
      </>
    );
  }

}
