import React from 'react';
import {getPlaylist, getSong} from '../services/utils'
import BookmarkCard from './BookmarkCard'
import { CardDeck } from 'react-bootstrap';
import MusicSymbol from '../assets/music-symbol.png'

export default class PlaylistCard extends React.Component {


    componentDidMount = ()=>{
        console.log("bookmarks: ",this.props.playlist)
        if(this.props.playlist.bookmarks && this.props.playlist.bookmarks.length > 0){
            getSong(this.props.playlist.bookmarks[0].song_id)
            .then((song)=>{
                document.getElementById('playlist-img').src = song.image
        })
        }
    }

    render(){
        return(
            <div >
                <text>yoo</text>
                <img id = "playlist-img" src = {MusicSymbol}/>
            </div>
        
        )
    }
}