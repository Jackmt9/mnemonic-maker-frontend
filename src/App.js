import React from 'react';
import Login from './components/Login'
import Logout from './components/Logout'
import Register from './components/Register'
import NavBar from './components/NavBar'
// import About from './components/About'
import './App.css';
import Search from './components/Search'
import {Switch, Route, withRouter} from 'react-router-dom'
import {stayLoggedIn} from './services/utils'
import {connect} from 'react-redux'

class App extends React.Component {

  componentDidMount = () => {
    if(localStorage.token){
      stayLoggedIn(localStorage.token)
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
    return <Search handleSearch={(r) => this.props.mountSearch(r)}/>
  }

  render(){
    return (
      <div className="App">
        <NavBar />
        <Switch>
          {!localStorage.token?
          <Route path="/login" render={this.renderLogin} />
          :
          <Route path="/login" render={ () => this.props.history.push('/') } />
        }
        <Route path="/logout" render={ this.renderLogout } />
          <Route path="/register" component={ Register } />
          {/* <Route path="/about" component={ About } /> */}
          {/* <Route path="/playlists" component={ Playlists } /> */}
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
    // token: globalState.userInformation.token
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(componentWithRouterProps)





