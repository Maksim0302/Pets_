import React from 'react';
import {HiShoppingCart, HiSearch, HiMenu, HiX} from 'react-icons/hi';

import './Header.scss';

const Header = ({menuOpen, setMenuOpen}) => {
    const menuIcon = menuOpen ? <HiX/> : <HiMenu/>;
    const handleToggle = () => {
        setMenuOpen(!menuOpen);
    };
  return (
    <>
        <header className='header'>
            <Navbar setMenuOpen={setMenuOpen}/>
        </header>
        <button className='burger__menu' onClick={handleToggle}>{menuIcon}</button>
    </>
  )
}

export const ResponsiveMenu = ({menuOpen, setMenuOpen}) => {
    return(
        <div className={`res__menu ${menuOpen ? 
        'res__menu__open' : ''}`}>
            <Navbar setMenuOpen={setMenuOpen}/>
        </div>
    );
};

const Navbar = ({setMenuOpen}) => {
    return (
        <>
            <nav className='header__nav'>
                <div className="nav__logo">
                    <a href='#logo' onClick={() => setMenuOpen(false)}>
                        <h2>PetCraze</h2>
                    </a>
                </div>
                <div className="nav__divider">

                </div>
                <ul className="nav__list">
                    <li>
                        <a href='#home' onClick={() => setMenuOpen(false)}>Home</a>
                    </li>
                    <li>
                        <a href='#services' onClick={() => setMenuOpen(false)}>Services</a>
                    </li>
                    <li>
                        <a href='#category' onClick={() => setMenuOpen(false)}>Category</a>
                    </li>
                    <li>
                        <a href='#' onClick={() => setMenuOpen(false)}>About Us</a>
                    </li>
                    <li>
                        <a href='#footer' onClick={() => setMenuOpen(false)}>Contacts</a>
                    </li>
                </ul>
            </nav>
            <div className="nav__icons">
                <HiShoppingCart className='nav-icon'/>
                <HiSearch className='nav-icon'/>
            </div>
        </>
    )
}

export default Header
