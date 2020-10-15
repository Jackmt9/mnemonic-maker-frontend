import React from 'react';
import Login from './components/Login'
import Register from './components/Register'
import { Router, Route } from "react-router"
import 'history'; 
import { createBrowserHistory } from "history";
import './App.css';
import Home from './Home'

class App extends React.Component {
  render(){
  return (
    <Router history={createBrowserHistory()}>
      <Route path="/register" component={Register} />
      <Route path="/login" component = {Login}/>
      <Route path="/home" component = {Home}/>
    </Router>
  );
  }
}

export default App;
