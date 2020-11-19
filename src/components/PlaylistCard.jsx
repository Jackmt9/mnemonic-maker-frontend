import React from 'react';
import {Card} from 'react-bootstrap'
import {getPlaylist, getSong} from '../services/utils'
import BookmarkCard from './BookmarkCard'
import { CardDeck } from 'react-bootstrap';
import MusicSymbol from '../assets/music-symbol.png'
import '../App.css'

export default class PlaylistCard extends React.Component {

    renderImage = ()=>{
        const image =  document.getElementById('playlist-image')
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

    // componentDidUpdate = ()=>{
    //     this.renderImage()
    // }

    render(){
        return(
            <div class = "in-line-playlist"  >
                <img id = "playlist-image" src = {MusicSymbol} style = {{height: 100, width: 100}}/>
                <p >{this.props.playlist.title}</p>
            </div>
        
        )
    }
}