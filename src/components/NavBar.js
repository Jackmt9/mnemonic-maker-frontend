import { doc } from 'prettier'
import React from 'react'

export default class NavBar extends React.Component {
  styles = {
    background: "#37C1A8",
  };
  render() {
    return (
      <div class="topnav">
        <a class="active" href="#home">
          Home
        </a>
        <a href="#news">Search</a>
        <a href="#contact">Playlist</a>
        <a href="#about">About</a>
        <a href="#about">Login</a>
      </div>
    );
  }
}