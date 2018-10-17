import React, { Component } from 'react';
import logo from '../assets/logo.png';
import { NavLink } from 'react-router-dom';

class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar vh-100 bg-info text-center">
        <img src={logo} className="my-4 logo" alt="logo" />
        <nav>
          <ul className="nav flex-column">
            <li className="nav-item">
              <NavLink exact className="nav-link ml-2 rounded-left" to="/"><i className="fa fa-home" aria-hidden="true"></i><br />Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink exact className="nav-link ml-2 rounded-left" to="/risk"><i className="fa fa-dashboard" aria-hidden="true"></i>Risico</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Sidebar;
