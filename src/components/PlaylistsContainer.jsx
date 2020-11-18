import React from 'react';
import '../App.css'
import PlaylistCard from './PlaylistCard'
import Modal from 'react-modal';
import BookmarkCard from './BookmarkCard'
import {getPlaylist, getSong} from '../services/utils'
import NewPlaylist from '../assets/NewPlaylistIcon.png'
import CreatePlaylist from './CreatePlaylist'
export default class PlaylistsContainer extends React.Component {

    state = {
        featured_title: null,
        featured_bookmarks: null,
        showModal: false
    }
    componentDidMount = ()=>{
        console.log("global state playlist container",this.props.globalState)
         if(this.props.globalState.user.id){ 
        this.renderPlaylists()
         }
    }

    reRenderPlaylists = ()=>{
        console.log('re-rendering playlists')
        document.getElementById('playlist-card-container').innerHTML = ''
        this.renderPlaylists()
    }

    setFeatured = (id)=>{
        getPlaylist(id)
        .then((r)=>{
            this.setState({featured_bookmarks: r.playlist.bookmarks, featured_title: r.playlist.title})
        })
    }

    renderPlaylists = ()=>{
        let container = document.getElementById("playlist-card-container")
        this.props.globalState.user.playlists.forEach((playlist)=>{
            let playlist_image;
            console.log(playlist)
            // getPlaylist(playlist.id)
            // .then((r)=>{
            //     if(r.playlist.bookmarks.length > 0){
            //     //if the user has bookmarks saved, show a song image for the playlist image
            //     getSong(r.playlist.bookmarks[0].song_id)
            //     .then((song)=>{console.log("song",song.image)
            //     playlist_image = document.createElement('img')
            //     playlist_image.src = song.image
            //     playlist_image.height = '100'
            //     playlist_image.width = '100'
            // })
            // .then(()=>{
                // let text_title = document.createElement('text')
                // text_title.innerText = playlist.title
                // let playlist_card = document.createElement('div')
                // let footer = document.createElement('footer')
                // footer.append(text_title)
                // playlist_card.append(playlist_image, footer)
                // playlist_card.className = 'inline-playlist-card'
                // playlist_card.onclick = ()=>this.setFeatured(playlist.id)
                // container.append(playlist_card)
            
                // }
                // else{
                //     let text_title = document.createElement('text')
                //     text_title.innerText = r.playlist.title
                //     playlist_image = document.createElement('img')
                //     playlist_image.src = MusicSymbol
                //     playlist_image.height = '100'
                //     playlist_image.width = '100'
                //     let playlist_card = document.createElement('div')
                //     let footer = document.createElement('footer')
                // footer.append(text_title)
                // playlist_card.append(playlist_image, footer)
                //     playlist_card.className = 'inline-playlist-card'
                //     playlist_card.onclick = ()=>this.setFeatured(playlist.id)
                //     container.append(playlist_card)
                // }
            // })
        });
    };

     toggleModal = ()=>{
         this.setState({showModal: !this.state.showModal})
     }

    render(){
        const playlists = this.props.globalState.user.playlists.map((playlist)=>{
            return <PlaylistCard playlist = {playlist}/>
        })
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

        return (

            <div>
                <div id = "new-playlist" onClick = {this.toggleModal}>
                    <img src = {NewPlaylist} height = '100' width = '100'/>
                    <text>new playlist...</text>
                </div>
                <div id = "playlist-card-container">
                {playlists}
                </div>
                <Modal isOpen={this.state.showModal}
                        style = {customStyles}>
                    <CreatePlaylist 
                    toggleModal = {this.toggleModal}
                    renderPlaylists = {this.renderPlaylists}
                    />
                    <button onClick = {this.toggleModal}>close</button>
                </Modal>
                    <div id = "featued-container">
                 <h1>{this.state.featured_title}</h1>
                {/* { */}
                    
                {/* // this.state.featured_bookmarks ? 
                // this.state.featured_bookmarks.map((bookmark) =>
                // <BookmarkCard bookmark = {bookmark}/>, console.log(this.state))
                //  : */}
                {/* null
                } */}
                </div>
            </div>
        )
    }
}