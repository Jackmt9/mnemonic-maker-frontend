import React from 'react';
import {getSong} from '../services/utils'
import MusicSymbol from '../assets/music-symbol.png'
import '../App.css'

export default class PlaylistCard extends React.Component {

    renderImage = ()=>{
        const image =  document.getElementById(this.props.playlist.id)
         if(this.props.playlist.bookmarks && this.props.playlist.bookmarks.length > 0){
            getSong(this.props.playlist.bookmarks[0].song_id)
            .then((song)=>{
              image.src = song.image
        })
        }
    }

    componentDidMount = ()=>{
       this.renderImage()
    }

    render(){
        return(
            <div class = "in-line-playlist"  >
                <img class = "playlist-image" id={this.props.playlist.id} src = {MusicSymbol} style = {{height: 100, width: 100}}/>
                <p >{this.props.playlist.title}</p>
            </div>
        
        )
    }
}