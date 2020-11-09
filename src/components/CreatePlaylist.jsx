import React from 'react';
import {createPlaylist} from '../services/utils'
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
     handleSubmit = (evt) => {
         evt.preventDefault()
        createPlaylist(this.state)
        .then(()=>{
            this.props.toggleModal()
        })
     }

     componentDidMount = ()=>{
         console.log(this.props.globalState)
         
     }

     componentWillUnmount = ()=>{
        // this.props.renderPlaylists()
     }
render(){

        return (
            <>
            <form onSubmit = {this.handleSubmit}>
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
