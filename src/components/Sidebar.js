import React, { Component } from 'react';
import logo from '../assets/logo.svg';
import { NavLink } from 'react-router-dom';

class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar vh-100 bg-info">
        <img src={logo} className="App-logo" alt="logo" />
        <nav>
          <ul className="nav flex-column text-center">
            <li className="nav-item">
              <NavLink exact className="nav-link ml-2 rounded-left" to="/"><i className="fa fa-home" aria-hidden="true"></i><br />Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink exact className="nav-link ml-2 rounded-left" to="/introduction">Intro</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Sidebar;
