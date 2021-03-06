import React, { Component } from "react";
import Books from "./components/pages/Books"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav"
import Saved from "./components/pages/Saved"

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Switch>
            <Route exact path='/' component={Books} />
            <Route exact path='/books' component={Saved} />
            <Route exact path='/books/:id' component={Saved} />
          </Switch>
        </div>
      </Router>

    )
  }
}

export default App;
