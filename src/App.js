import React, { Component } from "react"
import { Route, Switch } from "react-router-dom"

import Header from "./components/Header"
import Home from "./screen/Home"
import History from "./screen/History"
import End from "./screen/End"

import "./App.css"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/history" component={History} />
          <Route path="/end" component={End} />
        </Switch>
      </div>
    )
  }
}

export default App