import React from 'react';
import navstyle from './navbar.module.css'

const Navbar = () => {
    return (
    <nav className={navstyle.nav}>
        <div className={navstyle.item}><a href="/profile">Profile</a></div>
        <div className={`${navstyle.item} ${navstyle.active}`}><a href="/dialogs">Messages</a></div>
        <div className={navstyle.item}><a href="">News</a></div>
        <div className={navstyle.item}><a href="">Music</a></div>
        <div className={navstyle.item}><a href="">Settings</a></div>
      </nav>
    )
}

export default Navbar;