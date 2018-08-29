import React, { Component } from 'react';
import '../styles/Header.css';
import Menu from "./Menu.js";
import { Link } from 'react-router-dom'

class Header extends Component {
  constructor(props){
    super(props);

    this.state = {
      imgSrc: "bistandlogo-blanc.png"
    };
    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.handleMouseOut = this.handleMouseOut.bind(this);


  }


  handleMouseOver() {
    this.setState({
      imgSrc: 'bistandlogo-red.png'
    });
  }

  handleMouseOut() {
    this.setState({
      imgSrc: 'bistandlogo-blanc.png'
    });
  }
  render() {
    return (
      <div className="Header">
        <header className="header">

          <Link to='/' >
            <img src={require(`../images/abakus_logo_white.png`)} />
          </Link>
          <img
            onMouseOver={this.handleMouseOver}
            onMouseOut= {this.handleMouseOut}
            src={require(`../images/${this.state.imgSrc}`)}
          />
          
          <Link to='/meny'>
            <img src={require(`../images/menu.png`)} />
          </Link>
        </header>
      </div>

    );
  }
}

export default Header;
