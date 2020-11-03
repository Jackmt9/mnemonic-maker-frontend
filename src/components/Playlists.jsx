import React from 'react';
import {fetchPlaylists} from '../services/utils'
export default class Playlists extends React.Component {

    state = {
        playlists: []
    }
    componentDidMount = ()=>{
        console.log('mountin')
    if(localStorage.token){
        fetchPlaylists(localStorage.token)
        .then((playlists)=>{
            this.setState({playlists})
            console.log("playlists baby", this.state)
        })
        .then(()=>{
            for(let i = 0; i< this.state.playlists.length; i++){
            document.getElementById('playlist-container').append(this.state.playlists[i].title)
            console.log("each playlist", this.state.playlists[i].title)
            }
        })
    }
}
    render(){

        return(
            <div>
                <div id = "playlist-container">

                </div>
                <text>Yo</text>
            </div>
        )
    }
}