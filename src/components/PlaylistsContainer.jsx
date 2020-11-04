import React from 'react';
import PlaylistCard from './PlaylistCard'
import Card from 'react-bootstrap/Card'

export default class PlaylistsContainer extends React.Component {

    render(){
        let playlists = this.props.globalState.user.playlists.map((playlist) => {
            return <a href={`playlists/${playlist.id}`}>{playlist.title}</a>
        })
        return(
            <div id = "playlists-container">
               {playlists}
            </div>
        )
    }
}