import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home.js';
import Menu from './Menu.js';
import Profiles from './Profiles.js';
import About from './About.js';

const Main = () => (
  <main>
    <Switch>
      <Route  exact path='/' component={Home}/>
      <Route exact path='/meny' component={Menu}/>
      <Route exact path='/profiler' component={Profiles}/>
      <Route exact path='/om' component={About}/>

    </Switch>
  </main>
)

export default Main
