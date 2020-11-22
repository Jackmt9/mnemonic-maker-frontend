import React from 'react';
import {createPlaylist, stayLoggedIn, saveBookmark} from '../services/utils'
export default class CreatePlaylistForm extends React.Component{

    state = {
         title: "",
         description: ""
     }
     handleChange = ({target}) => {
         this.setState({
             [target.name]: target.value
         })
     }
     handleSubmit = (e) => {
         e.preventDefault()
        createPlaylist(this.state)
        .then((playlist)=>{
            if(this.props.addNewBookmark){
                saveBookmark(playlist.id, this.props.globalState.search.song.id, this.props.globalState.search.input_phrase, this.props.globalState.search.matching_phrase, this.props.globalState.search.song.youtube_id)
                .then(()=>{
                    this.props.toggleModal()
                })
            }
            else {

                this.props.toggleModal()
            }
        })
     }

     componentDidMount = ()=>{
         console.log(this.props.globalState, "other props: ", this.props)

     }

    render(){
        return (
            <>
            <form onSubmit = {(e)=>this.handleSubmit(e)}>
                <h1>New Playlist</h1>
              <label >title:</label>
              <input type="text" autoComplete="off" name="title" value={this.state.title} onChange={this.handleChange}/>
              <br/>
              <label>description:</label>
              <input type="text" autoComplete="off" name="description" value={this.state.description} onChange={this.handleChange}/>
              <br/>
              <input type="submit" value="create playlist"/>
            </form>
            </>
        )
    }

}
