import React from 'react';

export default class BookmarkCard extends React.Component {
    render(){
        debugger
        return(
            <div id="bookmark">
                test
                <p>input phrase{this.props.input_phrase}</p>
                <p>matching phrase: {this.props.matching_phrase}</p>
                <p>song id: {this.props.song_id}</p>
            </div>
        )
    }
}