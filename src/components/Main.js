import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home.js'
import Profiles from './Profiles.js'

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/profiler' component={Profiles}/>
    </Switch>
  </main>
)

export default Main
