import React, { Component } from 'react'
import './App.css'
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Main from './module/main'
import Login from './login'
import 'semantic-ui-css/semantic.min.css'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Login} />
          <Route path='/home' component={Main} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App
