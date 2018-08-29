import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import '../styles/Menu.css';

const Menu = () => (
  <div className="menu">
    <div className="close-icon">
      <Link to='/' className="menu-button"><img src={require('../images/close_menu.png')}/></Link>
    </div>

    <div className="menu">
      <Link className="menu-item" to='/'>Fordise</Link>
      <Link className="menu-item" to='/profiler'>Profiler</Link>
      <Link className="menu-item" to='/om'>Om</Link>
    </div>
  </div>
)

export default Menu;
