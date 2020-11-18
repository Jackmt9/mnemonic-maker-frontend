import React from 'react';
import {getPlaylist} from '../services/utils'
import BookmarkCard from './BookmarkCard'
import { CardDeck } from 'react-bootstrap';

export default class PlaylistCard extends React.Component {


    

    render(){
        return(
            <div>
                <text>yoo</text>
                <img src = {this.props.playlist.image}/>
            </div>
        
        )
    }
}