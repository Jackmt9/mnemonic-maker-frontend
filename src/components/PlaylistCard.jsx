import React from 'react';
import {getPlaylist} from '../services/utils'
import BookmarkCard from './BookmarkCard'

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
            </div>
        )
    }
}