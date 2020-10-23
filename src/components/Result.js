import React from "react";

export default class Result extends React.Component {

    constructor(props) {
        super(props);
        this.boxRef = React.createRef();
    }

    componentDidMount = ()=>{
        this.appendInfo(this.props.song, this.props.matchingPhrase)
        this.appendLyrics(this.props.lyrics, this.props.matchingPhrase);
        if (this.props.resultDisplayed) { 
            this.boxRef.current.scrollIntoView( { behavior: 'smooth' } );
        }
    }
    
    componentDidUpdate = ()=>{
       if (this.props.resultDisplayed) {
         this.boxRef.current.scrollIntoView({ behavior: "smooth" });
       }
        this.appendLyrics(this.props.lyrics, this.props.matchingPhrase);
        let songHeaderDiv = document.getElementById("song-header");
        songHeaderDiv.innerHTML = ''
        this.appendInfo(this.props.song, this.props.matchingPhrase)
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

    render(){

        return(
            <div ref={this.boxRef} className="results">
                <div id="song-header"></div>
                <div id="song"></div>
                <iframe
                    title= "youtube-vid"
                    width="426"
                    height="240"
                    className="youtube-frame"
                    src={`https://www.youtube.com/embed/${this.props.youtubeId}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />
            </div>
        )
    }
}