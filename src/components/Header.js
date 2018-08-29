import React, { Component } from 'react';
import '../styles/Header.css';
import Menu from "./Menu.js";

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
          <img
            onMouseOver={this.handleMouseOver}
            onMouseOut= {this.handleMouseOut}
            src={require(`../images/${this.state.imgSrc}`)}
          />
        </header>
      </div>

    );
  }
}

export default Header;
