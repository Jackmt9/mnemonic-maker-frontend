import React from 'react'
import {NavLink} from 'react-router-dom'

export default class NavBar extends React.Component {

  styles = {
    background: "#37C1A8",
  }

  render() {
    return (
      <ul className="nav">
        <li>
          <NavLink exact to="/">Search</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        {localStorage.token ? 
          [
          <li>
            <NavLink to="/playlists">Playlists</NavLink>
          </li>,
          <li>
            <NavLink to="/logout">Logout</NavLink>
          </li>
          ]

          :
          [
          <li>
            <NavLink to="/register">Register</NavLink>
          </li>,
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
          ]
        }
      </ul>
    );
  }
}