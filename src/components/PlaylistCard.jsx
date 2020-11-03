import React from 'react';

export default class PlaylistCard extends React.Component {
    render(){
        return(
            <div id = "playlist-card">
                <a href={`/playlists/${this.props.playlist.id}`}>{this.props.playlist.title}</a>
            </div>
        )
    }
}