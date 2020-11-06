import React from 'react';
import PlaylistCard from './PlaylistCard'
import Modal from 'react-modal';
import {getPlaylist, getSong} from '../services/utils'
import NewPlaylist from '../assets/NewPlaylistIcon.png'
import CreatePlaylist from './CreatePlaylist'
import MusicSymbol from '../assets/music-symbol.png'
export default class PlaylistsContainer extends React.Component {

    state = {

    }
    componentDidMount = ()=>{
        console.log("global state playlist container",this.props.globalState)
         if(this.props.globalState.user.id){ 
        this.renderPlaylists()
         }
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
             console.log("yooooo",playlist)
             let playlist_image;
             container.append(playlist_card)
             console.log(playlist)
             getPlaylist(playlist.id)
            .then((r)=>{
                    console.log('response', r)
                    if(r.playlist.bookmarks.length > 0){
                //if the user has bookmarks saved, show a song image for the playlist image
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
         });
     };

     showModal = ()=>{
         this.setState({showModal: true})
     }
     hideModal = ()=>{
         this.setState({showModal: false})
     }
    render(){
           const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};
        // let playlists;
        // playlists = this.props.globalState.user.playlists.map((playlist) => {

        //     return (

        //         // <Card>
        //     <a href={`playlists/${playlist.id}`}>
        //         {playlist.title}
                
        //         </a>
        //         // </Card>
        //     )
        // })

        return (
            <div id = "playlist-card-container">
                <div id = "new-playlist" onClick = {this.showModal}>
                </div>
                <Modal isOpen={this.state.showModal}
                        style = {customStyles}>
                    <CreatePlaylist 
                    hideModal = {this.hideModal}
                    />
                </Modal>
            </div>)
    }
}