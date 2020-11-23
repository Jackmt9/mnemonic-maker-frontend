import React, {button} from 'react';
import Card from 'react-bootstrap/Card'
import {getSong, deleteBookmark} from '../services/utils'

export default class BookmarkCard extends React.Component {

    state = {
        showInputPhrase: false
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
              
                <Card >
            <iframe
            title="youtube-vid"
            width="200"
            className="youtube-frame"
            src={`https://www.youtube.com/embed/${this.props.bookmark.youtube_id}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"/>                 
            <Card.Body style = {this.styles.card_body}>
                <Card.Text>{this.props.bookmark.full_title}</Card.Text>
                <Card.Text>matching phrase: {this.props.bookmark.matching_phrase}</Card.Text>
        <button onClick = {()=>this.setState({showInputPhrase: !this.state.showInputPhrase})}>{this.state.showInputPhrase ? <text>hide my phrase</text>: <text>show my phrase</text>}</button>
                {this.state.showInputPhrase ?
                <Card.Text>input phrase: {this.props.bookmark.input_phrase}</Card.Text>
                :
                null}
                </Card.Body>
                <button onClick = {()=> deleteBookmark(this.props.bookmark.id)}>
                    🗑
                </button>
                </Card>
    
            </div>
    
        )
    }
}