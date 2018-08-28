import React, { Component } from 'react';
import '../styles/ReleaseContent.css';

class ReleaseContent extends Component {
  render() {
    return (
      <div className="content">
        <img className="image" src={require('../images/info.png')}/>
      </div>
    );
  }
}

export default ReleaseContent;
