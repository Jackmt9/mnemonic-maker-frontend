import React from 'react';
import {getPlaylist, saveBookmark} from '../services/utils'
import NewPlaylist from '../assets/NewPlaylistIcon.png'
import MusicSymbol from '../assets/music-symbol.png'
import PlaylistCard from './PlaylistCard'
export default class AddToPlaylist extends React.Component{

     addToPlaylist = (playlist_id)=>{
        saveBookmark(playlist_id, this.props.globalState.search.song.id, this.props.globalState.search.input_phrase, this.props.globalState.search.matching_phrase, this.props.globalState.search.song.youtube_id)
        .then(() => this.props.toggleModal())
     }

render(){

    const playlists = this.props.globalState.user.playlists.map(playlist=>{
     return (
         <div onClick = {()=>this.addToPlaylist(playlist.id)}>
            <PlaylistCard playlist = {playlist}/>
         </div>
     )   
    })
        return (
            <>
           <div id = "playlist-card-container">
                <div id = "new-playlist" onClick = {this.showModal}>
                <img src = {NewPlaylist} height = '100' width = '100'/>
                    <footer>
                    new playlist...
                    </footer>
                </div>
                {playlists}
           </div>
            </>
        )
    }

}