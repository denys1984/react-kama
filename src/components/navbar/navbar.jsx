import React from 'react';
import navstyle from './navbar.module.css'

const Navbar = () => {
    return (
    <nav className={navstyle.nav}>
        <div className={navstyle.item}><a>Profile</a></div>
        <div className={`${navstyle.item} ${navstyle.active}`}><a>Messages</a></div>
        <div className={navstyle.item}><a>News</a></div>
        <div className={navstyle.item}><a>Music</a></div>
        <div className={navstyle.item}><a>Settings</a></div>
      </nav>
    )
}

export default Navbar;