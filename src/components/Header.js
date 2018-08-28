import React, { Component } from 'react';
import '../styles/Header.css';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <header className="header">
          <img src={require("../images/bistandlogo.png")}/>
        </header>
      </div>

    );
  }
}

export default Header;
