import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import Entrar from './pages/Entrar'


function Routes() {
  return(
    <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/entrar" exact component={Entrar}/>
    </Switch>
  )
}

export default Routes
