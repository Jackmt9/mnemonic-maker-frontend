import userEvent from '@testing-library/user-event';
import React from 'react'

export default class NavBar extends React.Component {


  styles = {
    background: "#37C1A8",
  };
  render() {
    return (
      <div className="topnav">
        <a className="active" href="#home">
          Mnemonic Maker
        </a>
        <a href="/search">Search</a>
        <a href="/playlist">Playlist</a>
        <a href="/about">About</a>
        {!localStorage.token ?
        <a href="/register">Register</a>
        :
        null}
        {!localStorage.token ?
        <a href="/login">Login</a>
        : 
        <a href="/logout">Logout</a>}
      </div>
    );
  }
}