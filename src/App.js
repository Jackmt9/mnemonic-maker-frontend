import React from 'react';
import SignIn from './SignIn'
import Register from './Register'
import { Router, Route } from "react-router"
import 'history'; 
import { createBrowserHistory } from "history";
import './App.css';
import Home from './Home'

class App extends React.Component {
  render(){
  return (
    <Router history={createBrowserHistory()}>
      <Route path="/signin" component={SignIn} />
      <Route path="/register" component = {Register}/>
      <Route path="/home" component = {Home}/>
    </Router>
  );
  }
}

export default App;
