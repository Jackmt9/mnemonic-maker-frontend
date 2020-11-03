import React from 'react';
import {fetchPlaylists} from '../services/utils'
export default class Playlists extends React.Component {

    state = {
        playlists: []
    }
    render(){
        if(localStorage.token){
            fetchPlaylists(localStorage.token)
            .then((r)=>{
                console.log("playlists baby", r)
            })
        }

        return(
            <div>
                <text>Yo</text>
            </div>
        )
    }
}