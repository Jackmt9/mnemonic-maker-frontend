import React from 'react';
import {getPlaylist, getSong, saveBookmark} from '../services/utils'
import NewPlaylist from '../assets/NewPlaylistIcon.png'
import MusicSymbol from '../assets/music-symbol.png'
export default class AddToPlaylist extends React.Component{


     handleSubmit = (evt) => {
         evt.preventDefault()
     }

     componentDidMount = ()=>{
         console.log(this.props.globalState.user.playlists[0])
         this.renderPlaylists()
     }

     addToPlaylist = (playlist_id)=>{
         console.log('yo homie add to playlist', this.props.globalState.search )
         saveBookmark(playlist_id, this.props.globalState.search.song.id, this.props.globalState.search.input_phrase, this.props.globalState.search.matching_phrase)
         .then(() => {this.props.toggleModal()})
     }
     renderPlaylists = ()=>{
    let container = document.getElementById("playlist-card-container")
         this.props.globalState.user.playlists.forEach((playlist)=>{
             let playlist_image;
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
                let text_title = document.createElement('text')
                    text_title.innerText = r.playlist.title
                let playlist_card = document.createElement('div')
                let footer = document.createElement('footer')
                footer.append(text_title)
                playlist_card.append(playlist_image, footer)
                container.append(playlist_card)
                })
            }
            else{
                let text_title = document.createElement('text')
                text_title.innerText = r.playlist.title
                playlist_image = document.createElement('img')
                playlist_image.src = MusicSymbol
                playlist_image.height = '100'
                playlist_image.width = '100'
                let playlist_card = document.createElement('div')
                playlist_card.onclick = () =>this.addToPlaylist(playlist.id)
                let footer = document.createElement('footer')
                footer.append(text_title)
                playlist_card.append(playlist_image, footer)  
            container.append(playlist_card)
            }
            })
        
         })
     }

render(){

        return (
            <>
           <div id = "playlist-card-container">
                <div id = "new-playlist" onClick = {this.showModal}>
                <img src = {NewPlaylist} height = '100' width = '100'/>
                    <footer>
                    new playlist...
                    </footer>
                </div>
           </div>
            </>
        )
    }

}