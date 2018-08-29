import React, { Component } from 'react';
import '../styles/App.css';
import Header from './Header';
import Profiles from './Profiles';
import ReleaseContent from './ReleaseContent';
class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Profiles />
      </div>

    );
  }
}

export default App;
