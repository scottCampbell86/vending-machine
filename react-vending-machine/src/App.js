import React, { Component } from 'react';
import  VendingMachine from './JS/VendingMachine';
import './App.css';
import Chips from './JS/Chips';
import Sardines from './JS/Sardines';
import Soda from './JS/Soda'

class App extends Component {
  render() {
    return (
      <div className="App">
        <VendingMachine />
          <Chips />
          <Soda />
          <Sardines />
      </div> 
    );
  }
}

export default App;