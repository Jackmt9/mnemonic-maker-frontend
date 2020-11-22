import React from 'react';
import '../App.css'
import PlaylistCard from './PlaylistCard'
import Modal from 'react-modal';
import BookmarkCard from './BookmarkCard'
import {getPlaylist, getSong} from '../services/utils'
import NewPlaylist from '../assets/NewPlaylistIcon.png'
import CreatePlaylist from './CreatePlaylist'
import EditPlaylist from './EditPlaylist.jsx';

export default class PlaylistsContainer extends React.Component {

    state = {
        editPlaylistForm: false,
        showMore: false,
        featuredPlaylist: null,
        showModal: false,
        song: null,
       
    }

    componentWillMount = () => {
        this.props.stayLoggedIn()
        .then(r => {
          this.props.mountUser(r)
        })
    }
    handleBookmark =(bookmark)=>{
        console.log('im a bookmark: ', bookmark)
        getSong(bookmark.song_id)
        .then((song)=>{
            this.setState({song})
        })
    }


    setFeatured = (e, playlist)=>{
        e.preventDefault()
        console.log("playlist: ", playlist)
        this.setState({ featuredPlaylist: playlist})
    }

        toggleModal = ()=>{
            this.setState({showModal: !this.state.showModal})
        }

        toggleEditPlaylistForm = ()=>{
            this.setState({editPlaylistForm: !this.state.editPlaylistForm})
        }

        playlistShowMore = ()=>{
            this.setState({showMore: !this.state.showMore})
        }

        render(){
            let bookmarkCards = null
        const playlists = this.props.globalState.user.playlists.map((playlist)=>{
            return (
                <div onClick = {(e)=>this.setFeatured(e, playlist)}>
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
                        style = {customStyles} onRequestClose={this.toggleModal}>
                    <CreatePlaylist 
                    toggleModal = {this.toggleModal}
                    renderPlaylists = {this.renderPlaylists}
                    mountUser = {this.props.mountUser}
                    />
                    <button onClick = {this.toggleModal}>close</button>
                </Modal>
                    {this.state.featuredPlaylist ? 
                    <div className = "featued-container">
                    <h1>{this.state.featuredPlaylist.title}</h1>
                    {this.state.showMore ? 
                        <div>
                        {this.state.editPlaylistForm ? 
                            <>
                            <EditPlaylist
                             toggleEditPlaylistForm = {this.toggleEditPlaylistForm} 
                            playlist = {this.state.featuredPlaylist}
                            mountUser = {this.props.mountUser}
                            />
                        </>
                        :
                        <>
                        <button onClick = {this.toggleEditPlaylistForm}>Edit Playlist</button>
                         <p>title: {this.state.featuredPlaylist.title}</p>
                        <p>description: {this.state.featuredPlaylist.description}</p>
                        <p>bookmarks: {this.state.featuredPlaylist.bookmarks.length}</p>
                        <button onClick = {this.playlistShowMore}>hide</button>
                        </>}
                        
                        </div>
                    :
                        <button onClick = {this.playlistShowMore}>more...</button>
                    }
                
                    
                    { this.state.featuredPlaylist.bookmarks ?
              this.state.featuredPlaylist.bookmarks.map((bookmark) => {
                    return <BookmarkCard bookmark = {bookmark}
                        
                    />
            })
            :
            null
        } 
                {/* {this.state.featuredPlaylist.bookmarks.map((bookmark) => */}
                    {/* <BookmarkCard bookmark = {bookmark} />) */}
                    {/* bookmarkCards */}
                    {/* : */}
                    {/* null} */}
                </div>
                 :
                 null}
            </div>
        )
    }
}