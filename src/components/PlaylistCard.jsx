import React from 'react';
import {getPlaylist} from '../services/utils'
import BookmarkCard from './BookmarkCard'
import { CardDeck } from 'react-bootstrap';

export default class PlaylistCard extends React.Component {

    state = {
        bookmarks: null
    }

    componentDidMount = ()=>{
         getPlaylist(this.props.id)
        .then(r => {
            if(r.message){
                alert(r.message)
                this.props.redirect()
            } else {
                this.setState({bookmarks: r.playlist.bookmarks})
            } 
        })
    }

    styles = {
        card_deck: {
            flexDirection: 'column',
            justifyContents: 'flex-start-left'
        }
    }

    render(){
        return(
            <CardDeck id = "playlist-card" style = {this.styles.card_deck}>
                {this.state.bookmarks ? 
                this.state.bookmarks.map((bookmark) => <BookmarkCard bookmark = {bookmark}/>)
                :
                null
                }
            </CardDeck>    
        )
    }
}