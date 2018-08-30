import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import '../styles/Menu.css';

class Menu extends Component {
  componentDidMount() {
        window.scrollTo(0, 0);
  }

  render(){
    return(
      <div className="menu">
        <div className="close-icon">
          <Link to='/' className="menu-button"><img src={require('../images/close_menu.png')}/></Link>
        </div>

        <div className="menu">
          <Link className="menu-item" to='/'>
            <img src={require('../images/header_first_page.png')}/>
          </Link>
          <Link className="menu-item" to='/profiler'>
            <img src={require('../images/header_profiles.png')}/>
          </Link>
          <Link className="menu-item" to='/om'>
            <img src={require('../images/header_about.png')}/>
          </Link>
        </div>
      </div>
    );
  }

}
export default Menu;
