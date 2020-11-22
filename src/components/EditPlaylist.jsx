

import React from 'react';
import {createPlaylist, stayLoggedIn, editPlaylist, deletePlaylist} from '../services/utils'

export default class CreatePlaylistForm extends React.Component{

    state = {
         title: this.props.playlist.title,
         description: this.props.playlist.description
     }
     handleChange = ({target}) => {
         this.setState({
             [target.name]: target.value
         })
     }
     handleSubmit = () => {
        editPlaylist(this.state, this.props.playlist.id)
        .then((playlist)=>{
          console.log("updated playlist: ", playlist)
        })
        .then(()=>{
            this.props.toggleEditPlaylistForm()
        })
     }

     componentDidMount = ()=>{
         console.log(this.props.globalState)
         
     }

     handleDelte = ()=>{
       deletePlaylist(this.props.playlist.id)
       .then((playlist)=>{
         console.log('deleted playlist ', playlist)
        })
        .then(()=> {
          this.props.mountUser()
        })
     }

    render(){
        return (
            <>
            <form onSubmit = {(e)=>this.handleSubmit(e)}>
        <h1>Edit "{this.props.playlist.title}"</h1>
                <button onClick = {this.handleDelte}>🗑</button>
              <label >title:</label>
              <input type="text" autoComplete="off" name="title" value={this.state.title} onChange={this.handleChange}/>
              <br/>
              <label>description:</label>
              <input type="text" autoComplete="off" name="description" value={this.state.description} onChange={this.handleChange}/>
              <br/>
              <input type="submit" value="save changes"/>
              <button onClick = {this.props.toggleEditPlaylistForm}>Cancel</button>
              Go to search to add new bookmarks to this playlist!
            </form>
            </>
        )
    }

}
// import React from 'react'

// export default class EditPlaylist extends React.Component{

// render(){

//     let state = {
//       title: "",
//       description: ""
//     };

// const  handleChange = (e) => {
//     this.setState({ [e.target.name]: [e.target.value] });
// };

// const   handleEditSubmit = () => {
//    console.log("handle submit");
//  };

// return (
//   <div>
//     <form onSubmit={handleEditSubmit}>
//       <label>Title: </label>
//       <input
//         type="text"
//         name="title"
//         value={state.title}
//         onChange={(e) => handleChange(e)}
//       />
//       <label>Description: </label>
//       <input
//         type="text"
//         autoComplete="off"
//         name="description"
//         value={state.description}
//         onChange={(e) => handleChange(e)}
//       />
//       <button onClick={this.toggleEditPlaylistForm}>Cancel</button>
//     </form>
//   </div>
// );
