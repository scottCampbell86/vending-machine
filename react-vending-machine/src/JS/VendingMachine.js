import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
// import Chips from './JS/Chips';
// import Sardines from './JS/Sardines';
// import Soda from './JS/Soda'
import '../CSS/VendingMachine.css'


class VendingMachine extends Component {
  render() {
    return (
      <div>
        <h1>What Up!</h1>
        <h3>this is a REACT *demo* vending machine</h3>
        <h4>what would you like?</h4>
        <div>
          <section className="LINKS">
            <h4>
              <Link to='/soda'>Soda</Link></h4>
            <h4>
              <Link to='/Chips'>Chips</Link></h4>
            <h4>
              <Link to='/sardines'>Sardines</Link></h4>
          </section>
        </div>
       
          
      </div>
    );
  }
}

export default VendingMachine;