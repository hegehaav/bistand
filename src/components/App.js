import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom'
import '../styles/App.css';

import Header from './Header';
import Profiles from './Profiles';
import Home from './Home';
import Main from './Main';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {posts: [
      { id: 2, date:"Mandag 23.06.18 Kl 12.34", type: "CHAT"},
      { id: 1, date:"Mandag 23.06.18 Kl 12.34", type: "CLIP"}

    ]}
  }
  render() {

    return (

      <div>
        <Header/>
        <Main/>
        
      </div>

    );
  }
}

export default App;
