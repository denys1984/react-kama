import React from 'react';
import navstyle from './navbar.module.css'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
    <nav className={navstyle.nav}>
        <div className={navstyle.item}>
          <NavLink to="/profile" activeClassName={navstyle.activeLink}>Profile</NavLink>
        </div>
        <div className={`${navstyle.item} ${navstyle.active}`}>
          <NavLink to="/dialogs" activeClassName={navstyle.activeLink}>Messages</NavLink>
        </div>
        <div className={navstyle.item}>
          <NavLink to="">News</NavLink>
        </div>
        <div className={navstyle.item}>
          <NavLink to="">Music</NavLink>
        </div>
        <div className={navstyle.item}>
          <NavLink to="">Settings</NavLink>
        </div>
      </nav>
    )
}

export default Navbar;