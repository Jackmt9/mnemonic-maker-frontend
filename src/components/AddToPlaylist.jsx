import React from 'react';
import {createPlaylist, getPlaylist, saveBookmark} from '../services/utils'
import NewPlaylist from '../assets/NewPlaylistIcon.png'
import MusicSymbol from '../assets/music-symbol.png'
import PlaylistCard from './PlaylistCard'
import CreatePlaylist from './CreatePlaylist'
export default class AddToPlaylist extends React.Component{

     addToPlaylist = (playlist_id)=>{
        saveBookmark(playlist_id, this.props.globalState.search.song.id, this.props.globalState.search.input_phrase, this.props.globalState.search.matching_phrase, this.props.globalState.search.song.youtube_id)
        .then(() => this.props.toggleModal())
     }
     state = {
         NewPlaylist: false
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
            {!this.state.NewPlaylist? 
           <div id = "playlist-card-container">
                <div id = "new-playlist" onClick = {()=>this.setState({NewPlaylist: !this.state.NewPlaylist})}>
                <img src = {NewPlaylist} height = '100' width = '100'/>
                    <footer>
                    new playlist...
                    </footer>
                </div>
                {playlists}
           </div>
           :
           <CreatePlaylist
                globalState = {this.props.globalState}
                addNewBookmark
                toggleModal = {this.props.toggleModal}
           />
}
            </>
        )
    }

}