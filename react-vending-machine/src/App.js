import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import  VendingMachine from './JS/VendingMachine';
import Chips from './JS/Chips';
import Sardines from './JS/Sardines';
import Soda from './JS/Soda'
import NavBar from './JS/NavBar'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <NavBar />
          <Switch>
            <Route exact path='/' render={() => <VendingMachine />} />
            <Route exact path='/chips' render={() => <Chips />} />
            <Route exact path='/soda' render={() => <Soda />} />
            <Route exact path='/sardines' render={() => <Sardines />} />
          </Switch>
        </Router>
      </div> 
    );
  }
}

export default App;