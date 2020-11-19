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

    componentWillMount = () => {
        this.props.stayLoggedIn()
        .then(r => {
          this.props.mountUser(r)
        })
    }

    setFeatured = (e, bookmarks)=>{
        e.preventDefault()
        this.setState({featured_bookmarks: bookmarks})
    }

     toggleModal = ()=>{
         this.setState({showModal: !this.state.showModal})
     }

    render(){
        const playlists = this.props.globalState.user.playlists.map((playlist)=>{
            return (
                <div onClick = {(e)=>this.setFeatured(e, playlist.bookmarks)}>
            <PlaylistCard playlist = {playlist} key={playlist.id}/>
            </div>
            )
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

            <div className = "white-text">
                <div className = "in-line-playlist" onClick = {this.toggleModal} class = "in-line-playlist">
                    <img src = {NewPlaylist} height = '100' width = '100'/>
                    <p>new playlist...</p>
                </div>
                <div className = "playlist-card-container">
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
                    <div className = "featued-container">
                 <h1>{this.state.featured_title}</h1>
                {
                    
                this.state.featured_bookmarks ? 
                this.state.featured_bookmarks.map((bookmark) =>
                <BookmarkCard bookmark = {bookmark} />)
                :
                null }
                </div>
            </div>
        )
    }
}