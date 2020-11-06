import React from 'react';
import {getPlaylist, getSong} from '../services/utils'
import NewPlaylist from '../assets/NewPlaylistIcon.png'
import MusicSymbol from '../assets/music-symbol.png'
export default class AddToPlaylist extends React.Component{
     handleSubmit = (evt) => {
         evt.preventDefault()
        console.log('yooo')
     }

     componentDidMount = ()=>{
         console.log(this.props.globalState.user.playlists[0])
         this.renderPlaylists()
     }

     renderPlaylists = ()=>{
    let add_playlist_image = document.createElement('img')
    add_playlist_image.width = '100'
    add_playlist_image.height = '100'
    add_playlist_image.src = NewPlaylist
    let playlist_card = document.getElementById('new-playlist')
    playlist_card.append(add_playlist_image)
   let card_text = document.createElement('text')
    card_text.innerText = "new playlist..."
    playlist_card.append(card_text)
    let container = document.getElementById("playlist-card-container")
         this.props.globalState.user.playlists.forEach((playlist)=>{
             let playlist_image;
             container.append(playlist_card)
             getPlaylist(playlist.id)
            .then((r)=>{
                if(r.playlist.bookmarks.length > 0){
                getSong(r.playlist.bookmarks[0].song_id)
                .then((song)=>{console.log("song",song.image)
                playlist_image = document.createElement('img')
                playlist_image.src = song.image
                playlist_image.height = '100'
                playlist_image.width = '100'
                })
                .then(()=>{
                let li_title = document.createElement('li')
                li_title.innerText = playlist.title
                container.append(playlist_image, li_title)
                })
            }
            else{
                     let li_title = document.createElement('li')
                    li_title.innerText = r.playlist.title
                     playlist_image = document.createElement('img')
                     playlist_image.src = MusicSymbol
                     playlist_image.height = '100'
                     playlist_image.width = '100'
                    container.append(playlist_image, li_title)
            }
            })
        
         })
     }

render(){

        return (
            <>
           <div id = "playlist-card-container">
                <div id = "new-playlist" onClick = {this.showModal}>
                </div>
           </div>
            </>
        )
    }

}