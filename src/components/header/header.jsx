import React from 'react';
import s from './header.module.css';

const Header = () => {
    return (
        <header className={s.header}>
            <img src="https://images.fastcompany.net/image/upload/w_596,c_limit,q_auto:best,f_auto/fc/3034007-inline-i-applelogo.jpg" alt="" width="200"/>
        </header>
    )
}

export default Header;