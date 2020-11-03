import React from 'react';

export default class PlaylistCard extends React.Component {
    render(){
        return(
            <div id = "playlist-card">
                {this.props.playlist.title}
            </div>
        )
    }
}