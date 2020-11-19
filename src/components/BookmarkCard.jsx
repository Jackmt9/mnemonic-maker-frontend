import React, {button} from 'react';
import Card from 'react-bootstrap/Card'
import {getSong} from '../services/utils'

export default class BookmarkCard extends React.Component {

    state = {
        song: null,
        showInputPhrase: false, 
    }

    componentWillMount = ()=>{
        getSong(this.props.bookmark.song_id)
        .then((song)=>this.setState({song}))
    }

    styles = {
        whole_card: {
            justifyContent: 'flex-start',
            backgroundColor: '#37C1A8'
        },
        card_image: {
        height: 40,
        width: 40,
        display: 'inline-block',
        },
        card_body: {
            justifyContents: 'left',
            display: 'inline-block',

        }
    }

    render(){
        return(
            <div id="bookmark" style = {this.styles.whole_card}>
                {
                this.state.song ? 
                <Card >
                <Card.Img src = {this.state.song.image} style = {this.styles.card_image}>
            </Card.Img>
            <iframe
            title="youtube-vid"
            width="200"
            className="youtube-frame"
            src={`https://www.youtube.com/embed/${this.props.bookmark.youtube_id}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"/>                 
            <Card.Body style = {this.styles.card_body}>
                <Card.Text>matching phrase: {this.props.bookmark.matching_phrase}</Card.Text>
                <Card.Text>song name: {this.state.song.title}</Card.Text>
                <button onClick = {()=>this.setState({showInputPhrase: !this.state.showInputPhrase})}>show my phrase</button>
                {this.state.showInputPhrase ?
                <Card.Text>input phrase {this.props.bookmark.input_phrase}</Card.Text>
                :
                null}
                </Card.Body>
                </Card>
                :
                null}
            </div>
    
        )
    }
}