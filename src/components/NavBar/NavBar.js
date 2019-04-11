import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.module.css';

const NavBar = (props) => {
  let nav = props.user ?
    <div className='NavBar'>
      <Link to='' className='NavBar-link' onClick={props.handleLogout}>LOG OUT</Link>
    </div>
    :
    <div className='NavBar'>
      <Link to='/login' className='NavBar-link'>ADMIN LOG IN</Link>
    </div>;

  return (
    <div className='NavBar'>
      <nav class="navbar fixed-top navbar-light bg-light">
      {nav}
      </nav>
    </div>
  );
};

export default NavBar;