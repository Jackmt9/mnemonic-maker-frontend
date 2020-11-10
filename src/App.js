import React from 'react';
import Login from './components/Login'
import Logout from './components/Logout'
import Register from './components/Register'
import Playlists from './components/PlaylistsContainer'
import PlaylistCard from './components/PlaylistCard'
import NavBar from './components/NavBar'
import About from './components/About'
import './App.css';
import Search from './components/Search'
import {Switch, Route, withRouter} from 'react-router-dom'
import {stayLoggedIn} from './services/utils'
import {connect} from 'react-redux'

class App extends React.Component {

  componentDidMount = () => {
    if(localStorage.token){
      stayLoggedIn()
      .then(r => {
        localStorage.token = r.token
        this.props.mountUser(r)
      })
    }
  }
  renderLogin = () => {
    return <Login handleLogin={ (r) => this.props.mountUser(r) } redirect={ () => this.props.history.push("/") }/>
  }

  renderLogout = () => {
    return <Logout handleLogout={ this.props.unmountUser }/>
  }

  renderSearch = () => {
    return <Search handleSearch={(r) => this.props.mountSearch(r)} globalState={this.props.globalState}/>
  }

  renderRegister = () => {
    return <Register redirect={ () => this.props.history.push("/") }/>
  }

  renderPlaylists = () => {
    return <Playlists globalState={this.props.globalState} />
  }

  renderPlaylist = (id) => {
    return <PlaylistCard id={id} redirect={ () => this.props.history.push("/playlists") }/>
  }

  render(){
    return (
      <div className="App">
        <NavBar />
        <Switch>
          {localStorage.token ?
            [
              <Route path="/logout" render={ this.renderLogout } />,
              <Route path="/playlists" render={ this.renderPlaylists } />
            ]
            :
            [
              <Route path="/login" render={this.renderLogin} />,
              <Route path="/register" render={ this.renderRegister } />,
            ]
          }
  
          <Route path="/about" component={ About } />
          <Route path="/" exact render={ this.renderSearch } />
          <Route render={ () => <p>Page not found</p> } />
        </Switch>
      </div>
    );
  }
}


let componentWithRouterProps = withRouter(App)

// actionCreators are functions that return an action
let mountUser = (r) => {
  return {
    type: "MOUNT_USER",
    payload: r
  }
}

let unmountUser = () => {
  return {
    type: "UNMOUNT_USER"
  }
}

let mountSearch = (search) => {
  return {
    type: "MOUNT_SEARCH",
    payload: search
  }
}


// mapDispatchToProps
let mapDispatchToProps = {
  mountUser: mountUser,
  unmountUser: unmountUser,
  mountSearch: mountSearch,
}

let mapStateToProps = (globalState) => {
  return {
    globalState: globalState
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(componentWithRouterProps)





