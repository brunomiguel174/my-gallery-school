import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.css';

const Header = () => {
  return (
    <header className="header">
      <nav>
        <NavLink 
          to="/" 
          className="link"
          exact
          activeClassName="active-link"
        >
          Home
        </NavLink>
        <NavLink 
          to="/gallery"
          className="link"
          activeClassName="active-link"
        >
          Gallery
        </NavLink>

        <NavLink 
          to="/mindera"
          className="link"
          activeClassName="active-link"
        >
          Mindera
        </NavLink>
      </nav>
    </header>
  )
};

export default Header;