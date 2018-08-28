import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import ReleaseContent from './components/ReleaseContent';
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
