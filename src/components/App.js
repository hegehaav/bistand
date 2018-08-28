import React, { Component } from 'react';
import '../styles/App.css';
import Header from './Header';
import ReleaseContent from './ReleaseContent';
class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <ReleaseContent />
      </div>

    );
  }
}

export default App;
