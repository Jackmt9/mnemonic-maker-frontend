import React from 'react';
import PlaylistCard from './PlaylistCard'

export default class Playlists extends React.Component {

    render(){
        let playlists = this.props.globalState.user.playlists.map((playlist) => {
            return <a href={`playlists/${playlist.id}`}>{playlist.title}</a>
        })
        return(
            <div id = "playlist-container">
               {playlists}
            </div>
        )
    }
}