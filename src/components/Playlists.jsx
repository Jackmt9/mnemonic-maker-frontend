import React from 'react';
import PlaylistCard from './PlaylistCard'

export default class Playlists extends React.Component {

    render(){
        debugger
        let playlists = this.props.globalState.user.playlists.map((playlist) => {
            return <PlaylistCard playlist={playlist} />
        })
        return(
            <div id = "playlist-container">
               {playlists}
            </div>
        )
    }
}