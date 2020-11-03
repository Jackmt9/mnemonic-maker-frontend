import React from 'react';
import {getPlaylist} from '../services/utils'

export default class PlaylistCard extends React.Component {
    componentWillMount = () => {
        getPlaylist(this.props.id)
        .then(r => {
            if(r.message){
                alert(r.message)
                this.props.redirect()
            } else {
                
            }
        })
    }

    render(){
        return(
            <div id = "playlist-card">
                <p>Must render response below</p>
            </div>
        )
    }
}