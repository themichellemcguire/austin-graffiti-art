import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.module.css';

const NavBar = (props) => {
  let nav = props.user ?
    <div className='NavBar mb-5'>
      <Link to='' className='NavBar-link' onClick={props.handleLogout}>LOG OUT</Link>
    </div>
    :
    <div className='NavBar'>
      <Link to='/login' className='NavBar-link'>ADMIN LOG IN</Link>
    </div>;

  return (
    <div className='NavBar mb-5'>
      <nav className="navbar fixed-top navbar-light bg-light">
      {nav}
      <header className="header-footer">Austin Graffiti Art</header>
      </nav>
      {props.children}
    </div>
  );
};

export default NavBar;